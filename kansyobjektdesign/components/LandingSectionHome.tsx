import * as React from 'react'
import ListItem from './ListItem'
import { User } from '../interfaces'

const LandingPage = () => (
    <section className="relative flex justify-center items-center">
        <img
            className="h-screen w-screen grayscale brightness-35"
            src="https://picsum.photos/id/1018/1000/600/"
        />

        <div className="absolute object-center text-white text-xl">
            <img
                className="h-30 w-30 brightness-200"
                src="https://www.kansy-objekt-design.de/gfx/kansylogo.png"
            />
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
