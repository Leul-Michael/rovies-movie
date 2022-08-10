import "./list.scss";
import { AiFillStar } from "react-icons/ai";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { useRef } from "react";
import { Link } from "react-router-dom";

export const POSTER_URL_W500 = "https://image.tmdb.org/t/p/w500";

const List = ({ title, slides, type }) => {
  const sliderRef = useRef(null);
  const slideRef = useRef(null);

  const slideLeft = (e) => {
    e.preventDefault();
    let slideIndex = parseInt(
      window
        .getComputedStyle(sliderRef.current)
        .getPropertyValue("--slide-index")
    );
    if (slideIndex > 0) {
      slideIndex -= 1;
      sliderRef.current.style.setProperty("--slide-index", slideIndex);
    }
  };

  const slideRight = (e) => {
    e.preventDefault();
    const totalSlides = sliderRef.current.children.length;
    let slideIndex = parseInt(
      window
        .getComputedStyle(sliderRef.current)
        .getPropertyValue("--slide-index")
    );
    const slidesPerScreen = parseInt(
      window
        .getComputedStyle(sliderRef.current)
        .getPropertyValue("--slide-per-screen")
    );
    if (slideIndex < Math.ceil(totalSlides / slidesPerScreen) - 1) {
      slideIndex += 1;
      sliderRef.current.style.setProperty("--slide-index", slideIndex);
    }
  };

  if (
    slides === undefined ||
    slides === null ||
    slides.length === 0 ||
    slides.length === undefined
  ) {
    return <p className="loading">loading...</p>;
  }

  return (
    <div className="list">
      <div className="list-header container">
        <h1 className="list-title">{title}</h1>
        {type ? (
          <Link to={`/${type}`}>
            <button className="btn btn-more">view all</button>
          </Link>
        ) : null}
      </div>
      <div className="slider-container container">
        <button onClick={slideLeft} className="btn btn-slide left">
          <MdOutlineArrowBackIosNew />
        </button>
        <div className="slider" ref={sliderRef}>
          {slides.map((slide) => (
            <div className="slide" key={slide.id} ref={slideRef}>
              <img src={`${POSTER_URL_W500}${slide.poster_path}`} alt="" />
              <div className="description">
                <div>
                  <p className="rating">
                    <span className="icon">
                      <AiFillStar />
                    </span>
                    {slide.vote_average}
                  </p>
                  <h4 className="title">
                    {slide.original_title || slide.original_name}
                  </h4>
                  {slide.media_type ? (
                    <p className="genre">
                      <span>Genre:</span>
                      {slide.media_type}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={slideRight} className="btn btn-slide right">
          <MdOutlineArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default List;
