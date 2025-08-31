import { useState } from "react";
import Container from "react-bootstrap/Container";
import RBNavbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const formatCLP = (n) => n.toLocaleString("es-CL");

export default function Navbar() {
  const [token, setToken] = useState(false);
  const total = 25000;

  const handleLogin = () => setToken(true);
  const handleRegister = () => setToken(true);
  const handleLogout = () => setToken(false);

  return (
    <RBNavbar expand="md" bg="light" className="border-bottom">
      <Container>
        <RBNavbar.Brand className="fw-semibold">Pizzería Mamma Mia!</RBNavbar.Brand>
        <RBNavbar.Toggle aria-controls="main-nav" />
        <RBNavbar.Collapse id="main-nav">
          <div className="ms-auto d-flex gap-2">
            <Button variant="outline-secondary" size="sm">🍕 Home</Button>

            {token ? (
              <>
                <Button variant="outline-success" size="sm">🔓 Profile</Button>
                <Button variant="outline-danger" size="sm" onClick={handleLogout}>🔒 Logout</Button>
              </>
            ) : (
              <>
                <Button variant="outline-primary" size="sm" onClick={handleLogin}>🔐 Login</Button>
                <Button variant="outline-dark" size="sm" onClick={handleRegister}>🔐 Register</Button>
              </>
            )}

            <Button variant="primary" size="sm">
              🛒 Total: ${formatCLP(total)}
            </Button>
          </div>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
}
