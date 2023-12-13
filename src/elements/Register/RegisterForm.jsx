import {useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { Spin, message } from 'antd'

const RegisterForm = () => {
  const [loading, setLoading] = useState(false)
  const [messageApi, contextHolder] = message.useMessage();
  const [token, setToken] = useState(null)
  const [emailUser, setEmailUser] = useState('');
  const [passwordUser, setPasswordUser] = useState('');
  const [namaUser, setNamaUser] = useState('');
  const [ktpUser, setKtpUser] = useState('');
  const [avatar, setAvatar] = useState({data: '' })
  const navigate = useNavigate();

  const handleLoginLinkClick = (e) => {
    e.preventDefault();
    const data = {emailUser, passwordUser, namaUser, ktpUser};
    navigate('/login');
  }

  // eslint-disable-next-line no-undef
  const URL = import.meta.env.VITE_BE_ENDPOINT

  const onRegisterSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('avatar', avatar.data)
    formData.append('ktp', ktpUser)
    formData.append('name', namaUser)
    formData.append('email', emailUser)
    formData.append('password', passwordUser)

    try {
      setLoading(true)
      const response = await axios({
        method: 'post',
        url: `${URL}/v1/member/register`,
        data: formData,
        headers: {
            'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        },
      });

      if(response.data.responseCode === 200) {
        setLoading(false)
        messageApi.open({
          type: 'success',
          content: 'Register Success',
        })
        setTimeout(() => {
          navigate ('/login');
        }, '2000');
      }

    } catch (error) {
      setLoading(false)
      messageApi.open({
        type: 'error',
        content: error.response.data.message,
      })
    }
   }

   const handleFileChange = (e) => {
    const img = {
      data: e.target.files[0],
    }

    console.log(img)
    setAvatar(img)
  }

  
  useEffect(() => {
    const tokenFromLS = localStorage.getItem('token')
    setToken(tokenFromLS)
  }, [])


  return (
    <>
      {contextHolder}
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 lg:pt-12 lg:pb-12">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="flex items-center justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create An Account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={(e) => onRegisterSubmit(e)}>
              <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Avatar</label>
                  {/* {image.preview && <img src={image.preview} width='100' height='100' />} */}
                  <input type='file' name='file' onChange={handleFileChange}></input>
                </div>          
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Full Name</label>
                  <input onChange={(e) => setNamaUser(e.target.value)} type="text" name="namauser" id="namauser" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Write your full name here' required=""/>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                  <input onChange={(e) => setEmailUser(e.target.value)} type="text" name="emailuser" id="emailuser" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Write your email here' required=""/>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your NIK (KTP)</label>
                  <input onChange={(e) => setKtpUser(e.target.value)}type="text" name="ktp" id="ktp" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Write your NIK here' required=""/>
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input onChange={(e) => setPasswordUser(e.target.value)} type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder='Write your password here'/>
                </div>    

                <button className="w-full text-black bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account? <a href="#" onClick={handleLoginLinkClick} className="font-medium text-primary-600 hover:underline dark:text-primary-500"> Sign in here </a>
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

export default RegisterForm;