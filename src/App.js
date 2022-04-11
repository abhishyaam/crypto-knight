import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components/macro';
import HeaderContainer from './containers/HeaderContainer';
import HomePage from './pages/HomePage';
import CoinPage from './pages/CoinDetails';
import './App.css';

const Container = styled.div`
  background-image: url('assets/bg.jpg');
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
  color: #ffffffaf;
  padding: 0.5em;
`;
export default function App() {
  return (
    <Container>
      <HeaderContainer />
      <Router>
        <Route path='/'>
          <HomePage />
        </Route>
        <Route path='/coins/c' component={CoinPage}>
          <CoinPage />
        </Route>
      </Router>
    </Container>
  );
}
