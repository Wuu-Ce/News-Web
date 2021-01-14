var News;
function _due(Temp)
{
    News = eval( "(" + Temp + ")");
    Show_News();
}



function Show_News()
{
    var News_Element=document.getElementById("News_box")
    console.log(News_Element)
    News_Element.style+=":grid-template-rows: repeat("+News.newslist.length/5+",40px)";
    console.log(News_Element)
    
    News_Element.innerHTML="";
    for ( var i=0; i<News.newslist.length;i++ )
    {
    
        News_Element.innerHTML +="<p>" + (i+1) +". "+ News.newslist[i].hotword ;
    }
}

function ShuaXin_Auto(value)
{
    document.getElementById("setSecond").innerHTML=value;
    if (value==0)
    {
        News_Ajax();
        ShuaXin_Auto(5)
    }
    else
    {
        setTimeout(() => {
        ShuaXin_Auto(value-1)
        }, 1000*60);        
    }
}

var iImg=1;
var imgArry=new Array("2e36d362aa7cb3db01426b861e1585d4.jpeg","7e0e0a09f063db06dedda4d4aa1bcdbb.jpeg","32f1f52b675789169374af7d857174da.jpeg","b57ca0c29442cee77e952938f92f2be1.jpeg");
function Img_ShuaXin()
{
    if (iImg==4) iImg=0;
    var img=document.getElementById("image1");
    img.src="img/"+imgArry[iImg];
    iImg+=1;
}

function Img_ShuaXin_Auto(Img_ShuaXin_Second)
{
    if(Img_ShuaXin_Second==0) 
    {
        Img_ShuaXin_Second=5;
    }
    document.getElementById("img_shuaxin_auto").innerHTML=Img_ShuaXin_Second;
    Img_ShuaXin_Second-=1;
    setTimeout(() => {
        if(Img_ShuaXin_Second==0)
        {
            var img=document.getElementById("image1");
            if (iImg==4) iImg=0;
            img.src="img/"+imgArry[iImg];
            iImg+=1;
        }
        Img_ShuaXin_Auto(Img_ShuaXin_Second)
    }, 1000);
}