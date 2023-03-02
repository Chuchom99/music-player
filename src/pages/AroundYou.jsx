import {useState, useEffect} from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";

import {Error, Loader, SongCard} from "../components"
import { useGetSongByCountryQuery } from '../redux/services/shazamCore';

const AroundYou = () => {
    const [country, setCountry] = useState("");
    const [loading, setLoading] = useState(true);
    const {activeSong, isPlaying} =useSelector((state) => state.player);
    const {data, isFetching, error} = useGetSongByCountryQuery(country)


    console.log(country);

    useEffect(() => {
        axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_eiIzyFIK4Ez3pJMs8o86FM6mekudR`)
          .then((res) => setCountry(res?.data?.location?.country))
          .catch((err) => console.log(err))
          .finally(() => setLoading(false))
        // at_eiIzyFIK4Ez3pJMs8o86FM6mekudR
    }, [country])

    if (isFetching && loading) return <Loader title="Loading songs" />
    if (error && country) return <Error />
return(
<div className='flex flex-col' >
  <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10' >Around you <span>{country}</span> </h2>

  <div className='flex flex-wrap sm:justify-star justify-center gap-8' >
    {data?.map((song, i) => (
        <SongCard
         key={song.key}
         song={song}
         isPlaying={isPlaying}
         activeSong={activeSong}
         data={data}
         i={i}

        />
    ))}
  </div>

</div>
);
}
export default AroundYou;
