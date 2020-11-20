<template>
  <div class="person">
    <img src="person.avatar" id="avatar" />
    <h1>person.firstname + " " + " " person.lastname</h1>
    <FollowButton />
  </div>
</template>

<script>
import FollowButton from "../components/FollowButton";
export default {
  name: "Browse",
  components: {
    FollowButton,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.person{
    margin: 5%;
    padding: 5%;
    text-align: center;
    box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
    border-radius: 5%;
}
#postavatar{
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

 .postmedia{
     width: max-content;
 }

  h1{
      text-align: center;
  }
  </style>