import chert from '../Images/chert.svg'
import baobab from '../Images/baobab.svg'
import dataville from '../Images/dataville.svg'
import chivita from '../Images/chivita.svg'
import stargroup from '../NewImages/stars.png'
import nextgen2 from '../Images/nextgen2.png'
import oak2 from '../Images/oak2.png'
import graduates1 from '../Images/graduates1.svg'
import graduates2 from '../Images/graduates2.svg'
import graduates3 from '../Images/graduates3.svg'
import graduates4 from '../Images/graduates4.svg'
import graduates5 from '../Images/Img7.JPG'
import graduates6 from '../Images/Img2.JPG'
import nextBtn from '../NewImages/right.png'
import prevBtn from '../NewImages/left.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const OurGraduate = () => {

    const settings = {
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        // autoplay: true,
        speed: 1000,
        pauseOnHover: true,
        centerMode: true,
        centerPadding: "0px",
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
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 510,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    }

    return (
        <div id='testimonials' className='lf:px-32 pt-20 pb-36 relative bg-gradient-to-b from-[#002B5B] to-[#005BC1]'>
            <p className='text-[#ffffff] lf:text-[40px] mm:text-[32px] text-[27px] text-center font-bold'>Hear from Our Graduates</p>
            <Slider {...settings} className='mt-7'>
                <div className='mf:px-6 px-3'>
                    <div className='py-5 px-3 w-full bg-white min-h-[300px] my-5 justify-between rounded-[25px] border border-[#79797980] shadow-md shadow-[#00000040] flex flex-col gap-2'>
                        <img className='w-[39px] h-[60px]' src={chert} alt="" />
                        <p className='text-[15px] font-normal'>
                            Throne Management gave me key insights to excel in IT sales. The flexible learning structure made it easy to balance work and study while gaining practical skills.
                        </p>
                        <img className='w-[124px]' src={stargroup} alt="" />
                        <div className='flex items-center gap-[10px]'>
                            <img className='size-[40px]' src={graduates1} alt="" />
                            <div className='text-[15px]'>
                                <p>Chukwunyere Emenike</p>
                                <p className='flex gap-1'>Senior IT Consultant</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mf:px-6 px-3'>
                    <div className='py-5 px-3 w-full bg-white min-h-[300px] my-5 justify-between rounded-[25px] border border-[#79797980] shadow-md shadow-[#00000040] flex flex-col gap-2'>
                        <img className='w-[127px] h-[55px]' src={baobab} alt="" />
                        <p className='text-[15px] font-normal'>
                            This program transformed how I approach procurement and supply chain management. Case studies and expert-led courses improved my decision-making and efficiency.
                        </p>
                        <img className='w-[124px]' src={stargroup} alt="" />
                        <div className='flex items-center gap-[10px]'>
                            <img className='size-[40px]' src={graduates2} alt="" />
                            <div className='text-[15px]'>
                                <p>Juliet Nwalozie</p>
                                <p>Procurement Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mf:px-6 px-3'>
                    <div className='py-5 px-3 w-full bg-white min-h-[300px] my-5 justify-between rounded-[25px] border border-[#79797980] shadow-md shadow-[#00000040] flex flex-col gap-2'>
                        <img className='w-[121px] h-[47px]' src={dataville} alt="" />
                        <p className='text-[15px] font-normal'>
                            The executive programs offered a global perspective on project execution. I now lead more efficiently and confidently apply best practices in every project.
                        </p>
                        <img className='w-[124px]' src={stargroup} alt="" />
                        <div className='flex items-center gap-[10px]'>
                            <img className='size-[40px]' src={graduates3} alt="" />
                            <div className='text-[15px]'>
                                <p>Abraham Eze.</p>
                                <p>Project Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mf:px-6 px-3'>
                    <div className='py-5 px-3 w-full bg-white min-h-[300px] my-5 justify-between rounded-[25px] border border-[#79797980] shadow-md shadow-[#00000040] flex flex-col gap-2'>
                        <img className='w-[105px] h-[41px]' src={chivita} alt="" />
                        <p className='text-[15px] font-normal'>
                            Enrolling here was a game-changer. The courses are practical and engaging, helping me improve sales performance and grow as a leader.
                        </p>
                        <img className='w-[124px]' src={stargroup} alt="" />
                        <div className='flex items-center gap-[10px]'>
                            <img className='size-[40px]' src={graduates4} alt="" />
                            <div className='text-[15px]'>
                                <p>Kazeem Ayobami</p>
                                <p>Regional Sales Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mf:px-6 px-3'>
                    <div className='py-5 px-3 w-full bg-white min-h-[300px] my-5 justify-between rounded-[25px] border border-[#79797980] shadow-md shadow-[#00000040] flex flex-col gap-2'>
                        <img className='w-[105px] h-[41px]' src={oak2} alt="" />
                        <p className='text-[15px] font-normal'>
                            Throne Management’s program exceeded my expectations. Hands-on projects and interactive sessions sharpened my leadership skills and improved team performance.
                        </p>
                        <img className='w-[124px]' src={stargroup} alt="" />
                        <div className='flex items-center gap-[10px]'>
                            <img className='size-[40px] rounded-full' src={graduates6} alt="" />
                            <div className='text-[15px]'>
                                <p>Ngozi Okafor</p>
                                <p>Operations Lead</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mf:px-6 px-3'>
                    <div className='py-5 px-3 w-full bg-white min-h-[300px] my-5 justify-between rounded-[25px] border border-[#79797980] shadow-md shadow-[#00000040] flex flex-col gap-2'>
                        <img className='w-[105px] h-[41px]' src={nextgen2} alt="" />
                        <p className='text-[15px] font-normal'>
                            I gained real-world insights I could immediately apply. The mentorship and course structure gave me confidence to tackle challenges and drive results effectively.
                        </p>
                        <img className='w-[124px]' src={stargroup} alt="" />
                        <div className='flex items-center gap-[10px]'>
                            <img className='size-[40px] rounded-full' src={graduates5} alt="" />
                            <div className='text-[15px]'>
                                <p>Daniel Adebayo</p>
                                <p>Lead Planner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>

        </div>
    )
}

export default OurGraduate