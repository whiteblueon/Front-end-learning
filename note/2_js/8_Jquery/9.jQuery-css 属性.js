jQuery
    CSS/属性

        属性:
            .attr()//获取匹配的元素集合中的第一个元素的属性的值  或 设置每一个匹配元素的一个或多个属性。
            //两个参数是设置,一个参数是获取; 相当于原生js里的setAttribute dom结构中能看到 aa=123
                $('#div1').attr('aa',123); console.log($('div1').attr('aa'));
                //设置div的属性aa的值为123,然后输出结果为123.
                
            .prop()//获取匹配的元素集中第一个元素的属性（property）值或设置每一个匹配元素的一个或多个属性.
            //相当于原生js里的(对象.属性) 如oDiv1.xx dom结构中看不到
                $('#div1').prop('bb',456); console.log($('div1').prop('bb'));
                //设置div的属性bb的值为456,然后输出结果为456.
                //***若要检索和更改DOM属性(***特性属性),比如元素的checked, selected, 或 disabled状态，请使用.prop()方法。
                //.prop( propertyName, function(index, oldPropertyValue) )

            .removeAttr()
            .removeProp()
            .val()//获取匹配的元素集合中第一个元素的当前值 有一个参数是给值(所有元素都给
        ；‘)
                //<input type="text" id="username" value="zhangsan">;console.log($('#username').val());
                //得到value值zhangsan  如果有一个参数是给input设置值
        

        //链式操作 $div1.addClass('aa').addClass('bb');        
        CSS:
            .addClass()
            .css()//
            // $div1.css('background', 'red');设置一个属性建议使用
            // $div1.css({
            //     'background-color': 'red',或者backgroundColor: 'red'
            //     color: 'green',
            // });设置多个属性建议使用
            /* $div1.css('width', function(){
                //....
                return 200;
            }); *///设置的属性不是写死的 是通过计算出来的
            jQuery.cssHooks
            jQuery.cssNumber
            jQuery.escapeSelector()
            .hasClass()//判断任何一个匹配元素是否有被分配给定的（样式）类
            .removeClass()
            .toggleClass()//给有class的去掉，没有的增加 
        尺寸:
            .height()
            .innerHeight()
            .innerWidth()

        位置：
            .offset() 在匹配的元素集合中，获取的第一个元素的当前坐标，坐标相对于文档。
                //返回一个包含top left属性的对象 
                //和.position()的差别在于：.position()是相对于相对于最近已定位的祖先元素的位移。

        .html 添加的html结构  .text 添加文本   添加字符串效果是一样的 ，添加html标签.html就自动转为html代码

        .wrapInner()//(原先的内容如文本跑到后添加元素的里面)



