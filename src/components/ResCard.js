import React from 'react'
import { CDN_URL } from '../utils/contents';

const ResCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, slaString, costForTwoString } = resData?.data;
    return (
        <div className="resCard">
            <img className="resLogo" src={CDN_URL + cloudinaryImageId} />
            <h4>{name}</h4>
            <h5>{cuisines.join(", ")}</h5>
            <h5>★ {avgRating} Stars</h5>
            <h5>{slaString}</h5>
            <h5>{costForTwoString}</h5>
        </div>
    )
}

export default ResCard;
