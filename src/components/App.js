import { useEffect } from "react";
import {getPosts} from "../api"

function App() {
  useEffect(() =>{
       const fetchPosts = async () =>{
         const response = await getPosts();
         // lets log the responses
         console.log('response',response);
       };
       fetchPosts()
  },[]);
  return (
    <div className="App">
      Hello world!
    </div>
  );
}

export default App;
