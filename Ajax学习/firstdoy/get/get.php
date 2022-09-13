<?php
	header('content-type:text/html;charset=utf-8');
	
	echo'get的提交页面';
	echo'<br>';
	echo$_GET['userName'];
	echo'<br>';
	echo$_GET['userSkill'];
	echo'<h1>'.$_GET['userName'].'欢迎你！'.'</h1>';
?>
