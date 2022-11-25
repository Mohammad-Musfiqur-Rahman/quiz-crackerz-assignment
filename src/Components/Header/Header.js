import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>
            
        </div>
    );
};

export default Header;