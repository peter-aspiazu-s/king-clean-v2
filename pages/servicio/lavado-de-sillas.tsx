import { NextPage } from "next";
import { Layout } from '../../layout/Layout';
import { BannerMainComponent } from '../../components/main/BannerMainComponent';


const LavadoDeSillasPage: NextPage = () => {
  return (
    <Layout
        title="King Clean | Lavado de Sillas"
        description="Página de servicio de lavado de sillas | King Clean"
        keywords="king clean lavado de sillas, lavado de sillas"
    >
        <BannerMainComponent image="/images/banner-lavado-de-sillas.webp" imageTitle="Imagen de persona lavando una silla" />
    </Layout>
  )
}


export default LavadoDeSillasPage;