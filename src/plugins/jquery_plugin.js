//import { $, jQuery } from 'jquery';

//using jQuery this way is a nogo but...
//gridsome loading this based on url 
//not site wide
export default {
    install(Vue) {
        Vue.prototype.$home_visited = false;
        //Object.defineProperty(Vue.prototype, '$jtest', { value: 'hi' });
        //Vue.prototype.$j = { $, jQuery };
        //Vue.prototype.$jtest = 'hi';
        Vue.mixin({
            created() {
                //
            },

            destroyed() {
                //
            }
        });
    }
}