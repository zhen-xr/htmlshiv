const http = require('http');
const server = http.createServer();
// req是请求对象，包含了与客户端相关的数据和属性
server.on('request',(req,res)=>{
	// req.url 是客户端请求的URL地址
	const url = req.url
	// req.method 是客户端的 method类型
	const method = req.method
	const str = 'Your request url is ${url},and requset method is ${method}'
	console.log(str);
})
server.listen(80,()=>{
	console.log('server running at http://127.0.0.1');
})
