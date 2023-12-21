import { FC } from "react";
import { ServiceComponent } from './ServiceComponent';

export const SectionServiceContainer: FC = () => {
    return (
        <div className="sectionservicecontainer">
            <div className="sectionservicecontainer__container-text">
                <div className="sectionservicecontainer__title">SERVICIOS</div>
                <div className="sectionservicecontainer__separador"></div>
                <div className="sectionservicecontainer__desc">Ofrecemos servicios de calidad brindando confianza a nuestros clientes</div>
            </div>
            <div className="sectionservicecontainer__container">
                <ServiceComponent 
                    title="Lavado de muebles"
                    description="Los muebles, al igual que las sábanas o nuestra ropa, se ensucian un poco cada vez que los usamos, pero a diferencia..."
                    image="/images/banner-lavado-de-muebles.webp"
                    link="/servicio/lavado-de-muebles"
                    />
                <ServiceComponent 
                    title="Lavado de colchones"
                    description="No solo el tener un ambiente en silencio e iluminación reducida es importante para tener un sueño reparador, la higiene..."
                    image="/images/banner-lavado-de-colchones.webp"
                    link="/servicio/lavado-de-colchones"
                    />
                <ServiceComponent 
                    title="Lavado de vehículos"
                    description="Si no mantenemos nuestro auto limpio, la acumulación de polvo y suciedad acelerará el proceso de envejecimiento de los elementos..."
                    image="/images/banner-lavado-de-vehiculos.webp"
                    link="/servicio/lavado-de-vehiculos"
                />
                <ServiceComponent 
                    title="Lavado de alfombras"
                    description="La próxima vez que quieras descansar, hágalo en una zona limpia: te recomendamos el asiento del inodoro. Tiene la menor..."
                    image="/images/banner-lavado-de-alfombras.webp"
                    link="/servicio/lavado-de-alfombras"
                />
                <ServiceComponent 
                    title="Lavado de sillas"
                    description="Hay cierta satisfacción al recibir a tus invitados en una habitación limpia, y al mismo tiempo hay pocas cosas más desagradables..."
                    image="/images/banner-lavado-de-sillas.webp"
                    link="/servicio/lavado-de-sillas"
                />
            </div>
        </div>
    )
}