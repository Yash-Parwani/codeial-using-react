import styles from '../styles/navbar.module.css'

const Navbar = () =>{
    return (
       <div>
           <div className={styles.leftDiv}>
                   <Link to="/" >
                   <img alt=" " src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png" />
                   </Link>

                   
           </div>

           <div className={styles.rightNav}>
               <div className={styles.user}>
                     <Link to= "/" >
                       <img 
                        src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
              alt=""
              className={styles.userDp} />
                     </Link>
                     <span>Yash</span>
               </div>
               <div className={styles.navLinks}></div>
               <ul>
                   <li>
                       <Link to="/login" >
                           Login
                       </Link>
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