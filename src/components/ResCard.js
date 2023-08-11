import React from 'react'
import { CDN_URL } from '../utils/contents';

const ResCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, slaString, costForTwo, areaName } = resData;

    return (
        <div className="resCard">
            <img className="resLogo" src={CDN_URL + cloudinaryImageId} />
            <h4><p>{name} - {areaName}</p></h4>
            <h5><p>{cuisines.join(", ")}</p></h5>
            <h5>★ {avgRating} Stars</h5>
            <h5>{slaString}</h5>
            <h5>{costForTwo}</h5>
        </div>
    );
};

export default ResCard;