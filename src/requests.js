const API_KEY = '1b77580aba8043bd833b70755472dc40';

const requests = {
    fetchTrending:          `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:  `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:          `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:      `/discover/movie?api_key=${API_KEY}&With_genres=28`,
    fetchComedyMovies:      `/discover/movie?api_key=${API_KEY}&With_genres=35`,
    fetchHorrorMovies:      `/discover/movie?api_key=${API_KEY}&With_genres=27`,
    fetchRomanceMovies:     `/discover/movie?api_key=${API_KEY}&With_genres=10749`,
    fetchDocumentaries:     `/discover/movie?api_key=${API_KEY}&With_genres=99`,
}

export default requests;