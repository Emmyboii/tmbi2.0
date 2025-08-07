import globe from '../Images/globe.svg'
import award from '../Images/award.svg'
import graduate from '../Images/graduate.svg'
import trophy from '../Images/trophy.svg'
import briefcase from '../Images/briefcase.svg'
import mentoring from '../Images/mentoring.svg'
import { HiMiniArrowRight } from "react-icons/hi2";

const Why = () => {
    return (
        <div className=''>
            <p className='text-center text-[#ffffff] mx-auto max-w-[700px] text-[40px] font-bold'>Why Choose Throne Management Business Institute?</p>
            <div className='mt-5 grid grid-cols-3 gap-4'>
                <div className='rounded-[10px] flex flex-col gap-5 bg-white shadow shadow-[#0000001A] p-4'>
                    <div className='bg-[#C0943E1A] w-full mx-auto h-[242px] flex items-center justify-center rounded-[10px]'>
                        <img src={graduate} alt="" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[20px] font-medium'>Career-Focused Programs</p>
                        <p className='text-[16px] pb-5 font-light'>
                            Earn internationally respected degrees recognized in Switzerland, Nigeria, and beyond, ensuring credibility for career and academic growth.
                        </p>
                    </div>
                </div>
                <div className='rounded-[10px] flex flex-col gap-5 bg-white shadow shadow-[#0000001A] p-4'>
                    <div className='bg-[#C0943E1A] w-full mx-auto h-[242px] flex items-center justify-center rounded-[10px]'>
                        <img src={globe} alt="" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[20px] font-medium'>Flexible Learning Options</p>
                        <p className='text-[16px] pb-5 font-light'>
                            Study online, on-campus, or hybrid, designed for professionals and students seeking convenience without compromising education quality.
                        </p>
                    </div>
                </div>
                <div className='rounded-[10px] flex flex-col gap-5 bg-white shadow shadow-[#0000001A] p-4'>
                    <div className='bg-[#C0943E1A] w-full mx-auto h-[242px] flex items-center justify-center rounded-[10px]'>
                        <img src={award} alt="" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[20px] font-medium'>Globally Recognized Accreditation</p>
                        <p className='text-[16px] pb-5 font-light'>
                            Industry-relevant courses with practical applications, helping students develop business skills that employers value.
                        </p>
                    </div>
                </div>
                <div className='rounded-[10px] flex flex-col gap-5 bg-white shadow shadow-[#0000001A] p-4'>
                    <div className='bg-[#C0943E1A] w-full mx-auto h-[242px] flex items-center justify-center rounded-[10px]'>
                        <img src={mentoring} alt="" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[20px] font-medium'>Expert Faculty & Mentors</p>
                        <p className='text-[16px] pb-5 font-light'>
                            Learn from business leaders, executives, and academic professionals with real-world industry experience.
                        </p>
                    </div>
                </div>
                <div className='rounded-[10px] flex flex-col gap-5 bg-white shadow shadow-[#0000001A] p-4'>
                    <div className='bg-[#C0943E1A] w-full mx-auto h-[242px] flex items-center justify-center rounded-[10px]'>
                        <img src={briefcase} alt="" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[20px] font-medium'>Strong Industry Network</p>
                        <p className='text-[16px] pb-5 font-light'>
                            Gain access to alumni, employers, and corporate partners, creating opportunities for internships, mentorship, and job placements.
                        </p>
                    </div>
                </div>
                <div className='rounded-[10px] flex flex-col gap-5 bg-white shadow shadow-[#0000001A] p-4'>
                    <div className='bg-[#C0943E1A] w-full mx-auto h-[242px] flex items-center justify-center rounded-[10px]'>
                        <img src={trophy} alt="" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[20px] font-medium'>Scholarship & Financial Aid</p>
                        <p className='text-[16px] pb-5 font-light'>
                            Various scholarship opportunities and financial aid options make education more accessible and affordable.
                        </p>
                    </div>
                </div>
            </div>
            <button className='py-[10px] px-9 rounded-[15px] flex items-center justify-center mx-auto mt-10 gap-2 shadow-md shadow-[#FFFFFF40] border-2 border-[#FFFFFF80] text-white bg-gradient-to-r from-[#C0943E] to-[#5A451D]'>
                Get Started
                <HiMiniArrowRight className='mt-1' />
            </button>
        </div>
    )
}

export default Why