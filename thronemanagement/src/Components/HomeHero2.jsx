import hero from '../NewImages/homeHero.png'
import target1 from '../NewImages/target1.png'
import { HashLink } from 'react-router-hash-link';

const HomeHero2 = () => {
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
                <p className="py-3 px-[30px] rounded-full mx-auto w-[270px] flex items-center justify-center gap-3 border-[3px] border-white bg-transparent text-[#ffffff] text-[18px] font-medium">
                    <img src={target1} alt="" />
                    Welcome to TMBI
                </p>
                <p className="mh:text-[60px] sh:text-[50px] mt-12 sp:text-[35px] text-[26px] sh:leading-[83px] font-semibold">
                    <span className='text-[#C0943E]'>Business Education</span> for Ambitious Professionals Worldwide
                </p>
                <p className="text-[20px] font-normal mt-5">
                    Join the elite ranks of global business leaders through our <br className="sh:block hidden" />
                    world-class programs
                </p>
                <HashLink smooth to="/#program">
                    <button className="py-3 px-[30px] mt-10 rounded-full bg-[#C0943E] text-[#ffffff] text-[18px] font-medium">
                        Enroll Now
                    </button>
                </HashLink>
            </div>
        </div>
    )
}

export default HomeHero2
