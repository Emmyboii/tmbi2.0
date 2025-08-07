import chert from '../Images/chert.svg'
import baobab from '../Images/baobab.svg'
import dataville from '../Images/dataville.svg'
import chivita from '../Images/chivita.svg'
import stargroup from '../Images/stargroup.png'
import graduates1 from '../Images/graduates1.svg'
import graduates2 from '../Images/graduates2.svg'
import graduates3 from '../Images/graduates3.svg'
import graduates4 from '../Images/graduates4.svg'
import nextBtn from '../Images/nextBtn.png'
import prevBtn from '../Images/prevBtn.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = (props) => {
    const { onClick } = props

    return (
        <img
            src={prevBtn}
            className='size-[50px] absolute bottom-[-50px] md:left-[47%] md:-translate-x-[47%] left-[40%] -translate-x-[40%] cursor-pointer'
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
            className='size-[50px] absolute md:left-[55%] left-[60%] -translate-x-[60%] md:-translate-x-[55%] cursor-pointer'
            alt=""
            onClick={onClick}
        />
    )
}

const OurGraduate = () => {

    const settings = {
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 1000,
        speed: 1000,
        pauseOnHover: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 510,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }

    return (
        <div className='xl:px-24 sh:pl-16 sh:pr-10 sp:px-6 px-4 pb-10 relative'>
            <p className='text-[#ffffff] mx-auto bg-gradient-to-r from-[#002B5B] via-[#00438E] via-[#004FA7] to-[#005BC1] bg-clip-text text-transparent lf:text-[40px] mm:text-[32px] sa:text-[27px] text-[21px] mm:text-start text-center font-bold'>Hear from Our Graduates</p>
            <Slider {...settings} className='mt-7'>
                <div>
                    <div className='py-5 px-3 w-full bg-white min-h-[300px] my-5 justify-between rounded-[10px] border border-[#79797980] shadow-md shadow-[#00000040] flex flex-col gap-2'>
                        <img className='w-[39px] h-[60px]' src={chert} alt="" />
                        <p className='text-[12px] font-normal'>
                            Throne Management & Business Institute provided me with the strategic business insights I needed to navigate the IT sales landscape. The flexible learning structure made it easy to balance work and study.
                        </p>
                        <img className='w-[124px]' src={stargroup} alt="" />
                        <div className='flex items-center gap-[10px]'>
                            <img className='size-[40px]' src={graduates1} alt="" />
                            <div className='text-[12px] font-medium'>
                                <p>Chukwunyere Emenike</p>
                                <p className='flex gap-1'>Senior sales <span className='xl:flex mf:hidden md:hidden'>IT</span> Consultant</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='py-5 px-3 w-full bg-white min-h-[300px] my-5 justify-between rounded-[10px] border border-[#79797980] shadow-md shadow-[#00000040] flex flex-col gap-2'>
                        <img className='w-[127px] h-[55px]' src={baobab} alt="" />
                        <p className='text-[12px] font-normal'>
                            This program transformed my approach to procurement and supply chain management. The real-world case studies and expert-led courses made a huge impact on my decision-making skills.
                        </p>
                        <img className='w-[124px]' src={stargroup} alt="" />
                        <div className='flex items-center gap-[10px]'>
                            <img className='size-[40px]' src={graduates2} alt="" />
                            <div className='text-[13px]'>
                                <p>Juliet Nwalozie</p>
                                <p>Procurement Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='py-5 px-3 w-full bg-white min-h-[300px] my-5 justify-between rounded-[10px] border border-[#79797980] shadow-md shadow-[#00000040] flex flex-col gap-2'>
                        <img className='w-[121px] h-[47px]' src={dataville} alt="" />
                        <p className='text-[12px] font-normal'>
                            The executive programs at Throne Management gave me a global perspective on project execution. I now lead more efficiently and apply industry best practices with confidence.
                        </p>
                        <img className='w-[124px]' src={stargroup} alt="" />
                        <div className='flex items-center gap-[10px]'>
                            <img className='size-[40px]' src={graduates3} alt="" />
                            <div className='text-[13px]'>
                                <p>Abraham Eze.</p>
                                <p>Project Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='py-5 px-3 w-full bg-white min-h-[300px] my-5 justify-between rounded-[10px] border border-[#79797980] shadow-md shadow-[#00000040] flex flex-col gap-2'>
                        <img className='w-[105px] h-[41px]' src={chivita} alt="" />
                        <p className='text-[12px] font-normal'>
                            Enrolling here was a game-changer. The courses are practical, engaging, and industry-focused—helping me drive better sales performance and leadership growth in my role
                        </p>
                        <img className='w-[124px]' src={stargroup} alt="" />
                        <div className='flex items-center gap-[10px]'>
                            <img className='size-[40px]' src={graduates4} alt="" />
                            <div className='text-[13px]'>
                                <p>Kazeem Ayobami</p>
                                <p>Regional Sales Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='py-5 px-3 w-full bg-white min-h-[300px] my-5 justify-between rounded-[10px] border border-[#79797980] shadow-md shadow-[#00000040] flex flex-col gap-2'>
                        <img className='w-[105px] h-[41px]' src={chivita} alt="" />
                        <p className='text-[12px] font-normal'>
                            Enrolling here was a game-changer. The courses are practical, engaging, and industry-focused—helping me drive better sales performance and leadership growth in my role
                        </p>
                        <img className='w-[124px]' src={stargroup} alt="" />
                        <div className='flex items-center gap-[10px]'>
                            <img className='size-[40px]' src={graduates4} alt="" />
                            <div className='text-[13px]'>
                                <p>Kazeem Ayobami</p>
                                <p>Regional Sales Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='py-5 px-3 w-full bg-white min-h-[300px] my-5 justify-between rounded-[10px] border border-[#79797980] shadow-md shadow-[#00000040] flex flex-col gap-2'>
                        <img className='w-[105px] h-[41px]' src={chivita} alt="" />
                        <p className='text-[12px] font-normal'>
                            Enrolling here was a game-changer. The courses are practical, engaging, and industry-focused—helping me drive better sales performance and leadership growth in my role
                        </p>
                        <img className='w-[124px]' src={stargroup} alt="" />
                        <div className='flex items-center gap-[10px]'>
                            <img className='size-[40px]' src={graduates4} alt="" />
                            <div className='text-[13px]'>
                                <p>Kazeem Ayobami</p>
                                <p>Regional Sales Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default OurGraduate