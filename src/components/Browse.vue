<template>
  <div class="list">
    <Navbar goNext="Index" />
    <section class="main-container">
      <div class="personArea">
          <h1> Browse users </h1>
        <ul v-for="(item, index) in posts" :key="index">
          <div class="person">
            <img :src="item.avatar" id="avatar" />
            <h1>{{ item.firstname }} {{ item.lastname }}</h1>
            <FollowButton />
          </div>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import FollowButton from "../components/FollowButton";
export default {
  name: "Browse",
  components: {
    Navbar,
    FollowButton,
  },
  computed: {
    posts() {
    return this.$store.state.posts
    }
  },
  mounted() {
    this.$store.dispatch("getPosts");
  }
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
ul {
  list-style-type: none; /* Remove bullets */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
}

.person {
  margin: 5%;
  padding: 5%;
  text-align: center;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  border-radius: 5%;
}
#postavatar {
  object-fit: cover;
  object-position: center top;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  padding: 100 px;
}

#avatar {
  object-fit: cover;
  object-position: center top;
  height: 200px;
  width: 200px;
  border-radius: 50%;
}

.postmedia {
  width: max-content;
}

h1 {
  text-align: center;
}
</style>
