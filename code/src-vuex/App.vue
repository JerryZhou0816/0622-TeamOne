<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">奇数再+{{ this.$store.state.count }}</button>
    <button @click="incrementAsync">
      异步再+{{ this.$store.state.count }}
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.dispatch("increment");
    },
    decrement() {
      this.$store.dispatch("decrement");
    },
    incrementOdd() {
      this.$store.dispatch("incrementOdd");
    },
    incrementAsync() {
      this.$store.dispatch("incrementAsync");
    },
  },
};
</script>

<style scoped></style>
