import React, { useContext } from 'react';

import ClientContext from '../ClientContext';

const useClient = () => {

  const client = useContext(ClientContext);

  return client;
}

export default useClient;
