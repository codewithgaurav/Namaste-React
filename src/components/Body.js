import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ResCard from './ResCard';
import Shimmer from "./Shimmer"
import { SWIGGY_API } from '../utils/contents';
import { useOnlineStatus } from '../utils/useOnlineStatus';

const Body = () => {
    /* Local State variable - Super powerful varialbe
                ⬇                   ⬇                     */
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        // console.log(json);

        /* Optional  Chaining */
        setListOfRestaurant(
            json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredRestaurant(
            json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return (
        <h1>
            Looks like you're Offline. Please check your internet connection and try again later.
        </h1>
    )
    /* Conditional Rendering - Rendering on the basis of conditions. */
    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">

            <div className="search-box">
                <input className="search" type="search" placeholder="Search" value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="button" type="submit" onClick={() => {
                    /* Filter the restaurant card and update the UI
                    Search Text */
                    const filteredRestaurant = listOfRestaurant.filter(
                        (res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()));
                    console.log(filteredRestaurant);
                    setFilteredRestaurant(filteredRestaurant);

                    con
                }}>Search
                </button>
            </div>

            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurant.filter(
                        (res) => res.data.avgRating > 4);

                    setListOfRestaurant(filteredList);
                    console.log("restaurants filtered")
                }}>
                    Top Rated Restaurants
                </button>
            </div>

            <div className="resContainer">
                {filteredRestaurant.map((restaurant) => (
                    <Link
                        key={restaurant?.info.id}
                        to={"/restaurants/" + restaurant?.info.id}
                        style={{ textDecoration: 'inherit', color: 'inherit' }}
                    >
                        <ResCard resData={restaurant?.info} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;


