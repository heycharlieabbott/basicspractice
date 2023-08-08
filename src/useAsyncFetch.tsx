import React from 'react'
import { useState, useEffect } from 'react'

type Props = {
    url: string,
    randomAmount: number;

}

const useAsyncFetch = ({url, randomAmount}: Props) => {

    const [count, setCount] = useState(1);
    const [words, setWords] = useState('');
    const [randomizer, setRandomizer] = useState(1);

    const randomize = () =>{
        setCount(Math.floor(Math.random()* 100)+1);
        setRandomizer(randomizer + 1);
    }

    useEffect(() => {
        
        const data = async () =>{
            const D = await fetch(`${url + count}`)
            const X = await D.json();
            setWords(X.title)
        }
        
        data()

    }, [])

  
    


  return {words}
}

export default useAsyncFetch