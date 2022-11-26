'use strict';
// Zusammenfassung aller benutzten Module:
import { createStore } from "vuex";
import authMethode from "./modules/auth";
import profilModule from "./modules/profil";

const store = createStore({
  state() {
    return {
      count: 0
    }
  },

  modules: {
    auth: authMethode,
    profile: profilModule,
  },

  mutations: {
    increment(state) {
      state.count++
    }
  }
})

export default store;
