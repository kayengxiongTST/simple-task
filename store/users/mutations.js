export const SET_USERS = (state, users) => {
    state.users = [...users.data];
    state.usersData = { ...users }
}