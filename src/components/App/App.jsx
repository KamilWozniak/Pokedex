import React from 'react';
import './App.scss';
import { Container } from 'reactstrap';
import Header from '../Header';
import Search from '../Search';
import Select from '../Select';

function App() {
  return (
    <Container className="p-5">
      <Header />
      <Search />
      <Select />
    </Container>
  );
}

export default App;
