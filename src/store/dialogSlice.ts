import { createSlice } from "@reduxjs/toolkit";

export enum DialogType {
  ConnectionFailure,
  ProductCreation,
}

export interface DialogState {
  isOpen: boolean;
  type: DialogType;
  subTitle: string | null;
}

const initialState: DialogState = {
  isOpen: false,
  type: DialogType.ConnectionFailure,
  subTitle: null,
};

const slice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    openDialog: (state, action) => {
      return { ...action.payload, isOpen: true };
    },
    closeDialog: () => initialState,
  },
});

export const { openDialog, closeDialog } = slice.actions;

export default slice.reducer;
