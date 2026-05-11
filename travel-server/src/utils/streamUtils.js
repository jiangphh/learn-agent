export const createStreamResponse=(res)=>{
    // 设置响应头
    res.setHeader('Content-Type','text/event-stream')
    //确保客户端每次都是接收最新的数据
    res.setHeader('Cache-Control','no-cache')
    // 保持http连接为长连接
    res.setHeader('Connecton','keep-alive')
    return {
        send:(data)=>{
            try {
                console.log(`data: ${JSON.stringify(data)}\n\n`)
                res.write(`data: ${JSON.stringify(data)}\n\n`)
            } catch (error) {
                console.log('流式发送错误',error)
            }
        },
        end:()=>{
            try {
                res.write(`event: end\ndata:{"done": true}\n\n`)
                res.end()
            } catch (error) {
                console.log('流式结束失败',error)
            }
        },
        error:(message)=>{
            try {
                res.write(`data: ${JSON.stringify(message)}\n\n`)
                res.end()
            } catch (error) {
                console.log('流式数据错误',error)
            }
        }
    }
}