import React, { createContext, useReducer, useState } from "react";
import AppReducer from './AppReducer';

// initial State

// const initialState = {
//     users:[
//         {id: 1, name: 'User one'},
//         {id: 2, name: 'User two'},
//         {id: 1, name: 'User three'},
//     ]
// }
// Create Context
export const GlobalContext = createContext()

// Provider Component
export const GlobalProvider = ({children}) => {
    // const [state, dispatch] = useReducer(AppReducer, initialState);
    const [users,  setUsers] = useState([
            {id: 1, name: 'User one'},
            {id: 2, name: 'User two'},
            {id: 3, name: 'User three'},
        ])
    const [userForm, setUserForm] = useState([ {id: '', name: ''},])
    return (
        <GlobalContext.Provider value={{
            users, setUsers,
            userForm, setUserForm
        }}>
            {children}
        </GlobalContext.Provider>
    )
}