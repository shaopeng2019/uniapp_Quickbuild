import { $get, $post } from '../../utils/request';

export default {
  // get请求示例
  async getUserInfo(obj) {
    let res = await $get('api/xxx/xxx', obj)
    return res
  },
	// post请求示例
	async postMessage(obj) {
	  let res = await $post('api/xxx/xxx', obj)
	  return res
	}
}