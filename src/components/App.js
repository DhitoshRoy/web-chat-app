

import { useEffect } from "react";
import{getPosts} from "../api/index";

function App() {

  useEffect(()=>{
    const fetchPosts = async()=>{

      const response = await getPosts();
      console.log('response', response);

    }

    fetchPosts();



  },[]);

  return (
    <div className="App">


    

      <h1>Hello dear !</h1>
      <h2>This is react app</h2>
      
    </div>
  );
}

export default App;
