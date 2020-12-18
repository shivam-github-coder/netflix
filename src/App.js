import React from 'react';
import './App.css';
import Row from './Row'
import Requests from './Requests'
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
     <Nav />
     <Banner />
     <Row title="NETFLIX ORIGINALS" fetchurl={Requests.fetchNetflixOriginals} isLargeRow/>
     <Row title="Trending Now" fetchurl={Requests.fetchTrending} />
     <Row title="Top Rated" fetchurl={Requests.fetchTopRated} />
     <Row title="Action Movies" fetchurl={Requests.fetchActionMovies} />
     <Row title="Comedy Movies" fetchurl={Requests.fetchComedyMovies} />
     <Row title="Horror Movies" fetchurl={Requests.fetchHorrorMovies} />
     <Row title="Romance Movies" fetchurl={Requests.fetchRomanceMovies} />
     <Row title="Documentaries" fetchurl={Requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
