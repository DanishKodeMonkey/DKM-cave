/* Modules, packages */
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';

/* Pages, components */
import App from './App.jsx';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact.jsx';
import Projects from './pages/Projects.jsx';

/* Styles */
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/projects', element: <Projects /> },
            { path: '/contact', element: <Contact /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </React.StrictMode>
);
