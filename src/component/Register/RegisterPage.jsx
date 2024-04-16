import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const RegisterPage = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    createUser(email, password)
    .then(result => {
      console.log(result.user)
      e.target.reset();
    })
    .catch(error => {
      console.log(error);
    })
  };

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
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
          </form>
          <p>Already have an account? <Link to={'/login'} >Login</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

