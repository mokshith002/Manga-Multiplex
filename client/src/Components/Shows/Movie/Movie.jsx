import React, { useEffect, useState } from "react";
import "./Movie.css";
import "../../../nicepage.css";
import img1 from "../../../Images/FAsVc4FUcAYxfAe.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

export default function Movie() {

    const O_URL = process.env.REACT_APP_OMDB_URL;
    const O_KEY = process.env.REACT_APP_OMDB_KEY;
    const S_URL = process.env.REACT_APP_SERVER;

    const history = useHistory();

 
    const [details, setDetails] = useState({
      name: '',
      cast: [],
      shows: [],
      plot: '',
      poster: ''
    })

    const {movieId} = useParams();

    const loadData = async (_movieName) => {
      const res = await axios.get(`${O_URL}/?t=${_movieName}&apikey=${O_KEY}`);
      setDetails((prev) => ({
        ...prev,
        poster: res.data.Poster,
        plot: res.data.Plot,
        cast: res.data.Actors
      }))
    }

    useEffect(() => {}, [details]);

    const getMovieData = async () => {
      const res = await axios.get(`${S_URL}/movie/${movieId}`);
      const shows = await axios.get(`${S_URL}/show/timings/${movieId}`);
      setDetails((prev) => ({
        ...prev,
        name: res.data.moviename,
        shows: shows.data
      }))
      const _moviename = res.data.moviename;
      loadData(_moviename.split(' ').join('+'));
    }

    useEffect(() => {
      getMovieData();
    },[]);

    const handleClick = (id) => {
      localStorage.setItem('moviePoster', details.poster);
      window.location.href = `http://localhost:3000/booking?showId=${id}`;
    }

    const timings = details.shows.map((_show) => {
      return <Link className="_ind-time" onClick={() => {handleClick(_show.showid)}}>{_show.starttime}</Link>
    })



    return (
      <>
        <body className="u-body u-xl-mode">
          <section
            className="u-align-center u-clearfix u-palette-3-light-1 u-section-10"
            id="carousel_0bfa"
          >
            <div className="u-clearfix u-sheet u-sheet-1 _movie-container">
              <h1 className="u-text u-text-1">
                {details.name} <br />
              </h1>
              <img
                className="u-image u-image-1"
                src={details.poster}
                width="720"
                height="900"
              />
              <div className="u-shape u-shape-svg u-text-palette-3-light-2 u-shape-1">
                <svg
                  className="u-svg-link _svg-container"
                  preserveAspectRatio="none"
                  viewBox="0 0 160 160"
                >
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#svg-7d53"
                  ></use>
                </svg>
                <svg
                  className="u-svg-content"
                  viewBox="0 0 160 160"
                  x="0px"
                  y="0px"
                  id="svg-7d53"
                  style={{ enableBackground: "new 0 0 160 160" }}
                >
                  <path
                    d="M10.3,39.9c-18.2,24.9-9.2,62.5,4,87.4c8.2,15.4,23,36.1,48.6,32.2c5.8-0.9,11.1-3.2,16.9-4.3c17.8-3.4,37.9,4.7,54.5-1.5
	c6.6-2.5,11.6-6.9,15.5-11.8c12.2-15.3,13.7-35.6,3.8-51.9c-6.9-11.5-19-20.9-23.6-33.1c-4.5-11.9-1.4-24.9-4.7-37.1
	C121.1,5,103.7-5.6,85.7,3.1c-6.8,3.3-12.6,7.7-20,10.2C58,15.9,49.5,16.6,41.6,19C26.8,23.6,16.7,31,10.3,39.9z"
                  ></path>
                </svg>
              </div>
              <div className="_text-container">
                <h3 className="u-text u-text-2">About The Movie</h3>
                <p className="u-text u-text-3">
                  {" "}
                  {details.plot}
                </p>
                <h3 className="u-text u-text-4">Cast</h3>
                <p className="u-text u-text-5">
                  {" "}
                  {details.cast}
                </p>
              </div>
              <div className="_timing-container">
                <p className="u-align-left u-large-text u-text u-text-variant u-text-6">
                  Timings:
                </p>
                <div className="_show-timings-whole">
                  <div className="_part1">{timings}</div>
                </div>
              </div>
            </div>
          </section>
        </body>
      </>
    );
}