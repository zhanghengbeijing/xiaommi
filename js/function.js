//兼容函数1
//功能：解决IE浏览器不支持通过类名获取html元素的问题
//参数说明：classname代表要传入的类名，obj代表对象，可以实现缩小范围查找
	function getclass(classname,obj)
	{	
		var obj=obj||document;
		if(obj.getElementsByClassName)//
		{
			return obj.getElementsByClassName(classname);
		}
		else
		{
			var w=obj.getElementsByTagName("*");
			var d=[];
			for(var i=0;i<w.length;i++)
			{
				if(check(w[i].className,classname))
				{
					d.push(w[i]);
				}
			}
			return d;
		}
	}
	//str表示多个类名集合以后的字符串，val表示想找的类名，与classname代表的相同
	function check(str,val)
	{
		var newarr=str.split(" ");
		for(var i=0;i<newarr.length;i++)
		{
			if(newarr[i]==val)
			{
				return true;
			}
		}
		return false;
	}


	//var q=getclassname("ddd");
	//alert(q.length);//






//兼容函数2
//功能：可以获取与设置纯文本的兼容函数
function getText(obj,val)//obj表示：哪个对象用这个方法，val表示：接收第二个实参，设置一个文本
{	if(val==undefined)//如果value为undefine，表示只有一个参数，这个函数实现的是获取文本
	{
		if(obj.innerText)//如果为真，是IE8浏览器
		{
			return obj.innerText;
		}
		else//W3C浏览器
		{
			return obj.textContent;
		}
	}
	else//如果value不是undefined，表示要设置文本
	{
		if(obj.innerText||obj.innerText=="")//当浏览器有innerText属性时，或者当对象的内容为空字符串时，都可以给这个对象设置文本
		{	
			obj.innerText=val;
		}
		else//W3C浏览器
		{
			obj.textContent=val;
		}
	}
	
}




//兼容函数3
//功能：解决通用方式获取样式在IE和FF都可以用的函数
function getStyle(obj,attr)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[attr];
	}
	else
	{
		return getComputedStyle(obj,null)[attr];
	}
}



//兼容函数4
//万能的获取元素$(".box");类名 $("#box");ID名 $("div");标签名
function $(select,obj)
{	
	var obj=obj||document;
	if(typeof select=="string")
	{
		select=select.replace(/^\s*|\s*$/g,"");//去掉字符串前后的空格
		if(select.charAt(0)==".")
		{
			return getclass(select.slice(1),obj);
		}
		else if(select.charAt(0)=="#")
		{
			return obj.getElementById(select.slice(1));
		}
		else if(/^[a-z|1-6]{1,10}$/g.test(select))
		{
			return obj.getElementsByTagName(select);
		}
	}
	else if(typeof select=="function")//表示是一个函数
	{
		window.onload=function()
		{
			select();
		}
	}
}


//兼容函数5
//功能："a":获取元素子节点的兼容函数
//"b":获取元素+文本节点
//先获取所有的儿子，然后根据节点的类型判断，如果为1，表示是元素节点，保存到数组里，如果是3并且不为空，表示是文本节点。
function getChilds(parent,type)
{	
	var type=type||"a";
	var childs=parent.childNodes;
	var arr=[];
	for(var i=0;i<childs.length;i++)
	{	
		if(type=="a")
		{
			if(childs[i].nodeType==1)//元素
			{
				arr.push(childs[i]);
			}
		}
		else if(type=="b")
		{
			if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s*|\s*$/g,"")))
			{
				arr.push(childs[i]);
			}
		}
			
	}
	return arr;
}


//兼容函数6
//功能：获得第一个子节点
function getFirst(parent)
{
	return getChilds(parent)[0];
}


//兼容函数7
//功能：获得最后一个子节点
function getLast(parent)
{	
	var all=getChilds(parent);
	var len=all.length-1;
	return getChilds(parent)[len];
}


//兼容函数8
//功能：获得指定子节点
function getNum(parent,val)
{
	return getChilds(parent)[val];
}

// //兼容函数9
// //功能：获得下一个兄弟节点
// function getNext(obj)
// {	
// 	var a=obj.nextSibling;
// 	if(a==null)
// 		{
// 			return false;
// 		}
// 	while(a.nodeType==3||a.nodeType==8)
// 		{
// 			a=a.nextSibling;
// 			if(a==null)
// 			{
// 				return false;
// 			}
// 		}
// 		return a;			
// }


//兼容函数10
//功能：获得上一个兄弟节点
function getUp(obj)
{	
	var a=obj.previousSibling;
	if(a==null)
		{
			return false;
		}
	while(a.nodeType==3||a.nodeType==8)
		{
			a=a.previousSibling;
			if(a==null)
			{
				return false;
			}
		}
		return a;			
}


