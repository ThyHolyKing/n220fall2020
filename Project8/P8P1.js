document.getElementById('midbox').onclick = function(){increaseSize();};
function increaseSize(){
   var element = document.getElementById('midbox');
   var positionInfo = element.getBoundingClientRect();
   var height = positionInfo.height;
   var width = positionInfo.width;
   var height1 = height*1.1;
   var width1 = width*1.1;
   document.getElementById("midbox").style.height = height1+"px";
   document.getElementById("midbox").style.width = width1+"px";
}
