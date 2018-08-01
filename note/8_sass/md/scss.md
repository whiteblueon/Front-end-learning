sass(css预处理器)
    安装：
    scss到css   
        第一步获取路径：
            1、直接上文件夹里将路径换成cmd 回车
            或ctrl + ~ 调出编译器控制台(windows版本 vs code) 输入 cd加路径

            cd .. 是回到上一路径 有空格

        第二步转换scss到css ：
            如输入 sass scss/test.scss:css/test.css
            sass scss文件夹名/scss文件:css文件夹名/转换后的css文件名  (一定注意空格)


    单文件监听命令： 
        如 sass --watch scss/test.scss:css/test.css
        随着scss文件更新保存 css同步更新  想要停止监测 进入控制台 Ctrl + C


普通变量$clolor:#f00;
默认变量：$clolor:#f00 !default;
特殊变量：$a:'head';   .#{$a}{width:500px}  或 background： url("#{$a}.jpg");
    变量写在选择器里用花括号{}括起来

层层嵌套：如下
    .header{
        width:1210px;
        margin: 0 auto;
        .logo{
            width:100px;
            height:100px;
            float: left;
        }
        a{
            text-decoration:none;
            &:hover{
                color:#ff0;
            }
        }
    }

.logo与a嵌套在.header里并且是兄弟关系,a里运用了伪类选择器需要加个&,否则会有空格


混合宏： (类似于封装一个函数)
    声明混合宏：
        @minxi border(){
            border: 2px solid #f00;
            box-shadow: 0 0 3px 4px rgba(0,0,0,.5)
        }
    调用混合宏：
        .aa {
            width：200px;
            height:200px;
            @include border();
        }
        .bb {
            width：50px;
            height:20px;
            @include border();
        }
    混合宏参数：
        例一：
            @minxi border($attr,$val){
                -webkit-#{$attr}:$val;
                -moz-#{$attr}:$val;
                -o-#{$attr}:$val;
                -ms-#{$attr}:$val;
                #{$attr}:$val;
            }
            .cc {
                @include css3(border-radius,30px);
            }

        例二：
            @mixmi arrow($width,$col,$dir){
                border-style:solid;
                border-width:$width;
                @if($dir==bottom){
                    border-color:$col transprant transprant transprant;
                }
                @if($dir==left){
                    border-color:transprant $col transprant transprant;
                }
                @if($dir==right){
                    border-color:transprant transprant transprant $col;
                }
                @if($dir==top){
                    border-color:transprant transprant $col transprant;
                }
                width:0;
                height:0;
            }
            .arrow{
                @include arrow(20px,green);
            }

继承：
    @extend
    例三:
        .dd{
            width:100px;
            height:100px;
        }
        .ff{
            @extend .dd;
        }

        转换为css为
        .dd,.ff{
            width:100px;
            height:100px;
        }

占位符:用的时候在继承
    %placeholder
    例四:
    %gg{
        color:#000;
        width:200px;
        height:200px;
    }
    .hh{
        $extend %gg
    }

注释:
    /*aaa*/ scss 和 css 都能看见
    //bbbb 只有scss能看见

@charset"utf-8"  能用汉字  写在最上面;
@import"common.scss"; 引入一个common.scss文件 写在最上面;

自定义函数:
    例五:
        @function add($x,$y){
            return $x+$y;
        }
        .j{
            width:add(3,5px)
        }

运算:
    除法： width: (6px / 2);

    
控制命令:
    @if  例一中$dir

    @for $i from <start> through <end> 
        @for $i from 1 through 5{//从1到5包括5
            .item{$i}{
                width:20px*$i
            }
        }
        
    @for $i from <start> to <end>

    @while
        $j:5;
        @while($j<10){
            .a#{$j}{
                width:20*$j;
            }
            $j:$j+2;
        }
    
    @each in 循环 循环列表
        $icon:  warn right
        @each in icon{
            .#{val}{
                background:url("")
            }
        }



       