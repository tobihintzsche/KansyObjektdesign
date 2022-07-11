import * as React from 'react'
import Navbar from './navbar'

type LandingPageProps = {
    backgroundImage: string
    text: string
}

const LandingPage = ({ backgroundImage, text }: LandingPageProps) => (
    <section className="relative flex justify-center items-center">
        <img
            className="h-screen object-cover w-screen grayscale brightness-35"
            src={backgroundImage}
        />

        <text className="absolute object-center text-primary-orange text-5xl md:text-7xl orbitron">
            {text}
        </text>

        <div>
            <span
                className="arrow pulse"
                style={{ position: 'absolute', marginBottom: '10px' }}
            ></span>
            <span
                className="arrow pulse"
                style={{ position: 'absolute', marginBottom: '10px' }}
            ></span>
        </div>
    </section>
)

export default LandingPage
