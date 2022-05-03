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
              <tr v-for="item in usersData" :key="item.name">
                <td>{{ item.id }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.first_name }}</td>
                <td>{{ item.last_name }}</td>
                <td><v-img :src="item.avatar" width="100px"></v-img></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        {{ tableData }}
      </v-card-text>
      <div class="text-center">
        <v-pagination
          v-model="currentPageNumber"
          :length="tableData.total_pages"
          @input="handlePageChange"
        ></v-pagination>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      tableData: {},
      currentPageNumber: 1,
      usersData: [],
    };
  },
  mounted() {
    this.fetchUsersData(this.currentPageNumber);
  },
  methods: {
    async fetchUsersData(pageNumber) {
      const endPoint = "https://reqres.in/api/users";
      const users = await this.$axios.$get(`${endPoint}?page=${pageNumber}`);
      usersData = [...users.data];
      this.tableData = { ...users };
    },
    handlePageChange(value) {
      this.currentPageNumber = value;
      this.fetchUsersData(value);
    },
  },
};
</script>
