import { useState } from 'react';
import { useAuth } from '../hooks'
import styles from '../styles/settings.module.css'


const Settings = () =>{


    const auth = useAuth();

    /* editmode state tells us whether user has clicked the button to edit / whether user wants to edit his username and password

    if yes than only we have to show the fields for changing username and password

    */
    const [editMode,setEditMode] = useState(false);
    const [name,setName] = useState(auth.user? auth.user.name : ''); // if user is already signed in than use the already signed in users name else show empty
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    const updateProfile =() =>{

    }


    /*
         than we have another state which will tell whether we have initiated sending updated data

         if its true means we have initiated sending data via api , so we need to disable the buttons to reduce api calls since user can click the buttons repeatedly
         also we can display the loader as well


         after updation ,we will set it to false and than everything will become normal

    */
   const [savingForm,setSavingForm] = useState(false);
   return(
    <div className={styles.settings}>
        <div className={styles.imgContainer}>
        <img src="" alt="user"></img>

        </div>
        <div className={styles.field}>
        <div className={styles.fieldName} >Email</div> 
        <div className={styles.fieldValue} >
            
            {/* displaying user email only when a valid user is present
              auth.user?.email will render email only when we have a valid usr

              its a ternary operator which skips this

              auth.user && auth.user.email    which is our conditional rendereing
            
            */}
            {auth.user?.email}</div> 
      

        </div>


        <div className={styles.field}>
        <div className={styles.fieldLabel} >Name</div>
        {editMode ? 
        (<input
           type="text" 
           value = {name} 
           onChange ={(event) =>{
          setName(event.target.value);
        }} />):  (
          <div className={styles.fieldValue} >
            
            {/* displaying user email only when a valid user is present
              auth.user?.email will render email only when we have a valid usr

              its a ternary operator which skips this

              auth.user && auth.user.email    which is our conditional rendereing
            
            */}
            {auth.user?.name}</div> 
        )}
       

        </div>

        {/* showing password fields only when editmode is true */}
        {editMode && (
          <>
              <div className={styles.field}>
        <div className={styles.fieldName} >Password</div>
       
            
            {/* displaying user email only when a valid user is present
              auth.user?.email will render email only when we have a valid usr

              its a ternary operator which skips this

              auth.user && auth.user.email    which is our conditional rendereing
            
            */}
             <input type="password" value={password} 
             onChange={(event) =>{
               setPassword(event.target.value);
             }}
             />
      

    
      </div>
        <div className={styles.field}>
        <div className={styles.fieldName} >Confirm Password</div>
       
            
            {/* displaying user email only when a valid user is present
              auth.user?.email will render email only when we have a valid usr

              its a ternary operator which skips this

              auth.user && auth.user.email    which is our conditional rendereing
            
            */}
             <input type="password" value={confirmPassword}
             onChange={(event) =>{
               setConfirmPassword(event.target.value);
             }}/>
            
      

        
    </div>

          </>
        )}
      
  <div className={styles.btnGrp}></div>
  {editMode ? (
    <>
     <button className = {`button &{styles.editBtn}`} onClick={updateProfile}>
       {savingForm ? "Saving profile ...." : "    Save profile"}
       
       
       </button>


       {/* button to go back */}
       <button className={`button ${styles.editBtn}`} onClick={() =>{
      setEditMode(false);}}>Go Back</button>

        
    </>
  ):(
    <button className={`button ${styles.editBtn}`} onClick={() =>{
      setEditMode(true);
    }}> Edit Profile </button>
  )}

   </div>
   );
}


export default Settings