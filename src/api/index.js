import Vue from 'vue'
import Resource from 'vue-resource'
import config from '../configs/index'
Vue.use(Resource)
Vue.http.options.xhr = { withCredentials: true }
Vue.http.options.emulateJSON = true


let msg = '接口请求错误'
export function Merchant_main(body, cb) {
    let Url = config.Merchant_main
    if (Url) {
        Vue.http.post(Url, body).then((response) => {
            cb(response.body)
        }, (response) => {
            console.log(msg)
        });
    } else {
        console.log('借口API引用错误');
    }
}
