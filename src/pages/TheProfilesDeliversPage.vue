<template>
  <TheMainLayout>
    <template #default>
      <container>
        <div class="row">
          <div class="col-2 mt-3" v-for="profile in profiles" :key="profile.id">
            <TheProfilesDeliversListItem :profile="profile" />
          </div>
        </div>
      </container>
    </template>
  </TheMainLayout>
</template>

<script>
'use strict';
import TheMainLayout from "@/layouts/TheMainLayout";
import TheProfilesDeliversListItem from "@/components/profiles/TheProfilesDeliversListItem";

export default {
  name: "TheProfileDeliversPage",
  components: {
    TheMainLayout,
    TheProfilesDeliversListItem,
  },
  computed: {
    profiles() {
      return this.$store.getters.profileDelivers;
    },
  },
};
</script>

<style scoped>
</style>>
