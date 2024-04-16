import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import auth from '../Firebase-config/firebase.config';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then(result => {
        console.log(result.user)
        e.target.reset();
      })
      .catch(error => {
        console.log(error);
      })
      
  };

  const handleLogInWithPopup = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then(result => {
        const user = result.user;
        console.log(user)
        setUser(user);
    })
    .catch(error => {
        console.log('error', error.message)
    })
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
          <p>Don't have an account? <Link to={'/register'}>Register</Link></p> <br /><br />
          <div className="">
            <button  className='btn w-full mb-2' onClick={handleLogInWithPopup}> <FaGoogle /> Google login</button>
            <button className='btn btn-primary w-full text-white'>Facebook</button>
      </div>
        </div>
      </div>

    </div>
  );
};

export default Login;

