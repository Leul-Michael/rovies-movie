import "./hero.scss";
import { AiFillStar, AiOutlinePlus } from "react-icons/ai";
import { BsPlay } from "react-icons/bs";

export const POSTER_URL_ORIGINAL = "https://image.tmdb.org/t/p/original";

const Hero = ({ data, id, classN }) => {
  return (
    <div
      key={id}
      className={`hero ${classN ? classN : null}`}
      style={{
        background: `url(${POSTER_URL_ORIGINAL}${data.poster_path}) no-repeat center center / cover`,
      }}
    >
      <div className="container">
        <div className="details">
          <h1 className="movie-title">
            {data.original_name || data.original_title}
          </h1>
          <div className="flex">
            <p>
              <span className="mute">Genre:</span> {data.media_type}
            </p>
            <p className="rating">
              <span className="icon">
                <AiFillStar />
              </span>
              {data.vote_average} | <span>{data.vote_count}</span>
            </p>
            <p>{data.release_date ? data.release_date : data.first_air_date}</p>
          </div>
          <p>
            {data.overview ? data.overview.substring(0, 200) : data.overview}
          </p>
          <div className="buttons">
            <button className="btn btn-hero">
              <span className="icon">
                <BsPlay />
              </span>
              Play show
            </button>
            <button className="btn btn-hero btn-light">
              <span className="icon">
                <AiOutlinePlus />
              </span>
              My List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
