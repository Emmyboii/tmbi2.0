import { HiMiniArrowRight } from 'react-icons/hi2'
import PUDD from '../Images/PUDD.webp'
import PUDD2 from '../Images/PUDD2.png'
import PUDD3 from '../Images/PUDD3.png'
import PUDD4 from '../Images/PUDD4.png'

const FeaturedArticles = () => {
    return (
        <div className='xl:px-24 sh:pl-16 sh:pr-10 sp:px-7 px-4 bg-[#002B5B] py-8 text-white'>
            <div className='grid grid-cols-2'>
                <div className='mk:col-span-1 col-span-2'>
                    <p className='font-bold sp:text-[45px] sr:text-3xl text-2xl'>Featured Articles</p>
                    <p className='font-normal mt-2 sp:text-lg sr:text-base text-sm'>Stay connected with the latest business insights, research <br className='sd:block hidden' />findings, and success stories from our students, and alumni network.</p>
                    <button className='flex items-center sr:text-base text-xs underline mt-7 font-medium gap-2'>
                        Browse Featured Articles
                        <HiMiniArrowRight className='mt-1' />
                    </button>
                </div>
            </div>
            <div className='grid mk:grid-cols-2 gap-10 mt-8'>
                <div>
                    <img src={PUDD} alt="" />
                    <p className='sd:text-[34px] sp:text-[27px] sr:text-[20px] text-base mt-3 font-medium'>The Future of Swiss Business Leadership in a Digital Age</p>
                    <div className='flex justify-between mt-4 w-full'>
                        <p className='font-extralight text-base'>Prof. Dr. Sarah Chen</p>
                        <p className='font-extralight text-base'>8 mins read.</p>
                    </div>
                </div>
                <div>
                    <div className='sp:grid flex flex-col-reverse grid-cols-3 gap-5 border-t pt-8 pb-5'>
                        <div className='flex flex-col gap-1 col-span-2'>
                            <p className='text-[#C0943E] font-semibold'>Alumni Stories</p>
                            <p className='font-semibold sa:text-[20px] text-base'>From Classroom to Boardroom: Alumni Success Stories</p>
                            <div className='flex justify-between w-full'>
                                <p className='font-extralight text-base'>Elena Vasquez</p>
                                <p className='font-extralight text-base'>5 mins read.</p>
                            </div>
                        </div>
                        <img className='w-full object-cover sp:h-[110px]' src={PUDD2} alt="" />
                    </div>
                    <div className='sp:grid flex flex-col-reverse grid-cols-3 gap-5 border-t pt-8 pb-5'>
                        <div className='flex flex-col gap-1 col-span-2'>
                            <p className='text-[#C0943E] font-semibold'>Case Studies</p>
                            <p className='font-semibold sa:text-[20px] text-base'>Strategic Transformation at a Fortune 500 Company</p>
                            <div className='flex justify-between w-full'>
                                <p className='font-extralight text-base'>Marcus Weber</p>
                                <p className='font-extralight text-base'>5 mins read.</p>
                            </div>
                        </div>
                        <img className='w-full object-cover sp:h-[110px]' src={PUDD3} alt="" />
                    </div>
                    <div className='sp:grid flex flex-col-reverse grid-cols-3 gap-5 border-t pt-8 pb-5'>
                        <div className='flex flex-col gap-1 col-span-2'>
                            <p className='text-[#C0943E] font-semibold'>Business Strategy</p>
                            <p className='font-semibold sa:text-[20px] text-base'>The Nestlé Playbook: Strategic Lessons of Global Business </p>
                            <div className='flex justify-between w-full'>
                                <p className='font-extralight text-base'>Dominic Straws</p>
                                <p className='font-extralight text-base'>5 mins read.</p>
                            </div>
                        </div>
                        <img className='w-full object-cover sp:h-[110px]' src={PUDD4} alt="" />
      sp:     flex flex-col-reverse          </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedArticles