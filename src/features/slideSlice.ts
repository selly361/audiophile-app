import { createSlice } from "@reduxjs/toolkit";
import { slideData } from "data/slideData"

const slideSlice = createSlice({
    name: "Slider",

    initialState: {
        slideData,
        currentIndex: 0,
        currentSlide: slideData[0],
        isChanging: false,
    },

    reducers: {
        nextSlide: (state) => {
            state.isChanging = true

            // check if the current index is the last slide, if it is then change it to the first index
            
            if (state.slideData.length - 1 === state.currentIndex) {
                state.currentIndex = 0
            }
            // if its not then add one to the state.currentIndex which would make it go to the next slide
            else {
                state.currentIndex += 1
            }

            state.currentSlide = state.slideData[state.currentIndex]
            state.isChanging = false
        },

        previousSlide: (state) => {
            state.isChanging = true
            // check if the current index is the first slide, if it is then change it to the last index

            if (state.currentIndex === 0) {
                state.currentIndex = state.slideData.length - 1
            }
            // if its not then subtract one from the state.currentIndex which would make it go to the previous slide
            else {
                state.currentIndex -= 1
            }

            state.currentSlide = state.slideData[state.currentIndex]
            state.isChanging = false

        }
    }
})

export default slideSlice.reducer;
export const { nextSlide, previousSlide } = slideSlice.actions;