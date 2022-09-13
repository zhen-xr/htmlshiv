<?php 
	header('content-type:text/html;charset=utf-8');
	//获取用户提交用户名
	$name = $_GET['userName'];
	//模拟已存在的用户名数据
	$nameArr = array('魈','琴','钟离','阿贝多');
	//验证数据中是否存在用户名
	$result = in_array($name,$nameArr);
	if($result){
		echo 'have';
	}else{
		echo 'not_have';
	}
?>