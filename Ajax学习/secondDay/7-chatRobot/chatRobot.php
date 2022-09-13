<?php 
	$messageList = array(
		'你好啊^_^',
		'我没有吃饭哦',
		'老地方见',
		'讨厌',
		'死鬼  嘿嘿嘿' 
	);
	
	$randomKey = array_rand($messageList);
	echo $messageList[$randomKey];
?>