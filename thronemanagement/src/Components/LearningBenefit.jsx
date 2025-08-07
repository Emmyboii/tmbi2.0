import graduate from '../Images/graduate2.svg';
import graduateImg from '../Images/graduateImg.webp';
import timeImg from '../Images/TimeImg.webp';
import scaleImg from '../Images/scaleImg.webp';
import Ellipse1 from '../Images/Ellipse 1.png';
// import Ellipse2 from '../Images/Ellipse 2.svg';
import time from '../Images/time.svg';
import scale from '../Images/scale.png';
// import learningFrame from '../Images/learningFrame.svg';
import { HiMiniArrowRight } from 'react-icons/hi2';

const LearningBenefit = () => {
    return (
        <div className='xl:px-24 sh:pl-16 sh:pr-10 sp:px-7 px-4'>
            <p className='text-[#ffffff] bg-gradient-to-r from-[#002B5B] via-[#00438E] via-[#004FA7] to-[#005BC1] bg-clip-text text-transparent lf:text-[40px] mm:text-[32px] text-[25px] mm:text-start text-center font-bold'>Our Learning Benefits</p>
            <div className='mt-4 grid mc:grid-cols-3 sd:grid-cols-2 gap-3'>
                <div className='border-[#797979B2] h-[461px] relative flex flex-col gap-2 border bg-white shadow-lg shadow-[#00000040] rounded-[10px] pt-6'>
                    <img className='sh:size-[50px] size-[40px] pl-3' src={time} alt="" />
                    <p className='sh:text-[20px] pl-3 font-semibold'>Learn at Your Own Pace</p>
                    <p className='sh:text-[16px] text-[13px] pl-3 font-normal pr-7'>Your schedule, your rules. Study when it’s most convenient for you—no fixed deadlines, just progress at your speed.</p>
                    <button className='flex items-center sh:text-base text-[13px] font-semibold gap-2 pl-3 text-[#005BC1]'>
                        Learn more
                        <HiMiniArrowRight className='mt-1' />
                    </button>
                    <img src={timeImg} className='xl:h-[280px] h-[190px] absolute bottom-0 right-0 z-40' alt="" />
                    <img src={Ellipse1} className='mt-[74px]' alt="" />
                </div>
                <div className='border-[#797979B2] h-[461px] relative flex flex-col gap-2 border bg-[#002B5B] text-white shadow-lg shadow-[#00000040] rounded-[10px] pl-3 pt-6'>
                    <img className='sh:size-[40px] size-[27px]' src={graduate} alt="" />
                    <p className='sh:text-[20px] font-semibold'>100% Online Learning</p>
                    <p className='sh:text-[16px] text-[13px] font-normal pr-7'>Access all courses from any device, anywhere. Learn seamlessly from the comfort of your home or even on the go.</p>
                    <button className='flex items-center sh:text-base text-[13px] font-semibold gap-2'>
                        Explore Programs
                        <HiMiniArrowRight className='mt-1' />
                    </button>
                    <img src={graduateImg} className='w-[307px bottom-0 rounded-[10px] left-0 absolute z-40' alt="" />
                </div>
                <div className='border-[#797979B2] h-[461px] relative flex flex-col gap-2 border bg-gradient-to-b from-[#002B5BBF] via-[#002B5BBF] text-white to-[#FFFFFF] shadow-lg shadow-[#00000040] rounded-[10px] pl-3 pt-6'>
                    <img className='sh:size-[40px] size-[27px]' src={scale} alt="" />
                    <p className='sh:text-[20px] font-semibold'>Fast-Track Your Success</p>
                    <p className='sh:text-[16px] text-[13px] font-normal pr-7'>Designed for efficiency! Complete your program faster with expert guidance and flexible study durations.</p>
                    <button className='flex items-center sh:text-base text-[13px] font-semibold gap-2'>
                        Learn more
                        <HiMiniArrowRight className='mt-1' />
                    </button>
                    <img src={scaleImg} className='xl:h-[330px] h-[230px] absolute bottom-0 right-5 z-40' alt="" />
                </div>
            </div>
            <button className='py-[10px] px-9 rounded-[15px] flex items-center justify-center mx-auto mt-10 gap-2 shadow-md shadow-[#FFFFFF40] border-2 border-[#FFFFFF] text-white bg-gradient-to-r from-[#005BC1] to-[#002B5B]'>
                Start your Learning Journey
                <HiMiniArrowRight className='mt-1' />
            </button>
        </div>
    )
}

export default LearningBenefit