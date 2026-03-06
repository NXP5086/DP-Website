import { configureStore } from '@reduxjs/toolkit'
import weddingPopupReducer from './slices/weddingPopupSlice'

export const store = configureStore({
    reducer: {
        weddingPopup: weddingPopupReducer,
    },
})