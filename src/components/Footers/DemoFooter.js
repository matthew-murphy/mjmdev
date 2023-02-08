import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

class DemoFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer">
          <Container>
            <Row>
              <Col md="3">
                <h1 className="title">MJM | Webdev</h1>
              </Col>
            </Row> 
          </Container>
        </footer>
      </>
    );
  }
}

export default DemoFooter;
