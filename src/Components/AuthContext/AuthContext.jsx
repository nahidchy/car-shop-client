import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";

export const ContextUse = createContext(null)

const AuthContext = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)
    const auth = getAuth(app);
    const createUser = (email,password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    };
    useEffect(()=>{
       const unSubscribe =    onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
           });
           return () =>{
            unSubscribe();
           } 
    },);

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
   
    const logIn =(email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }
  const authInfo = {user,createUser,logOut,logIn,loading,setLoading};
    return (
        <ContextUse.Provider value={authInfo}>
            {children}
        </ContextUse.Provider>
    );
};

export default AuthContext;