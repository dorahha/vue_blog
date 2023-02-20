<template>
  <div id="show-blogs">
     <h1>博客总览</h1>
     <input v-model="search" placeholder="搜索">
     <div class="singleBlog" v-for="(blog) in filtereBlogs" :key="blog.ID">
        <router-link :to="{ path: '/blog', query: { id: blog.ID }}">
          <h2>{{ blog.ID}}.{{ blog.title }}</h2>
        </router-link> 
        <article>{{ blog.content }}</article>
     </div>    
  </div>
</template>

<script>


export default {
  name: 'show-blogs',
  data(){
    return{
      blogs:[],
      search:""
    }   
  },
  mounted(){
    this.showAllBlog()
  },
  methods:{
    showAllBlog(){
      const query = this.Bmob.Query("blogs");
				query.find().then(res => {
          this.blogs = res 
          console.log(this.blogs)         
				});
    },
  },
  computed:{
    filtereBlogs:function(){
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search)
      })
    }
  },
}
</script>

<style>
#show-blogs{
  max-width: 1060px;
  margin: 0 auto;
  position: relative;
}
#show-blogs h1{
  text-align: center;
  color: white;
}
#show-blogs input{
  position: absolute;
  top: 30px;
  right: 0;
}
.singleBlog{
  padding: 20px;
  margin: 20px 0;
  margin: 0 auto;
  max-width: 1060px;
  box-sizing: border-box;
  background: rgb(223, 215, 215);
  border: 1px dotted #aaa;
}
#show-blogs a{
  color:#444;
  text-decoration: none;
}
input[type="input"]{
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
