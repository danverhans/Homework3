<template>
    <div>
        <Button @click="follow = !follow" v-show="follow" class="follow">Follow</Button>
        <Button @click="follow = !follow" v-show="!follow" class="unfollow">Unfollow</Button>
    </div>
</template>
<script>

export default {
    name: 'FollowButton',  
    data: function(){
            return{
                follow: true
            }
        },

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