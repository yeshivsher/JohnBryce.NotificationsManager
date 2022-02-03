import { createSlice } from '@reduxjs/toolkit'

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        notifications: [
            {
                id: 1,
                msg: 'There is new message for you!'
            },
            {
                id: 2,
                msg: 'There is brand new message for you!'
            }
        ]
    },
    reducers: {
        addNotification: (state, action) => {
            let lastId = state.notifications[state.notifications.length - 1].id

            state.notifications.push({
                id: lastId + 1,
                msg: action.payload.message
            })
        }
    }
})

export const { addNotification } = navbarSlice.actions

export default navbarSlice.reducer