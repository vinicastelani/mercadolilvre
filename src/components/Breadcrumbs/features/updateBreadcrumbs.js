import { createSlice } from '@reduxjs/toolkit'

export const breadcrumbsSlice = createSlice({
  name: 'breadcrumbs',
  initialState: {
    value: [{
      title:"Home",
      url:"/"
    }],
  },
  reducers: {
    decrement: (state) => {
      state.value.splice(state.value.length-1,1)
    },
    incrementByAmount: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = breadcrumbsSlice.actions

export default breadcrumbsSlice.reducer