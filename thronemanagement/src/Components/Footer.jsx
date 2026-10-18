import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import { SOCIAL_LINKS, CONTACT } from "../config/site";
import Container from "./Container";

const Footer = () => {
    return (
        <div className='bg-[#002B5B] text-white w-full'>
            <Container className='flex flex-col gap-16 xl:px-32 md:p-16 p-5 py-10 xl:py-20'>
            <div className="grid mp:grid-cols-3 sa:grid-cols-2  mp:gap-0 gap-10 w-full">
                <div className="flex flex-col items-start gap-6 w-full">
                    <p className="uppercase sm:text-[20px] text-[17px] text-[#C3F9FF] font-normal">Quick Links</p>
                    <HashLink to='/#program' className="text-start">
                        <p className="text-sm">Programs</p>
                    </HashLink>
                    <HashLink to='' className="text-start">
                        <p className="text-sm">Admissions</p>
                    </HashLink>
                    <HashLink to='/#learningBenefits' className="text-start">
                        <p className="text-sm">Why Choose Us</p>
                    </HashLink>
                    <HashLink to='/#testimonials' className="text-start">
                        <p className="text-sm">Testimonials</p>
                    </HashLink>
                    <a href={SOCIAL_LINKS.whatsapp} rel='noreferrer' target='_blank' className="text-start">
                        <p className="text-sm">Contact Us</p>
                    </a>
                </div>
                <div className="flex flex-col items-start gap-6 w-full">
                    <p className="uppercase sm:text-[20px] text-[17px] text-[#C3F9FF] font-normal">resources</p>
                    <HashLink to='/associate-bachelor-degree' className="text-start">
                        <p className="text-sm">Courses</p>
                    </HashLink>
                    <HashLink to='' className="text-start">
                        <p className="text-sm">Certifications</p>
                    </HashLink>
                    <HashLink to='' className="text-start">
                        <p className="text-sm">Degrees</p>
                    </HashLink>
                    <HashLink to='' className="text-start">
                        <p className="text-sm">Scholarships</p>
                    </HashLink>
                    <HashLink to='/#accredications' className="text-start">
                        <p className="text-sm">Accredications</p>
                    </HashLink>
                </div>
                <div className="flex flex-col items-start gap-6 w-full mp:col-span-1 col-span-2">
                    <p className="uppercase text-[20px] text-[#C3F9FF] font-normal">contact us</p>
                    <div className="flex items-start gap-2">
                        <p className="text-[13px] uppercase">SWITZERLAND OFFICE: Via Vigizzi 98, <br /> Unterlangenegg 3614, Switzerland</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <p className="text-[15px] 2xl:text-[15px]"><Link target="_blank" to={`mailto:${CONTACT.email}`} className="underline">{CONTACT.email}</Link></p>
                    </div>
                    <div className="flex items-start gap-2">
                        <p className="text-[15px] 2xl:text-[15px]"><Link to={`tel:${CONTACT.phone}`} target="_blank" className="underline">{CONTACT.phoneDisplay}</Link></p>
                    </div>
                    <div className='flex items-center md:justify-center text-[25px] gap-4'>
                        <a href={SOCIAL_LINKS.linkedin} rel='noreferrer' target='_blank' className='underline'>
                            <FaLinkedin />
                        </a>
                        <a href={SOCIAL_LINKS.whatsapp} rel='noreferrer' target='_blank' className='underline'>
                            <FaWhatsapp />
                        </a>
                        <a href={SOCIAL_LINKS.instagram} rel='noreferrer' target='_blank' className='underline'>
                            <FaInstagram />
                        </a>
                        <a href={SOCIAL_LINKS.facebook} rel='noreferrer' target='_blank' className='underline'>
                            <FaFacebook />
                        </a>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex gap-3 mt-4 mx-auto text-center items-center justify-center">
                    <FaRegCopyright />
                    <p className="sp:text-base text-sm font-normal">TBMI</p>
                    <p className="sp:text-base text-sm pr-3 ">
                        copyright 2025. All rights reserved</p>
                </div>
            </div>
            </Container>
        </div>
    )
}

export default Footer