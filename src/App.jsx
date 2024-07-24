import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    return (
        <div className='flex flex-col h-screen bg-slate-300 gap-2'>
            <header className='bg-blue-500 flex-2 py-4'>
                <Header />
            </header>
            <main className='bg-green-500 flex-1 py-4 px-2 mx-2 justify-center align-middle'>
                <Outlet />
            </main>
            <footer className='footer-hover-reveal'>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
