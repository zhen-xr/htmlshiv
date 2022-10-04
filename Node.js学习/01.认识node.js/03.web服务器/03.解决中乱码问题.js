const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
	// 定义一个字符串，包含中文的内容
	const str = '您请求的URL地址是 ${req.url},请求的method类型为 ${req.method}'
	// 调用res.setHeader()方法，设置Content-Type 响应头，解决中文乱码问题
	res.setHeader('Content-Type', 'text/html; charset = utf-8');
	// res.end()讲内容响应给客户
	res.end(str);
})
server.listen(80, () => {
	console.log('server running at http://127.0.0.1');
})
