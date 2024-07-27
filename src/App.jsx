import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Contacts from './Components/Contacts';
import Items from './Components/Items';
import { changeLanguage } from 'i18next';
import { IoMdMenu } from "react-icons/io";
import { useEffect, useState } from 'react';

function App() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (isMobileMenuOpen !== false) {
      document.body.style.overflow = 'hidden';
      document.querySelector('.mobile-menu').classList.add('open');
    } else {
      document.querySelector('.mobile-menu').classList.remove('open');
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.querySelector('.mobile-menu').classList.remove('open');
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const doChanges = (value) => {
    setMobileMenuOpen(false)
    changeLanguage(value)
  }
  return (
    <Router>
      <NavBar />
      <div className='block'>
        <header>
          <h2>Our company...</h2>
          <IoMdMenu className='open-menu' onClick={() => setMobileMenuOpen(true)} />
        </header>
        
        <div className="mobile-menu">
          <div className="nav-items">
            <nav>
              <Link onClick={() => setMobileMenuOpen(false)} to="/">Home</Link>
              <Link onClick={() => setMobileMenuOpen(false)} to="/about">About</Link>
              <Link onClick={() => setMobileMenuOpen(false)} to="/items">Items</Link>
              <Link onClick={() => setMobileMenuOpen(false)} to="/contacts">Contacts</Link>
              <Link onClick={() => setMobileMenuOpen(false)} to="/faq">FAQ</Link>
            </nav>
            <div className="languages">
              <img onClick={() => doChanges('en')} src="https://flagcdn.com/gb.svg" alt="English" />
              <img onClick={() => doChanges('lv')} src="https://flagcdn.com/lv.svg" alt="Latvian" />
              <img onClick={() => doChanges('ru')} src="https://flagcdn.com/ru.svg" alt="Russian" />
          </div>
        </div>
        </div>
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/items' element={<Items />} />
            <Route path='/contacts' element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;