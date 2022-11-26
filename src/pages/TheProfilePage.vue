<template>
  <TheMainLayout>
    <template #default>
      <div class="row">
        <div class="col-2 mt-3" v-for="profile in profiles" :key="profile.id">
          <TheProfilesListItem :profile="profile" />
        </div>
      </div>
    </template>
  </TheMainLayout>
</template>

<script>
'use strict';
import TheMainLayout from "@/layouts/TheMainLayout";
import TheProfilesListItem from "@/components/profiles/TheProfilesListItem";

export default {
  name: "TheProfilePage",
  components: {
    TheMainLayout,
    TheProfilesListItem,
  },
  computed: {
    profiles() {
      return this.$store.getters.profiles;
    },
  },
};
</script>

<style scoped>
</style>>
