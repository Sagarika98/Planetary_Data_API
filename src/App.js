// import logo from './logo.svg';
// import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PlanetList from './components/PlanetList';
import PlanetDetail from './components/PlanetDetail';
import Footer from './components/Footer';
import './App.css';


function App() {
  //const [selectedPlanet, setSelectedPlanet] = useState(null);
  return (
  <>
  <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<PlanetList />} />
        <Route path="/planet/:planetName" element={<PlanetDetail />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
