<template>
    <div>
        <Button v-if=liked() @click="setInfo" class="button-liked"><img src="../assets/like.png"></Button>
        <Button v-else @click="setInfo" class="button-disliked"><img src="../assets/like.png"></Button>
    </div>
</template>
<script>

export default {
    name: 'LikeButton',  
    props: {
      info: {
          type: String,
          default: "Like"
        }
    },
    methods: {
      setInfo: function() {
          if(this.info == "Like"){
              this.info = "Dislike"
          } else {
              this.info = "Like"
          }
      },
      liked: function(){
          if(this.info == "Like") return true
          else return false
    }
  }

}
</script>

<style scoped>
    img {
        height: 15px;
    }
    button{
        padding: 8px 16px;
        margin: 4px 0;
        color: #ffffff;
        border: none;
        border-radius: 4px;    

    }
    .button-liked {
        background-color: #01579b;
    }
    .button-disliked {
        background-color: gray; 
    }
</style>