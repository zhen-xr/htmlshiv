<?php
	header('content-type:text/html; charset= utf-8');
	//获取上传文件信息
	$fileArr = $_FILES['upFile'];
	//显示文件名
	$fileName = $fileArr['name'];
	echo $fileName.'<br>';
	//获取保存在服务器上的位置
	$filePath = $fileArr['tmp_name'];
	echo $filePath.'<br>';
	//知道如何在php中将文件保存
	move_uploaded_file($filePath,'files/'.$fileName);
?>