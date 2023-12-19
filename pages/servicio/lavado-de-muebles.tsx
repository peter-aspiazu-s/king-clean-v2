import { NextPage } from "next";
import { Layout } from '../../layout/Layout';
import { BannerMainComponent } from '../../components/main/BannerMainComponent';


const LavadoDeMueblesPage: NextPage = () => {
  return (
    <Layout
        title="King Clean | Lavado de muebles"
        description="Página de servicio de lavado de muebles | King Clean"
        keywords="king clean lavado de muebles, lavado de muebles"
    >
        <BannerMainComponent image="/images/banner-lavado-de-muebles.webp" imageTitle="Imagen de persona lavando un sofá" />
    </Layout>
  )
}


export default LavadoDeMueblesPage;