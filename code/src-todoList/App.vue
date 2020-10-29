<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header></Header>
      <List
        :todos="todos"
        :uppContent="uppContent"
        :delContent="delContent"
      ></List>
      <Footer :todos="todos" :upAll="upAll" :deleteAll="deleteAll"></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
export default {
  data() {
    return {
      // todos: [
      //   {
      //     id: 1,
      //     content: "滑雪",
      //     isOver: false,
      //   },
      //   {
      //     id: 2,
      //     content: "吃火锅",
      //     isOver: false,
      //   },
      //   {
      //     id: 3,
      //     content: "打豆豆",
      //     isOver: true,
      //   },
      // ],
      todos: JSON.parse(localStorage.getItem("TODOS_KEY")) || [
        { id: 1, content: "吃饭", isOver: false },
        { id: 2, content: "睡觉", isOver: false },
        { id: 3, content: "打豆豆", isOver: false },
      ],
    };
  },
  components: {
    Header,
    Footer,
    List,
  },
  mounted() {
    this.$bus.$on("delContent", this.delContent);
    this.$bus.$on("deleteAll", this.deleteAll);
    this.$bus.$on("addContent", this.addContent);
    this.$bus.$on("todos", this.todos);
    this.$bus.$emit("reveice", this.todos);
  },
  methods: {
    //添加方法
    addContent(content) {
      this.todos.unshift(content);
    },
    // 更新checkbox的方法
    uppContent(index) {
      this.todos[index].isOver = !this.todos[index].isOver;
    },
    //删除任务的功能
    delContent(index) {
      this.todos.splice(index, 1);
    },
    upAll(val) {
      this.todos.forEach((item) => (item.isOver = val));
    },
    deleteAll() {
      this.todos = this.todos.filter((item) => item.isOver === false);
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(newVal, oldVal) {
        localStorage.setItem("TODOS_KEY", JSON.stringify(newVal));
      },
    },
  },
};
</script>

<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
