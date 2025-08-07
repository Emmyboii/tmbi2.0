import React, { useState } from 'react'
import SWL from '../Images/SWL.jpg';
import MEC from '../Images/MEC.jpg';
import CAR from '../Images/CAR.jpg';
import AccreditationImg from '../Images/AccreditationImg.svg';

const Accreditations = () => {

    const [acc, setAcc] = useState('switzerland')

    return (
        <div className='px-[150px] z-20 flex flex-col gap-8'>
            <p className='text-[#ffffff] bg-gradient-to-r from-[#C0943E] to-[#5A451D] bg-clip-text text-transparent text-[38px] font-bold'>Globally Recognized and Accredited</p>
            <div className='flex justify-between w-full gap-20 items-center'>
                <div className='flex flex-col w-full gap-4'>
                    <div onClick={() => setAcc('switzerland')} className={`rounded-[20px] min-h-[200px] cursor-pointer flex flex-col gap-2 border p-3 border-[#797979B2] ${acc === 'switzerland' ? 'bg-[#C0943E33] shadow-md shadow-[#00000040]' : 'bg-white'}`}>
                        <p className='flex gap-2 items-center text-[25px] font-medium'>
                            Switzerland
                        </p>
                        <p className='font-normal'>The State Secretariat for Education, Research and Innovation SERI within the Federal Department of Economic Affairs, Education and Research EAER is the federal government's specialised agency for national and international matters concerning education, research and innovation policy.</p>
                    </div>
                    <div onClick={() => setAcc('chad')} className={`rounded-[20px] min-h-[200px] cursor-pointer flex flex-col gap-2 border p-3 border-[#797979B2] ${acc === 'chad' ? 'bg-[#C0943E33] shadow-md shadow-[#00000040]' : 'bg-white'}`}>
                        <p className='flex gap-2 items-center text-[25px] font-medium'>
                            The Republic Of Chad
                        </p>
                        <p className='font-normal'>The PIET sets out the Government of Chad's policy on education for the period 2018-2020. It covers all levels of education (from pre- school to higher education).</p>
                    </div>
                    <div onClick={() => setAcc('car')} className={`rounded-[20px] min-h-[200px] cursor-pointer flex flex-col gap-2 border p-3 border-[#797979B2] ${acc === 'car' ? 'bg-[#C0943E33] shadow-md shadow-[#00000040]' : 'bg-white'}`}>
                        <p className='flex gap-2 items-center text-[25px] font-medium'>
                            Central African Republic
                        </p>
                        <p className='font-normal'>The Ministry of Higher Education (Ministère de l'Enseignement Supérieur) is a government ministry responsible for overseeing and regulating higher education institutions in the country, as well as developing policies and strategies to improve the quality of education.</p>
                    </div>
                </div>
                <div className='w-full relative'>
                    {acc === 'switzerland' ? (
                        <img className='w-[400px] relative z-10 border-2 border-[#002B5B33] shadow-md shadow-[#002B5BA6]' src={SWL} alt="" />
                    ) : acc === 'chad' ? (
                        <img className='w-[400px] relative z-10 border-2 border-[#002B5B33] shadow-md shadow-[#002B5BA6]' src={MEC} alt="" />
                    ) : (
                        <img className='w-[400px] relative z-10 border-2 border-[#002B5B33] shadow-md shadow-[#002B5BA6]' src={CAR} alt="" />
                    )}
                    <img src={AccreditationImg} className='absolute z-0 bottom-[-30%] right-[-10%]' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Accreditations