//兼容函数11
//功能：插入到某个对象之后
//插入到下一个对象之前
//重点：给对象的原型添加此方法
//原理：找到第二个参数的下一个兄弟节点，将第一个参数插入到此兄弟节点之前（插入到下一个对象之前）
//obj1要插入到obj2之后
// Object.prototype.insertAfter=function(obj1,obj2)
// {
// 	var next=getNext(obj2);
// 	if(next)
// 	{
// 		this.insertBefore(obj1,next);
// 	}
// 	else
// 	{
// 		this.appendChild(obj1);
// 	}
// }


//兼容函数12
//功能：获取滚动条与页面顶部的距离
function getScrollT()
{	
	var obj=document.documentElement.scrollTop?document.documentElement:document.body;
	var scrollT=obj.scrollTop;
	return scrollT;
}

//或者用
/*var scrollT=document.documentElement.scrollTOP||document.body.scrollTOP;
document.title=scrollT;*/




//兼容函数13
//功能：兼容火狐和IE同一元素添加多个单击事件
//obj表示给哪个对象添加;ev表示是什么事件;fun表示时间处理程序
function addEvent(obj,ev,fun)
{
	if(obj.addEventListener)
	{
		return obj.addEventListener(ev,function()
			{
				fun.call(obj);
			},false);
		//火狐的处理
	}
	else
	{
		return obj.attachEvent("on"+ev,function()
			{
				fun.call(obj);
			});
		//在IE8中this不指当前的对象，指的是window
	}
}


//兼容函数14
//功能：兼容火狐和IE同一元素删除多个单击事件
//obj表示给哪个对象删除;ev表示是什么事件;fun表示时间处理程序
function removeEvent(obj,ev,fun)
{
	if(obj.removeEventListener)
	{
		return obj.removeEventListener(ev,function()
			{
				fun.call(obj);
			},false);
		//火狐的处理
	}
	else
	{
		return obj.detachEvent("on"+ev,function()
			{
				fun.call(obj);
			});
		//在IE8中this不指当前的对象，指的是window
	}
}


//兼容函数15
//获取事件对象的兼容问题，在duogeshijian.html文件里


//兼容函数16
//获取浏览器的宽
function getCW()
{
	return document.documentElement.clientWidth;
}


//兼容函数17
//获取浏览器的高
function getCH()
{
	return document.documentElement.clientHeight;
}


//函数18
//拖拽功能
function drag(obj)
{
	var ow=obj.offsetWidth;
	var oh=obj.offsetHeight;
	var cw=getCW();
	var ch=getCH();
	window.onresize=function()
	{
		cw=getCW();
	    ch=getCH();
	}
	obj.onmousedown=function(e)
	{	
		var ev=e||window.event;
		var xx=ev.offsetX;//
		var yy=ev.offsetY;
		//阻止浏览器的默认行为
		if (ev.preventDefault)
		{
			ev.preventDefault(); //阻止默认浏览器动作(W3C)
		}
		else
		{
			ev.returnValue=false;//IE中阻止函数器默认动作的方式
		}
				
		//事件委托的思想
		document.onmousemove=function(e)
			{
				var ev=e||window.event;
				var x=ev.clientX;
				var y=ev.clientY;
				lefts=x-xx;
				tops=y-yy;
				if(lefts<=0)
				{
					lefts=0;
				}
				if(lefts>=(cw-ow))
				{
					lefts=cw-ow;
				}
				if(tops<=0)
				{
					tops=0;
				}
				if(tops>=(ch-oh))
				{
					tops=ch-oh;
				}
				obj.style.left=lefts+"px";
				obj.style.top=tops+"px";
			}
	}
	obj.onmouseup=function()
	{
		document.onmousemove=null;
	}
}


