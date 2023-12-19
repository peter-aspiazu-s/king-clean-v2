import { FC } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';

export const Navbar: FC = () => {

    const router = useRouter();

    const path = router.asPath;

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Link 
                    href="/" 
                    className="navbar__item"
                    style={{
                        color:path === "/" ? '#394aff' : 'aliceblue'
                    }}
                >INICIO</Link>
                <Link 
                    href="/servicio/lavado-de-muebles" 
                    className="navbar__item"
                    style={{
                        color:path === "/servicio/lavado-de-muebles" ? '#394aff' : 'aliceblue'
                    }}
                >LAVADO DE MUEBLES</Link>
                <Link 
                    href="/servicio/lavado-de-colchones" 
                    className="navbar__item"
                    style={{
                        color:path === "/servicio/lavado-de-colchones" ? '#394aff' : 'aliceblue'
                    }}
                >LAVADO DE COLCHONES</Link>
                <Link 
                    href="/servicio/lavado-de-vehiculos" 
                    className="navbar__item"
                    style={{
                        color:path === "/servicio/lavado-de-vehiculos" ? '#394aff' : 'aliceblue'
                    }}
                >LAVADO DE VEHICULOS</Link>
                <Link 
                    href="/servicio/lavado-de-alfombras" 
                    className="navbar__item"
                    style={{
                        color:path === "/servicio/lavado-de-alfombras" ? '#394aff' : 'aliceblue'
                    }}
                >LAVADO DE ALFOMBRAS</Link>
                <Link 
                    href="/servicio/lavado-de-sillas" 
                    className="navbar__item"
                    style={{
                        color:path === "/servicio/lavado-de-sillas" ? '#394aff' : 'aliceblue'
                    }}
                >LAVADO DE SILLAS</Link>
                <Link 
                    href="/informacion/contactos" 
                    className="navbar__item"
                    style={{
                        color:path === "/informacion/contactos" ? '#394aff' : 'aliceblue'
                    }}
                >CONTACTOS</Link>
            </div>
        </nav>
    )
}