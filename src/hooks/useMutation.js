import React, { useState, useMemo, useEffect } from 'react';
import useClient from './useClient';
import Mailman from '../Mailman';

const useMutaion = (props) => {

  const client = useClient();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();
  
  const mailman = useState( () => new Mailman(client, props));

  const fetchData = useState( () => async () => {

    setLoading(true);

    try{
      const result = await mailman.deliver();
      setData(result.data);
      setError(result.error);
    } catch (e){
      setError(e);
    }

    setLoading(false);

  });

  useEffect(() => {
    mailman.update(props);
    fetchData();
  }, [query, variables])

  return {
    loading,
    data,
    error,
    mutate: mailman.query,
  };
};

export default useMutaion;
