import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import ResCard from './ResCard';
import Shimmer from "./Shimmer"
import { SWIGGY_API } from '../utils/contents';
import { useOnlineStatus } from '../utils/useOnlineStatus';
import UserContext from "../utils/UserContext";


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
        console.log('Fetched JSON:', json);
        // console.log('List of Restaurants:', json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        /* Optional  Chaining */
        setListOfRestaurant(
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? []
        );
        setFilteredRestaurant(
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? []
        );
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return (
        <h1 className="text-center">
            <br />
            <p>Looks like you're Offline. Please check your internet connection and try again later.</p>
        </h1 >
    )
    const handleSearch = () => {
        const filteredRestaurant = listOfRestaurant.filter(
            (res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurant(filteredRestaurant);
    };

    const handleFilterRating = () => {
        const filteredList = listOfRestaurant.filter((res) => res?.info?.avgRating && parseFloat(res?.info?.avgRating) > 4);
        setFilteredRestaurant(filteredList);
    };

    const { loggedInUser, setUserName } = useContext(UserContext);

    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body overflow-hidden">
            <div className="filter flex justify-around m-8">
                <div className="search">
                    <input
                        className="border border-solid border-black rounded-[100px] p-[10px] h-8 w-[400px]"
                        type="search"
                        placeholder="Search"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        className="mx-3 h-8 px-4 rounded-full text-sm font-bold text-white bg-green-500 hover:bg-green-700"
                        type="submit"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>

                <div className="filter-btn py-1 px-4 rounded-full font-bold text-white bg-blue-500 hover:bg-blue-700">
                    <button onClick={handleFilterRating}>
                        <h2>Top Rated Restaurants</h2>
                    </button>
                </div>

                <div>
                    <label className="font-bold ">UserName:</label>
                    <input
                        type="text"
                        id="username"
                        placeholder='Enter Username'
                        className=" border border-solid border-black rounded-full p-2 h-8 mx-2"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />

                </div>
            </div>


            <div className="resContainer flex flex-wrap justify-between">
                {filteredRestaurant.map((restaurant) => (
                    <Link
                        key={restaurant?.info.id}
                        to={"/restaurants/" + restaurant?.info.id}
                        style={{ textDecoration: 'inherit', color: 'inherit' }}
                    >
                        {/* If the restaurant is veg then add a veg/non-veg label to it.  */}
                        <ResCard resData={restaurant?.info} />

                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;


