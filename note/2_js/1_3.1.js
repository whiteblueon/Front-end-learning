三 JS （Javascript）部分1

    客户端js 
    服务端js  ： node.js
    JavaScript权威指南第六版  stackoverflow最大技术论坛  区块链

    注释：单行 //  多行 /* */

    一个大括号一个作用域

    所有带src属性的都有onload事件

    基于面向对象的语言。弱类型的语言。脚本语言 
    脚本语言：js php pyhton 需要宿主环境
    编程语言  c  java  能独立运行

    js是单线程的 即一个时间点只能完成一件事  js建议使用''

    js数据类型:
        一 js基本数据类型：number string(字符串) boolean undefined(作者认为null是由undefined衍生出来的) null  
        
                NaN（not a number） 栈内存
        
        二js引用类型 堆内存
             对象
             数组

        console.log(typeof a); 输出变量a的类型  typeof返回的是字符串只不过字符串对应的值是number之类的

        typeof null 返回的是object(空对象)  数组也是object function是function    

        not a defined 是错误 而undefined是数据类型
        
        number：5  0.5 ;string:'abc' 'a';boolean:true;   var d  = '';空字符串
        给变量定义了，但并没有给变量赋初始值 默认值为undefined 类型为undefined。

        var arr = [1,2,3]; arr instanceof Array;  //判断 arr是不是Array的一个实例化对象
            arr.constructor== Array;  //arr.constructor返回arr的构造函数 (用Array构造的)
        var obj={
            name = '1',
            age = '16'
        }; obj instanceof Object;  //判断 obj是不是Object的一个实例化对象
        console.log(  Array.isArray(arr)  );  //ie8以上
        


    变量：
        var（variable）
        变量声明：var 34bad; 不能以数字开头  var per人; 不能包含中文 var bad-var;非法的-
            var var; var是关键字，不能用作变量名。     开头字母 下划线 $ 
        变量名称区分大小写 字符串包含在单引号 ，双引号中。
        可以一次声明多个变量，用逗号隔开； var dog='小虎子',num=1,strnum"1",badnum=0.2;
        数字（只有整数和小数）  字符串 布尔值（bollean）（只有两个 真true、和假false）

        字符串拼接用加号：a='abc'; console.log('a=' + typeof(a));alert(a+'bcd');
            输出显示为：a=string 和 adcbcd
                        var str='abc';str+='bcd';console.log(str); 其中str+='bcd';
                        等于str=str+'bcd'
        
        var允许变量重名 var a=5;var a=6;console.log(a); 结果为6 后定义的把前面覆盖掉

        window下面自带一个name属性是空字符串  name：''

    
    数学运算：var a=5; console.log(a++);console.log(a);输出结果为 5 和 6  a++是后++ 
        是运行完之后再++;反之++a相反 结果为6 6;--与++原理相同
            console.log(5/0);输出infinity（无限的）。

            逻辑运算符：
                && 逻辑与 两边都为true时返回true，否则返回false。
                || 逻辑或 两边都为false时返回false，否则返回true。
                    前边就能判断出结果，后面就不判断了
                ！ 逻辑非 真的变成假的，假的变成真的。

                除非0的字符串和非空的数字  其余都是false 非空字符串true ''是false ' '是true因为里面有空格
                    null==undefined 是true  null===undefined 是false 


    
    类型转换：
        console.log(NaN==NaN); 结果为false 
        var a=6+'' ; 结果为'6' 变成字符串
        两个类型加号拼接其中一个是字符串类型则另一个一定转为字符串类型,
        减乘除转为数值类型

        var a=5;
        console.log(a.toString(2));  //十进制=》二进制
        var b=101;console.log(parseInt(101.2)); //二进制=》十进制

        window.prompt用户输入后的内容默认变成字符串

    
    判断和循环：=(赋值)  ==(判断 只判断值是否相等) ===(判断值和类型是否相等)
        分支结构：
            单一选择结构(if)：
                var a=5;b=6; if(a<b){console.log('a小于b');}
                    else if(a>b){console.log('a大于b');}else{console.log('a等于b');}

            三元运算符(?:):
                var a=5;b=6; a>b? console.log('a大于b') :console.log('a小于b')

            多路选择结构:(switch):switch本来就是跳转的意思（又称为“开关”），所以switch语句就
                是判断情况，跳到符合的情况开始执行,可以使用 break来只执行符合一个条件的语句。
                没有符合条件会进入default默认值。  区间较为固定
                    var condition='4';
                    switch(condition) {
                        case 4:
                            alert("c的值是4");
                            break;
                        case 3:
                            alert("c的值是3");
                            break;
                        case 2:
                            alert("c的值是2");
                            break;
                        case 1:
                            alert("c的值是1");
                            break;
                        default:
                            alert('哈哈哈');
                    } 输出结果为 哈哈哈
                有时不需要break,
                    不区分大小写
                    case 'a':
                    case 'A':
                        alert('AA');
                
                var condition='4';
                var a=4;
                if(a==condition){
                    alert(true);
                }else{
                    alert(false);
                } 输出结果为true switch比 if== 更加严格一些，不仅判断值还判断类型。
                如果是a===condition 结果为false。
        
        循环：
            for：for(初始值;结束的判断条件;每次变的条件)
                for:(var i=0;i<5;i++){
                    console.log(i);
                }结果为 0  1  2  3  4

            while:可能一次也不做
                while(判断条件){
                    代码
                }
                
            do while:最少做一次
                do {
                    代码
                } while (判断条件);

            for ( in )
                var obj ={
                    name : 'weichuang',
                    age :18
                }
                for(var p in obj ){

                }
                对谁循环in谁  这里的p对应的函数里的属性

                var arr=['a','b','c'];
                    for(i=0,i<arr.length,i++){
                        console.log(i + ':' +arr[i]);
                    }
                    输出结果为 0a  1:b  2:c
                    其中for循环等于
                    for (var p in arr){
                        console.log(p + ':' +arr[p]);
                    }
                    这里的p对应数组里的下标 
                    也可以
                    for (var p in arr){
                        console.log(`${p} : ${arr[p]}`);
                    }// 字符串模板 es6 兼容性问题
            
            break结束循环 continue结束本次循环执行下次循环
            for:(var i=0;i<5;i++){
                if(x==3){
                    break;
                }else{
                    console.log(i);
                }
            }结果为 0  1  2     continue 结果为0 1 2 4

