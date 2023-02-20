<template>
  <div id="single-blog" >
    <h2 v-if="!isDelete">博客详情</h2>
    <h2 v-else>博客删除成功！！！</h2>
    <div v-if="!isDelete" class="showBox" >
      <div class="show" v-for="onlyBlog in blog" :key="onlyBlog.ID"  >    
        <div v-if="onlyBlog.ID === id" >
          <p>标题: {{ onlyBlog.title }}</p>
          <p>内容: {{ onlyBlog.content }}</p>
          <p>分类: {{ onlyBlog.category }}</p>
          <p>作者: {{ onlyBlog.author }}</p>
        </div>
        
      </div>
      <button @click="deleteBlog">删除</button >     
    </div>   
    <button class="backBtn">
        <router-link to="/">返回</router-link>
    </button> </div>
</template>

<script>
export default {
  name:'single-blog',
  data(){
    return {
      id:this.$route.query.id,
      blog:[],//接受查询出来的结果
      objectID:"",
      isDelete:false,
    }
  },


  mounted(){
    this.showSingleBlog();
    this.isDelete = false;
  },
  methods:{
    showSingleBlog(){
      const query = this.Bmob.Query("blogs");
			query.find().then(res => {
        this.blog = res;
        console.log('这是singlepage');
        console.log(this.blog.length);
        for(var i = 0;i<this.blog.length;i++){
          if(this.blog[i].ID === this.id){
            this.objectID =this.blog[i].objectId; 
            console.log(this.objectID)
          }            
      }
			});    
    },
 
    deleteBlog(){
      const query = Bmob.Query('blogs');
      query.destroy(this.objectID).then(res => {
        console.log(res)
        this.isDelete = true;
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
#single-blog{
  position: relative;
  margin: 0 auto;
  max-width: 1000px;
  padding: 30px;
  margin-top: 30px;
  background:rgb(235, 224, 224);
  border: 1px dotted #aaa;
 
}
#single-blog h2{
  text-align: center;
}
#single-blog .show p{
  font-size: 20px;
  margin-top: 10px;
}
#single-blog #buttonArea {
  display: flex;
}
#single-blog .showBox{
  position: relative;
}
#single-blog .showBox button{
  position: absolute;
  display: block;
  height: 40px;
  right: 20px;
  bottom: 0;
  font-size: 20px;
  background: rgb(179, 175, 174); 
}
#single-blog .backBtn{
  position: absolute;
  display: block;
  height: 40px;
  right: 50px;
  bottom: 0;
  font-size: 20px;
  background: rgb(179, 175, 174);
}
#single-blog button a{
  text-decoration: none;
  font-size: 20px;
  color:black;
}
</style>