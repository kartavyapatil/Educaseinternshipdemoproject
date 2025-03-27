import {createSlice} from '@reduxjs/toolkit';
export const userslice=createSlice({
    name:"userslice",
    initialState:{
        fullName: "",
        phoneNumber: "",
        email: "",
        password: "",
        company: "",
        isAgency: "",
    },
    reducers:{
        setUser(state,action){
            state.fullName=action.payload.fullName;
            state.phoneNumber=action.payload.phoneNumber;
            state.email=action.payload.email;
            state.password=action.payload.password;
            state.company=action.payload.company;
            state.isAgency=action.payload.isAgency;
        },
            resetUser(state){
                state.fullName="";
                state.phoneNumber="";
                state.email="";
                state.password="";
                state.company="";
                state.isAgency="";
            }
        
    }
});
export const {setUser,resetUser}=userslice.actions;
export const userslicepath = (state) => state.userslice.user;
