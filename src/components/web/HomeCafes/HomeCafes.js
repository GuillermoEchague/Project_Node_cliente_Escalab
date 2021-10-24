import React from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import cafe1 from "../../../assets/img/jpg/coffe-1.jpg";
import cafe2 from "../../../assets/img/jpg/coffe-2.jpg";
import cafe3 from "../../../assets/img/jpg/coffe-3.jpg";
import cafe4 from "../../../assets/img/jpg/coffe-4.jpg";
import cafe5 from "../../../assets/img/jpg/coffe-5.jpg";
import cafe6 from "../../../assets/img/jpg/coffe-6.jpg";

import "./HomeCafes.scss";

export default function HomeCourses() {
  return (
    <Row className="home-courses">
      <Col lg={24} className="home-courses__title">
        <h2>Aprende y mejora tus preparaciones</h2>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={cafe1}
              title="Proceso del Café"
              subtitle="Básico - Molienda del Café"
              
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={cafe2}
              title="Capuchino"
              subtitle="Básico - Capuchino"
              
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={cafe3}
              title="Flat White"
              subtitle="Intermedio - Flat White"
              
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={cafe4}
              title="Expresso"
              subtitle="Básico - Expresso"
              
            />
          </Col>
        </Row>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={cafe5}
              title="Latte"
              subtitle="Básico - Latte"
              
            />
          </Col>
          <Col md={6} />
          <Col md={6} />
          <Col md={6}>
            <CardCourse
              image={cafe6}
              title="Latte Art"
              subtitle="Intermedio - Latte art"
              
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
      <Col lg={24} className="home-courses__more">
        <Link to="/admin">
          <Button>Ver más</Button>
        </Link>
      </Col>
    </Row>
  );
}

function CardCourse(props) {
  const { image, title, subtitle, link } = props;
  const { Meta } = Card;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card
        className="home-courses__card"
        cover={<img src={image} alt={title} />}
        
      >
        <Meta title={title} description={subtitle} />
      </Card>
    </a>
  );
}