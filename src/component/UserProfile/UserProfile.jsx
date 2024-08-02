import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-extrabold text-center mb-4">You are not logged in</h1>
        <Link to="/login">
          <button className="btn btn-primary text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
            Log In
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg border border-gray-200">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 text-center">
          Welcome, {user.displayName}
        </h1>
        <p className="text-xl font-semibold text-gray-700 mb-4 text-center">
          Email: <span className="font-normal">{user.email}</span>
        </p>
        <div className="flex justify-center mb-6">
          <img
            className="w-32 h-32 rounded-full shadow-md border border-gray-300"
            src={user.photoURL}
            alt={`${user.displayName}'s profile`}
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
