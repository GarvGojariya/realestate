import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <div style={{ position: 'relative' }}>
                <Navbar />

                {children}

                <Footer />
            </div>
        </>
    )
}

export default Layout