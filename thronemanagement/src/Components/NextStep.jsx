import CAR2 from '../Images/CAR.png';
import SWL2 from '../Images/Switzerland.png';
import chad from '../Images/chad.png';
import nuc from '../Images/nuc3.png';

import nextBtn from '../Images/nextBtn.png'
import prevBtn from '../Images/prevBtn.png'
import nextStep from '../NewImages/nextStep.webp'
import SWL from '../Images/SWL.jpg';
import MEC from '../Images/MEC.jpg';
import CAR from '../Images/CAR.jpg';
import NUC from '../Images/NUC2.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const CustomPrevArrow = (props) => {
    const { onClick } = props

    return (
        <img
            src={prevBtn}
            className='size-[50px] absolute bottom-[-80px] md:left-[47%] 2xl:left-1/2 2xl:-translate-x-1/2 md:-translate-x-[47%] left-[40%] -translate-x-[40%] cursor-pointer'
            alt=""
            onClick={onClick}
        />
    )
}

const CustomNextArrow = (props) => {
    const { onClick } = props

    return (
        <img
            src={nextBtn}
            className='size-[50px] absolute md:left-[55%] bottom-[-80px] left-[60%] 2xl:right-1/2 2xl:-translate-x-1/2 -translate-x-[60%] md:-translate-x-[55%] cursor-pointer'
            alt=""
            onClick={onClick}
        />
    )
}

