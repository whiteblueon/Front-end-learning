Image():
    图片预加载 加载到内存里
    let oImg=new Image();
    oImg.onload =function(){

    }
    oImg.src='img/'+(i+1)+'.jpg'//一些ie6兼容性问题 需写在onload下面 要不src加载不了