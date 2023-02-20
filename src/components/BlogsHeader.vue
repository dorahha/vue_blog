<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" exact>博客总览</router-link>
        <router-link to="/add" exact>添加博客</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name:'blog-header'
}
</script>

<style scoped>
ul{
  list-style: none;
  text-align: center;
  margin: 0;
}
li{
  display: inline-block;
  margin: 0 10px;
}
a{
  color: #fff;
  text-decoration:none ;
  /* background: rgb(238, 170, 114); */
  width: 100px;
  padding: 12px;
  border-radius: 5px;
  font-size: 20px;
}
a:first-child{
  margin-right:10px ;
}
nav{
  max-width: 1000px;
  background: rgb(179, 175, 174);
  padding: 30px;
  margin: 0 auto;
}
.router-link-active{
  background: rgba(255, 255, 255, 0.8);
  color:#444
}
</style>

