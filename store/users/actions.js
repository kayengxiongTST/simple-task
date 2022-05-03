import axios from "axios";

export const getUsers = async ({ commit }) => {
    await axios
        .get(`https://reqres.in/api/users`)
        .then((response) => {
            commit('SET_USERS', response.data)
        })
}