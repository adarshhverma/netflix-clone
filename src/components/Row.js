import axios from '../util/axios';
import React, { useEffect, useState } from 'react'
import '../style/Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'
import Modal from 'react-modal'

const base_url = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            // console.log('req:',request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    const opts = {
        height: '675',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) =>{
        if(trailerUrl){
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.title || movie?.name || movie?.original_name || '')
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch((error) => console.log(error))
        }
    }


    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className='row__posters'>
                {movies.map(movie => (
                    <img
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}` }
                    src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name} />
                ))}
            </div>
            <Modal className='popup' isOpen={trailerUrl} onRequestClose={() =>{setTrailerUrl('')}}>
                        <YouTube videoId={trailerUrl} opts={opts} />
            </Modal>
            
        </div>
    )
}

export default Row;
