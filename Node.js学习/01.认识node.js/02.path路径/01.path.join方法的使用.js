const path = require('path');
const fs = require('fs');

// ../会抵消前面的路径
const pathStr = path.join('/a','/b/c','../','/d');
console.log(pathStr);

// 路径拼接
const fs = require('fs');
fs.readFile(path.join(__dirname,'../files/1.txt'),'utf8',function(err,dataStr){
	if(err){
		return console.log(err.message);
	}
	console.log(dataStr);
})
