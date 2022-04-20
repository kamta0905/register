import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Navbar, Col, Image, Button, NavLink, Dropdown, Container, Nav, NavDropdown } from "react-bootstrap";

function NavigationBar() {
  const { user, signout } = useAuth();
  const navigate = useNavigate();

  console.log(user);

  const handleLogout = () => {
    signout();
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="fixed-top" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">WOOF</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/home">
                Home
              </Link>

              <NavLink className="nav-link" to="/setting">
                Setting
              </NavLink>
            </Nav>

            <Nav>
              <Col className="d-flex">
                <Image
                  className="d-flex rounded-circle mt-1"
                  width={30}
                  height="30px"
                  src="https://picsum.photos/200/300/?blur"
                />
                <NavDropdown className="mx-2" align="end" title="Dropdown end" id="dropdown-menu-align-end">
                  <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Something</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                  <Dropdown.Divider />

                  <Link className="dropdown-item text-danger" to="/">
                    {user && (
                      <Button variant="danger" onClick={handleLogout}>
                        Logout
                      </Button>
                    )}
                  </Link>
                </NavDropdown>
              </Col>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <ul>
				<li>
					<Link to="/home">Home</Link>
				</li>
				<li>
					<Link to="/setting">Setting</Link>
				</li>
			</ul>

			{user && <button onClick={handleLogout}>Logout</button>} */}
    </>
  );
}

export default NavigationBar;
