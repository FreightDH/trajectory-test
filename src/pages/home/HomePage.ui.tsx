import { type FC, type ReactElement } from 'react';
import { Select } from 'antd';

import { useFetch } from '@/shared/lib';
import { Car } from '@/shared/UI/Car';

import cl from './HomePage.module.scss';

export const HomePage: FC = (): ReactElement => {
  const [cars, setCars, isLoading, isError] = useFetch('https://test.tspb.su/test-task/vehicles');

  const handleSort = (value: string) => {
    switch (value) {
      case 'year':
        setCars([...cars!].sort((a, b) => a.year - b.year));
        break;
      case 'price':
        setCars([...cars!].sort((a, b) => a.price - b.price));
        break;
      default:
        break;
    }
  };

  return (
    <main className={cl.page}>
      <section className={cl.cars}>
        <div className="cars__container">
          <div className={cl.cars__body}>
            {isLoading && <h1 className={cl.cars__title}>Loading...</h1>}
            {isError && <h1 className={cl.cars__title}>Something went wrong! Try again later.</h1>}
            <h1 className={cl.cars__title}>Cars</h1>
            <Select
              placeholder="Sort by"
              style={{ width: '20%', alignSelf: 'end' }}
              options={[
                {
                  label: 'Year',
                  value: 'year',
                },
                {
                  label: 'Price',
                  value: 'price',
                },
              ]}
              onChange={handleSort}
            />
            <ul className={cl.cars__list}>
              {cars && cars.map((car) => <Car key={car.id} car={car} setCars={setCars} />)}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};
