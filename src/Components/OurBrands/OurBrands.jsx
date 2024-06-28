import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
const OurBrands = () => {
    const [brands,setBrands] = useState([]);
   
    useEffect(()=>{
          fetch("http://localhost:5000/brands")
          .then(res => res.json())
          .then(data=>setBrands(data))
    },[])
    return (
        <div className="mt-20 container">
             <div className="space-y-4">
             <h2 className="text-4xl md:text-6xl  font-black-ops text-center text-slate-600 ">Our Brands</h2>
             <p className="text-center text-sm md:text-lg font-poppins">Our brands around the world are on a global mission to do good. It's been our goal - and part of our business - for over a hundred years.</p>
             </div>
            <Marquee pauseOnHover={true}  speed={200} className="my-20">
                    {
                        brands.map(brand=><div className="px-5" key={brand._id}>
                               <img className="md:w-[500px] w-[300px] md:h-[400px] h-[200px] object-cover" src={brand.Image} alt="" />
                             
                                 <div className="ml-5">
                                 <p className="font-medium mt-5">Brand: {brand.Brand_Name}</p>
                                 <Link to={`/allCars?brand=${brand.Brand_Name}`}><button className="bg-slate-400 text-white rounded-lg p-2 mt-3">Explore all {brand.Brand_Name} cars</button></Link>
                                 </div>
                            
                        </div>)
                    }
                 </Marquee>
        </div>
    );
};

export default OurBrands;