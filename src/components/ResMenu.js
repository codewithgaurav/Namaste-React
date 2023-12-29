import Shimmer from "./Shimmer";
import { MENU_LOGO_URL } from "../utils/contents";
import { useParams } from "react-router-dom";
import { useResMenu } from '../utils/useResMenu'
import RestaurantCategory from "./Res_category_component/RestaurantCategory";
import { useState } from 'react';


const ResMenu = () => {
    const { resId } = useParams();

    const resInfo = useResMenu(resId);

    const [showIndex, setShowIndex] = useState(true);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, avgRatingString, areaName, totalRatingsString } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    // console.log(categories);

    return (
        <div className="res-menu text-center align-center justify-center p-3 m-5">
            <div className="menu-header flex border-b-[1px] w-6/12 border-dashed align-center justify-between m-auto ">
                <div className="menu-details text-start">
                    <h1 className="text-xl">{name}</h1>
                    <p className="font-extralight">{cuisines.join(", ")} - {costForTwoMessage} </p>
                    <p className="font-extralight">{areaName}</p>
                </div>
                <button className="rating-btn mb-5 border border-[1px solid #e9e9eb] shadow-[0 1px 5px #f9f9f9]  bg-[transparent] text-green-600 p-1 h-20 rounded-md ">
                    <div className="rating rounded-md text-center cursor-pointer border-b-2 border-[1 px solid #d4d5d9] font-bold ">
                        <span className="star-symbol">★</span>
                        <span>{" "}{avgRatingString}</span>
                    </div>
                    <div className="total-ratings">
                        <span>{totalRatingsString}</span>
                    </div>
                </button>
            </div>
            <br />
            <h2 className="text-2xl">Menu</h2>
            <br />

            {/* Categories Accordion */}
            {categories.map((category, index) =>
                //Controlled Component
                < RestaurantCategory
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false} // passing index as a prop for child.
                    setShowIndex={() => setShowIndex(index)}
                />
            )}
        </div >
    );
};

export default ResMenu;