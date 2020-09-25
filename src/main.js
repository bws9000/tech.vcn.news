// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/css/main.css';
import DefaultLayout from '~/layouts/Default.vue';
import BlogDefaultLayout from '~/layouts/BlogDefault.vue';

export default function (Vue, { router, head, isClient }) {

  head.htmlAttrs = { lang: 'en' };
  head.bodyAttrs = { class: 'mainbody' };
  head.script.push(
      {
        type: 'text/javascript',
        src: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        async: true
      }
  );
  Vue.component('Layout', DefaultLayout);
  Vue.component('BlogLayout', BlogDefaultLayout);


}
