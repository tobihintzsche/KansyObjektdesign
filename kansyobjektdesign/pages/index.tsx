import Link from 'next/link'
import Layout from '../components/Layout'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { Parallax, useParallax } from 'react-scroll-parallax'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useParallaxController } from 'react-scroll-parallax'
import Bar from '../utils/Bar_Bild.jpg'

import Logo from '../utils/kansylogo.png'
import LandingSectionHome from '../components/LandingSectionHome'
import { useInView } from 'react-intersection-observer'

function useUpdateControllerOnRouteChange() {
    const location = useRouter()
    const parallaxController = useParallaxController()

    useEffect(() => {
        parallaxController.update()
    }, [location.pathname])
}

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
]

function reveal() {
    var reveals = document.querySelectorAll('.reveal')

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight
        var elementTop = reveals[i].getBoundingClientRect().top
        var elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active')
        } else {
            reveals[i].classList.remove('active')
        }
    }
}

const IndexPage = (breakpoint: number) => {
    useEffect(() => {
        window.addEventListener('scroll', reveal)
    }, [])

    useUpdateControllerOnRouteChange()

    console.log({ breakpoint })

    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.4,
    })

    const { ref: secondRef, inView: secondInView } = useInView({
        /* Optional options */
        threshold: 0.4,
    })

    const { ref: numbersViewRef, inView: numbersInView } = useInView({
        /* Optional options */
        threshold: 0.4,
    })

    return (
        <Layout title="Kansy Objekt Design">
            <LandingSectionHome />
            <section>
                <div className="w-5/6 sm:w-3/4 md:w-3/5 m-auto">
                    <div className="flex flex-col md:gap-8 md:flex-row justify-between m-auto mt-32">
                        <div className="text-primary-orange poppins text-2xl">
                            Konzepte <br />
                            Planen <br />
                            Ideen <br />
                            Gestalten
                        </div>
                        <div className="leading-10 poppins text-xl">
                            Unser Unternehmen befasst sich seit 1989 mit der
                            Planung, Entwicklung und Fertigung von individuell
                            gestalteten Einrichtungen, speziell auch im
                            Hotelbereich. Wir bieten unseren Kunden mehr, als
                            verstaubte katalogisierte Einrichtungen, bei denen
                            individuelle Wünsche auf der Strecke bleiben. Jede
                            Einrichtung wird speziell nach IHREN Wünschen
                            entworfen und geplant.
                        </div>
                    </div>
                    <div
                        ref={ref}
                        className={`${inView ? 'appear-inView' : 'appearLeft'}`}
                    >
                        <div className="pt-32 flex flex-col gap-4 md:flex-row">
                            <img
                                width={500}
                                src="https://media.architecturaldigest.com/photos/5f9876a5d30e09d9d0bbffef/master/w_1600,c_limit/Andre%20Mellone%20pick%20LA730.jpeg"
                                alt="Image"
                            />
                            <div className="leading-10 text-2xl poppins">
                                Unser Leistungsspektrum reicht vom 200
                                Zimmer-Hotel bis zur individuellen
                                Kücheneinrichtung bei Ihnen zu Hause.
                            </div>
                        </div>
                    </div>
                    <div
                        ref={secondRef}
                        className={`${
                            secondInView ? 'appear-inView' : 'appearRight'
                        }`}
                    >
                        <div className="flex justify-end flex-col-reverse gap-4 md:flex-row mt-32">
                            <div className="text-right leading-10 text-2xl">
                                <text className="poppins text-primary-orange">
                                    Entwurfskonzeption <br /> 3D-Visualisierung{' '}
                                    <br /> Technische Umsetzung <br />
                                    Fertigung an Bearbeitungszentren
                                    <br />
                                    CAD/CAM-Technik
                                    <br /> Innenausbau <br />
                                    Lieferung und Montage bundesweit <br />
                                    GU-Leistungen
                                </text>
                            </div>
                            <img
                                width={500}
                                src="https://media.architecturaldigest.com/photos/5f9876a5d30e09d9d0bbffef/master/w_1600,c_limit/Andre%20Mellone%20pick%20LA730.jpeg"
                                alt="Image"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default IndexPage
