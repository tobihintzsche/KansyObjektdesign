import Link from 'next/link'
import LandingPage from '../../components/LandingSection'
import Layout from '../../components/Layout'

const IndexPage = () => {
    const imgSrc1 =
        'https://roundecor.com/wp-content/uploads/2021/07/minimalist-Italian-living-room-quilted-futons-cameraman-light-floor-lamp-study-area-ottoman-black-coffee-table-abstract-wall-art-lemons-1.jpg'

    const imgSrc2 =
        'http://88designbox.com/upload/2019/01/28/modern-house-in-montreal-by-indesign-inc-cornath-architecte-09.jpg'
    return (
        <Layout>
            <LandingPage text="Restaurant" backgroundImage={imgSrc1} />

            <section>
                <div className="grid grid-cols-2">
                    <img
                        src={imgSrc1}
                        width="100%"
                        height={400}
                        alt="imgsrc1"
                    />
                    <img
                        src={imgSrc2}
                        width="100%"
                        height={400}
                        alt="imgsrc2"
                    />
                    <img
                        src={imgSrc1}
                        width="100%"
                        height={400}
                        alt="imgsrc1"
                    />
                    <img
                        src={imgSrc2}
                        width="100%"
                        height={400}
                        alt="imgsrc2"
                    />
                    <img
                        src={imgSrc1}
                        width="100%"
                        height={400}
                        alt="imgsrc1"
                    />
                    <img
                        src={imgSrc2}
                        width="100%"
                        height={400}
                        alt="imgsrc2"
                    />
                    <img
                        src={imgSrc1}
                        width="100%"
                        height={400}
                        alt="imgsrc1"
                    />
                    <img
                        src={imgSrc2}
                        width="100%"
                        height={400}
                        alt="imgsrc2"
                    />
                    <img
                        src={imgSrc1}
                        width="100%"
                        height={400}
                        alt="imgsrc1"
                    />
                    <img
                        src={imgSrc2}
                        width="100%"
                        height={400}
                        alt="imgsrc2"
                    />
                    <img
                        src={imgSrc1}
                        width="100%"
                        height={400}
                        alt="imgsrc1"
                    />
                    <img
                        src={imgSrc2}
                        width="100%"
                        height={400}
                        alt="imgsrc2"
                    />
                </div>
            </section>
        </Layout>
    )
}

export default IndexPage
