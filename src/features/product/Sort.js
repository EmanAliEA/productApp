// import { useState } from "react";

import { useProductContext } from "./ProductContext";

function Sort() {
  const { sortVal, dispatch } = useProductContext();
  // console.log(sortVal);
  return (
    // <div className=" w-[80%] sm:w-[60%] md:w-[40%]">
    <select
      onChange={(e) => dispatch({ type: "sortValue", payload: e.target.value })}
      value={sortVal}
      title="Sort by"
      className="px-6 capitalize text-white  w-[50%] m-auto focus:outline-none py-2 bg-blue-500 rounded-xl"
    >
      <option value="" disabled selected>
        Sort By
      </option>
      <option>category</option>
      <option value="desc">price(desc)</option>
      <option value="asc">price(asc)</option>
    </select>
    // {/* <input
    //   type="text"
    //   placeholder="search"
    //   className="border border-blue-900 px-2 w-[80%] sm:w-[70%] py-1 rounded-xl focus:outline-none shadow-xl"
    // /> */}
    // </div>
  );
}

export default Sort;
