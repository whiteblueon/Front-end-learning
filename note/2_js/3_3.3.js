    js没有块级作用域;
    变量提升 
        var x = 5; // 初始化 x

        elem = document.getElementById("demo"); // 查找元素 
        elem.innerHTML = x + " " + y;           // 显示 x 和 y
        
        var y = 7; // 初始化 y
        相当于
            var x = 5; // 初始化 x
            var y;     // 声明 y
            
            elem = document.getElementById("demo"); // 查找元素
            elem.innerHTML = x + " " + y;           // 显示 x 和 y
            
            y = 7;    // 设置 y 为 7
        方法提升高于变量提升 var a  function a() {
            
        } 提升后 方法优先级在变量上面

            <script type="text/javascript">
                var a = 1;
                function hehe()
                {
                        window.alert(a);
                        var a = 2;
                        window.alert(a);
                }
                hehe();
            </script>
            上段代码相当于
                var x=1;
                function (){
                    var x;
                    alert(x);
                    x=2;
                    alert(x);
                    }  在这里里面有var是局部的 没有是全局的

        
    递归：自己调自己
        例：求10的阶乘
        function fac(num){
            if (num==1) {
                return 1;
            }
            return num * fac(num-1);
        }
        console.log(fac(10));
        其中return num * fac(num-1);可以换成return num * argument.callee(num-1);
        argument.callee();调用函数本身 但是严格模式下不支持

        const a = 5;
        a=6;  a还是5

        const obj{} 不变得是a 和 obj 的那个地址空间


引用对象 Math.random()  //0~1  不包括1
    
       
        string:
            var str="Hello world!"
                    str.indexOf() 根据字符找下标
                    str.charAt() 根据下标找字符


不确定函数参数个数：
<script>
        function mySort() {
            var tags = new Array();//使用数组作为参数存储容器
        //请补充你的代码
        

            for(var i =0;i<arguments.length;i++){
                tags.push(arguments[i])
            }
            function sortNumber(a,b){
                return a - b
            }
            tags.sort(sortNumber);
            return tags;//返回已经排序的数组
        }
        var result = mySort(50,11,16,32,24,99,57,100);//传入参数个数不确定
        console.log(result);//显示结果    
    </script> 