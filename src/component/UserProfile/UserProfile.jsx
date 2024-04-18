import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <div className="text-4xl font-extrabold text-center m-9">
    <h1 className="text-3xl font-extrabold text-center pt-9 pb-5">You'r not logIn</h1>
    <button className="btn btn-success text-white p-4"><Link to={'/login'}>LogIn Please</Link></button>
    </div>;
  }

  return (
    <div className="">
      <h1 className="text-3xl font-extrabold text-center pt-9 b-5">Welcome! {user.displayName}</h1>
      <p className="text-1xl font-semibold text-center pb-2">Email: {user.email}</p>
      <img className="ml-[45%] rounded-full mb-9" src={user.photoURL} alt="" />

    </div>
  );
};

export default UserProfile;