import { useNavigate } from "react-router";
import Button from "../../ui/Button";
import { useCartContext } from "../cart/CartContext";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useEffect, useState } from "react";

function ProductItem({ item }) {
  const { cart, dispatch } = useCartContext();
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();
  function handleGoToDetails() {
    navigate(`/productDetails/${item.id}`);
  }

  useEffect(() => {
    // setIsAdded((pre) => !pre);
    if (isAdded) {
      const newCart = { ...item, quantity: 1 };
      dispatch({ type: "addCart", payload: newCart });
    } else {
      const newCart = cart.filter((elem) => elem.id !== item.id);
      dispatch({ type: "updateCart", payload: newCart });
    }
    console.log(cart);
  }, [isAdded]);
  return (
    <li className="border-2 border-indigo-100 rounded-xl shadow-xl w-[100%] sm:w-[49%] md:w-[32%] flex flex-col  px-4 py-3 gap-2">
      <img src={item.image} alt="itemImg" className="w-1/2 m-auto" />
      <div className="p-2 space-y-2 ">
        <p className="font-bold">{item.title}</p>
        <p>
          <span className="font-semibold">Price</span>: {item.price}$
        </p>
        <p>
          <span className="font-semibold">Category</span>: {item.category}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <Button
          action={() => setIsAdded((pre) => !pre)}
          style={` !py-2 sm:text-sm sm:px-2 md:text-sm md:px-1 lg:px-3 ${
            isAdded ? "!bg-gray" : "!bg-blue-600"
          }`}
        >
          {isAdded ? (
            <BsFillCartCheckFill className="text-xl" />
          ) : (
            "add to cart"
          )}
        </Button>
        <Button
          action={handleGoToDetails}
          style=" !py-2 sm:text-sm sm:px-2 md:text-sm md:px-1 lg:px-3 "
        >
          view details
        </Button>
      </div>
    </li>
  );
}
export default ProductItem;
