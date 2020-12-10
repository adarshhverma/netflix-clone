import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav'
import Credit from './Credit';

function App() {
  return (
    <div className="app">
      <Nav />
     <Banner />
     <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
     <Row title='TOP RATED' fetchUrl={requests.fetchTopRated} />
     <Row title='TRENDING NOW' fetchUrl={requests.fetchTrending} />
     <Row title='ACTION MOVIES' fetchUrl={requests.fetchActionMovies} />
     <Row title='COMEDY MOVIES' fetchUrl={requests.fetchComedyMovies} />
     <Row title='HORROR MOVIES' fetchUrl={requests.fetchHorrorMovies} />
     <Row title='ROMANTIC MOVIES' fetchUrl={requests.fetchRomanceMovies} />
     <Row title='DOCUMENTARY' fetchUrl={requests.fetchDocumentaries} />
     <Credit />

    </div>
  ); 
}
 
export default App;
