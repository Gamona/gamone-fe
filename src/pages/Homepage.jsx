import React, { useEffect, useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../components/Navbar'
import Header from '../elements/homepage/Header'
import Footer from '../components/Footer'
import TopLawyers from '../elements/homepage/TopLawyers'
import { getData } from '../util';  
import axios from 'axios';
import { Spin, message } from 'antd'

const URL = import.meta.env.VITE_BE_ENDPOINT

const Homepage = () => {
    const dispatch = useDispatch();
    const profiles = useSelector(state => state.profileReducer);

    const [lawyers, setLawyers] = useState([])
    const [messageApi, contextHolder] = message.useMessage();


    const getProfile = useCallback(async () => {
        const profile = await getData('profile');
        if(profile !== undefined) {
          dispatch({type: 'ADD_PROFILE', value: profile })
        }
      }, [dispatch]);


      useEffect(() => {
        getProfile()
      },[getProfile])

      useEffect(() => {
        const getLawyers = async () => {
  
          try {
            const response = await axios.get(`${URL}/v1/dashboard/lawyer`, {
              headers: {
                "Content-Type": "application/json"
              }
            })

            if(response.data.responseCode === 200) {
              setLawyers(response.data.data)
            }
          } catch (error) {
            messageApi.open({
              message: 'Network Error',
              description:
                `${error.message}`,
              className: 'custom-class',
              style: {
                width: 600,
              },
            });
          }   
        }

        getLawyers()
      }, [messageApi])
      
      
    
    return (
      <>
        {contextHolder}
        <div>
            <Navbar />
            <Header />
            <TopLawyers dataLawyers={lawyers} />
            <Footer />
        </div>
      </>
    )
}

export default Homepage
