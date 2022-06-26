import Link from 'next/link'
import LandingPage from '../components/LandingSection'
import Layout from '../components/Layout'

const Karriere = () => (
    <Layout>
        <LandingPage
            text="Karriere"
            backgroundImage="https://roundecor.com/wp-content/uploads/2021/07/minimalist-Italian-living-room-quilted-futons-cameraman-light-floor-lamp-study-area-ottoman-black-coffee-table-abstract-wall-art-lemons-1.jpg"
        />

        <section></section>
    </Layout>

    // <div className="flex flex-col h-screen">
    //     <div className="bg-yellow-400 py-8">my navbar</div>
    //     <div className="bg-green-400 flex justify-center items-center flex-grow">
    //         this content is not centered on screen
    //     </div>
    // </div>
)

export default Karriere
