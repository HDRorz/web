function getwidth()
{
var w=window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;

alert("宽度："+w);
}
/*
function changmargin()
{
if(w > 1024)
	{
	var a=(w-1024)/2;
	var b=a+112;
	}
else
	{
	var a=0;
	var b=a+112;
	}
	
document.getElementById("brand").style.marginLeft="a";
document.getElementById("nav").style.marginLeft="b";

}
*/