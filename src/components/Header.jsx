import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div className='flex flex-col justify-center align-center text-center'>
            <div>
                <h1 className='text-4xl'>danishKodeMonkey</h1>
                <h2 className='text-2xl'>Web wrench jockey </h2>
                <h3 className='text-1xl'>Homepage of Daniel Ljung Runge</h3>
            </div>
            <div>
                <Navbar />
            </div>
        </div>
    );
}

export default Header;
