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
          v-model="pagination"
          @input="handlePageChange"
          :length="tableData.total_pages"
        ></v-pagination>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "IndexPage",
  computed: {
    ...mapGetters(["users", "tableData"]),
  },
  mounted() {
    this.onGetUsers(1);
  },
  methods: {
    ...mapActions(["onGetUsers"]),
    handlePageChange(value = 1) {
      this.onGetUsers(value);
    },
  },
};
</script>
