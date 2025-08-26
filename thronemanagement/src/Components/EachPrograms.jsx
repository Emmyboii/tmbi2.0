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

                <div className="text-white max-w-[1100px] mt-7 z-30 px-3 flex flex-col gap-9 items-center">
                    <p className="sm:text-[20px] text-sm text-[#FFC656] font-semibold">{programName}</p>
                    <p className="mh:text-[60px] sh:text-[50px] sp:text-[35px] text-[26px] leading-tight font-semibold max-w-[1000px]">
                        {programLabel}
                    </p>
                    <p className="sa:text-[24px] text-xl font-normal leading-8 max-w-[700px]">{programText}</p>
                    <p className='text-[#C0943E] text-3xl font-normal'>Start Course Today for ${programPrice}</p>
                    <div className="flex text-white items-center gap-4">
                        <img className="sa:w-[160px] w-[130px]" src={stars} alt="reviews" />
                        <p className='mt-1 text-lg'>{reviews}+ Reviews</p>
                    </div>
                    <div className="flex sk:flex-row flex-col sk:gap-14 gap-4">
                        <div className="flex items-center gap-3">
                            <img className="sa:size-[50px] size-[30px]" src={durations} alt="Duration" />
                            <div>
                                <p className="font-medium sa:text-lg text-base">Duration</p>
                                <p className="font-medium sa:text-2xl text-lg">{duration}</p>
                            </div>
                        </div>
                        <div className="flex items-center text-start gap-3">
                            <img className="sa:size-[50px] size-[30px]" src={learn} alt="Flexible" />
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

            <div className='pb-12'>
                <p className='font-bold sh:text-[32px] sp:text-[28px] text-xl text-center'>Included in the program:</p>

                {(Mini || MBA || ABD) && (
                    <div className='flex items-center gap-8 xl:px-40 xl:py-10 sh:p-20 p-10 text-center'>
                        <div className='bg-[#F2F2F7] rounded-[20px] w-full p-7 px-6 gap-5 min-h-[250px] flex flex-col items-center justify-center'>
                            <img className='lf:size-[48px] size-[33px]' src={certificates} alt="" />
                            <p className='lf:text-[20px] text-[17px] font-medium'>Plus Certificate</p>
                            <p className='lf:text-[17px] text-[15px] font-normal'>Official certificate to showcase your professional achievement.</p>
                        </div>
                        <div className='bg-[#F2F2F7] rounded-[20px] w-full p-7 px-6 gap-5 min-h-[250px] flex flex-col items-center justify-center'>
                            <img className='lf:size-[48px] size-[33px]' src={UDME} alt="" />
                            <p className='lf:text-[20px] text-[17px] font-medium'>3 Free Udemy Course</p>
                            <p className='lf:text-[17px] text-[15px] font-normal'>Get in depth knowledge of the subject</p>
                        </div>
                        <div className='bg-[#F2F2F7] rounded-[20px] w-full p-7 px-6 gap-5 min-h-[250px] flex flex-col items-center justify-center'>
                            <img className='lf:size-[48px] size-[33px]' src={CV} alt="" />
                            <p className='lf:text-[20px] text-[17px] font-medium'>OUR Free CV Review</p>
                            <p className='lf:text-[17px] text-[15px] font-normal'>Expert feedback to improve and polish your resume.</p>
                        </div>
                        <div className='bg-[#F2F2F7] rounded-[20px] w-full p-7 px-6 gap-5 min-h-[250px] flex flex-col items-center justify-center'>
                            <img className='lf:size-[48px] size-[33px]' src={linkedin} alt="" />
                            <p className='lf:text-[20px] text-[17px] font-medium'>Free LinkedIn Review</p>
                            <p className='lf:text-[17px] text-[15px] font-normal'>Optimize your LinkedIn profile for better career opportunities.</p>
                        </div>
                    </div>
                )}

                {EAD && (
                    <div className='flex items-center gap-8 xl:px-40 xl:py-10 w-full justify-center sh:p-20 p-10 text-center'>
                        <div className='bg-[#F2F2F7] rounded-[20px] w-1/3 p-7 px-6 gap-5 min-h-[250px] flex flex-col items-center justify-center'>
                            <img className='lf:size-[48px] size-[33px]' src={certificates} alt="" />
                            <p className='lf:text-[20px] text-[17px] font-medium'>Plus Certificate</p>
                            <p className='lf:text-[17px] text-[15px] font-normal'>Official certificate to showcase your professional achievement.</p>
                        </div>
                        <div className='bg-[#F2F2F7] rounded-[20px] w-1/3 p-7 px-6 gap-5 min-h-[250px] flex flex-col items-center justify-center'>
                            <img className='lf:size-[48px] size-[33px]' src={UDME} alt="" />
                            <p className='lf:text-[20px] text-[17px] font-medium'>2 Free Udemy Course</p>
                            <p className='lf:text-[17px] text-[15px] font-normal'>Get in depth knowledge of <br /> the subject</p>
                        </div>
                    </div>
                )}

                {ED && (
                    <div className='flex items-center gap-8 xl:px-40 xl:py-10 justify-center sh:p-20 p-10 text-center'>
                        <div className='bg-[#F2F2F7] rounded-[20px] w-1/3 p-7 px-6 gap-5 min-h-[250px] flex flex-col items-center justify-center'>
                            <img className='lf:size-[48px] size-[33px]' src={certificates} alt="" />
                            <p className='lf:text-[20px] text-[17px] font-medium'>Plus Certificate</p>
                            <p className='lf:text-[17px] text-[15px] font-normal'>Official certificate to showcase your professional achievement.</p>
                        </div>
                        <div className='bg-[#F2F2F7] rounded-[20px] w-1/3 p-7 px-6 gap-5 min-h-[250px] flex flex-col items-center justify-center'>
                            <img className='lf:size-[48px] size-[33px]' src={UDME} alt="" />
                            <p className='lf:text-[20px] text-[17px] font-medium'>1 Free Udemy Course</p>
                            <p className='lf:text-[17px] text-[15px] font-normal'>Get in depth knowledge of <br /> the subject</p>
                        </div>
                    </div>
                )}

                {PC && (
                    <div className='flex items-center gap-8 xl:px-40 xl:py-10 justify-center sh:p-20 p-10 text-center'>
                        <div className='bg-[#F2F2F7] rounded-[20px] w-1/3 p-7 px-6 gap-5 min-h-[250px] flex flex-col items-center justify-center'>
                            <img className='lf:size-[48px] size-[33px]' src={certificates} alt="" />
                            <p className='lf:text-[20px] text-[17px] font-medium'>Plus Certificate</p>
                            <p className='lf:text-[17px] text-[15px] font-normal'>Official certificate to showcase your professional achievement.</p>
                        </div>
                    </div>
                )}

                <div className='mt-32 mk:px-32 xl:px-32 xl:py-20 sh:p-16 p-5 px-6 bg-[#F5F5F5]'>
                    <p className='sh:text-[32px] sp:text-[28px] text-xl mh:text-start text-center font-bold'>Program Details</p>
                    <div className='mh:grid flex flex-col mh:grid-cols-3 items-center mh:gap-20 gap-10 mt-10'>
                        <div className='col-span-2'>
                            <p className='mh:text-[22px] text-[19px]'>{note}</p>
                            <div className='mt-11 flex flex-col gap-2 text-[18px] mh:ml-9'>
                                <li className='list-disc'><span className='font-semibold text-[20px]'>Duration: </span>{duration}</li>
                                <li className='list-disc'><span className='font-semibold text-[20px]'>Mode: </span>{mode}</li>
                                <li className='list-disc'><span className='font-semibold text-[20px]'>Certification: </span>{certificate}</li>
                                <li className='list-disc'><span className='font-semibold text-[20px]'>Price: </span>${programPrice} (limited-time offer)</li>
                            </div>
                            <div className='mt-10 flex flex-col text-[18px] gap-2 mh:ml-9'>
                                <li className='font-semibold text-[20px]'>Extras Included:</li>
                                <li className='font-normal ml-11'>Certificate of Completion</li>
                                {EAD && (
                                    <li className='font-normal ml-11'>2 Free Udemy Courses</li>
                                )}

                                {ED && (
                                    <li className='font-normal ml-11'>1 Free Udemy Course</li>
                                )}

                                {(Mini || MBA || ABD) && (
                                    <div className='flex flex-col gap-2'>
                                        <li className='font-normal ml-11'>3 Free Udemy Courses</li>
                                        <li className='font-normal ml-11'>CV & LinkedIn Review</li>
                                    </div>
                                )}

                            </div>
                        </div>

                        <img src={LB} alt="" />
                    </div>
                </div>

                <div className='bg-[#002B5B] text-white flex flex-col gap-7 items-center mk:px-32 xl:px-32 xl:py-20 sh:p-16 p-5 px-6'>
                    <p className='text-[32px] font-bold'>Accreditation</p>
                    <p className='font-normal text-[17px] max-w-[900px] text-center'>TMBI is registered as a foreign education provider in Switzerland. All Executive Mini MBA programs are certified and meet international business education standards. Graduates receive a verifiable certificate to showcase professional development.</p>
                    <div className='flex items-center gap-8'>
                        <img className='sp:w-[350px] w-[300px] border border-black/30' src={SWL} alt="" />
                        <img className='sp:w-[350px] w-[300px]' src={MEC} alt="" />
                        <img className='sp:w-[350px] w-[300px]' src={CAR} alt="" />
                    </div>
                </div>

                <div className='mk:px-32 xl:px-32 xl:py-20 sh:p-16 p-5 px-6 flex items-center justify-between gap-7 bg-[#F5F5F5]'>
                    <div>
                        <p className='sh:text-[32px] sp:text-[28px] text-xl mh:text-start text-center font-bold'>Program Requirement</p>
                        <ul className="list-disc list-inside col-span-2 pl-4 mt-10 text-sm sm:text-base leading-normal space-y-2">
                            <li>No prior degree required</li>
                            <li>Open to professionals, entrepreneurs, and recent graduates</li>
                            <li>Must have access to a stable internet connection</li>
                            <li>Willingness to commit 4–6 hours per week of self-study</li>
                            <li>Basic understanding of English (course content is in English)</li>
                        </ul>
                    </div>
                    <img className='w-[490px]' src={req} alt="" />
                </div>
            </div>

            <div className='sa:min-h-[530px] sk:min-h-[450px] mk:mx-32 xl:mx-32 xl:my-20 sh:m-16 m-5 mx-6 min-h-[430px] relative flex items-center bg-gradient-to-b from-[#002B5B] to-[#005BC1] rounded-[30px] shadow-sm shadow-[#4F00EE1A]'>

                <img
                    className='w-[500px] mx-auto absolute -top-24 left-1/2 -translate-x-1/2'
                    src={nextStep}
                    alt=""
                />

                <div className="relative text-white flex flex-col mx-auto items-center z-50 justify-center text-center h-full mc:px-32 sa:px-7 px-2 mt-52">
                    <p className="mh:text-[38px] 2xl:text-5xl sd:text-[28px] sk:text-[22px] text-lg font-semibold">
                        Take the Next Step Towards your Future
                    </p>
                    <p className="mh:text-[18px] leading-snug mt-7 sk:text-[14px] text-xs font-medium">
                        Unlock new opportunities with a globally recognized program. Gain the skills, <br /> flexibility, and support you need to succeed.
                    </p>
                    <div className="flex items-center gap-5 mt-9">
                        <HashLink smooth to="/#program">
                            <button className="py-3 px-[30px] rounded-full bg-[#C0943E] text-[#ffffff] text-[18px] font-medium">
                                Enroll Now
                            </button>
                        </HashLink>
                        <a href="http://surl.li/mumpei" rel='noreferrer' target='_blank'>
                            <button className="sm:p-4 p-2 sm:text-base text-sm border-2 border-[#C0943E] rounded-full text-[#C0943E] font-semibold">
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