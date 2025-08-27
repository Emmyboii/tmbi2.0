import { HiMiniArrowRight } from 'react-icons/hi2'
import { Link, Navigate, useLocation } from 'react-router-dom'
import ProgramDetails from '../Components/ProgramDetails';
import { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import nextStep from '../NewImages/nextStep.png'
import { HashLink } from 'react-router-hash-link';

const Programs = () => {

    const { pathname } = useLocation();
    const [visibleCount, setVisibleCount] = useState(16);

    const currentProgram = ProgramDetails.find(p => p.path === pathname);

    if (!currentProgram) {
        return (
            <Navigate to="/404" />
        );
    }

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
                    <div className={`text-white px-3 ${programPrice === ('490' || '10') ? 'max-w-[800px]' : programPrice === '20' ? 'max-w-[500px]' : programPrice === '20' ? 'max-w-[500px]' : 'max-w-[830px]'}`}>
                        <p className='mh:text-[60px] sh:text-[50px] sp:text-[35px] text-[26px] sh:leading-[65px] font-semibold'>{heroBigText} <span className='text-[#C0943E]'>{heroBigTextColored}</span>{heroBigText2}</p>
                        <p className='sm:text-[20px] text-[17px] sm:leading-8 font-normal mt-5 max-w-[540px] mx-auto'>{heroSmallText}</p>
                        <p className='text-[#C0943E] sm:text-3xl text-2xl font-normal mt-9'>Begin Your Journey for ${programPrice}</p>
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

                <div id="label" className="pb-20 flex flex-col gap-8">
                    <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-center">{label}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-12">
                        {programDetails.slice(0, visibleCount).map(
                            ({ programImg, programLabel, programText, projectPath }) => (
                                <div
                                    key={programLabel}
                                    className="bg-[#002B5B26] sa:min-h-[400px] min-h-[350px] sm:min-h-[430px] md:min-h-[460px] rounded-2xl flex flex-col justify-between"
                                >
                                    <div>
                                        <img
                                            className="w-full h-[150px] sm:h-[180px] md:h-[200px] object-cover rounded-t-2xl hover:scale-95 transition-all duration-500"
                                            src={programImg}
                                            alt=""
                                        />
                                        <p className="text-base sm:text-lg md:text-xl font-semibold mt-4 px-4">{programLabel}</p>
                                        <p className="text-sm sm:text-base mt-2 px-4">{programText}</p>
                                    </div>
                                    <div className="flex justify-between items-center p-4">
                                        <Link onClick={() => window.scrollTo(0, 0)} to={projectPath}>
                                            <button className="flex items-center text-[#C0943E] font-medium gap-2">
                                                Enroll Now <HiMiniArrowRight />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        )}
                    </div>

                    {/* ✅ View More / View Less */}
                    {programDetails.length > 12 && (
                        <div className="text-center mt-6">
                            <button
                                onClick={() => {
                                    if (visibleCount >= programDetails.length) {
                                        setVisibleCount(16); // reset
                                    } else {
                                        setVisibleCount(prev => prev + 16); // load more
                                    }
                                }}
                                className="flex items-center gap-3 bg-[#002B5B] px-6 py-3 rounded-full font-medium text-white mx-auto transition duration-300"
                            >
                                {visibleCount >= programDetails.length ? 'View Less Courses' : 'View More Courses'}
                                <MdOutlineKeyboardArrowDown
                                    className={`transition-transform duration-300 ${visibleCount >= programDetails.length ? 'rotate-180' : ''}`}
                                />
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

                    <div className="relative text-white flex flex-col mx-auto items-center z-50 justify-center text-center h-full mc:px-32 sa:px-7 px-1 sa:mt-52 sk:mt-32 mt-28">
                        <p className="mh:text-[38px] 2xl:text-5xl sd:text-[28px] leading-tight sk:text-[22px] text-[16px] font-semibold">
                            Take the Next Step Towards your Future
                        </p>
                        <p className="mh:text-[18px] leading-snug sa:mt-7 mt-3 sk:text-[14px] text-xs font-medium">
                            Unlock new opportunities with a globally recognized program. Gain the skills, <br className='lg:block hidden' /> flexibility, and support you need to succeed.
                        </p>
                        <div className="flex items-center sd:gap-5 gap-2 mt-9">
                            <HashLink smooth to="/#program">
                                <button className="sa:py-3 py-2 sa:px-[30px] px-7 rounded-full bg-[#C0943E] text-[#ffffff] text-[16px] font-medium">
                                    Enroll Now
                                </button>
                            </HashLink>
                            <a href="http://surl.li/mumpei" rel='noreferrer' target='_blank'>
                                <button className="sm:p-3 p-2 sm:text-base text-sm border-2 border-[#C0943E] rounded-full text-[#C0943E] font-semibold">
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