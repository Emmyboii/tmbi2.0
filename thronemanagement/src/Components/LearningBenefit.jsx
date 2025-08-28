import time from '../NewImages/time.png';
import computer from '../NewImages/computer.png';
import track from '../NewImages/track.png';
import LB from '../NewImages/LB.webp';
import { HashLink } from 'react-router-hash-link';

const LearningBenefit = () => {
    return (
        <div id='learningBenefits' className='xl:px-32 md:p-14 p-5 py-10 xl:py-20 text-black'>
            <p className='text-[#0D0D0D] lf:text-[40px] mm:text-[32px] text-[25px] mc:text-start text-center font-bold'>Our Learning Benefits</p>

            <div className="flex mc:flex-row flex-col-reverse justify-between mt-10 items-center gap-14">
                <div className="flex flex-col mc:items-start items-center gap-9">
                    <div className="flex flex-col gap-4">
                        <div className='flex items-center gap-2'>
                            <img className='size-[30px]' src={time} alt="" />
                            <p className='font-semibold sq:text-2xl text-xl'>Learn at Your Own Pace</p>
                        </div>
                        <p className='sq:text-lg text-base'>Your schedule, your rules. Study when it’s most convenient for you no fixed deadlines, just progress at your speed.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className='flex items-center gap-2'>
                            <img className='size-[30px]' src={computer} alt="" />
                            <p className='font-semibold sq:text-2xl text-xl'>100% Online Learning</p>
                        </div>
                        <p className='sq:text-lg text-base'>Access all courses from any device, anywhere. Learn seamlessly from the comfort of your home or even on the go.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className='flex items-center gap-2'>
                            <img className='size-[30px]' src={track} alt="" />
                            <p className='font-semibold sq:text-2xl text-xl'>Fast Track Your Success</p>
                        </div>
                        <p className='sq:text-lg text-base'>Designed for efficiency! Complete your program faster with expert guidance and flexible study durations.</p>
                    </div>
                    <HashLink smooth to="/#program">
                        <button className="py-3 px-[30px] rounded-full bg-[#C0943E] text-[#ffffff] text-[18px] font-medium">
                            Start your Learning Journey
                        </button>
                    </HashLink>
                </div>
                <img src={LB} className='lf:h-[380px] h-[280px] justify-end object-cover rounded-[20px]' alt="" />
            </div>
        </div>
    )
}

export default LearningBenefit