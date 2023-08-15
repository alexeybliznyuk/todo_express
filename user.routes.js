import Router from 'express'
//import userController from "../controller/user.controller.js"
//import userController from '../controller/user.controller.js'
//const Router = express()
//Router = require("express")
//const router = new Router()
const router = new Router()
class UserController {
    async createUser(req, res) {
//        const {login, password} = req.body 
//        console.log(login, password)
        console.log('got post')
        res.json('ok')
//        res('ok')
    }
}
let userController = new UserController();
//import userController from "../controller/user.controller.js"

router.post('/user', userController.createUser())
//router.post('/user', async (req, res) => {
//            console.log('got post')
//            res.json('ok')
//        })
router.get('/user',  userController.getUsers)
router.post('/user/:id', userController.getUser)
router.put('/user/:id', userController.updateUser)
router.delete('/user:id', userController.deleteUser)



export default router;


//module.exports.router = router;
