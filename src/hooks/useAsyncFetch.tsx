import { useState, useEffect } from 'react'

type Props = {
    url: string,
    seed: number;

}

const useAsyncFetch = ({url, seed}: Props) => {

    const [words, setWords] = useState('');
    const [wordArray, setWordArray] = useState([]);

    useEffect(() => {
        
       
        // const data = async () =>{
        //     try{
        //         const D = await fetch(`${url + seed}`)
        //         const X = await D.json();
        //         setWords(X.title);
        //         setWordArray(X.title.split(' '));
        //     }
        //     catch(e){
        //         console.log(e)
        //     }
         
        // }
        
        // data()

        // const data = async() =>{
        //     try{
        //         const D = await fetch(`${url + seed}`)
        //         const X = await D.json()
        //         setWords(X.title);
        //         setWordArray(X.title.split(' '));

        //     }
        //     catch(e){
        //         console.log(e)
        //     }
        //     data()
        // }

        // const data = async () =>{
        //     const result = await fetch(`${url + seed}`)
        //     const resultJSON = await result.json()
        //     setWords(resultJSON.title)
        //     setWordArray(resultJSON.title.split(' '))
        // }

        // data()

        const data = async () => {
            const result = await fetch(`${url + seed}`)
            const resultJSON = await result.json()
            setWords(resultJSON.title)
            setWordArray(resultJSON.title.split(' '))
        }

        data()
        

    }, [seed])

  return {words, wordArray}
}

export default useAsyncFetch