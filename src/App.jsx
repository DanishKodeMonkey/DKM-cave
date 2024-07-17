import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    return (
        <div className='flex flex-col h-screen bg-slate-300'>
            <header className='bg-blue-500 flex-2'>
                <Header />
            </header>
            <main className='bg-green-500 flex-1'>
                <h3 className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus enim velit praesentium nemo odio adipisci itaque,
                    esse molestias saepe ipsam at nulla. Asperiores sed officia
                    assumenda dicta rerum incidunt consectetur.
                </h3>
            </main>
            <footer className='bg-red-500 flex-2'>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
