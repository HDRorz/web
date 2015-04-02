function detectBrowser()
{
var browser=navigator.appName
var b_version=navigator.appVersion
var version=parseFloat(b_version)
if ((browser=="Microsoft Internet Explorer") && (version<5))
	{alert("您的浏览器可能无法渲染本网站内容！建议使用chrome或者firefox浏览器访问本网站。")}
}