import { FC, useEffect, useState } from 'react';
import ProgressBar from 'react-progress-bar-plus';
import 'react-progress-bar-plus/lib/progress-bar.css';


export const LoadingBar: FC = () => {


    const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Lógica para cargar el porcentaje desde algún lugar
    // Aquí supondré una lógica simple de incremento para propósitos de demostración
    const interval = setInterval(() => {
      if (percentage < 100) {
        setPercentage(percentage + 1);
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <div>
      {/* <ProgressBar percent={100} autoIncrement={true} intervalTime={200} spinner={false} /> */}
      <ProgressBar percent={percentage} />
    </div>
  )
}
