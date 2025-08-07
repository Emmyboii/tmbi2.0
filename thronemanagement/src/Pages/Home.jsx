import bgFrame from '../Images/bgFrame.svg'
import HomeHero from '../Components/HomeHero'
import Why from '../Components/Why'
import ProgramsDesignedForYou from '../Components/ProgramsDesignedForYou'
import LearningBenefit from '../Components/LearningBenefit'
import OurGraduate from '../Components/OurGraduate'
import Apply from '../Components/Apply'
import Accreditations from '../Components/Accreditations'
import NextStep from '../Components/NextStep'

const Home = () => {
  return (
    <div className='py-14'>
      <img className='absolute z-0 top-[60%]' src={bgFrame} alt="" />
      <div className='relative z-10 flex flex-col gap-20'>
        <HomeHero />
        <div className='max-w-[950px] mx-auto'>
          <Why />
        </div>
        <ProgramsDesignedForYou />
        <div className='flex flex-col gap-20'>
          <LearningBenefit />
          <OurGraduate />
          <Apply />
          <Accreditations />
          <NextStep />
        </div>
      </div>
    </div>
  )
}

export default Home