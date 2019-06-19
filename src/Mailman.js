
import { EventEmitter } from 'events';

class Mailman extends EventEmitter {

  constructor( client ){
    // Dont forget to call super! :)
    super();
    this.client = client;
  }

  deliver( mail ) {
    return this.client.retrieve(mail);
  }

  subscribe( mail ){
    this.onChangeHandler = () => {
      // Determine if we care about change and emit event
      this.emit('delivery');
    };
    this.client.on('change', this.onChangeHandler);
  }

  unsubscribe(){
    this.client.removeListener('change', this.onChangeHandler);
  }
}

export default Mailman;