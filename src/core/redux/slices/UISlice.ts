import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EnumView } from "../../enums/EnumView";

interface UIState {
  view: EnumView;
  isAdmin?: boolean;
  hasResponse?: boolean;
}

const initialState: UIState = {
  view: EnumView.None,
};

const UISlice = createSlice({
  initialState,
  name: "sliceUI",
  reducers: {
    setPageView(state, action: PayloadAction<EnumView>) {
      state.view = action.payload;
    },
    setIsAdmin(state, action: PayloadAction<boolean>) {
      state.isAdmin = action.payload;
    },
    setHasResponse(state, action: PayloadAction<boolean>) {
      state.hasResponse = action.payload;
    },
  },
});
export const UIReducer = UISlice.reducer;
export const UIAction = UISlice.actions;
