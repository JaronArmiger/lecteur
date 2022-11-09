import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components'
import { setActiveSong, playPause } from '../redux/features/playerSlice'
import { 
  useGetArtistDetailsQuery, 
} from '../redux/services/shazamCore'

const ArtistDetails = () => {
  const { artistid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { 
    data: artistData, 
    isFetching: isFetchingArtistDetails,
    error
  } = useGetArtistDetailsQuery(artistid)

  if (isFetchingArtistDetails) return <Loader title="Loading artist details"/>

  if (error) return <Error />

  return (
    <div className='flex flex-col'>
      <DetailsHeader 
        artistId={artistid}
        artistData={artistData}
      />
      <RelatedSongs 
        data={Object.values(artistData?.songs)}
        artistId={artistid}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
);
}

export default ArtistDetails;
