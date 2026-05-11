import express from 'express'
import travelService from '../services/travelService.js'
const router = express.Router()

// 景点推荐
router.post('/recommand', async(req, res) => {
    const {city,budget,days}=req.body
    // 判断参数
    if(!city||!budget||!days){
        return res.status(400).json({
            success:false,
            error:'缺少必要参数'
        })
    }

  const result= await  travelService.recommand(city, budget, days)
    return res.json(result)
    // return res.json({
    //     message: '推荐景点',
    //     time: new Date().toISOString()
    // })
})

router.post('/chat', (req, res) => {
    return res.json({
        message: '对话',
        time: new Date().toISOString()
    })
})

export default router