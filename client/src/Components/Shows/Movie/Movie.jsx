import React from "react";
import "./Movie.css";
import "../../../nicepage.css";
import img1 from "../../../Images/FAsVc4FUcAYxfAe.jpg";
import { Link } from "react-router-dom";

export default function App() {


    const timings = [
      <Link
        className="_ind-time"
      >
        10:30 AM
      </Link>,

      <Link
        className="_ind-time">
        13:30 AM
      </Link>
    ];

    return (
      <>
        <body className="u-body u-xl-mode">
          <section
            className="u-align-center u-clearfix u-palette-3-light-1 u-section-10"
            id="carousel_0bfa"
          >
            <div className="u-clearfix u-sheet u-sheet-1 _movie-container">
              <h1 className="u-text u-text-1">
                RRR <br />
              </h1>
              <img
                className="u-image u-image-1"
                src={img1}
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
                  A tale of two legendary revolutionaries and their journey far
                  away from home. After their journey they return home to start
                  fighting back against British colonialists in the 1920s.
                </p>
                <h3 className="u-text u-text-4">Cast</h3>
                <p className="u-text u-text-5">
                  {" "}
                  The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn,
                  Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison
                  Doody, and Olivia Morris.
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