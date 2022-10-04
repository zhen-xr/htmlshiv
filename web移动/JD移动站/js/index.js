//加载完毕事件	
window.onload = function() {
	//顶部通栏滚动效果
	headerScroll();

	// 倒计时效果
	cutDownTime();

	//轮播图效果
	banner();

}
//通栏方法
function headerScroll() {
	// headerDom.style.backgroundColor='rgba(201,21,35,0)';
	//获取需要的参数
	//距离顶部的高度
	// document.querySelector('.jd_nav').offsetTop;
	// 元素自身高度
	// document.querySelector('.jd_nav').offsetHeight;
	var navDom = document.querySelector('.jd_nav');
	var maxDistance = navDom.offsetTop + navDom.offsetHeight;
	// console.log(maxDistance);
	// 获取顶部通栏
	var headerDom = document.querySelector('.jd_header');

	// 注册onscroll事件
	window.onscroll = function() {
		// 获取滚动距离
		var scrollDistance = document.documentElement.scrollTop || document.body.scrollTop;
		// console.log(scrollDistance);
		// 计算一个0-1的百分数
		var percent = scrollDistance / maxDistance;
		// console.log(percent);
		// 超过1无意义
		if(percent>1){
			percent = 1;
		}

		// 设置顶部通栏的透明度
		headerDom.style.backgroundColor = 'rgba(201,21,35,'+percent+')';
	}
}

// 倒计时方法
function cutDownTime(argument) {
	//定义总时间
	var totalHour = 3;
	//转化
	var totalSec = 3*60*60;
	//获取标签
	var liArr = document.querySelectorAll('.main_content .content_top ul li');
	// console.log(liArr);
	//定时器
	var timeld = setInterval(function(){
		totalSec--;
		var houer = Math.floor(totalSec / 3600);
		var minute = Math.floor(totalSec%3600/60);
		var sec = totalSec%60;
		
		//修改
		liArr[0].innerHTML = Math.floor(houer/10);
		liArr[1].innerHTML = houer%10;
		liArr[3].innerHTML = Math.floor(minute/10);
		liArr[4].innerHTML = minute%10;
		liArr[6].innerHTML = Math.floor(sec/10);
		liArr[7].innerHTML = sec%10;
	},1000)
}

// 轮播图方法
function banner(argument) {
	//滑动切换
	var width = document.body.offsetWidth;
	// console.log(width);
	// 获取轮播图ul
	var moveUl = document.querySelector('.banner_images');
	//添加过渡
	// moveUl.style.transition = 'all 1s';
	//索引标签
	var indexArr = document.querySelectorAll('.banner_index li');
	// console.log(indexArr);
	//计时器
	var index = 0;
	var timeld = setInterval(function(){
		index++;
		//判断
		if(index>7){
			index=0;
			//关闭过渡
			moveUl.style.transition = '';
		 }else{
			 moveUl.style.transition = 'all 1s';
		 }
		moveUl.style.transform = 'translateX('+index*width*-1+'px)';
		// console.log(moveUl.style.transform);
		//修改li标签
		//排他
		for(var i=0;i<indexArr.length;i++){
			indexArr[i].className = '';
		}
		//给当前li添加
		indexArr[index].className = 'current';
	},1000)
}
