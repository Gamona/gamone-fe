/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { DB } from "../config";
import {
  getDatabase,
  ref,
  set,
  onValue,
  push,
  child,
  get,
  update,
} from "firebase/database";
import { chatDate, chatTime, createUUID } from "../util";


import Navbar from "../components/Navbar";
import ListChat from "../elements/ListChat";

const Chats = () => {
  const [messages, setMessages] = useState([])
  const [mounted, setMounted] = useState(true);
  const [shown, setShown] = useState(false);
  const [partnerId, setPartnerId] = useState('');
  const [senderId, setSenderId] = useState('');
  const [lawyerName, setLawyerName] = useState('');

  const profiles = useSelector(state => state.profileReducer.profile);
  let userId = profiles.userId;

  const getMessages = useCallback(() => {
    setMounted(true)
    const urlMessages = `messages/${userId}`;
    const refMessages = ref(DB, urlMessages);

    onValue(refMessages, async (snapshot) => {
      const data = snapshot.val();
      if(data !== null) {
        const dataSnapshot = data;
        const AllDataChat = [];
  
        Object.keys(dataSnapshot).map(item => {
          const dataChat = dataSnapshot[item];
          const newDataChat = [];
  
          Object.keys(dataChat).map(key => {
            newDataChat.push({
              id: key,
              data: dataChat[key],
            });
          });
          AllDataChat.push({
            date: item,
            data: newDataChat,
          });
        });
        setMessages(AllDataChat);
      }
    })

    // do something!
  }, []);

  const getChatScreen = (partnerId, senderId, partnerName) => {
    setPartnerId(partnerId)
    setSenderId(senderId)
    setLawyerName(partnerName)
    setShown(true)

  }

  useEffect(() => {
    if(mounted) {
      getMessages()
      setMounted(false)
    }


  }, [getMessages, messages, mounted])

  return (
    <main className="bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="grid lg:grid-cols-[300px_1fr] gap-5 w-full min-h-screen py-10">
          <aside className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md p-4 dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-4">
            { messages.length > 0 && messages.map((cur, i) => {
              return (
                <div className="px-3 flex items-center bg-yellow-400 hover:bg-yellow-500 cursor-pointer" key={i} onClick={(partnerId, senderId, partnerName) => getChatScreen(cur.data[4].data, cur.data[5].data, cur.data[2].data )}>
                  <div>
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"
                    />
                  </div>
                  <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
                    <div className="flex items-bottom justify-between">
                      <p className="text-grey-darkest">{cur.data[2].data}</p>
                      <p className="text-xs text-grey-darkest">{chatTime(new Date(cur.data[0].data))}</p>
                    </div>
                    <p className="text-grey-dark mt-1 text-sm">
                      {cur.data[1].data}
                    </p>
                  </div>
                </div>
              );
            })}
          </aside>
          { shown && 
            <ListChat partnerId={partnerId} senderId={senderId} partnerName={lawyerName}  />
          }
        </div>
      </div>
    </main>
  );
};

export default Chats;
