<template>
	<!-- tabbar 底部导航自定义组件 -->
	<view class="like-tabbar">
		<view class="tabbar-bottom">
			<view class="menu-item" v-for="(item,index) in list" :key="item.id" @click="()=>{menuClick(item)}">
				<block v-if="index===0">
					<view class="unchecked" :class="{'show':item.id!==selected}">
						<image class="unchecked-icon big" :src="item.uncheckedIcon" mode="widthFix"></image>
					</view>
					<view class="checked" :class="{'show':item.id===selected}">
						<image class="unchecked-icon big" :src="item.checkedIcon" mode="widthFix"></image>
					</view>
				</block>
				<block v-else>
					<view class="unchecked" :class="{'show':item.id!==selected}">
						<image class="unchecked-icon" :src="item.uncheckedIcon" mode="heightFix"></image>
						<view class="menu-text">{{item.name}}</view>
					</view>
					<view class="checked" :class="{'show':item.id===selected}">
						<image class="unchecked-icon" :src="item.checkedIcon" mode="heightFix"></image>
						<view class="menu-text">{{item.name}}</view>
					</view>
				</block>
			</view>
		</view>
		<!-- 底部空白占位 -->
		<view class="bottom-block"></view>
	</view>
</template>

<script>
	/**
	 * @property {Number} current 当前选中的项（默认0）
	 */
	//全局混入
	import { publicMixin } from '@/mixin/public.js'
	import { rpxToPx } from '@/utils/util.js'
	export default {
		name: 'custom-tabbar',
		mixins: [publicMixin],
		data() {
			return {
				selected: 0,
				list: [{
						id: 0,
						name: '首页',
						uncheckedIcon: '/static/images/components/tabbar/icon-1-big.png',
						checkedIcon: '/static/images/components/tabbar/icon-active-1-big.png',
						path: '/pages/home/index',
						meta: {
							mode: 'reLaunch' //跳转方式
						}
					},
					{
						id: 1,
						name: '取色',
						uncheckedIcon: '/static/images/components/tabbar/icon-2.png',
						checkedIcon: '/static/images/components/tabbar/icon-active-2.png',
						path: '/pages/takecolor/index',
						meta: {
							mode: 'navigateTo' //跳转方式
						}
					},
					{
						id: 2,
						name: '色卡',
						uncheckedIcon: '/static/images/components/tabbar/icon-3.png',
						checkedIcon: '/static/images/components/tabbar/icon-active-3.png',
						path: '/pages/colorcard/index',
						meta: {
							mode: 'navigateTo' //跳转方式
						}
					},
					{
						id: 3,
						name: '商城',
						uncheckedIcon: '/static/images/components/tabbar/icon-4.png',
						checkedIcon: '/static/images/components/tabbar/icon-active-4.png',
						path: '/pages/like/index',
						meta: {
							mode: 'navigateTo' //跳转方式
						}
					},
					{
						id: 4,
						name: '我的',
						uncheckedIcon: '/static/images/components/tabbar/icon-5.png',
						checkedIcon: '/static/images/components/tabbar/icon-active-5.png',
						path: '/pages/center/index',
						meta: {
							mode: 'navigateTo' //跳转方式
						}
					}
				],
				animateTimer: null,
				go:null,
			};
		},
		// 此处定义传入的数据
		props: {
			current: {
				type: Number,
				value: 0
			}
		},
		created() {
			this.selected = this.current;
		},
		destroyed(){
		},
		methods: {
			menuClick(go) {
				if (go.id === this.selected || this.animateTimer) {
					return false;
				}
				// 1.授权判断====>
				if(go.name!=='首页'&&go.name!=='商城'){
					// 这些指定的页面如果没有授权就跳到授权页面去，或者在list数组的meta对象中提前配置好
				}
				let mode = go.meta.mode
				if(go.name === '商城'){
					//跳商城
				} else {
					this.goNextPage(go, mode);
				}
			},
			goNextPage(go, mode) {
				this.selected = go.id;
				//这里有两百毫秒的时间可以用来预加载下一个页面
				// uni.preloadPage({url: go.path});
				var goUrl=go.path;
				this.animateTimer = setTimeout(() => {
					// 动画执行完毕后跳转页面
					uni[mode]({
						url: goUrl
					})
					clearTimeout(this.animateTimer);
					this.animateTimer = null;
				}, 200)
			}
		}
	};
</script>

<style lang="less" scoped>
	@import './index.less';
</style>
