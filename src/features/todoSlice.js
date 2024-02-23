import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


// post todo task
export const createTask = createAsyncThunk('todoList/createTask', async(data) => {
    try{
        const response = await axios.post("http://localhost:4000",data);
        if(!response.data){
            throw new Error('creating new task failed')
        }
        return response.data
    }catch(error){
        console.error("something went wrong",error)
    }
})

// retrive all task
export const showTasks = createAsyncThunk('todoList/showTasks', async() => {
    try{
        const response = await axios.get("http://localhost:4000");
        if(!response.data){
            throw new Error('creating new task failed')
        }
        return response.data
    }catch(error){
        console.error("something went wrong",error)
    }
})

// edit task
export const updateTask = createAsyncThunk('todoList/updateTask', async({id,data}) => {

    try{
        const response = await axios.put(`http://localhost:4000/${id}`,data);
        if(!response.data){
            throw new Error('creating new task failed')
        }
        return response.data
    }catch(error){
        console.error("something went wrong",error)
    }
})

// delete task
export const removeTask = createAsyncThunk('todoList/removeTask', async(id) => {
    try{
        const response = await axios.delete(`http://localhost:4000/${id}`);
        if(!response.data){
            throw new Error('creating new task failed')
        }
        return response.data
    }catch(error){
        console.error("something went wrong",error)
    }
})

const initialState = {
    todoList:[],
    taskCount:"",
    status:[],
    completedCount:0
  };
  
  const todoSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
      builder
        .addCase(createTask.fulfilled, (state) => {
          state.status = "success";
        })
        .addCase(createTask.rejected, (state) => {
          state.status = "failed";
        })
        .addCase(showTasks.fulfilled, (state,action) => {
          state.status = "success";
          state.todoList = action.payload;
          state.taskCount = action.payload.length;
        })
        .addCase(showTasks.rejected, (state) => {
          state.status = "failed";
        })
        .addCase(removeTask.fulfilled, (state) => {
          state.status = "success";
        })
        .addCase(removeTask.rejected, (state) => {
          state.status = "failed";
        })
        .addCase(updateTask.fulfilled, (state) => {
          state.status = "success";
        })
        .addCase(updateTask.rejected, (state) => {
          state.status = "failed";
        })
    },
  });
  
//   export const { setSingleInput, setAllTask } = taskSlice.actions;
  export default todoSlice.reducer;
  