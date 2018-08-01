/**
 * Created by apple on 18/7/12.
 */
define(function(){//定义一个模块方法 define(定义)
    function add(x,y){
        return x+y;
    }
    return add;/*暴露出去  否则外面调用不了 注意不能加括号否则就在这调用了*/ 

});