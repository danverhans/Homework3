<template>
    <div class="list">
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
            <span id="user-email">lisa.siia@gmail.com</span>
            <span class="separator"></span>
            <router-link to="/browse"><span>Browse</span></router-link>
            <span class="separator"></span>
            <router-link to="/"><span>Log out</span></router-link>
        </div>
      </nav>
    </header>
    </div>
</template>
<script>

    export default {
        name: 'Navbar',
        data: function(){
                return{
                    show: false
                }
            }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .profile-pic {
    margin-right: 15px;
    text-align: right;
  }
  .main-container {
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
  }


</style>
