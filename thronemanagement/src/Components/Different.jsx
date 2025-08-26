import different1 from '../NewImages/different1.png'
import different2 from '../NewImages/different2.png'
import different3 from '../NewImages/different3.png'

const Different = () => {
    return (
        <div className='xl:px-32 sh:px-16 sc:px-7 py-20 px-4 text-black bg-gradient-to-b from-[#002B5B] to-[#005BC1]'>
            <p className='text-white text-center font-bold sm:text-[35px] text-[28.4px]'>What Makes TMBI Different</p>
            <div className='flex items-center gap-20 mt-14 justify-center'>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-3 rounded-[20px] bg-[#F2F2F7] p-6'>
                        <p className='text-2xl font-semibold'>Learn from Anywhere</p>
                        <p className='font-normal text-lg'>Obtain an international degree without leaving your country</p>
                    </div>
                    <img className='rounded-[20px]' src={different1} alt="" />
                </div>
                <div className='flex flex-col-reverse gap-8'>
                    <div className='flex flex-col gap-3 rounded-[20px] bg-[#F2F2F7] p-6'>
                        <p className='text-2xl font-semibold'>Master Business Skills</p>
                        <p className='font-normal text-lg'>Complete several modules ranging from Business leadership and Managing People</p>
                    </div>
                    <img className='rounded-[20px]' src={different2} alt="" />
                </div>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-3 rounded-[20px] bg-[#F2F2F7] p-6'>
                        <p className='text-2xl font-semibold'>Get Your Degree</p>
                        <p className='font-normal text-lg'>You will receive a degree certificate from TMBI and the partner universities</p>
                    </div>
                    <img className='rounded-[20px]' src={different3} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Different