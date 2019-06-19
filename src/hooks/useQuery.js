import React, { useState, useMemo, useEffect, useRef } from 'react';
import useClient from './useClient';
import Mailman from '../Mailman';

const useQuery = (props) => {

  const client = useClient();

  const { 
    query, 
  } = props;

  const queryRef = useRef(query);
  queryRef.current = query;

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [errors, setErrors] = useState();
  
  const [mailman] = useState( () => new Mailman(client, props));

  const [fetchData] = useState( () => async (mail) => {

    setLoading(true);

    try{
      const result = await mailman.deliver(mail);
      setData(result.data);
      setErrors(result.errors);
    } catch (e){
      setErrors([e]);
    }

    setLoading(false);

  });

  useEffect(() => {
    mailman.subscribe(query);
    fetchData(query);
    return () => {
      mailman.unsubscribe();
    }
  }, [query])


  return {
    loading,
    data,
    errors,
    query: fetchData,
    refetch: () => fetchData(queryRef.current)
  };
};

export default useQuery;
