import { useState, useEffect } from 'react';
import Severity from '../enums/Severity';
import PageError from '../types/PageError';
import Response from '../types/Response';
import generateID from '../utils/generateID';

export const useFetch = <T> (url: string) => {
  const [response, setResponse] = useState<Response<T> | null>(null);
  const [error, setError] = useState<PageError | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResponse({ status: res.status, message: res.statusText, data: json as T });
      } catch (error) {
        setError({ id: generateID(), status: 500, message: (error as Error).message, severity: Severity.ERROR  });
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return [response, error, isLoading];
};