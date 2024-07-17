import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
    return (
        <div className='flex flex-col h-screen bg-slate-300 gap-2'>
            <header className='bg-blue-500 flex-2 py-4'>
                <Header />
            </header>
            <main className='bg-green-500 flex-1 py-4 px-5'>
                <Home />
            </main>
            <footer className='bg-red-500 flex-2'>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
