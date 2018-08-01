AMD  CMD：
    https://www.zhihu.com/question/20351507

    AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。
    CMD 是 SeaJS 在推广过程中对模块定义的规范化产出


    1. 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）。CMD 推崇 as lazy as possible.

    2. CMD 推崇依赖就近，AMD 推崇依赖前置。


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<script>
    var oScript = document.createElement('script');
    oScript.src="../xx.js";
    document.head.appendChild(oScript);

    /*动态的创建script   异步加载js文件
    * 正则表达式匹配需要加载的文件
    * */


    /* defer  async
    *
    *
    *
    * */





</script>



</body>
</html>


