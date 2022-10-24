import {createPinia, defineStore, setActivePinia} from "pinia";
import jwtDecode from "jwt-decode";

export const pinia = createPinia()
setActivePinia(pinia)

export const useCoopeerStore = defineStore('Coopeer', {
    state: () => ({
        loggedIn: false,
        user: {},
        subjects: []
    }),
    getters: {

    },
    actions: {
        async acknowledgeToken(token) {
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(this.decodeToken(token)))
            this.loggedIn = true
        },
        decodeToken(token) {
            const decodedToken = jwtDecode(token)

            this.user = {
                name: decodedToken.name,
                surname: decodedToken.surname,
                email: decodedToken.email,
                learningXP: decodedToken.learningXP,
                id: decodedToken._id
            }

            return this.user
        },
        async disconnect(router) {
            localStorage.clear()
            this.loggedIn = false
            await router.push("/login")
        },
        connected() {
            return localStorage.getItem("token") != null
        },
        clearStore() {
            this.subjects = [];
        }
    }
})
