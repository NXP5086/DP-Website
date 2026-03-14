'use client'

import { useDispatch } from 'react-redux'
import { openModal } from '../redux/slices/weddingPopupSlice'

export default function ConsultationButton({ className, children }) {
    const dispatch = useDispatch()
    return (
        <button
            onClick={() => dispatch(openModal())}
            className={className}
        >
            {children}
        </button>
    )
}
