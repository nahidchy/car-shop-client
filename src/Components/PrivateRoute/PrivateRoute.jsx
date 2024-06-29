import { useContext } from "react";
import { ContextUse } from "../AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(ContextUse);
    const location = useLocation();
    if(loading){
        return (
            <div className="flex items-center justify-center min-h-screen">
              <span className="loading loading-dots loading-lg"></span>
            </div>
        );
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;