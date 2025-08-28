import mission from '../Images/mission.png'
import vision from '../Images/vision.png'
import promise from '../Images/promise.png'

const MissonVison = () => {
    return (
        <div className='xl:px-24 sm:py-20 py-10 sh:px-16 sc:px-7 px-4 flex mh:flex-row flex-col items-center gap-12 mt-10'>
            <div className='bg-[#F2F2F7] rounded-[20px] h-[200px] flex flex-col justify-between p-5 mh:w-[90%] w-full'>
                <img className='mc:size-[40px] size-[30px]' src={mission} alt="" />
                <p className='bg-gradient-to-r from-[#002B5B] to-[#005BC1] text-transparent bg-clip-text font-semibold mc:text-[29px] md:text-[23px] text-lg'>Our Mission</p>
                <p className='mt-2 xl:text-lg mc:text-base text-sm'>To democratize high-quality business education for all.</p>
            </div>
            <div className='bg-[#F2F2F7] rounded-[20px] h-[200px] flex flex-col justify-between p-5 mh:w-full w-full'>
                <img className='mc:size-[40px] size-[30px]' src={vision} alt="" />
                <p className='bg-gradient-to-r from-[#002B5B] to-[#005BC1] text-transparent bg-clip-text font-semibold mc:text-[29px] md:text-[23px] text-lg'>Our Vision</p>
                <p className='mt-2 xl:text-lg mc:text-base text-sm'>To be the global platform for accessible business leadership training.</p>
            </div>
            <div className='bg-[#F2F2F7] rounded-[20px] h-[200px] flex flex-col justify-between p-5 mh:w-[90%] w-full'>
                <img className='mc:size-[40px] size-[30px]' src={promise} alt="" />
                <p className='bg-gradient-to-r from-[#002B5B] to-[#005BC1] text-transparent bg-clip-text font-semibold mc:text-[29px] md:text-[23px] text-lg'>Our Promise</p>
                <p className='mt-2 xl:text-lg mc:text-base text-sm'>Flexible learning, Affordable and Career-focused.</p>
            </div>
        </div>
    )
}

export default MissonVison