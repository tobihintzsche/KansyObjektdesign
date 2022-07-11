import Link from 'next/link'
import LandingPage from '../components/LandingSection'
import Layout from '../components/Layout'
import React from 'react'
import { useInView } from 'react-intersection-observer'

const IndexPage = () => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.6,
    })

    console.log(inView)

    return (
        <Layout>
            <LandingPage
                text="Über Uns"
                backgroundImage="https://roundecor.com/wp-content/uploads/2021/07/minimalist-Italian-living-room-quilted-futons-cameraman-light-floor-lamp-study-area-ottoman-black-coffee-table-abstract-wall-art-lemons-1.jpg"
            />
            <h2>{`Header inside viewport ${inView}.`}</h2>
            <section>
                <div className="columns">
                    <div
                        ref={ref}
                        className={`${inView ? 'appear-inView' : 'appear'}`}
                    >
                        <p className="h-96 bg-primary-orange">
                            Lorem ipsum
                            doloralösdfjlöasdjfaödfjklsdjföafajsdöfjalsjfkasjdfljs
                            flksadj
                        </p>
                    </div>
                    <div className="col fade-in">
                        <h3>Lorem ipsum</h3>
                        <p>
                            Lorem ipsum
                            doloralösdfjlöasdjfaödfjklsdjföafajsdöfjalsjfkasjdfljs
                            flksadj
                        </p>
                    </div>
                    <div className="col fade-in">
                        <h3>Lorem ipsum</h3>
                        <p>
                            Lorem ipsum
                            doloralösdfjlöasdjfaödfjklsdjföafajsdöfjalsjfkasjdfljs
                            flksadj
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default IndexPage
