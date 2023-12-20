import React from 'react'

const CardPengacara = ({image, name, gender, onClick}) => {
  return (
    <div className='p-4 flex justify-between items-center'>
        <div className='flex gap-4 items-center p-2'>
            <img className='w-12 h-12 md:w-20 md:h-20 rounded-full' src={image} alt={name} />
            <div>
                <h1 className='text-base font-semibold text-[#112340]'>{name}</h1>
                <p className='text-[#7D8797] md:mt-2 text-[12px] font-light'>{gender}</p>
            </div>
        </div>
        <button className='bg-[#D6B50E] hover:bg-[#112340] w-28 md:w-[146px] text-[11px] md:text-base h-[40px] text-[#fff] px-4 mt-4 rounded-[10px] py-1' onClick={onClick}>Chat Now</button>
    </div>
  )
}

export default CardPengacara