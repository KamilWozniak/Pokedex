import React from 'react';
import './App.scss';
import { Container } from 'reactstrap';
import Header from '../Header';

function App() {
  return (
    <Container className="p-5">
      <Header />
    </Container>
  );
}

export default App;
