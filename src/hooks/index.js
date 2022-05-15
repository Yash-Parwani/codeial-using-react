import { useState } from "react"

export const useProvideAuth = () =>{
    // this is a custom hook


    const[user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);


    const login = (email,password) =>{};

    const logout = () =>{};


    return {
        user,
        login,
        logout,
        loading
    }
}