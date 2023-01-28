<template>
  <div>
    <h1>PAGE NOT FOUND</h1>
    <i class="line" />
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
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    h1{
        text-align: center;
        font-size: 50px;
        color:pink;
    }
    p{
        text-align: center;
        color:pink;
        font-size: 30px;
    }
    .line{
        width: 100%;
        height: 3px;
        background-color: pink;
        margin: 20px 0;
    }
    img{
        width: 100%;
        height: auto;
        margin-top: 60px;
    }
}
</style>
