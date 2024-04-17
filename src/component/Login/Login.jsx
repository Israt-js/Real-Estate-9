import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle,FaFacebook } from 'react-icons/fa';
import auth, { provider } from '../Firebase-config/firebase.config';

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const [user, setUser] = useState('')
  const location = useLocation();
  const navigate = useNavigate
  console.log('location in login page',location)

  const handleSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then(result => {
        console.log(result.user);
        e.target.reset();
        navigate(location?.state ? location.state : '/')
      })
      .catch(error => {
        console.log(error);
      })
      
  };

  const handleLogInWithPopup = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then(result => {
        // const user = result.user;
        console.log(result.user)
        setUser(user);
    })
    .catch(error => {
        console.log('error', error.message)
    })
  }

  const HandleFacebookAuth = () =>{
    signInWithPopup(auth, provider)
    .then(result =>{
     setUser(result.user)
    })
    .catch(error => {
        console.log(error);
    });
  
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-5xl font-bold">Login now!</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-success text-white">Login</button>
            </div>
          </form>
          <div className="">
            <button  className='btn w-full mb-2' onClick={handleLogInWithPopup}> <FaGoogle /> Google login</button>
            <button onClick={HandleFacebookAuth} className='btn btn-primary w-full text-white'> <FaFacebook/> Facebook</button>
      </div>
      <p>Don't have an account? <Link to={'/register'}>Register</Link></p>
        </div>
      </div>

    </div>
  );
};

export default Login;

