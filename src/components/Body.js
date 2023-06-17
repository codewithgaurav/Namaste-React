import React from 'react'
import ResCard from './ResCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer'

const Body = () => {
    // Local State variable - Super powerful varialbe
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4421257&lng=77.0652025&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // Optional  Chaining
        setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    }

    // Conditional Rendering - Rendering on the basis of conditions.
    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="searchBox">
                <input className="search" type="text" placeholder="Search" value={searchText} />
                <button className="button" onClick={() => {
                    // Filter the restaurant card and update the UI
                    // Search Text
                    console.log(searchText);
                }}>Search</button>
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurant.filter(
                        (res) => res.data.avgRating > 4);
                    setListOfRestaurant(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="resContainer">
                {listOfRestaurant.map((restaurant) => (
                    <ResCard key={restaurant.data.id} resData={restaurant} />
                ))};
            </div>
        </div>
    );
};

export default Body;
