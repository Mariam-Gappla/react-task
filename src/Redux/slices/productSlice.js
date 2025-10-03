import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts, getProductById} from "../../services/products";
// Thunk: Fetch product by ID
export const fetchproductsById = createAsyncThunk(
  "products/productId",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await getProductById(productId);
      console.log(response.data)
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);
export const fetchproducts = createAsyncThunk(
  "products",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProducts();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);



const productsSlice = createSlice({
  name: "products",
  initialState: {
    product: null,
    productLoading: false,
    productError: null,

    fetchedProduct: null,
    fetchedLoadingProduct: false,
    fetchedErrorProduct: null,
  },
  reducers: {
    clearProduct: (state) => {
      state.product = null;
      state.productError = null;
    },
    clearFetchedProduct: (state) => {
      state.fetchedProduct = null;
      state.fetchedErrorProduct = null;
    },
  },
  extraReducers: (builder) => {
   
    // ✅ Fetch product
    builder
      .addCase(fetchproducts.pending, (state) => {
        state.fetchedLoadingProduct = true;
        state.fetchedErrorProduct = null;
      })
      .addCase(fetchproducts.fulfilled, (state, action) => {
        state.fetchedLoadingProduct = false;
        state.fetchedProduct = action.payload;
        console.log(action.payload)
      })
      .addCase(fetchproducts.rejected, (state, action) => {
        state.fetchedLoadingProduct = false;
        state.fetchedErrorProduct = action.payload;
      });

    // ✅ get product by id
    builder
      .addCase(fetchproductsById.pending, (state) => {
        state.productLoading = true;
        state.productError = null;
      })
      .addCase(fetchproductsById.fulfilled, (state, action) => {
        state.productLoading = false;
        state.product= action.payload;
        console.log(state.product)
      })
      .addCase(fetchproductsById.rejected, (state, action) => {
        state.productLoading = false;
        state.productError = action.payload;
      });
  },
});

export const { clearProduct, clearFetchedProduct} = productsSlice.actions;
export default productsSlice.reducer;
