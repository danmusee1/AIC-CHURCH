import React from 'react'
import ReactPlayer from 'react-player/youtube'
function YoutubeVideoPlayer() {
  return (
    <div className='pt-20 pl-40'>
      <ReactPlayer
       url="https://www.youtube.com/watch?v=DuudSp4sHmg"
      />
    </div>
  )
}

export default YoutubeVideoPlayer