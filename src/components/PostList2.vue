<template>

  <div class="content">

    <article class="topcontent">

        <header>
            <h2><g-link :to="post.path">{{post.title}}</g-link></h2>
        </header>

        <span class="postmeta" v-html="post.description"/>

        <div class="postcontent">

            <div class="postcontent_col">
                <g-link :to="post.path">
                <div :style="{backgroundImage:`url(/images/${post.backgroundimage})`}"
                     class="postcontent_image"/></g-link>
            </div>

            <div class="postcontent_col">
                {{this.post.content.replace(/(<([^>]+)>)/gi, "").slice(0,150)}}...
                <g-link :to="post.path" class="button">read more<span class="page_span"> &#8680; </span></g-link>
            </div>

        </div>

    </article>
  </div>
</template>
<script>
    export default {
        props: ["post"],
        created() {
            let excerpt_list = this.post.excerpt.split('|');
            this.post.description = excerpt_list[0];
            this.post.backgroundimage = excerpt_list[1];
            this.id = this.post.id;
        }
    };
</script>


