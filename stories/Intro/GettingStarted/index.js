import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { useQuery, ClientProvider, Client } from '../../../src';

const DOG_QUERY = {
  query: `{
    dog(id: 1) {
      id
      name
      age
      owner {
        name
      }
    }
  }`
};

const Dog = () => {
  const {
    data,
    errors, 
    loading,
    refetch
  } = useQuery({
    query: DOG_QUERY
  });

  if (loading) return "Loading...";

  return (
    <>
      {errors ? <span>{`Errors! ${errors[0].message}`}</span> : null}
      <br />
      <span>{JSON.stringify(data, null, 2)}</span>
      <button type="button" onClick={refetch}>Refetch</button>
    </>
  );
}

const client = new Client({
  url: 'http://localhost:8080/graphql'
});


const GettingStarted = () => (
  <div>
    <ClientProvider client={client}>
      <Dog />
      <br/>
      <br/>
      <Dog />
    </ClientProvider>
  </div>
);

export default withDocs(readme, GettingStarted);
