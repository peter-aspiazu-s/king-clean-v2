import { FC, useEffect, useState } from 'react';

interface ServiceProgressBarProps {
    serviceName: string;
    percentage: number;
}

export const ServiceProgressBar: FC<ServiceProgressBarProps> = ({serviceName, percentage}) => {

    const [progressWidth, setProgressWidth] = useState(0);

    useEffect(() => {
        setProgressWidth(percentage);
    }, [percentage]);

  return (
    <div className="serviceprogressbar">
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
