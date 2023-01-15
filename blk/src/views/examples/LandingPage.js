import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Typography, CardContent, Chip, CardActions } from "@material-ui/core";
// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import PortfolioCard from "../../components/Cards/PorfolioCard";
import { chartExample1 } from "variables/charts.js";
import TagsInput from "react-tagsinput";
import { Link } from "react-router-dom";

class LandingPage extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    document.body.classList.add("landing-page");
    // document.body.classList.add("index-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("landing-page");
    // document.body.classList.remove("index-page");
  }
  render() {
    const openInNewTab = (url) => {
      let win = window.open(url, "_blank");
      win.focus();
    };
    return (
      <>
        <ColorNavbar />
        <div className="wrapper" ref="wrapper">
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
                <Col lg="6" md="8">
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
                    href="mailto:matthewmrph40@gmail.com"
                    size="sm"
                  >
                    <p className="category text-success d-inline">Contact me</p>
                    <i className="tim-icons icon-minimal-right" />
                  </a>
                  <div className="btn-wrapper mb-3">
                  </div>
                  <div className="btn-wrapper">
                    <div className="button-container">
                      <Button
                        className="btn-icon btn-simple btn-round mr-1"
                        color="neutral"
                        // href="https://www.linkedin.com/in/matthew-murphy-8354a0a3"
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
                </Col>
              </Row>
            </Container>
          </div>
          <section className="section section-lg">
            <section className="section">
              <img
                alt="..."
                className="path"
                src={require("assets/img/path4.png")}
              />
              <Container>
                <Row className="row-grid justify-content-between">
                  <Col className="mt-lg-5" md="5">
                    <img
                      style={{ marginBottom: "25px" }}
                      alt="..."
                      className="indy"
                      src={require("assets/img/site_pic.jpg")}
                    />
                  </Col>
                  <Col md="6">
                    <div className="pl-md-5" style={{ paddingTop: "30%" }}>
                      <h1>
                        About <br />
                        Me
                      </h1>
                      <p>
                        I am a developer. I create websites and apps to improve
                        the way information is shared.
                      </p>
                      <br />
                      <p>
                        I'm from Charleston, SC and currently live in
                        Indianapolis, IN. I enjoy podcasts and gaming in my
                        spare time.
                      </p>
                      <br />
                      <p></p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </section>
          <section className="section section-lg">
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
              <Row className="justify-content-center">
                <Col lg="12">
                  <h1 className="text-center">Projects</h1>
                  <Row className="row-grid justify-content-center">
                    {/* <Col lg="3">
                      <PortfolioCard
                        name="Package-in-Transit"
                        src={require("../../assets/img/trackapp.png")}
                        description="Track your UPS package's estimated delivery date: "
                        techs={
                          <section>
                            <Badge className="ml-1" color="info" pill>
                              React
                            </Badge>
                            <Badge className="ml-1" color="info" pill>
                              Node
                            </Badge>
                            <Badge className="ml-1" color="info" pill>
                              Express
                            </Badge>
                            <Badge className="ml-1" color="info" pill>
                              Javascript
                            </Badge>
                          </section>
                        }
                        site="https://package-in-transit.web.app/Dashboard"
                        repo="https://github.com/matthew-murphy/track-app"
                      />
                    </Col> */}
                    <Col lg="3">
                      <PortfolioCard
                        name="Trivia App"
                        src={require("../../assets/img/tandem.png")}
                        description="Trivia game: "
                        techs={
                          <section>
                            <Badge className="ml-1" color="info" pill>
                              HTML5
                            </Badge>
                            <Badge className="ml-1" color="info" pill>
                              CSS3
                            </Badge>
                            <Badge className="ml-1" color="info" pill>
                              JavaScript
                            </Badge>
                            <Badge className="ml-1" color="info" pill>
                              React
                            </Badge>
                          </section>
                        }
                        site="https://tandemtrivia.web.app/Trivia"
                        repo="https://github.com/matthew-murphy/tandem"
                      />
                    </Col>
                    <Col lg="3">
                      <Card variant="elevation">
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            IbpBlogger.com
                          </Typography>

                          <img
                            src={require("../../assets/img/ibp.png")}
                            classes="icon-1"
                            alt="html5-icon"
                          />
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            A blog solution for a client that wants to market
                            themselves as an integrated business planning
                            professional. 
                          </Typography>
                          <section>
                            <Badge className="ml-1" color="info" pill>
                              WordPress
                            </Badge>
                            <Badge className="ml-1" color="info" pill>
                              CSS3
                            </Badge>
                          </section>
                        </CardContent>
                        <CardActions>
                          <Button
                            onClick={(e) =>
                              openInNewTab("https://ibpblogger.com")
                            }
                            variant="outlined"
                            size="small"
                            color="secondary"
                          >
                            Site
                          </Button>
                        </CardActions>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="row-grid justify-content-center">
                    {/* <Col lg="3">
                      <PortfolioCard
                        //name, src, description, techs, site, repo
                        name="Leafy"
                        src={require("../../assets/img/leafy1.png")}
                        description="A social media site: "
                        techs={
                          <section>
                            <Badge className="ml-1" color="info" pill>
                              HTML5
                            </Badge>
                            <Badge className="ml-1" color="info" pill>
                              CSS3
                            </Badge>
                            <Badge className="ml-1" color="info" pill>
                              React
                            </Badge>
                            <Badge className="ml-1" color="info" pill>
                              Redux
                            </Badge>
                            <Badge className="ml-1" color="info" pill>
                              Heroku
                            </Badge>
                            <Badge className="ml-1" color="info" pill>
                              Axios
                            </Badge>
                          </section>
                        }
                        site="https://fair-theater-274920.web.app/"
                        repo="https://gitlab.com/matthewmurphy/kwitter-clone/-/tree/master"
                      />
                    </Col> */}
                    <Col lg="3">
                      <PortfolioCard
                        name="List App"
                        src={require("../../assets/img/todoapp.png")}
                        description="Create a list of text to keep track of tasks: "
                        techs={
                          <section>
                            <Badge className="ml-1" color="info" pill>
                              HTML5
                            </Badge>
                            <Badge className="ml-1" color="info" pill>
                              CSS3
                            </Badge>
                            <Badge className="ml-1" color="info" pill>
                              JavaScript
                            </Badge>
                            <Badge className="ml-1" color="info" pill>
                              React
                            </Badge>
                            <Badge className="ml-1" color="info" pill>
                              Redux
                            </Badge>
                          </section>
                        }
                        site="https://my-demo-59886.web.app/"
                        repo="https://gitlab.com/matthewmurphy/todo-app-pt3/-/tree/master"
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <DemoFooter />
        </div>
      </>
    );
  }
}

export default LandingPage;
