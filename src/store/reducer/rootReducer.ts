import { combineReducers } from '@reduxjs/toolkit'
import { counterSlice } from '../slice/counter-slice'

export const rootReducer = combineReducers({
    counter: counterSlice.reducer,
})
