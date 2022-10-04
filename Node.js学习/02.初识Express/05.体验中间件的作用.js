const express = require('express')
const app = express()

app.use((req,res,next)=>{
	// 获取请求到达服务器的时间
	const time = Date.now()
	// 为req 对象，挂载自定义属性，从而吧时间共享给后面的所有路由
	req.startTime = time
	next()
})
app.get('/' ,(req,res)=>{
	res.send('Home page.'+ req.startTime)
})
app.get('/user',(req,res)=>{
	res.send('User page.'+ req.startTime)
})

app.listen(80,()=>{
	console.log('http://127.0.0.1')
})
