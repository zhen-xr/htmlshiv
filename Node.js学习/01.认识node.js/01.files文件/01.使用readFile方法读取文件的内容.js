// 1. 导入fs 模块来操作文件
const fs = require('fs');

 // 2.调用 fs.readFile() 方法读取文件
 // 	参数1:读取文件存放路径
 // 	参数2：读取文件时采用的编码格式
 // 	参数3：回调函数，拿到读取成功和失败的结果 err dataStr
 fs.readFile('./1.txt','utf8',function(err,dataStr){
	 // 2.1打印失败的结果
	 // 读取成功，err值为 null
	 // 读取成功，err值为 错误对象，data的值为undefined
	 console.log(err);
	 console.log('-----------');
	 // 2.2打印成功的结果
	 console.log(dataStr);
 });
 
 