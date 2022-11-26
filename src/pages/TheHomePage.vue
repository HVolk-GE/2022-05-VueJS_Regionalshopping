<template>
  <TheTowColumnsLayout
    :leftColumnClass="'col-md-8 bg-vue'"
    :rightColumnClass="'col-md-4'"
    :fullsize="true"
  >
    <template #leftCol>
      <div class="mt-5 text-center">
        <div class="display-3 my-5">Reginale-Nachbarschaft-Hilfe</div>
        <div class="display-6 my-5">
          Erhalten Sie Zugriff, auf individuelle Einkaufs-Hilfen aus Ihrer Nähe.
        </div>
        <div class="my-5 offset-4 col-4">
          <img src="@/assets/shopping.svg" class="img-fluid" />
        </div>
      </div>

      <div class="pt-5 offset-3 col-6">
        Inside Illustration by
        <a href="https://icons8.com/illustrations/author/625472"
          >Ekaterina Rogova</a
        >
        from <a href="https://icons8.com/illustrations">Ouch!</a>
      </div>
    </template>
    <template #rightCol>
      <transition
        enter-active-class="animate__animated animate__backInDown"
        leave-active-class="animate__animated animate__backOutDown"
        mode="out-in"
      >
        <component
          :is="componentName"
          @change-component="changeComponent"
        ></component>
      </transition>
    </template>
  </TheTowColumnsLayout>
</template>

<script>
'use strict';
// Import der Layouts/Components:
import TheTowColumnsLayout from "@/layouts/TheTowColumnsLayout";
import TheMyRegister from "@/components/auth/TheRegister";
import TheMyLogin from "@/components/auth/TheLogin.vue";

// Default Homepage definieren + andere Components die von hier aufgerufen werden sollen:
export default {
  name: "TheHomePage",
  components: {
    TheTowColumnsLayout,
    TheMyRegister,
    TheMyLogin,
  },
  data() {
    return {
      componentName: "TheMyRegister",
    };
  },
  methods: {
    changeComponent(payload) {
      this.componentName = payload.componentName;
    },
  },
};
</script>

<style scoped>
</style>