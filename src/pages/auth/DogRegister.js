import React, { useState } from "react";
import { Col, Card, Button, Form, Container } from "react-bootstrap";
const DogRegister = () => {
  const [dogname, setDogname] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [sex, setSex] = useState("");

  return (
    <Container className="d-flex mt-3 justify-content-center" fluid>
      <Card className="col-5 shadow-lg p-3 mb-5 bg-body rounded ">
        <h2 className="mt-3 text-center">Dog Profile</h2>
        <Col className="d-flex mt-3 justify-content-center">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Dog Name</Form.Label>
              <Form.Control
                type="text"
                value={dogname}
                onChange={(e) => setDogname(e.target.value)}
                placeholder="Dog Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Breed</Form.Label>
              <Form.Control type="text" value={breed} onChange={(e) => setBreed(e.target.value)} placeholder="Breed" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
            </Form.Group>
            <Form.Label>Sex</Form.Label>

            <Form.Select value={sex} onChange={(e) => setSex(e.target.value)} aria-label="Default select example">
              <option value="1">Male</option>
              <option value="2">Female</option>
            </Form.Select>
            <Form.Group className="mt-3">
              <Form.Label>Dog Pic</Form.Label>
              <Form.Control type="file" placeholder="profile" />
            </Form.Group>

            <Button variant="primary" className="mt-3 mb-4" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Card>
    </Container>
  );
};

export default DogRegister;
