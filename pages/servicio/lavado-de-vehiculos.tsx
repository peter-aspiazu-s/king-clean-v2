import { NextPage } from "next";
import { Layout } from '../../layout/Layout';
import { BannerMainComponent } from '../../components/main/BannerMainComponent';


const LavadoDeVehiculosPage: NextPage = () => {
  return (
    <Layout
        title="King Clean | Lavado de Vehículos"
        description="Página de servicio de lavado de vehículos | King Clean"
        keywords="king clean lavado de vehículos, lavado de vehículos"
    >
        <BannerMainComponent image="/images/banner-lavado-de-vehiculos.webp" imageTitle="Imagen de persona lavando un vehiculo" />
    </Layout>
  )
}


export default LavadoDeVehiculosPage;