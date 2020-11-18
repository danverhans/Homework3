<template>
    <div class="list">
      <Navbar goNext="Browse"/>
    <section class="main-container">Index.vue</section>
    </div>
</template>
<script>
    import Navbar from '../components/Navbar'
    export default {
        name: 'Index',
        components: {
          Navbar
        }
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
