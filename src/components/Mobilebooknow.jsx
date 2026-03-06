"use client"

import React from 'react'
import { useDispatch } from "react-redux"
import { openModal } from "../redux/slices/weddingPopupSlice"
import { Button } from "../components/ui/button"
const Mobilebooknow = () => {

    const dispatch = useDispatch()
    return (
        <Button
            onClick={() => dispatch(openModal())}
            className="book-consultation-btn lg:hidden fixed bottom-0 left-0 right-0 px-6 py-4 text-sm font-medium transition-all duration-300">
                Book Consultation
                            </Button >
  )
}

export default Mobilebooknow