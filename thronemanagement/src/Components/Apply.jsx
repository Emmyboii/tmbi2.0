import { useState } from 'react'
import applyImg from '../Images/applyImg.png'
import applybtn from '../Images/applybtn.png'

const Apply = () => {

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

        const formData = new FormData();
        formData.append("firstname", form.firstname);
        formData.append("lastname", form.lastname);
        formData.append("email", form.email);
        formData.append("phone", form.phone);
        formData.append("courseName", form.courseName);
        formData.append("highestEducationLevel", form.highestEducationLevel);
        formData.append("scholarshipApplied", true)

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
        }
    }


    return (
        <div id='apply' className='mt-7 xl:px-24 sh:pl-16 sh:pr-10 sp:px-7 pt-7 px-4'>
            <div className='flex sm:flex-row flex-col items-center justify-start gap-5'>
                <p className='text-[#ffffff] bg-gradient-to-r from-[#002B5B] via-[#00438E] via-[#004FA7] to-[#005BC1] bg-clip-text text-transparent lf:text-[40px] sp:text-[32px] text-2xl mm:text-start text-center font-bold'>Apply For Scholarships</p>
                <p className='text-sm rounded-full p-[5px] italic font-normal bg-[#C0943E33] border-[#79797980] border shadow-md shadow-[#00000040] fonded'>Limited Slots Available</p>
            </div>
            <div className='flex md:flex-row flex-col justify-between md:gap-5 gap-10 items-end mt-9'>
                <img className='md:max-w-[40%] 2xl:max-w-[30%] max-w-[400px] w-full md:self-end' src={applyImg} alt="" />
                <div className='relative md:pr-10'>
                    <img src={applybtn} className='absolute sd:block hidden bottom-7 size-[100px] md:right-[-70px] right-[-102px] z-30' alt="" />
                    <form onSubmit={apply} className='rounded-[30px] flex flex-col gap-3 relative z-10 shadow-md shadow-[#00000040] border border-[#797979B2] p-4 bg-white'>

                        {modal && (
                            <div className={`${status.type === 'error' ? 'bg-red-500' : 'bg-green-500'} text-white absolute top-[0px] z-50 right-0 p-3 rounded-md flex items-center text-center justify-between`}>
                                <p className='md:text-[16px] text-[13px] 3xl:text-[22px] font-bold'>
                                    {status.type === 'error' ? `${status.message}` : `${status.message}. Redirecting...`}
                                </p>
                            </div>
                        )}
                        <div className='flex flex-col gap-1'>
                            <p className='text-lg font-[350]'>First Name</p>
                            <input
                                className='border border-[#797979B2] outline-none rounded-[15px] w-full py-3 px-3'
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
                                className='border border-[#797979B2] outline-none rounded-[15px] w-full py-3 px-3'
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
                                className='border border-[#797979B2] outline-none rounded-[15px] w-full py-3 px-3'
                                type="number"
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
                                className='border border-[#797979B2] outline-none rounded-[15px] w-full py-3 px-3'
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
                                className='border border-[#797979B2] outline-none rounded-[15px] w-full py-3 px-3'
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
                                className='border border-[#797979B2] outline-none rounded-[15px] w-full py-3 px-3'
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
                        <button type='submit' className='text-[21px] text-white font-medium py-3 w-full bg-[#005BC1BF] rounded-[15px]'>Submit Application</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Apply