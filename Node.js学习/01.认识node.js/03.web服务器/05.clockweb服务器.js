// 1.模块
const http = require('http');
const fs = require('fs');
const path = require('path');
// 2.1创建web 服务器
const server = http.createServer();
// 2.2.监听
server.on('request',(req,res)=>{
	// 3.获取客户端url
	const url = req.url
	// const fpath = path.join(__dirname,url)
	let fpath = ''
	if(url === '/'){
		fpath = path.join(__dirname,'./clock/index.html')
	}else{
		fpath = path.join(__dirname,'/clock',url)
	}
	// 4.读文件
	fs.readFile(fpath,'utf8',(err,dataStr)=>{
		if(err)return res.end('404 Not found.')
		res.end(dataStr)
	})
})
//2.3启动服务器
server.listen(80,()=>{
	console.log('server running at ')
})
