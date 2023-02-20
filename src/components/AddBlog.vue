<template>
  <div id="add-blog">
    <h2 v-if="!submited">添加博客</h2>
    <h2 v-else>博客添加成功 
      <span><router-link to="/">返回</router-link></span>
    </h2>
    <form v-if="!submited">
      <label >标题:</label>
      <input type="text" v-model="blog.title">
      <label >内容:</label>
      <textarea v-model="blog.content" ></textarea>
      <div id="checkboxes">
        <label >vue.js</label>
        <input type="checkbox" value="HTML" v-model="blog.categories">
        <label >html</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label >css</label>
        <input type="checkbox" value="CSS" v-model="blog.categories">
        <label >JavaScript</label>
        <input type="checkbox" value="JavaScript" v-model="blog.categories">
        <label >Others</label>
        <input type="checkbox" value="Others" v-model="blog.categories">
      </div>
      <label >作者:</label>
      <select v-model="blog.author">
        <option v-for="author in authors" :key="author">
          {{ author}}
        </option>
      </select>
      <div class="btnBox">
        <button @click="add">提交博客</button>
        <button>
          <router-link to="/">返回</router-link>
        </button>
      </div>
      
    </form> 
    <!-- 测试语句 -->
    <!-- <div id="show">
      <P>标题:</P>
      <p>{{ blog.title}}</p>
      <p>内容:</p>
      <p> {{ blog.content}}</p>
      <p>博客分类:</p>
      <p v-for="category in blog.categories" :key="category">{{ category }}</p>
      <p>作者:</p>
      <p>{{ blog.author }}</p>
    </div> -->  
  </div>
</template>

<script>
export default {
  name: 'add-blog',
  props: {
    msg: String
  },
  data(){
    return{
      blog:{
        title:"",
        content:"",
        categories:[],
        author:"",
      },
      authors:["Dora","Moxi","Gumiao","Limeng"],
      submited:false,//用来控制提交博客不展示表单
    }  
  },
  methods:{
    // 添加数据的代码
    add(){
      const query = Bmob.Query('blogs');
      query.set("title",this.blog.title)
      query.set("content",this.blog.content)
      query.set("category",this.blog.categories)
      query.set("author",this.blog.author)
      query.save().then(res => {
        console.log(res);
        this.submited = true       
      }).catch(err => {
        console.log(err)
      })          
    }         
  },
}



</script>


<style  scoped >
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 1020px;
  padding:20px ;
  background: rgb(223, 215, 215);
}
#add-blog h2{
  text-align: center;
}
#add-blog h2 span a{
  text-decoration: none;
  color: black;
  display: block;
  margin-top: 10px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],textarea,select{
  display: block;
  width: 100%;
  padding: 8px;

}
textarea{
  height: 200px;
}
#checkboxes label{
  display: inline-block;
  margin-right: 10px;
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}
#add-blog .btnBox{
  width: 100%;
  display: flex;
   justify-content: space-between;
}
#add-blog .btnBox button{
 
  display: block;
  margin: 20px 0;
  background: rgb(179, 175, 174);
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}
#add-blog .btnBox button a{
  text-decoration: none;
  color: black;
}
#show{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3{
  margin-top: 10px;
}
</style>
