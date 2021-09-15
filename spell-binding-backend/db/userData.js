const User = require('../Models/User')
const seedData = require('./seedData.json')

User.deleteMany({})
.then(() => {
    return User.insertMany(seedData)
 })
    .then(console.log)
    .catch(console.error)
    .finally(()=>{
        process.exit()
    })

