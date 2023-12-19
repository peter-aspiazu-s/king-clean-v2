import { FC, Dispatch, SetStateAction } from 'react';
import Link from 'next/link';

interface SubMenuProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const SubMenu: FC<SubMenuProps> = ({isOpen, setIsOpen}) => {
    return (
        <nav className='submenu'>
            <div className={
                `submenu__container
                ${isOpen 
                ? 'submenu__container-active' 
                : ''}`
            }>
                <Link 
                    href="/" 
                    className='submenu__item'
                    onClick={() => setIsOpen(!isOpen)}
                >Inicio</Link>
                <Link 
                    href="/servicio/lavado-de-muebles" 
                    className='submenu__item'
                    onClick={() => setIsOpen(!isOpen)}
                >Lavado de muebles</Link>
                <Link 
                    href="/servicio/lavado-de-colchones" 
                    className='submenu__item'
                    onClick={() => setIsOpen(!isOpen)}
                >Lavado de colchones</Link>
                <Link 
                    href="/servicio/lavado-de-vehiculos" 
                    className='submenu__item'
                    onClick={() => setIsOpen(!isOpen)}
                >Lavado de vehículos</Link>
                <Link 
                    href="/servicio/lavado-de-alfombras" 
                    className='submenu__item'
                    onClick={() => setIsOpen(!isOpen)}
                >Lavado de alfombras</Link>
                <Link 
                    href="/servicio/lavado-de-sillas" 
                    className='submenu__item'
                    onClick={() => setIsOpen(!isOpen)}
                >Lavado de sillas</Link>
                <Link 
                    href="/informacion/contactos" 
                    className='submenu__item'
                    onClick={() => setIsOpen(!isOpen)}
                >Contactos</Link>
            </div>
        </nav>
    )
}