import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Task from "../../models/Task"
import * as enums from '../../utils/enums/Tarefa'

type TasksState = {
  itens: Task[]
}

const initialState: TasksState = {
  itens: [
    {
      id: 2,
      title: 'Grocery Shopping',
      description: 'Buy essential groceries including milk, eggs, and bread. Don’t forget to pick up some fresh fruits.',
      priority: enums.Priority.IMPORTANT,
      status: enums.Status.PENDING
    },
    {
      id: 3,
      title: 'Workout Routine',
      description: 'Start a new workout plan at the gym, focusing on strength training. Ensure to include cardio sessions.',
      priority: enums.Priority.NORMAL,
      status: enums.Status.CONCLUDED
    },
    {
      id: 5,
      title: 'Plan Weekend Trip',
      description: 'Research and finalize the destination, accommodation, and itinerary for the weekend trip. Check for any travel restrictions or requirements.',
      priority: enums.Priority.URGENT,
      status: enums.Status.PENDING
    },
    {
      id: 5,
      title: 'Plan Vacation',
      description: 'Research potential vacation spots for the summer. Look into flight and accommodation options.',
      priority: enums.Priority.NORMAL,
      status: enums.Status.CONCLUDED
    }
  ]
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((task) => task.id !== action.payload)
    },
    edit: (state, action: PayloadAction<Task>) => {
      const indexTask = state.itens.findIndex((t) => t.id === action.payload.id)
      if (indexTask >= 0) {
        state.itens[indexTask] = action.payload
      }
    },
    //  REMOVIDO POIS ERRO DE FALHA NO TRATAMENTO DE PASSAR UMA CLASSE COMO PAYLOADACTION
    //  addTask: (state, action: PayloadAction<Task>) => {
    //   const taskExist = state.itens.find(task => task.title.toLowerCase() === action.payload.title.toLowerCase())
    //   if (taskExist) {
    //     alert('This task is already added.')
    //   } else {
    //     state.itens.push(action.payload)
    //   }
    // },
    addTask: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const taskExist = state.itens.find(task => task.title.toLowerCase() === action.payload.title.toLowerCase())
      if (taskExist) {
        alert('This task is already added.')
      } else {
        const lastTask = state.itens[state.itens.length -1]
        const newTask = {
          ...action.payload,
          id: lastTask ? lastTask.id + 1 : 1
        }
        state.itens.push(newTask)
      }
    },
    changeStatus: (state, action: PayloadAction<{ id: number; finished: boolean}>) => {
      const indexTask = state.itens.findIndex((t) => t.id === action.payload.id)
      if (indexTask >= 0) {
        state.itens[indexTask].status = action.payload.finished ? enums.Status.CONCLUDED : enums.Status.PENDING
      }
    }
  }
})

export const { remove, edit, addTask, changeStatus } = tasksSlice.actions
export default tasksSlice.reducer
