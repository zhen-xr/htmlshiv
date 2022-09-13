<?php 
	header('content-type:text/html; charset= utf-8');
	//二维数组
	$twoArr = array(
			array('魈',' 琴','温迪'),
			array('可莉','姥爷','胡桃'),
			array('钟离','阿贝多','诺艾尔'),
			array('绫华','迪奥娜','尤拉')
	);
	//阿贝多
	echo $twoArr[2][1];
	echo'<br>';
	// echo $twoArr[2];
	//输出数组
	print_r($twoArr[2]);
?>