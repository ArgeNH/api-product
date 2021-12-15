const mongoose = require('mongoose');

//const url = 'mongodb+srv://Arge:naruto32@cluster0.qiivs.mongodb.net/product';
const url = 'mongodb+srv://diegoH:vbbaR57g0bTSe5xz@cluster0.qiivs.mongodb.net/product';

mongoose.connect(url)
    .then(() => console.log('Connect DB Success'))
    .catch((err) => console.log(`ERROR to connect : ${err.message}`));

module.exports = mongoose;