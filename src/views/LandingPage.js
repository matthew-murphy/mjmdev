import React, { useEffect, useState, useRef } from "react";
// react plugin used to create charts
import ContactForm from "components/contact";
import { analytics } from "firebaseConfig";

// reactstrap components
import {
  Badge,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

import ColorNavbar from "components/Navbars/ColorNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import PortfolioCard from "components/Cards/PorfolioCard";
import '../assets/img/ibp.png';

export default function LandingPage() {
  const wrapper = useRef();

  useEffect(() => {
    // log page view
    analytics.logEvent("page_view", {
      page_title: "Landing Page",
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("landing-page");
    return () => {
      document.body.classList.remove("landing-page");
    };
  }, []);

  const openInNewTab = (url) => {
    let win = window.open(url, "_blank");
    win.focus();
  };

  return (
    <>
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>
        <div className="page-header">
          <div className="squares square1" />
          <div className="squares square2" />
          <div className="squares square3" />
          <div className="squares square4" />
          <div className="squares square5" />
          <div className="squares square6" />
          <div className="squares square7" />
          <Container>
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6">
                <h1 className="text-white">
                  Keep your business <br />
                  <span className="text-white">modern</span>
                </h1>
                <p className="text-white mb-3">
                  Having a web presence is essential to any successful
                  business strategy.
                  <br />
                  Luckily a developer can provide that, contact me today for a
                  free consultation.
                </p>
                <a
                  className="btn-link"
                  color="success"
                  href="#contact-link"
                  size="sm"
                >
                  <p className="category text-success d-inline">Contact me</p>
                  <i className="tim-icons icon-minimal-right" />
                </a>
                <Row style={{ paddingLeft: '15px', paddingTop: '15px', gap: '8px'}}>
                <div className="btn-wrapper">
                  <div className="button-container">
                    <Button
                      className="btn-icon btn-simple btn-round mr-1"
                      color="neutral"
                      onClick={(e) =>
                        openInNewTab(
                          "https://www.linkedin.com/in/matthew-murphy-8354a0a3"
                        )
                      }
                    >
                      <i className="fab fa-linkedin" />
                    </Button>
                  </div>
                </div>
              {/* add github icon */}
              <div className="btn-wrapper">
                <div className="button-container">
                  <Button
                    className="btn-icon btn-simple btn-round mr-1"
                    color="neutral"
                    onClick={(e) =>
                      openInNewTab(
                        "https://github.com/matthew-murphy"
                      )
                    }
                  >
                    <i className="fab fa-github" />
                  </Button>
                </div>
              </div>
              </Row>
              </Col>
            </Row>
          </Container>
        </div>

        <section className="section">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <div className="features-6">
          <Container>
            <Row className="row-grid justify-content-between">
              <Col lg="6">
              <div>
                  <h2 className="text-white">
                    About <br />
                    Me
                  </h2>
                  <p>
                    I am a mobile and web developer. I create websites and apps to improve
                    the way information is shared.
                  </p>
                  <br />
                  <p>
                    I have a passion for creating websites and apps that are easy to use and look great. I
                    specialize in React and React Native, but I am always learning new
                    technologies.
                  </p>
                  <br />
                  {/* <h2 className="text-white">
                    My <br />
                    Skills
                  </h2> */}
                  <p>
                    <Badge color="info" className="ml-1">React</Badge>
                    <Badge color="info" className="ml-1">React Native</Badge>
                    <Badge color="info" className="ml-1">EXPO ClI</Badge>
                    <Badge color="info" className="ml-1">Git</Badge>
                    <Badge color="info" className="ml-1">JavaScript</Badge>
                    <Badge color="info" className="ml-1">HTML</Badge>
                    <Badge color="info" className="ml-1">CSS</Badge>
                    <Badge color="info" className="ml-1">SASS</Badge>
                    <Badge color="info" className="ml-1">PHP</Badge>
                    <Badge color="info" className="ml-1">Laravel</Badge>
                    <Badge color="info" className="ml-1">NodeJs</Badge>
                    <Badge color="info" className="ml-1">Firebase</Badge>
                    <Badge color="info" className="ml-1">GCP</Badge>
                    <Badge color="info" className="ml-1">MySql</Badge>
                    <Badge color="info" className="ml-1">Wordpress</Badge>
                  </p>

                </div>
              </Col>
              <Col lg="6">
              <img
                alt="..."
                className="shape"
                src={require("assets/img/path2.png")}
              />
              <figure className="ie-non-standard-hero-shape">
                <svg
                  className="injected-svg js-svg-injector"
                  style={{ enableBackground: "new 10 12 878.9 907" }}
                  viewBox="10 12 878.9 907"
                  x="0px"
                  y="0px"
                  xmlSpace="preserve"
                >
                  <g>
                    <defs>
                      <path
                        d="M329.15,403.44c30.22-62,26.51-223.94,94.06-268.46C479,98.23,560.16,257,700.68,151.61c71.25-53.44,85.54,81,160.38,172.6C1008.5,504.74,881.5,639.14,825.35,686.6c-62.54,52.85-246.14,24.42-386.7,79.28S214.07,834,202.07,702C190.39,573.57,288.69,486.43,329.15,403.44Z"
                        id="firstShape"
                      />
                    </defs>
                    <clipPath id="secondShape">
                      <use
                        style={{ overflow: "visible" }}
                        xlinkHref="#firstShape"
                      />
                    </clipPath>
                    <g clipPath="url(#secondShape)">
                      <image
                        height="900"
                        id="imageShape1"
                        style={{ overflow: "visible" }}
                        transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                        width="900"
                        xlinkHref={require("assets/img/max.jpg")}
                      />
                    </g>
                  </g>
                  <g>
                    <defs>
                      <path
                        d="M337.17,855.62c-7.81-35.46,42.38-43.95,63.66-52.44,24.39-9.74,135.86-48,192.58-52.52,64.22-5.13,190.21-26.84,160.46,35.34-19.76,41.3-51.47,64.52-87.63,62.33-46.36-2.81-101.56,4.39-150.8,44C448.53,946.08,450.93,865,412,868,372.28,871,340.79,872.08,337.17,855.62Z"
                        id="thirdShape"
                      />
                    </defs>
                    <clipPath id="fourthShape">
                      <use
                        style={{ overflow: "visible" }}
                        xlinkHref="#thirdShape"
                      />
                    </clipPath>
                    <g
                      clipPath="url(#fourthShape)"
                      transform="matrix(1 0 0 1 0 0)"
                    >
                      <image
                        height="1000"
                        id="imageShape2"
                        style={{ overflow: "visible" }}
                        transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                        width="900"
                        xlinkHref={require("assets/img/max.jpg")}
                      />
                    </g>
                  </g>
                </svg>
              </figure>
            </Col>
            </Row>
          </Container>
          </div>
        </section>

        <section className="section">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path5.png")}
          />
          <img
            alt="..."
            className="path3"
            src={require("assets/img/path2.png")}
          />
          <Container>
            <Row className="row-grid justify-content-center" style={{gap: '30px'}}>
              <Col lg="12">
                <h2 className="text-white" style={{marginBottom: '0px'}}>My Work</h2>
              </Col>
              <Col md="12">
                  <PortfolioCard
                    name="Ibpblogger"
                    title="ibpBlogger"
                    description="IbpBlogger.com is a blog built with Wordpress for a local client."
                    src={require("assets/img/ibp.png")}
                    site="https://ibpblogger.com"
                  />
              </Col>
              <Col md="12">
              <PortfolioCard
                    name="Natare"
                    title="Natare"
                    description="Natare.com is a custom made corporate website built with Wordpress and PHP."
                    src={require("assets/img/natare.png")}
                    site="https://natare.com"
                  />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section section-lg pt-lg-0 mt--200">
          <section className="section">
            <Container id="contact-link">
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid justify-content-center">
                    <Col lg="12">
                      <h2 className="text-white">
                        Let's talk about your next project
                      </h2>
                      <p className="lead text-white" style={{marginBottom: '30px'}}>
                        I'm always looking for new opportunities to work on
                        interesting projects. If you have a project you'd like to
                        discuss, please get in touch.
                      </p>
                      <ContactForm />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
       
      </div>
      <div>
        <DemoFooter />
      </div>
    </>
  );
}