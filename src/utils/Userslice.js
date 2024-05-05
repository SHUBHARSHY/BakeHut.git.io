import { createSlice } from "@reduxjs/toolkit";


const Userslice = createSlice({
    name:'user',
    initialState: {
        items: [],
        userData:[]
    },
    reducers:{
        addUser: (state,action)=>{
            console.log("hello ")
           state.items.push(action.payload)
        },
        removeUser: (state,action) =>{
        state.items.splice(action.payload, 1);
        },
        clearUser: (state)=>{
            state.items =[]
        },
        signDetails:(state,action)=>{
            state.userData.push(action.payload)
        }
    }
})
export const {addUser, removeUser, clearUser,signDetails} = Userslice.actions;
export default Userslice.reducer;