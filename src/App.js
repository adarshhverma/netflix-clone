import React from 'react';
import './App.css';
import Row from './components/Row';
import requests from './util/requests';
import Banner from './components/Banner';
import Nav from './components/Nav'
import Credit from './components/Credit';

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
