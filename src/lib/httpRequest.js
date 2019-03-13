'use strict'
import axios from 'axios'
import IP from './address'
import qs from 'qs'
import { Toast } from 'vant';
/**
 * 提示函数
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = msg => {
  Toast({
    message: msg,
    duration: 1000,
    forbidClick: true
  });
}


let HTTP = {}
// 使用由axios库提供的配置的默认值来创建axios实例
let instance = axios.create()


/**
 * 发送post请求
 *
 * @param url 接口url
 * @param data 传递给后端的数据
 * @param callback 回调函数,参数 res.data.data 为主要数据部分
 */
HTTP.post = function (url, data, callback) {
  let params = qs.stringify(data)
  instance.post(IP + url, params)
    .then(function (res) {
      //响应成功回调
      if (res.data.status === 10000) {
        callback(res.data.data);
      } else {
        // alert(ERROR_CODE[res.data.status]);
      }
    })
    .catch(function (err) {
          tip(err)
    });
};

/**
 * 发送get请求
 *
 * @param url 接口url
 * @param data 传递给后端的数据
 * @param callback
 */
HTTP.get = function (url, data, callback) {
  let params = {params: data}
  instance.get(IP + url, params)
    .then(function (res) {
      //响应成功回调
      if (res.data.status === 10000) {
        callback(res.data.data)
      } else {
        // alert(ERROR_CODE[res.data.status]);
      }
    })
    .catch(function (err) {
        tip(err)
    });
};

export default HTTP
