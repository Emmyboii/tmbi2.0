import Apply from "../Components/Apply"
import FeaturedArticles from "../Components/FeaturedArticles"
import HomeHero2 from "../Components/HomeHero2"
import LearningBenefit from "../Components/LearningBenefit"
import NextStep from "../Components/NextStep"
import OurGraduate from "../Components/OurGraduate"
import ProgramsDesignedForYou2 from "../Components/ProgramsDesignedForYou2"
import UniqueApproach from "../Components/UniqueApproach"

const Home2 = () => {
    return (
        <div className="flex flex-col w-full overflow-x-hidden pb-10">
            <HomeHero2 />
            <UniqueApproach />
            <ProgramsDesignedForYou2 />
            <LearningBenefit />
            <OurGraduate />
            <Apply />
            <FeaturedArticles />
            <NextStep />
        </div>
    )
}

export default Home2