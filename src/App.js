import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Menu from './pages/Menu';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import { useState, useContext, createContext } from 'react';

export const AppContext = createContext();

function App() {


  const [username, setUsername] = useState("Bilal");

  return (
    <div className="App">
      <AppContext.Provider value={{username, setUsername}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu/>} />
            <Route
              path="/contact-us"
              element={<ContactUs/>}
            />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
