import React, { useEffect, useState } from "react";
import { Form, Col, Card, Tabs, Button, Tab, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import user from "../../api";
import { faker } from "@faker-js/faker";

function Register() {
  const [errorMessages, setErrorMessages] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [validation, setValidation] = useState(false);

  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setprofile] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (params) => {
    const res = await user.signUp(params);
    if (res.error) {
      if (res.message) {
        console.log("user exist");
        setValidation((value) => !value);
        setErrorMessages([res.message]);
      } else {
        setErrorMessages([res.message]);
      }
    } else {
      setErrorMessages([]);
      setShowConfirmation(true);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };
  console.log(fullName);
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("auth");
  }, []);

  const canSignUp = () => !!fullName && !!city && !!email && !!password;
  return (
    <Container className="d-flex mt-3 justify-content-center" fluid>
      <Card className="col-8 shadow-lg p-3 mb-5 bg-body rounded">
        <h2 className="text-center mt-3">Register</h2>

        <Col className="d-flex justify-content-center">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
                placeholder="Full Name"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" onChange={(e) => setCity(e.target.value)} value={city} placeholder="City" />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" onChange={(e) => setAge(e.target.value)} value={age} placeholder="Age" />
            </Form.Group>
            <Form.Label>Sex</Form.Label>

            <Form.Select aria-label="Default select example">
              <option value="1">Male</option>
              <option value="2">Female</option>
            </Form.Select>
            <Form.Group className="mb-2 mt-2">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Username"
              />
            </Form.Group>
            <Form.Group className="mb-2 mt-2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label>Profile Pic</Form.Label>
              <Form.Control type="file" placeholder="profile" />
            </Form.Group>
            <Link to="./dog">
              <Button variant="primary" className="mt-3 mb-3" type="submit">
                Next
              </Button>
            </Link>
          </Form>
        </Col>
      </Card>
    </Container>
  );
}

export default Register;
