import React from "react";
import "./Profile.css";

export default function App() {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta name="keywords" content="About Us" />
        <meta name="description" content="" />
        <meta
          name="page_type"
          content="np-template-header-footer-from-plugin"
        />
        <title>Home</title>
        <link rel="stylesheet" href="nicepage.css" media="screen" />
        <link rel="stylesheet" href="Home.css" media="screen" />
        <link
          id="u-theme-google-font"
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i"
        />
        <link
          id="u-page-google-font"
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
        />
        <meta name="theme-color" content="#478ac9" />
        <meta property="og:title" content="Home" />
        <meta property="og:type" content="website" />
        <section
          className="u-clearfix u-palette-3-light-2 u-section-1"
          id="carousel_f9a1"
        >
          <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-palette-3-base u-shape u-shape-circle u-shape-1" />
            <div
              alt=""
              className="u-align-left u-image u-image-circle u-image-1"
              data-image-width={733}
              data-image-height={711}
            />
            <div className="u-expanded-width-xs u-list u-list-1">
              <div className="u-repeater u-repeater-1">
                <div className="u-align-center u-container-style u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-1">
                  <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-1">
                    <p className="u-text u-text-default u-text-grey-60 u-text-1">
                      TICKETS SOLD
                    </p>
                    <h3
                      className="u-custom-font u-font-montserrat u-text u-text-default u-text-palette-1-base u-text-2"
                      data-animation-name="counter"
                      data-animation-event="scroll"
                      data-animation-duration={3000}
                      style={{ willChange: "contents" }}
                    >
                      20
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-list u-list-2">
              <div className="u-repeater u-repeater-2">
                <div className="u-align-center u-container-style u-list-item u-radius-15 u-repeater-item u-shape-round u-white u-list-item-2">
                  <div className="u-container-layout u-similar-container u-container-layout-2">
                    <span className="u-border-2 u-border-palette-3-light-1 u-file-icon u-icon u-icon-circle u-palette-2-light-3 u-spacing-27 u-icon-1">
                      <img src="images/6592963.png" alt="" />
                    </span>
                    <h5 className="u-custom-font u-font-raleway u-text u-text-default u-text-3">
                      Details
                    </h5>
                    <p className="u-text u-text-palette-2-dark-2 u-text-4">
                      NAME:
                      <br />
                      CONTACT NO:
                    </p>
                  </div>
                </div>
                <div className="u-align-center u-container-style u-list-item u-radius-15 u-repeater-item u-shape-round u-white u-list-item-3">
                  <div className="u-container-layout u-similar-container u-container-layout-3">
                    <span className="u-border-2 u-border-palette-3-light-1 u-file-icon u-icon u-icon-circle u-palette-2-light-3 u-spacing-27 u-icon-2">
                      <img src="images/2232688.png" alt="" />
                    </span>
                    <h5 className="u-custom-font u-font-raleway u-text u-text-default u-text-5">
                      EDUCATIoN
                    </h5>
                    <p className="u-text u-text-palette-2-dark-2 u-text-6">
                      Sample text. Click to select the text box.
                    </p>
                  </div>
                </div>
                <div className="u-align-center u-container-style u-list-item u-radius-15 u-repeater-item u-shape-round u-white u-list-item-4">
                  <div className="u-container-layout u-similar-container u-container-layout-4">
                    <span className="u-border-2 u-border-palette-3-light-1 u-file-icon u-icon u-icon-circle u-palette-2-light-3 u-spacing-27 u-icon-3">
                      <img src="images/681392.png" alt="" />
                    </span>
                    <h5 className="u-custom-font u-font-raleway u-text u-text-default u-text-7">
                      ROLE
                    </h5>
                    <p className="u-text u-text-palette-2-dark-2 u-text-8">
                      {" "}
                      Sample text. Click to select the text box.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".u-disable-duration * {transition-duration: 0s !important;}",
          }}
        />
      </>
    );
}