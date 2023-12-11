import {FaUser, FaLock} from 'react-icons/fa';
import useNavigate from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const LoginFormPengacara = () => {

  const [emailPengacara, setEmailPengacara] = useState('');
  const [passwordPengacara, setPasswordPengacara] = useState('');
  const navigate = useNavigate();

  const handleRegisterLinkClick = (e) => {
    e.preventDefault();
    const data = {emailPengacara, passwordPengacara};
    console.log(data);
    navigate('/register/pengacara');
  }

  // eslint-disable-next-line no-undef
  const URL = process.env.REACT_APP_BE_ENDPOINT
  console.log('URL', URL)

  const onLoginSubmit = () => {
    console.log(`email: ${emailPengacara}, password: ${passwordPengacara}`)
      axios.post(`${URL}/v1/auth/login`, {
        emailPengacara,
        passwordPengacara
      })
        .then(function (response) {
          console.log('login success', response);
            if (response && response.data && response.data.tokens && response.data.tokens.access) {
              localStorage.setItem('token', JSON.stringify(response.data.tokens.access.token))
              localStorage.setItem('user', JSON.stringify(response.data.user))
              navigate('/homepage/pengacara')
            }
        })
          .catch(function (error) {
            console.error('Login error', error.message);
             window.alert('error', 'Login Failed', `<b>[CODE] ${error.code}</b><br>Please check your username and password`);
            }
        );
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="flex items-center justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Masuk dan Dapatkan Client
            </h1>
            <form className="space-y-4 md:space-y-6" action="">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input onChange={(e) => setEmailPengacara(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Write your email here' required=""/>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input onChange={(e) => setPasswordPengacara(e.target.value)} type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder='Write your password here'/>
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

              <button onClick={() => onLoginSubmit()} type="submit" className="w-full text-black bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign In</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Dont have an account? <a href="#" onClick={handleRegisterLinkClick} className="font-medium text-primary-600 hover:underline dark:text-primary-500"> Create New Account </a>
              </p>
            </form>    
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginFormPengacara;