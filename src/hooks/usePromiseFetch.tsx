import { useState, useEffect } from 'react';

type Props = {
    url: string,
    seed: number
}

const usePromiseFetch = ({url, seed}: Props) => {
    
    const [words, setWords] = useState('');
    const [wordArray, setWordArray] = useState([]);

    useEffect(()=>{

        fetch(url + seed)
        .then((res) => res.json())
        .then((json)=>{

            setWords(json.title)
            setWordArray(json.title.split(' '))

        }).catch((e)=>console.log(e))
        

    },[seed])
  

    return {words, wordArray}
}

export default usePromiseFetch