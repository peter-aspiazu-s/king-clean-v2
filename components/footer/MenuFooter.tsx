import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const MenuFooter: FC = () => {

    const router = useRouter();

    const path = router.asPath;

    return (
        <div className="menufooter">
            <div className="menufooter__container">
                <Link 
                    href="/" 
                    className="menufooter__item"
                    style={{
                        color:path === "/" ? '#394aff' : '#c0c0c0'
                    }}
                >INICIO</Link>
                <Link 
                    href="/servicio/lavado-de-muebles" 
                    className="menufooter__item"
                    style={{
                        color:path === "/servicio/lavado-de-muebles" ? '#394aff' : '#c0c0c0'
                    }}
                >LAVADO DE MUEBLES</Link>
                <Link 
                    href="/servicio/lavado-de-colchones" 
                    className="menufooter__item"
                    style={{
                        color:path === "/servicio/lavado-de-colchones" ? '#394aff' : '#c0c0c0'
                    }}
                >LAVADO DE COLCHONES</Link>
                <Link 
                    href="/servicio/lavado-de-vehiculos" 
                    className="menufooter__item"
                    style={{
                        color:path === "/servicio/lavado-de-vehiculos" ? '#394aff' : '#c0c0c0'
                    }}
                >LAVADO DE VEHICULOS</Link>
                <Link 
                    href="/servicio/lavado-de-alfombras" 
                    className="menufooter__item"
                    style={{
                        color:path === "/servicio/lavado-de-alfombras" ? '#394aff' : '#c0c0c0'
                    }}
                >LAVADO DE ALFOMBRAS</Link>
                <Link 
                    href="/servicio/lavado-de-sillas" 
                    className="menufooter__item"
                    style={{
                        color:path === "/servicio/lavado-de-sillas" ? '#394aff' : '#c0c0c0'
                    }}
                >LAVADO DE SILLAS</Link>
                <Link 
                    href="/informacion/contactos" 
                    className="menufooter__item"
                    style={{
                        color:path === "/informacion/contactos" ? '#394aff' : '#c0c0c0'
                    }}
                >CONTACTOS</Link>
            </div>
        </div>
    )
}