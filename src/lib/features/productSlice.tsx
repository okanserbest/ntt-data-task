import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: string;
  shippingMethod: string;
}

export interface CounterState {
  value: number;
  likeIds: number[];
  products: Product[];
  isfilterLikes: boolean;
}

const initialState: CounterState = {
  value: 1,
  likeIds: [],
  isfilterLikes: false,
  products: [],
};

// Async Thunk action oluşturma
export const fetchLikes = createAsyncThunk("counter/fetchLikes", async () => {
  const response = await fetch(
    "https://honey-badgers-ecommerce.glitch.me/products"
  );
  const data = await response.json();
  return data;
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    changeLike: (state, action: PayloadAction<number>) => {
      const index = state.likeIds.findIndex((id) => id === action.payload);
      if (index === -1) {
        state.likeIds.push(action.payload);
      } else {
        state.likeIds.splice(index, 1);
      }
    },
    setIsfilterLikes: (state) => {
        // true ise folse yap dalse ise true yap
        state.isfilterLikes = !state.isfilterLikes;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLikes.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { increment, changeLike, setIsfilterLikes } = productSlice.actions;

export default productSlice.reducer;
