import { useContext } from 'react';
import { CDN_URL } from '../utils/contents';
import UserContext from '../utils/UserContext';

const ResCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo, areaName } = resData;

    const { loggedInUser } = useContext(UserContext);

    return (
        <div className="resCard m-10 p-2 w-[300px] h-[auto] items-center text-center rounded-2xl  br-[transparent] cursor-pointer duration-150 hover:scale-[0.9] hover:shadow-lg shadow-[ 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)}]">
            <img className="resLogo rounded-2xl " src={CDN_URL + cloudinaryImageId} />

            <h4><p className="truncate text-xl font-medium">{name} - {areaName}</p></h4>
            <h5>★ {avgRating} Stars</h5>
            <h5>{sla.deliveryTime}{" mins "}|{" "}{costForTwo}</h5>
            <h5><p className="font-light">{cuisines.join(", ")}</p></h5>
            <h5><p className="font-light">{loggedInUser}</p></h5>
        </div>
    );
};


export default ResCard;