const mongoose = require('mongoose');
const user= 'gastonmanzano';
const password = '2122559tonga';
const dbname = 'Armory';
const uri = `mongodb+srv://${user}:${password}@armory.tcikw.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri,{
   useUnifiedTopology: true,
   useNewUrlParser: true
})
.then(db => console.log('data base connected'))
.catch(err => console.log(err));
