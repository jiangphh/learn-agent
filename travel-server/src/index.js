import express from 'express'
import travelRouter from './routes/travel.js'
import 'dotenv/config'
const app = express()

const port = process.env.PORT

// // 创建一个心跳接口
// app.get('/heartbeat',(req,res)=>{
//     // req请求头，res响应
//     res.json({
//         message:'请求成功',
//         time:new Date().toISOString()
//     })
// })

// 处理body,放在所有接口定义之前
app.use(express.json())
// 编码转换
app.use(express.urlencoded({
    extended: true
}))

// 创建一个中间件
app.use('/api/travel', travelRouter)

app.listen(port, () => {
    console.log(`server port:http://localhost:${port}`)
})