//函数19
//功能：实现天猫轮播4效果（楼层里的左右切换）
function xiaolunbo(i)
{
	var xiaobannerbox=$(".xiaobannerbox")[i];
	var yilouleftcenterzuo=$(".yilouleftcenterzuo")[i];
	var yilouleftcenteryou=$(".yilouleftcenteryou")[i];
	function moveleft()
	{
		animate(xiaobannerbox,{left:-91},600,Tween.Linear,function()
		{
			var firsts=getFirst(xiaobannerbox);
			xiaobannerbox.appendChild(firsts);
			xiaobannerbox.style.left=0+"px";
		})
	}
	function moveright()
	{
		var firsts=getFirst(xiaobannerbox);
		var lasts=getLast(xiaobannerbox);
		xiaobannerbox.insertBefore(lasts,firsts);
		xiaobannerbox.style.left=-91+"px";
		animate(xiaobannerbox,{left:0},600,Tween.Linear)
	}
	 var t=setInterval(moveright,2000);
	 yilouleftcenterzuo.onmouseover=yilouleftcenteryou.onmouseover=function()
	 {
	 	clearInterval(t);
	 }
	 yilouleftcenterzuo.onmouseout=yilouleftcenteryou.onmouseout=function()
	 {		
	 	t=setInterval(moveright,2000);
	 }
	 yilouleftcenterzuo.onclick=function()
	 {
	 	moveleft();
	 }
	  yilouleftcenteryou.onclick=function()
	 {
	 	moveright();
	 }
}


//函数20
//功能：添加滚轮事件
//obj表示哪个对象添加滚轮事件，upfun处理滚轮向上的函数，downfun是处理滚轮向下的函数
function mouseWheel(obj,upfun,downfun)
{
	if(obj.attachEvent)
	{
		obj.attachEvent("onmousewheel",scrollFn); //IE、 opera
	}
	else if(obj.addEventListener)
	{
		obj.addEventListener("mousewheel",scrollFn,false);//chrome,safari -webkit-
		obj.addEventListener("DOMMouseScroll",scrollFn,false);//firefox -moz-
	}
	function scrollFn(e)
	{
		var ev=e||window.event;
		if(ev.preventDefault)//阻止浏览器的默认行为
		{
			ev.preventDefault(); //阻止默认浏览器动作(W3C)
		}
		else
		{
			ev.returnValue=false;//IE中阻止函数器默认动作的方式
		}
		var num=ev.detail||ev.wheelDelta;
		if(num==-5||num==120)//判断滚轮向上
		{
			if(upfun)
			{
				upfun();
			}
		}
		if(num==5||num==-120)//判断滚轮向下
		{
			if(downfun)
			{
				downfun();
			}
		}
	}
}

//函数21
//hover函数
//判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
//鼠标移入移出事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 function getEvent (e) {
      return e||window.event;
 }


//函数22
//阻止事件流的功能兼容  在shijian.html文件里69行左右


//函数23
//倒计时功能
function getCha(news,now)
{
	var arr=[];
	var cha=(news.getTime()-now.getTime())/1000;//差多少秒
	var days=parseInt(cha/60/60/24);//差多少天
	arr.push(days);
	cha=cha%(60*60*24);
	var hours=parseInt(cha/60/60);//差多少小时
	arr.push(hours);
	cha=cha%(60*60);
	var fen=parseInt(cha/60);//差多少分
	arr.push(fen);
	cha=cha%(60);
	var miao=parseInt(cha);//差多少秒
	arr.push(miao);
	return arr;
}


//函数24
//功能：获取 设置对象的属性
//attr(obj,"aa")获取 attr(obj,{"aa":"cc"})设置 attr(obj,"aa","cc")设置
function attr()//setAttribute,getAttribute
{	
	var obj=arguments[0];
	if(arguments.length==2)
	{	
		if(typeof arguments[1]=="string")//判断第二个参数的类型
		{
			return obj.getAttribute(arguments[1]);
		}
		else if(typeof arguments[1]=="object")
		{
			for(var i in arguments[1])//对象的遍历用for in
			{
				if(i!="insertAfter")
				{
					obj.setAttribute(i,arguments[1][i]);//对象类型，给obj设置对应的属性，下标i表示属性名
				}
			}
		}
		
	}
	else if(arguments.length==3)
	{
		obj.setAttribute(arguments[1],arguments[2]);
	}
}



//函数25
//功能：选项卡的函数(在html文件中设置好，不是在js中创建小盒子)
function tab(obj)
{
	var title=$(".title",obj);
	var con=$(".con",obj);
	for(var i=0;i<title.length;i++)
	{	
		title[i].index=i;
		title[i].onclick=function()
		{
			for(var j=0;j<con.length;j++)
			{
				con[j].style.display="none";
			}
			con[this.index].style.display="block";
		}
	}

}


