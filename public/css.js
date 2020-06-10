setInterval(function(){
	var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
	var p=0.5;
    var bgColor = "rgba(" + x + "," + y + "," + z + ","+p+")";
    document.querySelector("#a").style.background = bgColor;
},3000);

var img=document.getElementById("img");
var images=["https://cdn.pixabay.com/photo/2016/05/27/08/51/mobile-phone-1419275_960_720.jpg","https://cdn.pixabay.com/photo/2017/12/22/08/01/paper-3033204_960_720.jpg","https://cdn.pixabay.com/photo/2016/05/05/11/22/particles-1373684_960_720.jpg","https://cdn.pixabay.com/photo/2018/03/10/18/03/laptop-3214756_960_720.png"];
var x=0;
function slide(){
	if(x<images.length){
	   x=x+1;
	   }else{
		   x=1;
	   }
	
	img.innerHTML="<img src="+images[x-1]+">";
}
setInterval(slide,3000);

$(".m").fadeOut(9);
$(".o").fadeOut(9);
$(".q").fadeOut(9);
$(".s").fadeOut(9);
$(".w").fadeOut(9);
$(".l").click(function(){
if($(this).text()=="Click to see"){
$(".m").slideDown();
$(".l").text("Click to hide");
}
else if($(this).text()=="Click to hide"){
	$(".m").slideUp();
	$(".l").text("Click to see");
}
});

$(".n").click(function(){
if($(this).text()=="Click to see"){
$(".o").slideDown();
$(".n").text("Click to hide");
}
else if($(this).text()=="Click to hide"){
	$(".o").slideUp();
	$(".n").text("Click to see");
}
});

$(".p").click(function(){
if($(this).text()=="Click to see"){
$(".q").slideDown();
$(".p").text("Click to hide");
}
else if($(this).text()=="Click to hide"){
	$(".q").slideUp();
	$(".p").text("Click to see");
}
});
$(".r").click(function(){
if($(this).text()=="Click to see"){
$(".s").slideDown();
$(".r").text("Click to hide");
}
else if($(this).text()=="Click to hide"){
	$(".s").slideUp();
	$(".r").text("Click to see");
}
});
$(".v").click(function(){
if($(this).text()=="Click to see"){
$(".w").slideDown();
$(".v").text("Click to hide");
}
else if($(this).text()=="Click to hide"){
	$(".w").slideUp();
	$(".v").text("Click to see");
}
});