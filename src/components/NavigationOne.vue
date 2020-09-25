<template>
<nav>
    <ul>
        <li><a href="javascript:void(0);" v-on:click="mobileNav">&#9776;</a></li>
        <li><a href="https://vcn.news/">home</a></li>
        <li><a href="https://world.vcn.news/">world</a></li>
        <li><a href="https://tech.vcn.news/">tech</a></li>
        <li><a href="https://entertainment.vcn.news/">entertainment</a></li>
        <li><a href="https://business.vcn.news/">business</a></li>
    </ul>
</nav>
</template>

<script>

    export default {
        name: 'NavigationOne',
        mounted() {
            window.addEventListener('onbeforeunload', this.scrollToTop);  
            window.addEventListener('scroll', this.handleScroll);
        },
        created () {
            //
        },
        destroyed () {
            window.addEventListener('scroll', this.handleScroll);
        },
        methods: {
            scrollToTop: function(event){
                window.scrollTo(0, 0);
            },
            mobileNav: function() {
                let x = document.getElementById("navheader");
                if (x.className === "mainheader") {
                    x.className += "ResponsiveMenu";
                } else {
                    x.className = "mainheader";
                }
            },
            stickIt: function(id){
                    document.getElementById(id).classList.add("navi");
                    let el = document.getElementById(id);
                    el.style.zIndex = '999999';
                    el.style.textAlign = 'center';
                    el.style.width = '100%';
                    el.style.backgroundColor = '#fff';
                    el.style.position = 'fixed';
                    el.style.left = '0';
                    el.style.top = '0';
                    el.style.paddingLeft = '10px';
            },
            handleScroll: function(event){
                let id = "sticky"
                if (window.pageYOffset >= document.getElementById(id).offsetTop) {
                    this.stickIt(id);
                }
                if (!document.documentElement.scrollTop) {
                    document.getElementById('img_header').style.marginTop = '96px';
                    document.getElementById(id).style.backgroundColor = "";
                    document.getElementById(id).style.marginBottom = '100px';
                }
            }
        }
    }

</script>
