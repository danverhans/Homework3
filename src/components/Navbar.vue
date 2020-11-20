<template>
<header>
      <nav>
        <div class="logo-container">
          <img src="../assets/logo.png" alt="postIt">
        </div>
        <div class="search-container">
          <input type="text" name="search"><button type="button">Search</button>
        </div>
    
        <div class="profile-pic">
          <img :src="user.avatar" alt="postIt" @click="show = !show">
        </div>
        <div class="drop-down-container" v-show="show">
            <span id="user-name">{{user.firstname}} {{user.lastname}}</span>
            <span id="user-email">{{user.email}}</span>
            <span class="separator"></span> 
            <span v-if=isNextBrowse><router-link to="/browse" >Browse</router-link></span>
            <span v-else><router-link to="/index" >Index</router-link></span>
            <span class="separator"></span>
            <router-link to="/"><span>Log out</span></router-link>
        </div>
      </nav>
    </header>
</template>

<script>

export default {
  name: 'Navbar',
  props: {
      goNext: String
  },
  data: function(){
            return{
                show: false
            }
        },
  computed: {
      isNextBrowse: function(){
          if(this.goNext == "Browse") return true
          else return false
      },
    user() {
    return this.$store.state.user
    }
  },
  mounted() {
    this.$store.dispatch("getUser");
  }
        
}
</script>

<style scoped>
header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
}

header:hover {
    box-shadow: 0 -20px 30px #4d4d4d;
}
    .profile-pic {
        margin-right: 15px;
        text-align: right;
    }
    .drop-down-container {
    position: absolute;
    min-width: 150px;
    height: auto;
    background-color: #ffffff;
    padding: 10px;
    right: 0;
    top: 50px;
    text-align: left;
}
nav {
    display: flex;
    background-color: #ffffff;
    align-items: center;
}

nav div {
    height: 30px;
    flex-grow: 4;
    padding: 10px;
}

nav div img {
    height: 100%;
    width: 30px;
    margin-left: 15px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top center;
}

nav div.search-container > input {
    box-sizing: border-box;
    height: 30px;
    width: 80%;
    margin: 0;
    padding: 5px;
    border: 1px solid #e0e0e0;
}

nav div.search-container > button {
    height: 30px;
    width: 20%;
    margin: 0;
    padding: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

nav div.avatar-container {
    margin-right: 15px;
    text-align: right;
}

.drop-down-container span{
    display: block;
}
.drop-down-container span.separator{
    border-bottom: 1px solid #d7d7d7;
    margin: 10px -10px;
}
</style>