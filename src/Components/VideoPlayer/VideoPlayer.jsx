import  { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/college-video.mp4.mp4'

const VideoPlayer = ({playState ,setPlayState}) => {
   const Player = useRef(null);

 const closePlayer =(e)=>{
  if(e.target === Player.current){
     setPlayState(false);
  }
 }

  return (
    <div className={`Video-Player ${playState ? '' : 'hide'}`} ref={Player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer;
