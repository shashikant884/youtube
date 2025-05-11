import { memo } from "react";

const Child = ({onClick}) =>{
    console.log("Child rendring ........");
    return(
        <div>
            <button onClick={onClick}>Parent fun call</button>
        </div>
    )
}

export default  memo(Child);