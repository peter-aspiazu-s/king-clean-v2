import { FC } from 'react';
import { AnimatedNumber } from './AnimatedNumber';



export const ExperienceCounter: FC = () => {
  return (
    <div className='experiencecounter'>
        <div className='experiencecounter__filter'></div>
        <div className='experiencecounter__container'>
            <div className='experiencecounter__box'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-120v-560h160v-160h400v320h160v400H520v-160h-80v160H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"/></svg>
                <AnimatedNumber value={10} />
                <div className='experiencecounter__text'>Empresas</div>
            </div>

            <div className='experiencecounter__box'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg>
                <AnimatedNumber value={45} />
                <div className='experiencecounter__text'>Clientes satisfechos</div>
            </div>

            <div className='experiencecounter__box'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>
                <AnimatedNumber value={25} />
                <div className='experiencecounter__text'>Contratos</div>
            </div>

            <div className='experiencecounter__box'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-160v-320H80l400-360 160 144v-104h120v212l120 108H760v320H520v-240h-80v240H200Zm80-80h80v-240h240v240h80v-312L480-732 280-552v312Zm80-240h240-240Zm40-79h160q0-32-24-52.5T480-632q-32 0-56 20.5T400-559Z"/></svg>
                <AnimatedNumber value={50} />
                <div className='experiencecounter__text'>Hogares</div>
            </div>
        </div>
    </div>
  )
}
