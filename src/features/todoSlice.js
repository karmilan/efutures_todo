import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({

    name:'todo',
    initialState: [
        {id: 1, title: 'todo1', pri: 'High', completed: false},
        {id: 2, title: 'todo2', pri: 'Mid', completed: false},
        {id: 3, title: 'todo3', pri: 'Low', completed: true}
    ],

    reducers: {
        addTodo: (state, action)=>{
            const newTodo = {
                id: Date.now(),
            title: action.payload.title,
            pri: action.payload.pri,
            completed: false
            }
            state.push(newTodo)
        },
        isComplete: (state, action)=>{
            const index = state.findIndex(
                (todo)=>todo.id === action.payload.id
            )
            state[index].completed = action.payload.completed;
        }
    }
})

export const { addTodo, isComplete, } = todoSlice.actions;

export default todoSlice.reducer;