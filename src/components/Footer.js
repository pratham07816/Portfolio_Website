import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "./assets/img/logo.jpg";
import navIcon1 from "./assets/img/nav-icon1.svg";
import Github from "./assets/img/2222.png";
import navIcon3 from "./assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/pratham-g-pawar-a71763256/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/pratham07816" target="_blank"><img src={Github} alt="" /></a>
                <a href="https://instagram.com/pratham_g_pawar16?utm_source=qr&igshid=YzU1NGVlODEzOA==" target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}