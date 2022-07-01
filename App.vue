<script>
	import { updateWeChatApp } from "@/utils/appUtils"
	export default {
		onLaunch: function() {
			updateWeChatApp();
			console.log('检查更新完成')
		},
		onShow: function() {
		},
		onHide: function() {
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "/uni.scss";
</style>
<style lang="scss">
	@import "uview-ui/index.scss";
</style>
