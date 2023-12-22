import { FC, useEffect, useRef, useState } from 'react';

interface ServiceProgressBarProps {
    serviceName: string;
    percentage: number;
}

export const ServiceProgressBar: FC<ServiceProgressBarProps> = ({serviceName, percentage}) => {

  const [progressWidth, setProgressWidth] = useState(0);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const fillProgressBar = () => {
      if (progressBarRef.current) {
          const { top, bottom } = progressBarRef.current.getBoundingClientRect();
          const isVisible = (top < window.innerHeight && bottom >= 0);
          if (isVisible) {
              setProgressWidth(percentage);
          }
      }
  };

  useEffect(() => {
      window.addEventListener('scroll', fillProgressBar);
      fillProgressBar(); // Comprobación inicial al cargar la página

      return () => {
          window.removeEventListener('scroll', fillProgressBar);
      };
  }, []);

  return (
    <div className="serviceprogressbar" ref={progressBarRef}>
      <div className="serviceprogressbar__info">
        <span className="serviceprogressbar__name">{serviceName}</span>
        <span className="serviceprogressbar__percentage">{progressWidth}%</span>
      </div>
      <div className="serviceprogressbar__progress-bar">
        <div className="serviceprogressbar__progress" style={{ width: `${progressWidth}%`, transition: 'width 1s ease-in-out' }} />
      </div>
    </div>
  )
}
