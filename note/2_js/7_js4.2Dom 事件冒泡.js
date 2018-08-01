oDiv1.onclick = function () {
    console.log('div1');
}; 
oDiv2.onclick = function () {
    console.log('div2');
};
oDiv3.onclick = function () {
    console.log('div3');
};
oBody.onclick = function () {
    console.log('body');
};
oHtml.onclick = function () {
    console.log('html');
};点击div3 结果为 div3 div2 div1 body html 事件由事件源开始向外(向父元素)冒泡 


oDiv1.onclick = function () {
    console.log('div1');
};
oDiv1.onclick = function () {
    console.log('div111');
};结果为div111 因为oDiv1.onclick像变量名字一样  后定义的把先定义的覆盖掉



第二种绑定事件方式
elem.addEventListener(事件type，事件处理函数, false/true) 只支持标准浏览器 W3C
    false 事件冒泡  从里往外
    true 事件捕获   从外往里
阻止事件传播(冒泡 捕获):e.stopPropagation();
    
事件都是先捕获 后冒泡
        
        oDiv1.addEventListener('click', function(e){//第一个参数事件类型如onclick需去掉on  第二个参数事件函数
            console.log('div1');           
        },false);//第三个参数布尔型的值 不写的话默认为false
        oDiv1.addEventListener('click', function(e){
            console.log('div111');           
        });结果为div1  div111 //两个都触发了 顺序是定义的顺序 与onclick不同的好处是不会被覆盖掉 是并存的
        //有兼容性问题 只支持标准浏览器
         oDiv1.addEventListener('click', function(e){
            console.log('div1');
            e.stopPropagation();
        }, false); 
        oDiv2.addEventListener('click', function(e){
            console.log('div2');
            e.stopPropagation();
        }, false);
        oDiv3.addEventListener('click', function(e){
            console.log('div3');
            e.stopPropagation();
        }, false);  点谁输出谁如点oDiv2输出div2  如果是true 不管点谁都输出div1 因为事件都是先捕获 后冒泡



早期IE  只支持事件冒泡  不支持事件捕获的
elem.attachEvent() 
问题1：顺序是相反的  执行顺序与绑定顺序是反的
问题2：this => window
阻止事件冒泡：  window.event.cancelBubble = true;
   
    oDiv1.attachEvent('onclick', function(){//事件类型 时间处理函数
        console.log(div1);
    });
    oDiv1.attachEvent('onclick', function(){//事件类型 时间处理函数
        console.log(div11);
    });
    oDiv1.attachEvent('onclick', function(){
        console.log(div111);
    });输出结果为div111 div11 div1 顺序是反的 执行顺序与绑定顺序是反的 即问题1

    oDiv1.attachEvent('onclick', function(){
        console.log(this);
    });结果是window即问题2


事件代理/事件委托 (如果有很多子元素，并且绑定的同一个事件，就可以利用事件冒泡把子元素的事件统一委托给父元素去绑定)
获取事件源：var target = e ? e.target : window.event.srcElement;

    1:输出事件源内容
    var oUl = document.getElementById('ul1');

        var aLi = oUl.getElementsByTagName('li');
        for (var i = 0; i < aLi.length; i++) {
            aLi[i].onclick = function () {
                console.log(this.innerHTML);
            };
        } 
    //等同于
        oUl.onclick = function(e){
            //获取事件源
            var target;
            if(e){
                target = e.target;
            }else{
                target = window.event.srcElement;
            }
            console.log(target.innerHTML);
        };


    2:后生成元素绑定事件源问题
        var oUl = document.getElementById('ul1');
        var aLi = oUl.getElementsByTagName('li');
        var oBtn = document.getElementById('btn');
        
        oUl.onclick = function (e) {
            var target = e ? e.target : window.event.srcElement;           
            console.log(target.innerHTML);            
        };

        oBtn.onclick = function () {
            var oLi = document.createElement('li');
            oLi.innerHTML = Math.random();
            oUl.appendChild(oLi);
        };

        
e.currentTarget //this
e.target //事件源
        var target = e ? e.target : window.event.srcElement;
        if(target != this){//判断事件源和this的关系 相等就说明当前事件不是由事件冒泡出来的
            console.log(target.innerHTML);
        }

        oUl.onclick = function (e) {
            console.log(e.currentTarget);//this
            console.log(e.target);//事件源
        };


改变this指向:
        call    第一参数是this指向 接着的参数是函数参数 函数会马上调用
        apply   第一参数是this指向 第二个参数是数组 数组是函数参数有几个写几个 函数会马上调用
        bind    与call一样 但是不调用函数 调用需要在后面加()
        var obj = {
            name: 'zs',
            age: 18
        };
    
        function foo(a, b, c){
            console.log(this, a ,b, c);
        }
        foo.call(obj, 5, 6, 7);将this指向obj
        foo.apply(obj, [5, 6, 7]);
    
        foo.bind(obj)( 5, 6, 7);


        var oUl1 = document.getElementById('ul1');
        var aLi = oUl1.getElementsByTagName('li');
        for(var i=0; i<aLi.length; i++){
            aLi[i].onclick = function(){
                // var _this = this;
                window.setTimeout(function(){
                    console.log(this);
                }.bind(this), 1000);
            };
        }




        var fn1 = function(){
            alert(1);
        };// new Function()
        var fn2 = function(){
            alert(2);
        };
    
    
        addEvent(oDiv1, 'click', fn1);
        // addEvent(oDiv2, 'click', fn2);
    
        removeEvent(oDiv1, 'click', fn1);
        // removeEvent(oDiv2, 'click', fn2);
    
    
       // 绑定事件
    function addEvent(elem, type, handler, useCapture){
        if(elem.addEventListener){
            elem.addEventListener(type, handler, (useCapture == undefined||useCapture==false) ? false : true);
        }else if(elem.attachEvent){
            elem.xx = function(){
                handler.call(elem);
            };
            elem.attachEvent('on' + type, elem.xx);
        }else{
            elem['on' + type] = handler;
        }
    }

    // 移除事件
    function removeEvent(elem, type, handler){
        if(elem.removeEventListener){
            elem.removeEventListener(type, handler);
        }else if(elem.detachEvent){
            elem.detachEvent('on' + type, elem.xx);
        }else{
            elem['on' + type] = null;
        }
    }   