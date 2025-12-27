import { Router } from 'express';

const router = express.Router();


router.get('/signup',(req,res)=>{
    res.render("user/signup")
})



export default router;