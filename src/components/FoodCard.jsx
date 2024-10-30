
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-[250px] bg-[#1E293B] shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out  p-5 flex flex-col rounded-lg gap-2">
      {/* Image Section */}
      <img
        src={img}
        alt={name}
        className="w-auto h-[150px] rounded-md object-cover hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer"
      />

      {/* Food Name & Price */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-white">{name}</h2>
        <span className="text-gold font-bold text-md">₹{price}</span>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm font-light">
        {desc.length > 50 ? `${desc.slice(0, 50)}...` : desc}
      </p>

      {/* Rating and Button Section */}
      <div className="flex justify-between items-center">
        <span className="flex items-center text-yellow-400 font-medium">
          <AiFillStar className="mr-1" /> {rating}
        </span>

        <button
          onClick={() => {
            dispatch(
              addToCart({ id, name, price, rating, img, qty: 1 })
            );
            handleToast(name);
          }}
          className="bg-gold text-white px-3 py-1 rounded-lg text-sm font-medium transition-all hover:bg-yellow-500"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;