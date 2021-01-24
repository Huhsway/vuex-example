<template>
  <div>
    <div class="list-group">
      <template v-for="chat in chatList"> <!--넘겨받은 chatlist를 통해 for문 돌면서 출력-->
        <ChatListItem :key="chat"
          :chat="chat"
        />
      </template>
    </div>
  </div>
</template>
<script>
import ChatListItem from './ChatListItem';

export default {
  props: ['chatList'],
  methods: {
  },
  components: {
    ChatListItem
  }
};
</script>