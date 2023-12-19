import { NextPage } from "next";
import { Layout } from '../layout/Layout';
import { QuickAccessToServices } from '../components/home/quickAccessToServices/QuickAccessToServices';
import { CustomerCount } from '../components/home/customerCount/CustomerCount';
import { ExperiencePercentage } from '../components/home/experiencePercentage/ExperiencePercentage';
import { WorkDone } from '../components/workDone/WorkDone';
import { CustomerTestimonial } from '../components/home/customerTestimonial/CustomerTestimonial';
import { Maps } from '../components/maps/Maps';
import { ContactComponent } from '../components/contact/ContactComponent';
import { BannerMainComponent } from '../components/main/BannerMainComponent';
import { ExperienceComponent } from '../components/home/experience/ExperienceComponent';
import { SummaryOfServices } from '../components/home/summaryOfServices/SummaryOfServices';



const mainSlideInfo = [
  {
    img: 'img1',
    title: 'Titulo 1',
    desc: 'Descripción 1'
  },
  {
    img: 'img2',
    title: 'Titulo 2',
  },
  {
    img: 'img3',
    title: 'Titulo 3',
    desc: 'Descripción 3'
  },
]

const HomePage: NextPage = () => {
  return (
    <Layout
      title="King clean"
      description="King clean pioneros en limpieza: tu elección más acertada. Brindamos servicios de lavado de muebles, vehículos, alfombras, colchones y cojines"
      keywords="lavado de muebles, limpieza de muebles, lavado de vehículos, limpieza de vehículos, lavado de cojines, limpieza de cojines, lavado de alfombras, limpieza de alfombras"
    >
      {/* headerInfo será un arreglo con objetos dentro los cuales constaran de imagen, titulo y opcional una descripcion o subtitle */}
      <BannerMainComponent image="/images/profesiona-cleaning-king-clean-1.webp" imageTitle="Imagen de profesional de la limpieza" />

      <ExperienceComponent />

      {/* copiar de la página https://www.aseobrissaxpress.com/index.html */}
      <SummaryOfServices />

    {/* animacion de números aumentando hasta llegar al valor final que corresponda */}
    <CustomerCount />

    {/* animacion de barra llenandose hasta llegar al porcentaje que corresponda */}
    <ExperiencePercentage />

    {/* colocar el componente de rosari-construction de un acceso rápido a los servicios */}
    <QuickAccessToServices />

    <WorkDone />

    {/* ver si cambio este componente a Clients y en el slide con los testimonios y las fotos de los clientes si colocarle CustomerTestimonial */}
    <CustomerTestimonial />

    <Maps />

    <ContactComponent />

    </Layout>
  )
}


export default HomePage;