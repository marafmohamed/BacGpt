import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";
export default function Chat() {
const {chats,loadingChats}=useAuth()
console.log(loadingChats)
console.log(chats)
  return <div className="h-screen w-screen  bg-gray-lightest">
    <div className=" h-24 flex justify-start items-center px-4 gap-3">
        <img src="32-chat-double.svg"  />
        <h1 className=" font-custom text-4xl  text-brown-dark font-bold">Chats</h1>
    </div>
   {chats.length!==0 && <ul className="chats h-[80%] w-full  bg-green-lightest">
    {loadingChats && <div><span className="loading loading-spinner  text-brown-dark">Loading</span></div>}
      {chats.length!==0 && chats.map((chat,index) => {
          return <li className=" w-full h-10 py-8 bg-white justify-start flex items-center font-custom" key={index}>
            <h1>
              {chat.name}
            </h1>
          </li>
        })}

    </ul>}

  </div>;
}
