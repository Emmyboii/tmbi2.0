import React from 'react'
import AboutHero from '../Components/AboutHero'
import WhoWeAre from '../Components/WhoWeAre'
import MissonVison from '../Components/MissonVison'
import Different from '../Components/Different'
import AboutAccreditation from '../Components/AboutAccreditation'

const About = () => {
    return (
        <div className="flex flex-col gap-20 w-full overflow-x-hidden pb-10">
            <AboutHero />
            <WhoWeAre />
            <MissonVison />
            <Different />
            <AboutAccreditation />
        </div>
    )
}

export default About