<?php 
	$userArr = array("魈","琴","万叶","温迪","砂糖");
	$postName = $_POST['name'];
	$isIn = in_array($postName,$userArr);
	if($isIn){
		echo "用户名已经被使用了,不好意思";
	}else{
		echo "用户名注册成功";
	}
?>