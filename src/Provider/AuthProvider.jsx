import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../component/Firebase-config/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true);
       return signOut(auth);
    }
    
    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        console.log('current value of the user', currentUser);
        setUser(currentUser);
        setLoading(false);
      });
      return () =>{
        unSubscribe();
      }
    }, []);
        const authInfo = {user, createUser, signInUser, logOut, loading}
    return(
        <div className="">
            <AuthContext.Provider value={authInfo}>
               {children}
            </AuthContext.Provider>
        </div>
    )
}
export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}