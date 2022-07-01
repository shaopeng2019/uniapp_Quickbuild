import md5Libs from "../uview-ui/libs/function/md5";

export const systemInfo = uni.getSystemInfoSync();

//随机数 min ≤ r ≤ max
export function randomNumBoth(Min, Max) {
	var Range = Max - Min;
	var Rand = Math.random();
	var num = Min + Math.round(Rand * Range); //四舍五入
	return num;
}

//创建签名,用于提交表单
export function createSign(mobile, nonstr_str, timestamp_str) {
	var key_str = 'gIZQCfLJ3xusvq8ettcE0nJ6gu288jmj'; //密钥
	// var nonstr_str=randomNumBoth(100000,999999);//随机6位数
	// var timestamp_str=Date.parse(new Date()).toString().substring(0,11);//前11位精确到秒
	var sign = `key=${key_str}&mobile=${mobile}&nonstr=${nonstr_str}&timestamp=${timestamp_str}`;
	console.log(sign)
	return md5Libs.md5(sign).toUpperCase();
}

// rpx 转换 px
export function rpxToPx(rpx) {
	var width = systemInfo.windowWidth;
	return rpx / 750 * width;
}

// 节流
export function debounce(func, delay) {
	var run = true
	return function(...arg) {
		var self = this
		if (!run) {
			return false
		}
		run = false
		func.call(self, ...arg)
		setTimeout(function() {
			run = true
		}, delay || 100)
	}
}

// 防抖
export function throttle(func, delay) {
	let timer = null;
	return function(...arg) {
		self = this
		if (timer) {
			clearTimeout(timer)
		}
		timer = setTimeout(function() {
			func.call(self, ...arg)
		}, delay || 500);
	}
}

