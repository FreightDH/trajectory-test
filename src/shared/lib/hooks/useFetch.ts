import type { Dispatch, SetStateAction } from 'react';
import { useState, useEffect } from 'react';

export const useFetch = (
  url: string
): [Car[] | null, Dispatch<SetStateAction<Car[] | null>>, boolean, boolean] => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<Car[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);

        if (!res.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const response = await res.json();
        setData(response);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return [data, setData, isLoading, isError];
};
