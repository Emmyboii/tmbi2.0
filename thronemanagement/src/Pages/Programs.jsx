import { HiMiniArrowRight } from 'react-icons/hi2'
import { Link, useLocation } from 'react-router-dom'
import ProgramDetails from '../Components/ProgramDetails';
import { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import nextStep from '../NewImages/nextStep.png'

const Programs = () => {

    const { pathname } = useLocation();
    const [visibleCount, setVisibleCount] = useState(15);

    const currentProgram = ProgramDetails.find(p => p.path === pathname);

    const { heroImg, heroBigText, heroSmallText, label, programDetails, heroBigTextColored, heroBigText2, programPrice } = currentProgram;

    return (
        <div>
            <div className='flex flex-col gap-8'>
                <div
                    className="relative w-full py-20 flex items-center justify-center text-center"
                    style={{
                        backgroundImage: `url(${heroImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className={`text-white px-3 ${programPrice === '490' || '10' ? 'max-w-[800px]' : programPrice === '20' ? 'max-w-[500px]' : 'max-w-[900px]'}`}>
                        <p className='mh:text-[60px] sh:text-[50px] sp:text-[35px] text-[26px] sh:leading-[65px] font-semibold'>{heroBigText} <span className='text-[#C0943E]'>{heroBigTextColored}</span>{heroBigText2}</p>
                        <p className='sm:text-[20px] text-sm leading-8 font-normal mt-5 max-w-[540px] mx-auto'>{heroSmallText}</p>
                        <p className='text-[#C0943E] text-3xl font-normal mt-9'>Begin Your Journey for ${programPrice}</p>
                        <a href='#label'>
                            <button className="py-3 px-[30px] mt-10 rounded-full bg-[#C0943E] text-[#ffffff] text-[18px] font-medium">
                                {pathname === '/executive-diploma' || pathname === '/professional-certificate' ? (
                                    <p>Start Learning Today</p>
                                ) : (
                                    <p>Enroll Now</p>
                                )}
                            </button>
                        </a>

                    </div>
                </div>
                <div id='label' className='pb-20 flex flex-col gap-8'>
                    <p className='sh:text-[30px] sp:text-2xl text-lg font-semibold text-center'>{label}</p>
                    <div className='gri flex flex-wrap items-center justify-center mk:grid-cols-4 sd:grid-cols-2 gap-8 md:px-24 px-7'>
                        {programDetails.slice(0, visibleCount).map(
                            ({ programImg, programLabel, programText, projectPath }) => (
                                <div key={programLabel} className='bg-[#002B5B26] h-[480px] mk:w-[370px] sh:w-[250px] flex flex-col gap-1 rounded-[20px] justify-between'>
                                    <div className='flex flex-col gap-2'>
                                        <img className='w-full h-[170px] rounded-t-[20px] hover:scale-95 transition-all duration-700 object-cover' src={programImg} alt="" />
                                        <p className='text-[20px] pt-4 px-4 font-semibold'>{programLabel}</p>
                                        <p className='text-[17px] pt-3 px-4 font-normal'>{programText}</p>
                                    </div>
                                    <div className='flex justify-between mt-7 mb-3 p-4'>
                                        <Link onClick={() => window.scrollTo(0, 0)} to={projectPath}>
                                            <button
                                                className='flex items-center  text-[#C0943E] rounded-[5px] p-2 font-medium gap-2'>
                                                Enroll Now
                                                <HiMiniArrowRight className='' />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                    </div>
                    {programDetails.length > 12 && (
                        <div className='text-center mt-6'>
                            <button
                                onClick={() => {
                                    if (visibleCount >= programDetails.length) {
                                        setVisibleCount(15); // reset
                                    } else {
                                        setVisibleCount(prev => prev + 15); // load more
                                    }
                                }}
                                className='flex items-center gap-3 bg-[#002B5B] px-6 py-2 rounded-full font-medium text-white mx-auto transition duration-300'
                            >
                                {visibleCount >= programDetails.length ? 'View Less Courses' : 'View More Courses'}
                                <MdOutlineKeyboardArrowDown className={`transition-transform duration-300 ${visibleCount >= programDetails.length ? 'rotate-180' : ''}`} />
                            </button>
                        </div>
                    )}
                </div>

                <div className='sa:min-h-[530px] xl:mx-32 xl:my-20 sh:m-10 m-5 sk:min-h-[450px] min-h-[430px] relative flex items-center bg-gradient-to-b from-[#002B5B] to-[#005BC1] rounded-[30px] shadow-sm shadow-[#4F00EE1A]'>

                    <img
                        className='w-[500px] mx-auto absolute -top-24 left-1/2 -translate-x-1/2'
                        src={nextStep}
                        alt=""
                    />

                    <div className="relative text-white flex flex-col mx-auto items-center z-50 justify-center text-center h-full mc:px-32 sa:px-7 px-2 mt-52">
                        <p className="mh:text-[38px] 2xl:text-5xl sd:text-[28px] sk:text-[22px] text-lg font-semibold">
                            Take the Next Step Towards your Future
                        </p>
                        <p className="mh:text-[18px] leading-snug mt-7 sk:text-[14px] text-xs font-medium">
                            Unlock new opportunities with a globally recognized program. Gain the skills, <br /> flexibility, and support you need to succeed.
                        </p>
                        <div className="flex items-center gap-5 mt-9">
                            <a href="#apply">
                                <button className="py-3 px-[30px] rounded-full bg-[#C0943E] text-[#ffffff] text-[18px] font-medium">
                                    Enroll Now
                                </button>
                            </a>
                            <a href="http://surl.li/mumpei" rel='noreferrer' target='_blank'>
                                <button className="sm:p-4 p-2 sm:text-base text-sm border-2 border-[#C0943E] rounded-full text-[#C0943E] font-semibold">
                                    Speak to an Advisor
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programs