import img from '../Images/learningTogether.png'

const UniqueApproach = () => {
    return (
        <div>
            <p className='bg-gradient-to-r sh:leading-[65px] md:text-start text-center xl:pl-24 sh:pl-16 sh:pr-10 sc:px-7 px-4 mc:max-w-[68%] from-[#002B5B] to-[#005BC1] bg-clip-text text-transparent sh:text-[47px] sp:text-[35px] text-[29px] font-semibold'>Our Unique Approach to Business Learning</p>
            <div className='md:grid grid-cols-3 items-center xl:pl-24 sh:pl-16 sh:pr-10 px-7'>
                <div className='col-span-2 md:w-[85%]'>
                    <div className='mt-14 grid sp:grid-cols-2 gap-x-2 gap-y-10'>
                        <div className='flex flex-col gap-1'>
                            <p className='underline font-medium sp:texts text-[20px]'>Swiss-Standard, Globally Recognized</p>
                            <p className='text-[15px] font-normal'>Our programs are modeled on the academic rigor of top institutions— Every course is structured to meet international standards</p>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='underline font-medium sp:texts text-[20px]'>Mini MBA for the Modern Leader</p>
                            <p className='text-[15px] font-normal'>A condensed, practical, and high-impact program that prepares you for leadership, innovation, and entrepreneurship—without the six-figure tuition.</p>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='underline font-medium sp:texts text-[20px]'>Education Without Borders</p>
                            <p className='text-[15px] font-normal'>Our online-first model means you can study from anywhere, at your pace, and still receive a world-class business education recognized across borders.</p>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='underline font-medium sp:texts text-[20px]'>Accessible Pricing</p>
                            <p className='text-[15px] font-normal'>We believe in premium education for all.  we’ve made it possible for ambitious learners worldwide to invest in their future—without student debt.</p>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='underline font-medium sp:texts text-[20px]'>TMBI Advantage: Fast-Track to Impact</p>
                            <p className='text-[15px] font-normal'>Complete programs in weeks, not years. Get certified, build your portfolio, and start applying new skills faster than traditional degree tracks allow.</p>
                        </div>
                    </div>
                </div>
                <img className='w-[320px] mx-auto mt-32' src={img} alt="" />
            </div>
        </div>
    )
}

export default UniqueApproach