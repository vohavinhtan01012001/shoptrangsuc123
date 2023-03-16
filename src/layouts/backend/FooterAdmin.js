import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function FooterAdmin() {
  return (
    <div>
      <footer className="bg-light text-dark">
      <Container>
        <Row>
          <Col className="text-center py-3">
            <h5>ADMIN</h5>
            <p>&copy; 2023 Hanada</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  )
}

export default FooterAdmin
