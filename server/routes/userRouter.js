const express = require(`express`);
const router = express.Router();

const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController')
require('dotenv').config()

const { protect } = require('../middelwares/authMiddelware')

router.post('/signup', registerUser)
router.post('/login', loginUser)
router.get('/me', 
 protect,
  getMe)

  module.exports = router;
// app.post(`/login`, (req, res, next) => {
//   const accessToken = generateAccessToken(password)
//   const refreshToken = jwt.sign(password, process.env.REFRESH_TOKEN_SECRET)
//   refreshToken.push(refreshToken)
//   User.find({email:req.body.email , password: req.body.password})
//   .then(() => res.json( {accessToken: accessToken, refreshToken: refreshToken }))
//   .catch(next);
// });

// router.post(`/signup`,  (req, res, next) => {
//   console.log('signup');
//   req.body
//   ? User.create(req.body)
//   .then((data) => res.json(data))
  
//   .catch(next)
//   : res.json({ error: `Please enter an input` });
// });


// router.delete(`/signup/:id`, (req, res, next) => {
//   User.findOneAndDelete({ _id: req.params.id })
//   .then((data) => res.json(data))
//   .catch(next);
// });

// router.get('/post', authenticateToken , (req, res)=>{
  //   res.json(post.filter(post=>post.password === req.body.password))
  // })
  
  // app.post('/token' , (req , res)=>{
    //   const refreshToken = req.body.token
    //   if (refreshToken == null) return res.sendStatus(401)
    //   if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    //   jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, password) => {
      //     if (err) return res.sendStatus(403)
      //     const accessToken = generateAccessToken({})
      //     res.json({ accessToken: accessToken })
      //   })
      // })
      
      // app.delete('/logout', (req , res)=>{
        //   refreshToken = refreshToken.filter(token => token !== req.body.token)
        //   res.sendStatus(204)

// })
// function generateAccessToken(password) {
  //   return jwt.sign(password , process.env.ACCESS_TOKEN_SECRET ,{expireIn: '15s'});
  
  // } 
  
  // function authenticateToken(req , res, next) {
    //   const authHeader = req.headers['authorization']
    //   const token = authHeader && authHeader.split(' ')[1]
    //   if (token == null) return res.sendStatus(401)
    
    //   jwt.verify(token, procces.env.ACCESS_TOKEN_SECRET, (err, password)=>{
  //     if (err) return res.sendStatus(403)
  //     req.body.password = password
  //     next()
  //   })
  
  // }