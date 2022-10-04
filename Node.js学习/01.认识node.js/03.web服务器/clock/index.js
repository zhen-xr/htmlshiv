
			var btnArr = document.getElementsByTagName("button");
			var box2 = document.getElementsByClassName("box2")[0];
			var box3 = document.getElementsByClassName("box3")[0];

			var timer = null;
			btnArr[0].onclick = function() {
				// 	timer = setInterval(function() {
				// 		box2.style.left = box2.offsetLeft + 10 + "px";
				// 		if (box2.offsetLeft === 200) {
				// 			clearInterval(timer);
				// 		}
				// 	}, 100)
				animate(box2, 200);
				animate(box3, 200);
			}

			btnArr[1].onclick = function() {
				// 	timer = setInterval(function() {
				// 		box2.style.left = box2.offsetLeft + 10 + "px";
				// 		if (box2.offsetLeft === 400) {
				// 			clearInterval(timer);
				// 		}
				// 	}, 100)
				animate(box2, 400);
				animate(box3, 400);
			}

			//封装
			function animate(ele, disance) {
				clearInterval(ele.timer);
				var speed = disance > ele.offsetLeft ? 10 : -10;
				ele.timer = setInterval(function() {
					var val = disance - ele.offsetLeft;
					ele.style.left = ele.offsetLeft + speed + "px";
					if (Math.abs(val) < Math.abs(speed)) {
						ele.style.left = disance + "px";
						clearInterval(ele.timer);
					}
				}, 10)

			}
		