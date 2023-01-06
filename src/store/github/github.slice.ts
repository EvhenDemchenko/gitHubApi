import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IGithubState {
    favourites: string[]
}
const LS_KEY = 'RFK'

const initialState: IGithubState = {
    favourites: JSON.parse(localStorage.getItem(LS_KEY) ?? '[]')
}

export const githubSlice = createSlice({
    name: 'githubSlice',
    initialState,
    reducers: {
        addToFavourite: (state, action: PayloadAction<string>) => {
            state.favourites.push(action.payload)
            localStorage.setItem(LS_KEY, JSON.stringify(state.favourites))
        },
        removeFromFavourite: (state, action: PayloadAction<string>) => {
            state.favourites = state.favourites.filter(item => item != action.payload)
            localStorage.setItem(LS_KEY, JSON.stringify(state.favourites))
        }
    }
})

export const githubActions = githubSlice.actions
export const githubReducer  = githubSlice.reducer
