import { TiTimes } from "react-icons/ti";
import halfCircle from '../Images/halfCircle.png'
import CAR2 from '../Images/CAR.png';
import SWL2 from '../Images/Switzerland.png';
import chad from '../Images/chad.png';
// import Rec1 from '../Images/Rec1.png'
// import Rec2 from '../Images/Rec2.png'
// import Rec3 from '../Images/Rec3.png'
// import Rec4 from '../Images/Rec4.png'
// import Rec5 from '../Images/Rec5.png'
import SWL from '../Images/SWL.jpg';
import MEC from '../Images/MEC.jpg';
import CAR from '../Images/CAR.jpg';
import AccreditationImg from '../Images/AccreditationImg.svg';
import { useState } from "react";

const NextStep = () => {

    const [acc, setAcc] = useState('switzerland')

    return (
        <div className="xl:px-24 sh:pl-16 sh:pr-10 sp:px-7 px-4 flex flex-col gap-60 pb-9">
            {/* <div className="flex flex-col gap-4">
                <p className='text-[#ffffff] bg-gradient-to-r from-[#002B5B] to-[#005BC1] bg-clip-text text-transparent sd:text-start text-center sp:text-[30px] sr:text-[24px] text-[19px] sd:text-[40px] font-semibold'>International Recognition</p>
                <div className="grid sm:grid-cols-5 grid-cols-3 w-full gap-y-6 justify-items-center">
                    <img className="xl:w-[200px] sp:w-[130px] w-[90px] xl:h-[80px] sp:h-[60px] h-[40px]" src={Rec1} alt="" />
                    <img className="xl:w-[200px] sp:w-[130px] w-[90px] xl:h-[80px] sp:h-[60px] h-[40px]" src={Rec2} alt="" />
                    <img className="xl:w-[200px] sp:w-[130px] w-[90px] xl:h-[80px] sp:h-[80px] h-[60px]" src={Rec3} alt="" />
                    <img className="xl:w-[200px] w-[130px] xl:h-[80px] h-[60px] sm:block hidden justify-self-center" src={Rec4} alt="" />
                    <img className="xl:w-[200px] w-[130px] xl:h-[80px] h-[60px] sm:block hidden justify-self-center" src={Rec5} alt="" />
                    <div className="col-span-3 flex justify-center items-start gap-7 sm:hidden">
                        <img className="sp:w-[130px] w-[90px] mt-5 sp:h-[60px] h-[40px]" src={Rec4} alt="" />
                        <img className="sp:w-[130px] w-[90px] sp:h-[60px] h-[40px]" src={Rec5} alt="" />
                    </div>
                </div>

            </div> */}

            <div className='z-20 flex flex-col gap-8'>
                <p className='text-[#ffffff] bg-gradient-to-r from-[#002B5B] to-[#005BC1] bg-clip-text text-transparent text-[38px] font-bold'>International Recognition</p>
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
                <div className="text-white flex flex-col mx-auto items-center justify-center text-center h-full mc:px-32 sa:px-7 px-2">
                    <p className="mh:text-[38px] sd:text-[28px] sk:text-[22px] text-lg font-semibold">Take the Next Step Towards your Future</p>
                    <p className="mh:text-[18px] leading-snug mt-7 sk:text-[14px] text-xs font-medium">Unlock new opportunities with a globally recognized program. Gain the skills, flexibility, and support you need to succeed.</p>
                    <div className="flex gap-5 mt-5">
                        <button className="rounded-[10px] bg-white sm:p-4 p-2 sm:text-base text-sm px-7 shadow-xl shadow-[#C0943E40] text-[#C0943E] font-semibold">Apply Now</button>
                        <button className="rounded-[10px] bg-white sm:p-4 p-2 sm:text-base text-sm shadow-xl shadow-[#C0943E40] text-[#C0943E] font-semibold">Speak to an Advisor</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NextStep