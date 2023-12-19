import { FC } from 'react';
import Image from 'next/image';

export const SummaryOfServices: FC = () => {
  return (
    <div className='summaryofservices'>
        <div className='summaryofservices__container'>
            <div className='summaryofservices__servicelist'>
                <div className='summaryofservices__service'>
                    <div className='summaryofservices__title'>Limpieza en el hogar</div>
                    <div className='summaryofservices__decoration'>
                        <div className='summaryofservices__decoration-lead'>
                            {/* barra ploma */}
                        </div>
                        <div className='summaryofservices__decoration-blue'>
                            {/* barra azul */}
                        </div>
                    </div>
                    <div className='summaryofservices__description'>La solución perfecta para limpieza en tu hogar desde alfombras hasta pisos.</div>
                    <div className='summaryofservices__icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                    </div>
                </div>

                <div className='summaryofservices__service'>
                    <div className='summaryofservices__title'>Limpieza de fachadas</div>
                    <div className='summaryofservices__decoration'>
                        <div className='summaryofservices__decoration-lead'>
                            {/* barra ploma */}
                        </div>
                        <div className='summaryofservices__decoration-blue'>
                            {/* barra azul */}
                        </div>
                    </div>
                    <div className='summaryofservices__description'>Experiencia de más de 10 años.</div>
                    <div className='summaryofservices__icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-118 120-398l66-50 294 228 294-228 66 50-360 280Zm0-202L120-600l360-280 360 280-360 280Zm0-280Zm0 178 230-178-230-178-230 178 230 178Z"/></svg>
                    </div>
                </div>

                <div className='summaryofservices__service'>
                    <div className='summaryofservices__title'>Limpieza empresarial</div>
                    <div className='summaryofservices__decoration'>
                        <div className='summaryofservices__decoration-lead'>
                            {/* barra ploma */}
                        </div>
                        <div className='summaryofservices__decoration-blue'>
                            {/* barra azul */}
                        </div>
                    </div>
                    <div className='summaryofservices__description'>Profesionales con equipos que se adaptan a su necesidad y presupuesto.</div>
                    <div className='summaryofservices__icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z"/></svg>
                    </div>
                </div>
            </div>

            <div className='summaryofservices__image'>
                <div className='summaryofservices__box-image'>
                    <Image src='/images/cleaning-vertical.webp' alt='personas limpiando' layout='fill' />
                </div>
            </div>

            <div className='summaryofservices__servicelist2'>
                <div className='summaryofservices__service2'>
                    <div className='summaryofservices__icon2'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                    </div>
                    <div className='summaryofservices__title2'>Eliminación de olores</div>
                    <div className='summaryofservices__decoration2'>
                        <div className='summaryofservices__decoration-lead'>
                            {/* barra ploma */}
                        </div>
                        <div className='summaryofservices__decoration-blue'>
                            {/* barra azul */}
                        </div>
                    </div>
                    <div className='summaryofservices__description2'>Equipos y complementos que te ayudaran a eliminar de manera efectiva olores.</div>
                </div>

                <div className='summaryofservices__service2'>
                    <div className='summaryofservices__icon2'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-200v40q0 17-11.5 28.5T200-120h-40q-17 0-28.5-11.5T120-160v-320l84-240q6-18 21.5-29t34.5-11h100v-80h240v80h100q19 0 34.5 11t21.5 29l84 240v320q0 17-11.5 28.5T800-120h-40q-17 0-28.5-11.5T720-160v-40H240Zm-8-360h496l-42-120H274l-42 120Zm-32 80v200-200Zm100 160q25 0 42.5-17.5T360-380q0-25-17.5-42.5T300-440q-25 0-42.5 17.5T240-380q0 25 17.5 42.5T300-320Zm360 0q25 0 42.5-17.5T720-380q0-25-17.5-42.5T660-440q-25 0-42.5 17.5T600-380q0 25 17.5 42.5T660-320Zm-460 40h560v-200H200v200Z"/></svg>
                    </div>
                    <div className='summaryofservices__title2'>Servicio a domicilio</div>
                    <div className='summaryofservices__decoration2'>
                        <div className='summaryofservices__decoration-lead'>
                            {/* barra ploma */}
                        </div>
                        <div className='summaryofservices__decoration-blue'>
                            {/* barra azul */}
                        </div>
                    </div>
                    <div className='summaryofservices__description2'>Solo contáctenos y uno de nuestros equipos le apoyará.</div>
                </div>
                
                <div className='summaryofservices__service2'>
                    <div className='summaryofservices__icon2'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-80q-33 0-56.5-23.5T120-160v-451q-18-11-29-28.5T80-680v-120q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v120q0 23-11 40.5T840-611v451q0 33-23.5 56.5T760-80H200Zm0-520v440h560v-440H200Zm-40-80h640v-120H160v120Zm200 280h240v-80H360v80Zm120 20Z"/></svg>
                    </div>
                    <div className='summaryofservices__title2'>Servicio de lavado</div>
                    <div className='summaryofservices__decoration2'>
                        <div className='summaryofservices__decoration-lead'>
                            {/* barra ploma */}
                        </div>
                        <div className='summaryofservices__decoration-blue'>
                            {/* barra azul */}
                        </div>
                    </div>
                    <div className='summaryofservices__description2'>Te ayudamos a lavar tus muebles, pisos, cojineria y mucho más.</div>
                </div>
            </div>
        </div>
    </div>
  )
}
