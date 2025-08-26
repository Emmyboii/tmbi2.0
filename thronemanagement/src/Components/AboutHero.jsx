import hero from '../NewImages/about.png'

const AboutHero = () => {
    return (
        <div
            className="relative w-full py-20 flex items-center justify-center text-center"
            style={{
                backgroundImage: `url(${hero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="text-white max-w-[900px] px-3">
                <p className="mh:text-[60px] sh:text-[50px] sp:text-[35px] text-[26px] sh:leading-[73px] font-semibold">
                    Shaping Global Business Leaders Through Accessible, Practical Education
                </p>
                <p className="text-[20px] font-normal mt-5">
                    TMBI is a Switzerland-registered institution delivering  <br className="sh:block hidden" />
                    executive business education to professionals worldwide
                </p>
                <a href="#apply">
                    <button className="py-3 px-[30px] mt-10 rounded-full bg-[#C0943E] text-[#ffffff] text-[18px] font-medium">
                        Enroll Now
                    </button>
                </a>
            </div>
        </div>
    )
}

export default AboutHero