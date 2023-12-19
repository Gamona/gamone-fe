import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../components/Navbar'
import Header from '../elements/homepage/Header'
import Footer from '../components/Footer'
import TopLawyers from '../elements/homepage/TopLawyers'
import { getData } from '../util';

const Homepage = () => {
    const dispatch = useDispatch();
    const profiles = useSelector(state => state.profileReducer);

    const getProfile = useCallback(async () => {
        const profile = await getData('profile');
        if(profile !== undefined) {
          dispatch({type: 'ADD_PROFILE', value: profile })
        }
      }, [dispatch]);

      useEffect(() => {
        getProfile()
      },[getProfile])
      
    
    return (
        <div>
            <Navbar />
            <Header />
            <TopLawyers />
            <Footer />
        </div>
    )
}

export default Homepage
