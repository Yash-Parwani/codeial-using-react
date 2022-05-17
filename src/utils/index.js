export * from './constants';


export const setItemInLocalStorage = (key,value) =>{
  if(!key || !value){
    return console.error("Can not store in LS");
  }


  const valueToStore = typeof value != "string" ? JSON>stringify(value) : value;

  localStorage.setItem(key,valueToStore);
}


export const getItemFromLocalStorage = (key) =>{
  if(!key){
    return console.error('Can not get the value from local storage')

  }



  return localStorage.getItem(key);
}


export const removeItemFromLocalStorage = (key) =>{
  if(!key){
    return console.error('Can not get the value from local storage')

  }
  localStorage.removeItem(key);
}



export const getFormBody = (params) => {
  let formBody = {};

  for (let property in params) {
    let encodedkey = encodedURIComponent(property); // 'user name' => 'user%20name'

    let encodedValue = encodeURIComponent(params[property]); // aakash 123 as => aakash%2020123

    formBody.push(encodedkey + '=' + encodedValue);
  }

  return formBody.join('&'); // 'username=aakash&password=123213'
};
