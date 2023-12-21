import { NextPage } from "next";
import { Layout } from '../../layout/Layout';
import { BannerMainComponent } from '../../components/main/BannerMainComponent';
import { InfoServiceComponent } from '../../components/infoService/InfoServiceComponent';



const imageArray = [
  {
      img: '/images/img-works1.jpg',
      alt: 'imagen de lavado de muebles'
  },
  {
      img: '/images/img-works5.jpg',
      alt: 'imagen de lavado de muebles'
  },
  {
      img: '/images/img-works7.jpg',
      alt: 'imagen de lavado de muebles'
  },
  {
      img: '/images/img-works8.jpg',
      alt: 'imagen de lavado de muebles'
  },
  {
      img: '/images/img-works9.jpg',
      alt: 'imagen de lavado de muebles'
  },
  {
      img: '/images/img-works10.jpg',
      alt: 'imagen de lavado de muebles'
  },
  {
      img: '/images/img-works18.jpg',
      alt: 'imagen de lavado de muebles'
  },
  {
      img: '/images/img-works20.jpg',
      alt: 'imagen de lavado de muebles'
  },
  {
      img: '/images/img-works21.jpg',
      alt: 'imagen de lavado de muebles'
  },
  {
      img: '/images/img-works25.jpg',
      alt: 'imagen de lavado de muebles'
  },
  {
      img: '/images/img-works29.jpg',
      alt: 'imagen de lavado de muebles'
  },
  {
      img: '/images/img-works31.jpg',
      alt: 'imagen de lavado de muebles'
  },
  {
      img: '/images/img-works32.jpg',
      alt: 'imagen de lavado de muebles'
  },
  {
      img: '/images/img-works33.jpg',
      alt: 'imagen de lavado de muebles'
  },
]

const LavadoDeMueblesPage: NextPage = () => {
  return (
    <Layout
        title="King Clean | Lavado de muebles"
        description="Página de servicio de lavado de muebles | King Clean"
        keywords="king clean lavado de muebles, lavado de muebles"
    >
        <BannerMainComponent image="/images/banner-lavado-de-muebles.webp" imageTitle="Imagen de persona lavando un sofá" />

        <div className="servicescomponent">
          <InfoServiceComponent 
            title="LAVADO DE MUEBLES"
            description="Los muebles, al igual que las sábanas o nuestra ropa, se ensucian un poco cada vez que los usamos, pero a diferencia de nuestra ropa solemos creer que no es importante realizar la limpieza de nuestros muebles tan seguido ¡Ese es el error! Pocos lugares en su hogar se usan más que su sofá. Es un asiento, un puesto de bebidas, un lugar de recuperación cuando se está enfermo y una comodidad para los huéspedes que buscan limpiarse las manos en secreto, contactanos nuestro trabajo es garantizado."
            bold={true}
            imageArray={imageArray}
            accordion={false}
          />
        </div>
    </Layout>
  )
}


export default LavadoDeMueblesPage;