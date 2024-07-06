
import Swal from 'sweetalert2'
const AddCar = () => {
   
    const handleAddCar=(e)=>{
          e.preventDefault();
          const form= e.target;
          const Image = form.Image.value;
          const Name = form.Name.value;
          const Type = form.Type.value;
          const Price = form.Price.value;
          const Rating = form.Rating.value;
          const Category = form.Category.value;
          const BrandName = form.BrandName.value;
          const Short_Description = form.Short_Description.value;
          const newCar ={Image,Name,Type,Price,Rating,Category,BrandName,Short_Description};
          fetch("https://car-shop-server.onrender.com/cars",{
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCar)
          })
          .then(response => response.json())
          .then(data => {
           if(data.acknowledged){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Car has been Added",
                showConfirmButton: false,
                timer: 1500
              });
           }
          });
          
    }
    return (
        <div className="container font-poppins mt-20 mb-32">

            <h2 className="text-2xl md:text-5xl font-black-ops text-center my-10">Add Your Brand Cars In our List <br />To Grow Your Business</h2>
            <div className="hero bg-base-200">
 
  
      <form onSubmit={handleAddCar} className="card-body w-full md:w-1/2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="text" placeholder="Please Enter a valid image url" name="Image" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Car Name" name="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <input type="text" placeholder="Enter Type" name="Type" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" placeholder="Car Price" name="Price" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" placeholder="Rating" name="Rating" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" placeholder="Category" name="Category" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <input type="text" placeholder="Brand Name" name="BrandName" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <input type="text" placeholder="Write a Short Description" name="Short_Description" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn bg-black text-white hover:text-black">Add Car</button>
        </div>
      </form>
      </div>
        </div>
    );
};

export default AddCar;