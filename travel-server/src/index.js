import express from 'express'

const app = express()

const port = 3222

// // 创建一个心跳接口
// app.get('/heartbeat',(req,res)=>{
//     // req请求头，res响应
//     res.json({
//         message:'请求成功',
//         time:new Date().toISOString()
//     })
// })

app.listen(port,()=>{
    console.log(`server port:http://localhost:${port}`)
})