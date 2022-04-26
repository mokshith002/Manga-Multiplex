import React from 'react';
// import "./nicepage.css";
import "./Home.css";
import asss_min from "../../Images/asss-min.jpg";
import {BrowserRouter, Link} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App(){


    return(
        <>
            
  <body
    data-home-page="Home.html"
    data-home-page-title="Home"
    className="u-body u-xl-mode"
  >
    
    <section
      className="u-clearfix u-image u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-section-0"
      id="carousel_95b8"
      data-image-width="1980"
      data-image-height="1320"
    >
      <div className="u-clearfix u-layout-wrap u-layout-wrap-1">
        <div className="u-layout">
          <div className="u-layout-row">
            <div
              className="u-container-style u-image u-layout-cell u-right-cell u-size-34 u-image-1"
              data-image-width="1200"
              data-image-height="800"
            >
              <div className="u-container-layout u-container-layout-1"></div>
            </div>
            <div
              className="u-align-left u-container-style u-layout-cell u-left-cell u-size-26 u-layout-cell-2"
            >
              <div
                className="u-container-layout u-valign-middle u-container-layout-2"
              >
                <div
                  className="u-border-6 u-border-white u-line u-line-horizontal u-line-1"
                ></div>
                <h1
                  className="u-custom-font u-font-raleway u-text u-text-body-alt-color u-title u-text-1"
                >
                  Book Your Show
                </h1>
                <p className="u-text u-text-body-alt-color u-text-2">
                  Want to watch a movie, book your ticket in the nearest
                  theatre..
                </p>
                <a
                  href="Seat-Booking.html"
                  data-page-id="678306798"
                  className="u-active-palette-3-base u-btn u-button-style u-hover-palette-3-base u-white u-btn-1"
                  >BOOK NOW</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="u-clearfix u-grey-15 u-valign-middle-lg u-valign-middle-sm u-valign-middle-xs u-section-2"
      id="sec-de8f"
    >
      <div
        className="u-expanded-width u-shape u-shape-rectangle u-white u-shape-1"
      ></div>
      <div
        className="u-palette-3-base u-radius-50 u-shape u-shape-round u-shape-2"
      ></div>
      <img
        src={asss_min}
        className="u-align-left u-image u-image-round u-radius-50 u-image-1"
        data-image-width="1200"
        data-image-height="800"
      />
      <div
        className="u-align-left u-container-style u-group u-radius-50 u-shape-round u-similar-fill u-white u-group-1"
      >
        <div className="u-container-layout u-padding-12 u-container-layout-1">
          <h2
            className="u-custom-font u-font-oswald u-text u-text-palette-3-base u-text-1"
          >
            GET READY FOR EXPERIENCE
          </h2>
          <p className="u-text u-text-2">
            Get ready to be amused by our wide range of shows and theatres. Book
            your ticket in under 5 minutes. With more than 1000+ combinations
            pick what suits you.
          </p>
          <a
            href="https://nicepage.com/wordpress-themes"
            className="u-active-palette-3-dark-3 u-btn u-btn-round u-button-style u-hover-palette-3-dark-3 u-palette-3-base u-radius-50 u-btn-1"
            target="_blank"
            >LOGIN</a
          >
        </div>
      </div>
    </section>

    <footer
      className="u-align-center u-clearfix u-footer u-grey-80 u-footer"
      id="sec-f729"
    >
      <div className="u-clearfix u-sheet u-sheet-1">
        <p className="u-small-text u-text u-text-variant u-text-1">
          Manga Multiplex at your service since 2022.
        </p>
      </div>
    </footer>
  </body>
        </>
    )
}