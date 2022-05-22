import { useEffect, useState } from 'react';
import { getPosts } from '../api';

import { Loader, Navbar } from './index';
import { Home, Login ,Signup , Settings } from '../pages/Home';

import { BrowserRouter as Router, Route, Routes,Redirect } from 'react-router-dom';
import { useAuth } from '../hooks';
import {Loader,Navbar} from './'
import 
function PrivateRoute({children, ...rest} ){

  const auth = useAuth()
  return <Route {...rest} render={() =>{
    //  if user is logged in than show whatever children is comming
    if(auth.user){
      // by children it means say when we click settings button so settings component/ page is the children , so render settings if user is logged in
      return children;
    }
    else{
      // if user is not logged in , than redirect

      return <Redirect to='/login' />
    }


  }}/>
}

function App() {
  const [posts, setPosts] = useState([]);

  /* creating another state as  loading which will tell us when to load the loader
  The loader will be shown only while we fetch the data from the api , once we finish fetching data , we will set it false which we will show later



  */
  const auth =useAuth();
  /*
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      // lets log the responses
      console.log('response', response);
       after fetching posts , we need to save it in the post state 
         it should be done only if the response.success is true i.e we found respponse and there is no error in it

         
      if (response.success) {
        setPosts(response.data.posts);
      }
      // after fetching posts , we need to set Loading to false since we dont want to display the loader once we have finished fetching data from api
      setLoading(false);
    };
    fetchPosts();
  }, []); */

  // loader to be shown  till we are fetching data from api
  if (auth. loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* sending the posts as props so that we can display it */}
        <Routes>
          <Route exact path="/">
            <Home posts={posts} />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>


          <Route exact path="/register">
            <Signup />
          </Route>
          <PrivateRoute exact path="/settings">
            <Settings />
          </PrivateRoute>



          {/* if no matching route than render 404 */}

          <Route>
             <div>
               <h1>Page 404</h1>
             </div>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
