import React,{useState,useEffect} from 'react'
import axios from './axios';
import './css/Row.css'


const baseurl = "https://image.tmdb.org/t/p/original/";

function Row({title,fetchurl,isLargeRow}) {

    const [movies,setmovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchurl);
            console.log(request);
            setmovie(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchurl]);

    console.table(movies)
    return (
        <div className="row">
            <h1>{title}</h1>

        <div className="row__posters">
        {movies.map(movie =>(
            <img key={movie.id} 
            className={`row__poster ${isLargeRow && "row_posterLarge"}`} 
            src={`${baseurl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
        ))}

        </div>

        </div>
    )
}

export default Row;
