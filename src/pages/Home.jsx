import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import logoImage from '@/images/logo.png';
import '../scss/styles.scss';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/dishes?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <div className="containerStyle">
        <div className="header">
          <div className="header-line">
            <div className="header-logo">
              <img src={logoImage} alt="" />
            </div>
            <Navbar />
          </div>
          <input
            type="text"
            className="search-input"
            placeholder="Поиск"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSearch}>Искать</button>
        </div>
        <div className="card">
          <h1>Welcome to Our Website</h1>
          <p>It is my restaurant</p>
        </div>
      </div>
    </>
  );
};

export default Home;
