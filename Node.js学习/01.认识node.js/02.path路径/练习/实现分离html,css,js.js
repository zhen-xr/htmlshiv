// 导入模块
const fs = require('fs');
const path = require('path');
const { resolve } = require('path/posix');

// 定义正则表达式，分别匹配<style></style>和<script></script>标签
// \s表示空白字符，\S表示非空白字符
const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

// 读取文件
fs.readFile(path.join(__dirname,'./01-动画体验.html'),'utf8',function(err,dataStr){
	if(err){
		return console.log('读取文件失败！'+err.message);
	}
	// console.log('读取文件成功'+ dataStr);
	
	// 读取成功后，调用三个方法，分别拆出css,js,html文件
	resolveCSS(dataStr);
	resolveJS(dataStr);
	resolveHTML(dataStr);
})

// 定义处理CSS样式的方法
function resolveCSS(htmlStr){
	// 使用正则提取所需要的内容exec();
	const r1 = regStyle.exec(htmlStr);
	// console.log(r1);
	// 进行字符串的替换操作replace
	const newCSS = r1[0].replace('<style>','').replace('</style>','');
	// console.log(newCSS);
	// 讲样式导入新目录文件
	fs.writeFile(path.join(__dirname,'../clock/index.css'),newCSS,function(err,dataStr){
		if(err){
			return console.log('写入CSS样式失败！'+ err.message)
		}
		console.log('写入CSS样式成功！');
	})
}

// JS
function resolveJS(htmlStr){
	const r2 = regScript.exec(htmlStr);
	const newJS = r2[0].replace('<script>','').replace('</script>','');
	// console.log(newJS);
	// 写入
	fs.writeFile(path.join(__dirname,'../clock/index.js'),newJS,function(err,dataStr){
		if(err){
			return console.log('写入JS脚本失败！'+ err.message);
		}
		console.log('写入JS脚本成功！');
	})
}

// HTML
function resolveHTML(htmlStr){
	const newHTML = htmlStr.replace(regStyle,'<link rel="StyleSheet" href="./index.css">')
	.replace(regScript,'<script src="./index.js"></script>');
	fs.writeFile(path.join(__dirname,'../clock/index.html'),newHTML,function(err,dataStr){
		if(err){
			return console.log('写入HTML结构失败！'+ err.message);
		}
		console.log('写入HTML结构成功！');
	})
}