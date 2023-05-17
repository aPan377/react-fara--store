import { configureStore } from "@reduxjs/toolkit";
import brandSliderSlice from "./brandSliderSlice";

const store = configureStore({
  reducer: {
    brandSliderImages: brandSliderSlice,
  },
});

export default store;
