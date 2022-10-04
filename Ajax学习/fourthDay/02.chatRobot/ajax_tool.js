//ajax get 五部曲
function ajax_get(url,data) {
	var ajax = new XMLHttpRequest();
	
	if (data) {
		url+='?';
		url+=data;
	}else{
		
	}
	ajax.open('get',url);
	ajax.send();
	ajax.onreadystatechange =function() {
		if(ajax.readyState == 4 && ajax.status){
			console.log(ajax.responseText);
		}
	}
}

// ajax_post五部曲
function ajax_post(url,data) {
	var ajax = new XMLHttpRequest();
	ajax.open('POST',url);
	ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	if (data) {
		ajax.send(data);
	}else{
		ajax.send();
	}
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200){
			console.log(ajax.responseText);
		}
	}
}

//将 get 和  post 封装到一起
function ajax_tool(url,data,method,success) {
	var ajax = new XMLHttpRequest();
	if(method == 'get') {
		if (date) {
			url+='?';
			url+=data;
		}else{
			
		}
		ajax.open(method,url);
		ajax.send();
	}else{
		ajax.open(method,url);
		ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		if (data) {
			ajax.send(data);
		}else{
			ajax.send();
		}
	}
	ajax.onreadystatechange = function() {
		if(ajax.readyState ==4 && ajax.status == 200){
			success(ajax.responseText);
		}
	}
}

//工具函数优化 只接收一个参数
function ajax_tool_pro(option) {
	var ajax = new XMLHttpRequest();
	if (option.method == 'get') {
		if (option.data) {
			option.url+='?';
			option.url+=option.data;
		}else{
			
		}
		ajax.open(option.method,option.url);
		ajax.send();
	}else{
		ajax.open(option.method,option.url);
		ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		if (option.data){
			ajax.send(option.data);
		}else{
			ajax.send();
		}
	}
	
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200){
			option.success(ajax.responseText);
		}
	}
	
}