jQuery.fn.extend({
	mouseWheel:function(upfun,downfun)
	{
		this.each(function(index,obj){
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
					{	//upfun();
						upfun.call(obj);//
					}
				}
				if(num==5||num==-120)//判断滚轮向下
				{
					if(downfun)
					{	//downfun();
						downfun.call(obj);//
					}
				}
			}
		})
		return this;
	}
})