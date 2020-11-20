<template>
  <div class="list">
    <Navbar goNext="Index" />
    <section class="main-container">
      <div class="personArea">
        jou
            <img :src="persons[0].avatar" />
            <h4>{{ persons[0].firstname }} {{ persons[0].lastname }}</h4>
    
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  name: "Browse",
  components: {
    Navbar,
  },
  computed:{
      persons: function () {
                return this.$store.state.persons
            },
            
            
  },

};
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
.personArea {
  align-content: center;
}
</style>
