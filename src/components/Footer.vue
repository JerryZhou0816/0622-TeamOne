<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="allDone" />
    </label>
    <span>
      <span>已完成{{ isDone }}</span> / 全部{{ users.length }}
    </span>
    <button class="btn btn-danger" @click="deleteAll">清除已完成任务</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "",
  computed: {
    ...mapState(["users"]),
    isDone() {
      return this.users.reduce((prve, item, index) => {
        if (item.isOver) {
          prve += 1;
        }
        return prve;
      }, 0);
    },
    allDone: {
      get() {
        return this.isDone == this.users.length && this.users.length > 0;
      },
      set(val) {
        this.$store.dispatch("uppdateAll", val);
      },
    },
  },
  methods: {
    deleteAll() {
      this.$store.dispatch("deleteAll");
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
