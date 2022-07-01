var baseUrl=''
if(process.env.NODE_ENV === 'development'){
	//开发环境
   baseUrl='http://xxxx/'
}else{
	//生产环境
   baseUrl='https://xxxx/'
}

const http = ({ url = '', param = {}, ...other } = {},loading=true) => {
  if(loading){
		uni.showLoading({
		  title: '加载中'
		});
  }
  return new Promise((resolve, reject) => {
    uni.request({
      url: getUrl(url),
      data: param,
      header: { 'content-type': 'application/json' },
      method: 'GET',
      ...other,
      complete: (res) => {
        if(loading){
          uni.hideLoading()
        }
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data)
        } else {
          reject(res)
        }
      }
    })
  })
}

const getUrl = (url) => {
  if (url.indexOf('://') === -1) {
    url = baseUrl + url
  }
  return url
}

//get方法
const _get = (url, param = {}) => {
  return http({
    url,
    param
  })
}

//post方法
const _post = (url, param = {},loading=true) => {
  return http({
    url,
    param,
    method: 'POST'
  },loading)
}

module.exports={
  baseUrl:baseUrl,
  $get:_get,
  $post:_post
}