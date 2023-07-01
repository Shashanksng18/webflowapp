import { configureStore } from "@reduxjs/toolkit";
import creatUi from "./creatUi";

const store = configureStore({
    reducer: {ui: creatUi}
})

export default store;