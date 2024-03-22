import { configureStore } from '@reduxjs/toolkit'
import UserReducher from './Reducer/UserReducher'

export default configureStore({
  reducer: {
    conractData: UserReducher
  },
})