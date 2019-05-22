import React from 'react';
import './App.scss';
import { Container } from 'reactstrap';
import Header from '../Header';
import Search from '../Search';
import Select from '../Select';
import PokemonList from '../PokemonList';

function App() {
  return (
    <Container className="p-5">
      <Header />
      <Search />
      <Select />
      <PokemonList />
    </Container>
  );
}

export default App;
