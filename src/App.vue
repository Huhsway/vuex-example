<template>
  <div id="app">
    <Header 
      :new-message-count="newMessageCount"
    /> <!--헤더에는 computed로 구현한 newMessageCount 넘겨줌-->
    <div class="container mx-auto mt-5">
      <ChatList
        :chat-list="chatList"
      /> <!--채팅 목록을 담고 있는 배열을 넘겨주고 각 항목이 클릭했을때 호출되는 read-item이벤트를 readChatItem과 연결-->
    </div>
  </div>
</template>
<script>
import Header from './components/Header';
import ChatList from './components/ChatList';
import { bus } from './event-bus';

export default {
  name: 'app',
  data() {
    return {
      chatList: [
        {
          id: 1,
          lastMessage: '채팅 메시지1',
          new: 1
        },
        {
          id: 2,
          lastMessage: '채팅 메시지2',
          new: 2
        },
        {
          id: 3,
          lastMessage: '채팅 메시지3',
          new: 1
        },
        {
          id: 4,
          lastMessage: '채팅 메시지4',
          new: 5
        }
      ]
    };
  },
  computed: {
    newMessageCount() {
      return this.chatList.map(item => item.new).reduce((a, b) => a + b);
    } // chatList의 item의 항목들을 더한다음에 넘겨줌
  },
  methods: {
    readChatItem(chatItem) {
      this.chatList.filter(item => item.id === chatItem.id)[0].new = 0;
    } // 아이템의 id 값으로 찾아 new값을 0으로 만들어줌
  },
  created() {
    bus.$on('CHAT_CLICK', chat => {
      this.readChatItem(chat);
    });
  },
  components: {
    Header,
    ChatList
  },
  mounted() {
    console.log(this.$store) // 컴포넌트가 화면에 뿌려준 뒤 실행되는 mounted 메소드에서 스토어에 접근이 잘 되는지 출력
  }
}
</script>

<style>
</style>
