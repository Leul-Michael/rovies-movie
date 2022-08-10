import { POSTER_URL_W500 } from "../../components/List/List";
import "./trending.scss";
import { AiFillStar } from "react-icons/ai";
import Pagination from "../../components/Pagination/Pagination";

const Trending = ({ title, movies, setPage }) => {
  if (movies.results === undefined || movies.results === null)
    return <p className="loading">loading...</p>;
  else {
    if (movies.results.length === 0 || movies.results.length === undefined) {
      return <p className="loading">loading...</p>;
    }
  }

  return (
    <div className="trending container">
      <h1 className="trending-title">{title}</h1>
      <div className="trending-grid">
        {movies.results.map((movie) => (
          <div key={movie.id} className="movie">
            <img src={`${POSTER_URL_W500}${movie.poster_path}`} alt="" />
            <div className="description">
              <div className="flex">
                <p className="rating">
                  <span className="icon">
                    <AiFillStar />
                  </span>
                  {movie.vote_average}
                </p>
                {movie.media_type ? (
                  <p className="genre">
                    <span>Genre:</span>
                    {movie.media_type}
                  </p>
                ) : null}
              </div>
              <h4 className="title">
                {movie.original_title || movie.original_name}
              </h4>
              <p className="overview">
                {movie.overview.length > 100
                  ? `${movie.overview.substring(0, 100)}...`
                  : movie.overview}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Pagination pages={movies.total_pages} setPage={setPage} />
    </div>
  );
};

export default Trending;
