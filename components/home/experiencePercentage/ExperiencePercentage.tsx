import { FC } from 'react';
import { ServiceProgressBar } from './ServiceProgressBar';


export const ExperiencePercentage: FC = () => {
  return (
    <div className='experiencepercentage'>
      <div className='experiencepercentage__container'>
        <div className='experiencepercentage__progressbar'>
          <ServiceProgressBar percentage={100} serviceName='Experiencia' />
        </div>
        <div className='experiencepercentage__progressbar'>
          <ServiceProgressBar percentage={96} serviceName='Cubrimiento' />
        </div>
        <div className='experiencepercentage__progressbar'>
          <ServiceProgressBar percentage={100} serviceName='Calidad' />
        </div>
        <div className='experiencepercentage__progressbar'>
          <ServiceProgressBar percentage={100} serviceName='Dedicación' />
        </div>
      </div>
    </div>
  )
}