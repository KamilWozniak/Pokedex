import React from 'react';
import './App.scss';
import { Container } from 'reactstrap';
import Header from '../Header';
import Search from '../Search';
import Select from '../Select';
import PokemonList from '../PokemonList';
import Pagination from '../Pagination';
import Modal from '../Modal';
import Footer from '../Footer';

function App() {
  return (
    <React.Fragment>
      <Container className="p-5">
        <Header />
        <Search />
        <Select />
        <PokemonList />
        <Pagination />
      </Container>
      <Footer />
      <Modal />
    </React.Fragment>
  );
}

export default App;
