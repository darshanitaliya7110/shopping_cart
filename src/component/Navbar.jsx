"use client"

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav
            style={{
                backgroundColor: '#333',
                padding: '10px 20px',
                color: '#fff',
            }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}>
                <Link
                    href="/"
                    style={{
                        fontSize: '1.5em',
                        fontWeight: 'bold',
                        color: '#fff',
                        textDecoration: 'none',
                    }}>
                    E-Commerce
                </Link>
                <div
                    style={{
                        display: 'flex',
                        gap: '15px',
                    }}>
                    <Link
                        href="/"
                        style={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontSize: '1em',
                        }}>
                        Home
                    </Link>
                    <Link
                        href="/cart"
                        style={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontSize: '1em',
                        }}>
                        Cart
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
