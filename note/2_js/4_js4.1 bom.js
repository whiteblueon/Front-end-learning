BOM——浏览器对象模型(Browser Object Model)

    定时器:
        时间等待与间隔函数
        setTimeout()—— 暂停指定的毫秒数后执行指定的代码
        clearTimeout()——取消指定的setTimeout函数将要执行的代码
        setInterval()——间隔指定的毫秒数不停地执行指定的代码
        clearInterval()——取消指定的setInterval函数将要执行的代码

        var num = 0;
        var timer = setInterval(function () {
            console.log(num++);
            if (num==5) {
                clearInterval(timer);
            }
        },1000)
        console.log('timer =' + timer);
        输出结果为 每隔一秒输出 0  1  2  3  4 还输出一个 timer=1; 因为setInterval返回的是一个number型数字

        var num = 0;
        var timer = setTimeout(function () {
            console.log(num++);
        },1000)  结果为 0  因为setTimeout只执行一次
            
        var timer = setInterval(function () {
            console.log(1);
        },0);
        console.log(2);
        console.log(3); 结果为2 3 1   因为js是单线程 setInterval暂时跳出当前任务队列，
        等别的任务都完成 再执行它

        History对象,在浏览器历史记录中导航
            History 对象的属性:length	返回浏览器历史列表中的 URL 数量
            
            History 对象的方法
            
            back()	加载 history 列表中的前一个 URL
            forward()	加载 history 列表中的下一个 URL
            go(num)	加载 history 列表中的某个具体页面

        <h1>history</h1>
        <button id="go-back">返回</button>>
        <script>
            var oGoback= document.getElementById("go-back");
            oGoback.onclick = function(){
                history.back();
            };
        </script>
            效果：点击返回 回到上一个网页

            script标签在body结束标签上面 是dom结构加载完执行
            而window.load=function () {}是dom结构和资源加载完执行 如img标签和里面的图片


    requestAnimationFrame()浏览器自带是方法 刷新时间基本为16.66ms 跟浏览器刷新频率基本一致 
        与定时器的区别是定时器的时间是手动设置的 刷新频率可能会大于浏览器刷新时间，会执行强制刷新，性能不好