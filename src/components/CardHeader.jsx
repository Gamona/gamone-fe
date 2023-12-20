import React from 'react'
import { Link } from 'react-router-dom'

const CardHeader = ({img, title, onClick}) => {
    return (
        <div className='p-7 w-[205px] bg-[#EDFCFD] rounded-[10px] shadow-md flex flex-col justify-center items-center'>
            <img className='w-[77px]' src={img} alt="" />
            <p className='text-[#112340] font-light mt-[15px] text-xl'>Konsultasi</p>
            <p className='text-[#112340] font-semibold text-xl'>{title}</p>
            <button onClick={onClick} className='text-lg font-semibold text-[#fff] px-4 mt-[15px] rounded-[8px] py-1 bg-[#D6B50E]'>
              Book Now
            </button>
        </div>
    )
}

export default CardHeader
