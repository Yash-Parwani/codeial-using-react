import { useAuth } from '../hooks';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  const auth = useAuth();
  return (
    <div>
      <div className={styles.leftDiv}>
        <Link to="/">
          <img
            alt=" "
            src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
          />
        </Link>
      </div>

      <div className={styles.rightNav}>
        {auth.user && (
          <div className={styles.user}>
            <Link to='/settings'></Link
            >
            <Link to="/">
              <img
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt=""
                className={styles.userDp}
              />
            </Link>
            <span>{auth.user.name} </span>
          </div>
        )}

        <div className={styles.navLinks}></div>
        <ul>
          {/* if user exists than show only logout else show login */}
          {auth.user ? (
            <>
              <li>
                <button onClick={auth.logout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
            <Link to="/login">Login</Link>
          </li>

          <li>
            <a href="/">Register</a>
          </li>
            </>
          )}
         
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
