import { useContext, useEffect, useState } from "react"
import { login as userLogin} from '../api'
import jwtDecode from "jwt-decode"

import {AuthContext} from '../providers/AuthProvider'
import { setItemInLocalStorage,LOCALSTORAGE_TOKEN_KEY, removeItemFromLocalStorage, getItemFromLocalStorage } from "../utils"
export const useAuth = () =>{
    return useContext(AuthContext)
}

export const useProvideAuth = () =>{
    // this is a custom hook


    const[user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

   useEffect(()=>{
       // getting token from localstorage
       const userToken = getItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY);

          // if userToken exists we get the user from the token
       if(userToken){
           const user = jwtDecode(userToken);


           // setting usser 
           setUser(user);

           // setting loading to false since we have loaded the user

        }
        setLoading(false);
   },[])
    const login = async (email,password) =>{
       const response = await userLogin(email,password);
       

       if(response.success){
           // usser is logged in successfully so set success = true
           // and also setUser to the logged in user
           setUser(response.data.user);
           //setting tokein in local storage
           setItemInLocalStorage(LOCALSTORAGE_TOKEN_KEY,response.data.token ? response.data.toke : null)
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
        removeItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY);
    };


    return {
        user,
        login,
        logout,
        loading
    }
}