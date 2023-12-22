import React from 'react'

const CardLawyers = ({image, name, hukum, specialize}) => {
    const renderSpan = (specialize) => {
        return specialize.map((item, index) => {
            return (
                <span key={index} className='bg-[#D6B50E] text-white px-1  text-[11px]'>{item}</span>
            )
        
        })
    }

    return (
        <div className='ml-[4px] mr-[93px] border-[#112340] w-[226px] p-8 flex flex-col items-center space-y-3 rounded-[10px]'>
            <img className='w-24 h-24 rounded-full' src={image} alt={`Profile of ${image}`} />
            <h1 className='text-[#112340] font-semibold'>{name}</h1>
            <div className='flex items-center space-x-1'>
                {renderSpan(specialize)}
            </div>
        </div>
    )
}

export default CardLawyers
