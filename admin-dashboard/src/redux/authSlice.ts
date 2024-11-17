import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  authKey: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  authKey: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setAuthKey: (state, action: PayloadAction<string | null>) => {
      state.authKey = action.payload;
    },
  },
});

export const { setAuthenticated, setAuthKey } = authSlice.actions;

export default authSlice.reducer;
