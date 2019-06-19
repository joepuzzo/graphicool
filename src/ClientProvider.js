import React from 'react';
import ClientContext from './ClientContext';

const ClientProvider = ({client, children}) => {

  return (
    <ClientContext.Provider value={client}>
          {children}
    </ClientContext.Provider>
  );

};

export default ClientProvider;
