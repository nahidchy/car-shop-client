
import { Link } from "react-router-dom";
import video from "./../../assets/car-video.mp4"
const Header = () => {
    return (
        <div >
          <header className="relative w-full h-[86vh] overflow-hidden">
        <video
          className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="container">
        <div className="absolute  top-0 left-0 right-0  w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 p-4 md:p-8">
        <h1 className="text-white text-4xl md:text-6xl font-black-ops text-center mb-4">
          Welcome to Our Car Shop
        </h1>
        <p className="text-white text-lg md:text-xl font-poppins text-center mb-6">
          Quality Cars, Affordable Prices
        </p>
       <Link to='/allCars'> <button className="bg-slate-500 hover:bg-stone-600 text-white py-3 px-6 rounded-full font-poppins shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Explore Our Cars
        </button></Link>
      </div>
      </div>
      </header>
        </div>
    );
};

export default Header;