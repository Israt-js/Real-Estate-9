import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleSave = async () => {
    try {
      await updateProfile(user, { displayName: name, photoURL });
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (!user) {
    return <div className="text-center m-10"><button className="btn btn-success text-white p-4"><Link to={'/login'}>LogIn Please</Link></button></div>;
  }

  return (
    <div className="hero h-[390Px] bg-base-200">
      <div className="card shrink-0 w-full max-w-sm mt-3 shadow-2xl bg-base-100">
      <h2 className="text-3xl font-extrabold text-center pt-9 b-5">Update Profile</h2>
      <form onSubmit={handleSave} className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Type your name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input type="text" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)}  placeholder="Enter your photo URL" className="input input-bordered" required />
            </div>
            <button type="submit" className="btn btn-success text-white text-center w-full">Save</button>
          </form>
          </div>
    </div>
  );
};

export default UpdateProfile;


