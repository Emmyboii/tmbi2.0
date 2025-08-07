import img from '../Images/WhoWeAre.png'

const WhoWeAre = () => {
    return (
        <div>
            <p className='bg-gradient-to-r md:text-start text-center xl:pl-24 sh:pl-16 sc:px-7 mb-5 px-4 from-[#002B5B] to-[#005BC1] bg-clip-text text-transparent sh:text-[47px] sp:text-[35px] text-[29px] font-semibold'>Who we are</p>
            <div className='flex md:flex-row flex-col items-center gap-5 xl:pl-24 sh:pl-16 sh:pr-10 px-7'>
                <div className='flex flex-col gap-10 w-full'>
                    <p>
                        <span className='font-semibold'>Throne Management & Business Institute (TMBI) </span> 
                        is a forward-thinking business school registered in Switzerland, built to make quality education available to anyone with the ambition to grow.
                        We specialize in flexible, affordable, and globally relevant business programs—from Associate Bachelor’s Degrees to Executive MBAs designed to prepare students for real-world leadership and career success.
                    </p>
                    <p>At TMBI, we believe that education should be a launchpad, not a luxury. That’s why our curriculum is practical, our pricing is accessible, and our mission is simple:to democratize business education for learners around the world.
                        Whether you're entering the workforce, scaling your business, or transitioning into a leadership role, TMBI equips you with the knowledge, mindset, and credentials to move forward confidently.</p>
                </div>
                <div className='w-full'>
                    <img className='w-[320px] mx-auto' src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre