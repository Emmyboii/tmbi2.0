import hero from '../Images/aboutHero.webp'

const AboutHero = () => {
    return (
        <div
            className="relative w-full"
            style={{
                backgroundImage: `url(${hero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div
                className="absolute inset-0 w-[63%]"
                style={{
                    background: 'linear-gradient(to right, #005BC1, #005BC199)',
                    WebkitMaskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
                    maskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
                }}
            ></div>

            <div className="relative text-white xl:max-w-[62%] mm:max-w-[70%] xl:ml-20 sh:ml-10 sh:px-0 sr:px-3 px-1 py-20">
                <p className="mh:text-[60px] sh:text-[50px] sp:text-[35px] text-[26px] sh:leading-[73px] font-semibold">
                    Shaping Global Business Leaders Through Accessible, Practical Education
                </p>
                <p className="text-[20px] font-normal mt-5">
                    TMBI is a Switzerland-registered institution delivering  <br className="sh:block hidden" />
                    executive business education to professionals worldwide
                </p>
                <button className="py-3 px-[30px] sh:mt-20 mt-10 rounded-full bg-white text-[#005BC1] text-[18px] font-medium">
                    Enroll Now
                </button>
            </div>
        </div>
    )
}

export default AboutHero