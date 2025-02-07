import { useEffect, useState } from "react";
import { useNavigate, useNavigation, useParams } from "react-router";
import { getItem } from "../../services/apiProducts";
import Button from "../../ui/Button";
import { IoArrowBack } from "react-icons/io5";
import Loader from "../../ui/Loader";
import { FaCartPlus } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useCartContext } from "../cart/CartContext";
function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const { cart, dispatch } = useCartContext();
  const isLoading = navigation.state === "loading";
  const [product, setProduct] = useState({});
  const [isAdded, setIsAdded] = useState(false);
  function handleBack() {
    navigate("/");
  }
  useEffect(() => {
    if (isAdded) {
      const newCart = { ...product, quantity: 1 };
      dispatch({ type: "addCart", payload: newCart });
    } else {
      const newCart = cart.filter((elem) => elem.id !== product.id);
      dispatch({ type: "updateCart", payload: newCart });
    }
    console.log(cart);
  }, [isAdded]);
  useEffect(() => {
    async function item() {
      const item = await getItem(id);
      setProduct(item);
    }
    item();
  }, []);

  return (
    <div className="w-[90%] relative flex flex-col gap-5 items-center  m-auto justify-center">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <img src={product?.image} alt="itemImg" className="w-2/5" />
          <p className="font-bold text-lg">{product?.title}</p>
          <div className="self-start border shadow-xl shadow-black rounded-md space-y-3 p-5">
            <p>{product?.description}</p>
            <p>
              <span className="font-semibold">Category</span>:{" "}
              {product?.category}
            </p>
            <p>
              <span className="font-semibold">Price</span>: {product?.price}$
            </p>
            <div className="flex justify-between items-center">
              <Button style=" !px-5 !py-2" action={handleBack}>
                <IoArrowBack className="text-lg" />
              </Button>
              <Button
                action={() => setIsAdded((pre) => !pre)}
                style={` !py-2 sm:text-sm sm:px-2 md:text-sm md:px-1 lg:px-3 ${
                  isAdded ? "!bg-gray" : "!bg-blue-600"
                }`}
              >
                {isAdded ? (
                  <BsFillCartCheckFill className="text-xl" />
                ) : (
                  <FaCartPlus className="text-xl" />
                )}
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetails;
