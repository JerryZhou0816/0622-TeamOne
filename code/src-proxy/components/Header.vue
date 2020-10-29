<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          v-model="content"
        />
        <button @click="search">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
    };
  },
  methods: {
    search() {
      //触发绑定的事件，将收集的数据传递到组件中
      this.$bus.$emit("search", this.content);
    },
  },
};
</script>

<style scoped></style>
