import useNavigate from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const RegisterForm = () => {

  const [token, setToken] = useState(null)
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerKtp, setRegisterKtp] = useState(''); // eslint-disable-line no-unused-vars
  const navigate = useNavigate();

  const handleLoginLinkClick = (e) => {
    e.preventDefault();
    const data = {registerEmail, registerPassword, registerName, registerKtp};
    console.log(data);
    navigate('/login');
  }

  // eslint-disable-next-line no-undef
  const URL = process.env.REACT_APP_BE_ENDPOINT
  console.log('URL', URL)

  const onRegisterSubmit = () => {
    console.log(`name: ${registerName}, email: ${registerEmail}, password: ${registerPassword}, ktp: ${registerKtp}`)
    axios.post(`${URL}/v1/auth/register`, {
      name: registerName,
      email: registerEmail,
      ktp: registerKtp,
      password: registerPassword
    })
      .then(function (response) {
        console.log('register success', response);
        if (response && response.data && response.data.tokens && response.data.tokens.access) {
          localStorage.setItem('token', JSON.stringify(response.data.tokens.access.token))
          localStorage.setItem('user', JSON.stringify(response.data.user))
          navigate ('/login');
        }
      })
      .catch(function (error) {
        if (error.response && error.response.status === 400 && error.response.data.message) {
            window.alert('error', 'Registration Failed', `<b>[CODE] ${error.response.data.message}</b><br>Please check your username and password`);
        } else {
            window.alert('error', 'Registration Failed', `<b>[CODE] </b><br>An error occured during registration. Please try again later`);
        }
        console.error('Registration error', error.message);
     }
     );
   }

  console.log('data', registerName, registerEmail, registerPassword);
  
  useEffect(() => {
    const tokenFromLS = localStorage.getItem('token')
    setToken(tokenFromLS)
  }, [])

  console.log('token', token)

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="flex items-center justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create An Account
            </h1>
            <form className="space-y-4 md:space-y-6" action="">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Full Name</label>
                <input  onChange={(e) => setRegisterName(e.target.value)} type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Write your full name here' required=""/>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                <input onChange={(e) => setRegisterEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Write your email here' required=""/>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your NIK (KTP)</label>
                <input onChange={(e) => setRegisterKtp(e.target.value)} type="ktp" name="ktp" id="ktp" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Write your NIK here' required=""/>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input onChange={(e) => setRegisterPassword(e.target.value)} type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder='Write your password here'/>
              </div>    

              <button onClick={() => onRegisterSubmit()} type="submit" className="w-full text-black bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account? <a href="#" onClick={handleLoginLinkClick} className="font-medium text-primary-600 hover:underline dark:text-primary-500"> Sign in here </a>
              </p>
            </form>    
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;