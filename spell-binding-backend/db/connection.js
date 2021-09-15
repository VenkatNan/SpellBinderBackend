const mongoose = require('mongoose')

const mongoURI = 
process.env.NODE_ENV === 'production'
? process.env.DB_URL
: 'mongodb://localhost/users';

mongoose.connect(mongoURI, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then((instance) => {
    console.log(`connected to db: ${instance.connections[0].name}`)

})
.catch((err) => console.log(`failed to connect ${err}`))

module.exports = mongoose