import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: false,
}

export const weddingPopupSlice = createSlice({
    name: 'weddingPopup',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true
        },
        closeModal: (state) => {
            state.isOpen = false
        },
        toggleModal: (state) => {
            state.isOpen = !state.isOpen
        }
    },
})

export const { openModal, closeModal, toggleModal } = weddingPopupSlice.actions
export default weddingPopupSlice.reducer
