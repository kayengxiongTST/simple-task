<template>
  <v-container>
    <h1>Task 1</h1>
    <v-card>
      <v-card-title>Fetching Users</v-card-title>
      <v-card-text>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">ID</th>
                <th class="text-left">Email</th>
                <th class="text-left">First Name</th>
                <th class="text-left">Last Name</th>
                <th class="text-left">Avatar</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in users" :key="item.name">
                <td>{{ item.id }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.first_name }}</td>
                <td>{{ item.last_name }}</td>
                <td><v-img :src="item.avatar" width="100px"></v-img></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
      <div class="text-center">
        <v-pagination
        ></v-pagination>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "IndexPage",
  computed: {
    users() {
      return this.$store.state.users.users;
    },
    usersData() {
      return this.$store.state.users.usersData;
    },
  },
  mounted() {
    this.$store.dispatch("users/getUsers");
  },
};
</script>
