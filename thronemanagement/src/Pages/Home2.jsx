import Apply from "../Components/Apply"
import FeaturedArticles from "../Components/FeaturedArticles"
import HomeHero2 from "../Components/HomeHero2"
import LearningBenefit from "../Components/LearningBenefit"
import NextStep from "../Components/NextStep"
import OurGraduate from "../Components/OurGraduate"
import ProgramsDesignedForYou from "../Components/ProgramsDesignedForYou"
import UniqueApproach from "../Components/UniqueApproach"

const Home2 = () => {
    return (
        <div className="flex flex-col gap-20 w-full overflow-x-hidden pb-10">
            <HomeHero2 />
            <UniqueApproach />
            <ProgramsDesignedForYou />
            <LearningBenefit />
            <OurGraduate />
            <Apply />
            <FeaturedArticles />
            <NextStep />
        </div>
    )
}

export default Home2