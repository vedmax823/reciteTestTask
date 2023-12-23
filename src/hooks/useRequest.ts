import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";


export const useRequest = <T>(request : () => Promise<AxiosResponse<T>>) : [T | undefined, boolean, boolean] => {

  const [ships, setShips] = useState<T>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(() => true)
        const responce = await request();
        if (responce.status !== 200) return setError(() => true)
        setShips(() => responce.data);
      } catch (e) {
        setError(() => true)
      } finally {
        setLoading(() => false)
      }
    };
    getData()
  }, [request]);

  return [
    ships,
    error,
    loading
  ];
};