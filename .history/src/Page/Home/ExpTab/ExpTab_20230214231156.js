import "./_exp-tab.scss";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

export const ExpTab = () => {
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
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
          <Col sm={9} style={{ marginTop: "10px" }} className="tab-content">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <ol className="list-unstyled">
                  <h6>
                    {" "}
                    Frontend Developer @{" "}
                    <a href="#" target="_blank" className="link-alteration">
                      {" "}
                      SwitchApp Technologies
                    </a>
                  </h6>{" "}
                  <br />
                  <li>
                    {" "}
                    Collaborated in a team of six developers to build the
                    frontend of SwitchApp; A payment gateway aggregator.
                  </li>{" "}
                  <li>
                    Responsible for writing the unit texts for the application
                    using jest and react testing library
                  </li>{" "}
                  <li>
                    Work with a variety of different languages, platforms,
                    frameworks, and content management systems such as
                    JavaScript, TypeScript, React, React Testing Library, Carbon
                    Design System
                  </li>{" "}
                  <li>
                    Responsible for collating daily updates of team work flow
                    and progress
                  </li>{" "}
                  <li>
                    Communicate with multi-disciplinary teams of engineers,
                    designers, producers, and clients on a daily basis
                  </li>{" "}
                  <li>
                    Write modern, performant, maintainable and reusuable code
                    for a diverse array of client and internal projects
                  </li>
                </ol>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <ol className="list-unstyled">
                  {" "}
                  <h6>
                    Intern @{" "}
                    <a href="#" target="_blank" className="link-alteration">
                      Educare Technology Solutions{" "}
                    </a>
                  </h6>
                  <br />
                  <li>
                    Responsible for building official websites for our numerous
                    clients around the world
                  </li>
                  <li>
                    Responsible for building official websites for our numerous
                    clients around the world
                  </li>
                  <li>
                    Responsible for building official websites for our numerous
                    clients around the world
                  </li>
                  <li>
                    Responsible for building official websites for our numerous
                    clients around the world
                  </li>
                </ol>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};
