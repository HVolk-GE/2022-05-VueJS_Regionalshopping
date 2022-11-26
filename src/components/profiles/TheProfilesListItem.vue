<template>
  <TheProfilePage>
    <template #default>
      <div class="card">
        <img src="@/assets/business-3d-three-young-women-with-phones.png" />
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
            :to="{ name: 'ProfileDetails', params: {id:profile.id } }"
            class="stretched-link"
          ></router-link>
        </div>
      </div>
    </template>
  </TheProfilePage>
</template>

<script>
'use strict';
// Profilliste aller Profile der Page:
import TheProfilePage from "@/pages/TheProfilePage";

export default {
  name: "TheProfilesListItem",
  props: {
    profile: Object,
  },
  components: {
    TheProfilePage,
  },
};
</script>

<style scoped>
</style>
