<?php 
	header('content-type:text/html; charset= utf-8');
	//模拟数据
	$personArr = array(
		'魈'=>array('name'=>'魈','skill'=>'镜妖傩舞'),
		'可莉'=>array('name'=>'可莉','skill'=>'轰轰火花'),
		'琴'=>array('name'=>'琴','skill'=>'听凭风影')
	);
	//获取用户提交数据
	$key = $_POST['name'];
	print_r($personArr[$key]);
	//将数据保存到变量中 方便使用
	$yuanshen = $personArr[$key];
	//拼接返还给用户
	echo'<h1>'.'角色姓名:'.$yuanshen['name'] .'</h1>';
	echo'<h1>'.'角色技能:'.$yuanshen['skill'] .'</h1>';
?>