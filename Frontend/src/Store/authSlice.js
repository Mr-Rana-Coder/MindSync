import { createSlice } from "@reduxjs/toolkit";
import { persistor } from "./store";

const initialState = {
    accessToken: null,
    refreshToken:null,
    isLoggedIn:false
};

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setCredentials:(state,action)=>{
            state.accessToken = action.payload.data.accessToken;
            state.refreshToken = action.payload.data.refreshToken;
            state.isLoggedIn = true;
        },
        logout:(state)=>{
            state.accessToken = null;
            state.refreshToken = null;
            state.isLoggedIn = false;
        }
    }
});

export const {setCredentials,logout } = authSlice.actions;
export default authSlice.reducer;