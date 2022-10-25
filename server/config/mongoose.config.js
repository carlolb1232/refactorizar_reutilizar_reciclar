const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productsdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(()=>console.log("La conexión a la base de datos se realizó con exito"))
  .catch(err=>console.log(`Ocurrio un error: `, err));

