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
            <span id="user-name">John Doe</span>
            <span id="user-email">lisa-siia@gmail.com</span>
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
      goNext: Boolean
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
      }
  }
        
}
</script>

<style scoped>
    .profile-pic {
        margin-right: 15px;
        text-align: right;
    }
    
</style>