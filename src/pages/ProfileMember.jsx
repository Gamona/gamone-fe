import React from 'react'
import Navbar from '../components/Navbar'
import { Routes, Route, useParams, useNavigate  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useQuery } from '@tanstack/react-query'

const URL = import.meta.env.VITE_BE_ENDPOINT

const ProfileMember = () => {
  let { id } = useParams();

  const getUsers = async () => {
		const res = await fetch(`${URL}/v1/member/profile/${id}`);
		return res.json();
	};
  
  const { data, isError, isLoading } = useQuery({
    queryKey: ["userProfile"],
    queryFn: getUsers,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error fetching data</p>;
  }
	
  return (
    <>
        <Navbar /> 
        <div>Profile Member</div>
        <p>{data.data.name}</p>
        <p>{data.data.email}</p>
    </>
  )
}

export default ProfileMember