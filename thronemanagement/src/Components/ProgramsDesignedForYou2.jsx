import program from '../NewImages/program1.png';
import PDU1 from '../NewImages/PDU1.png';
import PDU2 from '../NewImages/PDU2.png';
import PDU3 from '../NewImages/PDU3.png';
import PDU4 from '../NewImages/PDU4.png';
import PDU5 from '../NewImages/PDU5.png';
import PDU6 from '../NewImages/PDU6.png';
import nysc from '../Images/nysc.svg';
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const ProgramsDesignedForYou2 = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div
                className='relative w-full py-20 bg-[#002B5B] flex items-center justify-center text-center'
                style={{
                    backgroundImage: `url(${program})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="text-white max-w-[870px] px-3">
                    <p className='font-bold text-3xl'>All our Programs are built to take you further</p>
                    <p className='text-[19px] mt-2 font-normal'>From global recognition to world-class quality, every course is designed to <br /> open doors to your future.</p>

                    <div className='grid grid-cols-3 gap-10 mt-14'>
                        <div className='border border-[#FFFFFF] p-3 rounded-[27px] backdrop-blur-[21.5px] bg-white/10 flex flex-col gap-[10px]'>
                            <p className='sh:text-[36px] text-[23px]'>🌐</p>
                            <p className='sh:text-[20px] font-normal'>Globally Recognized Degree</p>
                        </div>
                        <div className='border border-[#FFFFFF] p-3 rounded-[27px] backdrop-blur-[21.5px] bg-white/10 flex flex-col gap-[10px]'>
                            <p className='sh:text-[36px] text-[23px]'>💻</p>
                            <p className='sh:text-[20px] font-normal'>Study Anywhere, Anytime</p>
                        </div>
                        <div className='border border-[#FFFFFF] p-3 rounded-[27px] backdrop-blur-[21.5px] bg-white/10 flex flex-col gap-[10px]'>
                            <p className='sh:text-[36px] text-[23px]'>🎓</p>
                            <p className='sh:text-[20px] font-normal'>Qualifies for Postgraduate Studies</p>
                        </div>
                        <div className='border border-[#FFFFFF] p-3 rounded-[27px] backdrop-blur-[21.5px] bg-white/10 flex flex-col items-center gap-[10px]'>
                            <img className='size-[50px]' src={nysc} alt="" />
                            <p className='sh:text-[20px] font-normal'>Meets National Service Requirements</p>
                        </div>
                        <div className='border border-[#FFFFFF] p-3 rounded-[27px] backdrop-blur-[21.5px] bg-white/10 flex flex-col gap-[10px]'>
                            <p className='sh:text-[36px] text-[23px]'>📜</p>
                            <p className='sh:text-[20px] font-normal'>Enroll with just your SSCE</p>
                        </div>
                        <div className='border border-[#FFFFFF] p-3 rounded-[27px] backdrop-blur-[21.5px] bg-white/10 flex flex-col gap-[10px]'>
                            <p className='sh:text-[36px] text-[23px]'>🏅</p>
                            <p className='sh:text-[20px] font-normal'>World Class Educational Quality</p>
                        </div>
                    </div>
                    <HashLink smooth to="/#program">
                        <button className="py-3 px-[50px] mt-10 rounded-full bg-[#C0943E] text-[#ffffff] text-[18px] font-medium">
                            Enroll Now
                        </button>
                    </HashLink>
                </div>
            </div>

            <div id='program' className='bg-[#002B5B] xl:px-32 xl:py-20 sh:p-16 p-5 flex flex-col gap-12'>
                <p className='font-bold text-3xl text-center text-white mt-5'>Programs Designed for Future Business Leaders</p>
                <div className='grid grid-cols-3 gap-10 pb-10'>
                    <div className='rounded-3xl bg-[#F2F2F7]'>
                        <img
                            className='rounded-t-3xl h-[260px] w-full object-cover'
                            src={PDU1}
                            alt=""
                        />
                        <div className='flex flex-col justify-between 3xl:min-h-[340px] min-h-[440px] gap-4 px-6 py-7 items-start'>
                            <p className=' text-[#0D0D0D] text-2xl font-semibold'>Associate Bachelors Degree</p>
                            <p className='text-xl font-normal leading-tight'>
                                Our Associate Bachelor’s Degree program equips you with the knowledge and skills to thrive in a rapidly evolving world. Taught by world-class professors and lecturers, the curriculum is designed to instill key values, strategic thinking, and problem-solving skills essential for tackling modern management challenges.
                            </p>
                            <p onClick={() => navigate('/associate-bachelor-degree')} className='flex items-center cursor-pointer gap-2 text-[#C0943E] font-medium text-xl'>Explore Courses <FaArrowRightLong /></p>
                        </div>
                    </div>
                    <div className='rounded-3xl bg-[#F2F2F7]'>
                        <img
                            className='rounded-t-3xl h-[260px] w-full object-cover'
                            src={PDU2}
                            alt=""
                        />
                        <div className='flex flex-col justify-between 3xl:min-h-[340px] min-h-[440px] gap-4 px-6 py-7 items-start'>
                            <p className=' text-[#0D0D0D] text-2xl font-semibold'>Advanced Diploma</p>
                            <p className='text-xl font-normal leading-tight'>
                                This Executive Advanced Diploma offers in-depth business and management training across specialized fields. Developed by industry experts, it provides practical tools, critical thinking, and leadership capabilities essential for career advancement in any sector.
                            </p>
                            <p onClick={() => navigate('/executive-advanced-diploma')} className='flex items-center cursor-pointer gap-2 text-[#C0943E] font-medium text-xl'>Explore Courses <FaArrowRightLong /></p>
                        </div>
                    </div>
                    <div className='rounded-3xl bg-[#F2F2F7]'>
                        <img
                            className='rounded-t-3xl h-[260px] w-full object-cover'
                            src={PDU3}
                            alt=""
                        />
                        <div className='flex flex-col justify-between 3xl:min-h-[340px] min-h-[440px] gap-4 px-6 py-7 items-start'>
                            <p className=' text-[#0D0D0D] text-2xl font-semibold'>Executive MBA</p>
                            <p className='text-xl font-normal leading-tight'>
                                The Executive MBA program is a comprehensive, one-year journey for ambitious professionals ready to step into senior leadership roles. Through a rigorous, globally-relevant curriculum, you’ll gain advanced business skills, strategic insight, and a powerful professional network to thrive in today’s evolving global marketplace.
                            </p>
                            <p onClick={() => navigate('/executive-mba')} className='flex items-center cursor-pointer gap-2 text-[#C0943E] font-medium text-xl'>Explore Courses <FaArrowRightLong /></p>
                        </div>
                    </div>
                    <div className='rounded-3xl bg-[#F2F2F7]'>
                        <img
                            className='rounded-t-3xl h-[260px] w-full object-cover'
                            src={PDU4}
                            alt=""
                        />
                        <div className='flex flex-col justify-between 3xl:min-h-[340px] min-h-[440px] gap-4 px-6 py-7 items-start'>
                            <p className=' text-[#0D0D0D] text-2xl font-semibold'>Executive Diploma</p>
                            <p className='text-xl font-normal leading-tight'>
                                Our Executive Diploma is a fast-paced, one-month program designed for professionals seeking targeted business knowledge and practical expertise. Delivered online and self-paced, the curriculum blends essential management concepts with real-world applications to help you lead and make confident decisions quickly.
                            </p>
                            <p onClick={() => navigate('/executive-diploma')} className='flex items-center cursor-pointer gap-2 text-[#C0943E] font-medium text-xl'>Explore Courses <FaArrowRightLong /></p>
                        </div>
                    </div>
                    <div className='rounded-3xl bg-[#F2F2F7]'>
                        <img
                            className='rounded-t-3xl h-[260px] w-full object-cover'
                            src={PDU5}
                            alt=""
                        />
                        <div className='flex flex-col justify-between 3xl:min-h-[340px] min-h-[440px] gap-4 px-6 py-7 items-start'>
                            <p className=' text-[#0D0D0D] text-2xl font-semibold'>Mini MBA</p>
                            <p className='text-xl font-normal leading-tight'>
                                Our Executive Mini MBA program delivers focused, high-impact business education for professionals seeking fast, flexible upskilling. Designed by experienced business educators, it sharpens your leadership, strategic thinking, and decision-making ideal for today’s dynamic business environment.
                            </p>
                            <p onClick={() => navigate('/mini-mba')} className='flex items-center cursor-pointer gap-2 text-[#C0943E] font-medium text-xl'>Explore Courses <FaArrowRightLong /></p>
                        </div>
                    </div>
                    <div className='rounded-3xl bg-[#F2F2F7]'>
                        <img
                            className='rounded-t-3xl h-[260px] w-full object-cover'
                            src={PDU6}
                            alt=""
                        />
                        <div className='flex flex-col justify-between 3xl:min-h-[340px] min-h-[440px] gap-4 px-6 py-7 items-start'>
                            <p className=' text-[#0D0D0D] text-2xl font-semibold'>Professional Certificates</p>
                            <p className='text-xl font-normal leading-tight'>
                                Our Professional Courses are designed for quick skill acquisition, empowering learners to gain job-ready expertise in just 14 days. Each course combines hands-on learning with foundational theory to enhance your career profile and day-to-day performance in your business or work environment
                            </p>
                            <p onClick={() => navigate('/professional-certificate')} className='flex items-center cursor-pointer gap-2 text-[#C0943E] font-medium text-xl'>Explore Courses <FaArrowRightLong /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgramsDesignedForYou2