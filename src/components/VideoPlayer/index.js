import ReactPlayer from 'react-player'

import './index.css'

const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer url="https://www.youtube.com/watch?v=H8r_WqDjWaM&list=RDH8r_WqDjWaM&start_radio=1" />
    </div>
  </div>
)

export default VideoPlayer
