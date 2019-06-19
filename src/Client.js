import { EventEmitter } from 'events';

class Client extends EventEmitter {
  constructor(config){
     // Dont forget to call super! :)
     super();
    this.config = config;
  }

  async retrieve( mail ){
    const res = await fetch( this.config.url , {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( mail )
    });

    console.log('RES', res);

    return res.json();
  }

}

export default Client;