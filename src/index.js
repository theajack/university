
import Vue from 'vue/dist/vue.esm';

import $ from 'easy-dom-util';
import Main from './ui/main.vue';

$.query('body').append($.create('div#pianoApp'));
// $.query('#loadingW').remove();

new Vue({
    render: h => h(Main),
}).$mount('#pianoApp');

