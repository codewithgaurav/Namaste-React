import { useEffect, useState } from "react"
import { MENU_API_URL } from "./contents";

export const useResMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    /* 1. if no dependency array in a useEffect hook => useEffect will be called on every render.
       2. if dependency array is empty => useEffect is called only on initial render and just once.  
       3. if dependecy array is [e.g.: btnName] => called everytime [btnName] is updated.
    */

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        setResInfo(json.data);
    }
    return resInfo;
};
