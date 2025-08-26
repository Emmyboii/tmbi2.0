import { useEffect, useRef, useState } from 'react';
import Logo from '../NewImages/logo.png'
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
    <div className='flex items-center 3xl:text-xl xl:text-lg text-sm justify-between xl:px-16 w-full sticky z-50 top-0 left-0 mf:px-2 sa:px-10 px-4 py-4 bg-[#002B5B] text-white'>
      <div>
        <Link to='/'>
          <img className='2xl:w-40 w-32' src={Logo} alt="" />
        </Link>
      </div>
      <div className='mf:flex hidden items-center gap-10 flex-1 justify-center font-normal'>
        <Link to='/'>
          <p onClick={() => setPrograms(false)} className='flex gap-[5px] items-center'>
            Home
          </p>
        </Link>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <p className='flex gap-[5px] cursor-pointer items-center'>
            Programs
            <MdOutlineKeyboardArrowDown className={`transition-transform duration-300 ${programs ? 'rotate-180' : ''}`} />
          </p>
          {programs && (
            <div
              className='bg-white shadow-md rounded shadow-[#FFFFFF40] text-black absolute left-[39%] z-50 gap-3 flex flex-col top-[88px] p-5 border border-gray-200'>
              <Link onClick={() => setPrograms(false)} to='/associate-bachelor-degree' className='hover:text-blue-600 transition'>
                <div>
                  <p className='py-2'>Associate Bachelor's Degree</p>
                </div>
              </Link>

              <Link onClick={() => setPrograms(false)} to='/executive-mba' className='hover:text-blue-600 transition'>
                <div className='bg-blac'>
                  <p className='py-2'>Executive MBA</p>
                </div>
              </Link>

              <Link onClick={() => setPrograms(false)} to='/executive-advanced-diploma' className='hover:text-blue-600 transition'>
                <div>
                  <p className='py-2'>Executive Advanced Diploma</p>
                </div>
              </Link>

              <Link onClick={() => setPrograms(false)} to='/mini-mba' className='hover:text-blue-600 transition'>
                <div>
                  <p className='py-2'>Executive Mini MBA</p>
                </div>
              </Link>

              <Link onClick={() => setPrograms(false)} to='/professional-certificate' className='hover:text-blue-600 transition'>
                <div>
                  <p className='py-2'>Professional Certificate</p>
                </div>
              </Link>

              <Link onClick={() => setPrograms(false)} to='/executive-diploma' className='hover:text-blue-600 transition'>
                <div>
                  <p className='py-2'>Executive Diploma</p>
                </div>
              </Link>
            </div>
          )}
        </div>

        <Link to='/articles'>
          <p onClick={() => setPrograms(false)} className='flex gap-[5px] items-center'>
            Articles
          </p>
        </Link>
        <Link to='/about'>
          <p onClick={() => setPrograms(false)} className='flex gap-[5px] items-center'>
            About Us
          </p>
        </Link>
      </div>
      <div className='font-normal mf:flex justify-end items-center hidden gap-5'>
        <a href="#apply">
          <button className='py-[9px] px-6 border-2 border-[#FFFFFF80] bg-white text-[#002B5B] rounded-full'>Enroll Now</button>
        </a>
        <Link to='/cart'>
          <div onClick={() => setPrograms(false)} className='flex relative gap-[5px] items-center'>
            <p>Cart</p>
            <div className='relative'>
              <MdOutlineShoppingCart className='text-2xl' />
              <p className="bg-red-500 w-6 h-6 flex items-center justify-center rounded-full 
               top-[-13px] right-[-13px] text-white text-sm leading-none absolute m-0 p-0">
                {addedPrograms.length}
              </p>

            </div>
          </div>
        </Link>
      </div>

      <div className='flex items-center gap-5'>
        <Link to='/cart'>
          <div onClick={() => setPrograms(false)} className='flex mf:hidden relative gap-[5px] items-center'>
            <p>Cart</p>
            <div className='relative'>
              <MdOutlineShoppingCart className='text-xl' />
              <p className="bg-red-500 w-6 h-6 flex items-center justify-center rounded-full 
               top-[-13px] right-[-13px] text-white text-sm leading-none absolute m-0 p-0">
                {addedPrograms.length}
              </p>

            </div>
          </div>
        </Link>
        <MdMenu onClick={() => setOpenMenu(!openMenu)} className='cursor-pointer sa:text-[30px] text-2xl mf:hidden block' />
      </div>

      <div className={`absolute sa:top-[87px] text-black top-16 left-0 z-50 sa:p-7 p-4 flex mf:hidden flex-col gap-6 bg-white transition-all duration-300 w-full
  ${openMenu ? 'min-h-[250px] opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'}`}>
        <div className='flex flex-col items-start gap-6 xl:text-[14px] text-xs font-normal'>
          <Link to='/'>
            <p onClick={() => setOpenMenu(false)} className='flex cursor-pointer gap-[5px] items-center'>
              Home
            </p>
          </Link> <hr className='border w-full border-black/40' />
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p className='flex gap-[5px] cursor-pointer items-center'>
              Programs
              <MdOutlineKeyboardArrowDown className={`transition-transform duration-300 ${programs ? 'rotate-180' : ''}`} />
            </p>

            {programs && (
              <div
                className='bg-white shadow-lg absolute left-32 z-50 gap-3 flex flex-col top-24 rounded p-5 border border-gray-200'>
                <Link onClick={() => {
                  setOpenMenu(false)
                  setPrograms(false)
                }}
                  to='/associate-bachelor-degree' className='hover:text-blue-600 transition'>
                  <div>
                    <p className='py-2'>Associate Bachelor's Degree</p>
                  </div>
                </Link>

                <Link onClick={() => {
                  setOpenMenu(false)
                  setPrograms(false)
                }}
                  to='/executive-mba' className='hover:text-blue-600 transition'>
                  <div className='bg-blac'>
                    <p className='py-2'>Executive MBA</p>
                  </div>
                </Link>

                <Link onClick={() => {
                  setOpenMenu(false)
                  setPrograms(false)
                }}
                  to='/executive-advanced-diploma' className='hover:text-blue-600 transition'>
                  <div>
                    <p className='py-2'>Executive Advanced Diploma</p>
                  </div>
                </Link>

                <Link onClick={() => {
                  setOpenMenu(false)
                  setPrograms(false)
                }}
                  to='/mini-mba' className='hover:text-blue-600 transition'>
                  <div>
                    <p className='py-2'>Executive Mini MBA</p>
                  </div>
                </Link>

                <Link onClick={() => {
                  setOpenMenu(false)
                  setPrograms(false)
                }}
                  to='/professional-certificate' className='hover:text-blue-600 transition'>
                  <div>
                    <p className='py-2'>Professional Courses</p>
                  </div>
                </Link>

                <Link onClick={() => {
                  setOpenMenu(false)
                  setPrograms(false)
                }}
                  to='/executive-diploma' className='hover:text-blue-600 transition'>
                  <div>
                    <p className='py-2'>Executive Diploma</p>
                  </div>
                </Link>

              </div>
            )}
          </div> <hr className='border w-full border-black/40' />

          <Link to='/articles'>
            <p onClick={() => setOpenMenu(false)} className='flex cursor-pointer gap-[5px] items-center'>
              Articles
            </p>
          </Link>
          <hr className='border w-full border-black/40' />
          <Link to='/about'>
            <p onClick={() => setOpenMenu(false)} className='flex cursor-pointer gap-[5px] items-center'>
              About Us
            </p>
          </Link>
        </div>
        {/* <div className='text-[12px] font-normal w-full flex flex-col gap-3'>
          <a href="#apply" className='w-full'>
            <button onClick={() => setOpenMenu(false)} className='py-[10px] px-3 rounded-[5px] w-full border-2 border-[#FFFFFF80] text-white bg-gradient-to-r from-[#C0943E] to-[#5A451D]'>APPLY NOW</button>
          </a>
          <button onClick={() => setOpenMenu(false)} className='py-[10px] px-3 rounded-[5px] border-2 border-[#FFFFFF80] text-white bg-gradient-to-r from-[#005BC1] to-[#002B5B]'>EXPLORE PROGRAMS</button>
        </div> */}
      </div>
    </div>
  )
}

export default Navbar