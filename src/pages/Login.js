import { useState } from 'react';
import styles from '../styles/login.module.css';


// importing useToasts to show notifications
import { useToasts } from 'react-toast-notifications';
const Login = () => {
  // we will require state for email as well as password as well as login

  // state for login will disable the login button untill we complete password beyond a certain length

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggingin, setLoggingin] = useState('');
  const {addToast} = useToasts

  const handleSubmit= (event) =>{
      // removing default submission of form since we dont want our page to be reloaded when form is getting submitted

      event.preventDefault();



      // setting logging in as true
      setLoggingin(true);


      // checking if user has written email or password or has submitted blank form

      if (!email || !password){
        // showing error notification
          return addToast('Please enter both email and password',{
              appearence: 'error',
          });
      }
  }
  return (
    //   handling form submit so that it does not submit automatically causing a re-render
    // we will be handling the submit all by ourselves
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <span className={styles.loginSignupHeader}>Log in</span>
      <div className={styles.field}>
        <input type="email" placeholder="Email" required value={email} onChange={(event) =>{
            /* on change will be called when user types .

             As user types value of email updates so we would want to set Its value as well
             So we need to call event.target.value which gives the value entered by the user


            */
              setEmail(event.target.value);
        }} />
      </div>

      <div className={styles.field}>
        <input type="password" placeholder="Password" required  value={password} onChange={(event) =>{
            /* on change will be called when user types .

             As user types value of email updates so we would want to set Its value as well
             So we need to call event.target.value which gives the value entered by the user


            */
              setPassword(event.target.value);
        }}/>
      </div>
      <div className={styles.field} disabled={loggingin}>
        <button>
          {/* if logging in is true means user has clicked Login button so we will disable it
            
            it will help us because say user paagal ho gaya or continuously click karte gaya button ko
            so it will lead to a lot of api calls and system crash ho jaega

            so here we will be calling only once with help of logging in so that only one api request call is made
            
            */}
          {loggingin ? 'Logging in...' : 'Login'}
        </button>
      </div>
    </form>
  );
};

export default Login;
