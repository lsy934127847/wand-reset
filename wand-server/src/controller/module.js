const BaseRest = require('./rest.js');

module.exports = class extends BaseRest {


    async __before() {
    
        return true; // 继续向后执行
    }

    // getAction(){

    //     return this.success('我是你儿子')
    // }
    // getAllAction(){
    //     return this.success('我是getAllAction你儿子')
    // }

};
