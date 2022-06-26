import Link from 'next/link'
import LandingPage from '../components/LandingSection'
import Layout from '../components/Layout'
import { sampleData } from '../utils/sample-data'

const IndexPage = () => (
    <Layout>
        <LandingPage
            text="Referenzen"
            backgroundImage="https://roundecor.com/wp-content/uploads/2021/07/minimalist-Italian-living-room-quilted-futons-cameraman-light-floor-lamp-study-area-ottoman-black-coffee-table-abstract-wall-art-lemons-1.jpg"
        />

        <section>
            <div className="w-3/5 m-auto text-start">
                {sampleData.map((elemet) => {
                    return (
                        <text
                            className={`mr-3 text-3xl ${
                                !elemet.highlighted
                                    ? ''
                                    : 'text-primary-orange text-4xl'
                            }`}
                        >
                            {elemet.name.toUpperCase()}
                        </text>
                    )
                })}
            </div>
        </section>
    </Layout>

    // <div className="flex flex-col h-screen">
    //     <div className="bg-yellow-400 py-8">my navbar</div>
    //     <div className="bg-green-400 flex justify-center items-center flex-grow">
    //         this content is not centered on screen
    //     </div>
    // </div>
)

export default IndexPage
