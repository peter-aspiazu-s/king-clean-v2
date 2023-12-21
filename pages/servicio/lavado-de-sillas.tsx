import { NextPage } from "next";
import { Layout } from '../../layout/Layout';
import { BannerMainComponent } from '../../components/main/BannerMainComponent';
import { InfoServiceComponent } from '../../components/infoService/InfoServiceComponent';



const imageArray = [
  {
      img: '/images/img-works2.jpg',
      alt: 'imagen de lavado de sillas'
  },
  {
      img: '/images/img-works6.jpg',
      alt: 'imagen de lavado de sillas'
  },
  {
      img: '/images/img-works15.jpg',
      alt: 'imagen de lavado de sillas'
  },
  {
      img: '/images/img-works16.jpg',
      alt: 'imagen de lavado de sillas'
  },
  {
      img: '/images/img-works23.jpg',
      alt: 'imagen de lavado de sillas'
  },
  {
      img: '/images/img-works26.jpg',
      alt: 'imagen de lavado de sillas'
  },
  {
      img: '/images/img-works27.jpg',
      alt: 'imagen de lavado de sillas'
  },
  {
      img: '/images/img-works30.jpg',
      alt: 'imagen de lavado de sillas'
  },
  {
      img: '/images/img-works34.jpg',
      alt: 'imagen de lavado de sillas'
  },
  {
      img: '/images/img-works35.jpg',
      alt: 'imagen de lavado de sillas'
  },
  {
      img: '/images/img-works36.jpg',
      alt: 'imagen de lavado de sillas'
  },
]

const LavadoDeSillasPage: NextPage = () => {
  return (
    <Layout
        title="King Clean | Lavado de Sillas"
        description="Página de servicio de lavado de sillas | King Clean"
        keywords="king clean lavado de sillas, lavado de sillas"
    >
        <BannerMainComponent image="/images/banner-lavado-de-sillas.webp" imageTitle="Imagen de persona lavando una silla" />
        <div className="servicescomponent">
          <InfoServiceComponent 
            title="LAVADO DE SILLAS"
            description="Hay cierta satisfacción al recibir a tus invitados en una habitación limpia, y al mismo tiempo hay pocas cosas más desagradables que sentarse en un sofa que tenga mal olor, o que se sienta húmedo, o pegajoso ¿Cuántas veces has volteado un cojín del sofá o una almohada para ocultar las manchas o el desgaste visible? Una limpieza profunda de muebles te permite mostrar tu estilo sin vergüenza. Cuando sus muebles se ven limpios, toda la habitación da una buena impresión, si crees que es necesario realizar una limpieza profesional, para devolverles ese esplendor a tus muebles, nosotros como empresa de limpieza podemos ayudarte. Contactanos nuestro trabajo es garantizado."
            bold={true}
            imageArray={imageArray}
            accordion={false}
          />
        </div>
    </Layout>
  )
}


export default LavadoDeSillasPage;