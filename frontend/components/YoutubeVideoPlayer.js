import React from 'react'
import ReactPlayer from 'react-player/youtube'
function YoutubeVideoPlayer() {
  return (
    <div className=''>
      <ReactPlayer
       url="https://www.youtube.com/watch?v=TsEMuvXnnpc"
      height="600px"
      width="100%"
      />
    </div>
  )
}

export default YoutubeVideoPlayer