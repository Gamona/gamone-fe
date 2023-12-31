import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useParams, useNavigate  } from 'react-router-dom';
import CardTanggal from '../../components/CardTanggal';
import Pengacara1 from '../../assets/images/lawyers.png';
import CardPengacara from '../../components/CardPengacara';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
const URL = import.meta.env.VITE_BE_ENDPOINT

const SelectPengacara = () => {
  let { category } = useParams();
  const profiles = useSelector(state => state.profileReducer.profile);
  const navigate = useNavigate();

  const [lawyers, setLawyers] = useState([])
  
  // console.log(category);
  const getLawyerReguler = useCallback( async () => {

    const value = {
      'category': category,
    }

    try {
      const response = await axios.post(`${URL}/v1/category/limit`, value, {
        headers: {
          "Content-Type": "application/json"
        }
      })

      if(response.data.responseCode == 200) {
        setLawyers(response.data.data)
      }
    } catch (error) {
      console.log(error.message)
    }
  }, [category]);

  const getLawyerFull = useCallback( async () => {

    const value = {
      'category': category,
    }

    try {
      const response = await axios.post(`${URL}/v1/category/all`, value, {
        headers: {
          "Content-Type": "application/json"
        }
      })

      if(response.data.responseCode == 200) {
        setLawyers(response.data.data)
      }
    } catch (error) {
      console.log(error.message)
    }
  }, [category]);

  useEffect(() => {
    if(profiles.premium) {
      getLawyerFull();

    } else {
      getLawyerReguler();

    }
  }, [getLawyerFull, getLawyerReguler, profiles.premium])

  const getChats = (userId, partnerId, lawyerName) => {
    console.log(userId, partnerId)
    navigate(`/chats/${userId}/${partnerId}/${lawyerName}`)
  }
  
  const photo = "http://localhost:3000/uploads/"

  return (
    <>
      <div className="max-w-3xl mx-auto p-8">
        <div>
          <h1 className="text-3xl text-[#112340] my-10 font-semibold leading-7 text-center">
            Pilih Pengacara
          </h1>
          <div className="flex flex-col space-y-4">
          {lawyers.map((cur, key) => {
              return (
                <>
                  <CardPengacara
                    image={Pengacara1}
                    name={cur.name}
                    hukum={cur.education}
                    onClick={() => getChats(profiles.userId, cur._id, cur.name)}
                  />
                </>
       
              );
            })}
          </div>
        </div>
      </div> 
    </>

  );
};

export default SelectPengacara;
