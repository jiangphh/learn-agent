import express from 'express'

const app = express()

const port = 3222
app.listen(port,()=>{
    console.log(`server port:http://localhost:${port}`)
})