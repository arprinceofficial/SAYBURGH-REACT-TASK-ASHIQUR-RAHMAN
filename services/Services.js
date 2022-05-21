import axios from 'axios';
//---------------------Start Create Api Shorthand ---------------------

const ApiUrl = 'https://api.themoviedb.org/3';
const ApiKey = 'api_key=8c247ea0b4b56ed2ff7d41c9a833aa77';

//---------------------End Create Api Shorthand ---------------------


// --------------------- Start Collecting Api For All Movies ---------------------

// Get Upcoming Movies
export const getUpComingMovies = async () => {
  const response = await axios.get(
    `${ApiUrl}/movie/upcoming?${ApiKey}`
  );
    return response.data.results;
};

// Get Popular Movies
export const getPopularMovies = async () => {
  const response = await axios.get(
    `${ApiUrl}/movie/popular?${ApiKey}`
  );
//   console.log(JSON.stringify(response.data.results[0], null, 2));
    return response.data.results;
};


// Get Popular TV Shows
export const getPopularTv = async () => {
  const response = await axios.get(
    `${ApiUrl}/tv/popular?${ApiKey}`
  );
    return response.data.results;
};

// Get Family Movies
export const getFamilyMovies = async () => {
  const response = await axios.get(
    `${ApiUrl}/discover/movie?${ApiKey}&with_genres=10751`
  );
    return response.data.results;
};

// Get Documentary
export const getDocumentaryMovies = async () => {
  const response = await axios.get(
    `${ApiUrl}/discover/movie?${ApiKey}&with_genres=99`
  );
    return response.data.results;
};


// --------------------- End Collecting Api For All Movies ---------------------