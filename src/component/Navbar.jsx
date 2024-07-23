"use client"

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav style={navStyles}>
            <div style={containerStyles}>
                <Link href="/" style={logoStyles}>
                    E-Commerce
                </Link>
                <div style={menuStyles}>
                    <Link href="/" style={linkStyles}>Home</Link>
                    <Link href="/cart" style={linkStyles}>Cart</Link>
                </div>
            </div>
        </nav>
    );
}

const navStyles = {
    backgroundColor: '#333',
    padding: '10px 20px',
    color: '#fff',
};

const containerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
};

const logoStyles = {
    fontSize: '1.5em',
    fontWeight: 'bold',
    color: '#fff',
    textDecoration: 'none',
};

const menuStyles = {
    display: 'flex',
    gap: '15px',
};

const linkStyles = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1em',
};

export default Navbar;
