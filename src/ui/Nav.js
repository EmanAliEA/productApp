import { RiShoppingBag4Fill } from "react-icons/ri";
import { useNavigate } from "react-router";
import Button from "./Button";
function Nav() {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-around items-center  px-2 py-4 bg-gray-300">
      <div className="flex items-center gap-1">
        <RiShoppingBag4Fill className="text-2xl" />
        <button onClick={() => navigate("/")} className="uppercase font-bold">
          store
        </button>
      </div>
      <p className="capitalize">welcome user</p>
      {/* <div className="space-x-2">
        <Button>login</Button>
        <Button>logout</Button>
      </div> */}
    </nav>
  );
}

export default Nav;
