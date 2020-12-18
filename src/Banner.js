import React,{useEffect,useState} from 'react'
import axios from './axios';
import requests from './Requests';
import './css/Banner.css';

function Banner() {
    const [movie,setmovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchActionMovies);
            setmovie(request.data.results[Math.floor(Math.random() * request.data.results.length -1)]);
            return request;
        }
        fetchData();
    }, [])

    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }

    return (
        <header className="Banner" 
        style={{backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition:"center center",

        }}>
        <div className="Banner_content">
        <h1 className="Banner_title">{movie ?.title || movie?.name || movie?.original_name}</h1>
        <div>
            <button className="Banner_button" >Play</button>
            <button className="Banner_button" >My List</button>
        </div>
            <h1 className="Banner_description">
            {truncate(movie?.overview , 150)}

            </h1>
        </div>
            <div className="Banner--fadeBottom"  />
        </header>
    )
}

export default Banner
