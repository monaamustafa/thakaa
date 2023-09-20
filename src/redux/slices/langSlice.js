import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  lang: 'en',
}

export const langSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {changeLang } = langSlice.actions

export default langSlice.reducer