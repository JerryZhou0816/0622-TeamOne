<template>
  <div role="tabpanel" class="tab-panel active" id="Message">
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(msg, index) in messages"
        :key="msg.id"
      >
        <!-- <router-link
          :to="
            '/home/message/messagedetail/' + msg.id + '?content=' + msg.content
          "
        >
          {{ msg.content }}</router-link
        > -->
        <!-- <router-link
          :to="`/home/message/messagedetail/${msg.id}?content=${msg.content}`"
          >{{ msg.content }}</router-link
        > -->
        <router-link
          :to="{
            name: 'msgDetail',
            params: { msgId: msg.id },
            query: { content: msg.content },
          }"
          >{{ msg.content }}</router-link
        >
      </li>
    </ul>
    <div class="alert alert-success" role="alert">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        {
          id: 1,
          content: "msgOne",
        },
        {
          id: 2,
          content: "msgTwo",
        },
        {
          id: 3,
          content: "msgThree",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
