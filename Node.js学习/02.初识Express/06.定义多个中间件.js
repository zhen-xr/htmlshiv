const express = require('express')
const app = express()

// 全局中间件1
app.use((req,res,next)=>{
	console.log('调用了第一个中间件')
	next()
})
// 全局中间件2
app.use((req,res,next)=>{
	console.log('调用了第二个中间件')
	next()
})

// 路由
app.get('/user',(req,res)=>{
	res.send('User page.')
})

app.listen(80,(req,res)=>{
	console.log('http://127.0.0.1')
})
