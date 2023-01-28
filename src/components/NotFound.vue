<template>
  <div>
    <h1>PAGE NOT FOUND</h1>
    <hr>
    <p>The unicorn is on the other page</p>
    <img :src="require('../assets/Elements/NotFound.png')">
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/common.scss";

div{
    max-width: 100%;
    height: auto;
    padding: 300px;
    background: $color-blue;
    h1{
        font-size: large;
        color:pink;
    }
    p{
        color:pink;
    }
    hr{
        width: 100%;
        height: 3px;
        background-color: pink;
        margin: 40px 0;
    }
    img{
        width: 100%;
        height: auto;
    }
}
</style>
