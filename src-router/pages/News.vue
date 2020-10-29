<template>
  <div role="tabpanel" class="tab-panel" id="News">
    <ul class="list-group">
      <li class="list-group-item" v-for="(n, index) in news" :key="n.id">
        {{ n.content }}
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          autocomplete="off"
          @click="handlerNews(n)"
        >
          {{ n.id }}
        </button>
      </li>
    </ul>
    <div class="alert alert-success" role="alert">
      <router-view>></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [
        {
          id: 1,
          content: "newsOne",
        },
        {
          id: 2,
          content: "newsTwo",
        },
        {
          id: 3,
          content: "newsThree",
        },
      ],
    };
  },
  methods: {
    handlerNews(n) {
      this.$router.push(`/home/news/newsdetail/${n.id}?content=${n.content}`);
    },
  },
};
</script>

<style scoped></style>
