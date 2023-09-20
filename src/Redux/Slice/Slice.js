import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1,Name : "John", Age : 26, Course : "MERN", Batch : "October"},
    {id: 2,Name : "Doe", Age : 25, Course : "MERN", Batch : "November"},
    {id: 3,Name : "Biden", Age : 26, Course : "MERN", Batch : "September"},
    {id: 4,Name : "Barar", Age : 22, Course : "MERN", Batch : "September"},
    {id: 5,Name : "Christ", Age : 23, Course : "MERN", Batch : "October"},
    {id: 6,Name : "Elent", Age : 24, Course : "MERN", Batch : "November"},
    {id: 7,Name : "Harshita Sharma", Age : 24, Course : "MERN", Batch : "October"},
]


const StudentSlice = createSlice({
    name : "Stu_Data",
    initialState,
    reducers :{
        editStudent : (state,action) => {
            state[action.payload.index] = action.payload.info;
        },
        addStudent : (state,action) => {
            state.push(action.payload.info)
        }
    }
})

export const {editStudent,addStudent} = StudentSlice.actions;
export default StudentSlice.reducer