import express from "express"
//const userRouter = require('./routes/user.routes.router')
//const router = require("./routes/user.routes")
import router from './routes/user.routes.js'
//import userRouter from user.routes.js
//import router from user.routes.js
const PORT = 5000;

const app = express()
app.use(express.json())


//app.use('/api', userRouter)
app.use('/api', router)




//app.post('/', (req, res) => {
//    console.log(req.body);
//    res.status(200).json('Server works123')
//})


app.listen(PORT, () => co
