<template>
  <TheMainLayout>
    <template #default>
      <div class="row">
        <div class="col-12">
          <h1 class="mt-4">
            Mein Profil
              <button
                class="btn btn-lg bg-vue float-end"
                @click="changeProfile()"
              >
                Speichern
              </button>
          </h1>
          <div class="card mt-4">
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
                      <h3 class="card-title mb-4">{{ profiles.userEmail }}</h3>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-20">
<!--                      <div class="col-8">
                        Passwort:
                        <input
                          type="text"
                          class="col-12"
                          id="userPassword"
                          name="userPassword"
                          v-model="profiles.userPassword"
                        />
                      </div>
                      <div class="col-8 mt-2">
                        Confirm-Password:
                        <input
                          type="text"
                          class="col-12"
                          id="ConfirmPassword"
                          name="ConfirmPassword"
                          v-model="profiles.ConfirmPassword"
                        />
                      </div>
                      -->
                      <div class="col-8 mt-2">
                        Postleitzahl: (aktuell: {{ profiles.userPLZ }})
                        <input
                          type="number"
                          class="col-12"
                          id="userPLZ"
                          name="userPLZ"
                          v-model="profiles.userPLZ"
                        />
                      </div>
                      <div class="col-8 mt-2">
                        Wohnort: (aktuell: {{ profiles.userWohnort }})<input
                          type="text"
                          class="col-12"
                          id="userWohnort"
                          name="userWohnort"
                          v-model="profiles.userWohnort"
                        />
                      </div>
                      <div class="col-5 mt-2">
                        Meine Rolle:
                        <select id="userRolle" v-model="profiles.userRolle">
                          <option value="Lieferant">Lieferant</option>
                          <option value="Kunde">Kunde</option>
                          <option value="Geschaeft">Geschaeft</option>
                        </select>
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

// Fuer Debug zwecke wird hier sehr haeufig localStorage benutzt um besser die reaktionen
// monitoren zu koennen :
export default {
  name: "TheUpdateProfilePage",
  components: {
    TheMainLayout,
  },
  data() {
    // Rueckgabewerte enprechend der vohanden Daten:
    if (localStorage.getItem("usrWnOrt") === "") {
      return {
        profiles: {
          userPassword: "",
          confirmPassword: "",
          userEmail: localStorage.getItem("userEmail"),
          userPLZ: "",
          userWohnort: "",
          userRolle: "",
          userId: localStorage.getItem("userId"),
          userPic: localStorage.getItem(""),
        },
      };
    } else {
      return {
        profiles: {
          userPassword: "",
          confirmPassword: "",
          userEmail: localStorage.getItem("userEmail"),
          userPLZ: localStorage.getItem("usrPLZ"),
          userWohnort: localStorage.getItem("usrWnOrt"),
          userRolle: localStorage.getItem("usrRolle"),
          userId: localStorage.getItem("userId"),
          userPic: localStorage.getItem("userPic"),
        },
      };
    }
  },
  methods: {
    // Update des localStoragae mit den aktullen (evtl. geaenderten) Daten:
    changeProfile() {
      localStorage.setItem("usrPLZ", this.profiles.userPLZ);
      localStorage.setItem("usrRolle", this.profiles.userRolle);
      localStorage.setItem("usrWnOrt", this.profiles.userWohnort);
      localStorage.setItem("userPic", this.profiles.userPic);
      const docId = localStorage.getItem("usrDocId");
      if (!docId) {
        // Neues Profil wird erstellt:
        // console.log("Profil besteht noch nicht !");
        this.$store.dispatch("createProfile", this.profiles);
      } else {
        // Bestehendes Profil wird geupdatet:
        // console.log("Profil besteht bereit, update wird durchgeführt !");
        this.$store.dispatch("updateProfile", this.profile);
      }
    },
  },
};
</script>

<style scoped>
</style>>
