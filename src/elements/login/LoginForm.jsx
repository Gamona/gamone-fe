import {FaUser, FaLock} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Spin, message } from 'antd'
import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const LoginForm = () => {

  const [loading, setLoading] = useState(false)
  const [messageApi, contextHolder] = message.useMessage();
  const [emailUser, setEmailUser] = useState('');
  const [passwordUser, setPasswordUser] = useState('');
  const navigate = useNavigate();

  const handleRegisterLinkClick = (e) => {
    e.preventDefault();
    const data = {emailUser, passwordUser};
    console.log(data);
    navigate('/register/');
  }

  // eslint-disable-next-line no-undef
  const URL = import.meta.env.VITE_BE_ENDPOINT

  const onLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const payload = {
        email: emailUser,
        password: passwordUser
      }

      const response = await axios.post(`${URL}/v1/member/login`, payload , {
        headers: {
          "Content-Type": "application/json"
        }
      })

      if(response.data.responseCode === 200) {
        setLoading(false)
        localStorage.setItem("token", JSON.stringify(response.data.tokens.access.token))
        messageApi.open({
          type: 'success',
          content: 'Login Success',
        })
      }
      
    } catch (error) {
      setLoading(false)
      console.log(error)
      messageApi.open({
        type: 'error',
        content: error.response.data.message,
      })
    }
  }

  return (
    <>
      {contextHolder}
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="flex items-center justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Masuk Untuk Konsultasi Dengan Pengacara
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={(e) => onLoginSubmit(e) }>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input onChange={(e) => setEmailUser(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Write your email here' required=""/>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input onChange={(e) => setPasswordUser(e.target.value)} type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder='Write your password here'/>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input type="checkbox" id="remember" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" /> 
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>  
                  </div>
                  <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                </div>

                <button className="w-full text-black bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign In</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Dont have an account? <a href="#" onClick={handleRegisterLinkClick} className="font-medium text-primary-600 hover:underline dark:text-primary-500"> Create New Account </a>
                </p>
              </form>    
            </div>
          </div>
        </div>
      </section>
      { loading && 
        <div className="absolute inset-0 flex justify-center items-center z-10 bg-gray-400 bg-opacity-75">
          <Spin size="large" />
        </div>
      }
    </>
  );
};

export default LoginForm;