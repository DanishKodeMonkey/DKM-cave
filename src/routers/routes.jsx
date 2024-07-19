/* Pages, components */
import App from '../App.jsx';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact.jsx';
import Projects from '../pages/Projects.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/projects', element: <Projects /> },
            { path: '/contact', element: <Contact /> },
        ],
    },
];

export default routes;
