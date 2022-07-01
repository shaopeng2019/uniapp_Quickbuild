// 公共混入
export const publicMixin = {
	data(){
		return {
			staticHost:'' // 存放静态资源的服务器地址
		}
	},
	computed: {
		// 获取国际化
		// i18n() {
		// 	let pages = getCurrentPages();
		// 	let page = pages[pages.length - 1].route;
		// 	let controller = page.split('/')[1];
		// 	let action = page.split('/')[2];
		// 	let context = this.$t(controller + '.' + action);
		// 	// 设置Page Title
		// 	uni.setNavigationBarTitle({
		// 		title: context.title ? context.title : ''
		// 	})
		// 	return context;
		// }
	}
}

