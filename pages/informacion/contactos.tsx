import { NextPage } from "next";
import { Layout } from '../../layout/Layout';
import { BannerMainComponent } from '../../components/main/BannerMainComponent';


const ContactosPage: NextPage = () => {
  return (
    <Layout
        title="King Clean | Contactos"
        description="Página de información de contacto de King Clean"
        keywords="king clean contactos, king clean información"
    >
        <BannerMainComponent image="/images/banner-contact.webp" imageTitle="Imagen de persona con celular" />
    </Layout>
  )
}


export default ContactosPage;