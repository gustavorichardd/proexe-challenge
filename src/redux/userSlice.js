import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: [{
    id: -1,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: ''
      }
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
  }],
  reducers: {
    initialUser(state, { payload }) {
      return {
        ...state, payload
      }
    },
    editUser(state, { payload }) {
      return {
        ...state
      }
    }
  }
})

export const { initialUser, editUser } = userSlice.actions

export default userSlice.reducer