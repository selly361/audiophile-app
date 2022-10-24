import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        type: "",
        open: false,
        data: {}
        
    },

    reducers: {
        openModal: (state, action) => {
            
            return {
                ...state,
                ...action.payload,
                open: true
            }
        },

        closeModal: (state) => {
            return {
                ...state,
                open: false,
                type: "",
                data: {}
                
            }
        }
    }
})

export default modalSlice.reducer;
export const { openModal, closeModal  } = modalSlice.actions