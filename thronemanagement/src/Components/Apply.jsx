import { useEffect, useState } from 'react'
import applyImg from '../NewImages/apply.webp'
import target2 from '../NewImages/target2.webp'

const Apply = () => {

    const [submitting, setSubmitting] = useState(false)
    const [status, setStatus] = useState({ message: '', type: '' })
    const [modal, setModal] = useState(false)
    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        courseName: '',
        highestEducationLevel: '',
    })

    const handleChange = (e) => {
        const { value, name } = e.target

        setForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const apply = async (e) => {
        e.preventDefault();

        setSubmitting(true)

        const formData = new FormData();
        formData.append("firstname", form.firstname);
        formData.append("lastname", form.lastname);
        formData.append("email", form.email);
        formData.append("phone", form.phone);
        formData.append("courseName", form.courseName);
        formData.append("highestEducationLevel", form.highestEducationLevel);
        formData.append("scholarshipApplied", true)

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
            }

            setStatus({ message: 'Application Submitted successfully', type: 'success' })
            setModal(true)

            console.log("Application saved:", data);

            // const applicantId = data._id;

            // if (applicantId) {
            //     // Redirect to Paystack checkout page
            //     if (selectedPrograms === "Associate Bachelor's Degree" || selectedPrograms === 'Executive MBA') {
            //         window.location.href = `https://w3hwvtdm-5000.uks1.devtunnels.ms/api/apply/${applicantId}/checkout-apply`;
            //     } else {
            //         window.location.href = `https://w3hwvtdm-5000.uks1.devtunnels.ms/api/apply/${applicantId}/checkout`;
            //     }
            // } else {
            //     console.error("No applicant_id returned from API");
            // }
        } catch (err) {
            console.error("Error:", err);
        } finally {
            setSubmitting(false)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            if (modal) {
                setModal(false)
                setStatus({ message: '', type: '' })
            }
        }, 3500);
    }, [modal])

    return (
        <div id='apply' className='xl:px-32 md:p-16 p-5 py-10 xl:py-20 bg-[#F5F5F5]'>
            <p className="sq:py-3 py-2 px-[9px] rounded-full mx-auto sa:w-[300px] sk:w-[270px] w-[300px] flex items-center justify-center sk:gap-3 gap-1 border-[3px] border-[#C0943E] bg-transparent text-[#C0943E] sa:text-[18px] text-base font-medium">
                <img className='sm:w-auto w-7' src={target2} alt="" />
                Limited Slots Available
            </p>
            <p className='text-black lf:text-[40px] mt-12 sp:text-[32px] text-2xl text-center font-bold'>Apply For Scholarships</p>
            <div className='flex mk:flex-row flex-col-reverse items-center mk:items-stretch justify-between md:gap-5 gap-10 sq:mt-20 mt-10'>
                <img className='3xl:max-w-[30%] lf:max-w-[500px] mk:h-auto sa:h-[700px] mk:max-w-[50%]' src={applyImg} alt="" />
                <div className='relative'>
                    <form onSubmit={apply} className='rounded-[40px] flex flex-col gap-6 relative z-10 shadow-custom-sp shadow-[#00000040] lg:px-16 px-5 py-14 bg-white'>

                        {modal && (
                            <div className={`${status.type === 'error' ? 'bg-red-500' : 'bg-green-500'} text-white absolute top-[0px] z-50 right-0 p-3 rounded-md flex items-center text-center justify-between`}>
                                <p className='md:text-[16px] text-[13px] 3xl:text-[22px] font-bold'>
                                    {status.type === 'error' ? `${status.message}` : `${status.message}.`}
                                </p>
                            </div>
                        )}

                        <p className='text-black lf:text-[40px] sp:text-[32px] text-2xl text-center font-bold'>Application Form</p>
                        <div className='flex flex-col gap-1'>
                            <p className='text-lg font-[350]'>First Name</p>
                            <input
                                className='border-2 border-[#797979B2] outline-none rounded-[12px] w-full sq:py-4 py-3 sq:px-3 px-2'
                                type="text"
                                value={form.firstname}
                                onChange={handleChange}
                                name="firstname"
                                id=""
                                required
                                placeholder='John'
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-lg font-[350]'>Last Name</p>
                            <input
                                className='border-2 border-[#797979B2] outline-none rounded-[12px] w-full sq:py-4 py-3 sq:px-3 px-2'
                                type="text"
                                value={form.lastname}
                                onChange={handleChange}
                                name="lastname"
                                id=""
                                required
                                placeholder='Doe'
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-lg font-[350]'>Whatsapp Number</p>
                            <input
                                className='border-2 border-[#797979B2] outline-none rounded-[12px] w-full sq:py-4 py-3 sq:px-3 px-2'
                                type="tel"
                                value={form.phone}
                                onChange={handleChange}
                                name="phone"
                                id=""
                                required
                                placeholder='+2348109876543'
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-lg font-[350]'>Email</p>
                            <input
                                className='border-2 border-[#797979B2] outline-none rounded-[12px] w-full sq:py-4 py-3 sq:px-3 px-2'
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                name="email"
                                id=""
                                required
                                placeholder='johndoe@gmail.com'
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-lg font-[350]'>Highest Education Level</p>
                            <select
                                className='border-2 border-[#797979B2] outline-none rounded-[12px] w-full sq:py-4 py-3 sq:px-3 px-2'
                                value={form.highestEducationLevel}
                                name="highestEducationLevel"
                                onChange={handleChange}
                                id=""
                                required
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
                        <div className='flex flex-col gap-1'>
                            <p className='text-lg font-[350]'>Available Programs</p>
                            <select
                                className='border-2 border-[#797979B2] outline-none rounded-[12px] w-full sq:py-4 py-3 sq:px-3 px-2'
                                name="courseName"
                                value={form.courseName}
                                onChange={handleChange}
                                id=""
                                required
                            >
                                <option className="text-[18px]" value="">Available Programme(s)</option>
                                <optgroup className="text-[22px]" label="Associate Bachelor's Degree's (ABD)">
                                    <option className="text-[18px] font-[500]" value="Social Media Management(ABD)">
                                        Social Media Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Customer Service(ABD)">
                                        Customer Service
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Human Resource Management(ABD)">
                                        Human Resource Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Project Management(ABD)">
                                        Project Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Risk Management(ABD)">
                                        Risk Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Sales Management(ABD)">
                                        Sales Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Information Management(ABD)">
                                        Information Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Supply Chain Management(ABD)">
                                        Supply Chain Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Marketing(ABD)">
                                        Marketing
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Accounting(ABD)">
                                        Accounting
                                    </option>
                                </optgroup>
                                <optgroup className="text-[22px]" label="Executive MBA Program">
                                    <option className="text-[18px] font-[500]" value="Business Management (MBA)">
                                        Business Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Marketing (MBA)">
                                        Marketing
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Human Resources (MBA)">
                                        Human Resources
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Risk Management (MBA)">
                                        Risk Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Supply Chain Management (MBA)">
                                        Supply Chain Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Project Management (MBA)">
                                        Project Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Information Technology (MBA)">
                                        Information Technology
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Sales Management (MBA)">
                                        Sales Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Accounting (MBA)">
                                        Accounting
                                    </option>
                                </optgroup>
                            </select>
                        </div>
                        <button
                            type='submit'
                            className={`text-[21px] text-white font-medium mt-1 sq:py-4 py-3 w-full rounded-full ${submitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#002B5B] cursor-pointer'}`}
                            disabled={submitting}
                        >
                            {submitting ? (
                                <div className='flex items-center justify-center gap-3'>
                                    <div className='w-6 h-6 rounded-full border-4 border-[#005BC1BF] border-t-transparent animate-spin'></div>
                                    <p>Loading...</p>
                                </div>
                            ) : (
                                <p>Submit Application</p>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Apply