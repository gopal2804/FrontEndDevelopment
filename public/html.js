setInterval(function(){
	var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
	var p=0.5;
    var bgColor = "rgba(" + x + "," + y + "," + z + ","+p+")";
    document.querySelector("#a").style.background = bgColor;
},3000);

var img=document.getElementById("img");
var images=["https://cdn.pixabay.com/photo/2014/07/08/09/58/html5-386614_960_720.jpg","https://cdn.pixabay.com/photo/2016/11/30/20/44/computer-1873831_960_720.png","https://cdn.pixabay.com/photo/2015/07/15/08/18/web-845809_960_720.jpg","https://cdn.pixabay.com/photo/2015/08/19/15/44/seo-896175_960_720.png"];
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

$(".d").click(function(){
$(".d").text("An HTML boilerplate is a set of downloadable files that provide a foundation for any website you might want to create. ... Boilerplates may contain a range of file types, including HTML documents, but also add CSS, JavaScript, placeholder images, and documentation on how to use what you've just downloaded.");
	
});

$(".g").fadeOut(9);
$("#f").click(function(){
   if($(this).text()=="Click to see it")
{
	$(".g").slideDown();
	$("#f").text("Click to hide");
}
else if($(this).text()=="Click to hide")
{
	$(".g").slideUp();
	$("#f").text("Click to see it");
}
});

$(".y").fadeOut(9);

$("#io").click(function(){
   if($(this).text()=="Click to see")
{
	$(".y").slideDown();
	$("#io").text("Click to hide");
}
else if($(this).text()=="Click to hide")
{
	$(".y").slideUp();
	$("#io").text("Click to see");
}
});

$(".ll").fadeOut(9);

$(".kk").click(function(){
   if($(this).text()=="Click to see")
{
	$(".ll").slideDown();
	$(".kk").text("Click to hide");
}
else if($(this).text()=="Click to hide")
{
	$(".ll").slideUp();
	$(".kk").text("Click to see");
}
});

