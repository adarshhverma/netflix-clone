import React, { useState, useEffect } from 'react'
import axios from '../util/axios'
import requests from '../util/requests'
import '../style/Banner.css'
import Modal from 'react-modal'
import Credit from './Credit'

function Banner() {

    const [movie, setMovie] = useState([]);
    const [modalShow, setModelShow] = useState(false);

    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length-1)]);
            return request;
        }
        fetchData();
    }, [])

    // console.log(movie)

    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + '...' : str;
    }


    return (
        <header className='banner'
        style={{
            backgroundSize: 'cover',
            backgroundImage: `url(
                'https://image.tmdb.org/t/p/original/${movie?.backdrop_path}'
            )`,
            backgroundPosition: 'center center',
        }}
        >
            <div className='banner__contents'>
                <h1 className='banner__title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className='banner__buttons'>
                    <button className='banner__button' onClick={()=>setModelShow(true)}>Play</button>
                    <button className='banner__button'>My List</button>
                </div>

                <h1 className='banner__description'>
                    {truncate(movie?.overview,150)}
                </h1>
            
            </div>

            <div className='banner__fadeBottom' />
            <Modal className='popup' isOpen={modalShow} onRequestClose={() =>{setModelShow(false)}}>
                <div className='popup__text'>
                    <h2>This is Netflix Clone!!!</h2>
                    <h3>Visit official website for latest movies and tv shows...</h3>
                </div>
            </Modal>

          

        </header>
    )
}

export default Banner
