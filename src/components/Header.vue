<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
      </ul>
      <button type="button" class="btn btn-dark">
        <i class="fa fa-envelope mr-2"></i>
        <span class="badge badge-danger">{{ newMessageCount }}</span> <!--App.vue에서 넘겨받은 카운트 출력-->
      </button>
    </div>
  </nav>
</template>
<script>
export default {
  props: ['newMessageCount']
} 
</script>