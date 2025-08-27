import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProgramDetails from './ProgramDetails';
import stars from '../Images/stargroup2.png';
import durations from '../Images/duration.png';
import learn from '../Images/learn.png';
import linkedin from '../Images/linkedin.png';
import UDME from '../Images/UDME.png';
import certificates from '../Images/certificate.png';
import CV from '../Images/CV.png';
import LB from '../NewImages/LB.png';
import req from '../NewImages/req.png';
import SWL from '../Images/SWL.jpg';
import MEC from '../Images/MEC.jpg';
import CAR from '../Images/CAR.jpg';
import nextStep from '../NewImages/nextStep.png'
import { HashLink } from 'react-router-hash-link';

const EachPrograms = ({ setOpenCart, suggestedPrograms }) => {
    const { pathname } = useLocation();
    const [currentProgram, setCurrentProgram] = useState(null);

    const MBA = pathname.includes('/executive-mba')
    const ABD = pathname.includes('/associate-bachelor-degree')
    const EAD = pathname.includes('/executive-advanced-diploma')
    const ED = pathname.includes('/executive-diploma')
    const Mini = pathname.includes('/mini-mba')
    const PC = pathname.includes('/professional-certificate')

    // Get original (fresh) data from ProgramDetails
    useEffect(() => {
        const category = ProgramDetails.find(cat =>
            cat.programDetails.some(p => p.projectPath === pathname)
        );

        if (!category) return;

        const freshProgram = category.programDetails.find(p => p.projectPath === pathname);

        if (!freshProgram) return;

        // Apply addToCart from localStorage if it exists
        const stored = localStorage.getItem('programsData');
        if (stored) {
            const parsed = JSON.parse(stored);
            const match = parsed.find(cat =>
                cat.programDetails.some(p => p.projectPath === pathname)
            );
            const matchProgram = match?.programDetails.find(p => p.projectPath === pathname);
            if (matchProgram) {
                freshProgram.addToCart = matchProgram.addToCart;
            }
        }

        setCurrentProgram(freshProgram);
    }, [pathname]);

    const handleAddToCart = (projectPath) => {
        const stored = localStorage.getItem('programsData');
        let allPrograms = stored ? JSON.parse(stored) : ProgramDetails;

        const updatedPrograms = allPrograms.map(category => {
            const updatedDetails = category.programDetails.map(program => {
                if (program.projectPath === projectPath) {
                    return { ...program, addToCart: true };
                }
                return program;
            });
            return { ...category, programDetails: updatedDetails };
        });

        localStorage.setItem('programsData', JSON.stringify(updatedPrograms));
        setOpenCart(true);

        window.dispatchEvent(new Event('cartUpdated'));
        setCurrentProgram(prev => ({ ...prev, addToCart: true }));
    };

    if (!currentProgram) {
        return <p className="text-center my-20 text-xl text-red-600">Program not found.</p>;
    }

    const { programImg, programLabel, programText, programPrice, projectPath, programName, reviews, duration, mode, certificate, note } = currentProgram;


    return (
        <div className='flex flex-col gap-12'>
            <div
                className="relative w-full py-20 flex items-center justify-center text-center"
                style={{
                    backgroundImage: `url(${programImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="absolute inset-0 w-full bg-[#000000D9]"></div>

                <div className="text-white max-w-[1100px] mt-7 z-30 px-3 flex flex-col sa:gap-9 gap-4 items-center">
                    <p className="sm:text-[20px] text-sm text-[#FFC656] font-semibold">{programName}</p>
                    <p className="mh:text-[60px] sh:text-[50px] sp:text-[35px] text-[26px] leading-tight font-semibold max-w-[1000px]">
                        {programLabel}
                    </p>
                    <p className="sa:text-[22px] text-[17px] font-normal leading-8 max-w-[700px]">{programText}</p>
                    <p className='text-[#C0943E] sa:text-3xl text-2xl font-normal'>Start Course Today for ${programPrice}</p>
                    <div className="flex text-white items-center gap-4">
                        <img className="sa:w-[160px] w-[130px]" src={stars} alt="reviews" />
                        <p className='mt-1 text-lg'>{reviews}+ Reviews</p>
                    </div>
                    <div className="flex sk:flex-row flex-col self-start sk:self-center sk:gap-14 gap-4">
                        <div className="flex items-center gap-3">
                            <img className="sa:size-[40px] size-[20px]" src={durations} alt="Duration" />
                            <div>
                                <p className="font-medium sa:text-lg text-base">Duration</p>
                                <p className="font-medium sa:text-2xl text-lg">{duration}</p>
                            </div>
                        </div>
                        <div className="flex items-center text-start gap-3">
                            <img className="sa:size-[40px] size-[20px]" src={learn} alt="Flexible" />
                            <div>
                                <p className="font-medium sa:text-lg text-base">Flexible Schedule</p>
                                <p className="font-medium sa:text-2xl text-lg">Learn at your own pace</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => handleAddToCart(projectPath)} className="py-3 px-[40px] mt-10 rounded-full bg-[#C0943E] text-[#ffffff] text-[18px] font-medium">
                        <p>Enroll Now</p>
                    </button>
                </div>
            </div>

            <div className="pb-12">
                <p className="font-bold text-xl sp:text-[28px] sh:text-[32px] text-center">
                    Included in the program:
                </p>

                {/* ✅ Mini, MBA, ABD */}
                {(Mini || MBA || ABD) && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:px-40 xl:py-10 sh:p-20 p-6 text-center">
                        <div className="bg-[#F2F2F7] rounded-[20px] w-full p-6 gap-5 min-h-[250px] flex flex-col items-center justify-center">
                            <img className="size-[33px] lf:size-[48px]" src={certificates} alt="" />
                            <p className="text-[17px] lf:text-[20px] font-medium">Plus Certificate</p>
                            <p className="text-[15px] lf:text-[17px] font-normal">
                                Official certificate to showcase your professional achievement.
                            </p>
                        </div>

                        <div className="bg-[#F2F2F7] rounded-[20px] w-full p-6 gap-5 min-h-[250px] flex flex-col items-center justify-center">
                            <img className="size-[33px] lf:size-[48px]" src={UDME} alt="" />
                            <p className="text-[17px] lf:text-[20px] font-medium">3 Free Udemy Course</p>
                            <p className="text-[15px] lf:text-[17px] font-normal">Get in depth knowledge of the subject</p>
                        </div>

                        <div className="bg-[#F2F2F7] rounded-[20px] w-full p-6 gap-5 min-h-[250px] flex flex-col items-center justify-center">
                            <img className="size-[33px] lf:size-[48px]" src={CV} alt="" />
                            <p className="text-[17px] lf:text-[20px] font-medium">OUR Free CV Review</p>
                            <p className="text-[15px] lf:text-[17px] font-normal">Expert feedback to improve and polish your resume.</p>
                        </div>

                        <div className="bg-[#F2F2F7] rounded-[20px] w-full p-6 gap-5 min-h-[250px] flex flex-col items-center justify-center">
                            <img className="size-[33px] lf:size-[48px]" src={linkedin} alt="" />
                            <p className="text-[17px] lf:text-[20px] font-medium">Free LinkedIn Review</p>
                            <p className="text-[15px] lf:text-[17px] font-normal">
                                Optimize your LinkedIn profile for better career opportunities.
                            </p>
                        </div>
                    </div>
                )}

                {/* ✅ Executive Advanced Diploma (EAD) */}
                {EAD && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:px-40 xl:py-10 sh:p-20 p-6 text-center">
                        <div className="bg-[#F2F2F7] rounded-[20px] w-full p-6 gap-5 min-h-[250px] flex flex-col items-center justify-center">
                            <img className="size-[33px] lf:size-[48px]" src={certificates} alt="" />
                            <p className="text-[17px] lf:text-[20px] font-medium">Plus Certificate</p>
                            <p className="text-[15px] lf:text-[17px] font-normal">Official certificate to showcase your professional achievement.</p>
                        </div>
                        <div className="bg-[#F2F2F7] rounded-[20px] w-full p-6 gap-5 min-h-[250px] flex flex-col items-center justify-center">
                            <img className="size-[33px] lf:size-[48px]" src={UDME} alt="" />
                            <p className="text-[17px] lf:text-[20px] font-medium">2 Free Udemy Course</p>
                            <p className="text-[15px] lf:text-[17px] font-normal">Get in depth knowledge of the subject</p>
                        </div>
                    </div>
                )}

                {/* ✅ Executive Diploma (ED) */}
                {ED && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:px-40 xl:py-10 sh:p-20 p-6 text-center">
                        <div className="bg-[#F2F2F7] rounded-[20px] w-full p-6 gap-5 min-h-[250px] flex flex-col items-center justify-center">
                            <img className="size-[33px] lf:size-[48px]" src={certificates} alt="" />
                            <p className="text-[17px] lf:text-[20px] font-medium">Plus Certificate</p>
                            <p className="text-[15px] lf:text-[17px] font-normal">Official certificate to showcase your professional achievement.</p>
                        </div>
                        <div className="bg-[#F2F2F7] rounded-[20px] w-full p-6 gap-5 min-h-[250px] flex flex-col items-center justify-center">
                            <img className="size-[33px] lf:size-[48px]" src={UDME} alt="" />
                            <p className="text-[17px] lf:text-[20px] font-medium">1 Free Udemy Course</p>
                            <p className="text-[15px] lf:text-[17px] font-normal">Get in depth knowledge of the subject</p>
                        </div>
                    </div>
                )}

                {/* ✅ Professional Certificate (PC) */}
                {PC && (
                    <div className="grid grid-cols-1 gap-6 xl:px-40 xl:py-10 sh:p-20 p-6 text-center">
                        <div className="bg-[#F2F2F7] rounded-[20px] w-full p-6 gap-5 min-h-[250px] flex flex-col items-center justify-center">
                            <img className="size-[33px] lf:size-[48px]" src={certificates} alt="" />
                            <p className="text-[17px] lf:text-[20px] font-medium">Plus Certificate</p>
                            <p className="text-[15px] lf:text-[17px] font-normal">Official certificate to showcase your professional achievement.</p>
                        </div>
                    </div>
                )}

                <div className="mt-32 xl:px-32 md:p-16 p-5 py-10 xl:py-20 bg-[#F5F5F5]">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-center md:text-left font-bold">
                        Program Details
                    </p>

                    <div className="mt-10 md:grid flex flex-col grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 items-center">
                        <div className="col-span-2">
                            <p className="sm:text-[19px] md:text-[22px]">{note}</p>

                            <div className="mt-8 flex flex-col gap-2 text-base md:text-lg">
                                <li className="list-disc">
                                    <span className="font-semibold text-lg md:text-xl">Duration: </span>
                                    {duration}
                                </li>
                                <li className="list-disc">
                                    <span className="font-semibold text-lg md:text-xl">Mode: </span>
                                    {mode}
                                </li>
                                <li className="list-disc">
                                    <span className="font-semibold text-lg md:text-xl">Certification: </span>
                                    {certificate}
                                </li>
                                <li className="list-disc">
                                    <span className="font-semibold text-lg md:text-xl">Price: </span>${programPrice} (limited-time offer)
                                </li>
                            </div>

                            <div className="mt-8 flex flex-col gap-2 text-base md:text-lg">
                                <li className="font-semibold text-lg md:text-xl">Extras Included:</li>
                                <li className="ml-6">Certificate of Completion</li>
                                {EAD && <li className="ml-6">2 Free Udemy Courses</li>}
                                {ED && <li className="ml-6">1 Free Udemy Course</li>}
                                {(Mini || MBA || ABD) && (
                                    <div className="flex flex-col gap-2 ml-6">
                                        <li>3 Free Udemy Courses</li>
                                        <li>CV & LinkedIn Review</li>
                                    </div>
                                )}
                            </div>
                        </div>

                        <img src={LB} alt="" className="w-full md:w-sm mx-auto md:mx-0" />
                    </div>
                </div>

                {/* Accreditation Section */}
                <div className="bg-[#002B5B] text-white flex flex-col gap-6 items-center xl:px-32 md:p-16 p-5 py-10 xl:py-20">
                    <p className="text-2xl sm:text-3xl font-bold">Accreditation</p>
                    <p className="text-base sm:text-lg max-w-3xl text-center">
                        TMBI is registered as a foreign education provider in Switzerland. All Executive Mini MBA programs are certified and meet international business education standards. Graduates receive a verifiable certificate to showcase professional development.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <img className="w-[250px] sm:w-[300px] md:w-[350px] border border-black/30" src={SWL} alt="" />
                        <img className="w-[250px] sm:w-[300px] md:w-[350px]" src={MEC} alt="" />
                        <img className="w-[250px] sm:w-[300px] md:w-[350px]" src={CAR} alt="" />
                    </div>
                </div>

                {/* Program Requirement */}
                <div className="xl:px-32 md:p-16 p-5 py-10 xl:py-20 flex flex-col md:flex-row items-center justify-between gap-10 bg-[#F5F5F5]">
                    <div className="w-full md:w-2/3">
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold text-center md:text-left">
                            Program Requirement
                        </p>
                        <ul className="list-disc list-inside mt-6 text-base sm:text-lg leading-relaxed space-y-2">
                            <li>No prior degree required</li>
                            <li>Open to professionals, entrepreneurs, and recent graduates</li>
                            <li>Must have access to a stable internet connection</li>
                            <li>Willingness to commit 4–6 hours per week of self-study</li>
                            <li>Basic understanding of English (course content is in English)</li>
                        </ul>
                    </div>

                    <img src={req} alt="" className="w-full max-w-xs sm:max-w-md md:max-w-lg" />
                </div>
            </div>

            <div className='sa:min-h-[530px] sk:min-h-[450px] min-h-[330px] mk:mx-32 xl:mx-32 xl:my-20 sh:m-16 m-5 mx-6 relative flex items-center bg-gradient-to-b from-[#002B5B] to-[#005BC1] rounded-[30px] shadow-sm shadow-[#4F00EE1A]'>

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
        </div>
    );
};

export default EachPrograms;