const NextStep = () => {

    const location = useLocation()

    const settings = {
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        autoplay: true,
        speed: 1000,
        pauseOnHover: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    }

    return (
        <div className="xl:px-32 md:p-16 p-5  xl:py-20 flex flex-col gap-60 pb-9" >
            <div id='accredications' className='z-20 flex flex-col gap-8' >
                {location.pathname === '/' ? (
                    <p className='text-black lf:text-[40px] mt-12 sp:text-[32px] text-2xl text-center font-bold'>International Recognition</p>
                ) : (
                    <p className='text-black lf:text-[40px] mt-12 md:text-[32px] text-2xl text-center font-bold'>Commitment to Quality & Accreditation</p>
                )}
                {location.pathname === '/about' && (
                    <p className='text-black md:text-xl sm:text-lg font-normal text-center 3xl:text-2xl'>TMBI follows international academic standards and is in partnership with globally recognized <br className='mp:block hidden' /> accrediting bodies. Programs include verifiable digital certificates.</p>
                )}
                <div className='flex md:flex-row flex-col justify-between w-full gap-20 mt-7 items-center'>
                    <Slider {...settings} className='flex flex-col w-full gap-4'>
                        <div className='mf:px-6 px-3'>
                            <div className='flex mh:flex-row flex-col items-center gap-5 z-10 justify-center'>
                                <div className={'cursor-pointer flex flex-col gap-5 sd:w-[500px] bg-[#F5F5F5] rounded-3xl mk:px-8 px-4 mk:py-24 py-10'}>
                                    <p className='flex gap-1 items-center mf:text-[25px] sd:text-[21px] text-[17px] font-medium'>
                                        Switzerland
                                        <img src={SWL2} className='w-9' alt="" />
                                    </p>
                                    <p className='font-normal mf:text-lg sd:text-[16px] text-[14px]'>The State Secretariat for Education, Research and Innovation SERI within the Federal Department of Economic Affairs, Education and Research EAER is the federal government's specialised agency for national and international matters concerning education, research and innovation policy.</p>
                                </div>
                                <img className='mf:w-[450px] mh:w-[350px] w-[450px] relative z-10 md:hidden block border-[#002B5B33] shadow-m shadow-[#002B5BA6] border-2' src={SWL} alt="" />
                            </div>
                        </div>
                        <div className='mf:px-6 px-3'>
                            <div className='flex mh:flex-row flex-col items-center gap-5 z-10 justify-center'>
                                <div className={'cursor-pointer flex flex-col gap-5 sd:w-[500px] bg-[#F5F5F5] rounded-3xl mk:px-8 px-4 mk:py-24 py-10'}>
                                    <p className='flex gap-1 items-center mf:text-[25px] sd:text-[21px] text-[17px] font-medium'>
                                        The Republic Of Chad
                                        <img src={chad} className='w-9' alt="" />
                                    </p>
                                    <p className='font-normal mf:text-lg sd:text-[16px] text-[14px]'>The PIET sets out the Government of Chad's policy on education. It covers all levels of education (from pre- school to higher education).</p>
                                </div>
                                <img className='mf:w-[450px] mh:w-[350px] w-[450px] relative z-10 md:hidden block' src={MEC} alt="" />
                            </div>
                        </div>
                        <div className='mf:px-6 px-3'>
                            <div className='flex mh:flex-row flex-col items-center gap-5 z-10 justify-center'>
                                <div className={'cursor-pointer flex flex-col gap-5 sd:w-[500px] bg-[#F5F5F5] rounded-3xl mk:px-8 px-4 mk:py-24 py-10'}>
                                    <p className='flex gap-2 items-center mf:text-[25px] sd:text-[21px] text-[17px] font-medium'>
                                        Central African Republic
                                        <img src={CAR2} className='w-6' alt="" />
                                    </p>
                                    <p className='font-normal mf:text-lg sd:text-[16px] text-[14px]'>The Ministry of Higher Education (Ministère de l'Enseignement Supérieur) is a government ministry responsible for overseeing and regulating higher education institutions in the country, as well as developing policies and strategies to improve the quality of education.</p>
                                </div>
                                <img className='mf:w-[450px] mh:w-[350px] w-[450px] relative z-10 md:hidden block' src={CAR} alt="" />
                            </div>
                        </div>
                        <div className='mf:px-6 px-3'>
                            <div className='flex mh:flex-row flex-col items-center gap-5 z-10 justify-center'>
                                <div className={'cursor-pointer flex flex-col gap-5 sd:w-[500px] bg-[#F5F5F5] rounded-3xl mk:px-8 px-4 mk:py-24 py-10'}>
                                    <p className='flex gap-2 items-center mf:text-[25px] sd:text-[21px] text-[17px] font-medium'>
                                        National Universities Commission
                                        <img src={nuc} className='w-6' alt="" />
                                    </p>
                                    <p className='font-normal mf:text-lg sd:text-[16px] text-[14px]'>The National Universities Commission (NUC) is Nigeria's regulatory body for higher education. It ensures that universities maintain high academic standards, accredits programs, supervises curriculum development, and promotes research and innovation. NUC also advises the government on policies to strengthen tertiary education and aligns universities with national development goals.</p>
                                </div>
                                <img className='mf:w-[450px] mh:w-[350px] w-[450px] relative z-10 md:hidden block' src={NUC} alt="" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div >
            <div className='sa:min-h-[530px] sk:min-h-[450px] min-h-[320px] relative flex items-center bg-gradient-to-b from-[#002B5B] to-[#005BC1] rounded-[30px] shadow-sm shadow-[#4F00EE1A]'>

                <img
                    className='w-[500px] mx-auto absolute -top-24 left-1/2 -translate-x-1/2'
                    src={nextStep}
                    alt=""
                />

                <div className="relative text-white flex flex-col mx-auto items-center z-50 justify-center text-center h-full mc:px-32 sa:px-7 px-1 sa:mt-52 sk:mt-32 mt-28">
                    <p className="mh:text-[38px] 2xl:text-5xl sd:text-[28px] leading-tight sk:text-[22px] text-[16px] font-semibold">
                        Take the Next Step Towards your Future
                    </p>
                    <p className="mh:text-[18px] leading-snug sa:mt-7 mt-3 sk:text-[14px] text-xs font-medium">
                        Unlock new opportunities with a globally recognized program. Gain the skills, <br className='lg:block hidden' /> flexibility, and support you need to succeed.
                    </p>
                    <div className="flex items-center sd:gap-5 gap-2 mt-9">
                        <HashLink smooth to="/#program">
                            <button className="sa:py-3 py-2 sa:px-[30px] px-7 rounded-full bg-[#C0943E] text-[#ffffff] text-[16px] font-medium">
                                Enroll Now
                            </button>
                        </HashLink>
                        <a href="http://surl.li/mumpei" rel='noreferrer' target='_blank'>
                            <button className="sm:p-3 p-2 sm:text-base text-sm border-2 border-[#C0943E] rounded-full text-[#C0943E] font-semibold">
                                Speak to an Advisor
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NextStep