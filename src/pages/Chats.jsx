import React, { useEffect, useState } from 'react'
import { DB } from '../config';
import { getDatabase, ref, set, onValue, push, child, get, update  } from "firebase/database";
import { chatDate, chatTime, createUUID } from '../util';

let userId = '821197'
let lawyerId = '3310111999'
const Chats = () => {
  const [message, setMessage] = useState("");
  const [mounted, setMounted] = useState(true);
  const [chatContent, setChatContent] = useState("");

  useEffect(() => {
    console.log('tes')
  

  }, [])

  const sendChat = async (e) => {
    e.preventDefault()
    setMounted(true);

    const today = new Date();
    const chatIds = `${userId}_${lawyerId}`;
    

    const urlChatting = `chatting/${chatIds}/allChat/${chatDate(today)}`;
    const urlMessagesUser = `messages/${userId}/${chatIds}`;
    const urlMessagesLawyer = `messages/${lawyerId}/${chatIds}`;

    const refChatting = ref(DB, urlChatting);

    const data = {
      sendBy: userId,
      chatDate: today.getTime(),
      chatTime: chatTime(today),
      chatContent: chatContent,
    };

    const dataHistoryChatUser = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: lawyerId,
    };

    const dataHistoryChatLawyer = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: userId,
    };

    try {
      push(refChatting, data)
      .then(res => {
        setChatContent('');
        set(ref(DB, urlMessagesUser ), dataHistoryChatUser)
        set(ref(DB, urlMessagesLawyer ), dataHistoryChatLawyer)
        setMounted(false);
      })
      .catch(err => {
        console.log(err)
      });
      
    } catch (error) {
      console.log(error)
    }
  };
  
  return (
    <>
      <div>Chats</div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        <input onChange={(e) => setChatContent(e.target.value)} type="text" name="chat" id="chat" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Write your problem here' required=""/>
        <button onClick={(e) => sendChat(e)} className="w-full text-black bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send</button>
      </div>
    </>

  )
}

export default Chats