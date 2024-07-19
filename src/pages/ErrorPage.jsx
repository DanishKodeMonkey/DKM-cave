import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>Oh no! Something went wrong!</h1>
            <Link to='/'> Click here to go back home!</Link>
        </div>
    );
};

export default ErrorPage;
