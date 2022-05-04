export const state = () => ({
  users: [], // the data using in the tables
  tableData: {}, // use to manage the pagination
});

export const getters = {
  users(state) {
    return state.users;
  },
  tableData(state) {
    return state.tableData;
  },
};

export const mutations = {
  getUsers(state, payload) {
    state.users = [...payload.data];
    let data = { ...payload };
    // delete the non-need data
    delete data.data;
    delete data.support;
    delete data.text;
    state.tableData = data;
  },
};

export const actions = {
  async onGetUsers({ commit }, payload) {
    // payload = the clicked page number from the pagination
    const returnValue = await this.$axios.$get(
      `https://reqres.in/api/users?page=${payload}`
    );
    commit("getUsers", returnValue);
  },
};
