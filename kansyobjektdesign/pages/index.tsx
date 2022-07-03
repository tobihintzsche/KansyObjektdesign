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

    // const bringInParallaxLeft = useParallax<HTMLImageElement>({
    //     easing: 'easeOutQuad',
    //     translateX: [15, 50],
    // })

    // const bringInParallaxRight = useParallax<HTMLImageElement>({
    //     easing: 'easeOutQuad',
    //     translateX: [-15, -50],
    // })

    return (
        <Layout title="Kansy Objekt Design">
            <LandingSectionHome />
            <section>
                <div className="w-5/6 md:w-4/5 m-auto">
                    <div className="flex m-auto flex-col md:flex-row pt-16 pb-16">
                        <div className="text-center">
                            <text className="text-xl md:text-2xl">Objekte</text>
                            <div className="animatedNumbers"></div>
                        </div>
                        <div className="text-center">
                            <text className="text-xl md:text-2xl">
                                Mitarbeiter
                            </text>
                            <div className="animatedNumbers"></div>
                        </div>
                        <div className="text-center">
                            <text className="text-xl md:text-2xl">Länder</text>
                            <div className="animatedNumbers"></div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between m-auto">
                        <div className="text-primary-orange poppins text-2xl">
                            Konzepte <br />
                            Planen <br />
                            Ideen <br />
                            Gestalten
                        </div>
                        <div className="w-2/3 leading-10 poppins text-xl">
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
                    <div className="pt-32">
                        <img
                            width={500}
                            src="https://media.architecturaldigest.com/photos/5f9876a5d30e09d9d0bbffef/master/w_1600,c_limit/Andre%20Mellone%20pick%20LA730.jpeg"
                            alt="Image"
                            // ref={bringInParallaxLeft.ref}
                        />
                    </div>
                    <div className="flex justify-end pt-16">
                        <img
                            width={500}
                            src="https://media.architecturaldigest.com/photos/5f9876a5d30e09d9d0bbffef/master/w_1600,c_limit/Andre%20Mellone%20pick%20LA730.jpeg"
                            alt="Image"
                            // ref={bringInParallaxRight.ref}
                        />
                    </div>
                    <div className="leading-10 text-2xl text-center mt-64">
                        <text>
                            Unser Leistungsspektrum reicht vom 200 Zimmer-Hotel
                            bis zur individuellen Kücheneinrichtung bei Ihnen zu
                            Hause.
                        </text>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between m-auto mt-64">
                        <img
                            src="https://pbs.twimg.com/media/E6PDP83WUAAP_Tx?format=jpg&name=4096x4096"
                            alt=""
                            width={500}
                        />
                        <div className="w-2/3 leading-10 text-2xl">
                            <text className="text-right text-primary-orange">
                                Entwurfskonzeption <br /> 3D-Visualisierung{' '}
                                <br /> Technische Umsetzung <br />
                                Fertigung an Bearbeitungszentren
                                <br />
                                CAD/CAM-Technik
                                <br /> Innenausbau <br />
                                Lieferung und Montage bundesweit <br />{' '}
                                GU-Leistungen
                            </text>
                        </div>
                    </div>
                    <div
                        className="text-center flex flex-col justify-end"
                        style={{ height: '1000px' }}
                    >
                        <h1>Footer</h1>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default IndexPage
