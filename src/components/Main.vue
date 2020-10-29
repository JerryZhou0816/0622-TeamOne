<template>
  <ul class="todo-main">
    <Item
      v-for="(user, index) in users"
      :key="user.id"
      :user="user"
      :index="index"
    ></Item>
  </ul>
</template>

<script>
import { mapState } from "vuex";

import Item from "@/components/Item";
export default {
  components: {
    Item,
  },
  computed: {
    ...mapState(["users"]),
  },
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
