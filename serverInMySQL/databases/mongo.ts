import mongoose from 'mongoose';

import {mongodb} from './keys/mongokeys'

 mongoose.connect(mongodb.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
})
  .then(db => console .log('Mongo is connected'))
  .catch(err => console.log(err)); 


