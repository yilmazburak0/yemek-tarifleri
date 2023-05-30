import React from 'react'
import { NavLink,Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Navbar() {
  const {color} = useContext(ThemeContext)
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-${color}`}>
        <div className="container">
            <Link className='navbar-brand' to="/">Yemek Tarifleri</Link>
            <ul className="navbar-nav">
                <li>
                <NavLink className="nav-link me-3" to="/">Home</NavLink>
                </li>
                <li>
                <NavLink className="nav-link me-3" to="/create">Create</NavLink>
                </li>
                <li>
                  <SearchBar />
                </li>
            </ul>
        </div>
    </nav>
  );
};

export default Navbar