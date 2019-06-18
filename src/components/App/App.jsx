import React from 'react';
import './App.scss';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header';
import Search from '../Search';
import Select from '../Select';
import PokemonList from '../PokemonList';
import Pagination from '../Pagination';
import Modal from '../Modal';
import Footer from '../Footer';
import { POKEMON_LIST_URL } from '../../URLs';

function App() {
  return (
    <Router>
      <div className="body-min-height">
        <Container className="p-xs-1 p-sm-4 pb-0 mb-0">
          <Header />
          <Search />
          <Select />
        </Container>
        <Container fluid className="px-xs-1 px-sm-4 mt-0 mb-5 pt-0">
          <Route path={`${POKEMON_LIST_URL}`} component={PokemonList} />
          <Pagination />
        </Container>
      </div>
      <Footer />
      <Modal />
    </Router>
  );
}

export default App;
