import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './cookiePrompt.scss';

export default function CookiePrompt() {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (!document.cookie.split(';').filter(item => item.trim().startsWith('cookiesAgree=')).length) {
      setDisplay(true);
    }
  }, []);

  const handleClose = () => {
    setDisplay(false);
    const date = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toString();
    document.cookie = `cookiesAgree=true; expires=${date}`;
  };

  return (
    <React.Fragment>
      <div className={`${display ? 'd-xs-flex' : 'dont-display'} prompt-footer justify-content-center p-3`}>
        <Container>
          <Row>
            <Col>
              <p className="m-0 text-center align-self-center">
                <strong>
                  We use cookies to give you a better experience on our pokedex.
                  Accept cookies to fully enjoy this site.
                </strong>
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="w-100 text-center">
              <Button size="sm" color="danger" onClick={handleClose} className="text-capitalize mt-2 mb-0">accept & close</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>

  );
}
