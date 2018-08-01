jQuery    
    //1左右的版本支持IE6、7、8。 2及以上版本不支持

    选择器: (所有css选择器 jQuery都支持) $();函数返回个对象 ()里是字符串
        $('#div1')
        $('nav',"div1")选择div1里的nav//后代

        对象:
            var oDiv1 = document.getElementById('div1');//得到的是原生对象
            var $div1 = $('div1');//得到的是jq对象
                原生的方法属性只能是原生去. jQ的方法属性只能是jq去.
                oDiv1.innerHTML 有效 $div1.innerHTML无效 因为.innerHTML是原生方法

                原生对象转换为jQ对象 $(oDiv1) jQ转换为原生对象 $div1.get(0)  $div1[0]

        文档就绪函数:建议代码写在里边//与onload的区别:1、html结构加载完就运行 不用等如图片的资源   
                                    //2、可以写多次，不会被覆盖
            $(document).ready(function(){

            });
            或
            $(function(){

            });
        基本筛选:
            假如有一个5个li的ul
            :animated//正在执行的动画
            :eq()   //:eq()的下标从0开始
                $('#ul1 li:eq(2)').css('background','red');//选中ul下的(下标为2)第3个li 下标是-1是倒数第一个
            :even   //选择所引值为偶数的元素,从0开始计数 
                $('#ul1 li:even').css('background','red');//第1,3,5行红色 因为下标为0,2，4
            :odd    //选择索引值为奇数元素,从0开始计数 
                $('#ul1 li:odd').css('background','green');//第2,4行绿色 同上
            :first  //选择第一个匹配的DOM元素 
                $('#ul1 li:first').css('background','red');//第一行变红色
            :last   //选择最后一个匹配的DOM元素 
                $('#ul1 li:last').css('background','green');//最后一行变绿色
            :gt()   //选择匹配集合中所有大于给定index（索引值）的元素 
                $('#ul1 li:gt(1)').css('background','red');//第3,4,5行变红色
            :lt()   //同理如上 
                $('#ul1 li:lt(1)').css('background','green');//第一行绿色
            :not()  //选择所有元素去除不匹配给定的选择器的元素 ()里是选择器
                $('#ul1 li:not(.aa)').css('background','green');//假如 第2,3行有class：aa 那除了第2,3行之外变绿色
            :root   //在HTML中，文档的根元素，和$(":root")选择的元素一样， 永远是<html>元素。

            :target
        
        内容筛选:
            <ul id="ul1">
                <li>001</li>
                <li>002</li>
                <li class="aa">003</li>
                <li class="aa">004</li>
                <li>0053</li>
            </ul>

            :contains(text)//选择所有包含指定文本的元素
                $('#ul1 li:contains(3)').css('background','green');//第3,5行变绿色
            :empty//选择所有没有子元素的元素（包括文本节点）
            :has()
            :parent//选择所有含有子元素或者文本的父级元素(就是含有内容的元素  ，不是父节点)
        
        可见性筛选:
            :hidden//选择所有隐藏的元素 其余都是visible
                元素可以被认为是隐藏的几个情况：
                    1、他们的CSS display值是none。
                    2、他们是type="hidden"的表单元素。
                    3、它们的宽度和高度都显式设置为0。
                    4、一个祖先元素是隐藏的，因此该元素是不会在页面上显示。
            :visible//选择所有可见的元素
        
        属性

        子元素筛选:
            :first-child    //选择所有父级元素下的第一个子元素
                $('#ul1 li:first-child').css('background','green');//选中第一个li 注意是给li加:first-child
            :first-of-type  //父元素中第一次出现的元素。
            :last-child     //同上
            :last-of-type   //同上
            :nth-child()    //索引值，从1开始，也可以是字符串 even 或 odd，或一个方程式，例如:nth-child(4n) 
                //even相当于2n 找规律一般用:nth-child()
            :nth-last-child()   //同上 从后往前来
            :nth-of-type()  //选择同属于一个父元素之下，并且标签名相同的子元素中的第n个
                $("p:nth-of-type(2)")//选择的是p中的第二个p  
            :nth-last-of-type() 
            :only-child     //如果某个元素是其父元素的唯一子元素，那么它就会被选中(戏称:独生子女选择器)
                $("div button:only-child")//选中div下只有一个元素且为button的div
            :only-of-type   //如果父元素有相同的元素名称的其他子元素，那么没有元素会被匹配。
                $("button:only-of-type") //选中子元素中有别的元素，但只有一个button的父元素           

        表单    









