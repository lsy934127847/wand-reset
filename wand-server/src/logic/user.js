
// 数据校验
module.exports = class extends think.Logic {
  indexAction() {

  }

  getAction(){
    /*
    let rules = {
      username: {
        string: true,       // 字段类型为 String 类型
        required: false,     // 字段必填
        default: 'thinkjs', // 字段默认值为 'thinkjs'
        trim: true,         // 字段需要trim处理
        method: 'GET'       // 指定获取数据的方式
      },
      age: {
        int: true ,// 20到60之间的整数,
        required: false,
        method: 'GET'
      }
    }
    let flag = this.validate(rules);
    if(!flag){
      return this.fail('validate error', this.validateErrors);
      // 如果校验失败，返回
      // {"errno":1000,"errmsg":"validate error","data":{"username":"username can not be blank"}}
    }
    */
    // 将校验规则赋值给 this.rules 属性进行自动校验 如果有错误则直接输出 JSON 格式的错误信息
    // {"errno":1000,"errmsg":"validate error","data":{"username":"username can not be blank"}}
    this.rules = {
      user_id : {
        int: true, 
        required :true
      },
      username : {
        string: true, 
        required: false,
        trim: true, 
      },
      age : {
        int: true, 
        required :false
      }
    }


  }
};
