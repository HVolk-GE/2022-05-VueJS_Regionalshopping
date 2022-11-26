<template>
  <div>
     <TheNavBar />
    <main>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <transition
              enter-active-class="animate__animated animate__fadeIn"
              leave-active-class="animate__animated animate__fadeOut"
              mode="out-in"
              appear
              :key="$route.path">
              <slot><h1>Hauptbereich</h1></slot>
            </transition>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
'use strict';
import TheNavBar from "@/components/TheNavBar";

export default {
  name: "TheMainLayout",
  components: {
    TheNavBar,
  },
};
</script>

<style scoped>
</style>