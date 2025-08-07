import SWL from '../Images/SWL.jpg';
import MEC from '../Images/MEC.jpg';
import CAR from '../Images/CAR.jpg';
import CAR2 from '../Images/CAR.png';
import SWL2 from '../Images/Switzerland.png';
import chad from '../Images/chad.png';
import AccreditationImg from '../Images/AccreditationImg.svg';
import { useState } from "react";
import { TiTimes } from "react-icons/ti";
import halfCircle from '../Images/halfCircle.png'

const AboutAccreditation = () => {

    const [acc, setAcc] = useState('switzerland')

    return (
        <div className="xl:px-24 sh:pl-16 sh:pr-10 sp:px-7 px-4 flex flex-col gap-60 pb-9">
            <div className='z-20 flex flex-col gap-8'>
                <p className='bg-gradient-to-r from-[#002B5B] to-[#005BC1] text-center text-transparent bg-clip-text font-bold sm:text-[35px] text-[28.4px]'>Commitment to Quality & Accreditation</p>
                <div className='flex md:flex-row flex-col justify-between w-full gap-20 items-center'>
                    <div className='flex flex-col w-full gap-4'>
                        <div className='flex flex-col items-center gap-5 z-10'>
                            <div onClick={() => setAcc('switzerland')} className={`rounded-[20px] min-h-[200px] cursor-pointer flex flex-col gap-2 border p-3 border-[#797979B2] ${acc === 'switzerland' ? 'bg-[#C0943E33] shadow-md shadow-[#00000040]' : 'bg-white'}`}>
                                <p className='flex gap-1 items-center mf:text-[25px] text-[21px] font-medium'>
                                    Switzerland
                                    <img src={SWL2} className='w-8' alt="" />
                                </p>
                                <p className='font-normal mf:text-base text-[14px]'>The State Secretariat for Education, Research and Innovation SERI within the Federal Department of Economic Affairs, Education and Research EAER is the federal government's specialised agency for national and international matters concerning education, research and innovation policy.</p>
                            </div>
                            {acc === 'switzerland' && (
                                <img className='w-[400px] relative z-10 border-2 md:hidden block border-[#002B5B33] shadow-md shadow-[#002B5BA6]' src={SWL} alt="" />
                            )}
                        </div>
                        <div className='flex flex-col items-center gap-5 z-10'>
                            <div onClick={() => setAcc('chad')} className={`rounded-[20px] min-h-[200px] cursor-pointer flex flex-col gap-2 border p-3 border-[#797979B2] ${acc === 'chad' ? 'bg-[#C0943E33] shadow-md shadow-[#00000040]' : 'bg-white'}`}>
                                <p className='flex gap-1 items-center mf:text-[25px] text-[21px] font-medium'>
                                    The Republic Of Chad
                                    <img src={chad} className='w-8' alt="" />
                                </p>
                                <p className='font-normal mf:text-base text-[14px]'>The PIET sets out the Government of Chad's policy on education for the period 2018-2020. It covers all levels of education (from pre- school to higher education).</p>
                            </div>
                            {acc === 'chad' && (
                                <img className='w-[400px] relative z-10 border-2 md:hidden block border-[#002B5B33] shadow-md shadow-[#002B5BA6]' src={MEC} alt="" />
                            )}
                        </div>
                        <div className='flex flex-col items-center gap-5 z-10'>
                            <div onClick={() => setAcc('car')} className={`rounded-[20px] min-h-[200px] cursor-pointer flex flex-col gap-2 border p-3 border-[#797979B2] ${acc === 'car' ? 'bg-[#C0943E33] shadow-md shadow-[#00000040]' : 'bg-white'}`}>
                                <p className='flex gap-2 items-center mf:text-[25px] text-[21px] font-medium'>
                                    Central African Republic
                                    <img src={CAR2} className='w-6' alt="" />
                                </p>
                                <p className='font-normal mf:text-base text-[14px]'>The Ministry of Higher Education (Ministère de l'Enseignement Supérieur) is a government ministry responsible for overseeing and regulating higher education institutions in the country, as well as developing policies and strategies to improve the quality of education.</p>
                            </div>
                            {acc === 'car' && (
                                <img className='w-[400px] relative z-10 border-2 md:hidden block border-[#002B5B33] shadow-md shadow-[#002B5BA6]' src={CAR} alt="" />
                            )}
                        </div>
                    </div>
                    <div className='w-full relative'>
                        {acc === 'switzerland' ? (
                            <img className='w-[400px] relative z-10 border-2 md:block hidden border-[#002B5B33] shadow-md shadow-[#002B5BA6]' src={SWL} alt="" />
                        ) : acc === 'chad' ? (
                            <img className='w-[400px] relative z-10 border-2 md:block hidden border-[#002B5B33] shadow-md shadow-[#002B5BA6]' src={MEC} alt="" />
                        ) : (
                            <img className='w-[400px] relative z-10 border-2 md:block hidden border-[#002B5B33] shadow-md shadow-[#002B5BA6]' src={CAR} alt="" />
                        )}
                        <img src={AccreditationImg} className='absolute z-0 bottom-[-30%] right-[-10%]' alt="" />
                    </div>
                </div>
            </div>
            <div className='sa:min-h-[306px] sk:min-h-[250px] min-h-[230px] relative flex items-center bg-gradient-to-r from-[#002B5B] to-[#005BC1] rounded-[10px] border border-white'>
                <img src={halfCircle} className="absolute size-[100px] top-0" alt="" />
                <img src={halfCircle} className="absolute size-[100px] bottom-0 right-0 rotate-180" alt="" />
                <div className='absolute flex flex-col w-full gap-5 overflow-hidden'>
                    <div className="flex text-white/60 opacity-40 justify-between items-center">
                        <TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes />
                    </div>
                    <div className="flex px-8 text-white/60 opacity-40 justify-between items-center">
                        <TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes />
                    </div>
                    <div className="flex text-white/60 opacity-40 justify-between items-center">
                        <TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes />
                    </div>
                    <div className="flex px-8 text-white/60 opacity-40 justify-between items-center">
                        <TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes />
                    </div>
                    <div className="flex text-white/60 opacity-40 justify-between items-center">
                        <TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes />
                    </div>
                    <div className="flex px-8 text-white/60 opacity-40 justify-between items-center">
                        <TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes />
                    </div>
                    <div className="flex text-white/60 opacity-40 justify-between items-center">
                        <TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes />
                    </div>
                    <div className="flex px-8 text-white/60 opacity-40 justify-between items-center">
                        <TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes />
                    </div>
                    <div className="flex text-white/60 opacity-40 justify-between items-center">
                        <TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes />
                    </div>
                    <div className="flex px-8 text-white/60 opacity-40 justify-between items-center">
                        <TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes />
                    </div>
                    <div className="flex text-white/60 opacity-40 justify-between items-center">
                        <TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes />
                    </div>
                </div>
                <div className="text-white flex flex-col items-center justify-center text-center h-full mx-auto mc:px-32 sa:px-7 px-2">
                    <p className="mh:text-[38px] sd:text-[28px] sk:text-[22px] text-lg leading-tight font-semibold">Your Future in Business Starts Here</p>
                    <p className="mh:text-[18px] mt-7 leading-snug sk:text-[14px] text-xs font-medium">Choose your program and start learning today—affordable, flexible, globally recognized.</p>
                    <div className="flex sm:gap-5 gap-2 mt-5">
                        <button className="rounded-[10px] bg-white sm:p-4 p-2 sm:text-base text-sm px-7 shadow-xl shadow-[#C0943E40] text-[#C0943E] font-semibold">Explore Programs</button>
                        <button className="rounded-[10px] bg-white sm:p-4 p-2 sm:text-base text-sm shadow-xl shadow-[#C0943E40] text-[#C0943E] font-semibold">Speak to an Advisor</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutAccreditation