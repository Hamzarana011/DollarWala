import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';

const About = () => {
  return (
    <div className="vh-100 " style={{backgroundColor: "coral"}}>
    <Container>
      <h1>About Us</h1>
      <Row>
        <Col>
          <h2>Our Story</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel placerat elit. Suspendisse non gravida est, quis vestibulum nulla. Maecenas posuere ante velit, quis pharetra sem finibus vel. Sed euismod sem vel est dictum, at bibendum lacus tincidunt. Integer vehicula magna vel neque ultricies, id dignissim mi consequat. Fusce dictum velit sit amet nisi interdum fringilla. Praesent commodo, dolor vitae aliquam pharetra, eros nisl dignissim massa, vel laoreet nisi sapien in dolor. Suspendisse lacinia, odio quis egestas volutpat, sapien sapien varius nulla, sed finibus lectus nulla ut ante. Sed bibendum rhoncus ex, sed suscipit libero ultrices non. Suspendisse eget lectus ex.</p>
        </Col>
        <Col>
          <h2>Our Mission</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel placerat elit. Suspendisse non gravida est, quis vestibulum nulla. Maecenas posuere ante velit, quis pharetra sem finibus vel. Sed euismod sem vel est dictum, at bibendum lacus tincidunt. Integer vehicula magna vel neque ultricies, id dignissim mi consequat. Fusce dictum velit sit amet nisi interdum fringilla. Praesent commodo, dolor vitae aliquam pharetra, eros nisl dignissim massa, vel laoreet nisi sapien in dolor. Suspendisse lacinia, odio quis egestas volutpat, sapien sapien varius nulla, sed finibus lectus nulla ut ante. Sed bibendum rhoncus ex, sed suscipit libero ultrices non. Suspendisse eget lectus ex.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Our Team</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel placerat elit. Suspendisse non gravida est, quis vestibulum nulla. Maecenas posuere ante velit, quis pharetra sem finibus vel. Sed euismod sem vel est dictum, at bibendum lacus tincidunt. Integer vehicula magna vel neque ultricies, id dignissim mi consequat. Fusce dictum velit sit amet nisi interdum fringilla. Praesent commodo, dolor vitae aliquam pharetra, eros nisl dignissim massa, vel laoreet nisi sapien in dolor. Suspendisse lacinia, odio quis egestas volutpat, sapien sapien varius nulla, sed finibus lectus nulla ut ante. Sed bibendum rhoncus ex, sed suscipit libero ultrices non. Suspendisse eget lectus ex.</p>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default About;
