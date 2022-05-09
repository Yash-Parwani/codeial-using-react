// custom fetch for api

import {API_URLS, LOCALSTORAGE_TOKEN_KEY } from "../utils";

const customFetch = async(url,{body,...customConfig}) =>{
    /*
    SOme api urls will require authorization i.e we need to send authorization key inside header bearer

    say we want to create a post ,but a post will be created only for logged in users

    So when we make a login request using api , we need to send this token
    so everything will be inside this custom fetch function


    */
   // once user makes login request, he gets a token after successfull login, so we will store that token in local storage
    const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);


    const headers = {
        'content-type' : 'application/json',
        Accept: 'application/json'
    }


    if(token){
        headers.Authorization = `Bearer ${token}`;
    }
    const config = {
        ...customConfig,
        headers : {
            ...headers,
            ...customConfig.headers,
        },
    };

    if(body){
        config.body = JSON.stringify(body);
    }



    try{
     const response = await fetch(url,config);
     const data = await response.json();
     if(data.success){
         return{
             data: data.data,
             success: true
         };
     }
     throw new Error(data.message);
    }catch(error){
        console.error("Error");
        return{
           message : error.message,
            success: false
        };
    }

};


export const getPosts=(page =1,limit=5)=>{

    // page : page no , limit tells how many posts we want api to fetch for us at once

    return customFetch(API_URLS.posts(page,limit),{
        method:'GET',
    });

}