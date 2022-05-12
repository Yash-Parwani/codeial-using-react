import { useEffect, useState } from "react";
import {getPosts} from "../api"

import {Loader,Navbar} from "./index"
import {Home} from "../pages/Home"

function App() {
  const [posts,setPosts] = useState([]);

  /* creating another state as  loading which will tell us when to load the loader
  The loader will be shown only while we fetch the data from the api , once we finish fetching data , we will set it false which we will show later



  */
  const [loading,setLoading] = useState(true);
  useEffect(() =>{
       const fetchPosts = async () =>{
         const response = await getPosts();
         // lets log the responses
         console.log('response',response);
         /* after fetching posts , we need to save it in the post state 
         it should be done only if the response.success is true i.e we found respponse and there is no error in it

         */
        if(response.success){
          setPosts(response.data.posts);
        }
        // after fetching posts , we need to set Loading to false since we dont want to display the loader once we have finished fetching data from api
        setLoading(false);
       };
       fetchPosts()
  },[]);

   // loader to be shown  till we are fetching data from api
   if(loading){
     return <Loader />
   }


  return (
    <div className="App">
      <Navbar />
       {/* sending the posts as props so that we can display it */}
       <Home posts={posts}/>
    </div>
  );
}

export default App;
