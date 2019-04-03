<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input v-model="user"/>
    <button @click="changeInputValue">点击修改input中绑定的user值</button>
    {{user}}
  </div>
</template>
<script>
  import {mapState} from "vuex";
  export default{
    data() {
      return {
        user1: "222"
      }
    },
    computed: mapState({
      user: state => state.user
    }),
    methods: {
      changeInputValue(){
        this.$store.state.user = "222";
      },
      changeInputValue1(){
        this.user1 = "test";
      }
    }
  }
</script>