import { useEffect, useState } from "react";
import DetailsModal from "../DetailsModal/DetailsModal";
import Swal from "sweetalert2";
import {
  Link,
  useLocation,
} from "react-router-dom";

const AllCars = () => {
  const [cars, setCars] = useState([]);
  const [brands, setBrands] = useState([]);
  const [filteredCars, setFilteredCars] = useState(cars);
  const [selectedCar, setSelectedCar] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activeBrand = searchParams.get("brand");

  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error("Error fetching brands:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      })
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  useEffect(() => {
    if (activeBrand === "All") {
      setFilteredCars(cars);
    } else {
      const filtered = cars.filter((car) => car.BrandName === activeBrand);
      setFilteredCars(filtered);
    }
  }, [activeBrand, cars]);

  const handleOpenModal = (car) => {
    setSelectedCar(car);
    document.getElementById("my_modal_1").showModal();
  };

  const handleCloseModal = () => {
    setSelectedCar(null);
    document.getElementById("my_modal_1").close();
  };

  const handleAddToCart = (name, price, image, short_Description, rating) => {
    const newCart = { name, price, image, short_Description, rating };
    fetch("http://localhost:5000/carts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCart),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Car has been Added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="my-28 container font-poppins">
      <h2 className="text-3xl md:text-5xl font-black-ops text-center text-slate-600">
        Explore Our All Brand New Cars
      </h2>
      <DetailsModal car={selectedCar} onClose={handleCloseModal} />
      <div className="grid grid-cols-4 mt-20 font-poppins font-semibold">
        <div className="flex flex-col gap-8">
          <div>
            <Link to={`/allcars?brand=All`}>
              <button
                className={`w-full md:w-4/5 ${activeBrand == "All" ?"bg-slate-900":"bg-red-500"}  text-white py-4 rounded-e-2xl shadow-lg shadow-sky-950`}
              >
                All
              </button>
            </Link>
          </div>
          {brands.map((brand) => (
            <div  key={brand._id}>
              <Link to={`/allcars?brand=${brand.Brand_Name}`}>
                <button
                  className={`w-full md:w-4/5  ${activeBrand == brand.Brand_Name ?"bg-slate-900":"bg-red-500"} text-white py-4 rounded-e-2xl shadow-lg shadow-sky-950`}
                >
                  {brand.Brand_Name}
                </button>
              </Link>
            </div>
          ))}
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-16">
            {(activeBrand ? filteredCars : cars).map((car) => (
              <div
                key={car._id}
                className="bg-white rounded shadow-lg p-4"
                style={{ height: "450px" }}
              >
                <img
                  className="w-full h-1/2 object-cover rounded"
                  src={car.Image}
                  alt=""
                />
                <p className="py-2">{car.Short_Description}</p>
                <div className="flex justify-between py-2 mb-2">
                  <p className="border border-slate-400 p-1 rounded">
                    Name: {car.Name}
                  </p>
                  <p className="border border-slate-400 p-1 rounded">
                    Type: {car.Type}
                  </p>
                </div>
                <div className="flex justify-between text-white">
                  <button
                    className="btn bg-black text-white hover:text-black"
                    onClick={() => handleOpenModal(car)}
                  >
                    See Details
                  </button>
                  <button
                    onClick={() =>
                      handleAddToCart(
                        car.Name,
                        car.Price,
                        car.Image,
                        car.Short_Description,
                        car.Rating
                      )
                    }
                    className="bg-slate-500 p-2 rounded-lg"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCars;
