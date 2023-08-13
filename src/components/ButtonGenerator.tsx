import React from 'react'
import { useState } from 'react';
import useAsyncFetch from '../hooks/useAsyncFetch';
import usePromiseFetch from '../hooks/usePromiseFetch';

type Props = {}

const ButtonGenerator = (props: Props) => {

    const [randomizer, setRandomizer] = useState(1);

    const randomize = () =>{
      setRandomizer(randomizer + 1);
    }
  
  //const {words, wordArray} = useAsyncFetch({url: `https://jsonplaceholder.typicode.com/posts/`, seed: randomizer});
  const {words, wordArray} = usePromiseFetch({url: `https://jsonplaceholder.typicode.com/posts/`, seed: randomizer});
  
  const items = wordArray.filter((f : string) => f.includes('l')).map((i) => <div> {i}</div>)
  
    return (
      <>
        <button onClick={() =>
          randomize()}>
        {words}
        </button>
        {items}
        
      </>
    )
  }

export default ButtonGenerator