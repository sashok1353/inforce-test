import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import ProductClient from "../client/ProductClient";
import { closeDialog } from "./dialogSlice";

export interface CommentModel {
  id: number;
  productId: number;
  description: string;
  date: Date;
}

export interface Product {
  id: number;
  imageUrl: string;
  name: string;
  count: number;
  size: {
    width: number;
    height: number;
  };
  weight: string;
  comments: CommentModel[];
}

export interface ProductsState {
  products: Product[];
  inProgress: boolean;
  error: string | undefined;
}

const initialState: ProductsState = {
  products: [
    {
      id: 1,
      imageUrl: "some url here",
      name: "Product name",
      count: 4,
      size: {
        width: 200,
        height: 200,
      },
      weight: "200g",
      comments: [
        {
          id: 1,
          productId: 1,
          description: "First comment",
          date: new Date(),
        },
        {
          id: 2,
          productId: 1,
          description: "Second comment",
          date: new Date(),
        },
      ],
    },
  ],
  inProgress: false,
  error: undefined,
};

export const loadProducts = createAsyncThunk<Product[], void, { rejectValue: string }>("products/load", async (_, thunkAPI) => {
  return ProductClient.getAll()
    .then((response: AxiosResponse<Product[]>) => response.data)
    .catch((error: AxiosError<string>) => {
      if (error.response?.data) {
        return thunkAPI.rejectWithValue(error.response?.data);
      } else {
        return thunkAPI.rejectWithValue("Unknown error");
      }
    });
});

export const saveProduct = createAsyncThunk<Product, Product, { rejectValue: string }>("product/save", async (product, thunkAPI) => {
  thunkAPI.dispatch(closeDialog());
  return ProductClient.saveProduct(product)
    .then((response: AxiosResponse<Product>) => response.data)
    .catch((error) => thunkAPI.rejectWithValue(error.response?.data));
});

const slice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadProducts.pending, (state) => ({ ...state, inProgress: true, products: [], error: undefined }));
    builder.addCase(loadProducts.rejected, (state, action) => ({ ...state, inProgress: false, error: action.payload }));
    builder.addCase(loadProducts.fulfilled, (state, action) => ({ ...state, inProgress: false, products: action.payload }));
    builder.addCase(saveProduct.pending, (state) => ({ ...state, inProgress: true, error: undefined }));
    builder.addCase(saveProduct.rejected, (state, action) => ({ ...state, inProgress: false, error: action.payload }));
    builder.addCase(saveProduct.fulfilled, (state, action) => ({ ...state, inProgress: false, products: [...state.products, action.payload] }));
  },
});

export default slice.reducer;
