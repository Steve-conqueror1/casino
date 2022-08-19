import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import { AddGame, Admin, Game, Home } from './pages';
import { Header } from './components';

function App() {
  return (
    <Router>
      <Header />
      <Container className="App" sx={{ height: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:id" element={<Game />} />
          <Route path="/addGame" element={<AddGame />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
