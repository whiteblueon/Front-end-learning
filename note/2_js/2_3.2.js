三 JS （Java script）部分2 
    函数：函数算一种数据类型
        1, 方法的定义：  可以先调用后声明 
            这种定义叫函数声明  这么定义的函数声明运行时会提前
             function 方法名(形参) {
                方法体
            }
        方法的调用：
            方法名：(实参);
        例子：function add(x,y){
            console.log(x+y);
        }
        add(5,6);
        add(2,3);


        2, 函数直接量：必须先声明后调用
            这种定义叫函数表达式
            var add=function(x,y){
                return x+y;
            };
            var res= add(5,6);
            var res2= res+10;
            console.log(res2); 输出结果为21 函数运行完之后 return将返回一个结果，
            该结果赋值给了res   如果函数体外面还能用到 就return 用不到就不需要return
            执行return之后,函数就不再执行就会退出

        (function(形参)){ //函数立即调用
            var a=5;
        })(i);
        

    isNaN:判断用户是否输入的是数字

    数组与对象：
            数组：[]
            1、    var arr = [1, 2, 3, 4];
                for(var i=0;i<arr.length;i++){
                    console.log(arr[i]);
                }
            
            2、    var arr = new Array(5, 6, 7, 8);
                for(var i=0;i<arr.length;i++){
                console.log(arr[i]);
                }
                    arr.push(9);
                    console.log(arr); 输出结果为 5 6 7 8 9

                    arr.pop();
                    console.log(arr); 输出结果为 5 6 7 8 

            var arr = new Array(3);//在申明时只放一个正整数表示数组的长度
                alert(arr.length);//输出3

            join 数组元素变成字符串 并加分隔符号
                alert(arr);
                alert(arr.join(","));//两句的输出效果是一样的
            
            判断是否是数组
            var arr = ['a','b','c']    
            console.log(arr instanceof Array);
            console.log(arr.constructor== Array);

            对象：object
                内置对象 
                dom对象
                自定义对象
                var obj={
                    name: 'weichuang',
                    age: 18,
                    eat : function () {
                        
                    }
                };
                console.log(obj.name) 输出结果为weichuang 也可以用 console.log(obj['name']);
                意思是去找obj里的字符串叫name的; 
                区别在于 如果属性名是变化的 如循环 name和age 就用obj['']
                var obj={
                    name: 'weichuang',
                    age: 18,
                    school: 农大
                };
                for (var p in obj){
                    console.log(p + ':' + obj[p]);
                }
                这里的p不能加引号 因为p是变量 而加引号就变成字符串了;
                结果为
                name: weichuang
                age: 18
                school: 农大
                
                var obj={
                    name: 'weichuang',
                    age: 18,
                    p: 'xx'
                };
                for (var p in obj){
                    console.log(p + ':' + obj.p);
                }
                结果为
                name: xx
                age: xx
                p: xx

                浅拷贝 同一个空间
                var obj1={
                    name: 'weichuang',
                    age: 18
                };
                var obj2= obj1;
                
                深拷贝 (递归)
                function clone() {
                    var newObj={};
                    for(var p in obj1){
                        if(typeof obj[p]=='object'){
                            newObj[p]=clone(obj1[p])
                        }else{
                            newObj[p]=obj1[p]
                        }                       
                    }
                    return newObj;
                }
                var obj2 = clone(obj1);