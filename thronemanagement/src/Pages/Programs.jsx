import { HiMiniArrowRight } from 'react-icons/hi2'
import { Link, useLocation } from 'react-router-dom'
import ProgramDetails from '../Components/ProgramDetails';
import { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const Programs = ({ setOpenCart }) => {

    const { pathname } = useLocation();
    const [visibleCount, setVisibleCount] = useState(15);

    const currentProgram = ProgramDetails.find(p => p.path === pathname);

    const { heroImg, heroBigText, heroSmallText, label, programDetails } = currentProgram;

    return (
        <div>
            <div className='flex flex-col gap-8'>
                <div
                    className="relative w-full"
                    style={{
                        backgroundImage: `url(${heroImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div
                        className="absolute inset-0 w-[63%]"
                        style={{
                            background: 'linear-gradient(to right, #005BC1, #005BC199)',
                            WebkitMaskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
                            maskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
                        }}
                    ></div>

                    <div className="relative text-white xl:max-w-[62%] mm:max-w-[70%] xl:ml-20 sh:ml-10 sh:px-0 sr:px-3 px-1 py-20">
                        <p className='mh:text-[60px] sh:text-[50px] sp:text-[35px] text-[26px] sh:leading-[73px] font-semibold max-w-[700px]'>{heroBigText}</p>
                        <p className='sm:text-[20px] text-sm leading-7 font-normal mt-5 max-w-[540px]'>{heroSmallText}</p>
                        <a href='#label'>
                            <button className='py-3 px-[30px] mt-14 rounded-full bg-white text-[#005BC1] text-[18px] font-medium'>
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
                    <div className='grid mk:grid-cols-3 sd:grid-cols-2 gap-x-3 gap-y-7 md:px-24 px-7'>
                        {programDetails.slice(0, visibleCount).map(
                            ({ programImg, programLabel, programText, programPrice, projectPath }) => (
                                <div key={programLabel} className='bg-[#002B5B26] border-[0.5px] flex flex-col gap-1 border-[#002B5B40] shadow-md rounded-[10px] p-3 justify-between'>
                                    <div className='flex flex-col gap-2'>
                                        <Link onClick={() => window.scrollTo(0, 0)} to={projectPath}>
                                            <img className='w-full h-[170px] rounded-[10px] hover:scale-105 transition-all duration-700 object-cover' src={programImg} alt="" />
                                        </Link>
                                        <p className='text-[20px] font-semibold'>{programLabel}</p>
                                        <p className='text-[17px] font-normal'>{programText}</p>
                                    </div>
                                    <div className='flex justify-between mt-7 mb-3'>
                                        <p className='font-medium text-2xl'>${programPrice}</p>
                                        <Link onClick={() => window.scrollTo(0, 0)} to={projectPath}>
                                            <button
                                                className='flex items-center  text-white bg-[#002B5B] rounded-[5px] p-2 font-semibold gap-2'>
                                                Enroll Now
                                                <HiMiniArrowRight className='mt-1' />
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
            </div>
        </div>
    )
}

export default Programs