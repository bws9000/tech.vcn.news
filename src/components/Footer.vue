<template>
  <footer class="mainfooter">
    <div class="navHolder">
      <NavigationOne class="footerNav"/>
      <div class="clear"/>
      <p>Copyright &copy; 2020 <a href="https://vcn.news" title="vcn.news">vcn.news</a> |
        <a href="https://newjerseysoftware.com">New Jersey Software</a> |
        email: info@vcn.news | twitter: @VenturaCityNews
      </p>
    </div>
  </footer>
</template>

<script>
import NavigationOne from "./NavigationOne";

export default {
  name: 'Footer',
  components: {NavigationOne},
}
</script>
<style>
.navHolder {
  text-align: center;
}

.footerNav li:first-child {
  display: none;
}

.footerNav li {
  text-align: center;
  padding-right: 4%;
  display: inline;
}

.clear {
  clear: both;
}

@media only screen and (min-width: 150px) and (max-width: 910px) {
  .navHolder {
    text-align: center;
    font-size:smaller;
  }

  .footerNav li {
    text-align: center;
    padding-right: 2%;
    display: inline-block;
  }
}
</style>
