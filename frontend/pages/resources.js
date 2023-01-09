import React from 'react'
import ResourcesMain from '../components/resources/ResourcesMain'
import Image from 'next/image'
import YoutubeVideoPlayer from '../components/YoutubeVideoPlayer'
import { useState } from 'react'
import Footer from '../components/reusable/Footer'


const scrollTop = () =>{
  window.scrollTo({top: 300, behavior: 'smooth'});
};
export default function resources({ results }) {
  const[currentVideo, setCurrentVideo] = useState(results[0]);
  const[playing, setPlaying] = useState(false);
  return (
    <div>
        <ResourcesMain/>
        <YoutubeVideoPlayer
            id={currentVideo.snippet.resourceId.videoId}
            playing={playing}
          />

<div className="pb-20 pt-20 lg:pl-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results &&
            results.map((video) => {
              return (
                <div
                  key={video.id}
                  className="max-w-sm rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src={
                      video.snippet.thumbnails.maxres?.url ||
                      'https://via.placeholder.com/300'
                    }
                    layout="intrinsic"
                    width={1280}
                    height={720}
                    alt={video.snippet.title}
                    className="w-full"
                    />
                    <h5 className="font-bold text-xl mb-2">
                    {video.snippet.title}
                    </h5>
                    <div className="text-center">
                    <button
                    onClick={() => {
                    setCurrentVideo(video);
                    setPlaying(true);
                    scrollTop();
                    }}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                    Watch Now
                    </button>
                    </div>
                    </div>
                    );
                    })}
                    </div>
                    <Footer/>
    </div>
  )
}
export async function getStaticProps() {
  const MY_PLAYLIST = process.env.YOUTUBE_PLAYLIST_ID;
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const REQUEST_URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${MY_PLAYLIST}&key=${API_KEY}&maxResults=60`;
  const response = await fetch(REQUEST_URL);
  const results = await response.json();

  return {
    props: { results: results.items },
    revalidate: 10,
  };
}
