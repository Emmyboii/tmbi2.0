import different1 from '../Images/different1.png'
import different2 from '../Images/different2.png'
import different3 from '../Images/different3.png'

const Different = () => {
    return (
        <div className='xl:px-24 sh:px-16 sc:px-7 px-4'>
            <p className='bg-gradient-to-r from-[#002B5B] text-center to-[#005BC1] text-transparent bg-clip-text font-bold sm:text-[35px] text-[28.4px]'>What makes TMBI different...</p>
            <div className='flex md:flex-row flex-col items-center mt-6'>
                <div className='md:w-[500px] w-full h-[490px] text-center bg-[#C0943E40] mf:px-5 px-2 py-16 relative'>
                    <p className='mf:text-3xl md:text-[22px] sk:text-3xl text-[22px] font-semibold'>Learn from Anywhere</p>
                    <p className='mf:text-base md:text-sm sk:text-base text-sm mt-3 font-normal text-center'>Obtain an international degree without leaving your country.</p>
                    <img src={different1} className='absolute bottom-0 w-[220px] left-1/2 -translate-x-1/2' alt="" />
                </div>
                <div className='md:w-[500px] w-full h-[490px] text-center bg-[#002B5B] text-white mf:px-5 px-2 py-16 relative'>
                    <p className='mf:text-3xl md:text-[22px] sk:text-3xl text-[22px] font-semibold'>Master Business Skills</p>
                    <p className='mf:text-base md:text-sm sk:text-base text-sm mt-3 font-normal text-center'>Complete several modules ranging from Business Leadership and Managing People.</p>
                    <img src={different2} className='absolute bottom-0 w-[220px] left-1/2 -translate-x-1/2' alt="" />
                </div>
                <div className='md:w-[500px] w-full h-[490px] text-center bg-[#C0943E40] mf:px-5 px-2 py-16 relative'>
                    <p className='mf:text-3xl md:text-[22px] sk:text-3xl text-[22px] font-semibold'>Get your Degree</p>
                    <p className='mf:text-base md:text-sm sk:text-base text-sm mt-3 font-normal text-center'>You will recieve a degree certificate from TMBI and the partner universities</p>
                    <img src={different3} className='absolute bottom-0 w-[220px] left-1/2 -translate-x-1/2' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Different