import { useState } from 'react'
import VL from '../Images/VL.png';
import HL from '../Images/HL.png';
import nysc from '../Images/nysc.svg';
import homeABD from '../Images/homeABD.png';
import homeAD from '../Images/homeAD.png';
import homeMBA from '../Images/homeMBA.png';
import homeED from '../Images/homeED.png';
import homeMini from '../Images/homeMini.png';
import homePC from '../Images/homePC.png';
import behindMan from '../Images/behindMan.png';
import { HiMiniArrowRight } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
const ProgramsDesignedForYou = () => {

    const navigate = useNavigate()

    const [programs, setPrograms] = useState('ABD')

    const navigateBtn = () => {
        window.scrollTo(0, 0)
        if (programs === 'ABD') {
            navigate('/associate-bachelor-degree')
        } else if (programs === 'AD') {
            navigate('/executive-advanced-diploma')
        } else if (programs === 'MBA') {
            navigate('/executive-mba')
        } else if (programs === 'ED') {
            navigate('/executive-diploma')
        } else if (programs === 'mini') {
            navigate('/mini-mba')
        } else if (programs === 'PC') {
            navigate('/professional-certificate')
        }
    }

    return (
        <div className='xl:px-16 sh:pl-6 sh:pr-6'>
            <p className='text-[#ffffff] mx-auto px-7 bg-gradient-to-r from-[#002B5B] to-[#005BC1] py-5 bg-clip-text text-transparent lf:text-[40px] mm:text-[32px] sk:text-[25px] text-xl mm:text-start text-center font-semibold'>Programs Designed for Future Business Leaders</p>
            <div className='flex justify-between items-center md:flex-row flex-col gap-5 sh:border-b border-[#797979B2] lf:text-[14px] px-2 mk:text-sm md:text-xs sa:text-base text-xs w-full mx-auto pb-2 mt-10'>
                <div className='flex items-center border-b md:border-none pb-1 border-[#797979B2] justify-between w-full'>
                    <p onClick={() => setPrograms('ABD')} className={`py-[10px] px-5 mr-2 cursor-pointer -full text-center rounded-[10px] ${programs === 'ABD' ? 'bg-[#002B5B33]' : ''}`}>Associate Bachelor’s Degree</p>
                    <p onClick={() => setPrograms('AD')} className={`py-[10px] px-5 cursor-pointer w-ful text-center rounded-[10px] ${programs === 'AD' ? 'bg-[#002B5B33]' : ''}`}>Advanced Diploma</p>
                    <p onClick={() => setPrograms('MBA')} className={`py-[10px] px-5 cursor-pointer w-ful text-center rounded-[10px] ${programs === 'MBA' ? 'bg-[#002B5B33]' : ''}`}>Executive MBA</p>
                </div>
                <div className='flex items-center justify-between border-b sh:border-none pb-1 border-[#797979B2] w-full'>
                    <p onClick={() => setPrograms('ED')} className={`py-[10px] px-5 cursor-pointer w-ful text-center rounded-[10px] ${programs === 'ED' ? 'bg-[#002B5B33]' : ''}`}>Executive Diploma</p>
                    <p onClick={() => setPrograms('mini')} className={`py-[10px] px-5 cursor-pointer w-ful text-center rounded-[10px] ${programs === 'mini' ? 'bg-[#002B5B33]' : ''}`}>Mini MBA</p>
                    <p onClick={() => setPrograms('PC')} className={`py-[10px] px-5 cursor-pointer w-ful text-center rounded-[10px] ${programs === 'PC' ? 'bg-[#002B5B33]' : ''}`}>Professional Certificates</p>
                </div>
            </div>
            <div className='mt-5 mc:grid grid-cols-2 w-full px-4'>
                <div>
                    <p className='mc:text-[32px] text-[25px] font-medium'>Program Overview</p>
                    {programs === 'ABD' ? (
                        <p className='mc:text-[18px] text-base font-normal mt-3'>Our Associate Bachelor’s Degree program equips you with the knowledge and skills to thrive in a rapidly evolving world. Taught by world-class professors and lecturers, the curriculum is designed to instill key values, strategic thinking, and problem-solving skills essential for tackling modern management challenges.</p>
                    ) : programs === 'AD' ? (
                        <p className='mc:text-[18px] text-base font-normal mt-3'>This Executive Advanced Diploma offers in-depth business and management training across specialized fields. Developed by industry experts, it provides practical tools, critical thinking, and leadership capabilities essential for career advancement in any sector.</p>
                    ) : programs === 'MBA' ? (
                        <p className='mc:text-[18px] text-base font-normal mt-3'>The Executive MBA program is a comprehensive, one-year journey for ambitious professionals ready to step into senior leadership roles. Through a rigorous, globally-relevant curriculum, you’ll gain advanced business skills, strategic insight, and a powerful professional network to thrive in today’s evolving global marketplace.</p>
                    ) : programs === 'ED' ? (
                        <p className='mc:text-[18px] text-base font-normal mt-3'>Our Executive Diploma is a fast-paced, one-month program designed for professionals seeking targeted business knowledge and practical expertise. Delivered online and self-paced, the curriculum blends essential management concepts with real-world applications to help you lead and make confident decisions quickly.</p>
                    ) : programs === 'mini' ? (
                        <p className='mc:text-[18px] text-base font-normal mt-3'>Our Executive Mini MBA program delivers focused, high-impact business education for professionals seeking fast, flexible upskilling. Designed by experienced business educators, it sharpens your leadership, strategic thinking, and decision-making—ideal for today’s dynamic business environment.</p>
                    ) : (
                        <p className='mc:text-[18px] text-base font-normal mt-3'>Our Professional Courses are designed for quick skill acquisition, empowering learners to gain job-ready expertise in just 14 days. Each course combines hands-on learning with foundational theory to enhance your career profile and day-to-day performance in your business or work environment.</p>
                    )}
                    <div className='mt-8 relative'>
                        <div className='relative'>
                            <img className='absolute z-20 sa:right-[35%] sa:block hidden h-full sa:-translate-x-[35%]' src={VL} alt="" />
                            <img className='absolute z-20 sa:left-[30%]  right-[50%] -translate-x-[50%] h-full sa:-translate-x-[30%]' src={VL} alt="" />
                            <img className='absolute z-20 sa:top-1/2 top-[33%] -translate-y-1/3 sa:-translate-y-1/2' src={HL} alt="" />
                            <img className='absolute z-20 sa:top-1/2 bottom-[33%] -translate-y-1/3 sa:-translate-y-1/2' src={HL} alt="" />
                            <div className=' grid sa:grid-cols-3 grid-cols-2 gap-3 z-10 relative mt-3'>
                                <div className='bg-white rounded-[10px] p-2'>
                                    <p className='sh:text-[36px] text-[23px]'>🌐</p>
                                    <p className='sh:text-[20px] font-normal'>Globally Recognized Degree</p>
                                </div>
                                <div className='bg-white rounded-[10px] p-2'>
                                    <p className='sh:text-[36px] text-[23px]'>💻</p>
                                    <p className='sh:text-[20px] font-normal'>Study <br /> Anywhere, <br /> Anytime</p>
                                </div>
                                <div className='bg-white rounded-[10px] p-2'>
                                    <p className='sh:text-[36px] text-[23px]'>🎓</p>
                                    <p className='sh:text-[20px] font-normal'>Qualifies for Postgraduate Studies</p>
                                </div>
                                <div className='bg-white rounded-[10px] p-2'>
                                    <img className='sh:size-auto size-[34px]' src={nysc} alt="" />
                                    <p className='sh:text-[20px] font-normal'>Meets National Service Requirements</p>
                                </div>
                                <div className='bg-white rounded-[10px] p-2'>
                                    <p className='sh:text-[36px] text-[23px]'>📜</p>
                                    <p className='sh:text-[20px] font-normal'>Enroll with <br /> just your <br /> SSCE</p>
                                </div>
                                <div className='bg-white rounded-[10px] p-2'>
                                    <p className='sh:text-[36px] text-[23px]'>🏅</p>
                                    <p className='sh:text-[20px] font-normal'>World Class Educational Quality</p>
                                </div>
                            </div>
                        </div>
                        <button onClick={navigateBtn} className='py-[10px] px-9 rounded-[15px] mx-auto sd:mx-0 flex items-center mt-10 gap-2 shadow-md shadow-[#FFFFFF40] border-2 border-[#FFFFFF80] text-white bg-gradient-to-r from-[#005BC1] to-[#002B5B]'>
                            Explore Courses
                            <HiMiniArrowRight className='mt-1' />
                        </button>
                    </div>
                </div>
                <div className='relative sd:block hidden'>
                    <img src={behindMan} className='max-w-[330px] absolute z-0 bottom-0 left-[80%] -translate-x-[80%]' alt="" />
                    {programs === 'ABD' ? (
                        <img
                            src={homeABD}
                            className='max-h-[460px] right-0 z-30 mx-auto mc:absolute relative bottom-0' alt=""
                        />
                    ) : programs === 'AD' ? (
                        <img
                            src={homeAD}
                            className='max-h-[460px] right-[-60px] z-30 mx-auto mc:absolute relative bottom-0' alt=""
                        />
                    ) : programs === 'MBA' ? (
                        <img
                            src={homeMBA}
                            className='max-h-[460px] right-[-60px] z-30 mx-auto mc:absolute relative bottom-0' alt=""
                        />
                    ) : programs === 'ED' ? (
                        <img
                            src={homeED}
                            className='max-h-[460px] right-[-40px] z-30 mx-auto mc:absolute relative bottom-0' alt=""
                        />
                    ) : programs === 'mini' ? (
                        <img
                            src={homeMini}
                            className='max-h-[460px] right-0 z-30 mx-auto mc:absolute relative bottom-[-35px]' alt=""
                        />
                    ) : (
                        <img
                            src={homePC}
                            className='max-h-[360px] right-[-50px] z-30 mx-auto mc:absolute relative bottom-0' alt=""
                        />
                    )}
                    {/* <img
                        src={programs === 'ABD' ? homeABD : programs === 'AD' ? homeAD : programs === 'MBA' ? homeMBA : programs === 'ED' ? homeED : programs === 'mini' ? homeMini : homePC}
                        className='max-h-[460px] right-0 z-30 mx-auto mc:absolute relative bottom-0' alt=""
                    /> */}
                </div>
            </div>
        </div>
    )
}

export default ProgramsDesignedForYou