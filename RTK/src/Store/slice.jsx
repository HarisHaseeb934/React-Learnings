import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
}


const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers:{
        addTask(state,action){
            return {...state, tasks: [...state.tasks, action.payload]}
        },
        removeTask(state,action){
            return {...state, tasks: state.tasks.filter((curr,index) => index !== action.payload)}
        },
        clearTasks(state){
            return {...state, tasks: []}
        }
    }
})

export const {addTask, removeTask, clearTasks} = taskSlice.actions;

export default taskSlice.reducer;