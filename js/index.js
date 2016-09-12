$(function()
{
	//购物车
	var mainnavrightgouwu=$(".mainnav-rightgouwu")[0];
	var mainnavrightgouwutu1=$(".mainnavrightgouwutu1")[0];
	var mainnavrightgouwutu2=$(".mainnavrightgouwutu2")[0];
	var mainnavrightgouwutuo=$(".mainnavrightgouwutuo")[0];
	hover(mainnavrightgouwu,function()
	{
		mainnavrightgouwu.style.cssText="background-color:white;color:red;";
		mainnavrightgouwutu1.style.display="none";
		mainnavrightgouwutu2.style.display="block";
		animate(mainnavrightgouwutuo,{height:100},100);
	},function()
	{
		mainnavrightgouwu.style.cssText="background-color:'#424242';color:'#b0b0b0';";
		mainnavrightgouwutu1.style.display="block";
		mainnavrightgouwutu2.style.display="none";
		animate(mainnavrightgouwutuo,{height:0},100);
	})
	//菜单下拉
	var secondnavcenterulli=$(".secondnav-center-ul-li");
	var caidantuo1=$(".caidantuo1");
	for(var i=0;i<(secondnavcenterulli.length-2);i++)
	{	
		secondnavcenterulli[i].index=i;
		hover(secondnavcenterulli[i],function()
		{	
			animate(caidantuo1[this.index],{height:230},200);
		},function()
		{
			animate(caidantuo1[this.index],{height:0},200);
		})
	}
	//搜索框
	var secondnavright=$(".secondnav-right")[0];
	var secondnavrighttext=$(".secondnav-right-text")[0];
	var secondnavrightimg=$(".secondnav-right-img")[0];
	var secondnavrightword=$(".secondnav-right-word")[0];
	var secondnavrightwords=$(".secondnav-right-words")[0];
	var sousuotuozhan=$(".sousuotuozhan")[0];
	var flag=true;
	hover(secondnavright,function()
	{	
		if(flag)
		{
			secondnavrighttext.style.borderColor="#B2B2B2";
			secondnavrightimg.style.borderColor="#B2B2B2";
		}
		
	},function()
	{	
		if(flag)
		{secondnavrighttext.style.borderColor="#e0e0e0";
		secondnavrightimg.style.borderColor="#e0e0e0";}
		
	})
	secondnavrighttext.onfocus=function()
	{
		secondnavrightword.style.display="none";
		secondnavrightwords.style.display="none";
		secondnavrighttext.style.borderColor="#FF6700";
		secondnavrightimg.style.borderColor="#FF6700";
		sousuotuozhan.style.display="block";
		flag=false;
	}
	secondnavrighttext.onblur=function()
	{
		secondnavrightword.style.display="block";
		secondnavrightwords.style.display="block";
		secondnavrighttext.style.borderColor="#e0e0e0";
		secondnavrightimg.style.borderColor="#e0e0e0";
		sousuotuozhan.style.display="none";
		flag=true;
	}
	//搜索框展开
	var sousuotuozhanli=$(".sousuotuozhanli");
	for(var i=0;i<sousuotuozhanli.length;i++)
	{	
		sousuotuozhanli[i].index=i;
		hover(sousuotuozhanli[i],function()
		{
			sousuotuozhanli[this.index].style.backgroundColor="#FAFAFA"
		},function()
		{
			sousuotuozhanli[this.index].style.backgroundColor="#fff"
		})
	}
	//banner侧导航
	/*var bannerleftli=$(".banner-left-li");
	var bannercaituo=$(".bannercaituo");
	var bannercaituozuolip=$(".bannercaituozuolip");
	var mimi=$(".mimi");
	var xuanxuangou=$(".xuanxuangou");*/
	/*for(var i=0;i<bannerleftli.length;i++)
	{	
		bannerleftli[i].index=i;
		hover(bannerleftli[i],function()
		{
			bannercaituo[this.index].style.display="block";
		},function()
		{
			bannercaituo[this.index].style.display="none";
		})
	}*/
		
	/*for(var i=0;i<bannercaituozuolip.length;i++)//字变颜色
	{
		bannercaituozuolip[i].index=i;
		hover(bannercaituozuolip[i],function()
		{
			mimi[this.index].style.color="#FF6700";
		},function()
		{
			mimi[this.index].style.color="#302E32";
		})
	}*/
	/*for(var i=0;i<xuanxuangou.length;i++)//选购盒子变颜色
	{
		xuanxuangou[i].index=i;
		hover(xuanxuangou[i],function()
		{
			xuanxuangou[this.index].style.backgroundColor="#FF6700";
			xuanxuangou[this.index].style.color="#fff";
		},function()
		{
			xuanxuangou[this.index].style.backgroundColor="#fff";
			xuanxuangou[this.index].style.color="#EE927B";
		})
	}*/
	//轮播
	// var bannertu=$(".bannerdatu");
	// var bannerleftxiao1=$(".banner-left-xiao1");
	// var bannerjiantouleft=$(".banner-jiantou-left")[0];
	// var bannerjiantouright=$(".banner-jiantou-right")[0];
	// var num=1;
	
	// function lunbo()
	// {	
	// 	if(num>4)
	// 	{
	// 		num=0;
	// 	}
	// 	if(num>=0&&num<=4)
	// 	{
	// 		for(var i=0;i<bannertu.length;i++)
	// 		{
	// 			animate(bannertu[i],{opacity:0},300);
	// 			bannerleftxiao1[i].style.backgroundColor="#759288";
	// 			bannerleftxiao1[i].style.borderColor="#9fb3ad";
	// 		}
	// 		animate(bannertu[num],{opacity:1},300);
	// 		bannerleftxiao1[num].style.backgroundColor="white";
	// 		bannerleftxiao1[num].style.borderColor="#7e8f8a";
	// 	}
	// 	num++;	
	// }
	// var t=setInterval(lunbo,3000);
	// bannerjiantouleft.onmouseover=function()
	// {	
	// 	clearInterval(t);
	// 	bannerjiantouleft.style.cssText="background-color:rgba(0,0,0,0.5);";
	// }
	// bannerjiantouright.onmouseover=function()
	// {	
	// 	clearInterval(t);
	// 	bannerjiantouright.style.cssText="background-color:rgba(0,0,0,0.5);";
	// }
	// bannerjiantouleft.onmouseout=function()
	// {	
	// 	t=setInterval(lunbo,3000);
	// 	bannerjiantouleft.style.cssText="background-color:rgba(0,0,0,0)";
	// }
	// bannerjiantouright.onmouseout=function()
	// {	
	// 	t=setInterval(lunbo,3000);
	// 	bannerjiantouright.style.cssText="background-color:rgba(0,0,0,0)";
	// }
	// for(var i=0;i<bannertu.length;i++)
	// {
	// 	hover(bannertu[i],function()
	// 	{
	// 		clearInterval(t);
	// 	},function()
	// 	{
	// 		t=setInterval(lunbo,3000);
	// 	})
	// }
	// for(var i=0;i<bannerleftxiao1.length;i++)
	// {
	// 	bannerleftxiao1[i].index=i;
	// 	hover(bannerleftxiao1[i],function()
	// 	{
	// 		//bannerleftxiao1[this.index].style.backgroundColor="white";
	// 		//bannerleftxiao1[this.index].style.borderColor="#7e8f8a";
	// 	},function()
	// 	{
	// 		//bannerleftxiao1[this.index].style.backgroundColor="#759288";
	// 		//bannerleftxiao1[this.index].style.borderColor="#9fb3ad";
	// 		t=setInterval(lunbo,3000);
	// 		num=this.index+1;
	// 	})
	// 	bannerleftxiao1[i].onclick=function()
	// 	{
	// 		clearInterval(t);
	// 		for(var j=0;j<bannertu.length;j++)
	// 		{	
	// 			bannerleftxiao1[j].style.backgroundColor="#759288";
	// 			bannerleftxiao1[j].style.borderColor="#9fb3ad";
	// 			animate(bannertu[j],{opacity:0},300);
	// 		}
	// 		bannerleftxiao1[this.index].style.backgroundColor="white";
	// 		bannerleftxiao1[this.index].style.borderColor="#7e8f8a";
	// 		animate(bannertu[this.index],{opacity:1},300);
	// 	}
	// }
	// bannerjiantouright.onclick=function()
	// {
	// 	lunbo()
	// }

})
//所有的滑上滑出都有快速滑动的时候会闪动的问题***************************************************

