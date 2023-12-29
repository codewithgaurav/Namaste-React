import CategoryItemList from "./CategoryItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    const handleClick = () => {
        setShowIndex();
    }

    return (
        <div>
            {/* Accordion Header */}
            <div className="w-6/12 hover:shadow-lg duration-200 p-4 mx-auto my-5 border-b-8 " >
                <div className="flex justify-between my-2 " >
                    <span className="font-extrabold text-lg cursor-pointer" onClick={() => handleClick}>
                        {data.title} ({(data.itemCards.length)})
                    </span>

                    <span className="cursor-pointer"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleClick}>
                        <path d="M4 8L12 16L20 8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg></span>
                </div>
                {showItems && <CategoryItemList items={data?.itemCards} />}
            </div>
        </div>
    );
};

export default RestaurantCategory;