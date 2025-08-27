import different1 from '../NewImages/different1.png'
import different2 from '../NewImages/different2.png'
import different3 from '../NewImages/different3.png'

const Different = () => {
    return (
        <div className='xl:px-32 md:p-16 p-5 py-10 xl:py-20 text-black bg-gradient-to-b from-[#002B5B] to-[#005BC1]'>
            <p className='text-white text-center font-bold sm:text-[35px] sd:text-[28.4px] text-2xl'>What Makes TMBI Different</p>
            <div className='flex sm:flex-row flex-col items-center mf:gap-20 sm:gap-10 gap-8 mt-14 justify-center'>
                <div className='flex flex-col mf:gap-8 gap-4 w-full'>
                    <div className='flex flex-col gap-3 rounded-[20px] bg-[#F2F2F7] sm:p-6 p-4'>
                        <p className='mf:text-2xl text-xl font-semibold'>Learn from Anywhere</p>
                        <p className='font-normal mf:text-lg text-base'>Obtain an international degree without leaving your country</p>
                    </div>
                    <img className='rounded-[20px] h-[356px] mf:w-auto w-full sm:h-auto object-cover' src={different1} alt="" />
                </div>
                <div className='flex sm:flex-col-reverse flex-col w-full mf:gap-8 gap-4'>
                    <div className='flex flex-col gap-3 rounded-[20px] bg-[#F2F2F7] sm:p-6 p-4'>
                        <p className='mf:text-2xl text-xl font-semibold'>Master Business Skills</p>
                        <p className='font-normal mf:text-lg text-base'>Complete several modules ranging from Business leadership and Managing People</p>
                    </div>
                    <img className='rounded-[20px] h-[356px] mf:w-auto w-full sm:h-auto object-cover' src={different2} alt="" />
                </div>
                <div className='flex flex-col mf:gap-8 gap-4 w-full'>
                    <div className='flex flex-col gap-3 rounded-[20px] bg-[#F2F2F7] sm:p-6 p-4'>
                        <p className='mf:text-2xl text-xl font-semibold'>Get Your Degree</p>
                        <p className='font-normal mf:text-lg text-base'>You will receive a degree certificate from TMBI and the partner universities</p>
                    </div>
                    <img className='rounded-[20px] h-[356px] mf:w-auto w-full sm:h-auto object-cover' src={different3} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Different