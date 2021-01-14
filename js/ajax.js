function News_Ajax()
{
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		// IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			_due(xmlhttp.responseText);
		}
	}
	xmlhttp.open("GET","http://api.tianapi.com/txapi/weibohot/index?key=b5cc3c0f2ab253e5d843b3a2ada5fd84",true);
	xmlhttp.send(xmlhttp.responseText);
}
