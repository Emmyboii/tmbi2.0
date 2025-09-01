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
    const [documents, setDocuments] = useState(null)
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
        if (openModal) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
            setForm({
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                highestEducationLevel: '',
            })
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [openModal])

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
        if (e.target.files && e.target.files[0]) {
            setDocuments(e.target.files[0]); // Save actual File
        }
    };


    useEffect(() => {
        if (selectedPrograms === "Associate Bachelor's Degree" || selectedPrograms === 'Executive MBA') {
            setUpload(true)
        }
    }, [selectedPrograms])

    const apply = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        // ✅ File size validation (5MB)
        const maxFileSize = 5 * 1024 * 1024; // 5MB
        if (document && document.size > maxFileSize) {
            setStatus({ message: "File too large. Maximum size allowed is 5MB.", type: "error" });
            setModal(true);
            setSubmitting(false);
            return;
        }


        const formData = new FormData();
        formData.append("firstname", form.firstname);
        formData.append("lastname", form.lastname);
        formData.append("email", form.email);
        formData.append("phone", form.phone);
        formData.append("programApplied", program);
        formData.append("courseName", selectedCourse);
        formData.append("highestEducationLevel", form.highestEducationLevel);
        if (documents) {
            formData.append("document", documents, documents.name);
        }

        try {
            const res = await fetch("https://devm.westus2.cloudapp.azure.com/thorne/api/apply", {
                method: "POST",
                body: formData,
            });
            const data = await res.json();

            if (!res.ok) {
                setStatus({
                    message: "Sorry, an error occurred. Please try again later or contact the admin",
                    type: "error",
                });
                setModal(true);
                return;
            }

            setStatus({ message: "Application Submitted successfully", type: "success" });
            setModal(true);

            console.log("Application saved:", data);

            const applicantId = data.data?._id;

            if (!applicantId) {
                console.error("No applicant_id returned from API:", data);
                return;
            }

            // ✅ Fetch checkout details
            const res2 = await fetch(
                selectedPrograms === "Associate Bachelor's Degree" || selectedPrograms === "Executive MBA"
                    ? `https://devm.westus2.cloudapp.azure.com/thorne/api/apply/${applicantId}/checkout-apply`
                    : `https://devm.westus2.cloudapp.azure.com/thorne/api/apply/${applicantId}/checkout-course`
            );

            const data2 = await res2.json();
            console.log("Checkout response:", data2);

            const url = data2.authorization_url;

            if (url && /^https?:\/\//i.test(url)) {
                // fallback if tab was blocked/closed
                window.open(url, "_blank", "noopener,noreferrer");
            } else {
                console.error("No valid authorization_url in response:", data2);
            }
        } catch (err) {
            console.error("Error:", err);
        } finally {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            if (modal) {
                setModal(false)
                setStatus({ message: '', type: '' })
            }
        }, 3500);
    }, [modal])

    return (
        <div className="xl:px-24 sh:px-16 px-7 py-10 flex flex-col gap-8">
            {addedPrograms.length > 0 ? (
                <p className="text-[30px] font-bold text-[#000000]">Cart</p>
            ) : (
                <p className="text-[30px] text-center font-bold text-[#000000]">Cart</p>
            )}

            <hr className="w-full border-[#F5F5F5] border" />

            {addedPrograms.length > 0 ? (
                <>
                    {/* ✅ Responsive Cart Layout */}
                    <div className="flex flex-col lg:flex-row items-start gap-10">

                        {/* Left - Programs */}
                        <div className="w-full flex flex-col gap-6">
                            {addedPrograms.map(
                                ({ programLabel, programImg, reviews, programText, projectPath, programNamesOnCart }, index) => (
                                    <div key={index} className="bg-[#F5F5F5] p-5 rounded-[20px]">
                                        <div className="flex flex-col md:flex-row gap-5 items-center md:items-start">

                                            {/* ✅ Responsive Image */}
                                            <img
                                                className="w-full md:w-[220px] lg:w-[300px] rounded-[20px] object-cover"
                                                src={programImg}
                                                alt={programLabel}
                                            />

                                            {/* Text */}
                                            <div className="flex flex-col gap-2 text-center md:text-left">
                                                <p className="text-xl md:text-2xl font-semibold text-[#C0943E]">{programNamesOnCart}</p>
                                                <p className="text-lg font-medium">{programLabel}</p>
                                                <p className="text-sm md:text-base">{programText}</p>

                                                {/* Reviews */}
                                                <div className="flex mt-3 items-center justify-center md:justify-start gap-3">
                                                    <img className="w-[120px] md:w-[160px]" src={stars} alt="reviews" />
                                                    <p>({reviews}+ Reviews)</p>
                                                </div>

                                                {/* Remove */}
                                                <p
                                                    onClick={() => {
                                                        const stored = localStorage.getItem("programsData");
                                                        let allPrograms = stored ? JSON.parse(stored) : ProgramDetails;

                                                        const updated = allPrograms.map((category) => {
                                                            const updatedDetails = category.programDetails.map((p) => {
                                                                if (p.projectPath === projectPath) {
                                                                    return { ...p, addToCart: false };
                                                                }
                                                                return p;
                                                            });
                                                            return { ...category, programDetails: updatedDetails };
                                                        });

                                                        localStorage.setItem("programsData", JSON.stringify(updated));
                                                        window.dispatchEvent(new Event("cartUpdated"));
                                                    }}
                                                    className="text-red-500 mt-3 text-sm flex items-center gap-2 cursor-pointer justify-center md:justify-start"
                                                >
                                                    Remove <TbTrash />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>

                        {/* Right - Order Summary ✅ */}
                        <div className="w-full lg:w-[400px] bg-[#F5F5F5] rounded-[20px] p-6 flex flex-col">
                            <div className="flex items-center justify-between border-b border-[#979797] pb-4">
                                <p className="text-lg font-medium">Order Summary</p>
                                <p className="text-lg">
                                    {addedPrograms.length} Course{addedPrograms.length > 1 && "s"}
                                </p>
                            </div>
                            <div className="flex items-center justify-between border-b pt-4 border-[#979797] pb-4">
                                <p className="text-lg font-semibold">Total:</p>
                                <p className="text-lg font-semibold">
                                    ${subtotal.toFixed(2)} <br /> (#{subtotalInNG.toLocaleString()})
                                </p>
                            </div>
                            <button
                                onClick={() => setOpenModal(true)}
                                className="mt-6 py-3 w-full bg-[#C0943E] rounded-full text-white font-medium flex items-center justify-center gap-3"
                            >
                                Proceed to Checkout <FaArrowRight />
                            </button>
                        </div>
                    </div>

                    {/* ✅ Suggested Programs */}
                    {suggestedPrograms.length > 0 && (
                        <>
                            <p className="font-bold text-2xl md:text-3xl mt-12 text-center mb-6">You might also like</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {suggestedPrograms.map(
                                    ({ programImg, programLabel, programText, projectPath, programNamesOnCart }, i) => (
                                        <div
                                            key={i}
                                            className="bg-[#002B5B26] flex flex-col rounded-[20px] overflow-hidden"
                                        >
                                            <img
                                                className="w-full h-[180px] object-cover"
                                                src={programImg}
                                                alt=""
                                            />
                                            <div className="flex flex-col gap-2 p-4">
                                                <p className="text-xl font-semibold">{programNamesOnCart}</p>
                                                <p className="text-lg font-[545]">{programLabel}</p>
                                                <p className="text-sm">{programText}</p>
                                            </div>
                                            <div className="flex justify-between items-center p-4">
                                                <Link onClick={() => window.scrollTo(0, 0)} to={projectPath}>
                                                    <button className="flex items-center text-[#C0943E] gap-2 font-medium">
                                                        Enroll Now <HiMiniArrowRight />
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                )}
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
                                            maxLength={11}
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
                                        <div className='flex mk:flex-row flex-col mk:gap-2 pb-2'>
                                            <p className='sd:text-lg font-[350'>Upload Certificate {selectedPrograms === `Associate Bachelor's Degree` ? '(SSCE)' : '(OND, HND or BSc)'}</p>
                                            <small className="text-gray-500 mt-1">
                                                Allowed formats: PDF, DOC, DOCX, JPG, PNG — <span className="font-semibold">Max size 5MB</span>
                                            </small>
                                        </div>
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
                                    className={`text-[21px] text-white font-medium py-2 w-full rounded-[7px] ${submitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#002B5B] cursor-pointer'}`}
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
                <p className="text-xl text-center">No Course added to cart yet.</p>
            )}
        </div>
    )
}

export default Cart