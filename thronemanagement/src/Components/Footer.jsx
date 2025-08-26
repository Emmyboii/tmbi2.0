import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='flex flex-col gap-16 bg-[#002B5B] text-white xl:px-32 xl:py-20 sh:p-16 p-5 w-full'>
            <div className="grid mp:grid-cols-3 sa:grid-cols-2  mp:gap-0 gap-10 w-full">
                <div className="flex flex-col mp:items-start items-center gap-6 w-full">
                    <p className="uppercase text-[20px] text-[#C3F9FF] font-normal">Quick Links</p>
                    <Link to='' className="flex items-center gap-2">
                        <p className="text-sm">PROGRAMS</p>
                    </Link>
                    <Link to='' className="flex items-center gap-2">
                        <p className="text-sm">ADMISSIONS</p>
                    </Link>
                    <Link to='' className="flex items-center gap-2">
                        <p className="text-sm">WHY CHOOSE US</p>
                    </Link>
                    <Link to='' className="flex items-center gap-2">
                        <p className="text-sm">TESTIMONIALS</p>
                    </Link>
                    <Link to='' className="flex items-center gap-2">
                        <p className="text-sm">CONTACT US</p>
                    </Link>
                </div>
                <div className="flex flex-col mp:items-start items-center gap-6 w-full">
                    <p className="uppercase text-[20px] text-[#C3F9FF] font-normal">resources</p>
                    <Link to='' className="flex items-center gap-2">
                        <p className="text-sm">COURSES</p>
                    </Link>
                    <Link to='' className="flex items-center gap-2">
                        <p className="text-sm">CERTIFICATIONS</p>
                    </Link>
                    <Link to='' className="flex items-center gap-2">
                        <p className="text-sm">DEGREES</p>
                    </Link>
                    <Link to='' className="flex items-center gap-2">
                        <p className="text-sm">SCHOLARSHIPS</p>
                    </Link>
                    <Link to='' className="flex items-center gap-2">
                        <p className="text-sm">ACCREDITATIONS</p>
                    </Link>
                </div>
                <div className="flex flex-col mp:items-start items-center gap-6 w-full mp:col-span-1 col-span-2">
                    <p className="uppercase text-[20px] text-[#C3F9FF] font-normal">contact us</p>
                    <div className="flex items-start gap-2">
                        <p className="text-[13px] uppercase">SWITZERLAND OFFICE: Via Vigizzi 98, <br /> Unterlangenegg 3614, Switzerland</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <p className="text-[13px] 2xl:text-[15px]">EMAIL: <Link target="_blank" to='mailto:info@thronebusinessinstituteswitzerland.com' className="underline">info@thronebusinessinstituteswitzerland.com</Link></p>
                    </div>
                    <div className="flex items-start gap-2">
                        <p className="text-[13px] 2xl:text-[15px]">PHONE: <Link to='tel: +2349134942707' target="_blank" className="underline">+234 913 494 2707</Link></p>
                    </div>
                    <div className='flex items-center md:justify-center text-[25px] gap-4'>
                        <a href="https://ng.linkedin.com/company/tmbis-ng-trs" rel='noreferrer' target='_blank' className='underline'>
                            <FaLinkedin />
                        </a>
                        <a href="http://surl.li/mumpei" rel='noreferrer' target='_blank' className='underline'>
                            <FaWhatsapp />
                        </a>
                        <a href="https://www.instagram.com/thronemanagementand_business/" rel='noreferrer' target='_blank' className='underline'>
                            <FaInstagram />
                        </a>
                        <a href="https://web.facebook.com/thronemanagement" rel='noreferrer' target='_blank' className='underline'>
                            <FaFacebook />
                        </a>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex gap-3 mt-4 mx-auto text-center items-center justify-center">
                    <FaRegCopyright />
                    <p className="sp:text-base text-xs font-normal">TBMI</p>
                    <p className="sp:text-base text-xs pr-3 ">
                        copyright 2025. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer