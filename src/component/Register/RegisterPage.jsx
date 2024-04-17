import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  const RegisterPage = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState('')
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    if(password.length < 6){
      setRegisterError('password must be 6 charecter')
    }else if(!/[A-Z]/.test(password)){
      setRegisterError('Must have an Uppercase letter in the password')
    }
    else if(!/[a-z]/.test(password)){
      setRegisterError('Must have a Lowercase letter in the password')
    }
    setRegisterError('');
    setSuccess('');
    createUser(email, password)
    .then(result => {
      console.log(result.user)
      setSuccess('Successfully created User');
      toast.success('Successfully registered!', {

      });
      e.target.reset();
    })
    .catch(error => {
      console.log(error);
      setRegisterError(error.message);
    })
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-5xl font-bold">Register</h1>
          <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="Type your name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input type="text" name="photoURL" placeholder="Enter your photo URL" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="Email address" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <span className="">Password</span>
              <div className="relative">
              <input type={ showPassword ? "text" : "password"} name='password' placeholder="Password" className="input input-bordered" required />
              <span className='absolute ml-[-25px] mt-4' onClick={() => setShowPassword(!showPassword)}>
              {
                 showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
              }
              </span>
              </div>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-success text-white">Register</button>
            </div>
          </form>
          {
            registerError && <p className="text-red-600 text-xl">{registerError}</p>
          }
          <ToastContainer></ToastContainer>
          <p>Already have an account? <Link to={'/login'} >Login</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

