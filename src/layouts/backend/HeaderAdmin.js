import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function HeaderAdmin() {
  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">ADMIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/admin/product">Sản phẩm</Nav.Link>
            <Nav.Link href="/admin/category">Danh mục</Nav.Link>
            <Nav.Link href="#oder">Đơn hàng</Nav.Link>
            <Nav.Link href="#user">Người dùng</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default HeaderAdmin;
