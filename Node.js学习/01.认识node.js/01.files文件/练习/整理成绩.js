const fs = require('fs');

fs.readFile('./成绩.txt','utf8',function(err,dataStr){
	if(err){
		return console.log('文件读取失败！'+err.message)
	}
	// console.log('文件读取成功！'+ dataStr)
	
	// 1.先把成绩数据按空格分割split
	const arrOld = dataStr.split(' ');
	// console.log(arrOld);
	// 2.循环分割后的书组，对每一项数据，进行字符串的替换操作
	const arrNew =[];
	arrOld.forEach(item =>{
		arrNew.push(item.replace('=',':'));
	})
	// console.log(arrNew);
	// 3.把新数组中的每一项进行合并，得到一个新的字符串
	const newStr = arrNew.join('\r\n');
	// console.log(newStr);
	// 4.调用fs.writeFile()方法，把处理完毕的成绩，写入到新文件中
	fs.writeFile('./new成绩.txt',newStr,function(err,dtatStr){
		if(err){
			return console.log('文件写入失败！'+err.message);
		}
		console.log('文件写入成功！');
	})
})
