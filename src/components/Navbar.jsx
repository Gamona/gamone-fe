import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../assets/logo.png'
import { Link, useNavigate } from "react-router-dom";
import { Button, Popover } from 'antd';
import { clearData, clearDataByKey, storeData } from "../util";
import axios from 'axios';
const URL = import.meta.env.VITE_BE_ENDPOINT


export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const [open, setOpen] = useState(false);
    const [load , setLoad] = useState(false)

    const navigate = useNavigate();
    const profiles = useSelector(state => state.profileReducer.profile);
    const dispatch = useDispatch();

    console.log(profiles)

    const loginUserPage = (e) => {
        e.preventDefault()
        navigate('/login')
    }

    const loginLawyerPage = (e) => {
      e.preventDefault()
      navigate('/login/pengacara')
    }

    const logoutUserPage = (e) => {
        e.preventDefault()
        clearData()
        dispatch({type: 'CLEAR_TOKEN'})
        dispatch({type: 'CLEAR_PROFILE'})
        
        navigate(0)
      }

    const hide = () => {
      setOpen(false);
    };
    
    const handleOpenChange = (newOpen) => {
      setOpen(newOpen);
    };

    const submitPremium = async (e) => {

        const value = {
          'userId': profiles.userId,
        }
       
        try {
          setLoad(true)
          const response = await axios.post(`${URL}/v1/dashboard/premium`, value , {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          })
          
          if(response.data.responseCode === 200) {
            // clearDataByKey('profile')
            const profile = JSON.parse(localStorage.getItem('profile'));
            Object.keys(response.data.data).forEach((key) => {
              profile[key] = response.data.data[key];
            });
            storeData('profile', profile )
            dispatch({type: 'CLEAR_PROFILE'})
            dispatch({type: 'ADD_PROFILE', value: response.data.data })
            setLoad(false)
          }
         
        } catch (error) {
          setLoad(false)
          console.log(error.message)
        }
      }
    


    return (
        <nav className="w-full bg-[#112340] shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to='/' className="flex items-center text-[#fff]">
                            <img src={Logo} alt="Mogana Law" />
                            <p className="text-xl">Mogana Law</p>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center text-center md:text-left justify-center text-xl space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-indigo-200">
                                <Link to='/'>Home</Link>
                            </li>
                            {profiles.isLogin && profiles.role === 'member' &&
                              <li className="text-white hover:text-indigo-200">
                                <Link to='/chats'>Chat</Link>
                              </li>
                            }
                            {profiles.isLogin && profiles.role === 'lawyer' &&
                              <li className="text-white hover:text-indigo-200">
                                <Link to='/chats/lawyer'>Chat Pengacara</Link>
                              </li>
                            }

                            {profiles.isLogin && profiles.role === 'member' && !profiles.premium &&
                                <Button type="primary" loading={load} onClick={(e) => submitPremium(e)}>
                                    Go Premium
                                </Button>
                            }
                        </ul>

                        <div className="mt-3 space-y-2 md:hidden">
                            <button className="border-[#E7D49E] border w-full text-[#fff] text-lg px-6 py-2 rounded-[10px]">
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
 
                {profiles.isLogin ? 
                    <button onClick={(e) => logoutUserPage(e)} className="border-[#E7D49E] border text-[#fff] text-lg px-6 py-2 rounded-[10px]">
                        Sign Out
                    </button> 
                    : 
                    <Popover
                      content={
                        <>
                          <Button type="link" onClick={(e) => loginUserPage(e)}>Member</Button>
                          <Button type="link" onClick={(e) => loginLawyerPage(e)}>Lawyer</Button>
                        </>

                      }
                      title="Sign In As"
                      trigger="click"
                      open={open}
                      onOpenChange={handleOpenChange}
                    >
                    
                      <button className="border-[#E7D49E] border text-[#fff] text-lg px-6 py-2 rounded-[10px]">
                          Sign In
                      </button>
                    </Popover>
                }
                </div>
            </div>
        </nav>
    );
}