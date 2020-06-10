setInterval(function(){
	var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
	var p=0.5;
    var bgColor = "rgba(" + x + "," + y + "," + z + ","+p+")";
    document.querySelector("#a").style.background = bgColor;
},3000);

var img=document.getElementById("img");
var images=["https://talentgarden.org/wp-content/uploads/2017/07/Coding-School-1-1400x933.jpg","https://e-syndicate.net/wp-content/uploads/2019/02/code-coding-computer-574071-1.jpg","https://www.jetbrains.com/webstorm/img/screenshots/webstorm-main.png","https://miro.medium.com/max/1200/1*k1B-5Bs-K6GALSajditJmg.jpeg"];
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

$(".e").on("mouseover",function(){
	$(".e").css("color","#000040");
});
$(".e").on("mouseout",function(){
	$(".e").css("color","black");
});

var imgg=document.getElementById("imgg");
var imagess=["https://thomasv.nl/wp-content/uploads/2013/06/html-825x510.jpg","https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_960_720.jpg","https://cdn.pixabay.com/photo/2018/11/13/18/05/html-3813614_960_720.jpg","https://cdn.pixabay.com/photo/2016/07/30/17/19/code-1557582_960_720.jpg","https://www.iquorsolutions.com/images/services/graphic/psd-to-html.jpg"];
var y=0;
function slidee(){
	if(y<images.length){
	   y=y+1;
	   }else{
		   y=1;
	   }
	
	imgg.innerHTML="<img src="+imagess[y-1]+">";
}
setInterval(slidee,3000);

var imggg=document.getElementById("imggg");
var imagesss=["https://cdn.pixabay.com/photo/2018/04/03/23/29/wordpress-3288420_960_720.png","https://cdn.pixabay.com/photo/2018/11/04/00/02/web-page-3793072_960_720.png","https://cdn.pixabay.com/photo/2016/08/02/11/13/graphic-design-studio-1563080_960_720.jpg","https://cdn.pixabay.com/photo/2018/02/16/10/23/web-3157323_960_720.jpg"];
var z=0;
function slideee(){
	if(z<images.length){
	   z=z+1;
	   }else{
		   z=1;
	   }
	
	imggg.innerHTML="<img src="+imagesss[z-1]+">";
}
setInterval(slideee,3000);

var imgggg=document.getElementById("imgggg");
var imagessss=["https://cdn.pixabay.com/photo/2014/09/14/01/13/jquery-444684_960_720.png","https://image.shutterstock.com/image-illustration/jquery-digital-java-code-text-600w-1454588375.jpg","https://image.shutterstock.com/image-photo/jquery-laptop-on-word-600w-1418515976.jpg","https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_960_720.jpg"];
var z=0;
function slideeee(){
	if(z<images.length){
	   z=z+1;
	   }else{
		   z=1;
	   }
	
	imgggg.innerHTML="<img src="+imagessss[z-1]+">";
}
setInterval(slideeee,3000);
