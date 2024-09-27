import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

// Create Store
export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
})

// Step:
// 1: Create Store
// 2: Wrap app components under provider
// 3: create Slice
// 4: Register reducer in store
