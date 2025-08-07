import HeroFrame from '../Images/HeroFrame.svg'

const HomeHero = () => {
    return (
        <div className='text-black flex flex-col gap-10'>
            <p className='text-[60px] font-medium text-center max-w-[1200px] leading-[65px] mx-auto'>Unlock <span className='text-[#C0943E] italic'>Global</span> Business <span className='italic font-normal'>Education</span> and Transform your Career</p>
            <p className='text-[28px] font-normal text-center max-w-[800px] leading-10 mx-auto'>Earn an internationally recognized certificate from Switzerland and Nigeria. Flexible, affordable and designed for your success</p>
            <div className='text-[19px] font-normal flex gap-3 justify-center'>
                <button className='py-[10px] px-14 rounded-[15px] shadow-md shadow-[#FFFFFF40] border-2 border-[#FFFFFF80] text-white bg-gradient-to-r from-[#C0943E] to-[#5A451D]'>Apply for a Scholarship</button>
                <button className='py-[10px] px-7 rounded-[15px] shadow-md shadow-[#FFFFFF40] border-2 border-[#FFFFFF80] text-white bg-gradient-to-r from-[#005BC1] to-[#002B5B]'>Explore Programs</button>
            </div>
            <div className="bg-gradient-to-r z-50 from-[#002B5B] via-[#3d5c80] to-[#FFFFFF] p-[6px] rounded-[15px] w-fit mx-auto">
                <img
                    className="w-[900px] rounded-[15px] border-transparent"
                    src={HeroFrame}
                    alt=""
                />
            </div>

        </div>
    )
}

export default HomeHero