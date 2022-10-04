const fs = require('fs');

fs.readFile('./1.txt','utf8',function(err,dataStr){
	// 判断err是否为null,从而知晓文件读取结果
	if(err){
		return console.log('读取文件失败！'+ err.message)
	}
	console.log('读取文件成功！'+ dataStr)
})

