import React from 'react';
import './App.scss';
import { Container } from 'reactstrap';
import Header from '../Header';
import Search from '../Search';

function App() {
  return (
    <Container className="p-5">
      <Header />
      <Search />
    </Container>
  );
}

export default App;
