import { useEffect , useState} from "react";
import{getPosts} from "../api/index";
import {Home} from "../pages";
import Loader from "./Loader";

function App() {

  const [posts, setPosts] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchPosts = async()=>{
      const response = await getPosts();
      console.log('response', response);

      if (response.success){
        setPosts(response.data.posts);
      }
      setLoading(false)
      
    };

    fetchPosts();

  },[]);

  if(Loading){


      return<Loader/>;
  }

  return (
    <div className="App">
    <Home posts={posts}/> 
{/* 
    <h1>Hello!</h1> */}
  
    </div>
  );
}

export default App;
