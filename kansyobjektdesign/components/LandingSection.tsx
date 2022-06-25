import * as React from 'react'
import ListItem from './ListItem'
import { User } from '../interfaces'

type LandingPageProps = {
    backgroundImage: string
    text: string
}

const LandingPage = ({ backgroundImage, text }: LandingPageProps) => (
    <section className="relative flex justify-center items-center">
        <img
            className="h-screen w-screen grayscale brightness-35"
            src={backgroundImage}
        />

        <div className="absolute object-center text-primary-orange landingSectionText">
            {text}
        </div>
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
