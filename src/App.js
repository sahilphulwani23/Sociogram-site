import { useState } from 'react';
import './App.css';
import Loading from './components/Loading';
import HomePage from './components/HomePage';


function App() {

const[isLoading,setIsLoading]=useState(true);

setTimeout(()=>{
setIsLoading(false);
},2500);

  return (
    <div>
   {isLoading?<Loading/>:<HomePage/>}
    </div>
  );
}

export default App;
