import { NextPage } from "next";
import { Layout } from '../layout/Layout';
import { ExperiencePercentage } from '../components/home/experiencePercentage/ExperiencePercentage';
import { BannerMainComponent } from '../components/main/BannerMainComponent';
import { ExperienceComponent } from '../components/home/experience/ExperienceComponent';
import { SummaryOfServices } from '../components/home/summaryOfServices/SummaryOfServices';
import { ExperienceCounter } from '../components/home/experienceCounter/ExperienceCounter';
import { SectionServiceContainer } from '../components/home/sectionServiceComponent/SectionServiceContainer';
import { SlideRecommendationVideo } from '../components/home/slideRecommendationVideo/SlideRecommendationVideo';
import { useState } from "react";
import { RecommendationVideo } from '../components/home/recommendationVideo/RecommendationVideo';
import { ClientsTestimonial } from '../components/home/clientsTestimonial/ClientsTestimonial';


const imgArr = [
  {
    img: '/images/img-video1.png',
    alt: 'video image',
    link: '/images/video1.mp4'
  },
  {
    img: '/images/img-video2.png',
    alt: 'video image',
    link: '/images/video2.mp4'
  },
  {
    img: '/images/img-video3.png',
    alt: 'video image',
    link: '/images/video3.mp4'
  },
  {
    img: '/images/img-video4.png',
    alt: 'video image',
    link: '/images/video4.mp4'
  },
  {
    img: '/images/img-video5.png',
    alt: 'video image',
    link: '/images/video5.mp4'
  }
]


const HomePage: NextPage = () => {

  const [
    linkRecommendationVideo, 
    setLinkRecommendationVideo
  ] = useState('/images/video1.mp4');

  return (
    <Layout
      title="King clean"
      description="King clean pioneros en limpieza: tu elección más acertada. Brindamos servicios de lavado de muebles, vehículos, alfombras, colchones y cojines"
      keywords="lavado de muebles, limpieza de muebles, lavado de vehículos, limpieza de vehículos, lavado de cojines, limpieza de cojines, lavado de alfombras, limpieza de alfombras"
    >
      <BannerMainComponent image="/images/profesiona-cleaning-king-clean-1.webp" imageTitle="Imagen de profesional de la limpieza" />

      <ExperienceComponent />

      <SummaryOfServices />

      <ExperienceCounter />

      <ExperiencePercentage />

      <SectionServiceContainer />

      <ClientsTestimonial />

      <RecommendationVideo 
        key={linkRecommendationVideo}
        linkVideo={linkRecommendationVideo} 
      />
      <SlideRecommendationVideo
        imgArr={imgArr} 
        setRecommendationVideoHome={setLinkRecommendationVideo}  
      />

    </Layout>
  )
}


export default HomePage;