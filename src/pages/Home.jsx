import React from 'react';

function Home() {
    return (
        <div className='text-center'>
            <h1 className='text-5xl opacity-0 animate-text-slideIn-top-1'>
                Welcome!
            </h1>
            <h2 className='text-2xl opacity-0 animate-text-slideIn-top-2'>
                This is the website of Daniel Ljung Runge
            </h2>
            <p className='opacity-0 animate-text-slideIn-top-3'>
                The danish code monkey with a passion for web development with
                flair!
            </p>
            <p className='opacity-0 animate-text-slideIn-top-4'>
                This site is meant as a contact card for anyone interested, so
                if you have interesting ideas or opportunities, get in touch!
            </p>
            <p className='opacity-0 animate-text-slideIn-top-5'>
                While you are here! <br /> Have a look around, and please do
                enjoy your stay!
            </p>
            <p className='opacity-0 animate-text-slideIn-top-5'></p>
        </div>
    );
}

export default Home;
