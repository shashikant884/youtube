import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import store from "../utils/store";

const LiveChat = ()=>{
    const chatMessages = useSelector((store) => store.chat.messages);
    const dispatch = useDispatch();
    const [liveMessage , setLiveMessage] = useState("");
    // console.log(chatMessages);
    useEffect(()=>{
    const i = setInterval(()=>{
        // console.log("Polling data");
        dispatch(
            addMessage({
                name : "Shashikant",
                messages : "This is live comment "+ Math.random()
            })
        )
    }, 1500);

    return () => clearInterval(i);

    } , []);

    return(
        <>
        <div className="mx-2 border border-gray-900 p-2 h-[400px] w-full overflow-y-hidden overflow-y-scroll flex flex-col">
        {chatMessages.map((c , i)=>(<ChatMessage 
        key={i}
        name =  {c.name}
        message = {c.messages}
        />))}
        </div>
        <form className="w-full p-2 border border-black m-2"
        onSubmit={(e)=>{
            e.preventDefault();
            console.log(liveMessage);
            dispatch(
                addMessage({
                    name : "Mahi",
                    messages : liveMessage
        })
        )


        }}
        >
            <input className="w-72 border border-black" type="text" value={liveMessage}
            onChange={(e)=>{
                setLiveMessage(e.target.value)
            }}
            />
            <button className="px-2 mx-2 bg-gray-800  ">Send</button>
        </form>
        </>
    );

}


export default LiveChat;