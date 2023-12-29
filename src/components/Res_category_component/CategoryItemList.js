import { MENU_LOGO_URL } from "../../utils/contents";
import { addItem } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";

const CategoryItemList = ({ items }) => {
    // console.log(items);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map((item) => (
                <div key={item?.card?.info?.id} className="flex justify-between my-10 border-b-[1px]">
                    <div className="flex flex-col text-left " >
                        <div>
                            <span className="font-semibold">{item?.card?.info?.name}</span>
                        </div>
                        <div>
                            <span>₹{item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice}</span>
                            <span>{item?.card?.info?.title}</span>
                        </div>
                        <div className="text-[rgba(40,44,63,.45)] text-xs w-3/4 ">
                            <p >{item?.card?.info?.description}</p>
                        </div>
                    </div>
                    <div className="menu-img relative my-4 ">
                        <div className="absolute left-[20%] top-[55%]">
                            <button className="addto_cart bg-white right-auto cursor-pointer py-2 px-1 my-2 text-green-600 border rounded-lg font-bold h-10 w-20 hover:shadow-lg shadow-[2px 2px 8px #60b246] duration-150"
                                onClick={() => handleAddItem(item)}
                            >Add+</button>
                        </div>
                        < img className="menu-logo m-1 w-32 h-24 cursor-pointer rounded-md bg-[rgb(224, 238, 245] " src={`${MENU_LOGO_URL}${item.card.info.imageId}`} alt={item.card.info.name} />
                    </div>
                </div>
            ))}
        </div>
    );

};

export default CategoryItemList;