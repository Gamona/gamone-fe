/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
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

let userId = "821197";
let lawyerId = "3310111999";

import Navbar from "../components/Navbar";

const Chats = () => {
  const [message, setMessage] = useState("");
  const [mounted, setMounted] = useState(true);
  const [chats, setChats] = useState([]);
  const [chatContent, setChatContent] = useState("");

  useEffect(() => {
    if (mounted) {
      const chatIds = `${userId}_${lawyerId}`;
      const urlChatting = `chatting/${chatIds}/allChat`;
      const refChatting = ref(DB, urlChatting);

      onValue(refChatting, (snapshot) => {
        const data = snapshot.val();

        const dataSnapshot = data;
        const AllDataChat = [];

        Object.keys(dataSnapshot).map((item) => {
          const dataChat = dataSnapshot[item];
          const newDataChat = [];

          Object.keys(dataChat).map((key) => {
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

        setChats(AllDataChat);
        setMounted(false);
      });
    }
  }, [mounted]);

  const sendChat = async (e) => {
    e.preventDefault();
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
        .then((res) => {
          setChatContent("");
          set(ref(DB, urlMessagesUser), dataHistoryChatUser);
          set(ref(DB, urlMessagesLawyer), dataHistoryChatLawyer);
          setMounted(false);
        })
        .catch((err) => {
          console.log(err);
          setMounted(false);
        });
    } catch (error) {
      console.log(error);
      setMounted(false);
    }
  };

  return (
    <main className="bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <section className="flex flex-col w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <header className="flex justify-between gap-4 items-center text-gray-900 dark:text-white p-4 lg:p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <img
                  src="/images/avatar.jpg"
                  className="w-10 lg:w-12 h-10 lg:h-12 rounded-full object-cover"
                />
                <div>
                  <h6 className="font-bold text-lg">Suporte ADMIN</h6>
                  <div>#CU6798H</div>
                </div>
              </div>
            </header>

            <section className="p-4 p:lg-6">
              {chats.map((cur) => (
                <div key={cur.date}>
                  <h6 className="text-center my-4 text-gray-500 dark:text-gray-300">
                    {cur.date}
                  </h6>
                  {cur.data.map((current) =>
                    current.data.sendBy == userId ? (
                      <div key={current.id} className="flex my-2 justify-end">
                        <div className="flex gap-3">
                          <div>
                            <div className="px-3 py-2 bg-yellow-400 text-white rounded mb-2">
                              {current.data.chatContent}
                            </div>
                            <div className="text-end text-gray-500 dark:text-gray-300 text-sm">
                              {chatTime(new Date(current.data.chatDate))}
                            </div>
                          </div>
                          <img
                            src="/images/avatar.jpg"
                            className="w-8 lg:w-10 h-8 lg:h-10 rounded-full object-cover"
                          />
                        </div>
                      </div>
                    ) : (
                      <div key={current.id} className="flex my-2">
                        <div className="flex gap-3">
                          <img
                            src="/images/avatar.jpg"
                            className="w-8 lg:w-10 h-8 lg:h-10 rounded-full object-cover"
                          />
                          <div>
                            <div className="px-3 py-2 border text-gray-800 dark:text-gray-100 border-gray-200 dark:border-gray-700 rounded mb-2">
                              {current.data.chatContent}
                            </div>
                            <div className="text-gray-500 dark:text-gray-300">
                              {chatTime(new Date(current.data.chatDate))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              ))}
            </section>

            <footer className="text-gray-900 dark:text-white p-4 lg:p-6 border-t border-gray-200 dark:border-gray-700 mt-auto">
              <div className="flex px-3 py-2 rounded-lg border border-yellow-400">
                <input
                  onChange={(e) => setChatContent(e.target.value)}
                  type="text"
                  name="chat"
                  id="chat"
                  className="bg-transparent text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white focus:outline-none"
                  placeholder="Write your problem here"
                  required
                />
                <button
                  onClick={(e) => sendChat(e)}
                  className="w-10 h-10 flex justify-center items-center text-black bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <svg
                    width="21"
                    height="18"
                    viewBox="0 0 21 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.00999999 18L21 9L0.00999999 0L0 7L15 9L0 11L0.00999999 18Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </footer>
          </section>
      </div>
    </main>
  );
};

export default Chats;
