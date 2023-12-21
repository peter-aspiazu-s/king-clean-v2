import { NextPage } from "next";
import { Layout } from '../../layout/Layout';
import { BannerMainComponent } from '../../components/main/BannerMainComponent';
import { InfoServiceComponent } from '../../components/infoService/InfoServiceComponent';


const imageArray = [
  {
      img: '/images/img-works3.jpg',
      alt: 'imagen de lavado de colchones'
  },
  {
      img: '/images/img-works4.jpg',
      alt: 'imagen de lavado de colchones'
  },
  {
      img: '/images/img-works11.jpg',
      alt: 'imagen de lavado de colchones'
  },
  {
      img: '/images/img-works14.jpg',
      alt: 'imagen de lavado de colchones'
  },
  {
      img: '/images/img-works22.jpg',
      alt: 'imagen de lavado de colchones'
  },
  {
      img: '/images/img-works28.jpg',
      alt: 'imagen de lavado de colchones'
  }
]


const LavadoDeColchonesPage: NextPage = () => {
  return (
    <Layout
        title="King Clean | Lavado de colchones"
        description="Página de servicio de lavado de colchones | King Clean"
        keywords="king clean lavado de colchones, lavado de colchones"
    >
        <BannerMainComponent image="/images/banner-lavado-de-colchones.webp" imageTitle="Imagen de persona lavando un colchón" />

        <div className="servicescomponent">
          <InfoServiceComponent 
            title="LAVADO DE COLCHONES"
            description="No solo el tener un ambiente en silencio e iluminación reducida es importante para tener un sueño reparador, la higiene de nuestras sábanas, y sobre todo nuestro colchón es clave para un descanso adecuado, y la mejor prueba de esto es lo bien que dormimos justo después de cambiar las sábanas. Pero a diferencia de nuestras sábanas casi nunca dedicamos tiempo a limpiar el colchón, y realmente lo necesita. No hay un solo objeto en nuestra casa que usemos más que nuestro colchón, en promedio de 6 a 8 horas al día, y precisamente por todo este tiempo de uso dejamos nuestro sudor y fragmentos de nuestra piel en el, esto crea el ambiente perfecto para que proliferen los ácaros de polvo que causan alergias y enfermedades de la piel. Contactanos nuestro trabajo es garantizado."
            bold={true}
            imageArray={imageArray}
            accordion={false}
          />
        </div>
    </Layout>
  )
}


export default LavadoDeColchonesPage;