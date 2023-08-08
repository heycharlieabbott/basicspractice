import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1);
  const [words, setWords] = useState('');

  const [randomizer, setRandomizer] = useState(1);

  const randomize = () =>{
    setCount(Math.floor(Math.random()* 100)+1);
    setRandomizer(randomizer + 1);
  }

//Promises

// useEffect(() => {
  
//   fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
//   .then((response) => response.json())
//   .then((json) => setWords(json.title));
  

// }, [randomizer])

//Async Await

useEffect(() => {
  
  const data = async () => {
  
    try{
    const D = await fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
    const X = await D.json();
    setWords(X.title)
    console.log('setting')
    }

    catch(e){
      console.log(e)

    }
    
    
   
  }

  data();

  return () => {
    
  }
}, [randomizer])





  return (
    <>
      <button onClick={() => randomize()}>
      {words}
      </button>
    </>
  )
}

export default App
