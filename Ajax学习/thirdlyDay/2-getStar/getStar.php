<?php
	$key = $_POST['name'];
	
	$starArr = array(
		'baby'=>array('images/baby.jpg','Angelababy，中文名杨颖，1989年2月28日出生于上海，中国内地影视女演员、模特'),
		'hxm'=>array('images/hxm.jpg','baby的老公,教主,著名男演员,最近演了一部烂片'),
		'lh'=>array('images/lh.jpg','红魔,傻狍子,小鲜肉,萌萌哒,我家有一副1米的海报')
	);
	
	$oneStar = $starArr[$key];
	echo $oneStar[0];
	echo '|';
	echo $oneStar[1];
	
?>