import learning1 from '../NewImages/learning1.png'
import learning2 from '../NewImages/learning2.png'
import learning3 from '../NewImages/learning3.png'
import learning4 from '../NewImages/learning4.png'
import learning5 from '../NewImages/learning5.png'

const UniqueApproach = () => {
    return (
        <div className='xl:px-32 sh:p-16 p-5 xl:py-20'>
            <p className='sh:leading-[65px] text-center xl:pl-24 sh:pl-16 sh:pr-10 sc:px-7 px-4 text-black sh:text-[47px] sp:text-[35px] text-[29px] font-semibold'>Our Unique Approach to Business Learning</p>
            {/* <p className='bg-gradient-to-r sh:leading-[65px] text-center xl:pl-24 sh:pl-16 sh:pr-10 sc:px-7 px-4 mc:max-w-[68%] from-[#002B5B] to-[#005BC1] bg-clip-text text-transparent sh:text-[47px] sp:text-[35px] text-[29px] font-semibold'>Our Unique Approach to Business Learning</p> */}
            <div className='pt-14 grid grid-cols-3 gap-6'>
                <div className='rounded-3xl bg-[#F2F2F7]'>
                    <img
                        className='rounded-t-3xl h-[260px] w-full object-cover'
                        src={learning1}
                        alt=""
                    />
                    <div className='flex flex-col gap-4 px-5 py-10'>
                        <p className=' text-[#0D0D0D] text-2xl font-semibold'>Swiss-Standard, Globally Recognized</p>
                        <p className='text-lg font-normal leading-tight'>
                            Our programs are modeled on the academic rigor of top institutions  Every course is structured to meet international standards
                        </p>
                    </div>
                </div>
                <div className='col-span-2 flex items-center bg-[#F2F2F7] justify-center rounded-3xl'>
                    <img
                        className='rounded-s-3xl h-[480px] object-cover'
                        src={learning2}
                        alt=""
                    />
                    <div className='flex flex-col gap-4 px-7 rounded-b-3xl py-10'>
                        <p className=' text-[#0D0D0D] text-2xl font-semibold'>TMBI Advantage: Fast-Track to Impact</p>
                        <p className='text-lg font-normal leading-tight'>
                            Complete programs in weeks, not years. Get certified, build your portfolio, and start applying new skills faster than traditional degree tracks allow.
                        </p>
                    </div>
                </div>
                <div className='rounded-3xl bg-[#F2F2F7]'>
                    <img
                        className='rounded-t-3xl h-[260px] w-full object-cover'
                        src={learning3}
                        alt=""
                    />
                    <div className='flex flex-col gap-4 px-5 py-10'>
                        <p className=' text-[#0D0D0D] text-2xl font-semibold'>Accessible Pricing</p>
                        <p className='text-lg font-normal leading-tight'>
                            We believe in premium education for all.  we’ve made it possible for ambitious learners worldwide to invest in their future without student debt.
                        </p>
                    </div>
                </div>
                <div className='rounded-3xl bg-[#F2F2F7]'>
                    <img
                        className='rounded-t-3xl h-[260px] w-full object-cover'
                        src={learning4}
                        alt=""
                    />
                    <div className='flex flex-col gap-4 px-5 py-10'>
                        <p className=' text-[#0D0D0D] text-2xl font-semibold'>Mini MBA for the Modern Leader</p>
                        <p className='text-lg font-normal leading-tight'>
                            A condensed, practical, and high-impact program that prepares you for leadership, innovation, and entrepreneurship without the six-figure tuition.
                        </p>
                    </div>
                </div>
                <div className='rounded-3xl bg-[#F2F2F7]'>
                    <img
                        className='rounded-t-3xl h-[260px] w-full object-cover'
                        src={learning5}
                        alt=""
                    />
                    <div className='flex flex-col gap-4 px-5 py-10'>
                        <p className=' text-[#0D0D0D] text-2xl font-semibold'>Education Without Borders</p>
                        <p className='text-lg font-normal leading-tight'>
                            Our online-first model means you can study from anywhere, at your pace, and still receive a world-class business education recognized across borders.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UniqueApproach