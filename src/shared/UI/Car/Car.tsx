import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useState, type FC, type ReactElement } from 'react';
import { Button, Input } from 'antd';

import cl from './Car.module.scss';

interface CarProps {
  car: Car;
  setCars: Dispatch<SetStateAction<Car[] | null>>;
}

export const Car: FC<CarProps> = ({ car, setCars }): ReactElement => {
  const [newCar, setNewCar] = useState(car);
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setNewCar({ ...newCar, [name]: value });
  };

  const handleClick = () => {
    if (!isEdit) {
      setIsEdit(true);
      return;
    }

    setIsEdit(false);
    setCars((prevCars) =>
      prevCars!.map((item) => {
        if (item.id === car.id) {
          return newCar;
        }
        return item;
      })
    );
  };

  return (
    <li key={car.id} className={cl.car}>
      <div className={cl.car__name}>{`${car.name} ${car.model}`}</div>
      <div className={cl.car__info}>
        <div>
          <span>Color:</span>{' '}
          {isEdit ? (
            <Input name="color" placeholder={car.color} style={{ width: 'auto' }} onChange={handleChange} />
          ) : (
            car.color
          )}
        </div>
        <div>
          <span>Year:</span>{' '}
          {isEdit ? (
            <Input
              name="year"
              placeholder={car.year.toString()}
              style={{ width: 'auto' }}
              onChange={handleChange}
            />
          ) : (
            car.year
          )}
        </div>
        <div>
          <span>Price:</span>{' '}
          {isEdit ? (
            <Input
              name="price"
              placeholder={car.price.toString()}
              style={{ width: 'auto' }}
              onChange={handleChange}
            />
          ) : (
            car.price
          )}
        </div>
      </div>
      <Button type="primary" onClick={handleClick}>
        {isEdit ? 'Save' : 'Edit'}
      </Button>
    </li>
  );
};
