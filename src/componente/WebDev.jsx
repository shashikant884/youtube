import { lazy, Suspense } from "react";

const WebDevContainer = lazy(()=> import("./WebDevContainer"));

const WebDev =()=>{

    return(
        <div>
            <h1>Web Dev</h1>
            <Suspense fallback={<div>Loading ..........</div>}>
            <WebDevContainer />
            </Suspense>
        </div>
    );
}

export default WebDev;