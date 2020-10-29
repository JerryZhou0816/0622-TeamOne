import Vue from "vue";

import VueRouter from "vue-router";

import home from "@/pages/home";

Vue.use(VueRouter);

import Home from "@/pages/Home";
import About from "@/pages/About";
import Message from "@/pages/Message";
import News from "@/pages/News";
import MessageDetail from "@/pages/MessageDetail";
import NewsDetail from "@/pages/NewsDetail";
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "message",
          component: Message,
          children: [
            {
              path: "messagedetail/:msgId",
              component: MessageDetail,
              name: "msgDetail",
              props(route) {
                return {
                  msgId: route.params.msgId,
                  content: route.query.content,
                };
              },
            },
          ],
        },
        {
          path: "news",
          component: News,
          children: [
            {
              path: "newsdetail/:newsId",
              component: NewsDetail,
              name: "newDetail",
            },
          ],
        },
        {
          path: "",
          redirect: "message",
        },
      ],
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
});
