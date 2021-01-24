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
import {mapState} from 'vuex'; // vuex에서 mapState 헬퍼 함수를 가져오고
//import {mapGetters} from 'vuex'
import Header from './components/Header';
import ChatList from './components/ChatList';

export default {
  name: 'app',
  data() {
    return {
     
    };
  },
  computed: {
    newMessageCount() {
      return this.chatList.map(item => item.new).reduce((a, b) => a + b);
    }, // chatList의 item의 항목들을 더한다음에 넘겨줌
    ...mapState({ // ...(스프레드)연산자는 json이나 배열을 합치는 것을 쉽게 도와줌
      // state를 vuex에서 꺼내와 computed로 사용할 수 있는 json 객체로 리턴
      // chatList: state => state.chatList // 컴포넌트에서 변수로 사용할 chatList 정의 하고 state에서 원하는 값을 꺼내올 익명함수 정의 이거 포함 아래 2개도 같은거 총 3가지 방법 있음
       chatList: 'chatList' // 이렇게 써도 위에랑 똑같음
      // chatList(state) {
      //   return state.chatList.filter(chat => chat.new >= 2); // 이거는 메시지 카운트가 2개 이상인 것들만 출력 
      // } 이렇게 써도 위에랑 똑같음
    })
    // ...mapGetters({ // 위와 달리 index.js의 getters를 이용
    //   chatList: 'chatList'
    // })
  },
  methods: {
    // readChatItem(chatItem) {
    //   this.chatList.filter(item => item.id === chatItem.id)[0].new = 0;
    // } // 아이템의 id 값으로 찾아 new값을 0으로 만들어줌
  },
  // created() {
  //   bus.$on('CHAT_CLICK', chat => {
  //     this.readChatItem(chat);
  //   });
  // },
  components: {
    Header,
    ChatList,
  },
  // mounted() {
  //   console.log(this.$store) // 컴포넌트가 화면에 뿌려준 뒤 실행되는 mounted 메소드에서 스토어에 접근이 잘 되는지 출력
  // }
}
</script>

<style>
</style>
