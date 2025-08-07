import mission from '../Images/mission.png'
import vision from '../Images/vision.png'
import promise from '../Images/promise.png'

const MissonVison = () => {
    return (
        <div className='xl:px-24 sh:px-16 sc:px-7 px-4 flex mh:flex-row flex-col items-center gap-3 mt-10'>
            <div className='border border-[#CCCCCC] p-3 mh:w-[90%] w-full'>
                <div className='flex items-center gap-2'>
                    <img className='mc:size-[40px] size-[30px]' src={mission} alt="" />
                    <p className='bg-gradient-to-r from-[#002B5B] to-[#005BC1] text-transparent bg-clip-text font-semibold mc:text-[29px] md:text-[23px] text-lg'>Our Mission</p>
                </div>
                <p className='mt-2 xl:text-lg mc:text-base text-sm'>To democratize high-quality business education for all.</p>
            </div>
            <div className='border border-[#CCCCCC] p-3 mh:w-full w-full'>
                <div className='flex items-center gap-2'>
                    <img className='mc:size-[40px] size-[30px]' src={vision} alt="" />
                    <p className='bg-gradient-to-r from-[#002B5B] to-[#005BC1] text-transparent bg-clip-text font-semibold mc:text-[29px] md:text-[23px] text-lg'>Our Vision</p>
                </div>
                <p className='mt-2 xl:text-lg mc:text-base text-sm'>To be the global platform for accessible business leadership training.</p>
            </div>
            <div className='border border-[#CCCCCC] p-3 mh:w-[90%] w-full'>
                <div className='flex items-center gap-2'>
                    <img className='mc:size-[40px] size-[30px]' src={promise} alt="" />
                    <p className='bg-gradient-to-r from-[#002B5B] to-[#005BC1] text-transparent bg-clip-text font-semibold mc:text-[29px] md:text-[23px] text-lg'>Our Promise</p>
                </div>
                <p className='mt-2 xl:text-lg mc:text-base text-sm'>Flexible learning, Affordable and Career-focused.</p>
            </div>
        </div>
    )
}

export default MissonVison