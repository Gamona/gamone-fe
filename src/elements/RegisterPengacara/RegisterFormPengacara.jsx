// import useNavigate from 'react-router-dom';
// import { useState } from 'react';
// import axios from 'axios';
import React from 'react';

// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const RegisterFormPengacara = () => {

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const navigate = useNavigate();

  // const handleRegisterLinkClick = (e) => {
  //   e.preventDefault();
  //   const data = {email, password};
  //   console.log(data);
  //   navigate('/');
  // }

  // // eslint-disable-next-line no-undef
  // const URL = process.env.REACT_APP_BE_ENDPOINT
  // console.log('URL', URL)

  // const onLoginSubmit = () => {
  //   console.log(`email: ${email}, password: ${password}`)
  //     axios.post(`${URL}/v1/auth/login`, {
  //       email,
  //       password
  //     })
  //       .then(function (response) {
  //         console.log('login success', response);
  //           if (response && response.data && response.data.tokens && response.data.tokens.access) {
  //             localStorage.setItem('token', JSON.stringify(response.data.tokens.access.token))
  //             localStorage.setItem('user', JSON.stringify(response.data.user))
  //             navigate('/homepage')
  //           }
  //       })
  //         .catch(function (error) {
  //           console.error('Login error', error.message);
  //            window.alert('error', 'Login Failed', `<b>[CODE] ${error.code}</b><br>Please check your username and password`);
  //           }
  //       );
  // }




  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 lg:pt-12 lg:pb-12">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="flex items-center justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create An Account
            </h1>
            <form className="space-y-4 md:space-y-6" action="">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Full Name</label>
                <input type="namapengacara" name="namapengacara" id="namapengacara" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Write your full name here' required=""/>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                <input type="emailpengacara" name="emailpengacara" id="emailpengacara" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Write your email here' required=""/>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your NIK (KTP)</label>
                <input type="no_ktpa" name="no_ktpa" id="no_ktpa" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Write your NIK here' required=""/>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Address</label>
                <input type="alamat" name="alamat" id="alamat" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Write your Address here' required=""/>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your University Degree</label>
                <input type="pendidikan" name="pendidikan" id="pendidikan" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Name of the University You Attended' required=""/>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Specialization</label>
                <button
                    id="dropdown"
                    data-dropdown-toggle="dropdown"
                    className="text-black bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                > Specialization             
                    <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                    >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                />
                </svg>
                </button>
              </div>

           
              <div id="spesialisasi" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Kepailitan</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Korporasi</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Kekayaan intelektual</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ketenagakerjaan</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Konstitusi</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Keluarga</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Pajak</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tindak Kriminal</a>
                </li>
                </ul>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder='Write your password here'/>
              </div>    

              <button type="submit" className="w-full text-black bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500"> Sign in here </a>
              </p>
            </form>    
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterFormPengacara;