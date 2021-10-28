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
      } = options

      let data // 查询的结果

      let search = {} // 查询的条件
      if(all == 1){
           data =  await this.model('user').where(search).select()
      }else{    
          data =  await this.model('user').where(search).page(currentPage,pageSize).countSelect()
      }
   

      return this.success(data)
  }
}