//函数26
//功能：一号店楼层里的轮播
function xiaolunbo(t,u)
{
	var haigoulileft1hezi=$(".haigoulileft1hezi")[t];
	var haigoulileft1bt=$(".haigoulileft1bt")[t];
	var lunboanniu=$("li",haigoulileft1bt);
	var liding=$("div",haigoulileft1bt);
	var xiaobannerbox=$(".xiaobannerbox")[t];
	var xiaoban=$("img",haigoulileft1hezi);
	var lunnum=1;
	var linum=0;
	animate(liding[linum],{width:32},u);
	function yidong()
	{	
		
		linum++;
		if(linum>=3)
		{
			linum=0;
		}
		if(linum>=0&&linum<3)
		{	
			for(var i=0;i<liding.length;i++)
				{
					liding[i].style.display="none";
					liding[linum].style.width="0px";
				}
			liding[linum].style.display="block";
			animate(liding[linum],{width:32},u);
		}
		if(lunnum==3)
		{
			animate(haigoulileft1hezi,{left:0},100,Tween.Linear);
			lunnum=0;
		}
		if(lunnum>=0&&lunnum<3)
		{	
			animate(haigoulileft1hezi,{left:-330*lunnum},600,Tween.Linear);
		}
		lunnum++;	
	}
	var y=setInterval(yidong,u);
	for(var i=0;i<lunboanniu.length;i++)
	{
		lunboanniu[i].index=i;
		lunboanniu[i].onmouseover=function()
		{
			clearInterval(y);
			for(var j=0;j<liding.length;j++)
			{
				liding[j].style.width="0px";
				liding[j].style.display="none";
			}
			animate(haigoulileft1hezi,{left:-330*this.index},600,Tween.Linear);
			liding[this.index].style.display="block";
			liding[this.index].style.width="32px";
		}
		lunboanniu[i].onmouseout=function()
		{	
			liding[this.index].style.width="32px";
			//animate(liding[this.index],{width:32},u);
			lunnum=this.index+1;
			linum=this.index;
			//animate(liding[this.index],{width:32},u);
			y=setInterval(yidong,u);
		}
		/*xiaobannerbox.onmouseover=function()
		{
			clearInterval(y);
			liding[this.index].style.width="32px";
		}*/
		
		/*liding[i].onmouseover=function()
		{
			clearInterval(y);
		}
		liding[i].onmouseout=function()
		{
			y=setInterval(yidong,4000);
			linum=this.index;
		}*/
	}
	// for(var i=0;i<xiaoban.length;i++)//滑上图片停止不了时间函数
	// {
	// 	xiaoban[i].onmouseover=function()
	// 	{
	// 		clearInterval(y);
	// 		liding[i].style.width="32px";
	// 	}
	// 	xiaoban[i].onmouseout=function()
	// 	{
	// 		y=setInterval(yidong,4000);
	// 	}
	// }
}

//函数27
//功能：去除字符串中的空值，两边的或所有的或左边的或右边的
//function trim(str,type)
//{	
//	var type=type||"side";
//	if(type=="side")
//	{
//		return str.replace(/^\s*|\s*$/g,"");
//	}
//	if(type=="all")
//	{
//		return str.replace(/\s*/g),"");
//	}
//	if(type=="left")
//	{
//		return str.replace(/^\s*/g,"");
//	}
//	if(type=="right")
//	{
//		return str.replace(/\s*$/g,"");
//	}
//}




//函数28
//创建ajax对象
/*ajax({
   url:"xml.xml";//地址
   type:"post";//发送类型
   asynch:true/false;//是否异步
   dataType://服务器返回给前台的数据类型
   date://从前台传给服务器的数据
   success://成功以后要做的事情(函数)
   error://失败要做的事情(函数)
})*/
function ajax(obj){
	var url=obj.url;
	if(!url){
		return false;
	}

	var type=obj.type||"get";

	var asynch=obj.asynch==undefined?true:obj.asynch;

	var dataType=obj.dataType||"text";

	var data=obj.data||"";
	/*[{"name":"zhangsan","age":12,"sex":"man"}]
	"name"="zhangsan"&"age"=12&"sex"="man"&*/
	if(data){
		var str="";
		for(var i in data){
	       str+=i+"="+data[i]+"&";
		}
	    data=str.slice(0,-1);
	}

	var success=obj.success;
	if(!success){
		return false;
	}

	var error=obj.error||function(){
		alert("错误");
	}


	var obj=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Microsoft.XMLHTTP');
	obj.onreadystatechange=function(){
		if(obj.readyState==4){
			if(obj.status==200){
				if(dataType=="text"){
					success(obj.responseText);
				}else if(dataType=="xml"){
					success(obj.responseXML);
				}else if(dataType=="json"){
					var json=eval(obj.responseText);
					success(json);
				}else{
					error();
				}
			}
		}
	}


	if(type=="get"){
		obj.open(type,url+"?"+data,asynch);
		obj.send();
	}else if(type=="post"){
		obj.open(type,url,asynch);
		obj.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        obj.send(data);
	}
}
