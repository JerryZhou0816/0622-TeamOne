<template>
  <ul class="list-group">
    <li class="list-group-item">{{ $route.params.msgId }}</li>
    <!-- <li class="list-group-item">{{ msgId }}</li> -->

    <li class="list-group-item">{{ $route.query.content }}</li>
    <!-- <li class="list-group-item">{{ username }}</li> -->
    <li class="list-group-item">{{ msgTitle }}</li>
  </ul>
</template>

<script>
let arr = [
  {
    id: 1,
    title: "msg1title",
  },
  {
    id: 2,
    title: "msg2title",
  },
  {
    id: 3,
    title: "msg3title",
  },
];
export default {
  data() {
    return {
      msgTitle: "",
    };
  },
  props: ["msgId", "username", "content"],
  mounted() {
    this.msgTitle = arr.find(
      (item) => item.id === this.$route.params.msgId * 1
    ).title;
  },
  watch: {
    $route: {
      handler() {
        this.msgTitle = arr.find(
          (item) => item.id === this.$route.params.msgId * 1
        ).title;
      },
    },
  },
};
</script>

<style scoped></style>
