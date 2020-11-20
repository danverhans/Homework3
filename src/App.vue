<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app', 
    }
</script>

<style>

* {
    font-family: 'Roboto Slab', serif;
    outline: none;
}

html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

body {
    background-color: #0277bd;
    color: #263238;
}

a {
    color: #40c4ff;
}
button {
    padding: 8px 16px;
    margin: 4px 0;
    color: #ffffff;
    background-color: #01579b;
    border: none;
    border-radius: 4px;
}

button:hover {
    box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
    cursor: pointer;
}



.like-button {
    background-image: url(./assets/like.png);
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: 5px center;
    background-color: #8a8a8a;
    width: 60px;
    height: 25px;
    padding-left: 23px;
    line-height: 10px;
    text-align: left;
    border: none;
}

.like-button.liked {
    background-color: #01579b;
}

.profile {
    width: 45%;
    display: inline-block;
    border: 1px solid #dedede;
    border-radius: 5px;
    text-align: center;
    margin: 1%;
}
.profile img{
    width: 75px;
    height: 75px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    margin: 5px;
}

.profile h2{
    font-size: 16px;
}

</style>
