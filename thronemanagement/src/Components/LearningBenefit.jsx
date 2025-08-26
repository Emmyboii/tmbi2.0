import time from '../NewImages/time.png';
import computer from '../NewImages/computer.png';
import track from '../NewImages/track.png';
import LB from '../NewImages/LB.png';

const LearningBenefit = () => {
    return (
        <div className='xl:px-32 sh:p-16 p-5 xl:py-20 text-black'>
            <p className='text-[#0D0D0D] lf:text-[40px] mm:text-[32px] text-[25px] mm:text-start text-center font-bold'>Our Learning Benefits</p>

            <div className="flex justify-between mt-10 items-center gap-14">
                <div className="flex flex-col items-start gap-9">
                    <div className="flex flex-col gap-4">
                        <div className='flex items-center gap-2'>
                            <img className='size-[30px]' src={time} alt="" />
                            <p className='font-semibold text-2xl'>Learn at Your Own Pace</p>
                        </div>
                        <p className='text-lg'>Your schedule, your rules. Study when it’s most convenient for you no fixed deadlines, just progress at your speed.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className='flex items-center gap-2'>
                            <img className='size-[30px]' src={computer} alt="" />
                            <p className='font-semibold text-2xl'>100% Online Learning</p>
                        </div>
                        <p className='text-lg'>Access all courses from any device, anywhere. Learn seamlessly from the comfort of your home or even on the go.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className='flex items-center gap-2'>
                            <img className='size-[30px]' src={track} alt="" />
                            <p className='font-semibold text-2xl'>Fast Track Your Success</p>
                        </div>
                        <p className='text-lg'>Designed for efficiency! Complete your program faster with expert guidance and flexible study durations.</p>
                    </div>
                    <a href="#apply">
                        <button className="py-3 px-[30px] rounded-full bg-[#C0943E] text-[#ffffff] text-[18px] font-medium">
                            Start your Learning Journey
                        </button>
                    </a>
                </div>
                <img src={LB} className='h-[380px] justify-end' alt="" />
            </div>
        </div>
    )
}

export default LearningBenefit