import {useNavigate} from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import React from 'react';
import { Spin, message } from 'antd'

const RegisterFormPengacara = () => {
  const [loading, setLoading] = useState(false)
  const [messageApi, contextHolder] = message.useMessage();
  const [token, setToken] = useState(null)
  const [avatar, setAvatar] = useState({data: '' })
  const [emailPengacara, setEmailPengacara] = useState('');
  const [passwordPengacara, setPasswordPengacara] = useState('');
  const [namaPengacara, setNamaPengacara] = useState('');
  const [addressPengacara, setAddressPengacara] = useState('');
  const [pendidikanPengacara, setPendidikanPengacara] = useState(''); // eslint-disable-line no-unused-vars
  const [ktpPengacara, setKtpPengacara] = useState(''); // eslint-disable-line no-unused-vars
  const [specialization, setSpecialization] = useState([]);
  const [description, setDescription] = useState('')
  const navigate = useNavigate();

  const handleLoginLinkClick = (e) => {
    e.preventDefault();
    const data = {emailPengacara, passwordPengacara, namaPengacara, addressPengacara, pendidikanPengacara, ktpPengacara};
    navigate('/login/pengacara');
  }

  // eslint-disable-next-line no-undef
  const URL = import.meta.env.VITE_BE_ENDPOINT

  const onRegisterSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('avatar', avatar.data)
    formData.append('noktpa', ktpPengacara)
    formData.append('name', namaPengacara)
    formData.append('address', addressPengacara)
    formData.append('education', pendidikanPengacara)
    formData.append('specialize', specialization.join())
    formData.append('description', description)
    formData.append('email', emailPengacara)
    formData.append('password', passwordPengacara)

    try {
      setLoading(true)
      const response = await axios({
        method: 'post',
        url: `${URL}/v1/lawyer/register`,
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
          navigate ('/login/pengacara');
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

  const selectSpecialization = useRef()

  const addSpecialization = val => {
    setSpecialization(prev => {
      const specs = [...prev];
      specs.push(val)
      return [...new Set(specs)]
    })

    selectSpecialization.current.value = '-'
  }

  const removeSpecialization = val => {
    setSpecialization(prev => prev.filter(spec => spec != val))
  }


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
                  <input onChange={(e) => setNamaPengacara(e.target.value)} type="text" name="namapengacara" id="namapengacara" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Write your full name here' required=""/>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                  <input onChange={(e) => setEmailPengacara(e.target.value)} type="text" name="emailpengacara" id="emailpengacara" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Write your email here' required=""/>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your NIK (KTP)</label>
                  <input onChange={(e) => setKtpPengacara(e.target.value)}type="text" name="no_ktpa" id="no_ktpa" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Write your NIK here' required=""/>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Address</label>
                  <input onChange={(e) => setAddressPengacara(e.target.value)}type="text" name="alamat" id="alamat" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Write your Address here' required=""/>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your University Degree</label>
                  <input onChange={(e) => setPendidikanPengacara(e.target.value)}type="text" name="pendidikan" id="pendidikan" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Name of the University You Attended' required=""/>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Specialization</label>
                  <select ref={selectSpecialization} onChange={(e) => addSpecialization(e.target.value)} type="text" name="specialization" id="specialization" className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Your speciality'>
                    <option disabled selected value="-">Select Your Specialization</option>
                    <option value="Hukum Bisnis">Hukum Bisnis</option>
                    <option value="Hukum Pidana">Hukum Pidana</option>
                    <option value="Hukum Kontrak">Hukum Kontrak</option>
                    <option value="Hukum Properti">Hukum Properti</option>
                  </select>
                  <div className="min-h-[40px] bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex flex-wrap gap-2">
                    {specialization.map(spec => (
                      <span key={spec} className="flex items-center p-1 text-gray-900 dark:text-white bg-gray-300 dark:bg-gray-600 rounded">
                        {spec}
                        <span className="ml-2 cursor-pointer" onClick={() => removeSpecialization(spec)}>
                          <svg width="20" height="20" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" className="text-gray-900 dark:text-white">
                              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7.5 7.5l6 6m0-6l-6 6"/>
                          </svg>
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Description</label>
                  <textarea onChange={(e) => setDescription(e.target.value)}  name="description" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Description about your professional career' required=""/>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input onChange={(e) => setPasswordPengacara(e.target.value)} type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder='Write your password here'/>
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

export default RegisterFormPengacara;