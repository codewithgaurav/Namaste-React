import { useDispatch, useSelector } from "react-redux";
import cartSlice, { clearCart } from "../../utils/cartSlice";
import CategoryItemList from "../Res_category_component/CategoryItemList";
import { Link } from "react-router-dom";



const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items)
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="w-6/12 m-auto my-6">
            <div className="text-center relative m-4">
                <h1 className="font-bold text-3xl"> Cart</h1>
                <button className="bg-red-600 rounded-md text-white p-1 absolute right-1 top-1"
                    onClick={handleClearCart}
                >Clear Cart
                </button>
            </div>
            <div className="border border-black my-10 p-4">
                {cartItems.length === 0 && <h2 className="text-2xl">Looks like your Cart is empty! Please add somenthing.{" "}
                    <Link to="/" className="underline">Store</Link>
                </h2>}
                <CategoryItemList items={cartItems} />
            </div>
        </div>
    )
};

export default Cart;