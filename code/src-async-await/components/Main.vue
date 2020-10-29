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
    async search(q) {
      // 请求前，修改页面显示的状态
      this.firstData = false;
      // 展示正在加载的状态
      this.loadingData = true;

      try {
        let resposne = await axios({
          url: "https://api.github.com/search/users",
          method: "GET",
          params: {
            q,
          },
        });
        this.loadingData = false;
        this.errMsg = "";
        //   创建一个新的变量，调用map方法根据条件返回一个新的数组对象
        let user = resposne.data.items.map((item) => ({
          username: item.login,
          userImg: item.avatar_url,
          userUrl: item.url,
        }));
        //将map返回的新数组添加到数据中
        this.users = user;
      } catch (error) {
        this.loadingData = false;
        this.errMsg = error.message;
        this.users = [];
      }
      // 创建 axios请求
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
