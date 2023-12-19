import { NextPage } from "next";
import { Layout } from '../../layout/Layout';
import { BannerMainComponent } from '../../components/main/BannerMainComponent';


const LavadoDeColchonesPage: NextPage = () => {
  return (
    <Layout
        title="King Clean | Lavado de colchones"
        description="Página de servicio de lavado de colchones | King Clean"
        keywords="king clean lavado de colchones, lavado de colchones"
    >
        <BannerMainComponent image="/images/banner-lavado-de-colchones.webp" imageTitle="Imagen de persona lavando un colchón" />
    </Layout>
  )
}


export default LavadoDeColchonesPage;