append前面是父元素  appendto前面是子元素
detach只删除元素 事件，数据不删除  remove都删掉
.filter()过滤出想要的元素  .no()与filter效果相反
.has()在元素集合中选择有has()里面的的子元素的父元素
.not()排除元素
.add()（）里的元素也添加到.add()前面元素在的同一个集合中
.find()找子孙后代元素  .children()找亲子代元素//只找一级适合用children效率高
.is()(返回是布尔型的值,不能进行链式操作 )
.andself()把前面的元素集合加到后面的元素集合 //过时了 不常用了
.contents()获得匹配元素集合中每个元素的子元素，包括文字和注释节点。
.each()遍历一个jQuery对象，为每个匹配元素执行一个函数。()里是函数,函数参数是index,elem
.end() 终止在当前链的最新过滤操作，并返回匹配的元素的以前状态。 有点类似于找文件的../
.addBack() 有点类似于end 但是是把上一层的元素集合添加到后面
.closest()从元素本身开始，在DOM 树上逐级向上级元素匹配，并返回最先匹配的祖先元素。
.closest()与.parents()区别//.closest()1、开始于当前元素 2、在 DOM 树中向上遍历，直到找到与提供的选择器相匹配的元素
//3、返回包含零个或一个元素的jQuery对象(**找到一个就不找了)
.parents()//1、开始于父元素 2、向上遍历DOM树到文档的根元素，每个祖先元素加入到临时集合，如果提供一个选择器，则会使用该选择器在集合中进行过滤
//3、返回包含零个，一个或多个元素的jQuery对象(**找到所有的匹配的)
.parent()找父元素//.而parents()是一层一层向上找
.parentsUntil()找到匹配的父元素为止
.siblings()无论前后 选中的就是所有的兄弟元素
.next()后面的一个兄弟元素
.nextAll()后面所有的
.nextUntil()选择到括号里面的之前的兄弟元素 不包括()里面的元素
.prev().prevAll().prevUntil()选择前面的兄弟元素 同理如next
事件
        .resize()//当浏览器window的尺寸改变时，window元素上绑定的resize事件将被触发
        .on( events [, selector ] [, data ], handler(eventObject) )
            //$('#ul').on('click','li',function(){console.log($(this).index())})
        .off()移除一个事件处理函数。
        .one( events [, data ], handler(eventObject) )// 为元素的事件添加处理函数。处理函数在每个元素上每种事件类型最多执行一次。
        .mouseleave()会冒泡.mouseout()不会冒泡
        .mouseenter()会冒泡.mousedown()不会冒泡
        .focusin()会冒泡.focus()不会冒泡
        .focusout()会冒泡.blur()不会冒泡 失去焦点
        .hover(function(){},function(){})//将二个事件函数绑定到匹配元素上，分别当鼠标指针进入和离开元素时被执行。
        event.pageX 类似于 event.clientX event.pageY 类似于 event.clientY
        event.which 针对键盘和鼠标事件，这个属性能确定你到底按的是哪个键。



.index()//获取索引(在兄弟元素中的索引)  $('p').index($(this)) 当前的p在所有p中的索引 排除掉了不是相同标签的元素
            

动画
    .animate( properties [, duration ] [, easing ] [, complete ] )  
        //properties 一个CSS属性和值的对象 //什么属性变化 如背景颜色 宽高
        //duration (默认: 400) //就是动画时间            
        //easing(默认:swing)一个字符串，表示过渡使用哪种缓动函数 jQuery自身提供linear匀速和swing先慢后快
        //complete在动画完成时执行的函数。 //就是回调函数
        //scrollTop属性css3中没有 但也支持
    .hide()隐藏 .show()显示 .toggle() 显示或隐藏匹配元素。// ()里可设置隐藏或者显示的动画时间
    .fadeIn()淡入 .fadeOut()淡出 .fadeTo()淡入到 .fadeToggle()通过匹配的元素的不透明度动画，来显示或隐藏它们。
    .slideDown() 用滑动动画显示一个匹配元素 .slideUp()用滑动动画隐藏一个匹配元素。.slideToggle()用滑动动画显示或隐藏一个匹配元素。     
    .stop( [clearQueue ] [, jumpToEnd ] )//clearQueue (默认: false)一个布尔值，指示是否取消以列队动画。
    //默认 false.只取消当前动画，如果是true那么后面所有动画都没了
        //jumpToEnd (默认: false) 类型: Boolean 一个布尔值指示是否当前动画立即完成。默认false. true是立即完成


$.extend( target [, object1 ] [, objectN ] )//将两个或更多对象的内容合并到第一个对象。
//$.extend(a,b);console.log(a)合并到a里面，重复的属性后面将前面覆盖
$.trim( str )//去掉字符串起始和结尾的空格。
$.inArray( value, array [, fromIndex ] )//在数组中查找指定值并返回它的索引（如果没有找到，则返回-1）。
$('#div1').load('login.html')//在一个div元素里添加一个代码段 login.html是一个html文件，没有head,body只是如一个form之类的代码段
//$('#div1').load('')会不断加载自己














