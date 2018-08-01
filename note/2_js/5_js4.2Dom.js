DOM(Document Object Model)——文档对象模型

    console.log(domcument.body)
    console.log(domcument.domcumentElement)

    var allP = document.getElementsByTagName("p");//获取文档中所有p标签 返回的是HTMLCollection
    //因为页面中标签相同的元素很多,所以即使页面中只有一个p元素,getElementsByTagName也会返回一个集合
    还有一个通过name来获取元素的方法:getElementsByName
	var radios = document.getElementsByName("check");//获取所有name为check的元素 返回的是Nodelist节点列表

    Event 事件 
        事件3要素： 事件源 事件处理函数 事件对象e(e 有兼容性)(事件触发时 浏览器给的事件对象 键盘码 鼠标码之类)
            小技巧： e = e ||window.event; (标准 早期浏览器都兼容) 如果不兼容e就false接着判断||后面的
        
        document.oncontextmenu = function(){

            return false //阻止默认行为  屏蔽网页自带的右键菜单
        }; document事件源  function(){}事件处理函数 oncontextmenu事件类型
        
        this 对当前对象的引用

        oncontextmenu 右键点击菜单  

    对象.style.属性 与对象.offsetWidth 第一个主要用于赋值 赋值和取值只能赋或取到内联样式，而取值主要用第二个

    offset: (只能取值，不能赋值)获取到的值是没有单位的
        offsetWidth 元素宽度(包括内容 padding border) offsetHeight 元素高度
        offsetLeft offsetTop 离的最近的已经定位的祖先元素的距离
        offsetParent 离的最近的已经定位的祖先元素(获取的是对象)

    var oH1=document.createElement('h1'); oDiv1.appendChild(oH1);创建了一个dom里没有的对象，存在了内存中
        将它赋给了oDiv1
    
        onload 事件会在页面或图像加载完成后立即发生。带src属性的都有onload事件
            可用在js写在head里；
            js写在body结束上面和head里的区别：head里的会在资源也加载完才执行 而写在body结束上方在标签结束就执行
    
    注意：如果元素id重复，css都会选中，而js只会选中第一个

    