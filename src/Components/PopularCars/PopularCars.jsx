import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const PopularCars = () => {
    const [popularCars,setPopularCars] = useState([]);
    useEffect(()=>{
          fetch("http://localhost:5000/cars")
          .then(res=>res.json())
          .then(data=>setPopularCars(data))
    },[])
    return (
        <div className="py-24 container">
            <h2 className='text-4xl md:text-6xl  font-black-ops text-center text-slate-600 mb-14'>Popular Cars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 font-poppins ">
            {
                popularCars.slice(0,6).map(car=><div className="shadow-black shadow-2xl rounded-lg" key={car._id}>
                  <img className="w-full h-[300px] object-cover rounded-lg" src={car.Image} alt="" />
                  <p className="p-3">{car.Short_Description}</p>
                  <div className="my-5 flex justify-center gap-10">
                    <p className="font-medium border border-black p-2 rounded">Brand: {car.BrandName}</p>
                    <p className="font-medium border border-black p-2 rounded">Brand: ${car.Price}</p>
                  </div>
                </div>)
            }
            </div>
           <div className="text-center mt-10">
           <Link to='/allCars'> <button className="bg-slate-600 text-white font-medium px-10 py-5 rounded-lg">Find a car</button></Link>
           </div>
        </div>
    );
};

export default PopularCars;