import React, { useEffect, useState } from "react";
import "./EmpProfile.css";
import detail_png from "../../Images/6592963.png";
import educatioin_png from "../../Images/2232688.png";
import role_png from "../../Images/681392.png";
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import ManagerOnly from "../ManagerOnly";

export default function App() {

    const S_URL = process.env.REACT_APP_SERVER;

    const [authorized, setAuthorized] = useState(false);

    const history = useHistory();

    if(!localStorage.getItem('userId')){
      history.push('/login');
    }

    if(localStorage.getItem('userRole') == 'manager'){
      if(!authorized)
        setAuthorized(true);
    }

    const [details, setDetails] = useState({
        empname: '',
        role: '',
        education: '',
    });
    const [tickets, setTickets] = useState(0);

    const {id} = useParams();

    const getDetails = async () => {
        const res = await axios.get(`${S_URL}/employees/${id}`);
        setDetails(res.data);
    }

    const getTickets = async () => {
        const _res = await axios.get(`${S_URL}/ticket/tickets-sold/${id}`);
        setTickets(_res.data.count);
    }

    useEffect(() => {
        getDetails();
        getTickets();
    },[])


  return (
    <>
    {
      !authorized ? 

      (
          <div>
            <div className="_register-page">
              <div
                className="d-flex p-5 justify-content-center align-items-center"
                style={{ height: "88vh" }}
              >
                <ManagerOnly />
              </div>
            </div>
          </div>
        )
      
      :
      (
        <>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta charSet="utf-8" />
          <meta name="keywords" content="About Us" />
          <meta name="description" content="" />
          <meta name="page_type" content="np-template-header-footer-from-plugin" />
          <title>{details.empname}'s Profile</title>
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
            className="u-clearfix u-palette-3-light-2 u-section-4"
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
                        {tickets}
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
                        <img src={detail_png} alt="" />
                      </span>
                      <h5 className="u-custom-font u-font-raleway u-text u-text-default u-text-3">
                        Details
                      </h5>
                      <br />
                      <p className="u-text u-text-palette-2-dark-2 u-text-4">
                        <strong>NAME:</strong> {details.empname}
                        <br /> <br />
                        <strong>CONTACT NO:</strong> {details.contactno}
                      </p>
                    </div>
                  </div>
                  <div className="u-align-center u-container-style u-list-item u-radius-15 u-repeater-item u-shape-round u-white u-list-item-3">
                    <div className="u-container-layout u-similar-container u-container-layout-3">
                      <span className="u-border-2 u-border-palette-3-light-1 u-file-icon u-icon u-icon-circle u-palette-2-light-3 u-spacing-27 u-icon-2">
                        <img src={educatioin_png} alt="" />
                      </span>
                      <h5 className="u-custom-font u-font-raleway u-text u-text-default u-text-5">
                        EDUCATION
                      </h5>
                      <p className="u-text u-text-palette-2-dark-2 u-text-6">
                        {details.education}
                      </p>
                    </div>
                  </div>
                  <div className="u-align-center u-container-style u-list-item u-radius-15 u-repeater-item u-shape-round u-white u-list-item-4">
                    <div className="u-container-layout u-similar-container u-container-layout-4">
                      <span className="u-border-2 u-border-palette-3-light-1 u-file-icon u-icon u-icon-circle u-palette-2-light-3 u-spacing-27 u-icon-3">
                        <img src={role_png} alt="" />
                      </span>
                      <h5 className="u-custom-font u-font-raleway u-text u-text-default u-text-7">
                        ROLE
                      </h5>
                      <p className="u-text u-text-palette-2-dark-2 u-text-8">
                        {" "}
                        {details.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <style
            dangerouslySetInnerHTML={{
              __html: ".u-disable-duration * {transition-duration: 0s !important;}",
            }}
          />
        </>
      )
    }
    </>
  );
}
