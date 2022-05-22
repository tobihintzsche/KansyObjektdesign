import Link from 'next/link'
import Layout from '../components/Layout'

import ImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/css/image-gallery.css";


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
];




const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    {/* ImageSlider: https://react-slideshow-image.netlify.app/ */}
  </Layout>
)

export default IndexPage
