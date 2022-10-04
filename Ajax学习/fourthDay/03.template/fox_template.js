function fox_template(str,obj) {
	//准备正则
	var reg = /\w+/;
	
	//准备挖坑字符串
	var str = str;
	
	//准备填坑对象
	var obj = obj;
	
	// 首先 使用正则对象 验证一次 字符串 while 会看 result 是否有值
	var result;
	while( result = reg.exec(str)){
		//获取匹配key
		var key = result[0];
		
		//通过key 获取value
		var value = obj[key];
		
		//替换
		str  = str.replace(key,value);
	}
	//执行完毕 替换完成
	return str;
}

function fox_template_pro(str,obj) {
	// 准备正则 匹配至少一个 字母
	// 正则的 开始 是 {{    结束是}}
	// 中间的 小括号 可以对 正则 筛选出来的 字符串 再次筛选
	var reg = /{{(\w+)}}/;
	
	var str = str;
	var obj = obj;
	
	var result;
	while( result = reg.exec(str)){
		var key = result[1];
		var value = obj[key];
		
		str = str.replace(result[0],value);
	}
	return str;
}