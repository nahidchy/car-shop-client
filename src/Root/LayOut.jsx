import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav/Nav";

const LayOut = () => {
    return (
        <div className="max-w-[1440px] mx-auto px-5 lg:px-0">
            <Nav/>
            <Outlet/>
        </div>
    );
};

export default LayOut;