<?php 
	$message = $_POST['message'];
	
	switch ($message){
		case '你好':
		
		$helloArr = array(
			'嗯嗯',
			'你好'
			);
		$randomKey = array_rand($helloArr,1);
		
		echo $helloArr[$randomKey];
			break;
			
		case '吃饭了没':
			// 准备一些 随机的值
		$foodArr = array(
				'吃了早饭哦',
				'没有吃哦',
				'你要邀请我吗? 我有空哦',
				'不去'
			);
		$randomKey = array_rand($foodArr,1);
		
		echo $foodArr[$randomKey];
			break;	
		
		default:
		// 准备一些 随机的值
		$randomMessage = array(
				'喜洋洋',
				'葫芦娃',
				'好久不见,甚是想念',
				'看到你就烦',
				'滚地板上去睡觉'
			);
		$randomKey = array_rand($randomMessage,1);
		
		echo $randomMessage[$randomKey];
			break;	
	}
?>