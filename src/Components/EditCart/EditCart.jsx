import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const EditCart = () => {
    const cars = useLoaderData();
   const handleEdit=(e)=>{
        e.preventDefault();
       const form = e.target;
       const name = form.name.value;
       const price = form.price.value;
       const image = form.image.value;
       const short_Description = form.short_Description.value;
       const rating = form.rating.value;
       const editedCar = { name, price, image, short_Description, rating };
       fetch(`http://localhost:5000/carts/${cars._id}`,{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editedCar)
       })
       .then(response => response.json())
       .then(data => {
        if(data.modifiedCount>0){
          Swal.fire("Edit successful");
          form.reset();
        }
       })
   }
    return (
        <div className="min-h-screen font-poppins bg-gradient-to-r from-green-400 to-blue-500 py-10 md:py-28">
          
           <div className="  container flex items-center justify-center  p-6">
      <form onSubmit={handleEdit} className="bg-white shadow-lg rounded-lg p-8 space-y-4 w-full md:w-2/3">
      <h2 className="font-black-ops text-2xl md:text-4xl my-14 text-center">Updated Car : {cars.name}</h2>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" defaultValue={cars.name} name="name" className="input input-bordered w-full" />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" defaultValue={cars.price} name="price" className="input input-bordered w-full" />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="text" defaultValue={cars.image} name="image" className="input input-bordered w-full" />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">short Description</span>
          </label>
          <input type="text" defaultValue={cars.short_Description} name="short_Description" className="input input-bordered w-full" />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" defaultValue={cars.rating} name="rating" className="input input-bordered w-full" />
        </div>
        
        <div className="form-control mt-6">
          <input type="submit" value="Edit car" className="btn btn-primary w-full bg-gradient-to-r from-green-400 to-blue-500 border-0"/>
        </div>
      </form>
    </div>
        </div>
    );
};

export default EditCart;