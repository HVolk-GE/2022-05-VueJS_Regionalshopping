<template>
  <nav class="navbar navbar-expand-lg bg-vue navbar-dark">
    <div class="container">
    <!--  Hier sollen Spaeter die Geschaefte/Laeden der Region erscheinen, mit Ihren Produkten,
          die "lieferanten" konnen dort Ihre Favoriten markieren. Damit die "Kunden" auch wissen,
          welcher "Lieferant" bei welchen Geschaeft/Laden 'regelmaessig' einkaufen geht.
          Es soll ja kein "Bestellservice" sein, sondern ein "mitbring-Service":
          
      <router-link to="/main" class="navbar-brand">Hauptseite</router-link>
      <button class="btn bg-vue me-3" @click="openMyProfile()">
        <i class="fa fa-cart-arrow-down" aria-hidden="true"></i> Geschäfte / Regionale Läden
      </button>
      -->
      <button class="btn bg-vue me-3" @click="openDelieversProfiles()">
        <i class="fa fa-car" aria-hidden="true"></i> <i class="fa fa-list" aria-hidden="true"></i> Einkäufer Liste
      </button>
      <button class="btn bg-vue me-3" @click="openProfiles()">
        <i class="fa fa-list" aria-hidden="true"></i> Alle Profilie gesamt
      </button>
      <button class="btn bg-vue me-3" @click="openMyProfile()">
        <i class="fa fa-id-card" aria-hidden="true"></i> Meine Profil
      </button>
      <button class="btn bg-vue2" @click="signout()">
        <i class="fas fa-sign-out-alt"></i> Abmelden
      </button>
    </div>
  </nav>
</template>

<script>
'use strict';
export default {
  name: "TheNavBar",
  methods: {
    async signout() {
      try {
        await this.$store.dispatch("signout");
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    async openMyProfile() {
      try {
        this.$router.push("/myprofile");
      } catch (error) {
        console.log(error);
      }
    },
    async openProfiles() {
      try {
        this.$router.push("/profiles");
      } catch (error) {
        console.log(error);
      }
    },
    async openDelieversProfiles() {
      try {
        this.$router.push("/profiles/delivers");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
</style>>
