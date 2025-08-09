import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProgramDetails from './ProgramDetails';
import stars from '../Images/stargroup2.png';
import durations from '../Images/duration.png';
import learn from '../Images/learn.png';
import linkedin from '../Images/linkedin.png';
import UDME from '../Images/UDME.png';
import certificates from '../Images/certificate.png';
import CV from '../Images/CV.png';
import line from '../Images/Line.png';
// import acc1 from '../Images/acc1.png';
// import acc2 from '../Images/acc2.png';
// import acc3 from '../Images/acc3.png';
// import acc4 from '../Images/acc4.png';
// import acc5 from '../Images/acc5.png';
import SWL from '../Images/SWL.jpg';
import MEC from '../Images/MEC.jpg';
import CAR from '../Images/CAR.jpg';
import { HiMiniArrowRight } from 'react-icons/hi2';

const EachPrograms = ({ setOpenCart, addedPrograms, suggestedPrograms }) => {
    const { pathname } = useLocation();
    const [learnAbout, setLearnAbout] = useState('program');
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

    const { programImg, programLabel, programText, projectPath, programPrice, programName, reviews, duration, mode, certificate, note } = currentProgram;


    return (
        <div className='flex flex-col gap-12'>
            <div
                className="relative w-full"
                style={{
                    backgroundImage: `url(${programImg})`,
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
                    <p className="sm:text-[20px] text-sm text-[#FFC656] font-semibold">{programName}</p>
                    <p className="mh:text-[60px] sh:text-[50px] sp:text-[35px] text-[26px] leading-tight font-semibold max-w-[650px]">
                        {programLabel}
                    </p>
                    <p className="sa:text-[20px] text-base font-normal leading-7 mt-5 max-w-[660px]">{programText}</p>
                    <button
                        onClick={() => handleAddToCart(projectPath)}
                        className="py-3 px-[30px] z-50 sh:mt-20 mt-10 rounded-full bg-white text-[#005BC1] sa:text-[18px] text-sm font-medium"
                    >
                        Start Course Today for <span className="font-semibold">${programPrice}</span>
                    </button>
                    <div className="flex mt-7 text-white items-center gap-3">
                        <img className="sa:w-[160px] w-[130px]" src={stars} alt="reviews" />
                        <p>{reviews}+ Reviews</p>
                    </div>
                    <div className="mt-7 flex sk:flex-row flex-col sk:gap-14 gap-4">
                        <div className="flex items-center gap-3">
                            <img className="sa:size-[50px] size-[30px]" src={durations} alt="Duration" />
                            <div>
                                <p className="font-medium sa:text-base text-sm">Duration</p>
                                <p className="font-medium sa:text-xl text-base">{duration}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <img className="sa:size-[50px] size-[30px]" src={learn} alt="Flexible" />
                            <div>
                                <p className="font-medium sa:text-base text-sm">Flexible Schedule</p>
                                <p className="font-medium sa:text-xl text-base">Learn at your own pace</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pb-12'>
                <p className='font-medium sh:text-[30px] sp:text-2xl text-lg text-center'>included in the program:</p>

                {(Mini || MBA || ABD) && (
                    <div className='flex md:flex-row flex-col justify-between gap-8 mt-6 shadow-custom-sm py-5 relative drop-shadow-xl shadow-[#0000001A] rounded-[10px] max-w-[1080px] sa:mx-6 mx-3 sa:px-0 px-2 xl:mx-auto'>
                        <img className='absolute md:block hidden h-[100px] top-1/2 -translate-y-1/2 left-[26%] -translate-x-[26%]' src={line} alt="" />
                        <img className='absolute md:block hidden h-[100px] top-1/2 -translate-y-1/2 left-[47%] -translate-x-[47%]' src={line} alt="" />
                        <img className='absolute md:h-[100px] h-[200px] w-1 md:w-auto top-1/2 -translate-y-1/2 md:left-[73%] left-1/2 -translate-x-1/2 md:-translate-x-[73%]' src={line} alt="" />
                        <div className='w-full md:hidden justify-center gap-10 flex items-center'>
                            <div className='flex sa:w-1/2 w-[100%] flex-col items-center text-center gap-2'>
                                <img className='lf:size-[48px] size-[33px]' src={certificates} alt="" />
                                <p className='lf:text-[17px] text-[14px] font-medium'>Plus Certificate</p>
                                <p className='lf:text-[14px] text-xs font-normal'>Official certificate to showcase your professional achievement.</p>
                            </div>
                            <div className='flex sa:w-1/2 w-[100%] flex-col items-center text-center gap-2'>
                                <img className='lf:size-[48px] size-[33px]' src={UDME} alt="" />
                                <p className='lf:text-[17px] text-[14px] font-medium'>3 Free Udemy Course</p>
                                <p className='lf:text-[14px] text-xs font-normal'>Get in depth knowledge of the subject</p>
                            </div>
                        </div>
                        <div className='w-full md:hidden justify-center gap-10 flex items-center'>
                            <div className='flex sa:w-1/2 w-[100%] flex-col items-center text-center gap-2'>
                                <img className='lf:size-[48px] size-[33px]' src={CV} alt="" />
                                <p className='lf:text-[17px] text-[14px] font-medium'>Free CV Review</p>
                                <p className='lf:text-[14px] text-xs font-normal'>Expert feedback to improve and polish your resume.</p>
                            </div>
                            <div className='flex sa:w-1/2 w-[100%] flex-col items-center text-center gap-2'>
                                <img className='lf:size-[48px] size-[33px]' src={linkedin} alt="" />
                                <p className='lf:text-[17px] text-[14px] font-medium'>Free LinkedIn Review</p>
                                <p className='lf:text-[14px] text-xs font-normal'>Optimize your LinkedIn profile for better career opportunities.</p>
                            </div>
                        </div>
                        <div className='md:flex hidden flex-col items-center text-center gap-2'>
                            <img className='lf:size-[48px] size-[33px]' src={certificates} alt="" />
                            <p className='lf:text-[17px] text-[14px] font-medium'>Plus Certificate</p>
                            <p className='lf:text-[14px] text-xs font-normal'>Official certificate to showcase your professional achievement.</p>
                        </div>
                        <div className='md:flex hidden flex-col items-center text-center gap-2'>
                            <img className='lf:size-[48px] size-[33px]' src={UDME} alt="" />
                            <p className='lf:text-[17px] text-[14px] font-medium'>3 Free Udemy Course</p>
                            <p className='lf:text-[14px] text-xs font-normal'>Get in depth knowledge of the subject</p>
                        </div>
                        <div className='md:flex hidden flex-col items-center text-center gap-2'>
                            <img className='lf:size-[48px] size-[33px]' src={CV} alt="" />
                            <p className='lf:text-[17px] text-[14px] font-medium'>Free CV Review</p>
                            <p className='lf:text-[14px] text-xs font-normal'>Expert feedback to improve and polish your resume.</p>
                        </div>
                        <div className='md:flex hidden flex-col items-center text-center gap-2'>
                            <img className='lf:size-[48px] size-[33px]' src={linkedin} alt="" />
                            <p className='lf:text-[17px] text-[14px] font-medium'>Free LinkedIn Review</p>
                            <p className='lf:text-[14px] text-xs font-normal'>Optimize your LinkedIn profile for better career opportunities.</p>
                        </div>
                    </div>
                )}

                {EAD && (
                    <div className='relative shadow-custom-sm py-5 max-w-[1000px] xl:mx-auto mt-6 sa:mx-6 mx-3 sa:px-0 px-2 drop-shadow-xl shadow-[#0000001A] rounded-[10px]'>
                        <img className='absolute h-[100px] w-1 md:w-auto top-1/2 -translate-y-1/2 md:left-[50%] left-1/2 -translate-x-1/2 md:-translate-x-[50%]' src={line} alt="" />
                        <div className='w-full justify-center gap-10 flex relative items-center'>
                            <div className='flex sa:w-1/2 w-[100%] flex-col items-center text-center gap-2'>
                                <img className='lf:size-[48px] size-[33px]' src={certificates} alt="" />
                                <p className='lf:text-[17px] text-[14px] font-medium'>Plus Certificate</p>
                                <p className='lf:text-[14px] text-xs font-normal'>Official certificate to showcase your professional achievement.</p>
                            </div>
                            <div className='flex sa:w-1/2 w-[100%] flex-col items-center text-center gap-2'>
                                <img className='lf:size-[48px] size-[33px]' src={UDME} alt="" />
                                <p className='lf:text-[17px] text-[14px] font-medium'>2 Free Udemy Course</p>
                                <p className='lf:text-[14px] text-xs font-normal'>Get in depth knowledge of the subject</p>
                            </div>
                        </div>
                    </div>
                )}

                {ED && (
                    <div className='relative shadow-custom-sm py-5 xl:mx-auto max-w-[1000px] sa:mx-6 mx-3 sa:px-0 px-2 mt-6 drop-shadow-xl shadow-[#0000001A] rounded-[10px]'>
                        <img className='absolute h-[100px] w-1 md:w-auto top-1/2 -translate-y-1/2 md:left-[50%] left-1/2 -translate-x-1/2 md:-translate-x-[50%]' src={line} alt="" />
                        <div className='w-full justify-center gap-10 flex relative items-center'>
                            <div className='flex sa:w-1/2 w-[100%] flex-col items-center text-center gap-2'>
                                <img className='lf:size-[48px] size-[33px]' src={certificates} alt="" />
                                <p className='lf:text-[17px] text-[14px] font-medium'>Plus Certificate</p>
                                <p className='lf:text-[14px] text-xs font-normal'>Official certificate to showcase your professional achievement.</p>
                            </div>
                            <div className='flex sa:w-1/2 w-[100%] flex-col items-center text-center gap-2'>
                                <img className='lf:size-[48px] size-[33px]' src={UDME} alt="" />
                                <p className='lf:text-[17px] text-[14px] font-medium'>1 Free Udemy Course</p>
                                <p className='lf:text-[14px] text-xs font-normal'>Get in depth knowledge of the subject</p>
                            </div>
                        </div>
                    </div>
                )}

                {PC && (
                    <div className='relative shadow-custom-sm py-5 max-w-[500px] xl:mx-auto mt-6 sa:mx-6 mx-3 sa:px-0 px-2 drop-shadow-xl shadow-[#0000001A] rounded-[10px]'>
                        <div className='flex flex-col items-center justify-center text-center gap-2'>
                            <img className='lf:size-[48px] size-[33px]' src={certificates} alt="" />
                            <p className='lf:text-[17px] text-[14px] font-medium'>Plus Certificate</p>
                            <p className='lf:text-[14px] text-xs font-normal'>Official certificate to showcase your professional achievement.</p>
                        </div>
                    </div>
                )}

                <div className='mt-32 mk:px-24 px-6'>
                    <p className='sh:text-[30px] sp:text-2xl text-lg mh:text-start text-center font-medium'>Learn more about the Program</p>
                    <div className='mh:grid flex flex-col mh:grid-cols-3 mh:gap-20 gap-10 mt-10'>
                        <div className='flex flex-col w-full gap-3'>
                            <p onClick={() => setLearnAbout('program')} className={`mh:p-[10px] p-[6.5px] border border-[#79797940] text-center text-[#002B5B] mh:text-[20px] text-base font-normal cursor-pointer ${learnAbout === 'program' && 'shadow-md shadow-[#00000040]'}`}>Program details</p>
                            {/* {(MBA || ABD) && (
                                <p onClick={() => setLearnAbout('course')} className={`mh:p-[10px] p-[6.5px] border border-[#79797940] text-center text-[#002B5B] mh:text-[20px] text-base font-normal cursor-pointer ${learnAbout === 'course' && 'shadow-md shadow-[#00000040]'}`}>Course details</p>
                            )} */}
                            <p onClick={() => setLearnAbout('acc')} className={`mh:p-[10px] p-[6.5px] border border-[#79797940] text-center text-[#002B5B] mh:text-[20px] text-base font-normal cursor-pointer ${learnAbout === 'acc' && 'shadow-md shadow-[#00000040]'}`}>Accreditations</p>
                            <p onClick={() => setLearnAbout('req')} className={`mh:p-[10px] p-[6.5px] border border-[#79797940] text-center text-[#002B5B] mh:text-[20px] text-base font-normal cursor-pointer ${learnAbout === 'req' && 'shadow-md shadow-[#00000040]'}`}>Program requirements</p>
                        </div>
                        {learnAbout === 'program' && (
                            <div className='col-span-2'>
                                <p className='mh:text-[18.4px] text-base'>{note}</p>
                                <div className='mt-5 flex flex-col gap-2 mh:ml-9'>
                                    <li className='list-disc'><span className='font-semibold'>Duration: </span>{duration}</li>
                                    <li className='list-disc'><span className='font-semibold'>Mode: </span>{mode}</li>
                                    <li className='list-disc'><span className='font-semibold'>Certification: </span>{certificate}</li>
                                    <li className='list-disc'><span className='font-semibold'>Price: </span>${programPrice} (limited-time offer)</li>
                                </div>
                                <div className='mt-14 flex flex-col gap-2 mh:ml-9'>
                                    <li className='font-semibold'>Extras Included:</li>
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
                        )}

                        {learnAbout === 'req' && (
                            <ul className="list-disc list-inside col-span-2 pl-4 text-sm sm:text-base leading-normal space-y-2">
                                <li>No prior degree required</li>
                                <li>Open to professionals, entrepreneurs, and recent graduates</li>
                                <li>Must have access to a stable internet connection</li>
                                <li>Willingness to commit 4–6 hours per week of self-study</li>
                                <li>Basic understanding of English (course content is in English)</li>
                            </ul>

                        )}

                        {learnAbout === 'acc' && (
                            <div className='flex flex-col gap-10 mh:ml-9 w-full col-span-2'>
                                <p className='sp:text-base text-[13px]'>TMBI is registered as a foreign education provider in Switzerland. All <span className='lowercase'>{programName}</span> programs are certified and meet international business education standards. Graduates receive a verifiable certificate to showcase professional development.</p>
                                <div className='grid sh:grid-cols-4 sp:grid-cols-3 grid-cols-2 items-center gap-y-12'>
                                    <img className='sp:w-[120px] w-[100px] border border-black/30' src={SWL} alt="" />
                                    <img className='sp:w-[120px] w-[100px]' src={MEC} alt="" />
                                    <img className='sp:w-[120px] w-[100px]' src={CAR} alt="" />
                                    {/* <img className='sp:w-[120px] w-[100px]' src={acc4} alt="" /> */}
                                    {/* <img className='sp:w-[80px] w-[60px]' src={acc5} alt="" /> */}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {suggestedPrograms.length > 0 && (
                <>
                    {/* <hr className='border border-[#797979B2]' /> */}
                    <p className='font-medium text-[19px] px-16'>You might be interested in</p>
                    <div className='grid md:grid-cols-3 lg:grid-cols-4 px-16 pb-16 gap-6'>
                        {suggestedPrograms.map(({ programImg, programLabel, programText, programPrice, projectPath, programNamesOnCart }, i) => (
                            <div key={i} className='bg-[#002B5B26] border-[0.5px] flex flex-col gap-1 border-[#002B5B40] shadow-md rounded-[10px] p-3 justify-between'>
                                <div className='flex flex-col gap-2'>
                                    <Link onClick={() => window.scrollTo(0, 0)} to={projectPath}>
                                        <img className='w-full h-[170px] rounded-[10px] hover:scale-105 transition-all duration-700 object-cover' src={programImg} alt={programLabel} />
                                    </Link>
                                    <p className='text-2xl font-semibold'>{programNamesOnCart}</p>
                                    <p className='text-[20px] font-medium'>{programLabel}</p>
                                    <p className='text-[17px] font-normal'>{programText}</p>
                                </div>
                                <div className='flex justify-between mt-7 mb-3'>
                                    <p className='font-medium text-2xl'>${programPrice}</p>
                                    <Link onClick={() => window.scrollTo(0, 0)} to={projectPath}>
                                        <button className='flex items-center  text-white bg-[#002B5B] rounded-[5px] p-2 font-semibold gap-2'>
                                            Enroll Now
                                            <HiMiniArrowRight className='mt-1' />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default EachPrograms;