import { NextPage } from "next";
import { Layout } from '../../layout/Layout';
import { BannerMainComponent } from '../../components/main/BannerMainComponent';


const LavadoDeAlfombrasPage: NextPage = () => {
  return (
    <Layout
        title="King Clean | Lavado de Alfombras"
        description="Página de servicio de lavado de alfombras | King Clean"
        keywords="king clean lavado de alfombras, lavado de alfombras"
    >
        <BannerMainComponent image="/images/banner-lavado-de-alfombras.webp" imageTitle="Imagen de persona lavando una alfombra" />
    </Layout>
  )
}


export default LavadoDeAlfombrasPage;