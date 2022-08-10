import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home, { API_KEY, API_URL } from "./pages/Home/Home";
import Trending from "./pages/Trending/Trending";
import { useEffect, useState } from "react";
import axios from "axios";

export const MOVIE_APP_LS_PREFIX = "movie-app";

function App() {
  const [trending, setTrending] = useState({});
  const [allMovies, setAllMovies] = useState({});
  const [allTvs, setAllTvs] = useState({});
  const [upcomings, setUpcomings] = useState({});
  const [trendingPage, setTrendingPage] = useState(1);
  const [showsPage, setShowsPage] = useState(1);
  const [moviesPage, setMoviesPage] = useState(1);
  const [upcomingPage, setUpcomingPage] = useState(1);

  function checkLimit(page, func) {
    if (page <= 1) func(1);
    if (page >= 10) func(10);
  }

  useEffect(() => {
    checkLimit(trendingPage, setTrendingPage);
    const getTrending = async () => {
      const { data } = await axios.get(`${API_URL}/trending/all/day`, {
        params: {
          api_key: API_KEY,
          page: trendingPage,
        },
      });
      setTrending(data);
    };
    getTrending();
    const getAllMovies = async () => {
      const { data } = await axios.get(`${API_URL}/movie/popular`, {
        params: {
          api_key: API_KEY,
          page: moviesPage,
        },
      });
      setAllMovies(data);
    };
    getAllMovies();
    const getAllShows = async () => {
      const { data } = await axios.get(`${API_URL}/tv/popular`, {
        params: {
          api_key: API_KEY,
          page: showsPage,
        },
      });
      setAllTvs(data);
    };
    getAllShows();
    const getUpcoming = async () => {
      const { data } = await axios.get(`${API_URL}/movie/upcoming`, {
        params: {
          api_key: API_KEY,
          page: upcomingPage,
        },
      });
      setUpcomings(data);
    };
    getUpcoming();
  }, [trending, trendingPage, upcomingPage, moviesPage, showsPage]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route
            path="trending"
            element={
              <Trending
                title="Trending"
                movies={trending}
                setPage={{ page: trendingPage, setPage: setTrendingPage }}
              />
            }
          />
          <Route
            path="movies"
            element={
              <Trending
                title="Movies"
                movies={allMovies}
                setPage={{ page: moviesPage, setPage: setMoviesPage }}
              />
            }
          />
          <Route
            path="tv_shows"
            element={
              <Trending
                title="Tv Shows"
                movies={allTvs}
                setPage={{ page: showsPage, setPage: setShowsPage }}
              />
            }
          />
          <Route
            path="upcoming"
            element={
              <Trending
                title="Upcoming"
                movies={upcomings}
                setPage={{ page: upcomingPage, setPage: setUpcomingPage }}
              />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
