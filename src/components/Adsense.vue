<template>
  <ins class="adsbygoogle"
       :style="adStyle"
       :data-ad-layout="adLayout"
       :data-ad-format="adFormat"
       :data-ad-client="adClient"
       :data-ad-slot="adSlot"
  ></ins>
</template>

<script>
export default {
  props: {
    adClient: {
      type: String,
      required: true
    },
    adSlot: {
      type: String,
      required: true
    },
    adFormat: {
      type: String,
      required: false,
      default: 'auto'
    },
    adStyle: {
      type: String,
      required: false,
      default: 'display: block'
    },
    adLayout: {
      type: String
    }
  },
  mounted() {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }
}
</script>
