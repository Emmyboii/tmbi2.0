import img from '../NewImages/about2.webp'

const WhoWeAre = () => {
    return (
        <div className='bg-[#F5F5F5] py-20'>
            <p className='md:text-start text-center xl:pl-32 sh:pl-10 mb-5 px-5 text-black sh:text-[47px] sp:text-[35px] text-[29px] font-semibold'>Who we are</p>
            <div className='flex md:flex-row flex-col items-center gap-5 xl:pl-32 sh:pl-10 px-5'>
                <div className='flex flex-col gap-10 w-full text-[17px]'>
                    <p>
                        <span className='font-semibold text-xl'>Throne Management & Business Institute (TMBI) </span> <br /> 
                        is a forward-thinking business school registered in Switzerland, built to make quality education available to anyone with the ambition to grow. <br />
                        We specialize in flexible, affordable, and globally relevant business programs from Associate Bachelor’s Degrees to Executive MBAs designed to prepare students for real-world leadership and career success.
                    </p>
                    <p>At TMBI, we believe that education should be a launchpad, not a luxury. That’s why our curriculum is practical, our pricing is accessible, and our mission is simple:to democratize business education for learners around the world.
                        Whether you're entering the workforce, scaling your business, or transitioning into a leadership role, TMBI equips you with the knowledge, mindset, and credentials to move forward confidently.</p>
                </div>
                <div className='w-full'>
                    <img className='w-[520px] mx-auto' src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre