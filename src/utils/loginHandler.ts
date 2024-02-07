// import { useNavigate } from 'react-router-dom';

const loginHandler = () => {
    // const navigate = useNavigate();
    const token = localStorage.getItem('token');
    console.log('inside', token);
    if (token) {
        console.log('logged in', token);
        // navigate('/dashboard');
    }
}

export default loginHandler;


