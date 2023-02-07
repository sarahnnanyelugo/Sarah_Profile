import "./_exp-tab.scss";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

export const ExpTab = () => {
  return (
    <>
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey="first"
        style={{ borderRight: "solid 1px red" }}
      >
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">SwitchApp Technologies</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">
                  Educare Technology Solutions
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <p>
                  Frontend Developer @{" "}
                  <a href="#" target="_blank" className="link-alteration">
                    SwitchApp Technologies
                  </a>
                  <small>
                    Collaborated in building the frontend of SwitchApp; A
                    payment gateway aggregator.
                    <br />
                  </small>
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <p>
                  {" "}
                  <a href="#" target="_blank" className="link-alteration">
                    Educare Technology Solutions{" "}
                  </a>
                  <small>
                    Responsible for building official websites for our numerous
                    clients around the world
                  </small>
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};
