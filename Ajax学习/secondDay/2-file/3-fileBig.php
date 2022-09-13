<?php 
	header('content-type:text/html; charset= utf-8');
	//获取文件
	$fileArr = $_FILES['upFile'];
	//获取文件名
	$fileName = $fileArr['name'];
	echo $fileName.'<br>';
	//获取服务器上位置
	$filePath = $fileArr['tmp_name'];
	//保存
	move_uploaded_file($filePath,iconv("utf-8","gb2312",'files/'.$fileName));
?>