import { 
  FiPauseCircle, 
  FiPlayCircle 
} from 'react-icons/fi'

const PlayPause = ({ 
  isPlaying, 
  activeSong, 
  song, 
  handlePause, 
  handlePlay 
}) => (isPlaying && activeSong?.title === song.title ? (
  <FiPauseCircle 
    size={25}
    className='text-gray-400'
    onClick={handlePause}
  />
 ) : (
  <FiPlayCircle 
    size={25}
    className='text-gray-400'
    onClick={handlePlay}
  />
 ));

export default PlayPause;
