import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div className='flex flex-col justify-center align-center text-center'>
            <div>
                <h1 className='text-4xl'>Daniel Ljung Runge</h1>
                <h2 className='text-2xl'>as danishKodeMonkey </h2>
            </div>
            <div>
                <Navbar />
            </div>
        </div>
    );
}

export default Header;
