import React from 'react'
import ReactPlayer from 'react-player/youtube'
function YoutubeVideoPlayer(props) {
  const { id, playing } = props;
  const url = `https://www.youtube.com/watch?v=${id}`;
  return (
    <div className=''>
      <ReactPlayer
       url={url}
       playing={playing}
      height="600px"
      width="100%"
      />
    </div>
  )
}

export default YoutubeVideoPlayer