jquery(function()
{	
	//banner轮播      还差滑上按钮变色，但当前显示的图对应的按钮不变化
	var imgs=jquery(".bannerdatu");
	var btn=jquery(".banner-left-xiao1");
	var num=0;

	function demo(type)
	{	
		if(type=="r")
		{
			num++;
			if(num>=imgs.length)
			{
				num=0;
			}
		}
		else if(type=="l")
		{
			num--;
			if(num<=-1)
			{
				num=imgs.length-1;
			}
		}
		imgs.hide();
		imgs.eq(num).fadeIn();
		btn.css({background:"#ccc"});
		btn.eq(num).css({background:"white"});		
	}
	var t=setInterval(function(){demo("r")},3000)
	jquery(".bannerdatu,.banner-jiantou-left,.banner-jiantou-right,.banner-left-xiao1").hover(function()
	{
		clearInterval(t);
	},function()
	{
		t=setInterval(function(){demo("r")},3000)
	})
	jquery(".banner-jiantou-left").click(function()
	{
		demo("l");
	})
	jquery(".banner-jiantou-right").click(function()
	{
		demo("r");
	})
	jquery(".banner-left-xiao1").click(function()
	{
		var noww=jquery(this).index();
		jquery(".banner-left-xiao1").css({background:"#759288"});
		jquery(this).css({background:"white"});
		jquery(".bannerdatu").hide();
		jquery(".bannerdatu").eq(noww).fadeIn();
		index=noww;
	})
	jquery(".banner-left-xiao1").hover(function()
	{
		jquery(this).css({background:"white"});
	},function()
	{
		jquery(this).css({background:"#759288"});
	})
	//单品明星   
	var danpinu=jquery(".starlistthing-ul");
	var dannum=0;
	var danzuo=jquery(".starword-jiantou1");
	function danpinmove()
	{	dannum++;
		if(dannum>1)
		{
			dannum=0;
		}
		danpinu.animate({"left":-1226*dannum});
		if(dannum==0)
		{
			danzuo.eq(1).css({"background-image":"url(images/jiantou6.jpg)","cursor":"pointer"});
			danzuo.eq(0).css({"background-image":"url(images/jiantou4.jpg)","cursor":"default"});
		}
		if(dannum==1)
		{
			danzuo.eq(0).css({"background-image":"url(images/jiantou1.png)","cursor":"pointer"});
			danzuo.eq(1).css({"background-image":"url(images/jiantou2.png)","cursor":"default"});
		}
	}
	var dant=setInterval(danpinmove,5000)
	jquery(".starword-jiantou").hover(function()//还差滑上箭头变颜色
	{
		clearInterval(dant);
	},function()
	{
		dant=setInterval(danpinmove,5000)
	})
	danzuo.eq(0).click(function()
	{	
		danzuo.eq(1).css({"background-image":"url(images/jiantou6.jpg)","cursor":"pointer"});
		danzuo.eq(0).css({"background-image":"url(images/jiantou4.jpg)","cursor":"default"});
		danpinu.animate({left:0})
		dannum=0;
	})
	danzuo.eq(1).click(function()
	{	
		danzuo.eq(0).css({"background-image":"url(images/jiantou1.png)","cursor":"pointer"});
		danzuo.eq(1).css({"background-image":"url(images/jiantou2.png)","cursor":"default"});
		danpinu.animate({left:-1226})
		dannum=1;
	})
	//滑上评价出现
	var pingjia=jquery(".dapeilist-right-top-li");
	var pingjiajuti=jquery(".jusebox");
	pingjia.hover(function()
	{	//jquery(this).stop();
		jquery(this).find(".jusebox").slideDown(200);
	},function()
	{	//jquery(this).stop();
		jquery(this).find(".jusebox").slideUp(200);
	})
	//搭配切换
	var dapeitimu=jquery(".dapeitimu");
	var dapeineirong=jquery(".dapeineirong");
	dapeitimu.hover(function()
	{	var now=jquery(this).index();
		dapeitimu.css({"border-bottom":"2px solid #F5f5f5","color":"#424242"});
		jquery(this).css({"border-bottom":"2px solid #FF6700","color":"#FF6700"});
		dapeineirong.hide();
		dapeineirong.eq(now).show();
	},function(){})
	//配件切换
	var dapeitimu1=jquery(".dapeitimu1");
	var dapeineirong1=jquery(".dapeineirong1");
	dapeitimu1.hover(function()
	{	var now=jquery(this).index();
		dapeitimu1.css({"border-bottom":"2px solid #F5f5f5","color":"#424242"});
		jquery(this).css({"border-bottom":"2px solid #FF6700","color":"#FF6700"});
		dapeineirong1.hide();
		dapeineirong1.eq(now).show();
	},function(){})
	//周边切换
	var dapeitimu2=jquery(".dapeitimu2");
	var dapeineirong2=jquery(".dapeineirong2");
	dapeitimu2.hover(function()
	{	var now=jquery(this).index();
		dapeitimu2.css({"border-bottom":"2px solid #F5f5f5","color":"#424242"});
		jquery(this).css({"border-bottom":"2px solid #FF6700","color":"#FF6700"});
		dapeineirong2.hide();
		dapeineirong2.eq(now).show();
	},function(){})
	//为你推荐
	var tuijianu=jquery(".tuijianlist-ul");
	var tuinum=0;
	var tuinum2=3;
	var tuizuo=jquery(".tuijiandejian");
	var flag=false;
	tuizuo.eq(0).click(function()
	{	tuinum2--;
		if(tuinum2<=0)
		{
			tuinum2=0;
			tuijianu.animate({left:(-1226*tuinum2)});
			tuizuo.eq(0).css({"background-image":"url(images/jiantou4.jpg)","cursor":"default"});
		}
		tuizuo.eq(1).css({"background-image":"url(images/jiantou6.jpg)","cursor":"pointer"});
		if(flag)
		{
			tuijianu.animate({left:(-1226*tuinum2)});
		}
		tuinum=tuinum2;
	})
	tuizuo.eq(1).click(function()
	{	tuinum++;
		if(tuinum>=3)
		{	tuinum=3;
			tuijianu.animate({left:(-1226*tuinum)});
			tuizuo.eq(1).css({"background-image":"url(images/jiantou2.png)","cursor":"default"});
		}
		tuizuo.eq(0).css({"background-image":"url(images/jiantou1.png)","cursor":"pointer"});
		tuijianu.animate({left:(-1226*tuinum)});
		tuinum2=tuinum;
		flag=true;
	})
	//内容 **********************************************************************这一部分的代码太长了，怎么精简一些？？？？？？？？？？？？？？？？
	var neirongkuai=jquery(".neirongdabox");
	var neirongzuo=jquery(".neirong-ul-li-zuojiantou");
	var neirongyou=jquery(".neirong-ul-li-youjiantou");
	var neirongjiachangbox=jquery(".neirongjiachangbox");
	var neinum=0;
	var neinum2=3;
	var neinum3=0;
	var neinum4=3;
	var neinum5=0;
	var neinum6=3;
	var neinum7=0;
	var neinum8=3;
	var flag=false;
	var flag1=false;
	var flag2=false;
	var flag3=false;
	neirongkuai.hover(function()
	{	
		jquery(this).find(".neirong-ul-li-zuojiantou").fadeIn();
		jquery(this).find(".neirong-ul-li-youjiantou").fadeIn();
	},function()
	{	//jquery(this).stop();
		jquery(this).find(".neirong-ul-li-zuojiantou").fadeOut();
		jquery(this).find(".neirong-ul-li-youjiantou").fadeOut();
	})
	/*neirongyou.click(function()
	{	neinum++;
		if(neinum>=3)
		{
			neinum=3;
			jquery(this).css("cursor","default");
		}
		jquery(this).offsetParent().find(".neirongjiachangbox").animate({left:-296*neinum});***************************这样写neinum的值会互相影响。有问题
		jquery(this).offsetParent().find(".neirong-ul-li-zuojiantou").css("cursor","pointer");
		jquery(this).offsetParent().find(".neirongdeanniu").css({"background":"#b0b0b0","margin-top":"12px","border-width":0});
		jquery(this).offsetParent().find(".neirongdeanniu").eq(neinum).css({"background":"white","margin-top":"10px","border":"2px solid #ff6904"})
							
							
							
		neinum2=neinum;
		flag=true;
	})
	neirongzuo.click(function()
	{
		neinum2--;
		if(neinum2<=0)
		{
			neinum2=0;
			neirongzuo.eq(0).css("cursor","default");
		}
		if(flag)
		{
			jquery(this).offsetParent().find(".neirongjiachangbox").animate({left:-296*neinum2});
			jquery(this).offsetParent().find(".neirong-ul-li-youjiantou").css("cursor","pointer");
			jquery(this).offsetParent().find(".neirongdeanniu").css({"background":"#b0b0b0","margin-top":"12px","border-width":0});
			jquery(this).offsetParent().find(".neirongdeanniu").eq(neinum2).css({"background":"white","margin-top":"10px","border":"2px solid #ff6904"})
			neinum=neinum2;
		}
		
	})*/
	neirongyou.eq(0).click(function()//**********************************一个一个写太冗长了，怎么能让num和flag的值不互相影响？？？？？封成函数添加，不要一个一个加********************
	{	neinum++;
		if(neinum>=3)
		{
			neinum=3;
			jquery(this).css("cursor","default");
		}
		neirongjiachangbox.eq(0).animate({left:-296*neinum});
		neirongzuo.eq(0).css("cursor","pointer");
		neirongkuai.eq(0).find(".neirongdeanniu").css({"background":"#b0b0b0","margin-top":"12px","border-width":0});
		neirongkuai.eq(0).find(".neirongdeanniu").eq(neinum).css({"background":"white","margin-top":"10px","border":"2px solid #ff6904"});					
		neinum2=neinum;
		flag=true;
	})
	neirongzuo.eq(0).click(function()
	{
		neinum2--;
		if(neinum2<=0)
		{
			neinum2=0;
			neirongzuo.eq(0).css("cursor","default");
		}
		if(flag)
		{
			neirongjiachangbox.eq(0).animate({left:-296*neinum2});
			neirongyou.eq(0).css("cursor","pointer");
			neirongkuai.eq(0).find(".neirongdeanniu").css({"background":"#b0b0b0","margin-top":"12px","border-width":0});
			neirongkuai.eq(0).find(".neirongdeanniu").eq(neinum2).css({"background":"white","margin-top":"10px","border":"2px solid #ff6904"})
			neinum=neinum2;
		}
	})
	neirongyou.eq(1).click(function()
	{	neinum3++;
		if(neinum3>=3)
		{
			neinum3=3;
			jquery(this).css("cursor","default");
		}
		neirongjiachangbox.eq(1).animate({left:-296*neinum3});
		neirongzuo.eq(1).css("cursor","pointer");
		neirongkuai.eq(1).find(".neirongdeanniu").css({"background":"#b0b0b0","margin-top":"12px","border-width":0});
		neirongkuai.eq(1).find(".neirongdeanniu").eq(neinum3).css({"background":"white","margin-top":"10px","border":"2px solid #ff6904"})
							
							
							
		neinum4=neinum3;
		flag1=true;
	})
	neirongzuo.eq(1).click(function()
	{
		neinum4--;
		if(neinum4<=0)
		{
			neinum4=0;
			neirongzuo.eq(1).css("cursor","default");
		}
		if(flag1)
		{
			neirongjiachangbox.eq(1).animate({left:-296*neinum4});
			neirongyou.eq(1).css("cursor","pointer");
			neirongkuai.eq(1).find(".neirongdeanniu").css({"background":"#b0b0b0","margin-top":"12px","border-width":0});
			neirongkuai.eq(1).find(".neirongdeanniu").eq(neinum4).css({"background":"white","margin-top":"10px","border":"2px solid #ff6904"})
			neinum3=neinum4;
		}
		
	})
	neirongyou.eq(2).click(function()
	{	neinum5++;
		if(neinum5>=3)
		{
			neinum5=3;
			jquery(this).css("cursor","default");
		}
		neirongjiachangbox.eq(2).animate({left:-296*neinum5});
		neirongzuo.eq(2).css("cursor","pointer");
		neirongkuai.eq(2).find(".neirongdeanniu").css({"background":"#b0b0b0","margin-top":"12px","border-width":0});
		neirongkuai.eq(2).find(".neirongdeanniu").eq(neinum5).css({"background":"white","margin-top":"10px","border":"2px solid #ff6904"})
							
							
							
		neinum6=neinum5;
		flag2=true;
	})
	neirongzuo.eq(2).click(function()
	{
		neinum6--;
		if(neinum6<=0)
		{
			neinum6=0;
			neirongzuo.eq(2).css("cursor","default");
		}
		if(flag2)
		{
			neirongjiachangbox.eq(2).animate({left:-296*neinum6});
			neirongyou.eq(2).css("cursor","pointer");
			neirongkuai.eq(2).find(".neirongdeanniu").css({"background":"#b0b0b0","margin-top":"12px","border-width":0});
			neirongkuai.eq(2).find(".neirongdeanniu").eq(neinum6).css({"background":"white","margin-top":"10px","border":"2px solid #ff6904"})
			neinum5=neinum6;
		}
		
	})
	neirongyou.eq(3).click(function()
	{	neinum7++;
		if(neinum7>=3)
		{
			neinum7=3;
			jquery(this).css("cursor","default");
		}
		neirongjiachangbox.eq(3).animate({left:-296*neinum7});
		neirongzuo.eq(3).css("cursor","pointer");
		neirongkuai.eq(3).find(".neirongdeanniu").css({"background":"#b0b0b0","margin-top":"12px","border-width":0});
		neirongkuai.eq(3).find(".neirongdeanniu").eq(neinum7).css({"background":"white","margin-top":"10px","border":"2px solid #ff6904"})
							
							
							
		neinum8=neinum7;
		flag3=true;
	})
	neirongzuo.eq(3).click(function()
	{
		neinum8--;
		if(neinum8<=0)
		{
			neinum8=0;
			neirongzuo.eq(3).css("cursor","default");
		}
		if(flag3)
		{
			neirongjiachangbox.eq(3).animate({left:-296*neinum8});
			neirongyou.eq(3).css("cursor","pointer");
			neirongkuai.eq(3).find(".neirongdeanniu").css({"background":"#b0b0b0","margin-top":"12px","border-width":0});
			neirongkuai.eq(3).find(".neirongdeanniu").eq(neinum8).css({"background":"white","margin-top":"10px","border":"2px solid #ff6904"})
			neinum7=neinum8;
		}
		
	})
	//****************************************************************
	//单击按钮跳转不同的图          //还差左右按钮变手型和默认样式的调整    封成函数添加，不要一个一个加********************
	var anniu1=jquery(".neirongdabox").eq(0).find(".neirongdeanniu");
	anniu1.click(function()
	{	var now=jquery(this).index(".neirongdeanniu");
		jquery(this).parentsUntil(".neirongdabox").find(".neirongjiachangbox").animate({left:-296*now});
		anniu1.css({"background":"#b0b0b0","margin-top":"12px","border-width":0});
		anniu1.eq(now).css({"background":"white","margin-top":"10px","border":"2px solid #ff6904"});
		neinum=now;
		neinum2=now;
		flag=true;
	})
	var anniu2=jquery(".neirongdabox").eq(1).find(".neirongdeanniu");
	anniu2.click(function()
	{	var now=jquery(this).index(".neirongdeanniu1");
		jquery(this).parentsUntil(".neirongdabox").find(".neirongjiachangbox").animate({left:-296*now});
		anniu2.css({"background":"#b0b0b0","margin-top":"12px","border-width":0});
		anniu2.eq(now).css({"background":"white","margin-top":"10px","border":"2px solid #ff6904"});
		neinum3=now;
		neinum4=now;
		flag1=true;
	})
	var anniu3=jquery(".neirongdabox").eq(2).find(".neirongdeanniu");
	anniu3.click(function()
	{	var now=jquery(this).index(".neirongdeanniu2");
		jquery(this).parentsUntil(".neirongdabox").find(".neirongjiachangbox").animate({left:-296*now});
		anniu3.css({"background":"#b0b0b0","margin-top":"12px","border-width":0});
		anniu3.eq(now).css({"background":"white","margin-top":"10px","border":"2px solid #ff6904"});
		neinum5=now;
		neinum6=now;
		flag2=true;
	})
	var anniu4=jquery(".neirongdabox").eq(3).find(".neirongdeanniu");
	anniu4.click(function()
	{	var now=jquery(this).index(".neirongdeanniu3");
		jquery(this).parentsUntil(".neirongdabox").find(".neirongjiachangbox").animate({left:-296*now});
		anniu4.css({"background":"#b0b0b0","margin-top":"12px","border-width":0});
		anniu4.eq(now).css({"background":"white","margin-top":"10px","border":"2px solid #ff6904"});
		neinum7=now;
		neinum8=now;
		flag3=true;
	})
 //视频
 var videotu=jquery(".videolist-ul-li-ul-li1");
 videotu.hover(function()
 {
 	jquery(this).find(".videolist-ul-li-ul-li1-dingwei").css("background-image","url(images/shipinbofang2.png)")
 },function()
 {
 	jquery(this).find(".videolist-ul-li-ul-li1-dingwei").css("background-image","url(images/shipinbofang1.png)")
 })

//电信专场   图片没有换   封成函数换图片****************************************
var dianxin=jquery(".one");
dianxin.hover(function()
{
	jquery(this).find("div").css("color","white");
},function()
{
	jquery(this).find("div").css("color","#ccc");
})
//侧导航
var cedaohangli=jquery(".banner-left-li");
cedaohangli.hover(function()
{
	jquery(this).find(".bannercaituo").show();
},function()
{
	jquery(this).find(".bannercaituo").hide();
})
//侧导航字变颜色
var zidebox=jquery(".bannercaituozuolip");
zidebox.hover(function()
{
	jquery(this).find(".mimi").css("color","#FF6700")
},function()
{
	jquery(this).find(".mimi").css("color","#302E32")
})
var xuangoubox=jquery(".xuanxuangou");
xuangoubox.hover(function()
{
	jquery(this).css({"background-color":"#FF6700","color":"#fff"})
},function()
{
	jquery(this).css({"background-color":"#fff","color":"#FF6700"})
})






	
})

