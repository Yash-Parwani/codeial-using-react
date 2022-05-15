import { createContext } from "react";


// importing useProvide auth from hooks


import {useProvideAuth} from "../hooks"

// creating initial state which will be passed to AuthContext

const initialState = {
    user : null,
    login: () =>{

    },
    logout: () =>{

    },
    // if the user is being currently proccessed or not is represented by loading field
    loading: true
}

export const AuthContext = createContext(initialState);



export const AuthProvider = ({children}) =>{
    const auth = useProvideAuth();
    return <AuthContext.Provider value = {auth}>{children} </AuthContext.Provider>
}