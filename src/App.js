import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Info from './pages/Info';
import Artisan from './pages/Artisan';
import Feira from './pages/Feira';   
import Apoio from './pages/Apoio';   
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/artisan/:id" element={<Artisan />} />
            <Route path="/feira" element={<Feira />} />     {}
            <Route path="/apoio" element={<Apoio />} />     {}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
