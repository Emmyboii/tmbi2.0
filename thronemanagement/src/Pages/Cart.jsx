import ProgramDetails from '../Components/ProgramDetails';
import stars from '../Images/stargroup2.png';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { HiMiniArrowRight } from 'react-icons/hi2';
import { useEffect, useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Cart = ({ addedPrograms, suggestedPrograms }) => {

    const subtotal = addedPrograms.reduce((acc, item) => acc + parseFloat(item.programPrice), 0);

    const [openModal, setOpenModal] = useState(false)
    const [upload, setUpload] = useState(false)
    const [document, setDocument] = useState(null)

    const modalRef = useRef()

    const onClickRef = (e) => {
        if (modalRef.current === e.target) {
            setOpenModal(false)
        }
    }

    const handlePassportChange = (e) => {
        const selected = e.target.files[0]
        if (selected) {
            setDocument(selected)
            console.log('file selected', selected);
        }
    }

    const selectedPrograms = addedPrograms.map(p => p.programNamesOnCart).join(", ");
    const selectedCourse = addedPrograms.map(p => p.programLabel).join(", ");

    useEffect(() => {
        if (selectedPrograms === `Associate Bachelor's Degree` || selectedPrograms === 'Executive MBA') {
            setUpload(true)
        }
    }, [selectedPrograms])

    return (
        <div className='xl:px-24 sh:px-16 sh:pr-10 px-7 py-10 flex flex-col gap-8'>
            {addedPrograms.length > 0 ? (
                <p className='text-[30px] font-medium text-[#000000]'>Shopping Cart</p>
            ) : (
                <p className='text-[30px] text-center font-medium text-[#000000]'>Shopping Cart</p>
            )}

            {addedPrograms.length > 0 ? (
                <>
                    <div className='flex mk:flex-row flex-col items-start gap-10'>
                        <div className='w-full'>
                            <p className='text-lg font-normal border-b text-black/80 border-black/40'>
                                {addedPrograms.length} Course{addedPrograms.length > 1 && 's'} in Cart
                            </p>
                            {addedPrograms.map(({ programLabel, programImg, reviews, programText, programPrice, projectPath, programNamesOnCart }, index) => (
                                <div key={index}>
                                    <div className='w-full'>
                                        <div className='mt-5 flex sm:flex-row flex-col items-center gap-3'>
                                            <img className='lg:w-[320px] w-[220px] lg:h-[200px]' src={programImg} alt={programLabel} />
                                            <div className='flex flex-col items-center sm:items-start gap-2'>
                                                <p className='text-2xl font-semibold sm:text-start text-center'>{programNamesOnCart}</p>
                                                <p className='text-2xl font-medium'>{programLabel}</p>
                                                <p className='font-normal text-[15px] sm:text-start text-center'>{programText}</p>
                                                <p className='font-medium text-2xl'>${programPrice}</p>
                                                <div className="flex mt-7 items-center gap-3">
                                                    <img className="sa:w-[160px] w-[130px]" src={stars} alt="reviews" />
                                                    <p>({reviews}+ Reviews)</p>
                                                </div>
                                                <p
                                                    onClick={() => {
                                                        const stored = localStorage.getItem('programsData');
                                                        let allPrograms = stored ? JSON.parse(stored) : ProgramDetails;

                                                        const updated = allPrograms.map(category => {
                                                            const updatedDetails = category.programDetails.map(p => {
                                                                if (p.projectPath === projectPath) {
                                                                    return { ...p, addToCart: false };
                                                                }
                                                                return p;
                                                            });
                                                            return { ...category, programDetails: updatedDetails };
                                                        });

                                                        localStorage.setItem('programsData', JSON.stringify(updated));
                                                        window.dispatchEvent(new Event('cartUpdated'));
                                                    }}
                                                    className='text-red-500 text-sm cursor-pointer'>
                                                    Remove
                                                </p>
                                            </div>

                                        </div>
                                        <hr className='border border-[#797979B2] mt-5' />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ✅ SINGLE Total/Action Section after the cart items */}
                        <div className='w-full md:w-1/2'>
                            <p className='text-lg font-normal border-b text-black/80 border-black/40'>Subtotal:</p>
                            <div className='mt-3 flex flex-col items-start gap-3'>
                                <p className='text-[38px] font-medium'>${subtotal.toFixed(2)}</p>
                                <button
                                    onClick={() => setOpenModal(true)}
                                    className='text-[20px] font-normal flex items-center justify-center gap-4 py-[14px] px-[10px] w-full bg-[#1b4574] rounded-md text-white'>
                                    Proceed to Checkout <FaArrowRight />
                                </button>
                                <hr className='w-full h-[1.5px] bg-black/20 mt-12' />
                                <button
                                    className='text-[20px] font-normal flex items-center justify-center gap-4 py-[14px] px-[10px] w-full bg-[#ffffff] rounded-md text-[#002B5B] border border-[#002B5B]'>
                                    Apply Coupon
                                </button>
                            </div>
                        </div>
                    </div>


                    {suggestedPrograms.length > 0 && (
                        <>
                            {/* <hr className='border border-[#797979B2]' /> */}
                            <p className='font-medium text-[19px] mb-2'>You might also like</p>
                            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-6'>
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

                    {openModal && (
                        <div className='inset-0 fixed z-50 justify-center flex bg-opacity-30 p-2 items-center bg-black/50' ref={modalRef} onClick={onClickRef}>
                            <form className='rounded-[30px] 3xl:w-[60%] sm:w-[70%] sa:m-5 w-full flex flex-col 3xl:gap-6 gap-3 relative z-50  shadow-md shadow-[#00000040] border border-[#797979B2] 2xl:p-8 p-4 bg-white'>
                                <div className='flex items-center justify-between gap-3'>
                                    <p className='sd:text-2xl font-semibold'>Fill in the following details to continue</p>
                                    <FaTimes onClick={() => setOpenModal(false)} className='text-xl' />
                                </div>
                                <div className='flex items-center gap-3'>
                                    <div className='flex flex-col gap-1 w-full'>
                                        <p className='sd:text-lg font-[350]'>First Name</p>
                                        <input
                                            className='border border-[#797979B2] outline-none rounded-[7px] w-full py-2 px-3'
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder='John'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-1 w-full'>
                                        <p className='sd:text-lg font-[350]'>Last Name</p>
                                        <input
                                            className='border border-[#797979B2] outline-none rounded-[7px] w-full py-2 px-3'
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder='Doe'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='sd:text-lg font-[350]'>Whatsapp Number</p>
                                    <input
                                        className='border border-[#797979B2] outline-none rounded-[7px] w-full py-2 px-3'
                                        type="number"
                                        name=""
                                        id=""
                                        placeholder='+2348109876543'
                                    />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='sd:text-lg font-[350]'>Email</p>
                                    <input
                                        className='border border-[#797979B2] outline-none rounded-[7px] w-full py-2 px-3'
                                        type="email"
                                        name=""
                                        id=""
                                        placeholder='johndoe@gmail.com'
                                    />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='sd:text-lg font-[350]'>Selected Program</p>
                                    <input
                                        className='border border-[#797979B2] outline-none rounded-[7px] w-full py-2 px-3'
                                        type="text"
                                        name=""
                                        value={selectedPrograms}
                                        id=""
                                    />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='sd:text-lg font-[350]'>Selected Course</p>
                                    <input
                                        className='border border-[#797979B2] outline-none rounded-[7px] w-full py-2 px-3'
                                        type="text"
                                        name=""
                                        value={selectedCourse}
                                        id=""
                                    />
                                </div>
                                {upload && (
                                    <div className='w-full'>
                                        <p className='sd:text-lg font-[350] pb-2'>Upload Certificate {selectedPrograms === `Associate Bachelor's Degree` ? '(SSCE)' : '(OND)'}</p>
                                        <label htmlFor="passport">
                                            <input
                                                type="file"
                                                name=""
                                                id="passport"
                                                onChange={handlePassportChange}
                                            />
                                        </label>
                                    </div>
                                )}
                                {upload && (
                                    <div className='flex flex-col gap-1'>
                                        <p className='sd:text-lg font-[350]'>Application Fee</p>
                                        <input
                                            className='border border-[#797979B2] outline-none rounded-[7px] w-full py-2 px-3'
                                            type="text"
                                            name=""
                                            value={'10,000'}
                                            id=""
                                        />
                                    </div>
                                )}
                                <button className='text-[21px] text-white font-medium py-2 w-full bg-[#005BC1BF] rounded-[15px]'>Proceed</button>
                            </form>
                        </div>
                    )}

                </>

            ) : (
                <div>
                    <p className='text-xl text-center'>No Course added to cart yet.</p>
                </div>
            )}

        </div>
    )
}

export default Cart