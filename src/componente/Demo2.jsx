import { useCallback, useRef, useState } from "react";
import Child from "./Child";

const Demo2 =() =>{

    const [y , setY] = useState(0);
    let x = 0;
    const ref = useRef(0);
    console.log("Rendering....");

    console.log("X = " + x)
    const handledChildClick = useCallback(()=>{
        console.log("Function from parent Called.")
    } , [])
    return(
        <div className="border border-black w-96 h-96 p-2 m-4">
            <Child onClick={handledChildClick} />
            <h1>Demo2</h1>
            <button
            className="bg-gray-500 m-2 p-2 rounded-lg"
            onClick={()=>{
                x = x+1
                console.log(x);
            }
            }
            >Increment X {x}</button>
            <button
            className="bg-gray-500 m-2 p-2 rounded-lg"
            onClick={()=>{
                setY(y+1)
            }}
            >Increment Y {y}</button>
            <button
            className="bg-gray-600 m-2 p-2 rounded-lg"
            onClick={()=>{
                ref.current = ref.current+1;
                console.log("ref = "+ref.current);
            }}
            >Increment Ref </button>
        </div>
    )
}

export default Demo2;