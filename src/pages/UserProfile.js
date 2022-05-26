import { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';



import styles from '../styles/settings.module.css';
import { useAuth } from '../hooks';
import { useParams } from 'react-router-dom';
import { fetchUserProfile } from '../api';
import { useHistory } from 'react-router-dom';
import { Loader } from '../components';

const UserProfile = () => {
  const auth = useAuth();
  // to store user information
  const  {user,setUser} = useState({});

  // helps to know when to display loader while fetching user

  const[loading,setLoading] = useState(true);

  // getting user id from the params , using useParams hook
  const {userId} = useParams();


  const {addToast} = useToasts();
  const history = useHistory();
  
  
  // calling fetchUserINfo api call to fetch userInfo

  // now it will be inside useEffect since we will be using lifecycle method of ComponentDid MOunt ,Component did update because as soon as component mounts we want to make an api call and also as soon as componenet gets updated we want to make api call to fetch fresh info of the updated user

// also by defination of ComponentDidMount state , ComponentDidUpdate , we usually make api calls , network calls in CDM() and CDU()

useEffect(() =>{

       const getUser= async () =>{
         // making an api call to fetch user info
             const response = await fetchUserProfile(userId);

             if(response.success){
               // we dont display success message over here since we dont want user to know if the information is fetched successfully or not
                 //setUser with the data fetched
                 setUser(response.data.user);
             }
             else{

              // adding error notification
                 addToast(response.message),{
                   appearence : 'error'
                 };
                 return history.push('/');
             }

              //since we have fetched info successfully loader needs to stop so setLoading to false


              setLoading(false);
       };

       getUser();
},[userId,history,addToast]);


// if loading is true than return loader

if(loading){
  return <Loader />
}

const checkIfUserIsAFreind = () =>{
  // auth.user has a field friends which stores which all user are friends of the given user
  const friends = auth.user.friends

  const friendIds= friends.map(friend => friend.to_user._id);
  const index = friendIds.indexOf(userId);


  if(index !== -1){
    // means the current user is friend of the clicked user so we return true


    return true;
  }
  else{
    return false;
  }
}

  return (
    <div className={styles.settings}>
      <div className={styles.imgContainer}>
        <img
          src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
          alt=""
        />
      </div>

      <div className={styles.field}>
        <div className={styles.fieldLabel}>Email</div>
        <div className={styles.fieldValue}>{user.email}</div>
      </div>

      <div className={styles.field}>
        <div className={styles.fieldLabel}>Name</div>

        <div className={styles.fieldValue}>{user.name}</div>
      </div>
      {checkIfUserIsAFreind() ? ( <button className={`button ${styles.saveBtn}`}>Remove friend</button>) :( <button className={`button ${styles.saveBtn}`}>Add friend</button>) }

      <div className={styles.btnGrp}>
       

        
      </div>
    </div>
  );
};

export default UserProfile;
