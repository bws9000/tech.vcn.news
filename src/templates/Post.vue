<template>

  <BlogLayout>

      <article class="article_content">

        <header class="articleheader">
          <h1>{{ $page.post.title }}</h1>
          <p>{{ $page.post.date }} | {{ $page.post.timeToRead }} min read</p>
        </header>

        <span class="postmeta">vcn.news</span>
        <div class="postcontent">
          <div class="postcontent_col2">
            <div :style="{backgroundImage:`url(${this.$page.post.backgroundimage})`}"
                 class="postcontent_image_single post_img">
            </div>
            <span class="postmeta imagecredit">image credit : {{ this.imageCredit }}</span>
            <div class="postcontent_col2">
              <div class="inner_copy">
                <h3>{{ this.$page.post.description }}</h3>
                <div v-html="this.$page.post.content"/>
                <Adsense
                    class="adsbygoogle"
                    style="display:block; text-align:center;"
                    data-ad-layout="in-article"
                    data-ad-format="fluid"
                    ad-client="ca-pub-7538699228238977"
                    ad-slot="3734507595">
                </Adsense>
              </div>
            </div>
          </div>
        </div>
      </article>

  </BlogLayout>
</template>
<script>

import Adsense from '~/components/Adsense.vue';

export default {
  name: "VCN",
  $page: [],
  imageCredit: '',
  components: {
    Adsense
  },
  mounted() {
  },
  metaInfo() {

    let excerpt_list = this.$page.post.excerpt.split('|');
    this.$page.post.description = excerpt_list[0];
    this.$page.post.backgroundimage = '/images/' + excerpt_list[1];
    this.imageCredit = excerpt_list[2];

    return {
      title: this.$page.post.title,
      meta: [
        {name: "description", content: this.$page.post.description},
        // twitter-card: https://cards-dev.twitter.com/validator
        {name: "twitter:card", content: "summary"},
        {
          name: "twitter:url",
          content: "https://tech.vcn.news" + this.$page.post.path
        },
        {name: "twitter:description", content: this.$page.post.description},
        {name: "twitter:title", content: this.$page.post.title},
        {name: "twitter:site", content: "@VenturaCityNews"},
        {
          name: "twitter:image",
          content: "https://tech.vcn.news/images" + this.$page.post.backgroundimage
        },
        {name: "twitter:creator", content: "@VenturaCityNews"}
      ],
      script: [{src: "https://platform.twitter.com/widgets.js", async: true}]
    };
  },
  beforeMount() {
    let excerpt_list = this.$page.post.excerpt.split('|');
    this.$page.post.description = excerpt_list[0];
    this.$page.post.backgroundimage = '/images/' + excerpt_list[1];
    this.backgroundimage = '/images/' + excerpt_list[1];
    this.imageCredit = excerpt_list[2];

  },
};
</script>
<page-query>
query Post ($path: String!) {
post: post (path: $path) {
id
title
excerpt
content
path
date (format: "D MMMM YYYY")
timeToRead
}
}
</page-query>
