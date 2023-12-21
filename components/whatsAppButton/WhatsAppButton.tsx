import { FC } from 'react'
import Image from 'next/image'

export const WhatsAppButton: FC = () => {
  return (
    <a className='whatsappbutton' href="https://wa.link/erheet" target='_blank'>
        <div className='whatsappbutton__container-img'>
            <Image src="/images/ico-ws.png" alt='botón de whatsapp' layout='fill' />
        </div>
    </a>
  )
}
