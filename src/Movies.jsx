import { useEffect } from 'react'

const Movies = () => {

    const getMovie = async () => {
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyAW6OGjDAcfScpdCGpjQxm0vNFOnME_Tu8")

        const json = await data.json();
        
    }

    useEffect(()=>{

        getMovie();

    },[])


  return (
    <div>Movies</div>
  )
}

export default Movies