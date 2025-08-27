import program from '../NewImages/program1.webp';
import PDU1 from '../NewImages/PDU1.webp';
import PDU2 from '../NewImages/PDU2.webp';
import PDU3 from '../NewImages/PDU3.webp';
import PDU4 from '../NewImages/PDU4.webp';
import PDU5 from '../NewImages/PDU5.webp';
import PDU6 from '../NewImages/PDU6.webp';
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
                    <p className='font-bold sd:text-3xl text-2xl'>All our Programs are built to take you further</p>
                    <p className='sd:text-[19px] mt-2 font-normal'>From global recognition to world-class quality, every course is designed to <br className='mh:block hidden' /> open doors to your future.</p>

                    <div className='grid sd:grid-cols-3 grid-cols-2 mc:gap-10 gap-6 sa:px-5 mt-14'>
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
                            <img className='sd:size-[50px] size-[30px]' src={nysc} alt="" />
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

            <div id='program' className='bg-[#002B5B] xl:px-32 md:p-16 p-5 py-10 xl:py-20 flex flex-col gap-12'>
                <p className='font-bold mh:text-3xl text-2xl text-center text-white mt-5'>Programs Designed for Future Business Leaders</p>
                <div className='grid mf:grid-cols-3 sh:grid-cols-2 gap-10 pb-10'>
                    <div className='rounded-3xl bg-[#F2F2F7]'>
                        <img
                            className='rounded-t-3xl h-[260px] w-full object-cover'
                            src={PDU1}
                            alt=""
                        />
                        <div className='flex flex-col justify-between 3xl:h-[340px] mf:h-[500px] sh:h-[454px] gap-4 px-6 py-7 items-start'>
                            <p className=' text-[#0D0D0D] lf:text-2xl text-[21px] font-semibold'>Associate Bachelors Degree</p>
                            <p className='lf:text-xl text-[17px] font-normal leading-tight'>
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
                        <div className='flex flex-col justify-between 3xl:h-[340px] mf:h-[500px] sh:h-[454px] gap-4 px-6 py-7 items-start'>
                            <p className=' text-[#0D0D0D] lf:text-2xl text-[21px] font-semibold'>Advanced Diploma</p>
                            <p className='lf:text-xl text-[17px] font-normal leading-tight'>
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
                        <div className='flex flex-col justify-between 3xl:h-[340px] mf:h-[500px] sh:h-[454px] gap-4 px-6 py-7 items-start'>
                            <p className=' text-[#0D0D0D] lf:text-2xl text-[21px] font-semibold'>Executive MBA</p>
                            <p className='lf:text-xl text-[17px] font-normal leading-tight'>
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
                        <div className='flex flex-col justify-between 3xl:h-[340px] mf:h-[500px] sh:h-[454px] gap-4 px-6 py-7 items-start'>
                            <p className=' text-[#0D0D0D] lf:text-2xl text-[21px] font-semibold'>Executive Diploma</p>
                            <p className='lf:text-xl text-[17px] font-normal leading-tight'>
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
                        <div className='flex flex-col justify-between 3xl:h-[340px] mf:h-[500px] sh:h-[454px] gap-4 px-6 py-7 items-start'>
                            <p className=' text-[#0D0D0D] lf:text-2xl text-[21px] font-semibold'>Mini MBA</p>
                            <p className='lf:text-xl text-[17px] font-normal leading-tight'>
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
                        <div className='flex flex-col justify-between 3xl:h-[340px] mf:h-[500px] sh:h-[454px] gap-4 px-6 py-7 items-start'>
                            <p className=' text-[#0D0D0D] lf:text-2xl text-[21px] font-semibold'>Professional Certificates</p>
                            <p className='lf:text-xl text-[17px] font-normal leading-tight'>
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