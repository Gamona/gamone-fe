/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useEffect, useState }  from 'react'
import ChatList from '../elements/ChatList'
import { DB } from '../config';
import { getDatabase, ref, set, onValue, push, child, get, update  } from "firebase/database";

let userId = '821197'
const Messages = () => {

  const [messages, setMessages] = useState([])
  const [mounted, setMounted] = useState(true);
  const [shown, setShown] = useState(false);
  const [partnerId, setPartnerId] = useState('');
  const [senderId, setSenderId] = useState('');


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

  const getChatScreen = (partnerId, senderId) => {
    setPartnerId(partnerId)
    setSenderId(senderId)
    setShown(true)

  }


  useEffect(() => {
    if(mounted) {
      getMessages()
      setMounted(false)
    }
    console.log(messages.length)


  }, [getMessages, messages, mounted])
  
  

  return (
    <div>
      <div className="w-full h-32" style={{ backgroundColor: "#449388" }} />
      <div className="container mx-auto" style={{ marginTop: "-128px" }}>
        <div className="py-6 h-screen">
          <div className="flex border border-grey rounded shadow-lg h-full">
            {/* Left */}
            <div className="w-1/3 border flex flex-col">
              {/* Header */}
              <div className="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center">
                <div>
                  <img
                    className="w-10 h-10 rounded-full"
                    src="http://andressantibanez.com/res/avatar.png"
                  />
                </div>
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                    >
                      <path
                        fill="#727A7E"
                        d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                    >
                      <path
                        opacity=".55"
                        fill="#263238"
                        d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                    >
                      <path
                        fill="#263238"
                        fillOpacity=".6"
                        d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Search */}
              <div className="py-2 px-2 bg-grey-lightest">
                <input
                  type="text"
                  className="w-full px-2 py-2 text-sm"
                  placeholder="Search or start new chat"
                />
              </div>
              {/* Contacts */}
              <div className="bg-grey-lighter flex-1 overflow-auto">

              {messages.length > 0 && messages.map((cur, i) => {
                console.log(cur)
                return (
                  <div className="px-3 flex items-center bg-grey-light cursor-pointer" key={i} onClick={(partnerId, senderId) => getChatScreen(cur.data[2].data, cur.data[3].data )}>
                    <div>
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"
                      />
                    </div>
                    <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
                      <div className="flex items-bottom justify-between">
                        <p className="text-grey-darkest">{cur.data[2].data}</p>
                        <p className="text-xs text-grey-darkest">12:45 pm</p>
                      </div>
                      <p className="text-grey-dark mt-1 text-sm">
                        {cur.data[1].data}
                      </p>
                    </div>
                  </div>
                );
              })}
              </div>
            </div>
            {/* Right */}
            { shown && 
              <ChatList partnerId={partnerId} senderId={senderId} />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages