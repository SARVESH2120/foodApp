import { CDN_URL } from "../utils/constant";

const RestaurantMenuCard = (props) => {
  return (
    <div className="card  ">
      <div className="object-cover w-48 h-48 float-left rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-s-lg">
        <img src={CDN_URL + props.Image} alt="image" />
      </div>

      <div className="  p-4 float-left">
        <span>
          <p className=" text-1xl font-bold  text-gray-900 dark:text-white">
            {props.Name}
          </p>
        </span>
        <span>
          <p className=" font-normal text-gray-700 dark:text-gray-400">
            Price for Two : {props.Price + "₹"}
          </p>
        </span>
      </div>
    </div>
  );
};

export default RestaurantMenuCard;
