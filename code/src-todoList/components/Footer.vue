<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllCheck" />
    </label>
    <span>
      <span>已完成{{ isDone }}</span> / 全部{{ alltodos }}
    </span>
    <button class="btn btn-danger" @click="allDel">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array,
    upAll: Function,
  },
  computed: {
    isDone() {
      return this.todos.reduce((prev, item, index) => {
        if (item.isOver) {
          prev += 1;
        }
        return prev;
      }, 0);
    },
    alltodos() {
      return this.todos.length;
    },
    isAllCheck: {
      get() {
        return this.isDone === this.alltodos && this.alltodos > 0;
      },
      set(val) {
        this.upAll(val);
      },
    },
  },
  methods: {
    allDel() {
      this.$bus.$emit("deleteAll");
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
