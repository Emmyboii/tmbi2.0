import { useEffect, useRef, useState } from 'react';
import Logo from '../Images/Logo.png'
import pro1 from '../Images/program1.webp'
import pro2 from '../Images/program2.webp'
import pro3 from '../Images/program3.webp'
import pro4 from '../Images/program4.webp'
import pro5 from '../Images/program5.webp'
import pro6 from '../Images/program6.webp'
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { MdMenu, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = ({ addedPrograms }) => {

  const [programs, setPrograms] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  const hideTimeout = useRef(null);

  const handleMouseEnter = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setPrograms(true);
  };

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setPrograms(false);
    }, 300); // You can tweak this delay (in milliseconds)
  };

  const [smScreens, setSmScreens] = useState(window.innerWidth < 500)

  useEffect(() => {
    const handleResize = () => {
      setSmScreens(window.innerWidth > 900)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [smScreens])

  return (
    <div className='flex items-center justify-between xl:px-16 w-full mf:px-2 sa:px-10 px-4 py-3 border-b-[0.5px] border-[#797979B2]'>
      <Link to='/'>
        <img className='w-32' src={Logo} alt="" />
      </Link>
      <div className='mf:flex hidden items-center gap-6 ml-[120px] xl:text-[14px] text-xs font-normal'>
        <Link to='/'>
          <p onClick={() => setPrograms(false)} className='flex gap-[5px] items-center'>
            HOME
            <HiMiniArrowUpRight />
          </p>
        </Link>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <p className='flex gap-[5px] cursor-pointer items-center'>
            PROGRAMS
            <MdOutlineKeyboardArrowDown className={`transition-transform duration-300 ${programs ? 'rotate-180' : ''}`} />
          </p>

          {programs && (
            <div
              className='bg-white shadow-lg px-[150px] absolute left-0 w-full z-50 grid grid-cols-3 gap-y-7 gap-x-4 top-[88px] p-5 border border-gray-200'>
              <Link onClick={() => setPrograms(false)} to='/associate-bachelor-degree' className='hover:text-blue-600 transition'>
                <div>
                  <img className='h-[210px] object-cover w-full' src={pro1} alt="" />
                  <p className='py-2'>Associate Bachelor's Degree</p>
                </div>
              </Link>

              <Link onClick={() => setPrograms(false)} to='/executive-mba' className='hover:text-blue-600 transition'>
                <div className='bg-blac'>
                  <img className='h-[210px] object-cover w-full' src={pro2} alt="" />
                  <p className='py-2'>Executive MBA</p>
                </div>
              </Link>

              <Link onClick={() => setPrograms(false)} to='/executive-advanced-diploma' className='hover:text-blue-600 transition'>
                <div>
                  <img className='h-[210px] object-cover w-full' src={pro3} alt="" />
                  <p className='py-2'>Executive Advanced Diploma</p>
                </div>
              </Link>

              <Link onClick={() => setPrograms(false)} to='/mini-mba' className='hover:text-blue-600 transition'>
                <div>
                  <img className='h-[210px] object-cover w-full' src={pro4} alt="" />
                  <p className='py-2'>Executive Mini MBA</p>
                </div>
              </Link>

              <Link onClick={() => setPrograms(false)} to='/professional-certificate' className='hover:text-blue-600 transition'>
                <div>
                  <img className='h-[210px] object-cover w-full' src={pro5} alt="" />
                  <p className='py-2'>Professional Certificate</p>
                </div>
              </Link>

              <Link onClick={() => setPrograms(false)} to='/executive-diploma' className='hover:text-blue-600 transition'>
                <div>
                  <img className='h-[210px] object-cover w-full' src={pro6} alt="" />
                  <p className='py-2'>Executive Diploma</p>
                </div>
              </Link>

            </div>
          )}
        </div>

        <Link to='/articles'>
          <p onClick={() => setPrograms(false)} className='flex gap-[5px] items-center'>
            ARTICLES
            <HiMiniArrowUpRight />
          </p>
        </Link>
        <Link to='/about'>
          <p onClick={() => setPrograms(false)} className='flex gap-[5px] items-center'>
            ABOUT US
            <HiMiniArrowUpRight />
          </p>
        </Link>
        <Link to='/cart'>
          <div onClick={() => setPrograms(false)} className='flex relative gap-[5px] items-center'>
            <p>CART</p>
            <div className='relative'>
              <MdOutlineShoppingCart className='text-xl' />
              <p className='bg-red-500 px-[6px] py-[3px] rounded-full top-[-10px] right-[-10px] text-white absolute'>{addedPrograms.length}</p>
            </div>
          </div>
        </Link>
      </div>
      <div className='text-[12px] font-normal mf:flex hidden gap-3'>
        <button className='py-[10px] px-3 rounded-[5px] border-2 border-[#FFFFFF80] text-white bg-gradient-to-r from-[#C0943E] to-[#5A451D]'>APPLY NOW</button>
        <button className='py-[10px] px-3 rounded-[5px] border-2 border-[#FFFFFF80] text-white bg-gradient-to-r from-[#005BC1] to-[#002B5B]'>EXPLORE PROGRAMS</button>
      </div>

      <div className='flex items-center gap-5'>
        <Link to='/cart'>
          <div onClick={() => setPrograms(false)} className='flex mf:hidden relative gap-[5px] items-center'>
            <p>CART</p>
            <div className='relative'>
              <MdOutlineShoppingCart className='text-xl' />
              <p className='bg-red-500 px-[6px] py-[0px] rounded-full top-[-10px] right-[-10px] text-white absolute'>{addedPrograms.length}</p>
            </div>
          </div>
        </Link>
        <MdMenu onClick={() => setOpenMenu(!openMenu)} className='cursor-pointer sa:text-[30px] text-2xl mf:hidden block' />
      </div>

      <div className={`absolute sa:top-[87px] top-16 left-0 z-50 sa:p-7 p-4 flex mf:hidden flex-col gap-6 bg-white transition-all duration-300 w-full
  ${openMenu ? 'h-[405px] opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'}`}>
        <div className='flex flex-col items-start gap-6 xl:text-[14px] text-xs font-normal'>
          <Link to='/'>
            <p onClick={() => setOpenMenu(false)} className='flex cursor-pointer gap-[5px] items-center'>
              HOME
              <HiMiniArrowUpRight />
            </p>
          </Link> <hr className='border w-full border-black/40' />
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p className='flex gap-[5px] cursor-pointer items-center'>
              PROGRAMS
              <MdOutlineKeyboardArrowDown className={`transition-transform duration-300 ${programs ? 'rotate-180' : ''}`} />
            </p>

            {programs && (
              <div
                className='bg-white shadow-lg absolute left-0 w-full z-50 grid md:grid-cols-3 grid-cols-2 gap-y-7 gap-x-4 top-32 p-5 border border-gray-200'>
                <Link onClick={() => {
                  setOpenMenu(false)
                  setPrograms(false)
                }}
                  to='/associate-bachelor-degree' className='hover:text-blue-600 transition'>
                  <div>
                    <img className='h-[210px] object-cover w-full' src={pro1} alt="" />
                    <p className='py-2'>Associate Bachelor's Degree</p>
                  </div>
                </Link>

                <Link onClick={() => {
                  setOpenMenu(false)
                  setPrograms(false)
                }}
                  to='/executive-mba' className='hover:text-blue-600 transition'>
                  <div className='bg-blac'>
                    <img className='h-[210px] object-cover w-full' src={pro2} alt="" />
                    <p className='py-2'>Executive MBA</p>
                  </div>
                </Link>

                <Link onClick={() => {
                  setOpenMenu(false)
                  setPrograms(false)
                }}
                  to='/executive-advanced-diploma' className='hover:text-blue-600 transition'>
                  <div>
                    <img className='h-[210px] object-cover w-full' src={pro3} alt="" />
                    <p className='py-2'>Executive Advanced Diploma</p>
                  </div>
                </Link>

                <Link onClick={() => {
                  setOpenMenu(false)
                  setPrograms(false)
                }}
                  to='/mini-mba' className='hover:text-blue-600 transition'>
                  <div>
                    <img className='h-[210px] object-cover w-full' src={pro4} alt="" />
                    <p className='py-2'>Executive Mini MBA</p>
                  </div>
                </Link>

                <Link onClick={() => {
                  setOpenMenu(false)
                  setPrograms(false)
                }}
                  to='/professional-certificate' className='hover:text-blue-600 transition'>
                  <div>
                    <img className='h-[210px] object-cover w-full' src={pro5} alt="" />
                    <p className='py-2'>Professional Courses</p>
                  </div>
                </Link>

                <Link onClick={() => {
                  setOpenMenu(false)
                  setPrograms(false)
                }}
                  to='/executive-diploma' className='hover:text-blue-600 transition'>
                  <div>
                    <img className='h-[210px] object-cover w-full' src={pro6} alt="" />
                    <p className='py-2'>Executive Diploma</p>
                  </div>
                </Link>

              </div>
            )}
          </div> <hr className='border w-full border-black/40' />

          <Link to='/articles'>
          <p onClick={() => setOpenMenu(false)} className='flex cursor-pointer gap-[5px] items-center'>
            ARTICLES
            <MdOutlineKeyboardArrowDown />
          </p> <hr className='border w-full border-black/40' />
          </Link>
          <Link to='/about'>
            <p onClick={() => setOpenMenu(false)} className='flex cursor-pointer gap-[5px] items-center'>
              ABOUT US
              <HiMiniArrowUpRight />
            </p>
          </Link>
        </div>
        <div className='text-[12px] font-normal flex flex-col gap-3'>
          <button className='py-[10px] px-3 rounded-[5px] border-2 border-[#FFFFFF80] text-white bg-gradient-to-r from-[#C0943E] to-[#5A451D]'>APPLY NOW</button>
          <button className='py-[10px] px-3 rounded-[5px] border-2 border-[#FFFFFF80] text-white bg-gradient-to-r from-[#005BC1] to-[#002B5B]'>EXPLORE PROGRAMS</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar