import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import "./home.scss";
import List from "../../components/List/List";

export const API_URL = "https://api.themoviedb.org/3";
export const API_KEY = process.env.REACT_APP_API_KEY;

const Home = () => {
  const [hero, setHero] = useState(null);
  const [trendingMovies, setTrendingMovies] = useState({});
  const [trendingSeries, setTrendingSeries] = useState({});
  const [freaturedToday, setFreaturedToday] = useState({});
  const [upcoming, setUpcoming] = useState({});
  const [latestMovie, setLatestMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get(`${API_URL}/trending/movie/day`, {
        params: {
          api_key: API_KEY,
        },
      });
      setHero(data.results[0]);
      setTrendingMovies(data.results.slice(1, 13));
    };
    fetchMovies();
    const fetchSeries = async () => {
      const { data } = await axios.get(`${API_URL}/trending/tv/day`, {
        params: {
          api_key: API_KEY,
        },
      });
      setTrendingSeries(data.results.slice(0, 12));
    };
    fetchSeries();
    const getUpcoming = async () => {
      const { data } = await axios.get(`${API_URL}/movie/upcoming`, {
        params: {
          api_key: API_KEY,
        },
      });
      setUpcoming(data.results.slice(0, 12));
    };
    getUpcoming();
    const featured = async () => {
      const { data } = await axios.get(`${API_URL}/tv/airing_today`, {
        params: {
          api_key: API_KEY,
        },
      });
      setFreaturedToday(data.results.slice(0, 12));
    };
    featured();
    const getLatest = async () => {
      const { data } = await axios.get(`${API_URL}/tv/155537`, {
        params: {
          api_key: API_KEY,
        },
      });
      setLatestMovie(data);
    };
    getLatest();
  }, [
    setHero,
    setTrendingMovies,
    setTrendingSeries,
    setUpcoming,
    setLatestMovie,
  ]);

  if (
    hero === undefined ||
    hero === null ||
    latestMovie === undefined ||
    latestMovie === null
  ) {
    return <p className="loading">loading...</p>;
  }

  return (
    <>
      <Hero data={hero} id={1} />
      <List
        key={1}
        type="trending"
        title="Trending Movies"
        slides={trendingMovies}
      />
      <List
        key={2}
        type="tv_shows"
        title="Trending Tv Shows"
        slides={trendingSeries}
      />
      <List key={3} type="upcoming" title="Upcoming" slides={upcoming} />
      <List key={4} title="Featured Today" slides={freaturedToday} />
      <Hero data={latestMovie} id={2} classN="mb-5" />
      {/* <section style={{ height: "100vh" }}></section> */}
    </>
  );
};

export default Home;
