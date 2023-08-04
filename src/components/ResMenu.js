import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_LOGO_URL, MENU_API_URL } from "../utils/contents";
import { useParams } from "react-router-dom";

const ResMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API_URL + resId)
        const json = await data.json();
        setResInfo(json.data);
        // console.log(json);
    }

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, avgRatingString, areaName, totalRatingsString } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards, } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    // console.log(itemCards);

    return (
        <div className="res-menu">
            <div className="menu-header">
                <div className="menu-details">
                    <h1>{name}</h1>
                    <p>{cuisines.join(", ")} - {costForTwoMessage} </p>
                    <p>{areaName}</p>
                </div>
                <button className="rating-btn">
                    <div className="rating">
                        <span className="star-symbol">★</span>
                        <span>{" "}{avgRatingString}</span>
                    </div>
                    <div className="total-ratings">
                        <span>{totalRatingsString}</span>
                    </div>
                </button>
            </div>
            <h3>Menu</h3>
            <ul>
                <div className="item-card">
                    {itemCards.map(item => (
                        < div className="menu-card" key={item.card.info.id}>
                            <div className="categ-desc">
                                <h4>{item.card.info.name} - {"₹"}{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</h4>
                                <div className="category">
                                    {item.card.info.category}
                                </div>
                                <div className="description">
                                    {"|   "} {item.card.info.description}
                                </div>
                            </div>

                            <div className="menu-img">
                                < img className="menu-logo" src={`${MENU_LOGO_URL}${item.card.info.imageId}`} alt={item.card.info.name} />
                                <button className="addto-cart">Add</button>
                            </div>
                        </div>
                    ))}
                </div>
            </ul >
        </div >
    )
}

export default ResMenu;