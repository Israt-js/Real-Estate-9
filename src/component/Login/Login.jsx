import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import auth from '../Firebase-config/firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const [success, setSuccess] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInUser(email, password);
      setSuccess('Successfully logged in!');
      toast.success('Successfully logged in!');
      e.target.reset();
      navigate(location?.state?.from || '/');
    } catch (error) {
      setLoginError(error.message);
    }
  };

  const handleAuthPopup = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
      toast.success('Successfully logged in!');
    } catch (error) {
      console.error('Error during authentication', error.message);
      toast.error('Authentication failed!');
    }
  };

  const handleGoogleLogin = () => handleAuthPopup(new GoogleAuthProvider());
  const handleFacebookLogin = () => handleAuthPopup(new FacebookAuthProvider());

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="form-control">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>
        {loginError && <p className="text-red-600 text-center mt-4">{loginError}</p>}
        {success && <p className="text-green-600 text-center mt-4">{success}</p>}
        <div className="mt-6 space-y-4">
          <button
            className="w-full flex items-center justify-center bg-gray-800 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            onClick={handleGoogleLogin}
            aria-label="Log in with Google"
          >
            <FaGoogle className="mr-2" /> Google Login
          </button>
          <button
            className="w-full flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={handleFacebookLogin}
            aria-label="Log in with Facebook"
          >
            <FaFacebook className="mr-2" /> Facebook Login
          </button>
        </div>
        <p className="text-center text-gray-600 mt-6">
          Don't have an account? <Link to="/register" className="text-blue-500 font-medium hover:underline">Register</Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
