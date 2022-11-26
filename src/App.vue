<template>
   <router-view></router-view>
</template>

<script>
// Einstiegspunkt in die App:
'use strict';
export default {
  name: "App",
  computed: {
    token() {
      return this.$store.getters.token;
    },
  },
  created() {
    this.$store.dispatch("autoSignin");
  },
  watch: {
    token: {
      handler() {
        if (this.token) {
          this.$store.dispatch("fetchProfiles");
        }
      },
      immediate: true,
    },
  },
};
</script>

<style>
/* Inkludieren der benötigten npm styles-packages*/
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";
@import "~animate.css/animate.min.css";

.bg-vue {
  background-color: rgb(52, 73, 94, 0.5);
  color: #fff;
}

.bg-vue2 {
  background-color: rgb(65, 184, 131, 0.5);
  color: #fff;
}

.text-vue {
  color: rgb(52, 73, 94);
}

.text-vue2 {
  color: rgb(65, 184, 131);
}
</style>
