import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Dramatic</div>
      <nav className="navigation">
        <ul>
          <li>Home</li>
          <li>TV Show</li>
          <li>Movies</li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="user">
        <div className="notifications">Notification Icon</div>
        <div className="avatar">Avatar</div>
      </div>
    </header>
  );
};

export default Header;