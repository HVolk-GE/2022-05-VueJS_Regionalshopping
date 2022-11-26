<template>
  <TheMainLayout>
    <template #default>
      <div class="row">
        <div class="col-12">
          <h1 class="mt-4">
            Profile Details
            <button class="btn btn-lg bg-vue float-end" @click="$router.go(-1)">
              Zurück
            </button>
          </h1>
          <div class="card mt-4" v-if="profile">
            <div class="row no-gutters">
              <div class="col-md-1">
                <img
                  src="@/assets/3d-fluency-manager.png"
                  class="card-img"
                  alt="mein Profilbild"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <div class="row">
                    <div class="col-9">
                      <h3 class="card-title mb-4">{{ profile.userEmail }}</h3>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-20">
                      <div class="col-8">
                        Postleitzahl: {{ profile.userPLZ }}
                      </div>
                      <div class="col-8">
                        Wohnort: {{ profile.userWohnort }}
                      </div>
                      <div class="col-3">
                        Profile Rolle: {{ profile.userRolle }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </TheMainLayout>
</template>

<script>
'use strict';
import TheMainLayout from "@/layouts/TheMainLayout";

export default {
  name: "TheProfileDetailPage",
  components: {
    TheMainLayout,
  },
  data() {
    return {
      id: null,
    };
  },
  computed: {
    profile() {
      return this.$store.getters.profile(this.id);
    },
  },
  created() {
    this.id = this.$route.params.id;
  },
};
</script>

<style scoped>
</style>>
