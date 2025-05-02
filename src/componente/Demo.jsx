import { useMemo, useState } from "react";
import { findNthPrime, isPrime } from "../utils/Helper";

const Demo = ()=>{

    const [text , setText] = useState(0);
    const [isDarkTheme , setIsDarkTheme] = useState(false);
    console.log(text)
    console.log(isDarkTheme)
    // console.log(isPrime(Number(text)));

    const cachedValue = useMemo(()=>findNthPrime(text) , [text])
    console.log(cachedValue);

    return(
        <div className={`m-4 p-2 w-96 h-96 border border-black" 
            ${isDarkTheme && "bg-gray-900 text-white"}`
        }>
            <h1>Demo</h1>
            <input className="border border-black w-72 px-2 text-red"
            type="text" 
            value={text}
            onChange={(e)=>setText(e.target.value)}
            />
            <div>
                <button className="m-5 p-5 bg-gray-100"
                onClick={()=> setIsDarkTheme(!isDarkTheme)}>Toggel</button>
            </div>
        </div>
    );
}

export default Demo;