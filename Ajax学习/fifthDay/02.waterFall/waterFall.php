<?php 
	header('content-type:text/html;charset=utf-8');
	//读取json文件
	$jsonStr = file_get_contents('info/data.json');
	//转化为php arr
	$totalArr = json_decode($jsonStr);
	//获取随机10个值
	$randKeys = array_rand($totalArr,10);
	// print_r($randKeys);
	
	//准备新数组
	$newArr = array();
	//使用随机的key取随机的值 cound(数组)可以获取php数组长度
	for($i=0;$i<count($randKeys);$i++){ 
		//获取key 
		$key = $randKeys[$i];
		//获取值 从总数组获取
		$obj =  $totalArr[$key];
		//丢值给新数组
		$newArr[$i] = $obj;
	}
	// print_r($newArr);
	//将这10个值转化为json格式字符串发给浏览器
	echo json_encode($newArr);
?>