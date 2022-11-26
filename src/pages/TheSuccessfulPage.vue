<template>
  <TheSuccessfulLayout>
    <template #default>
      <div class="container">
        <div class="row">
          <div class="offset-2 col-8">
            <div class="card mt-5">
              <div class="card-body text-senter">
                <img src="@/assets/successful.png" width="400" />
                <div class="display-5">Profil wurde erfolgreich erstellt !</div>
                <hr />
                <router-link to="/main" class="btn bg-vue">
                  Zurück zur Haupseite
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </TheSuccessfulLayout>
</template>

<script>
'use strict';
import TheSuccessfulLayout from "@/layouts/TheSuccessfulLayout.vue";
export default {
  name: "TheSuccessfulPage",
  components: {
    TheSuccessfulLayout,
  },
};
</script>

<style scoped>
</style>