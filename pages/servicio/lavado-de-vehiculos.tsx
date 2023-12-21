import { NextPage } from "next";
import { Layout } from '../../layout/Layout';
import { BannerMainComponent } from '../../components/main/BannerMainComponent';
import { InfoServiceComponent } from '../../components/infoService/InfoServiceComponent';


const imageArray = [{
  img: '/images/img-works37.jpg',
  alt: 'imagen de lavado de vehiculos'
}]

const LavadoDeVehiculosPage: NextPage = () => {
  return (
    <Layout
        title="King Clean | Lavado de Vehículos"
        description="Página de servicio de lavado de vehículos | King Clean"
        keywords="king clean lavado de vehículos, lavado de vehículos"
    >
        <BannerMainComponent image="/images/banner-lavado-de-vehiculos.webp" imageTitle="Imagen de persona lavando un vehiculo" />
    
        <div className="servicescomponent">
          <InfoServiceComponent 
            title="LAVADO DE VEHICULOS"
            description="Si no mantenemos nuestro auto limpio, la acumulación de polvo y suciedad acelerará el proceso de envejecimiento de los elementos internos y externos. En King Clean nos enfocamos íntegramente en una limpieza minucionsa de zonas interiores del vehículo, para esto trabajamos con productos de limpieza, desengrasantes, limpia tapiz, entre otros materiales, que nos permiten dejar tapicerías, techo, asientos, piso, alfombras y conductos de aire nítidos y libres de manchas, ácaros y bacterias."
            bold={true}
            imageArray={imageArray}
            accordion={false}
          />
        </div>
    </Layout>
  )
}


export default LavadoDeVehiculosPage;