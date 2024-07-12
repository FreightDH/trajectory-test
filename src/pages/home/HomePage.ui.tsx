import { type FC, type ReactElement } from 'react';

import { useFetch } from '@/shared/lib';
import { Car } from '@/shared/UI/Car';

import cl from './HomePage.module.scss';

export const HomePage: FC = (): ReactElement => {
  const [cars, , isLoading, isError] = useFetch('https://test.tspb.su/test-task/vehicles');

  return (
    <main className={cl.page}>
      <section className={cl.cars}>
        <div className="cars__container">
          <div className={cl.cars__body}>
            {isLoading && <h1 className={cl.cars__title}>Loading...</h1>}
            {isError && <h1 className={cl.cars__title}>Something went wrong! Try again later.</h1>}
            <h1 className={cl.cars__title}>Cars</h1>
            <ul className={cl.cars__list}>{cars && cars.map((car) => <Car key={car.id} car={car} />)}</ul>
          </div>
        </div>
      </section>
    </main>
  );
};
