        querySelector(翻译为：查询选择器)
        var oDiv22 = document.querySelector('#div2 .aa');//兼容性问题 只能获取到第一个
        var aaaa = document.querySelectorAll('#div2 .aa');//兼容性问题 能获取到全部
        console.log(aaaa);

        console.log(oDiv1.nextElementSibling);//nextSibling 标准浏览器有空白换行，结果为text
                而 nextElementSibling 就是下一个兄弟元素

        console.log(oDiv2.previousElementSibling);//previousSibling 同上，不过为上一个兄弟

        console.log(text.nodetype)结果为3 文本节点的nodetype为3

        console.log(oUl1.children);//当前这个元素的所有元素节点孩子

        var oDiv1 = document.getElementById('div1'); var oDiv2 = document.createElement('div');  
        oDiv2.innerHTML = 'div2'; oDiv1.appendChild(oDiv2);创建了一个元素div2 ,然后追加个孩子oDiv2，
        插入的是最后面，并增加内容div2  oDiv1.removeChild(oDiv2)  去掉孩子oDiv2
        oDiv1.insertBefore(oDiv2, oDiv3); 插入的是oDiv2节点，插入到oDiv3前面去，后面参数没写相当于appendChild
        oDiv1.replaceChild(oDiv2, oDiv3);新的节点，被替换的旧的节点
        oDiv1.appendChild(oDiv3.cloneNode());往oDiv1再复制一个oDiv3
        console.log(oDiv3.nodeName);输出元素名称 (是字符串 大写的)
        oDiv1.setAttribute('xx', 5); 设置属性 属性名及属性值 自带属性推荐用这个
        console.log(oDiv1.getAttribute('xx')); 结果为5
        oDiv1.xx = 5; 不是自带属性推荐用这个 
        oDiv3.parentNode oDiv3的父元素
        oDiv1.childNodes oDiv1所有节点孩子 标准浏览器包括text 早期ie不包括
        oDiv1.children oDiv1的所有元素节点孩子

        var arr = document.getElementById('div1')//返回的dom对象 没有返回的是null
        var arr = document.getElementsByClassName('aaa')//返回的节点列表 
        var arr = document.getElementsByTagName('p')//返回的节点列表 
        var arr = document.getElementsByName('xx')//返回的节点列表 


        除了id其余如getElementsByTagName返回的是数组