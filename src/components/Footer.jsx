import React from 'react';

/* TODO? 
Hide footer unless hovered?
*/
function Footer() {
    return (
        <div className='flex flex-col justify-center align-center text-center '>
            <div>
                <h5 className='text-sm'>By Daniel Ljung Runge</h5>
            </div>
            <div className='flex justify-around'>
                <div className='flex flex-col'>
                    <h4 className='text-xs mb-1'>Contact:</h4>
                    <h5 className='flex flex-col justify-around align-center text-xs w-full'>
                        <a href='https://github.com/DanishKodeMonkey'>Github</a>{' '}
                        <a href='https://www.linkedin.com/in/daniel-ljung-runge-3ba014a1/'>
                            LinkedIn
                        </a>
                        <a href='mailto:daniel_runge_@hotmail.com'>Mail</a>
                    </h5>
                </div>
                <div className='flex flex-col'>
                    <h4>
                        <p className='text-xs mb-1'>Powered by</p>
                    </h4>
                    <p className='text-xs'>
                        <a href='https://vitejs.dev/'>Vite@React</a>
                    </p>
                    <p className='text-xs'>
                        <a href='https://tailwindcss.com/'>TailwindCSS</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
