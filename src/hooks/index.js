import { useContext, useState } from "react"
import { login as userLogin} from '../api'

import {AuthContext} from '../providers/AuthProvider'
export const useAuth = () =>{
    return useContext(AuthContext)
}

export const useProvideAuth = () =>{
    // this is a custom hook


    const[user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);


    const login = async (email,password) =>{
       const response = await userLogin(email,password);
       

       if(response.success){
           // usser is logged in successfully so set success = true
           // and also setUser to the logged in user
           setUser(response.data.user);
          return{
              success : true,
            } 
       }
       else{
           return {
               success : false,
               message : response.message
           }
       }


    };

    const logout = () =>{
        setUser(null);
    };


    return {
        user,
        login,
        logout,
        loading
    }
}