'use strict';
import axios from "axios";
import router from "@/router";

const state = {
    profiles: [],
};
const mutations = {
    setProfiles(state, payload) {
        state.profiles = payload
    },
    addProfile(state, payload) {
        state.profile.push(payload)
    },
    setDelivers(state, payload) {
        state.delivers = payload
    }
};

const actions = {
    // Holt Profil-Daten, wenn der Benutzer auth ist:
    fetchProfiles(context) {
        const token = context.rootState.auth.token;
        axios.get(`https://vuetest-f9f3b-default-rtdb.europe-west1.firebasedatabase.app/profiles.json?auth=${token}`
        ).then((response) => {
            // Daten Objekte werden erstellt mit leeren Arrays:
            const profilesDO = [];
            const deliversDO = [];
            // UserId des aktuell angemeldeten Benutzers wird geholt:
            const correntUsrID = localStorage.getItem("userId")
            // Constante fuer Lieferanten wird gesetzt:
            const delivers = "Lieferant";
            // Daten Objekt fuer alle Profile wird befuehlt, mit allen Daten:
            for (const id in response.data) {
                profilesDO.push({
                    id: id,
                    ...response.data[id],
                });
                // Eingeloggter Benutzer Profil Id werden seperat geholt und gespeichert:
                if (correntUsrID === response.data[id].userId) {
                    localStorage.setItem("usrDocId", id)
                }
            }
            // Die aktuell angemelder User Daten, holen und zwischenspeichern im localStorage.
            // Fuer Debug zwecke wird hier sehr haeufig localStorage benutzt um besser die reaktionen
            // monitoren zu koennen :
            for (const id in response.data) {
                if (correntUsrID === response.data[id].userId) {
                    localStorage.setItem("usrWnOrt", response.data[id].userWohnort);
                    localStorage.setItem("usrPLZ", response.data[id].userPLZ);
                    localStorage.setItem("usrRolle", response.data[id].userRolle);
                }
                // Hier wird geprüft ob der Benutzer der Rolle Lieferant angehoert und seine Daten in
                // das Daten Objekt delivers geschrieben:
                if (delivers === response.data[id].userRolle) {
                    deliversDO.push({
                        id: id,
                        ...response.data[id],
                    })
                }
            }
            // Sende alle Benutzer Daten:
            context.commit("setProfiles", profilesDO);
            // Sende alle Benutzer Daten fuer Lieferanten:
            context.commit("setDelivers", deliversDO);

        }).catch((error) => {
            console.log(error);
        });
    },
    // Neues Benutzerprofil anlegen:
    createProfile(context, payload) {
        const userId = context.rootState.auth.userId;
        const profileItem = {
            userId: userId,
            userEmail: payload.userEmail,
            userPLZ: payload.userPLZ,
            userWohnort: payload.userWohnort,
            userRolle: payload.userRolle,
            userPic: payload.userPic,
        };
        const token = context.rootState.auth.token;
        axios.post(
            `https://vuetest-f9f3b-default-rtdb.europe-west1.firebasedatabase.app/profiles.json?auth=${token}`,
            // Anoyme Funktion, das response sonst benutzt werden muesste, es funktioniert jedoch auch ohne response !
            profileItem).then(() => {
                // Erfolgreich Meldung:
                router.push("/profile/successful");
                // console.log("Erfolgreich !");
                // Holen der aktuallisierten Daten:
                this.dispatch("fetchProfiles");
            }).catch((error) => {
                throw new Error(error);
            });
    },
    // Benutzer Profile update: 
    updateProfile(context) {
        const usrDocId = localStorage.getItem("usrDocId")
        const profileItem = {
            userId: localStorage.getItem("userId"),
            userEmail: localStorage.getItem("userEmail"),
            userPLZ: localStorage.getItem("usrPLZ"),
            userWohnort: localStorage.getItem("usrWnOrt"),
            userRolle: localStorage.getItem("usrRolle"),
            userPic: localStorage.getItem("usrPic"),
        };
        const token = context.rootState.auth.token;
        axios.put(
            `https://vuetest-f9f3b-default-rtdb.europe-west1.firebasedatabase.app/profiles/${usrDocId}.json/?auth=${token}`,
            // Anoyme Funktion, das response sonst benutzt werden muesste, es funktioniert jedoch auch ohne response !
            profileItem).then(() => {
                // Erfolgreich Meldung:
                router.push("/profile/successful");
                //console.log(response);
                // Holen der aktuallisierten Daten:
                this.dispatch("fetchProfiles");
            }).catch((error) => {
                throw new Error(error);
            });
    },
};

const getters = {
    // Getter fuer alle Profil-Daten:
    profiles: (state) => state.profiles,
    // Getter fuer aktuell angemeldetes Profil(-Daten):
    profile: (state) => (id) => state.profiles.find((profile) => profile.id === id),
    // Getter fuer alle Lieferanten Profile:
    profileDelivers: (state) => state.delivers,
};

const profileModule = {
    state,
    mutations,
    actions,
    getters
};

export default profileModule;
