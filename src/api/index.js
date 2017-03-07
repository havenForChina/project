import Vue from 'vue'
import Resource from 'vue-resource'
import config from '../configs/index'
Vue.use(Resource)

export function Merchant_main(body, cb) {
    let Url = config.Merchant_main
    if (Url) {
        Vue.http.post(Url, body).then((response) => {
            cb(response.body)
        }, (response) => {
        });
    } else {
        console.log('error apiName');
    }
}
