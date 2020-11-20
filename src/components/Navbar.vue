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
          <img src="../assets/logo.png" alt="postIt" @click="show = !show">
        </div>
        <div class="drop-down-container" v-show="show">
            <img :src="user.avatar" id="postavatar" />
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
    .profile-pic {
        margin-right: 15px;
        text-align: right;
    }
    
</style>