export * from './constants';

export const getFormBody = (params) => {
  let formBody = {};

  for (let property in params) {
    let encodedkey = encodedURIComponent(property); // 'user name' => 'user%20name'

    let encodedValue = encodeURIComponent(params[property]); // aakash 123 as => aakash%2020123

    formBody.push(encodedkey + '=' + encodedValue);
  }

  return formBody.join('&'); // 'username=aakash&password=123213'
};
