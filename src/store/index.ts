import {configureStore} from '@reduxjs/toolkit'

import zooReducer from './zooSlice'

const store = configureStore({
    reducer: {
        zoo: zooReducer,
    }
})  

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch