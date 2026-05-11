import express from 'express'
import travelService from '../services/travelService.js'
import { createStreamResponse } from '../utils/streamUtils.js'
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

router.post('/chat', async(req, res) => {
    const {message}= req.body
    if(!message){
        return res.status(400).json({
            success:false,
            error:'缺少必要参数'
        })
    }

    // 对SSE流式接口返回处理
    const stream = createStreamResponse(res)
    
    const result =await travelService.chat(message,(chunk)=>{
        stream.send({
            type:'chunk',
            content:chunk,
        })
    })
    stream.send({
        type:'complete',
        data:result,
    })
    stream.end()



   // return res.json({
    //     message: '对话',
    //     time: new Date().toISOString()
    // })
})

export default router