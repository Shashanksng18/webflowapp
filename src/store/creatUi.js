import { createSlice } from "@reduxjs/toolkit";

const initialState = {toggle: false, backdrop: false, currentIndex: undefined}
const createUi = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers:{
        toggleMenuBar(state, action){
            state.toggle = !state.toggle;
           
        },
        showBackdrop(state, action){
            state.backdrop = true;
        },
        closeBackdrop(state, action){
            state.backdrop = false;
        },
        setCurrentIndex(state, action){
            state.currentIndex = action.payload;
        }
    }
})

export default createUi.reducer;

export const uiAction = createUi.actions;