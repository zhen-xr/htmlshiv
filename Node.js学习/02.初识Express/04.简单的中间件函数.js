const express = require('express')
const app = express()

// 定义一个简单的中间件
// const mw = function(req,res,next){
// 	console.log('一个简单的中间件')
// // 传递给下一个中间件
// 	next()
// }
// 将mw 注册为全局生效的中间件
// app.use(mw)

// 简化全局中间件
app.use((req,res,next)=>{
	console.log('简化的全局中间件')
	next()
})

app.get('/',(req,res)=>{
	res.send('Home page.')
})
app.get('/user',(req,res)=>{
	res.send('User page.')
})

app.listen(80,()=>{
	console.log('http://127.0.0.1')
})
