<template>
  <Layout>
    <PostList2 v-for="edge in getPosts" :key="edge.node.id" :post="edge.node" />
    <span class="pager_span">
        <Pager :info="$page.allPost.pageInfo"/>
    </span>
  </Layout>
</template>

<script>
import PostList2 from "@/components/PostList2";
import { Pager } from 'gridsome'
export default {
  name: "VCN",
  data() {
    return {
      // tp2_title: "",
      // tp2_desc: "",
      // tp2_path: ""
    };
  },
  computed: {
    getPosts: function () {
      let p = [];
      let count = 0;
      for (const post of this.$page.allPost.edges) {
        if (count < 6) {
          // this.tp2_title = post.node.title;
          // this.tp2_desc = post.node.description;
          // this.tp2_path = post.node.path;
          p.push(post);
        }
        count++;
      }
      return p;
      //return this.$page.allPost.edges;
    },
  },
  components: {
    PostList2,
    Pager
  },
  watch: {
    visited: function () {},
  },
  mounted() {
    //alert(JSON.stringify(PostList2));
  },
  created() {
    //
  },
};
</script>

<page-query>
    query($page: Int) {
        metadata {
            siteName
            siteDescription
        }
        allPost(perPage: 5, page: $page) @paginate {
            pageInfo {
            totalPages
            currentPage
            }
            edges {
                node {
                    id
                    title
                    excerpt
                    timeToRead
                    date (format: "D MMMM YYYY")
                    path
                    content
                }
            }
        }
    }
</page-query>

<style scoped>
.pager_span{
    width:100%;
    font-size:24px;
    letter-spacing: 20px;
    text-align:center;
}
.pager_span a:link{
    background-color:#fff;
    margin-right:7px;
    padding-left:17px;
}
.pager_span a:visited{
    background-color:#fff;
    margin-right:7px;
    padding-left:17px;
}
.pager_span a:hover{
    background-color:#000;
    margin-right:7px;
    padding-left:17px;
    color:#fff;
}
</style>
