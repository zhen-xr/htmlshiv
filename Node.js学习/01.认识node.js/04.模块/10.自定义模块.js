// module.exports
const style = '风'
module.exports.username = '魈'
module.exports.sayHello = function(){
	console.log('三眼五显仙人')
}
module.exports.style =style
// 让module.exports 指向一个全新的对象
module.exports = {
	nickname: '肖宫',
	sayHi(){
		console.log('Hi!')
	}
}