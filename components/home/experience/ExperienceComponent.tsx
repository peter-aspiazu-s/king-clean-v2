import { FC } from "react";
import Link from "next/link";

export const ExperienceComponent: FC = () => {
    return(
        <div className="experience">
            <div className="experience__container">
                <div className="experience__title"><strong>10 años de experiencia</strong> en el sector de la limpieza!</div>
                
                <div className="experience__text">
                    <div className="experience__text-paragraph1">
                        En King Clean nos dedicamos con pasión a proporcionar servicios de limpieza excepcionales. Con una larga trayectoria especializándonos en la limpieza profunda de <Link className="experience__text-paragraph-link" href="/servicio/lavado-de-alfombras">alfombras</Link>, <Link className="experience__text-paragraph-link" href="/servicio/lavado-de-muebles">muebles</Link>, <Link className="experience__text-paragraph-link" href="/servicio/lavado-de-vehiculos">vehículos</Link> y <Link className="experience__text-paragraph-link" href="/servicio/lavado-de-colchones">colchones</Link>, nos esforzamos por superar las expectativas en cada trabajo que realizamos.
                        Nuestro compromiso con la calidad y la atención meticulosa nos ha convertido en la elección preferida de nuestros clientes. No solo ofrecemos una limpieza impecable, sino que también brindamos confianza y tranquilidad a quienes confían en nuestros servicios.
                    </div>
                    <div className="experience__text-paragraph2">
                    </div>
                    <div className="experience__text-paragraph2">
                        Cada miembro de nuestro equipo está dedicado a garantizar resultados excepcionales, utilizando métodos y equipos de vanguardia para asegurar la limpieza más completa y profunda posible. Nos enorgullecemos de ser reconocidos por nuestra excelencia y por ser la opción confiable y líder en la industria de la limpieza.
                        En King Clean, no solo nos esforzamos por limpiar, sino por elevar los estándares de higiene y confort para nuestros clientes. Permita que nuestro compromiso con la perfección y la calidad se refleje en cada aspecto de su hogar, oficina o vehículo. Confíe en nosotros para lograr la limpieza que su entorno merece y experimente la diferencia que hace King Clean en cada servicio.
                    </div>
                </div>
                
                <div className="experience__video">
                    <video controls>
                        <source 
                            src="/images/video-principal.mp4" 
                            type="video/mp4" 
                        />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                </div>
            </div>
        </div>
    )
}