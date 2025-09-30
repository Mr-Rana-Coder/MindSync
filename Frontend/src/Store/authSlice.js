import { createSlice } from "@reduxjs/toolkit";
import { persistor } from "./store";

const initialState = {
    accessToken: null,
    refreshToken: null,
    isLoggedIn: false
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.accessToken = action.payload.data.accessToken;
            state.refreshToken = action.payload.data.refreshToken;
            state.isLoggedIn = true;
        },
        setUser: (state, action) => {
            state.user = action.payload.data.user
        },
        logout: (state) => {
            state.accessToken = null;
            state.refreshToken = null;
            state.isLoggedIn = false;
            state.user = null;
        }
    }
});

export const { setCredentials, logout, setUser } = authSlice.actions;
export default authSlice.reducer;