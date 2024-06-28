import { Link, useLoaderData } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import Swal from "sweetalert2";
const MyCart = () => {
    const carts = useLoaderData();
    const [newCarts,setNewCarts] = useState(carts)
    const handleDelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${id}`, 
                    { method: 'DELETE' })
                    .then(res=>res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                          const updatedCarts = carts.filter((cart)=>cart._id !== id); 
                            setNewCarts(updatedCarts);
                        }
                    })
              
            }
          });
      
       }
    return (
        <div className="container font-poppins my-28">
         <h2 className="text-center text-4xl font-black-ops mb-16">Carts Item : {newCarts.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-20">
            {
                newCarts.map(cart=><div key={cart._id} >
                    <div>
                    <img className=" w-full h-[300px] object-cover rounded" src={cart.image} alt="" />
                    <div className="mt-8 flex justify-between font-medium">
                        <p className="border border-slate-500 p-1 rounded">Name: {cart.name}</p>
                        <p className="border border-slate-500 p-1 rounded">Price: {cart.price}</p>
                    </div>
                    <div className="flex gap-10 justify-center mt-5">
                        <button onClick={()=>handleDelete(cart._id)} className="btn btn-error text-white">Delete <MdOutlineDelete className="text-xl" /></button>
                       <Link to={`/editCart/${cart._id}`}> <button className="btn btn-success text-white">Edit <MdEdit /></button></Link>
                    </div>
                    </div>
                     
                </div>)
            }
            </div>
        </div>
    );
};

export default MyCart;