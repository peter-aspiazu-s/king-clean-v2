import { FC, useEffect, useState } from 'react';

interface AnimatedNumberProps {
  value: number;
}

export const AnimatedNumber: FC<AnimatedNumberProps> = ({ value }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const animationDuration = 2000; // Duración de la animación en milisegundos
    const framesPerSecond = 60; // Cuadros por segundo para la animación
    const totalFrames = Math.ceil(animationDuration / 1000 * framesPerSecond); // Número total de cuadros

    const valueIncrement = Math.ceil(value / totalFrames); // Incremento para cada cuadro

    let frame = 0;

    const interval = setInterval(() => {
      if (currentValue < value) {
        setCurrentValue((prevValue) => prevValue + valueIncrement);
      } else {
        setCurrentValue(value);
        clearInterval(interval);
      }

      frame++;

      if (frame >= totalFrames) {
        setCurrentValue(value);
        clearInterval(interval);
      }
    }, 3000 / framesPerSecond);

    return () => clearInterval(interval);
  }, [value, currentValue]);

  return (
    <div className='experiencecounter__number'>{currentValue}</div>
  );
};
