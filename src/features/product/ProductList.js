import ProductItem from "./ProductItem";
import { IoIosCreate } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import Sort from "./Sort";
import Loader from "../../ui/Loader";
import Button from "../../ui/Button";
import { useNavigate } from "react-router";
import Message from "../../ui/Message";
import { useProductContext } from "./ProductContext";

function ProductList() {
  const { products, loading, pageProducts, numPage, dispatch } =
    useProductContext();
  const navigate = useNavigate();

  function handleCreatePage() {
    navigate("/createProduct");
  }
  function handleCart() {
    navigate("/cart");
  }
  function handlePages(index) {
    dispatch({ type: "changePage", payload: index });
  }

  return (
    <div className="flex flex-col gap-8 relative">
      {!products.length && !loading && (
        <Message
          text="no products found"
          style=" !top-[80%]"
          appear={loading}
        />
      )}
      <div className="self-center flex gap-x-4">
        <Button
          style=" py-2 px-4 !hover:bg-blue-500 !bg-blue-800 !flex items-center gap-3"
          action={handleCreatePage}
        >
          create product <IoIosCreate />
        </Button>
        <Button
          style=" !self-center py-2 px-4 !hover:bg-blue-500 !bg-blue-800 !flex items-center gap-3"
          action={handleCart}
        >
          cart <FaCartShopping />
        </Button>
      </div>
      <Sort />
      <div className="relative">
        {!pageProducts.length && loading ? (
          <Loader />
        ) : (
          <>
            <div className="space-x-1 flex justify-center">
              {pageProducts.length > 0 &&
                Array.from({ length: products.length / 10 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePages(index)}
                    className={`${
                      index + 1 === numPage ? "bg-blue-600" : "bg-gray-500"
                    }  active:bg-blue-600 text-md hover:bg-blue-600 cursor-pointer text-white px-2 rounded-full`}
                  >
                    {index + 1}
                  </button>
                ))}
            </div>
            <ul className="w-[90%] px-5 py-5 m-auto flex gap-2 gap-y-5 justify-center flex-wrap">
              {pageProducts.map((item) => (
                <ProductItem item={item} key={item.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductList;
