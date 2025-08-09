import { FaCheck, FaTimes } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import ProgramDetails from './ProgramDetails';
import { Link, useNavigate } from 'react-router-dom';

const Cart = ({ openCart, setOpenCart, addedPrograms, suggestedPrograms }) => {

    const navigate = useNavigate()

    const subtotal = addedPrograms.reduce((acc, item) => acc + parseFloat(item.programPrice), 0);

    const [onScroll, setOnScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setOnScroll(window.scrollY > 40)
        }

        window.addEventListener('scroll', handleScroll)

        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {openCart && addedPrograms.length > 0 && (
                <div className={`fixed sh:max-w-[420px] 3xl:max-w-[700px] flex flex-col z-50 gap-3 w-full sh:right-10 h-[90%] overflow-y-auto bg-white shadow-custom-input shadow-[#002B5B80] pt-5 pb-5 px-3 ${onScroll ? 'sh:top-2 top-0' : 'sh:top-[92px] top-[0px]'}`}>
                    <div className='flex items-center justify-center'>
                        <FaTimes onClick={() => setOpenCart(false)} className='absolute left-2 text-lg cursor-pointer' />
                        <p className='text-[21px] text-center font-medium'>Subtotal ({addedPrograms.length} {addedPrograms.length === 1 ? 'Item' : 'Items'}):  ${subtotal}</p>
                    </div>
                    <button
                        onClick={() => {
                            navigate('/cart')
                            setOpenCart(false)
                            window.scrollTo(0, 0)
                        }}
                        disabled={addedPrograms.length === 0}
                        className={`text-[20px] font-medium py-[14px] px-[10px] w-full bg-[#002B5B] text-white ${addedPrograms.length <= 0 && 'bg-[#1b4574]'}`}>
                        Proceed to Cart ({addedPrograms.length} {addedPrograms.length <= 1 ? 'Item' : 'Items'})
                    </button>

                    {addedPrograms.map(({ programLabel, programPrice, programImg, projectPath, programNamesOnCart }, index) => (
                        <div key={projectPath + index} className='border border-[#79797940] flex items-center w-full gap-3 bg-[#D8D8D826] py-3 px-2'>
                            <img className='w-[90px] h-[62px] object-cover' src={programImg} alt={programLabel} />
                            <div className='flex flex-col gap-1 w-full'>
                                <p className='text-base font-semibold'>{programNamesOnCart}</p>
                                <p className='font-normal text-[17px]'>{programLabel}</p>
                                <p className='font-normal text-[19px]'>${programPrice}</p>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='flex items-center gap-2'>
                                        <div className='bg-[#002B5B] text-white w-auto rounded-full p-[2px] text-xs'>
                                            <FaCheck />
                                        </div>
                                        <p className='font-normal text-[14px]'>Added to cart</p>
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
                                            if (addedPrograms.length === 1) {
                                                setOpenCart(false)
                                            }
                                        }}
                                        className='text-red-500 text-sm cursor-pointer'>
                                        Remove
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {suggestedPrograms.length > 0 && (
                        <>
                            <hr className='border border-[#797979B2]' />
                            <p className='font-medium text-[19px] mb-2'>You might also like...</p>
                            {suggestedPrograms.map((program, index) => (
                                <div key={program.projectPath + index} className='border border-[#79797940] flex items-center gap-3 w-full bg-[#D8D8D826] py-3 px-2'>
                                    <img className='w-[90px] h-[62px] object-cover' src={program.programImg} alt={program.programLabel} />
                                    <div className='flex flex-col gap-1 items-start w-full'>
                                        <p className='text-base font-semibold'>{program.programNamesOnCart}</p>
                                        <p className='font-normal text-[19px]'>{program.programLabel}</p>
                                        <p className='font-normal text-[19px]'>${program.programPrice}</p>
                                        <div className='flex items-center justify-between w-full'>
                                            <button
                                                onClick={() => {
                                                    const stored = localStorage.getItem('programsData');
                                                    let allPrograms = stored ? JSON.parse(stored) : ProgramDetails;

                                                    const updated = allPrograms.map(category => {
                                                        const updatedDetails = category.programDetails.map(p => {
                                                            if (p.projectPath === program.projectPath) {
                                                                return { ...p, addToCart: true };
                                                            }
                                                            return p;
                                                        });
                                                        return { ...category, programDetails: updatedDetails };
                                                    });

                                                    localStorage.setItem('programsData', JSON.stringify(updated));
                                                    window.dispatchEvent(new Event('cartUpdated'));
                                                    setOpenCart(true)
                                                }}
                                                className='text-[14px] font-medium rounded-md p-[10px] bg-[#002B5B] text-white'
                                            >
                                                Add to cart
                                            </button>

                                            <Link onClick={() => window.scrollTo(0, 0)} to={program.projectPath}>
                                                <p className='text-[#002B5B]'>View</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            )}
        </>
    )
}

export default Cart