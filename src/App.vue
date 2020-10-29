<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
export default {
  name: "",
  components: {
    Header,
    Main,
    Footer,
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
