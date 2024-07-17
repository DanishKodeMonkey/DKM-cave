import React from 'react';

function Footer() {
    return (
        <div className='flex flex-col justify-center align-center text-center'>
            <div>
                <h5 className='text-sm'>By Daniel Ljung Runge</h5>
            </div>
            <div className='flex'>
                <h5 className='flex justify-around align-center text-sm w-full'>
                    <a href='https://github.com/DanishKodeMonkey'>Github</a>{' '}
                    <a href='https://www.linkedin.com/in/daniel-ljung-runge-3ba014a1/'>
                        LinkedIn
                    </a>
                    <a href='mailto:daniel_runge_@hotmail.com'>Mail</a>
                </h5>
            </div>
            <div>
                <h4>
                    <p className='text-xs'>
                        Powered by <a href='https://vitejs.dev/'>Vite@React</a>{' '}
                        & <a href='https://tailwindcss.com/'>TailwindCSS</a>
                    </p>
                </h4>
            </div>
        </div>
    );
}

export default Footer;
