import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContextUse } from "../AuthContext/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const {createUser} = useContext(ContextUse);
  const [errorMessage,setErrorMessage] = useState(null)
  const handleSignUp=(e)=>{
   e.preventDefault()
     const form = e.target;
     const email = form.email.value;
     const password = form.password.value;
     createUser(email,password)
     .then((userCredential) => {
      const user = userCredential.user;
         if(user){
          Swal.fire("Sign Up sucessful!");
          form.reset();
         }
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      setErrorMessage(errorMessage)
      // ..
    });
  
  }
    return (
        <div className="bg-gradient-to-r from-black via-gray-900 to-black min-h-[60vh] flex items-center justify-center font-poppins">
        <div className="container flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-white mb-6 font-black-ops">
            Welcome Back
          </h2>
          <form onSubmit={handleSignUp} className="w-full">
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
                placeholder="Email"
                name="email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
                placeholder="**********"
                name="password"
              />
            </div>
           
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-400 hover:to-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-auto"
              >
               Sign Up
              </button>
              <p className="text-red-700 mt-3">{errorMessage}</p>
              <p className="text-white mt-3">Already have an account: <Link to='/logIn' className="text-blue-600 underline">Sign In</Link></p>
           
          </form>
        </div>
      </div>
    );
};

export default SignUp;