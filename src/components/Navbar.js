import styles from '../styles/navbar.module.css'

const Navbar = () =>{
    return (
       <div>
           <div className={styles.leftDiv}>
                   <a href="/" >
                   <img alt=" " src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png" />
                   </a>

                   
           </div>

           <div className={styles.rightNav}>
               <div className={styles.user}>
                     <a href = "/" >
                       <img 
                        src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
              alt=""
              className={styles.userDp}>
                     </a>
                     <span>Yash</span>
               </div>
               <div className={styles.navLinks}></div>
               <ul>
                   <li>
                       <a href="/" >
                           Login
                       </a>
                   </li>
                   <li>
                       <a href="/">
                           Logout
                        </a>
                   </li>
                   <li>
                       <a href="/">
                           Register
                       </a>
                   </li>

               </ul>


           </div>
       </div>
    );
}


export default Navbar;