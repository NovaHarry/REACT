import { useDispatch, useSelector } from "react-redux";
import { MENU_IMG_URL } from "../utils/config";
import { addItems, clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  //DISPATCHING AN ACTION
  const dispatch = useDispatch();

  const handleAddItems = (food) => {
    dispatch(addItems(food));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center font-bold text-2xl">
      <h1>Cart</h1>

      {cartItems.length === 0 ? (
        <div className="grid justify-center p-2 gap-4">
          {/* <img src="https://bakestudio.in/assets/images/cart/empty-cart.gif" /> */}
          <img src="https://media.tenor.com/krFqoVs-cUAAAAAC/vadivelu.gif" />
          <h1>Cart is empty 😕. Add some delicious foods 🤤.</h1>
        </div>
      ) : (
        <div>
          <button
            className="bg-black text-white rounded-lg p-1"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <div className="w-6/12 m-auto shadow-xl p-2 text-lg">
            {cartItems.map((data, index) => (
              <div
                key={index}
                className="flex justify-between border-b-2"
                data-testid="addedCartItems"
              >
                <div className="grid text-left py-4 w-10/12">
                  <span className="font-bold">{data.card.info.name}</span>
                  <span className="font-semibold">
                    ₹
                    {data.card.info.price / 100 ||
                      data.card.info.defaultPrice / 100}
                  </span>
                  <span className="text-sm font-normal">
                    {data.card.info.description}
                  </span>
                </div>
                <div className="w-3/12 p-6 relative">
                  <img
                    src={MENU_IMG_URL + data.card.info.imageId}
                    className="rounded-md h-40 w-auto"
                  />
                  <div className="absolute bottom-3 bg-white inset-x-20 rounded-md border-black border-[1px]">
                    <button onClick={() => handleAddItems(data)}>Add +</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
