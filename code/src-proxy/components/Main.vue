<template>
  <div>
    <h2 v-if="firstData">欢迎登录，请您搜索您想要的数据</h2>
    <h2 v-else-if="loadingData">数据搜索中，请等待</h2>
    <h2 v-else-if="errMsg">请求失败 ---> {{ errMsg }}</h2>
    <div class="row" v-else>
      <div class="card" v-for="(user, index) in users" :key="user.username">
        <a :href="user.url" target="_blank">
          <img :src="user.userImg" style="width: 100px" />
        </a>
        <p class="card-text">{{ user.username }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      firstData: true,
      loadingData: false,
      errMsg: "",
      users: [],
    };
  },
  mounted() {
    //调用$on 全局事件总线，接收事件绑定的数据
    this.$bus.$on("search", this.search);
  },
  methods: {
    // search(q) {
    //   this.firstData = false;
    //   this.loadingData = true;
    //   axios({
    //     url: "https://api.github.com/search/users",
    //     method: "get",
    //     params: {
    //       q,
    //     },
    //   })
    //     .then((response) => {
    //       this.firstData = false;
    //       this.loadingData = false;
    //       this.errMsg = "";
    //       let user = response.data.items.map((item) => ({
    //         username: item.login,
    //         userImg: item.avatar_url,
    //         userUrl: item.url,
    //       }));
    //       this.users = user;
    //     })
    //     .catch((error) => {
    //       this.loadingData = false;
    //       this.errMsg = error.message;
    //       this.users = [];
    //     });
    // },
    search(q) {
      axios({
        url: "http://localhost:9000/api/users/info",
        method: "get",
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
};
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
