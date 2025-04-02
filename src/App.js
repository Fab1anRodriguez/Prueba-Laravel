import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header.jsx';
import Family from './pages/Family.jsx';
import Home from './pages/Home.jsx';
import Campeones from './pages/Campeones.jsx';
import History from './pages/History.jsx';
import Footer from './pages/footer.jsx';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/History" element={<History />} />
            <Route path='/Family' element={<Family />} />
            <Route path="/Campeones" element={<Campeones />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;