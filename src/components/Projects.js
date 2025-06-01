import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "./assets/img/CT4.jpg";
import projImg2 from "./assets/img/Home_page.jpg";
import projImg3 from "./assets/img/project.jpg";
import projImg4 from "./assets/img/project5.jpg";
import projImg5 from "./assets/img/project55.png";
import projImg6 from "./assets/img/pacman.jpg";
import colorSharp2 from "./assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
  {
    title: "E-Commerce (Shopping Website)",
    description: "Mern Stack Development",
    imgUrl: projImg2,
  },
  {
    title: "Student Management System",
    description: "Mern Stack Development",
    imgUrl: projImg1,
  },
  {
    title: "Wheather Dashboard",
    description: "Web Development - HTML, CSS, JavaScript",
    imgUrl: projImg3,
  },
  {
    title: "Sukoon Website",
    description: "Web Development - HTML, CSS, JavaScript",
    imgUrl: projImg4,
  },
  {
    title: "Restaurant Webpage",
    description: "Web Development - HTML, CSS, JavaScript",
    imgUrl: projImg5,
  },
  {
    title: "To Do list",
    description: "Web Development - HTML, CSS, JavaScript",
    imgUrl: projImg6,
  },
];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Built full-stack MERN applications like an eCommerce site with authentication, a Student Management System, and an AI voice sentiment analyzer. Skilled in responsive UI design, RESTful APIs, database management, and cloud computing.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {/*<Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>*/}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <p>Click the GitHub button to view these projects and explore more on my GitHub profile.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}