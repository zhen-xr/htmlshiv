const express = require('express')
const app = express()

app.get('/',(req,res)=>{
	throw new Error('服务器内部发生错误！')
	res.send('Home page.')
})

// 定义错误中间件，捕获整个项目的异常错误，从而防止程序的崩溃
app.use((err,req,res,next)=>{
	console.log('发生了错误！'+ err.message)
	res.send('Error:'+ err.message)
})

app.listen(80,(req,res)=>{
	console.log('http://127.0.0.1')
})