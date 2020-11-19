<template>
    <div>
        <Button v-if=followed() @click="setInfo" class="follow">{{info}}</Button>
        <Button v-else @click="setInfo" class="unfollow">{{info}}</Button>
    </div>
</template>
<script>

export default {
    name: 'FollowButton',  
    props: {
      info: {
          type: String,
          default: "Follow"
        }
    },
    methods: {
      setInfo: function() {
          if(this.info == "Follow"){
              this.info = "Unfollow"
          } else {
              this.info = "Follow"
          }
      },
      followed: function(){
          if(this.info == "Follow") return true
          else return false
    }
  }

}
</script>

<style scoped>
    .follow {
        padding: 8px 16px;
        margin: 4px 0;
        color: #ffffff;
        background-color: #01579b;
        border: none;
        border-radius: 4px;    
    }
    .unfollow {
        padding: 8px 16px;
        margin: 4px 0;
        color: #ffffff;
        background-color: gray;
        border: none;
        border-radius: 4px;       
    }
</style>