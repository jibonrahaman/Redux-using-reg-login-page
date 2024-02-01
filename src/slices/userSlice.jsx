import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo:null
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   userLoginInfo:(state,action)=>{
    console.log(action.payload);
   }
    
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer