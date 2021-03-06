import { useState } from 'react';
import styles from '../styles/login.module.css';

// importing useToasts to show notifications
import { useToasts } from 'react-toast-notifications';

// importing login from api

import { login } from '../api';

import {Redirect} from 'react-router-dom'
import {useAuth} from '../hooks'
const Login = () => {
  // we will require state for email as well as password as well as login

  // state for login will disable the login button untill we complete password beyond a certain length

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggingin, setLoggingin] = useState('');
  const { addToast } = useToasts;

  const auth = useAuth();

  // console logging
  console.log(auth);
  const handleSubmit = async (event) => {
    // removing default submission of form since we dont want our page to be reloaded when form is getting submitted

    event.preventDefault();

    // setting logging in as true
    setLoggingin(true);

    // checking if user has written email or password or has submitted blank form

    if (!email || !password) {
      // showing error notification
      return addToast('Please enter both email and password', {
        appearence: 'error',
      });
    }

    // loggin in inside api

    const response = await auth.login(email, password);

    if (response.success) {
      // show success notification

      addToast('Successfully logged in', {
        appearence: 'success',
      });
    } else {
       addToast(response.message, {
        appearence: 'error',
      });
    }



    setLoggingin(false);
  };
  /*
   if user is logged in , so we should not show him the login page
   so in that case when user is logged in , we will redirect the user to home page


   how to know if user is logged in or not

   well auth.user will tell us whether user is logged in or not

*/

if(auth.user){
  return <Redirect to ='/' />
}
  return (
    //   handling form submit so that it does not submit automatically causing a re-render
    // we will be handling the submit all by ourselves
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <span className={styles.loginSignupHeader}>Log in</span>
      <div className={styles.field}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(event) => {
            /* on change will be called when user types .

             As user types value of email updates so we would want to set Its value as well
             So we need to call event.target.value which gives the value entered by the user


            */
            setEmail(event.target.value);
          }}
        />
      </div>

      <div className={styles.field}>
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(event) => {
            /* on change will be called when user types .

             As user types value of email updates so we would want to set Its value as well
             So we need to call event.target.value which gives the value entered by the user


            */
            setPassword(event.target.value);
          }}
        />
      </div>
      <div className={styles.field}>
        <button disabled={loggingin}>
          {/* if logging in is true means user has clicked Login button so we will disable it
            
            it will help us because say user paagal ho gaya or continuously click karte gaya button ko
            so it will lead to a lot of api calls and system crash ho jaega

            so here we will be calling only once with help of logging in so that only one api request call is made
            


            so disabled attribute helps us to achieve that
            */}
          {loggingin ? 'Logging in...' : 'Login'}
        </button>
      </div>
    </form>
  );
};

export default Login;
