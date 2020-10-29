<template>
  <div>
    <li
      @mouseenter="isShow = true"
      @mouseleave="isShow = false"
      :class="{ myClass: isShow }"
    >
      <label>
        <input type="checkbox" v-model="isCheck" />
        <span>{{ user.con }}</span>
      </label>
      <button class="btn btn-danger" v-show="isShow" @click="deleteCon">
        删除
      </button>
    </li>
  </div>
</template>

<script>
export default {
  props: ["user", "index"],
  name: "",
  data() {
    return {
      isShow: false,
    };
  },
  computed: {
    isCheck: {
      get() {
        return this.user.isOver;
      },

      set() {
        this.$store.dispatch("uppdateContent", this.index);
      },
    },
  },
  methods: {
    deleteCon() {
      this.$store.dispatch("deleteContent", this.index);
    },
  },
};
</script>

<style scoped>
/*item*/
.myClass {
  background-color: #d35400;
}
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
