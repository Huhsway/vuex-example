<template>
  <button type="button" class="list-group-item text-left d-flex justify-content-between align-items-center" @click="itemClick">
    {{ chat.lastMessage }}
    <span class="badge badge-primary badge-pill">{{ chat.new }}</span>
  </button>
</template>
<script>
  import { bus } from '../event-bus';
  export default {
    props: ['chat'],
    methods: {
      itemClick() {
        //this.$store.commit('readChat', {...this.chat}); // store에 commit 메시지로 mutation 실행 첫번째 파라미터는 실행할 뮤테이션 명
        this.$store.dispatch('readChat', {...this.chat}); // mutation은 위에처럼 commit으로 실행시켰다면 action은 dispatch로 실행
      }
    }
  }
</script>