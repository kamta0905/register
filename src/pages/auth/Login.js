import React, { useState } from "react";
import { Form, Card, Row, Col, Button, Container } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const Login = () => {
  const navigation = useNavigate();
  let auth = useAuth();

  let { from } = navigation.state || { from: { pathname: "/" } };
  const login = (event) => {
    event.preventDefault();
    auth.signin(() => {
      navigation(from);
    });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container className="d-flex mt-3 justify-content-center" fluid>
      <Card className="w-50 shadow-lg p-3 mb-5 bg-body rounded">
        <h2 className="text-center mt-3">Login</h2>
        <Col className="d-flex justify-content-center">
          <Form>
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
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
              />
            </Form.Group>
            <Button onClick={login} variant="primary" className="mt-3 mb-5" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Card>
    </Container>
  );
};

export default Login;
