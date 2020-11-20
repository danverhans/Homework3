<template>
    <div>
    
        <Button @click="liked=!liked" v-show="!liked" class="button-liked"><img src="../assets/like.png"> {{likes}}</Button>
        <Button @click="liked=!liked" v-show="liked" class="button-disliked"><img src="../assets/like.png"> {{likes}}</Button>


    </div>
</template>
<script>

export default {
    name: 'LikeButton',  
    props:['likes'],
    data: function(){
            return{
                liked: false
            }
        },
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