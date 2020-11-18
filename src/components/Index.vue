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
    
        <div class="avatar-container">
        
        </div>
      </nav>
    </header>
    <section class="main-container"></section>
    </div>
</template>

<script>

    export default {
        name: 'Index',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .main-container {
    width: 50%;
    min-height: 100%;
    margin: auto auto;
    padding: 90px 15px 15px 15px;
    background-color: #ffffff;
}
</style>
