import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production', // 이거는 vuex 설계대로 동작하지 않는 이벤트 캐치
    state: {
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
    }, // 상태 값 정의
    // getters: {
    //     chatList: (state, getters) => state.chatList.filter(chat => chat.new >= 2)
    // }
    mutations: { // 이 뮤테이션은 반드시 동기적이어야 한다. 컴포넌트 내부에서 이렇게 mutations를 호출하는 경우는 적음 비동기를 통해 아래 액션을 거쳐야함
        readChat(state, chat){
            state.chatList.forEach(item => {
                if (item.id === chat.id){
                    item.new = 0
                }
            })
        }
    },
    actions: {
        readChat(contexxt, chat){
            contexxt.commit('readChat', chat);
            // 비동기 api를 사용하는 경우 예시
            // $.ajax({
            //     url: 'api/read-chat',
            //     type: 'post',
            //     data: {
            //         chat
            //     },
            //     success: function() {
            //         contexxt.commit('readChat', chat);
            //     }
            // })
        }
    }
});

export default store;