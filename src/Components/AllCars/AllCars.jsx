import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCars = () => {
    const [names,setNames] = useState([]);
    useEffect(()=>{
          fetch("http://localhost:5000/brands")
          .then(res => res.json())
          .then(data=>setNames(data))
    },[])
    return (
        <div className="mt-10">
            <h2 className="text-3xl md:text-5xl  font-black-ops text-center text-slate-600">Explore Our All Brand New Cars</h2>
            <div className="grid grid-cols-4 mt-10 font-poppins font-semibold">
                 <div className="flex flex-col gap-8">
                    
                    {
                        names.map(name=><div key={name._id}>
                               
                              <Link><button className="w-full md:w-4/5 bg-slate-900 text-white  py-4 rounded-e-2xl shadow-lg shadow-sky-950">{name.Brand_Name}</button></Link>
                        </div>)
                    }
                 </div>
                 <div className="col-span-3">
                    
                 </div>
            </div>
        </div>
    );
};

export default AllCars;