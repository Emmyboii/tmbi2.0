import React from 'react'
import AboutHero from '../Components/AboutHero'
import WhoWeAre from '../Components/WhoWeAre'
import MissonVison from '../Components/MissonVison'
import Different from '../Components/Different'
import NextStep from '../Components/NextStep'

const About = () => {
    return (
        <div className="flex flex-col w-full overflow-x-hidden pb-10">
            <AboutHero />
            <WhoWeAre />
            <MissonVison />
            <Different />
            <NextStep />
        </div>
    )
}

export default About