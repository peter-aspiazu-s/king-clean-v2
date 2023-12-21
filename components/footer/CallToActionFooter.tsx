import { FC, useState, useRef, useEffect } from 'react';
import Image from 'next/image';


export const CallToActionFooter: FC = () => {

    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {

        const offset = 200;

        const handleScroll = () => {

            if(containerRef.current){

                // Obtén la posición del componente en la ventana
                const rect = containerRef.current.getBoundingClientRect();
        
                // Comprueba si el componente está al menos parcialmente visible en la ventana
                if (rect.top + offset < window.innerHeight && rect.bottom >= 0) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='calltoactionfooter'>
            <div className={`calltoactionfooter__container ${isVisible ? 'calltoactionfooter__container-visible' : ''}`} ref={containerRef}>
                Por mayor información sobre los servicios brindados, <span>contáctanos</span> al <a href="https://wa.link/erheet" target='_blank'>0989411325</a>. Respondemos a tus inquietudes sobre nuestros servicios!
            </div>
            <div className='calltoactionfooter__logo'>
                <Image src='/images/logo.png' alt='Imagen de logo' layout='fill' />
            </div>
        </div>
    )
}