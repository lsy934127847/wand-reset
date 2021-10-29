const BaseRest = require('./rest.js');

module.exports = class extends BaseRest {

  async __before() {
    
    return true; // 继续向后执行
}

  // indexAction() {
  //   return this.display();
  // }
  getAllAction(){

    // this.baseGetList() // 调用基类中的方法
    return this.success(  )
  }


  async getAction(){
      let options = this.ctx.param(); // 获取请求参数  // /api/module/1  options = { id: '1' } //也能解析出来
      let {
         currentPage,
         pageSize,
         all,
         username,age,user_id
      } = options

      let data // 查询的结果

      let search = {} // 查询的条件
      if(username){
        // 用户名模糊查
        search.username = ['like', `%${username}%`]
      }
      if(age){
          // 年龄精确查
          search.age = age
      }
      if(user_id){
          search.user_id = user_id
      }
    
      if(all == 1){
            data =  await this.model('user').where(search).select()
      }else{    
            data =  await this.model('user').where(search).page(currentPage,pageSize).countSelect()
           /*
              data =   {
                    errno: 0,
                    errmsg: "",
                    data: {
                        count: 20,  // 共20条
                        totalPages: 2, // 共2页
                        pageSize: 10, // 每页10条
                        currentPage: 1, // 当前第一页
                        data: [] // 数据
                        }
                    }
              */
      }
      return this.success(data)
  }
}
