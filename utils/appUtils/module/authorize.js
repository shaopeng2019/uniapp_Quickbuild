// ====登录授权封装=====

// 登录获取code
const uniLogin = function (success) {
  uni.login({
    success(res) {
      if (res.code) {
        //发起网络请求
        success(res)
      } else {
        fail(res)
        // 获取失败
        uni.showModal({
          title: '提示',
          content: '小程序服务器出现异常,请稍后再试~',
          showCancel: false
        })
      }
    }
  })
}

// 保存用户信息到Storage
const getUserInfoToStorage = function (success) {
  // 必须是在用户已经授权的情况下调用
  uni.getUserInfo({
    success: function (res) {
      uni.setStorageSync('UserData', res)
    }
  })
}

// 检查是否订阅 参数订阅id
const isSubscribe=function(tmplId,callback){
  uni.getSetting({
    withSubscriptions: true,
    success(res) {
      var itemSettings = res.subscriptionsSetting.itemSettings;
      if (itemSettings) {
        if (itemSettings[tmplId]=='accept') {
          //订阅了
          callback(true)
        }else {
          //没订阅
          callback(false)
        }
      }
    }
  })
}


export default {
  uniLogin: uniLogin,
  getUserInfoToStorage: getUserInfoToStorage,
  isSubscribe:isSubscribe
}