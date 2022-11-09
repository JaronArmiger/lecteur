import { useNavigate } from 'react-router-dom'

const ArtistCard = ({ track }) => {
  const navigate = useNavigate()

  return (
    <div 
      className='flex flex-col w-[250px]
         p-4 animate-slide-up rounded-lg
         cursor-pointer'
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img 
        alt='artist' 
        src={track?.images?.coverart}
        className='w-full h-56 rounded-lg'
      />
      <p className='mt-4 font-semibold text-lg text-black truncate hover:text-red-500'>
        {track?.subtitle}
      </p>
    </div>
  )
};

export default ArtistCard;
