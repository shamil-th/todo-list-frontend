import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todoSlice";


const store = configureStore({
    reducer: {
        todoList:todoSlice
    }
});

export default store;