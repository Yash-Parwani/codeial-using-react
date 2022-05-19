import { useAuth } from '../hooks'
import styles from '../styles/settings.module.css'


const Settings = () =>{

    const auth = useAuth()
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
        <div className={styles.fieldValue} >
            
            {/* displaying user email only when a valid user is present
              auth.user?.email will render email only when we have a valid usr

              its a ternary operator which skips this

              auth.user && auth.user.email    which is our conditional rendereing
            
            */}
            {auth.user?.name}</div> 
      

        </div>

        <div className={styles.field}>
        <div className={styles.fieldName} >Password</div>
        <div className={styles.fieldValue} >
            
            {/* displaying user email only when a valid user is present
              auth.user?.email will render email only when we have a valid usr

              its a ternary operator which skips this

              auth.user && auth.user.email    which is our conditional rendereing
            
            */}
             <input type="password" />
      

        </div>
      </div>
        <div className={styles.field}>
        <div className={styles.fieldName} >Confirm Password</div>
        <div className={styles.fieldValue} >
            
            {/* displaying user email only when a valid user is present
              auth.user?.email will render email only when we have a valid usr

              its a ternary operator which skips this

              auth.user && auth.user.email    which is our conditional rendereing
            
            */}
             <input type="password" />
            
      

        </div>
    </div>
  <div className={styles.btnGrp}></div>
     <button className = {`button &{styles.editBtn}`}>Edit profile</button>

   </div>
   );
}


export default Settings