const {Movies} = require("../modals/stepDbSchema");

const getAllMovies = async () => {
  // logic for get all movies
  console.log("getAllMovies");
  const movies = await Movies.find();
  return movies;
  console.log("getAllMovies");
};

const getMovieById = async (movieId) => {
  // logic to get movie by id
  const movie = await Movies.findById({movieId:movieId});
  console.log("getMovieById");
};

const getMovieByGenre = async (genre) => {
  // logic to get movie by id
  const movie = await Movies.find({genre:genre});
  console.log("getMovieByGenre");
};

const createMovie = async (movieParam) => {
  // logic to get movie by id
  const {movieId, movieName, genre, favorite, rating, moviePlot} = movieParam;
  const movie = new Movies ({
    movieId,
    movieName,
    genre,
    favorite,
    rating,
    moviePlot,
  });
  console.log("createMovie");
  const newMovie = await movie.save();
  return newMovie;
};

const updateMovie = async (movieId, data) => {
  // logic to get movie by id
  console.log("updateMovie");
  const movieUpdated = await Movies.updateOne({movieId:movieId},data);
  return movieUpdated;
};

const deleteMovie = async (movieId) => {
  // logic to get movie by id
  console.log("deleteMovie");
  const deleteMovie = await Movies.deleteOne({movieId:movieId});
  return deleteMovie;
};

module.exports = {
  getAllMovies,
  getMovieById,
  getMovieByGenre,
  createMovie,
  updateMovie,
  deleteMovie,
};
