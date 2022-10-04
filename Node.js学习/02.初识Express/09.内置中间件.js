const express = require('express')
const app = express()

// 通过 express.json() 这个中间件，解析表单中的JSON 格式的数据
app.use(express.json())
// 通过express.urlencoded() 这个中间件，来解析表单中的url-encoded 格式的数据
app.use(express.urlencoded({extended:false}))
// 路由
app.get('/user',(req,res)=>{
	// 在服务器，可以使用 req.body 这个属性，来接收客户端发送过来的请求体数据
	console.log(req.body)
	res.send('ok')
})

app.listen(80,(req,res)=>{
	console.log('http://127.0.0.1')
})
