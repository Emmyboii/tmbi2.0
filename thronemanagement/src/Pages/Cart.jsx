import ProgramDetails from '../Components/ProgramDetails';
import stars from '../Images/stargroup2.png';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { HiMiniArrowRight } from 'react-icons/hi2';
import { useEffect, useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { TbTrash } from "react-icons/tb";

const Cart = ({ addedPrograms, suggestedPrograms }) => {

    const subtotal = addedPrograms.reduce((acc, item) => acc + parseFloat(item.programPrice), 0);
    const subtotalInNG = addedPrograms.reduce(
        (acc, item) => acc + Number(item.programPriceInNG.replace(/,/g, '')),
        0
    );
    const [openModal, setOpenModal] = useState(false)
    const [upload, setUpload] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [document, setDocument] = useState(null)
    const [program, setProgram] = useState('')
    const [applicationFee, setApplicationFee] = useState('')
    const [status, setStatus] = useState({ message: '', type: '' })
    const [modal, setModal] = useState(false)

    const selectedPrograms = addedPrograms.map(p => p.programNamesOnCart).join(", ");
    const selectedCourse = addedPrograms.map(p => p.programLabel).join(", ");

    const applicationFees = () => {
        if (selectedPrograms === `Associate Bachelor's Degree`) {
            setApplicationFee('#30,000')
        } else {
            setApplicationFee('#60,000')

        }
    }

    useEffect(() => {
        applicationFees();
    }, [selectedPrograms]);

    useEffect(() => {
        if (selectedPrograms === `Associate Bachelor's Degree`) {
            setProgram('ABD')
        } else if (selectedPrograms === `Executive MBA`) {
            setProgram('MBA')
        } else if (selectedPrograms === `Executive Mini MBA`) {
            setProgram('MMBA')
        } else if (selectedPrograms === `Professional Courses`) {
            setProgram('PC')
        } else if (selectedPrograms === `Executive Diploma`) {
            setProgram('ED')
        } else if (selectedPrograms === `Executive Advanced Diploma`) {
            setProgram('EAD')
        }
    }, [selectedPrograms])

    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        programApplied: '',
        highestEducationLevel: '',
    })

    const handleChange = (e) => {
        const { value, name } = e.target

        setForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const modalRef = useRef()

    const onClickRef = (e) => {
        if (modalRef.current === e.target) {
            setOpenModal(false)
        }
    }

    const handleDocumentChange = (e) => {
        const selected = e.target.files[0]
        if (selected) {
            setDocument(selected)
            console.log('file selected', selected);
        }
    }


    useEffect(() => {
        if (selectedPrograms === "Associate Bachelor's Degree" || selectedPrograms === 'Executive MBA') {
            setUpload(true)
        }
    }, [selectedPrograms])

    const apply = async (e) => {
        e.preventDefault();

        setSubmitting(true)

        const formData = new FormData();
        formData.append("firstname", form.firstname);
        formData.append("lastname", form.lastname);
        formData.append("email", form.email);
        formData.append("phone", form.phone);
        formData.append("programApplied", program);
        formData.append("courseName", selectedCourse);
        formData.append("highestEducationLevel", form.highestEducationLevel);
        formData.append("document", document);

        try {
            const res = await fetch('https://devm.westus2.cloudapp.azure.com/thorne/api/apply', {
                method: 'POST',
                body: formData
            })
            const data = await res.json();

            if (!res.ok) {
                setStatus({ message: 'Sorry, an error occured. Please try again later or contact the admin', type: 'error' })
                setModal(true)
                return
            } else {

                setStatus({ message: 'Application Submitted successfully', type: 'success' })
                setModal(true)

                console.log("Application saved:", data);

                const applicantId = data._id;

                if (applicantId) {
                    // Redirect to Paystack checkout page
                    if (selectedPrograms === "Associate Bachelor's Degree" || selectedPrograms === 'Executive MBA') {
                        window.location.href = `https://devm.westus2.cloudapp.azure.com/thorne/api/apply/${applicantId}/checkout-apply`;
                    } else {
                        window.location.href = `https://devm.westus2.cloudapp.azure.com/thorne/api/apply/${applicantId}/checkout`;
                    }
                } else {
                    console.error("No applicant_id returned from API");
                }
            }
        } catch (err) {
            console.error("Error:", err);
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className='xl:px-24 sh:px-16 sh:pr-10 px-7 py-10 flex flex-col gap-8'>
            {addedPrograms.length > 0 ? (
                <p className='text-[30px] font-bold text-[#000000]'>Cart</p>
            ) : (
                <p className='text-[30px] text-center font-bold text-[#000000]'>Cart</p>
            )}

            <hr className='w-full border-[#F5F5F5] border' />

            {addedPrograms.length > 0 ? (
                <>
                    <div className='flex mk:flex-row flex-col items-center justify-between gap-16'>
                        <div className='w-full'>
                            {addedPrograms.map(({ programLabel, programImg, reviews, programText, programPrice, projectPath, programNamesOnCart }, index) => (
                                <div key={index}>
                                    <div className='w-full bg-[#F5F5F5] sa:p-8 p-4 rounded-[20px]'>
                                        <div className='sa:mt-5 flex lg:flex-row mk:flex-col mh:flex-row flex-col lg:items-start items-center gap-5'>
                                            <img className='xl:w-[320px] rounded-[20px] sa:w-[220px] xl:h-[200px]' src={programImg} alt={programLabel} />
                                            <div className='flex flex-col mk:items-center mh:items-start items-center lg:items-start gap-1'>
                                                <p className='sa:text-2xl text-xl font-semibold text-[#C0943E] mh:text-start text-center'>{programNamesOnCart}</p>
                                                <p className='sa:text-2xl text-xl font-medium'>{programLabel}</p>
                                                <p className='font-normal sa:text-[17px] lg:text-start mk:text-center mh:text-start text-center'>{programText}</p>
                                                {/* <p className='font-medium text-2xl'>${programPrice}</p> */}
                                                <div className="flex mt-3 items-center gap-3">
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
                                                    className='text-red-500 mt-3 text-sm flex mk:items-center mh:items-start items-center lg:items-start gap-2 cursor-pointer'>
                                                    Remove <TbTrash />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='w-full mk:w-[500px] bg-[#F5F5F5] text-black rounded-[20px] p-8'>
                            <div className='flex items-center justify-between border-b border-[#979797] pb-4'>
                                <p className='sa:text-lg font-medium'>Order Summary</p>
                                <p className='sa:text-lg font-normal text-black'>
                                    {addedPrograms.length} Course{addedPrograms.length > 1 && 's'}
                                </p>
                            </div>
                            <div className='flex items-center justify-between border-b pt-4 border-[#979797] pb-4'>
                                <p className='sa:text-xl text-lg font-semibold'>Total:</p>
                                <p className='sa:text-xl text-lg font-semibold'>${subtotal.toFixed(2)} <br /> (#{subtotalInNG.toLocaleString()})</p>
                            </div>
                            <button
                                onClick={() => setOpenModal(true)}
                                className='sa:text-[20px] font-normal mt-7 flex items-center justify-center gap-4 py-[14px] px-[10px] w-full bg-[#C0943E] rounded-full text-white'>
                                Proceed to Checkout <FaArrowRight />
                            </button>
                        </div>
                    </div>

                    {suggestedPrograms.length > 0 && (
                        <>
                            <p className='font-bold sd:text-[32px] text-2xl mt-12 text-center mb-2'>You might also like</p>
                            <div className='gri flex flex-wrap items-center justify-center mk:grid-cols-4 sd:grid-cols-2 gap-8 md:px-24 px-2'>
                                {suggestedPrograms.map(({ programImg, programLabel, programText, programPrice, projectPath, programNamesOnCart }, i) => (
                                    <div key={i} className='bg-[#002B5B26] h-[480px] mk:w-[370px] sh:w-[250px] flex flex-col gap-1 rounded-[20px] justify-between'>
                                        <div className='flex flex-col gap-2'>
                                            <img className='w-full h-[170px] rounded-t-[20px] hover:scale-95 transition-all duration-700 object-cover' src={programImg} alt="" />
                                            <p className='sa:text-2xl text-xl pt-4 px-4 font-semibold'>{programNamesOnCart}</p>
                                            <p className='sa:text-[20px] text-lg pt-3 px-4 font-medium'>{programLabel}</p>
                                            <p className='sa:text-[17px] pt-3 px-4 font-normal'>{programText}</p>
                                        </div>
                                        <div className='flex justify-between sa:mt-7 mb-3 p-4'>
                                            <Link onClick={() => window.scrollTo(0, 0)} to={projectPath}>
                                                <button
                                                    className='flex items-center  text-[#C0943E] rounded-[5px] p-2 font-medium gap-2'>
                                                    Enroll Now
                                                    <HiMiniArrowRight className='' />
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
                            <form onSubmit={apply} className='rounded-[30px] overflow-y-aut h-ful relative overflow-x-hidden 3xl:w-[60%] sm:w-[70%] sa:m-5 w-full flex flex-col 3xl:gap-6 gap-3 z-50  shadow-md shadow-[#00000040] border border-[#797979B2] 2xl:p-8 p-4 bg-white'>
                                {modal && (
                                    <div className={`${status.type === 'error' ? 'bg-red-500' : 'bg-green-500'} text-white absolute top-[10px] z-50 right-7 p-3 rounded-md flex items-center text-center justify-between`}>
                                        <p className='md:text-[16px] text-[13px] 3xl:text-[22px] font-bold'>
                                            {status.type === 'error' ? `${status.message}` : `${status.message}. Redirecting...`}
                                        </p>
                                    </div>
                                )}

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
                                            value={form.firstname}
                                            onChange={handleChange}
                                            name="firstname"
                                            id=""
                                            required
                                            placeholder='John'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-1 w-full'>
                                        <p className='sd:text-lg font-[350]'>Last Name</p>
                                        <input
                                            className='border border-[#797979B2] outline-none rounded-[7px] w-full py-2 px-3'
                                            type="text"
                                            value={form.lastname}
                                            onChange={handleChange}
                                            name="lastname"
                                            id=""
                                            required
                                            placeholder='Doe'
                                        />
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <div className='flex flex-col gap-1 w-full'>
                                        <p className='sd:text-lg font-[350]'>Whatsapp Number</p>
                                        <input
                                            className='border border-[#797979B2] outline-none rounded-[7px] w-full py-2 px-3'
                                            type="tel"
                                            value={form.phone}
                                            onChange={handleChange}
                                            name="phone"
                                            id=""
                                            required
                                            placeholder='+2348109876543'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-1 w-full'>
                                        <p className='sd:text-lg font-[350]'>Email</p>
                                        <input
                                            className='border border-[#797979B2] outline-none rounded-[7px] w-full py-2 px-3'
                                            type="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            name="email"
                                            id=""
                                            required
                                            placeholder='johndoe@gmail.com'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='sd:text-lg font-[350]'>Selected Program</p>
                                    <input
                                        className='border border-[#797979B2] outline-none rounded-[7px] w-full py-2 px-3'
                                        type="text"
                                        name=""
                                        required
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
                                        required
                                        value={selectedCourse}
                                        id=""
                                    />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='sd:text-lg font-[350]'>Highest Education Level</p>
                                    <select
                                        className='border border-[#797979B2] outline-none rounded-[7px] w-full py-2 px-3'
                                        name="highestEducationLevel"
                                        value={form.highestEducationLevel}
                                        onChange={handleChange}
                                        required
                                        id=""
                                    >
                                        <option value=""></option>
                                        <option className="text-[18px] font-normal" value="ssce">Senior Secondary School Certificate Examination(SSCE)</option>
                                        <option className="text-[18px] font-normal" value="ond">Ordinary National Diploma(OND)</option>
                                        <option className="text-[18px] font-normal" value="hnd">Higher National Diploma(HND)</option>
                                        <option className="text-[18px] font-normal" value="bsc">Bachelor of Sciences(BSc)</option>
                                        <option className="text-[18px] font-normal" value="pdg">Postgraduate Diploma(PGD)</option>
                                        <option className="text-[18px] font-normal" value="masters">Masters Degree</option>
                                    </select>
                                </div>
                                {upload && (
                                    <div className='w-full'>
                                        <p className='sd:text-lg font-[350] pb-2'>Upload Certificate {selectedPrograms === `Associate Bachelor's Degree` ? '(SSCE)' : '(OND, HND or BSc)'}</p>
                                        <label htmlFor="certificate">
                                            <input
                                                type="file"
                                                name="document"
                                                required
                                                id="certificate"
                                                onChange={handleDocumentChange}
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
                                            required
                                            value={applicationFee}
                                            id=""
                                        />
                                    </div>
                                )}
                                <button
                                    type='submit'
                                    className={`text-[21px] text-white font-medium py-2 w-full rounded-[7px] ${submitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#005BC1BF] cursor-pointer'}`}
                                    disabled={submitting}
                                >
                                    {submitting ? (
                                        <div className='flex items-center justify-center gap-3'>
                                            <div className='w-6 h-6 rounded-full border-4 border-[#005BC1BF] border-t-transparent animate-spin'></div>
                                            <p>Loading...</p>
                                        </div>
                                    ) : (
                                        selectedPrograms === "Associate Bachelor's Degree" || selectedPrograms === 'Executive MBA' ? 'Proceed to pay application fee' : 'Proceed'
                                    )}
                                </button>
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