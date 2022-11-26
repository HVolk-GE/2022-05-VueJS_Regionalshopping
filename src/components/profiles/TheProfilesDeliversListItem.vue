<template>
  <TheProfileDeliversPage>
    <template #default>
        <div class="card">
          <img src="@/assets/sammy-shopping.gif" />
          <div class="card-body">
            <div class="card-title">{{ profile.userEmail }}</div>
            <p class="card-text">
              {{ profile.userPLZ }} {{ profile.userWohnort }}
            </p>
            <div class="text-center mt-3">
              <div class="lead">
                <strong class="text-vue">{{ profile.userRolle }}</strong>
              </div>
            </div>
            <router-link
              :to="{ name: 'ProfileDetails', params: { id: profile.id } }"
              class="stretched-link"
            ></router-link>
          </div>
        </div>
    </template>
  </TheProfileDeliversPage>
</template>

<script>
'use strict';
// Profilliste aller Profile der Page:
import TheProfileDeliversPage from "@/pages/TheProfilesDeliversPage.vue";

export default {
  name: "TheProfilesDeliversListItem",
  props: {
    profile: Object,
  },
  components: {
    TheProfileDeliversPage,
  },
};
</script>

<style scoped>
</style>
