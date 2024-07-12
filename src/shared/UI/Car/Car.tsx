import type { FC, ReactElement } from 'react';
import cl from './Car.module.scss';

interface CarProps {
  car: Car;
}

export const Car: FC<CarProps> = ({ car }): ReactElement => {
  return (
    <li key={car.id} className={cl.car}>
      <div className={cl.car__name}>{`${car.name} ${car.model}`}</div>
      <div className={cl.car__color}>
        <span>Color:</span> {car.color}
      </div>
      <div className={cl.car__year}>
        <span>Year:</span> {car.year}
      </div>
      <div className={cl.car__price}>
        <span>Price:</span> {car.price}
      </div>
      <button className={cl.car__btn}>Edit</button>
    </li>
  );
};
