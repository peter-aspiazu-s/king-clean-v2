import { NextPage } from "next";
import { Layout } from '../../layout/Layout';
import { BannerMainComponent } from '../../components/main/BannerMainComponent';
import { InfoServiceComponent } from '../../components/infoService/InfoServiceComponent';


const imageArray = [
  {
      img: '/images/img-works17.jpg',
      alt: 'imagen de lavado de alfombras'
  },
  {
      img: '/images/img-works19.jpg',
      alt: 'imagen de lavado de alfombras'
  }
]

const LavadoDeAlfombrasPage: NextPage = () => {
  return (
    <Layout
        title="King Clean | Lavado de Alfombras"
        description="Página de servicio de lavado de alfombras | King Clean"
        keywords="king clean lavado de alfombras, lavado de alfombras"
    >
        <BannerMainComponent image="/images/banner-lavado-de-alfombras.webp" imageTitle="Imagen de persona lavando una alfombra" />

        <div className="servicescomponent">
          <InfoServiceComponent 
            title="LAVADO DE ALFOMBRAS"
            description='La próxima vez que quieras descansar, hágalo en una zona limpia: te recomendamos el asiento del inodoro. "Tiene la menor cantidad de bacterias de todos los lugares de tu hogar", dice Charles Gerba, Ph.D. Profesor de microbiología ambiental en la Universidad de Arizona. De hecho hay 3.000 veces más coliformes fecales, también conocidas como bacterias de las heces, en la alfombra de una sala promedio que en el inodoro típico. ¿Por qué? te estarás preguntando, el inodoro es un área que está en constante limpieza, las alfombras domésticas en el mejor de los casos se aspiran cada mes. Contactanos nuestro trabajo es garantizado.'
            bold={true}
            imageArray={imageArray}
            accordion={false}
          />
        </div>

    </Layout>
  )
}


export default LavadoDeAlfombrasPage;