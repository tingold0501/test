window.onscroll = function(){
    console.info(document.documentElement.scrollTop);
    var header = document.getElementById("myHeader");
    if(document.documentElement.scrollTop > 200 || document.body.scrollTop > 200){
        header.style.position = "fixed";
        header.style.left = 0;
        header.style.right = 0;
        header.style.background = "rgb(255, 255, 255, 0.8)";
        header.style.zIndex = 9;
    } else{
        header.style.position ="relative";
        header.style.backgroundColor ="rgb(255, 255, 255)";
    }
}