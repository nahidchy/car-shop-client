import { FaStar } from 'react-icons/fa';

const DetailsModal = ({ car, onClose }) => {
    const renderRatingStars = () => {
        const rating = car?.Rating || 0; // Assuming rating is a number from 0 to 5
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<FaStar key={i} className="text-yellow-500" />);
            } else {
                stars.push(<FaStar key={i} className="text-gray-400" />);
            }
        }
        return stars;
    };

    return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{car?.Name || "Car Details"}</h3>
                <p className="py-4">{car ? car.Short_Description : "No car selected"}</p>
                <img src={car?.Image} alt={car?.Name} className="w-full h-64 object-cover rounded" />
                <div className="flex justify-between py-2 mb-2 mt-5">
                    <p className="border border-slate-400 p-1 rounded">Type: {car?.Type}</p>
                    <p className="border border-slate-400 p-1 rounded">Price: {car?.Price}</p>
                </div>
                <div className="flex justify-center items-center gap-1 mt-5">
                    <p className="">Rating:</p>
                    <div className="flex gap-1">{renderRatingStars()}</div>
                </div>
                <div className="modal-action">
                    <button className="btn" onClick={onClose}>Close</button>
                </div>
            </div>
        </dialog>
    );
};

export default DetailsModal;
