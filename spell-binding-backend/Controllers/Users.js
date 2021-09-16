const express = require ('express')
const router = express.Router()
const User = require('../Models/User.js')

router.get('/', (req,res)=> {
    res.send('hello')
    //testing route
})

//basic index r REMEBER TO REMOVE CONSOLE LOGS
router.get('/index', (req, res) => {
    User.find({})
        .then(Users => {
            // console.log(Users)
            res.json(Users)
        })
})

//specific characters r
router.get('/details/:id', (req, res, next) => {
    console.log(`hitting details ${req.params}`)
    User.findById(req.params.id)
    .then(characters=>res.json(characters))
    .catch(next)
})
 //c 

router.post('/new', (req,res, next)=> {
    User.create(req.body)
    .then(characters => console.log(characters))
    .catch(next)
})

router.delete('/delete/:id', (req, res, next) => {
    const id = req.params.id
    console.log(req.params)
    User.findOneAndDelete(
        {_id: id}
    )
    .then(_=>{
        User.find()
        .then(characters => {
            res.json({message: 'success', characters})})
        })    
    .catch(next)
})

router.put('/edit/:id', (req,res, next) =>{
    const id = req.params.id;
    console.log(id,req.body)
    User.findOneAndUpdate(
        { _id: id },
        req.body,
        {new:true}
    )
          .then(char =>{
              User.find()
              .then(characters =>{ res.json({char,characters}) })
          })
          .catch(next)
})

module.exports = router; 