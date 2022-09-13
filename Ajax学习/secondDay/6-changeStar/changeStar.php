<?php 
	$picture = array(
		'onePiece'=>'img/onePiece.jpg',
		'lyh' =>'img/liyanhong.jpg' ,
		'my' =>'img/mayun.jpg' 
	);
	$key = $_POST['starName'];
	echo $picture[$key];
?>