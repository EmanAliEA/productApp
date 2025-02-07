import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "",
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts(state, action) {
      state.products = action.payload;
    },
    sort(state, action) {
      state.sort = action.payload;
      sortProducts(state.sort, state.products);
    },
    S,
  },
});

function sortProducts(sortVal, products) {
  let sortedProducts;
  if (sortVal === "category") {
    sortedProducts = [...products].sort((a, b) =>
      a.category.localeCompare(b.category)
    );
  } else if (sortVal === "desc") {
    sortedProducts = [...products].sort((a, b) => b.price - a.price);
  } else if (sortVal === "asc") {
    sortedProducts = [...products].sort((a, b) => a.price - b.price);
  } else {
    sortedProducts = products;
  }
  return sortedProducts;
}

export const { getProducts, sort } = productSlice.actions;

export default productSlice.reducer;
