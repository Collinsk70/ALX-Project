import React from 'react';

export default function Navbar({ onAboutClick, onContactsClick }) {
  const handleHomeClick = () => {
    window.location.reload(); // This will reload the page
  };

  return (
    <nav className="navbar">
      <div className="logo">Envision Cook.Enjoy</div>
      <ul className="nav-links">
        <li onClick={handleHomeClick} style={{ cursor: 'pointer' }}>Home</li> {/* Clicking this will reload the page */}
        <li onClick={onAboutClick} style={{ cursor: 'pointer' }}>About</li>
        <li onClick={onContactsClick} style={{ cursor: 'pointer' }}>Contacts</li>
      </ul>
    </nav>
  );
}
