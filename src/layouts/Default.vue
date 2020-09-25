<template>
  <section>
    <header>
      <div id="navheader" class="mainheader">
        <div id="sticky" class="navi">
            <NavigationOne/>
        </div>
      </div>
      <a href="/"><img id="img_header" src="/images/vcn_news_600x300.png" alt="vcn.news"></a>
      <h1>{{ $static.metadata.mainTitle }}</h1>
      <span>{{ $static.metadata.subTitle }}</span>
    </header>

    <slot/>

    <Footer/>

  </section>
</template>

<script>
import NavigationOne from '~/components/NavigationOne.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    NavigationOne,
    Footer
  },
  name: "VCN"
};
</script>

<static-query>
query {
metadata {
siteName
mainTitle
subTitle
}
}
</static-query>
