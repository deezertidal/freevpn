// ==UserScript==
// @name              解锁B站大会员番剧、B站视频解析下载；全网VIP视频免费破解去广告；全网音乐直接下载；油管、Facebook等国外视频解析下载；网盘搜索引擎破解无限下载等
// @namespace         super_video_helper_cat
// @version           4.0.7
// @description       【❤️ 视频解析，体会拥有VIP的感觉❤️，适配PC+移动 】功能有(可选择性打开)：1、B站使用助手：解锁B站大会员番剧、视频解析下载(可多P下载)、浏览记录等；2、知乎使用助手：内容种类标识、问答显示优化、视频下载等；3、全网VIP视频解析：爱奇艺、腾讯、优酷、芒果等视频免费破解(支持自定义解析接口)；4、全网VIP音乐解析：网易云音乐、QQ音乐、酷狗、荔枝FM、喜马拉雅等免客户端下载；5、油管、Facebook等国外视频解析下载；6、网盘搜索引擎(来搜一下:laisoyixia.com, 小猪快盘:xiaozhukuaipan.com)破解无限下载；7、优惠券查询等；8、搜索引擎导航【脚本长期维护更新，完全免费，无广告】
// @author            爱画画的猫,小艾特
// @icon              data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACS0lEQVRYR8WXz2oTURTGv3MnpqhNKy1UWmxRTGdaiLSQRKkKIoK4FVrRPoHu7BMYn0B3+gQquuiuiC6kaFVsAhGEZkKqG/+Vrtp0YWsyR27KlEwz0xnnT3LgwjB37vl+97tzz9whdDiow/pwBCjofN0AJohwKQgkMxYF8Dmt0bxdnhaAQoWTXMczENJBhFvGMgqk4GY6SZXmPgvAmy/cnYijGqrwvmTVHSQup2jLvG0ByJf5EYDbUQIAeJxR6U4LQHGV1VodesTijfQxBdrkaSrL6z0Hlst8i4An7QBgYDar0lMrgM45ItxrCwDjflajnC+AtR8Gvn8zGpz9xwVOjor/Zma/ANt/GIsLNWxt8p7o4IiAmlLQP+C9pvkG+FoyUPxYs52xhFDPKIh3uRviG2ClWIdsTpHoJYymFNdliQzABBsaEZg4p+DwUftliRxAggwOC0xdidma1RaAI92Ea9OHOgcwPqlANruI1AElhsa2dBKXQJEBnDglGlvxWN/BNcE3gKyCS69b64AUlMISwEv4BpDJ3778i/Xfu5XQtFtaLq+9RiCA6gZj/dcuQN8Audod6kvodYZuz9k7UOK7JPDAbXAY/WxgLjtGDy2f408VPi8MLIUh4JbDELhwNknvLQDyQNoTh87AkFuCIP0E/NzcgWYeTC0bdrkNp6Lm9bc4YM4qr/NzEGaCzNJxLONFRqMbzf22JSu/wlcphhwzpsIAIcIHriGXGadX+/MdWDPflTjRxcH+kLYJhYtj5Piz4/0gF4YVNjk6DvAPDb0aMEr8/nEAAAAASUVORK5CYII=
// @include           *://*.youku.com/v_*
// @include           *://*.iqiyi.com/v_*
// @include           *://*.iqiyi.com/w_*
// @include           *://*.iqiyi.com/a_*
// @include           *://*.le.com/ptv/vplay/*
// @include           *://v.qq.com/x/cover/*
// @include           *://v.qq.com/x/page/*
// @include           *://v.qq.com/tv/*
// @include           *://*.tudou.com/listplay/*
// @include           *://*.tudou.com/albumplay/*
// @include           *://*.tudou.com/programs/view/*
// @include           *://*.mgtv.com/b/*
// @include           *://film.sohu.com/album/*
// @include           *://tv.sohu.com/v/*
// @include           *://*.baofeng.com/play/*
// @include           *://vip.pptv.com/show/*
// @include           *://v.pptv.com/show/*
// @include           *://www.le.com/ptv/vplay/*
// @include           *://www.wasu.cn/Play/show/*
// @include           *://*.1905.com/video/*
// @include           *://*.1905.com/play/*
// @include           *://*.1905.com/*/play/*
// @include           *://www.miguvideo.com/mgs/*
//---------------------------------------------------
// @include           *://m.v.qq.com/x/cover/*
// @include           *://m.v.qq.com/x/page/*
// @include           *://m.v.qq.com/*
// @include           *://m.iqiyi.com/v_*
// @include           *://m.iqiyi.com/w_*
// @include           *://m.iqiyi.com/a_*
// @include           *://m.youku.com/alipay_video/*
// @include           *://m.youku.com/video/id_*
// @include           *://m.mgtv.com/b/*
// @include           *://m.tv.sohu.com/v/*
// @include           *://m.film.sohu.com/album/*
// @include           *://m.le.com/ptv/vplay/*
// @include           *://m.pptv.com/show/*
// @include           *://m.acfun.cn/v/*
// @include           *://m.bilibili.com/video/*
// @include           *://m.bilibili.com/anime/*
// @include           *://m.bilibili.com/bangumi/play/*
// @include           *://m.wasu.cn/Play/show/*
//---------------------------------------------------
// @include           *://www.youtube.com
// @include           *://www.youtube.com/
// @include           *://www.youtube.com/watch*
// @include           *://www.facebook.com/*
// @include           *://yt1s.com/facebook-downloader
//---------------------------------------------------
// @include      	  *music.163.com*
// @include           *://y.qq.com*
// @include           *://www.kugou.com*
// @include           *://www.kuwo.cn*
// @include           *://www.lizhi.fm*
// @include           *://*.ximalaya.com*
// @include           *://music.migu.cn*
//---------------------------------------------------
// @include           *://*.taobao.com/*
// @include      	  *://*detail.tmall.com/*
// @include      	  *://*detail.tmall.hk/*
// @include           *://*item.jd.com/*
// @include           *://item.yiyaojd.com/*
// @include           *://npcitem.jd.hk/*
// @include           *://www.laisoyixia.com/download/detail**
// @include           *://www.xiaozhukuaipan.com/download/**
//----------------------------------------------------
// @include           *://www.baidu.com/*
// @include           *://www.so.com/s*
// @include           *://www.sogou.com/web*
// @include           *://www.sogou.com/sogou*
// @include           *://cn.bing.com/search*
// @include           *://www.bing.com/search*
// @include           *://www4.bing.com/search*
// @include           *://so.toutiao.com/search*
// @include           *://www.google.com/search*
//-------------------------------------------------------
// @include	   	      *://www.bilibili.com/**
// @include           *://search.bilibili.com/**
// @include           *://space.bilibili.com/**
// @include      	  *://*.zhihu.com/*
// @require           https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.2.1/jquery.min.js
// @connect			  tt.shuqiandiqiu.com
// @connect           api.bilibili.com
// @connect           api.staticj.top
// @connect           cdn.jsdelivr.net
// @grant             unsafeWindow
// @grant             GM_openInTab
// @grant             GM.openInTab
// @grant             GM_getValue
// @grant             GM.getValue
// @grant             GM_setValue
// @grant             GM.setValue
// @grant             GM_xmlhttpRequest
// @grant             GM.xmlHttpRequest
// @grant             GM_registerMenuCommand
// @license           AGPL License
// @charset		      UTF-8
// @antifeature  	  referral-link 【此提示为GreasyFork代码规范要求含有查券功能的脚本必须添加，实际使用无任何强制跳转，代码可查，请知悉】
// @original-author   橘子爱哭
// @original-license  AGPL License
// @original-script   https://greasyfork.org/zh-CN/scripts/390952
// @run-at            document-idle
// ==/UserScript==

(function () {
	'use strict';
	
	//共有方法，全局共享
	function commonFunction(){
		this.GMgetValue = function (name, value=null) {
			let storageValue = value;
			if (typeof GM_getValue === "function") {
				storageValue = GM_getValue(name, value);
			} else if(typeof GM.setValue === "function"){
				storageValue = GM.getValue(name, value);
			}else{
				var arr = window.localStorage.getItem(name);
				if(arr != null){
					storageValue = arr
				}
			}
			return storageValue;
		};
		this.GMsetValue = function(name, value){
			if (typeof GM_setValue === "function") {
				GM_setValue(name, value);
			} else if(typeof GM.setValue === "function"){
				GM.setValue(name, value);
			}else{
				window.localStorage.setItem(name, value)
			}
		};
		this.GMaddStyle = function(css){
			var myStyle = document.createElement('style');
			myStyle.textContent = css;
			var doc = document.head || document.documentElement;
			doc.appendChild(myStyle);
		};
		this.GMopenInTab = function(url, open_in_background){
			if (typeof GM_openInTab === "function") {
				GM_openInTab(url, open_in_background);
			} else {
				GM.openInTab(url, open_in_background);
			}
		};
		this.addScript = function(url){
			var s = document.createElement('script');
			s.setAttribute('src',url);
			document.body.appendChild(s);
		};
		this.randomNumber = function(){
			return Math.ceil(Math.random()*100000000);
		};
		this.request = function(mothed, url, param){   //网络请求
			return new Promise(function(resolve, reject){
				GM_xmlhttpRequest({
					url: url,
					method: mothed,
					data:param,
					onload: function(response) {
						var status = response.status;
						var playurl = "";
						if(status==200||status=='200'){
							var responseText = response.responseText;
							resolve({"result":"success", "data":responseText});
						}else{
							reject({"result":"error", "data":null});
						}
					}
				});
			})
		};
		this.addCommonHtmlCss = function(){
			var cssText = 
				`
				@keyframes fadeIn {
				    0%    {opacity: 0}
				    100%  {opacity: 1}
				}
				@-webkit-keyframes fadeIn {
				    0%    {opacity: 0}
				    100%  {opacity: 1}
				}
				@-moz-keyframes fadeIn {
				    0%    {opacity: 0}
				    100%  {opacity: 1}
				}
				@-o-keyframes fadeIn {
				    0%    {opacity: 0}
				    100%  {opacity: 1}
				}
				@-ms-keyframes fadeIn {
				    0%    {opacity: 0}
				    100%  {opacity: 1}
				}
				@keyframes fadeOut {
				    0%    {opacity: 1}
				    100%  {opacity: 0}
				}
				@-webkit-keyframes fadeOut {
				    0%    {opacity: 1}
				    100%  {opacity: 0}
				}
				@-moz-keyframes fadeOut {
				    0%    {opacity: 1}
				    100%  {opacity: 0}
				}
				@-o-keyframes fadeOut {
				    0%    {opacity: 1}
				    100%  {opacity: 0}
				}
				@-ms-keyframes fadeOut {
				    0%    {opacity: 1}
				    100%  {opacity: 0}
				}
				.web-toast-kkli9{
				    position: fixed;
				    background: rgba(0, 0, 0, 0.7);
				    color: #fff;
				    font-size: 14px;
				    line-height: 1;
				    padding:10px;
				    border-radius: 3px;
				    left: 50%;
				    transform: translateX(-50%);
				    -webkit-transform: translateX(-50%);
				    -moz-transform: translateX(-50%);
				    -o-transform: translateX(-50%);
				    -ms-transform: translateX(-50%);
				    z-index: 999999999999999999999999999;
				    white-space: nowrap;
				}
				.fadeOut{
				    animation: fadeOut .5s;
				}
				.fadeIn{
				    animation:fadeIn .5s;
				}
				`;
			this.GMaddStyle(cssText);
		};
		this.webToast = function(params) {	//小提示框
		    var time = params.time;
		    var background = params.background;
		    var color = params.color;
		    var position = params.position;  //center-top, center-bottom
		    var defaultMarginValue = 50;
		    
		    if(time == undefined || time == ''){
		        time = 1500;
		    }
		    
		    var el = document.createElement("div");
		    el.setAttribute("class", "web-toast-kkli9");
		    el.innerHTML = params.message;
		    //背景颜色
		    if(background!=undefined && background!=''){
		    	el.style.backgroundColor=background;
		    }
		    //字体颜色
		    if(color!=undefined && color!=''){
		    	el.style.color=color;
		    }
		    
		    //显示位置
		    if(position==undefined || position==''){
		    	position = "center-bottom";
		    }
		    
		    //设置显示位置，当前有种两种形式
		    if(position==="center-bottom"){
		    	el.style.bottom = defaultMarginValue+"px"; 
		    }else{
		    	el.style.top = defaultMarginValue+"px"; 
		    }
			el.style.zIndex=999999;
		    
		    document.body.appendChild(el);
		    el.classList.add("fadeIn");
		    setTimeout(function () {
		        el.classList.remove("fadeIn");
		        el.classList.add("fadeOut");
		        /*监听动画结束，移除提示信息元素*/
		        el.addEventListener("animationend", function () {
		            document.body.removeChild(el);
		        });
		        el.addEventListener("webkitAnimationEnd", function () {
		            document.body.removeChild(el);
		        });
		    }, time);
		},
		this.queryUrlParamter = function(text, tag) { //查询GET请求url中的参数
			if(text.indexOf("?")!=-1){ //选取?后面的字符串,兼容window.location.search，前面的?不能去掉
				var textArray = text.split("?");
				text = "?"+textArray[textArray.length-1];
			}
			var t = new RegExp("(^|&)" + tag + "=([^&]*)(&|$)");
			var a = text.substr(1).match(t);
			if (a != null){
				return a[2];
			}
			return "";
		};
		this.isPC = function(){
			var userAgentInfo = navigator.userAgent;
			var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone", "iPad", "iPod"];
			var flag = true;
			for (var v = 0; v < Agents.length; v++) {
				if (userAgentInfo.indexOf(Agents[v]) > 0) {
					flag = false;
					break;
				}
			}
			return flag;
		};
		this.getBilibiliBV=function(){
			var pathname = window.location.pathname;
			var bv = pathname.replace("/video/","").replace("/","");
			return bv;
		}
	}
	
	//全局弹窗对象
	const popup = (function(){
	    class Popup {
	        constructor() {
	            this.mask = document.createElement('div')
	            this.setStyle(this.mask, {
	                "width": '100%',
	                "height": '100%',
	                "backgroundColor": 'rgba(0, 0, 0, .6)',
	                "position": 'fixed',
	                "left": "0px",
	                "top": "0px",
					"bottom":"0px",
					"right":"0px",
					"z-index":"99999"
	            })
	            // 创建中间显示内容的水平并垂直居中的div
	            this.content = document.createElement('div')
	            this.setStyle(this.content, {
	                "max-width": '400px',
					"width":"100%",
	                "max-height": '600px',
	                "backgroundColor": '#fff',
	                "boxShadow": '0 0 2px #999',
	                "position": 'absolute',
	                "left": '50%',
	                "top": '50%',
	                "transform": 'translate(-50%,-50%)',
	                "borderRadius": '3px'
	            })
	            // 将这个小div放在遮罩中
	            this.mask.appendChild(this.content)
	        }
	        middleBox(param) {
	            // 先清空中间小div的内容 - 防止调用多次，出现混乱
	            this.content.innerHTML = ''
	            let title = '默认标题内容';
	            // 检测参数类型
	            if({}.toString.call(param) === '[object String]') {
	                title = param
	            } else if({}.toString.call(param) === '[object Object]') {
	                title = param.title
	            }
	            // 将遮罩放在body中显示
	            document.body.appendChild(this.mask)
	            // 给中间的小div设置默认的排版
	            // 上面标题部分
	            this.title = document.createElement('div')
	            // 设置样式
	            this.setStyle(this.title, {
	                "width": '100%',
	                "height": '40px',
	                "lineHeight": '40px',
	                "boxSizing": 'border-box',
					"background-color":"#FF4D40",
	                "color": '#FFF',
					"text-align": 'center',
					"font-weight":"700",
					"font-size":"16px"
					
	            })
	            // 设置默认标题内容
	            this.title.innerText = title
	            // 将标题部分放在中间div中
	            this.content.appendChild(this.title)
	            // 关闭按钮
	            this.closeBtn = document.createElement('div')
	            // 设置内容
	            this.closeBtn.innerText = '×'
	            // 设置样式
	            this.setStyle(this.closeBtn, {
	                "textDecoration": 'none',
	                "color": '#666',
	                "position": 'absolute',
	                "right": '10px',
	                "top": '0px',
	                "fontSize": '25px',
					"color": '#FFF',
					"display":"inline-block",
					"cursor":"pointer"
	            })
	            // 将关闭按钮放在中间小div中
	            this.title.appendChild(this.closeBtn)
				this.closeBtn.onclick = () => this.close()
	        }
	        // 弹出提示框
	        dialog(param) {
	            this.middleBox(param);
				this.dialogContent = document.createElement('div')
				this.setStyle(this.dialogContent,{
					"padding":"15px",
					"max-height":"400px"
				})
				this.dialogContent.innerHTML = param.content;
				this.content.appendChild(this.dialogContent)
				param.onContentReady(this);
	        }
	        close() {
	            document.body.removeChild(this.mask)
				window.location.reload();
	        }
	        setStyle(ele, styleObj) { // 设置样式的函数
	            for(let attr in styleObj){
	                ele.style[attr] = styleObj[attr]
	            }
	        }
	    }
	    let popup = null;
	    return (function() {
	        if(!popup) {
	            popup = new Popup()
	        }
	        return popup;
	    })()
	})();
	
	//解析接口配置
	//showType=1(仅PC), showType=2(仅mobile), showType=3(同时显示)
	const originalInterfaceList = [
		{"name":"纯净/B站","url":"https://z1.m1907.cn/?jx=", "showType":3},
		{"name":"高速接口","url":"https://jsap.attakids.com/?url=", "showType":3},
		{"name":"综合/B站","url":"https://jx.bozrc.com:4433/player/?url=", "showType":3},
		{"name":"OK解析","url":"https://okjx.cc/?url=", "showType":3},
		{"name":"夜幕","url":"https://www.yemu.xyz/?url=", "showType":3},
		{"name":"爱豆","url":"https://jx.aidouer.net/?url=", "showType":1},
		{"name":"虾米","url":"https://jx.xmflv.com/?url=", "showType":1},
		{"name":"M3U8.TV","url":"https://jx.m3u8.tv/jiexi/?url=", "showType":3},
		{"name":"人人迷","url":"https://jx.blbo.cc:4433/?url=", "showType":3},
		{"name":"全民","url":"https://jx.blbo.cc:4433/?url=", "showType":3},
		{"name":"七哥","url":"https://jx.mmkv.cn/tv.php?url=", "showType":3},
		{"name":"冰豆","url":"https://api.qianqi.net/vip/?url=", "showType":3},
		{"name":"迪奥","url":"https://123.1dior.cn/?url=", "showType":1},
		{"name":"CK","url":"https://www.ckplayer.vip/jiexi/?url=", "showType":1},
		{"name":"ckmov","url":"https://www.ckmov.vip/api.php?url=", "showType":1},
		{"name":"playerjy/B站","url":"https://jx.playerjy.com/?url=", "showType":3},
		{"name":"ccyjjd","url":"https://ckmov.ccyjjd.com/ckmov/?url=", "showType":1},
		{"name":"诺诺","url":"https://www.ckmov.com/?url=", "showType":1},
		{"name":"H8","url":"https://www.h8jx.com/jiexi.php?url=", "showType":1},
		{"name":"BL","url":"https://vip.bljiex.com/?v=", "showType":1},
		{"name":"解析la","url":"https://api.jiexi.la/?url=", "showType":1},
		{"name":"MUTV","url":"https://jiexi.janan.net/jiexi/?url=", "showType":1},
		{"name":"MAO","url":"https://www.mtosz.com/m3u8.php?url=", "showType":1},
		{"name":"老板","url":"https://vip.laobandq.com/jiexi.php?url=", "showType":1},
		{"name":"盘古","url":"https://www.pangujiexi.cc/jiexi.php?url=", "showType":1},
		{"name":"盖世","url":"https://www.gai4.com/?url=", "showType":1},
		{"name":"小蒋","url":"https://www.kpezp.cn/jlexi.php?url=", "showType":1},
		{"name":"YiTV","url":"https://jiexi.us/?url=", "showType":1},
		{"name":"星空","url":"http://60jx.com/?url=", "showType":1},
		{"name":"0523","url":"https://go.yh0523.cn/y.cy?url=", "showType":1},
		{"name":"17云","url":"https://www.1717yun.com/jx/ty.php?url=", "showType":1},
		{"name":"4K","url":"https://jx.4kdv.com/?url=", "showType":1},
		{"name":"云析","url":"https://jx.yparse.com/index.php?url=", "showType":1},
		{"name":"8090","url":"https://www.8090g.cn/?url=", "showType":1},
		{"name":"江湖","url":"https://api.jhdyw.vip/?url=", "showType":1},
		{"name":"诺讯","url":"https://www.nxflv.com/?url=", "showType":1},
		{"name":"PM","url":"https://www.playm3u8.cn/jiexi.php?url=", "showType":1},
		{"name":"听乐","url":"https://jx.dj6u.com/?url=", "showType":1},
		{"name":"180","url":"https://jx.000180.top/jx/?url=", "showType":1},
		{"name":"无名","url":"https://www.administratorw.com/video.php?url=", "showType":1},		
		{"name":"听乐(B站)","url":"https://jx.dj6u.com/?url=", "showType":2},
	];
	
	//全局统一方法对象
	const commonFunctionObject = new commonFunction(); 
	commonFunctionObject.addCommonHtmlCss();	//统一html、css元素添加
	let newOriginalInterfaceList = originalInterfaceList; //统一接口
	
	//相关功能关闭控制
	let functionController= commonFunctionObject.GMgetValue("setingData");
	if(!functionController){
		functionController={
			"bilibiliHelper":true,"superVideoHelper":true,"superMusicHelper":true,"abroadVideoHelper":true,
			"wangpanSearchEnginesHelper":true,"searchEnginesNavigation":true,"zhihuHelper":true,
		}
	}	
	//用户功能设置函数
	function usersSeting(){
		var bilibiliHelper=true, superVideoHelper=true, superMusicHelper=true, abroadVideoHelper=true, wangpanSearchEnginesHelper=true, searchEnginesNavigation=true, zhihuHelper=true;
		var isUpdateStorage = false;
		if(!functionController.hasOwnProperty("bilibiliHelper")){
			functionController.bilibiliHelper = true;
			isUpdateStorage = true;
		}else{
			bilibiliHelper = functionController.bilibiliHelper;
		}
		if(!functionController.hasOwnProperty("superVideoHelper")){
			functionController.superVideoHelper = true;
			isUpdateStorage = true;
		}else{
			superVideoHelper = functionController.superVideoHelper;
		}
		if(!functionController.hasOwnProperty("superMusicHelper")){
			functionController.superMusicHelper = true;
			isUpdateStorage = true;
		}else{
			superMusicHelper = functionController.superMusicHelper;
		}
		if(!functionController.hasOwnProperty("abroadVideoHelper")){
			functionController.abroadVideoHelper = true;
			isUpdateStorage = true;
		}else{
			abroadVideoHelper = functionController.abroadVideoHelper;
		}
		if(!functionController.hasOwnProperty("wangpanSearchEnginesHelper")){
			functionController.wangpanSearchEnginesHelper = true;
			isUpdateStorage = true;
		}else{
			wangpanSearchEnginesHelper = functionController.wangpanSearchEnginesHelper;
		}
		if(!functionController.hasOwnProperty("searchEnginesNavigation")){
			functionController.searchEnginesNavigation = true;
			isUpdateStorage = true;
		}else{
			searchEnginesNavigation = functionController.searchEnginesNavigation;
		}
		if(!functionController.hasOwnProperty("zhihuHelper")){
			functionController.zhihuHelper = true;
			isUpdateStorage = true;
		}else{
			zhihuHelper = functionController.zhihuHelper;
		}
		if(isUpdateStorage){
			commonFunctionObject.GMsetValue("setingData",functionController);
		}
		var setingData=[
			{"tag":"bilibiliHelper", "name":"B站使用助手(视频下载可P、浏览记录、一件三联)", "checked":bilibiliHelper},
			{"tag":"zhihuHelper", "name":"知乎使用助手(内容标识、问答显示优化、视频下载等)", "checked":zhihuHelper},
			{"tag":"superVideoHelper", "name":"全网VIP视频解析(支持爱奇艺、腾讯视频、B站番剧等)", "checked":superVideoHelper},
			{"tag":"superMusicHelper", "name":"全网VIP音乐解析(支持网易云音乐、QQ音乐等)", "checked":superMusicHelper},
			{"tag":"abroadVideoHelper", "name":"国外视频解析下载(支持油管、Facebook等)", "checked":abroadVideoHelper},
			{"tag":"wangpanSearchEnginesHelper", "name":"网盘搜索引擎破解无限下载", "checked":wangpanSearchEnginesHelper},
			{"tag":"searchEnginesNavigation", "name":"搜索引擎资源导航(适配百度、360、搜狗、必应等)", "checked":searchEnginesNavigation},
		]
		var content = "";
		for(var i=0; i<setingData.length;i++){
			var one = setingData[i];
			content += `
				<div style="padding: 5px 0px;">
					<input style="display:inline-block;width: 15px;height: 15px;display: inline-block;vertical-align: middle; -webkit-appearance:checkbox;margin-bottom: 3px;cursor: pointer;" name="Checkbox" type="checkbox" data-tag="`+one.tag+`" `+(one.checked ? "checked" : "")+`>
					<label style="display:inline-block;font-size: 14px;margin:3px 0;vertical-align: middle;font-weight:500;color:#000;">`+one.name+`</label>
				</div>
			`
		}
		popup.dialog({
			"title":"功能开关",
			"content":content,
			"onContentReady":function($that){
				$that.dialogContent.querySelectorAll("input[type='checkbox']").forEach(function(checkbox){
					checkbox.addEventListener("click", function(e){
						var tag = e.target.getAttribute("data-tag");
						var checked = e.target.checked;
						functionController[tag] = checked;
						commonFunctionObject.GMsetValue("setingData",functionController);
						commonFunctionObject.webToast({"message":"操作成功", "background":"#FF4D40"});
					});
				})
			}
		});
	}
	
	if(commonFunctionObject.isPC()){
		GM_registerMenuCommand("功能开关",()=>usersSeting());
	}else{
		functionController.bilibiliHelper = false;
		functionController.abroadVideoHelper = false;
		functionController.superMusicHelper = false;
		functionController.wangpanSearchEnginesHelper = false;
		functionController.searchEnginesNavigation = false;
		functionController.zhihuHelper = false;
	}

	/**
	 * 超级解析助手功能
	 * 
	 * 原代码作者：小艾特
	 * 脚本地址：https://greasyfork.org/zh-CN/scripts/407847
	 * 视频解析接口来自，作者：懒哈哈
	 * 脚本地址：https://greasyfork.org/zh-CN/scripts/370634
	 * 遵循AGPL License开源协议
	 */
	function superVideoHelper(originalInterfaceList){
		this.originalInterfaceList = originalInterfaceList;
		this.elementId = Math.ceil(Math.random()*100000000)+"mmx";
		this.customInterfaceKey = "custom_interface_key_dddsdxxa";
		this.quicklyInterfaceKey = "custom_quickly_interface_key_dddsdxxa";
		this.defaultQuicklyInterfaceIndex = 1;
		this.isRun = function(){ //判断是否运行
			const host = window.location.host;
			const urls = ["www.iqiyi.com","v.qq.com","youku.com", "www.le.com","mgtv.com","sohu.com", "acfun.cn","bilibili.com","baofeng.com","pptv.com","1905.com","miguvideo.com"];
			var result = false;
			if(!host.startsWith("m.")){ //不是移动端执行
				for(var i=0; i<urls.length;i++){ //不是B站直接判断
					if(window.location.host.indexOf("bilibili.com")==-1){
						if(window.location.host.indexOf(urls[i])!=-1){
							result = true;
							break;
						}
					}else{
						if(window.location.href.indexOf("www.bilibili.com/bangumi/play")!=-1){ //是B站只有番剧才开启VIP解析
							result = true;
							break;
						}
					}
				}
			}
			return result;
		};
		this.showPlayerWindow = function(playObject){	//显示播放窗口
			var url = playObject.url + window.location.href;
			commonFunctionObject.GMopenInTab(url, false);
		};
		this.analysisCustomInterface = function(){ //自定义接口解析
			var customInterface = commonFunctionObject.GMgetValue(this.customInterfaceKey,"");
			if(!!customInterface){
				try{
					var customizeInterfaceList = new Array();
					var analysisArray = customInterface.split("\n");
					for(var i=0;i<analysisArray.length;i++){
						var onePiece = analysisArray[i];
						if(!!onePiece && onePiece.indexOf(",")!=-1){
							var onePieceArray = onePiece.split(","); 
							
							if(onePieceArray.length==2 && !!onePieceArray[0] && /(http|https):\/\/\S*/.test(onePieceArray[1])){
								customizeInterfaceList.push({"name":""+onePieceArray[0]+"","url":""+onePieceArray[1]+"", "showType":1});
							}
						}
					}
					this.originalInterfaceList = customizeInterfaceList.concat(this.originalInterfaceList);
				}catch(e){}
			}
		};
		this.getQuicklyInterfaceIndex = function(){
			var quicklyInterfaceIndexString = commonFunctionObject.GMgetValue(this.quicklyInterfaceKey,"")+"";
			var quicklyInterfaceIndex = this.defaultQuicklyInterfaceIndex;
			if(!!quicklyInterfaceIndexString){
				quicklyInterfaceIndex = parseInt(quicklyInterfaceIndexString);
			}
			if(this.originalInterfaceList.length-1<quicklyInterfaceIndex){
				quicklyInterfaceIndex = this.defaultQuicklyInterfaceIndex;
			}
			return quicklyInterfaceIndex;
		};
		this.addHtmlElements = function(){  //添加HTML
			const vipVideoImageBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC9klEQVRoQ+2ZPWgVQRDH/7/CWqOIYOFHFbRSjJhGMGDpByoIago70cqvUtQgdipWFqawMWghGIidhcHKQAJqEURBRfED1CCCjc3IPu4em31775J7d3m8cAtX3O7szP7nPzszx6EeH/T4+VUD6DaDTQbMbE+3D7MY+8Ckkw8BPFuMki7KDtUAuuh9Z3oZMtBljxY2X9eBwq4raWPNQEmOLKxm+TBgZqsknQ1dAVzNco+ZhWsm6ZakHZLC1mQyrZ5OX2RvzMxnSa8lzQJ/YwLzGDCze5JOeoI/gbVtAMxJ6vPW7wKnkr4qbEuaxccDcGWBsfNV0mjMmSGAg5LGA6XbgFehITPbLel5MN84ZAUAUjMPgWO+zZY7YGbvJW0OvRoB8EjSEW9+BhhIvOvCp0wGfPPbgZfpRAzATUnn56GEmJyLd39cBNxeF99FADTa42BskuQef4wDh9oB2CXpRbDpMPA4nTOz05LuBDLrgW+dAACGIkxfkHTDm/8DrMwEkBxgOskkqdwEcMAD4GLf3YF0PACOe+uFGMgA4Bj4EAAbAGbcXLQOmNklSdeCTRuBT2bWL+lNsLYfeFIRgH2SJgJ7GwCXYjMBrJb0K9jUiHEzG5F02VubA9b4skXvQMiAmW2VdFSSn24/As0kk1mJzeyppL3ewaaBnWY2K2mLNz8S5ueCAMLwz3q/DZxreweSe3BC0v1Ai7tkYXrsB96WwMBCAfQBv3MBJCD+SVrhaXaZ54z3PgUMhpYrZKCF7bbNnJk5BhwT6fghyW8thoGxigE4my6tXwemQlt5AGI1oamDSIFLmCuURiW5BOGPL8C7drGV206b2XdJ6yJKxoDhmPKCIeS61ZZClncxFgLAtcyxrnEwRmknDFQFIFYTWnJ/CVmoGgYSj7Z81OR86Lg7sOgPmnY6s0IpN4TyYrDb6zWAmoEOPVCHUIcO7Hh7/YemYxcWU7AMf3BkNGDF/FP9rkwGqjddkoWWv5Ql6V1yNXUdWHKXBwZ7noH/dP+HQNqheToAAAAASUVORK5CYII=";
			const quicklyBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAv1JREFUWEfFl02IVWUYx39/EDdKoCiCGYquxNw404QL+wA/wIUfA5luMotk0jGoiDQFv1oMqCCOFkYQtopczKxMGsUUF2bNKsWFKBroJtLI2qjwl+dy7uV47jnnnntnygcOF97nfd7/777nfZ7nPeIZm8Zb3/ZsYBEwE5gFzAGmAX8lz9/AA0l7QnvcAGwvBd4E1gOTK/yxvQExZgDbbwHvAq9UEE1POSzpwzEB2D4KbG1TuD79G0nvdAxg+2egp0PxCBuS1NsRgG2PQbgeelbS0rYBbJ8DXisAuAdcB2Ykp7+M8ztJGyoD2H4J+AxYU7DqoKQP6j7b24AjJQQDknaUAtieDvQmz/KSxUYkNfltx07FjuVZv6RjhQC21wIHgHkV3vc2SZERTWb7d+CFHFevpKFcANvvA19UEK5PWSnphwKAS8DLGd8/wIuSbjcB2I4SubsN8Zj6iaSDBQB/AlMzvq8lvRdjTwEk5XSkTfHadEl5fyYOYRzGrC2TdOYpANvdwC+diKditgNXkxRcBSzLWe+CpFfr4w1q21eABZmAx8DFkrzvhHejpG/zAPqSbhaCtUfSv7YHgE87UcqJOSapPz1eqRDZ/h54Y4wQlyVls6H6fcD2r0BXpxB5h7QpC1otbjtq/ZRW8zL+nyS9XhTTqhR3SRpNB9u+k1y3qnAMS4qKWmhFlXAlsC/Z8lvAifodLlayPQysrkDQI6k0tfOKx0TgGjA3I7BO0sn6mO1DwEclED9KWtEKMg/gOLA5J/CupOczryN2aUlBneiTFGuVWrYUR6pFyhVZd86ZeARMyATcABZL+qMygO043eeBhQVBo5KiXDfM9iQgOlvWaq22lXj406X4c2BnQdDNaCqSTmUA4h2fzsRskfRlFfEGgO35QPTt53ICv0rEH2Z9tvcDu1LjtY+NquJpgLh8xCUkbb8B+9MnPwcgfUFttNhOANILxbfbIHBI0v2yxWx/DGwC3pYUpbptq52B5BYUPTryP2638fu/WKVu+F+SPAG7l/wh4NsJOQAAAABJRU5ErkJggg==";
			const currentHost = window.location.host;
			
			const quicklyInterfaceIndex = this.getQuicklyInterfaceIndex();
			var currentQuicklyInterfaceObject = null;
			
			var category_1_html = "";
			this.originalInterfaceList.forEach((item, index) => {
				if(item.showType != 2){
					var selected = ""
					if(index==quicklyInterfaceIndex){
						selected = "selected";
						currentQuicklyInterfaceObject =  item;
					}
					category_1_html += "<span title='"+item.name+"' data-index='"+index+"' class='"+selected+"'>" + item.name + "</span>";
				}
			});
			
			//获得自定义位置
			var left = 0;
			var top = 120;
			var Position = commonFunctionObject.GMgetValue("Position_" + currentHost);
			if(!!Position){
				left = Position.left;
				top = Position.top;
			}
			var color = "#FF4D40";
			var hoverColor = "#000000";
			if(currentHost.indexOf("bilibili.com")!=-1){ //自定义主题
				color = "#fb7299";
				hoverColor = "#00B0E1";
			}
			var cssMould = `#vip_movie_box`+this.elementId+`{cursor:pointer; position:fixed; top:` + top + `px; left:` + left + `px; width:0px; z-index:99999999; font-size:16px; text-align:left;}
							#vip_movie_box`+this.elementId+` .img_box`+this.elementId+`{width:24px; height:32px;line-height:32px;text-align:center;background-color:`+color+`;}
							#vip_movie_box`+this.elementId+` .img_box`+this.elementId+`:hover{
								background: linear-gradient(30deg, #2a66ff 40%, `+color+`);
							}
							#vip_movie_box`+this.elementId+` .img_box`+this.elementId+`>img {width:20px; display:inline-block; vertical-align:middle;}
							
							#vip_movie_box`+this.elementId+` .showhide_box`+this.elementId+`{display:none;padding-left:5px;position: absolute;left: 24px;top: 0;}
							#vip_movie_box`+this.elementId+` .vip_mod_box_action_687ii{width:380px; max-height:400px; overflow-y:auto;background-color:rgba(241,241,241);}
							#vip_movie_box`+this.elementId+` .default-scrollbar-55678::-webkit-scrollbar{width:5px; height:1px;}
							#vip_movie_box`+this.elementId+` .default-scrollbar-55678::-webkit-scrollbar-thumb{box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.2); background:#A8A8A8;}
							#vip_movie_box`+this.elementId+` .default-scrollbar-55678::-webkit-scrollbar-track{box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.2); background:#F1F1F1;}
							
							#vip_movie_box`+this.elementId+` .vip_mod_box_action_687ii> .item_box`+this.elementId+`{margin-bottom:10px;}
							#vip_movie_box`+this.elementId+` .vip_mod_box_action_687ii> .item_box`+this.elementId+`:last-child{margin-bottom:0px;}
							#vip_movie_box`+this.elementId+` .vip_mod_box_action_687ii> .item_box`+this.elementId+` >.title`+this.elementId+`{font-size:14px; text-align:left;color:#000000;font-weight:600;margin:5px 3px;}
							#vip_movie_box`+this.elementId+` .vip_mod_box_action_687ii> .item_box`+this.elementId+` >.interface_box`+this.elementId+`{}
							#vip_movie_box`+this.elementId+` .vip_mod_box_action_687ii> .item_box`+this.elementId+` >.interface_box`+this.elementId+`>span{border-radius:3px;border-top:3px solid `+color+`; border-bottom:3px solid `+color+`;display:inline-block;width:calc(25% - 6px);width:-moz-calc(25% - 6px);width: -webkit-calc(25% - 6px);height:20px;line-height:20px;background-color:`+color+`;color:#FFF;cursor:pointer;margin:3px;text-align:center;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;-o-text-overflow:ellipsis;font-size:12px!important;}							
							#vip_movie_box`+this.elementId+` .vip_mod_box_action_687ii> .item_box`+this.elementId+` >.interface_box`+this.elementId+`>span:hover{border-top:3px solid `+hoverColor+`; border-bottom:3px solid `+hoverColor+`;}
							#vip_movie_box`+this.elementId+` .vip_mod_box_action_687ii> .item_box`+this.elementId+` >.interface_box`+this.elementId+`>span.selected{border-top:3px solid `+hoverColor+`; border-bottom:3px solid `+hoverColor+`;}
							#vip_movie_box`+this.elementId+` .vip_mod_box_action_687ii> .item_box`+this.elementId+` >.content`+this.elementId+`{font-size:12px;color:#000000;margin-left:3px;}
							`
			commonFunctionObject.GMaddStyle(cssMould);
			
			//加入HTML
			var htmlMould = `<div id='vip_movie_box`+this.elementId+`'>
								<div class='plugin_inner_`+this.elementId+`'>
									<div class="img_box`+this.elementId+`" id="img_box_jump_6667897iio"><img src='`+ vipVideoImageBase64 +`' title='选择解析线路'/></div>
									<div class='showhide_box`+this.elementId+`'>									
										<div class='vip_mod_box_action_687ii default-scrollbar-55678'>
											<div class='item_box`+this.elementId+`'>
												<div class='title`+this.elementId+`'><b>接口添加</b></div>
												<div class='content`+this.elementId+`'>
													对现有接口不满意？可添加自定义接口哟~<span id="img_set_6667897iio" style="display:inline-block;border-radius:2px;margin-left:5px;padding:3px 5px;background-color:#CCC;cursor:pointer;">添加接口</span>
												</div>
											</div>
											<div class='item_box`+this.elementId+`'>
												<div class='interface_box`+this.elementId+`'>
													` + category_1_html + `
												</div>
											</div>
											<div class='item_box`+this.elementId+`'>
												<div class='title`+this.elementId+`'><b>免责声明：</b></div>
												<div class='content`+this.elementId+`'>
													1、VIP视频解析中所用到的解析接口全部收集自互联网（源码可见），版权问题请联系相关解析接口所有者，脚本不承担相关责任！"<br>
													2、为创造良好的创作氛围，请大家支持正版！<br>
													3、脚本仅限个人学习交流，使用即已代表您已经充分了解相关问题，否则后果自负，特此声明！<br>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="img_box`+this.elementId+`" id="img_quickly_6667897iio"><img src='`+quicklyBase64+`' title='快速开始(当前所选接口：`+currentQuicklyInterfaceObject.name+`)'/></div>
							</div>
							`;
			$("body").append(htmlMould);
		};
		this.runEvent = function(){	 //事件运行
			var that = this;
			$("#vip_movie_box"+this.elementId+" >.plugin_inner_"+this.elementId).on("mouseover", () => {
				$(".showhide_box"+this.elementId).show();
			});
			$("#vip_movie_box"+this.elementId+" >.plugin_inner_"+this.elementId).on("mouseout", () => {
				$(".showhide_box"+this.elementId).hide();
			});
			$("body").on("click","#vip_movie_box"+this.elementId+" .vip_mod_box_action_687ii>.item_box"+this.elementId+">.interface_box"+this.elementId+">span",function(){
				var index = parseInt($(this).attr("data-index"));
				var playObject = that.originalInterfaceList[index];
				that.showPlayerWindow(playObject);
				
				$("#vip_movie_box"+that.elementId+" .vip_mod_box_action_687ii> .item_box"+that.elementId+">.interface_box"+that.elementId+">span").removeClass("selected");
				$(this).addClass("selected");
				commonFunctionObject.GMsetValue(that.quicklyInterfaceKey, index);
				
				$("#img_quickly_6667897iio").find("img").attr("title","快速开始(当前所选接口："+playObject.name+")");
			});
						
			//点击视频播放界面
			$("#img_box_jump_6667897iio").on("click", function(){
				commonFunctionObject.GMopenInTab("https://laisoyiba.com/mov/s/?sv=3&url="+window.location.href, false);
			});
			
			//点击弹出设置框
			$("#img_set_6667897iio").on("click", function(){
				that.showSetingDialog();
			});
			
			$("#img_quickly_6667897iio").on("click", function(){
				const quicklyInterfaceIndex = that.getQuicklyInterfaceIndex();
				var playObject = that.originalInterfaceList[quicklyInterfaceIndex];
				that.showPlayerWindow(playObject);
			});
			
			//右键移动位置
			var movie_box = $("#vip_movie_box"+this.elementId);
			movie_box.mousedown(function(e) {
				if (e.which == 3) {
					e.preventDefault()
					movie_box.css("cursor", "move");
					var positionDiv = $(this).offset();
					var distenceX = e.pageX - positionDiv.left;
					var distenceY = e.pageY - positionDiv.top;
					
					$(document).mousemove(function(e) {
						var x = e.pageX - distenceX;
						var y = e.pageY - distenceY;
						var windowWidth = $(window).width();
						var windowHeight = $(window).height();
						
						if (x < 0) {
							x = 0;
						} else if (x >  windowWidth- movie_box.outerWidth(true) - 100) {
							x = windowWidth - movie_box.outerWidth(true) - 100;
						}
						
						if (y < 0) {
							y = 0;
						} else if (y > windowHeight - movie_box.outerHeight(true)) {
							y = windowHeight - movie_box.outerHeight(true);
						}
						movie_box.css("left", x);
						movie_box.css("top", y);
						commonFunctionObject.GMsetValue("Position_" + window.location.host,{ "left":x, "top":y});
					});
					$(document).mouseup(function() {
						$(document).off('mousemove');
						movie_box.css("cursor", "pointer");
					});
					$(document).contextmenu(function(e) {
						e.preventDefault();
					})
				}
			});
		};
		this.removeVideoAdBlock_iqiyi = function(){
			
		},
		this.removeVideoAdBlock_vqq = function(){

		},
		this.removeVideoAdBlock_youku = function(){
			
		},
		this.removeVideoAdBlock_mgtv = function(){
			
		},
		this.removeVideoAdBlock_sohu = function(){
			
		},
		this.removeVideoAdBlock = function(){
			const currentHost = window.location.host;
			if(currentHost.indexOf("www.iqiyi.com")!=-1){
				this.removeVideoAdBlock_iqiyi();
			}else if(currentHost.indexOf("v.qq.com")!=-1){
				this.removeVideoAdBlock_vqq();
			}else if(currentHost.indexOf("v.youku.com")!=-1){
				this.removeVideoAdBlock_youku();
			}else if(currentHost.indexOf("www.mgtv.com")!=-1){
				this.removeVideoAdBlock_mgtv();
			}else if(currentHost.indexOf("tv.sohu.com")!=-1){
				this.removeVideoAdBlock_sohu();
			}
		};
		this.showSetingDialog = function(){
			const that = this;
			var customInterfaceKey = that.customInterfaceKey;
			var customInterface = commonFunctionObject.GMgetValue(customInterfaceKey, "");
			
			var content = `
				<div>
					<div style="font-size:14px;font-weight:700;color:#000;">自定义解析接口</div>
					<div style="font-size:13px;color:red;">					
						数据格式：[名字] + [,] + [接口地址]<br>
						例如：就是名字而已,https://jx.idc126.net/jx/?url=	<br>
						注：一行一个
					</div>
					<div style="margin-top:5px;height:200px;width:100%;">
						<textarea 
							placeholder="请严格按照格式填写，否则不生效"
							class="custom-interface-textarea"
							style="font-size:14px;box-sizing: border-box;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;padding:5px;height:100%;width:100%;Overflow:auto;border:1px solid #ccc;resize:none;background-color:#FFF;outline:none;">`+customInterface+`</textarea>
					</div>
					<div style="text-align:center;margin-top:15px;">
						<button class="save-custom-interface-btn">保存自定义接口</button>
					</div>
				</div>
			`;
			popup.dialog({
				"title":"解析接口添加",
				"content":content,
				"onContentReady":function($that){
					var $saveCustomInterfaceBtn = $that.dialogContent.querySelector(".save-custom-interface-btn");
					$saveCustomInterfaceBtn.addEventListener("click", function(){
						var $customInterfaceTextarea = $that.dialogContent.querySelector(".custom-interface-textarea");
						var content = $customInterfaceTextarea.value;
						commonFunctionObject.GMsetValue(customInterfaceKey, content);
						commonFunctionObject.webToast({"message":"自定义接口保存成功", "background":"#FF4D40"});
					});
				}
			})
		}
		this.start = function(){			
			let delayTimeMs = 0;
			if(window.location.host.indexOf("www.bilibili.com")!=-1){
				delayTimeMs = 2200;
			}
			setTimeout(()=>{
				try{
					this.removeVideoAdBlock();
				}catch(e){}
				try{
					this.analysisCustomInterface();
					this.addHtmlElements();
					this.runEvent();
				}catch(e){}
			}, delayTimeMs);
		};
	};
	
	/**
	 * 移动端VIP解析
	 * @param {Object} originalInterfaceList
	 */
	function superVideoHelperMobile(originalInterfaceList){
		this.originalInterfaceList = originalInterfaceList;
		this.elementId = Math.ceil(Math.random()*100000000)+"mmx";
		this.quicklyInterfaceKey = "custom_mobile_quickly_interface_key_dddsdxxa";
		this.defaultQuicklyInterfaceIndex = 2;
		this.playerNodes=[
			{"url":"m.iqiyi.com", "showNode":".m-video-player-wrap", "color":"#05B03B"},
			{"url":"m.v.qq.com", "showNode":".mod_player", "color":"#F99D39"},
			{"url":"m.youku.com", "showNode":".h5-detail-player", "color":"#08BAFD"},
			{"url":"m.mgtv.com", "showNode":".video-area", "color":"#E95904"},
			{"url":"m.bilibili.com", "showNode":".player-wrapper", "color":"#FB7299"},
		];
		this.isRun = function(){ //判断是否运行
			const host = window.location.host;
			const urls = ["m.iqiyi.com","m.v.qq.com","m.youku.com", "m.mgtv.com", "m.bilibili.com"];
			var result = false;
			if(host.startsWith("m.")){ //是移动端执行
				for(var i=0; i<urls.length; i++){
					if(host.indexOf(urls[i]) != -1){
						result = true;
						break;
					}
				}
			}
			return result;
		};
		this.getwindowElement = function(){
			var nodeObject = null;
			for(var i in this.playerNodes) { //获得窗口ID
				if (this.playerNodes[i].url == window.location.host) {
					nodeObject = this.playerNodes[i];
					break;
				}
			}
			return nodeObject;
		};
		this.getQuicklyInterfaceIndex = function(){
			var quicklyInterfaceIndexString = commonFunctionObject.GMgetValue(this.quicklyInterfaceKey,"")+"";
			var quicklyInterfaceIndex = this.defaultQuicklyInterfaceIndex;
			if(!!quicklyInterfaceIndexString){
				quicklyInterfaceIndex = parseInt(quicklyInterfaceIndexString);
			}
			if(this.originalInterfaceList.length-1<quicklyInterfaceIndex){
				quicklyInterfaceIndex = this.defaultQuicklyInterfaceIndex;
			}
			return quicklyInterfaceIndex;
		};
		this.addHtmlElements = function(){
			let nodeObject = this.getwindowElement();
			const quicklyInterfaceIndex = this.getQuicklyInterfaceIndex();
			if(!nodeObject) return;
			return new Promise((resolve, reject)=>{
				const elementInterval = setInterval(()=>{
					const nodeElementObject = $(nodeObject.showNode), themeColor = nodeObject.color;
					
					if(nodeElementObject.length == 0) return;
					clearInterval(elementInterval);
										
					//添加HTML
					let category_1_html = "";
					this.originalInterfaceList.forEach((item, index) => {
						if (item.showType != 1) {
							var selected = "";
							if(index==quicklyInterfaceIndex){
								selected = "selected";
							}
							category_1_html += "<option value='"+item.url+"' index='"+index+"' "+selected+">"+item.name+"</option>";
						}
					});
					var htmlMould = `
						<div style="margin:15px 15px 50px 15px;padding:10px;background-color:`+themeColor+`;border-radius:4px;cursor:pointer;z-index: 999999999999999999999;color:#FFF;">
								<div style="font-weight:700;font-size:14px;text-align:center;">
									<span>选择解析接口</span>
									<select id="interface_selection_`+this.elementId+`" style="background-color:#FFF;padding: 0px 10px;">
										`+category_1_html+`
									</select>
								</div>
								<div style="text-align:center;">
									<a href="javascript:void(0);" id="start_analysis_outer_`+this.elementId+`" style="box-sizing:border-box;margin:10px 0px;display:inline-block;padding:10px 0px;width:100%;border-radius:4px;color:#FFF;background-color:#F2503F;font-size:14px;">站外解析</a>
								</div>
								<div style="text-align:left;font-size:10px;">
									<div>
										免责申明：1、VIP视频解析中所用到的解析接口全部收集自互联网（源码可见），版权问题请联系相关解析接口所有者！
										2、为创造良好的创作氛围，请大家支持正版！
										3、脚本仅限个人学习交流，切勿用于任何商业等其它用途！
										4、继续使用，即表明你已经明确使用脚本可能带来的风险，且愿意自行承担相关风险，对于风险脚本不承担任何责任！
									</div>
								</div>
						</div>
					`;
					nodeElementObject.after(htmlMould);
					resolve("ok");
				}, 100);
			});
		};
		this.getPlayObjectBySelect = function(){
			
			var indexString = $("#interface_selection_"+this.elementId).find("option:selected").attr("index");
			var index = 0;
			if(!!indexString){
				index = parseInt(indexString);
			}
			return this.originalInterfaceList[index];
		};
		this.runEvent = function(){	 //事件运行
			const self = this;

			//初始化
			var playObject = self.getPlayObjectBySelect();
			$('#start_analysis_outer_'+self.elementId).attr("href", playObject.url + window.location.href);
			$('#start_analysis_outer_'+self.elementId).on('click', function (e) {
				if(commonFunctionObject.GMgetValue("copyright_video_remind_mobile_outer",null)==="true"){
					
				}else{
					var r=confirm(
						"脚本运行提醒！！！\u000d"+
						"使用站外解析功能，视频解析时脚本跳出本页面，如不同意此脚本行为，请点击【取消】按钮！！"
					);
					if(r==false){
						e.preventDefault();
					}else{
						commonFunctionObject.GMsetValue("copyright_video_remind_mobile_outer","true");
					}
				}
			});
			//接口切换
			$('#interface_selection_'+self.elementId).on('change', function () {
				var $option = $(this).find("option:selected");
				var value = $option.val();
				var index = parseInt($option.attr("index"));
				$('#start_analysis_outer_'+self.elementId).attr("href", value+window.location.href);
				commonFunctionObject.GMsetValue(self.quicklyInterfaceKey, index);
			});
		};
		this.start = function(){
			const self = this;
			if(this.isRun()){
				this.addHtmlElements().then(()=>{
					self.runEvent();
				});
			}
		}
	}
	
	/**
	 * B站相关功能：视频多P下载，一键三联，浏览记录等
	 */
	function bilibiliHelper(){
		this.downloadVideoCoin = function(){
			function innerClassDownloadVideoCoin(){ //视频下载一键三联class
				this.elementId = Math.ceil(Math.random()*100000000)+"mmx";
				this.downloadResutError=function($btn){
					$btn.text("下载视频（最高清）");
					$btn.removeAttr("disabled");
				};
				this.downloadResutSuccess=function($btn){
					$btn.text("下载视频（最高清）");
					$btn.removeAttr("disabled");
				};
				this.getDownloadPages = function(){
					return new Promise(function(resolve, reject) {
						var pathname = window.location.pathname, bv = null;
						if (pathname.indexOf("/medialist/play/watchlater/") != -1) { // 在下载视频的时候针对稍后再看页面的链接找BV号
						    bv = pathname.replace("/medialist/play/watchlater/","").replace("/","");
						}else{
							bv = pathname.replace("/video/","").replace("/","");
						}
						if(!bv){
							resolve({"status":"bv_null"});
							return;
						}
						//bv转av
						commonFunctionObject.request("get", "http://api.bilibili.com/x/web-interface/archive/stat?bvid="+bv, null).then((resultData)=>{
							let dataJson = JSON.parse(resultData.data);
							if(!dataJson || dataJson.code!==0 || !dataJson.data){
								resolve({"status":"request_error"});
								return;
							}
							
							let aid = dataJson.data.aid;
							if(!aid){
								resolve({"status":"aid_null"});
								return;
							}
							
							//获取cid
							commonFunctionObject.request("get", "https://api.bilibili.com/x/web-interface/view?aid="+aid, null).then((resultData2)=>{
								let dataJson2 = JSON.parse(resultData2.data);
								if(!dataJson2 || dataJson2.code!==0 || !dataJson2.data){
									resolve({"status":"request_error"});
									return;
								}
								const downloadData = dataJson2.data;
								const aid = downloadData.aid, bvid = downloadData.bvid;
								const pages = new Array();
								for(var i=0; i<downloadData.pages.length; i++){
									let pageData = downloadData.pages[i];
									pages.push({
										"cover":pageData.first_frame,
										"page":pageData.page,
										"part":pageData.part,
										"cid":pageData.cid
									});
								}
								resolve({"status":"success", "downloadData":{
									"aid":aid, "bvid":bvid, "pages":pages
								}});
							}).catch((errorData)=>{
								resolve({"status":"request_error"});
							});
						}).catch((errorData)=>{
							resolve({"status":"request_error"});
						});
					});
				};
				this.startDownloadFile = function(aid, cid){
					commonFunctionObject.request("get", "https://api.bilibili.com/x/player/playurl?avid="+aid+"&cid="+cid+"&qn=112", null).then((resultData3)=>{
						let dataJson3 = JSON.parse(resultData3.data);
						if(!!dataJson3 && dataJson3.code===0 && !!dataJson3.data){
							window.open(dataJson3.data.durl[0].url);
						}else{
							alert("获取下载链接失败");
						}
					}).catch((errorData)=>{
						alert("获取下载链接失败");
					});
				};
				this.createModals = function(){
					var css = `
						.modal-mask-`+this.elementId+`{
							position:fixed;
							top:0;
							left:0;
							z-index:999999998;
							width:100%;
							height:100%;
							display:none;
							background-color:#000;
							opacity:0.3;
							overflow:hidden;
						}
						.modal-body-`+this.elementId+`{
							position:fixed;
							border-radius:5px;
							background-color: #FFFFFF;
							top:10%;
							width:400px;
							max-width: 90%;
							max-height:170px;
							max-height: 600px;
							overflow-y: auto;
							z-index:999999999;
							left: 50%;
							transform: translateX(-50%);
							display:none;
							padding: 10px;
						}
						.modal-body-`+this.elementId+` >.page-wrap{
							display: flex;
							flex-wrap: wrap;
						}
						.modal-body-`+this.elementId+` >.page-wrap >.board-item{
							display: block;
							width: calc(50% - 10px);
							background-color: #6A5F60;
							margin: 5px;
							background-color:#FB7299;
							color:#FFFFFF;
							cursor: pointer;
							overflow:hidden;
							white-space:nowrap;
							text-overflow:ellipsis;
						}
						.modal-body-`+this.elementId+` >.modal-btn-wrap{
							text-align: center;
							margin-top: 10px;
							cursor: pointer;
						}
						.modal-body-`+this.elementId+` >.copy-tips{
							margin-top: 10px;
							font-size:12px;
						}
					`;
					var html = `
						<div class='modal-mask-`+this.elementId+`'></div>
						<div class='modal-body-`+this.elementId+`'>
							<div class="page-wrap"></div>
							<div class="modal-btn-wrap">
								<span>关闭</span>
							</div>
							<div class="copy-tips">
								说明：点击本弹框选集，即可下载选集视频，默认最高清。
								<br>申明：本功能仅能作为学习交流使用，且不可用于其它用途，否则后果自负。请大家重视版权，尊重创作者，切勿搬运抄袭。请大家多用[一键三连]为创作者投币~，小破站牛掰！
							</div>
						</div>
					`;
					commonFunctionObject.GMaddStyle(css);
					$("body").append(html);
				};
				this.hideModals = function(){
					$(".modal-body-"+this.elementId+"").css('display','none');
					$(".modal-mask-"+this.elementId+"").css('display','none');
				};
				this.showModals = function(pageHtml){
					const self = this;
					$(".modal-body-"+self.elementId+"").css('display','block');
					$(".modal-mask-"+self.elementId+"").css('display','block');
					$(".modal-body-"+self.elementId+" >.page-wrap").html(pageHtml);
					$("body").on("click", ".modal-body-"+self.elementId+" >.page-wrap >.board-item", function(){
						$(this).css("background-color","#ccc");
						self.startDownloadFile($(this).data("aid"), $(this).data("cid"));
					});
					$("body").on("click", ".modal-body-"+self.elementId+" >.modal-btn-wrap >span", function(){
						self.hideModals();
					});
				};
				this.createElementHtml = function(){
					this.createModals();  //创建弹框
					const randomNumber = this.elementId, self = this;
					let cssText = `
						#bilibili_exti_`+randomNumber+`{
							padding:10px;
						}
						#bilibili_exti_`+randomNumber+` >.self_s_btn{
							background-color:#FB7299;
							color:#FFF;
							font-size:10px;
							display:inline-block;
							margin-right:15px;
							padding:2px 4px;
							border-radius:3px;
							cursor:pointer;
						}
					`;
					let htmlText=`
						<div id="bilibili_exti_`+randomNumber+`">
							<span class="self_s_btn" id="download_s_`+randomNumber+`">下载视频（最高清）</span>
							<span class="self_s_btn" id="focus_s_`+randomNumber+`">一键三连</span>
						</div>
					`;
					setTimeout(()=>{ //延时的目的是让B站先加载完全				
						const playerInterval = setInterval(()=>{
							let $viewboxReport = $("#arc_toolbar_report");
							if($("#download_s_"+randomNumber).length==0 && $viewboxReport.length!=0){
								$("body").prepend("<style>"+cssText+"</style>");
								$viewboxReport.before(htmlText);
							}else{
								clearInterval(playerInterval);
							}
						}, 100);
					}, 2800);
					
					$("body").on("click", "#download_s_"+randomNumber, function(){
						const $btn = $(this);
						$btn.attr("disabled", "disabled");
						$btn.text("下载视频（准备中）");
						//开始准备下载数据
						self.getDownloadPages().then((resule)=>{
							if(resule.status==="success"){
								var aid = resule.downloadData.aid, pages = resule.downloadData.pages, itemHtml = "";
								for(var i=0; i<pages.length; i++){
									var title = "【P"+pages[i].page+"】"+pages[i].part+"";
									itemHtml += "<span class='board-item' data-aid='"+aid+"' data-cid='"+pages[i].cid+"' title='"+title+"'>"+title+"</span>";
								}
								self.showModals(itemHtml);
								self.downloadResutSuccess($btn);
							}else{
								self.downloadResutError($btn);
							}
						}).catch((error)=>{
							self.downloadResutError($btn);
						});
					});
					$("body").on("click", "#focus_s_"+randomNumber, function(){
						$("#arc_toolbar_report .like").click();
						$("#arc_toolbar_report .coin").click();
					});
				}
				this.start = function(){
					let locationHost = window.location.host, locationPathname = window.location.pathname;
					if(locationHost==="www.bilibili.com" && (locationPathname.indexOf("/video")!=-1 || locationPathname.indexOf("/watchlater")!=-1)){
						this.createElementHtml();
					}
				}
			}
			try{
				(new innerClassDownloadVideoCoin()).start();
			}catch(e){
				console.log("innerClassDownloadVideoCoin"+e)
			}
		};
		this.recordView = function(){ //浏览记录Class
			function innerClassRecordView(){
				this.localCacheName = "bilibili_video_record"; 
				this.recordOneVideo = function(){
					let promise = new Promise((resolve, reject)=>{
						let bv = commonFunctionObject.getBilibiliBV();
						let cacheText = commonFunctionObject.GMgetValue(this.localCacheName);
						cacheText = !cacheText ? "" : cacheText
						let maxLength = 12*500;
						let currentLength = cacheText.length;
						if(currentLength > maxLength){
							cacheText = cacheText.substring(12*100, currentLength);
						}
						if(cacheText.indexOf(bv)==-1){
							cacheText += bv;
							commonFunctionObject.GMsetValue(this.localCacheName, cacheText);
						}
						resolve({"result":"success"});
					});
				};
				this.searchPageRemindHtml = function($ele, top=8, right=8){
					if($ele.find("div[name='marklooked']").length==0){						
						$ele.css("position","relative");
						$ele.append("<div name='marklooked' style='z-index: 100;position:absolute; top:"+top+"px; right:"+right+"px; background-color: rgba(251,123,159,1); border-radius:3px; font-size:10px; color:#FFF;padding:0px 2px;'>已看</div>");
					}
				};
				this.searchPageRemind = function(){
					let $that = this;
					var elementArray = [
						{"node":".bili-video-card", "top":8, "right":12},  //兼容 MAC M1搜索结果
						{"node":"#page-index .small-item", "top":12, "right":12},  //用户投稿
						{"node":"#submit-video-list .small-item", "top":12, "right":12}, //用户主页
						{"node":"#page-series-detail .small-item.fakeDanmu-item", "top":12, "right":12}, //用户主页投稿
					];
					setInterval(function(){
						let cacheText = commonFunctionObject.GMgetValue($that.localCacheName);
						cacheText = !cacheText ? "" : cacheText;
						for(var i=0; i<elementArray.length; i++){
							var elementobj = elementArray[i];
							$(elementobj.node).each(function(){ //用户主页
								if($(this).attr("dealxll")!=="true"){
									var videourl = $(this).find("a[href^='//www.bilibili.com/video']").attr("href");
									if(!!videourl){
										if(cacheText.indexOf(videourl.split("?")[0].replace("//www.bilibili.com/video/",""))!=-1){
											$that.searchPageRemindHtml($(this), elementobj.top, elementobj.right);
										}
										$(this).unbind("click").bind("click", ()=>{  //循环操作，单独绑定
											$that.searchPageRemindHtml($(this), elementobj.top, elementobj.right);
										})
										$(this).attr("dealxll","true");
									}
								}
							});
						}
					}, 333);
				}
				this.start=function(){
					let $that = this;
					if(window.location.pathname.indexOf("/video")!=-1 && window.location.host==="www.bilibili.com"){
						let currentHref = "";
						setInterval(()=>{ //需要循环存储
							if(window.location.href!==currentHref){
								this.recordOneVideo();
								currentHref = window.location.href;
							}
						},150);
					}
					//搜索结果和用户主页已经看过的视频提醒
					if(window.location.host.indexOf("bilibili.com")!=-1){
						this.searchPageRemind();
						GM_registerMenuCommand("清空B站浏览记录",function(){
							if(confirm('是否要清空B站浏览记录？清空后将不可恢复...')){
								commonFunctionObject.GMsetValue($that.localCacheName, "");
							}
						});
					}
				};
			}
			try{
				(new innerClassRecordView()).start();
			}catch(e){
				console.log("innerClassRecordView"+e)
			}
		};
		this.start = function(){
			this.downloadVideoCoin();
			this.recordView();
		}
	}
	
	//国外的一些解析
	function abroadVideoHelper(){
		this.isRun = function(){
			var urls=["youtube.com", "facebook.com"];
			for(var i=0; i<urls.length;i++){
				if(window.location.host.indexOf(urls[i])!=-1){
					return true;
				}
			}
			return false;
		};
		this.start = function(){
			if(!this.isRun()){
				return;
			}
			setInterval(function(){
				const host = window.location.host;
				const href = window.location.href;
				const eleId = "free-xx1-player-script-9999";
				
				//youtube解析
				if(host.indexOf("youtube.com")!=-1){
					if(href.indexOf("youtube.com/watch")!=-1){
						if($("#"+eleId).length != 0){
							return;
						}
						$("#player-theater-container").css("z-index",9999999999); //修复全屏显示解析按钮的问题
						var iconVideo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADOUlEQVRoQ+2Zz4uNURjHP9+F8g8gykKJNJMUUmzMDKZmYVYsLBRhOaEmFhRRLCZDY4PBrJRREkUMmY3URCk/s6GMhR9ZWNk9OvXO7b133ve+57w/7szUnLqbe59fn/Oc85znnCvm+NAcj595gHgGzWwDsBZYDawEFgI/gT/AR0nDZWe8lAyYWTewF9iTEeA4MCTpblkghQHM7BxwPDCgAUn9gTqJ4oUAzOwKcChnICOS9uXUranlBjCza8CBggFclHSkiI1cAGbWBTwt4jim2y3pSV5bwQBmtgq4BazP67RB7w3gsvAX+CbpV4hdL4CoPG4H3KcjxEEOWVdyHwPjkq5m6WcCmNmFaIaybFXx+2vgsqSRNOOpAGa2GHhY4lIpAnha0qkkA4kAZuZO0k9FPFag2yHJHYR1Iw3gO7CsgiCKmPwMdEmajBuZBmBmbuMcLOKpQt1BSUdTAczMVZmQmjwtpTmC3xqo0ybpw5ROXQbMrA+45GtQUmYVy7JlZpYl0/B73YZuBAjqbWYI4KWkzWkZeBVSNuMAZua1FBorSY4MTEpangYQlM4EgOdZy6ExazkAiNtoXELvgLasIGr0sT0QZaAVAO8ltadlYBTYNcsB7kjanQZwHjg2ywGaViHXIruN7DVmYA+4lnudpC+JGXBfhlwTZwDAPQi4s6o2kloJ9yzyyKcXajGA64F6JL1tChBlwdX0oIrSgirUK+l+49pudh/IhGhhBvolDSRtzKa9jJktBdxrWk+icvXnwO3oIexFWlXJbMbMbAGwJQWg1o0WWEKpLUjSBcZ7CXnV0ZhQXoBQP/MAUzNgZu5Z8EbRGQT2S7qZ107mHmhmuIQnl2lXxFCQQgDRmTEGbAt1DIxJ2pFDr06lDIBFgDsdlwQE8wNol/Q7QCdRtDBAlIVO4FlAMJ2SMk96H3ulAEQQh4FBD6d9koY85LxESgOIIK67qtLE87CkUt+cSgWIICaAjQkQE5I2eU1rgFAVACsA9/Dk/qGcGv+ANZK+BsTmJVo6QJSFXuBeLIKdkh54RRQoVAlABHECOAOclHQ2MC5v8coAIojR+AuCd1QBgpUCBMSRW3QeIPfUlaT4H0/7RUAi2a/NAAAAAElFTkSuQmCC";
						var html='<div id="'+eleId+'" style="width:25px;padding:10px 0px;text-align:center;background-color:#E5212E;position:fixed;top:250px;left:0px;color:#FFF;font-size:0px;cursor:pointer;margin:0px auto;text-align:center;z-index:9999999;">'+
							'<img src="'+iconVideo+'" style="width:20px;">'+
							'</div>';
						$("body").append(html);
						$("body").on("click", "#"+eleId, function(){
							var location_url = window.location.href;
							var videourl = "https://www.ytdownfk.com/search?url="+location_url;
							commonFunctionObject.GMopenInTab(videourl, false);
						});
					}else{
						$("#"+eleId).remove();
					}
				}
				
				//facebook解析
				if(host.indexOf("facebook.com")!=-1){
					if(href.indexOf("facebook.com/watch")!=-1 || href.indexOf("/videos/")!=-1){
						if($("#"+eleId).length != 0){
							return;
						}
						var iconVideo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADOUlEQVRoQ+2Zz4uNURjHP9+F8g8gykKJNJMUUmzMDKZmYVYsLBRhOaEmFhRRLCZDY4PBrJRREkUMmY3URCk/s6GMhR9ZWNk9OvXO7b133ve+57w/7szUnLqbe59fn/Oc85znnCvm+NAcj595gHgGzWwDsBZYDawEFgI/gT/AR0nDZWe8lAyYWTewF9iTEeA4MCTpblkghQHM7BxwPDCgAUn9gTqJ4oUAzOwKcChnICOS9uXUranlBjCza8CBggFclHSkiI1cAGbWBTwt4jim2y3pSV5bwQBmtgq4BazP67RB7w3gsvAX+CbpV4hdL4CoPG4H3KcjxEEOWVdyHwPjkq5m6WcCmNmFaIaybFXx+2vgsqSRNOOpAGa2GHhY4lIpAnha0qkkA4kAZuZO0k9FPFag2yHJHYR1Iw3gO7CsgiCKmPwMdEmajBuZBmBmbuMcLOKpQt1BSUdTAczMVZmQmjwtpTmC3xqo0ybpw5ROXQbMrA+45GtQUmYVy7JlZpYl0/B73YZuBAjqbWYI4KWkzWkZeBVSNuMAZua1FBorSY4MTEpangYQlM4EgOdZy6ExazkAiNtoXELvgLasIGr0sT0QZaAVAO8ltadlYBTYNcsB7kjanQZwHjg2ywGaViHXIruN7DVmYA+4lnudpC+JGXBfhlwTZwDAPQi4s6o2kloJ9yzyyKcXajGA64F6JL1tChBlwdX0oIrSgirUK+l+49pudh/IhGhhBvolDSRtzKa9jJktBdxrWk+icvXnwO3oIexFWlXJbMbMbAGwJQWg1o0WWEKpLUjSBcZ7CXnV0ZhQXoBQP/MAUzNgZu5Z8EbRGQT2S7qZ107mHmhmuIQnl2lXxFCQQgDRmTEGbAt1DIxJ2pFDr06lDIBFgDsdlwQE8wNol/Q7QCdRtDBAlIVO4FlAMJ2SMk96H3ulAEQQh4FBD6d9koY85LxESgOIIK67qtLE87CkUt+cSgWIICaAjQkQE5I2eU1rgFAVACsA9/Dk/qGcGv+ANZK+BsTmJVo6QJSFXuBeLIKdkh54RRQoVAlABHECOAOclHQ2MC5v8coAIojR+AuCd1QBgpUCBMSRW3QeIPfUlaT4H0/7RUAi2a/NAAAAAElFTkSuQmCC";
						var html='<div id="'+eleId+'" style="width:25px;padding:10px 0px;text-align:center;background-color:#E5212E;position:fixed;top:250px;left:0px;color:#FFF;font-size:0px;z-index:9999999999999;cursor:pointer;margin:0px auto;text-align:center;">'+
							'<img src="'+iconVideo+'" style="width:20px;">'+
							'</div>';
						$("body").append(html);
						$("body").on("click", "#"+eleId, function(){
							var location_url = window.location.href;
							commonFunctionObject.GMsetValue("facebook_downloader_obj", {"facebook_url":location_url});
							commonFunctionObject.GMopenInTab("https://yt1s.com/facebook-downloader", false);
						});
					}else{
						$("#"+eleId).remove();
					}
				}
			}, 500);
			
			if(window.location.href.indexOf("yt1s.com/facebook-downloader")!=-1){ //facebook下载
				var facebookObject = commonFunctionObject.GMgetValue("facebook_downloader_obj");
				if(!!facebookObject){
					$("#s_input").val(facebookObject.facebook_url);
				}
			}
		}
	}
	
	//优惠券查询
	function queryCoupon(){
		this.isRun = function(){
			var urls=["detail.tmall.com", "item.taobao.com", "item.jd.com", "item.yiyaojd.com", "npcitem.jd.hk", "detail.tmall.hk"];
			for(var i=0; i<urls.length;i++){
				if(window.location.host.indexOf(urls[i])!=-1){
					return true;
				}
			}
			return false;
		}
		this.getPlatform = function(){
			let host = window.location.host;
			let platform = "";
			if(host.indexOf("detail.tmall")!=-1){
				platform = "tmall";
			}else if(host.indexOf("item.taobao.com")!=-1){
				platform = "taobao";
			}else if(host.indexOf("jd.com")!=-1 || host.indexOf("npcitem.jd.hk")!=-1){
				platform = "jd";
			}
			return platform;
		};
		this.filterStr = function(str){
			if(!str) return "";
			str = str.replace(/\t/g,"");
			str = str.replace(/\r/g,"");
			str = str.replace(/\n/g,"");
			str = str.replace(/\+/g,"%2B");//"+"
			str = str.replace(/\&/g,"%26");//"&"
			str = str.replace(/\#/g,"%23");//"#"
			return encodeURIComponent(str)
		};
		this.getParamterQueryUrl = function(tag) { //查询GET请求url中的参数
			var t = new RegExp("(^|&)" + tag + "=([^&]*)(&|$)");
			var a = window.location.search.substr(1).match(t);
			if (a != null){
				return a[2];
			}
			return "";
		};
		this.getEndHtmlIdByUrl = function(url) { //获得以html结束的ID
			if(url.indexOf("?")!=-1){
				url = url.split("?")[0]
			}
			if(url.indexOf("#")!=-1){
				url = url.split("#")[0]
			}
			var splitText = url.split("/");
			var idText = splitText[splitText.length-1];
			idText = idText.replace(".html","");
			return idText;
		};
		this.getGoodsData = function(platform){
			var goodsId = "";
			var goodsName = "";
			var href = window.location.href;
			if(platform=="taobao"){
				goodsId = this.getParamterQueryUrl("id");
				goodsName=$(".tb-main-title").text();

			}else if(platform=="tmall"){
				goodsId = this.getParamterQueryUrl("id");
				goodsName=$(".tb-detail-hd").text();

			}else if(platform=="jd"){
				goodsName=$("div.sku-name").text();
				goodsId = this.getEndHtmlIdByUrl(href);

			}
			var data={"goodsId":goodsId, "goodsName":this.filterStr(goodsName)}
			return data;
		};
		this.randomSpmValue=function(){
			$("meta[name='data-spm']").each(function(){
				var max = 5000;
				var min = 1000;
				var randomValue = Math.floor(Math.random() * (max - min + 1) ) + min;
				var randomLetter = String.fromCharCode(Math.floor( Math.random() * 26) + "a".charCodeAt(0));
				$(this).attr("content", randomValue+randomLetter);
			});
			$("meta[name='spm-id']").each(function(){
				var max = 5000;
				var min = 1000;
				var randomValue = Math.floor(Math.random() * (max - min + 1) ) + min;
				var randomLetter = String.fromCharCode(Math.floor( Math.random() * 26) + "a".charCodeAt(0));
				$(this).attr("content", randomValue+randomLetter);
			});
		};
		this.runAliDeceptionSpm=function() {
			if(window.location.host.indexOf("aliyun.com")!=-1 || window.location.host.indexOf("taobao.com")!=-1 || window.location.host.indexOf("tmall.com")!=-1){
				this.randomSpmValue();
				setInterval(()=>{
					this.randomSpmValue();
				}, 4000);
			}
		};
		this.request = function(mothed, url, param){
			return new Promise(function(resolve, reject){
				GM_xmlhttpRequest({
					url: url,
					method: mothed,
					data:param,
					onload: function(response) {
						var status = response.status;
						var playurl = "";
						if(status==200||status=='200'){
							var responseText = response.responseText;
							resolve({"result":"success", "json":responseText});
						}else{
							reject({"result":"error", "json":null});
						}
					}
				});
			})
		};
		this.createCouponHtml = function(platform, goodsId, goodsName){
			if(!platform || !goodsId) return;
			var goodsCouponUrl = "http://tt.shuqiandiqiu.com/api/coupon/discover?no=5&v=1.0.2&pl="+platform+"&id="+goodsId+"&qu="+goodsName;
			var goodsPrivateUrl = "http://tt.shuqiandiqiu.com/api/private/change/coupon?no=5&v=1.0.2&platform="+platform+"&id=";

			this.request("GET", goodsCouponUrl, null).then((resutData)=>{
				if(resutData.result==="success" && !!resutData.json){
					var data = JSON.parse(resutData.json).data;
					if(!data || data==="null" || !data.css || !data.html || !data.handler){
						return;
					}
					var cssText = data.css;
					var htmlText = data.html;
					var handler = data.handler;
					var templateId = data.templateId;
					if(!cssText || !htmlText || !handler){
						return;
					}
					$("body").prepend("<style>"+cssText+"</style>");
					
					var handlers = handler.split("@");
					for(var i=0; i<handlers.length; i++){
						var $handler = $(""+handlers[i]+"");
						if(platform=="taobao"){
							$handler.parent().after(htmlText);
						}else if(platform=="tmall"){
							$handler.parent().after(htmlText);
						}else if(platform=="jd"){
							$handler.after(htmlText);
						}
					}
					var $llkk = $("#"+templateId);
					if($llkk.length != 0){
						let couponElementA = $llkk.find("a[name='cpShUrl']");
						couponElementA.unbind("click").bind("click", ()=>{
							event.stopPropagation();
							event.preventDefault();
							let couponId = $llkk.data("id");
							if(!!couponId){
								this.request("GET", goodsPrivateUrl+couponId, null).then((resutData2)=>{
									if(resutData2.result==="success" && !!resutData2.json){
										let url = JSON.parse(resutData2.json).url;
										if(!!url) GM_openInTab(url, {active:true});
									}
								});
							}
						});
						setInterval(()=>{
							$llkk.find("*").each(function(){
								$(this).removeAttr("data-spm-anchor-id")
							});
						},100);
						
						//canvas画二维码
						var $canvasElement = $("#ca"+templateId);
						if($canvasElement.length != 0){
							let couponId = $llkk.data("id");
							this.request("GET", goodsPrivateUrl+couponId, null).then((resutData2)=>{
								if(resutData2.result==="success" && !!resutData2.json){
									let img = JSON.parse(resutData2.json).img;
									if(!!img){
										var canvasElement = document.getElementById("ca"+templateId);
										var cxt = canvasElement.getContext("2d");
										var imgData = new Image();
										imgData.src = img;
										imgData.onload=function(){
											cxt.drawImage(imgData, 0, 0, imgData.width, imgData.height);
										}
									}
								}
							});
						}
						
					}
				}
			});
		};
		this.start = function(){
			if(this.isRun()){				
				var platform = this.getPlatform();
				if(!!platform){
					var goodsData = this.getGoodsData(platform);
					this.createCouponHtml(platform, goodsData.goodsId, goodsData.goodsName);
				}
			}
			this.runAliDeceptionSpm();
		};
	}
	
	/**
	 * 全网音乐解析下载
	 */
	function superMusicHelper(){
		this.eleId = Math.ceil(Math.random()*100000000);
		this.isRun = function(){
			var urls=["music.163.com","y.qq.com","www.kugou.com","www.kuwo.cn","www.xiami.com","music.taihe.com","music.migu.cn","lizhi.fm","qingting.fm","ximalaya.com"];
			for(var i=0; i<urls.length;i++){
				if(window.location.host.indexOf(urls[i])!=-1){
					return true;
				}
			}
			return false;
		};
		this.getPlayUrl = function(){
			var currentHost = window.location.host;
			var currentUrl = window.location.href;
			var playUrl = null;
			if(currentUrl.match(/music\.163\./)){ //网易云音乐
				if(currentUrl.match(/^https?:\/\/music\.163\.com\/#\/(?:song|dj)\?id/)) {
					playUrl = 'https://music.liuzhijin.cn/?url='+encodeURIComponent(currentUrl);
				}else if(currentUrl.match(/^https?:\/\/y\.music\.163\.com\/m\/(?:song|dj)\?id/)) {
					playUrl = 'https://music.liuzhijin.cn/?url='+encodeURIComponent('https://music.163.com/song?id='+getQueryString('id'));
				}
			}
			else if(currentUrl.match(/y\.qq\.com/)){ //QQ音乐
				if(currentUrl.indexOf("?")) currentUrl = currentUrl.split("?")[0];
				if(currentUrl.indexOf("#")) currentUrl = currentUrl.split("#")[0];
				var musicMatch = currentUrl.match(/^https?:\/\/y\.qq\.com\/n\/ryqq\/songDetail\/(\S*)/);
				if(musicMatch){
					playUrl = 'https://music.liuzhijin.cn/?id='+musicMatch[1]+'&type=qq'
				}
				var musicMatch2 = currentUrl.match(/^https?:\/\/y\.qq\.com\/n\/yqq\/song\/(\S*).html/);
				if(musicMatch2){
					playUrl = 'https://music.liuzhijin.cn/?id='+musicMatch2[1]+'&type=qq';
				}
			}
			else if(currentUrl.match(/kugou\.com/)){ //酷狗
				var musicMatch = currentUrl.match(/hash=(\S*)&album/);
				if(musicMatch){
					playUrl = 'https://music.liuzhijin.cn/?id='+musicMatch[1]+'&type=kugou';
				}
			}
			else if(currentUrl.match(/kuwo\.cn/)){  //酷我
				if(currentUrl.indexOf("?")) currentUrl = currentUrl.split("?")[0];
				if(currentUrl.indexOf("#")) currentUrl = currentUrl.split("#")[0];
				var musicMatch = currentUrl.match(/play_detail\/(\S*)/);
				if(musicMatch){
					playUrl = 'https://music.liuzhijin.cn/?id='+musicMatch[1]+'&type=kuwo';
				}
			}
			else if(currentUrl.match(/www\.ximalaya\.com/)){ //喜马拉雅
			    var xmlyUrlArr = currentUrl.split("/");
			    for(var xuaIndex =0;xuaIndex<xmlyUrlArr.length;xuaIndex++){
			        if(xuaIndex==xmlyUrlArr.length-1){
						playUrl = 'https://music.liuzhijin.cn/?id='+xmlyUrlArr[xuaIndex]+'&type=ximalaya&playUrl='+encodeURIComponent(currentUrl);
			        }
			    }
			}
			else if(currentUrl.match(/www\.lizhi\.fm/)){ //荔枝音乐
				if(currentUrl.indexOf("?")) currentUrl = currentUrl.split("?")[0];
				if(currentUrl.indexOf("#")) currentUrl = currentUrl.split("#")[0];
				var musicMatch = currentUrl.match(/^https?:\/\/www\.lizhi\.fm\/(\d*)\/(\d*)/);
				if(musicMatch){
					playUrl = 'https://music.liuzhijin.cn/?id='+musicMatch[2]+'&type=lizhi';
				}
			}
			else if(currentUrl.match(/music\.migu\.cn/)){ //咪咕音乐
				if(currentUrl.indexOf("?")) currentUrl = currentUrl.split("?")[0];
				if(currentUrl.indexOf("#")) currentUrl = currentUrl.split("#")[0];
				var musicMatch = currentUrl.match(/^https?:\/\/music\.migu\.cn\/v3\/music\/song\/(\S*)/);
				if(musicMatch){
					playUrl = 'https://music.liuzhijin.cn/?id='+musicMatch[1]+'&type=migu';
				}
			}
			return playUrl;
		};
		this.addStyle=function(){
			var innnerCss = 
			"@keyframes turnaround{0%{-webkit-transform:rotate(0deg);}25%{-webkit-transform:rotate(90deg);}50%{-webkit-transform:rotate(180deg);}75%{-webkit-transform:rotate(270deg);}100%{-webkit-transform:rotate(360deg);}}"+
			"#plugin_kiwi_analysis_vip_music_box_"+this.eleId+" {position:fixed; top:150px; left:0px; width:26px; background-color:#E5212E;z-index:9999999899999;}"+
			"#plugin_kiwi_analysis_vip_music_box_"+this.eleId+" >.plugin_item{cursor:pointer; width:100%; padding:10px 0px; text-align:center;}"+
			"#plugin_kiwi_analysis_vip_music_box_"+this.eleId+" >.plugin_item >img{width:20px; display:inline-block; vertical-align:middle;animation:turnaround 4s linear infinite;}";
			$("body").prepend("<style>"+innnerCss+"</style>");
		};
		this.generateHtml=function(){
			var $that = this;
			var html="";
			var vipImgBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADJklEQVRYR6WXS6hOURTHf/8wux4TMZCBxwApJRSKXG8uGbieKQYGXpEMKLkGGFCURyEDJHFL6cr1uF4DlDJATDwGBnKVtzJAS0v7u53vfPvcc75j1e57nL3X+u2193ocUVDMrB8wFZgCjAcGhOEaOsN4BNwD7kr6UkS1ikwys2ZgHzCkyHzgDbBd0sW8+d0CmFmPYHhbnqKM5/sDyJ+s9ZkAZjYNuFXScHpZo6TbMV1RgODyCyWN3wGuhPEVmAecApbEjqQGwMx6Ar/qMP45GLsO3JT0Ib3WzCz810vS7+TzGMBVYE4OwHfgjBsEbkj62d38BEC7pLmZAGa2DjiaY/wGsE3S06JeSgD4kvWSjlXWdnnAzPoAz4DBOYqbJPkZF5YUwFtgtKRvriAJMAu4lqdVUl7oDgeawjgmqTUF4CZmS/I7UwWw12O2DICZTQbmA76JMQkduyW1RAD2SdqRBrgPTCwKYGZ+UWcGoyMy1mUBPJA0KQ3wChhaBMDM1gLH8+YCWQCvJQ1LA3hoNeQp9TtgZi3Arry5QIuk3ZEj+CGpdxrgfaK6ZequEyDLA52SBqYBPKlMz9tVDoAnpJfAp6DHy3LMAx2SZqQBDgKb/wPgOdAs6UVFh5k1SPoROYJDkrakAYpkQTI8UGM8uZEIQFc2TCYid78fQ1K809kDeA73KPknkUu4UdKRmPfMrD+QLlAzJHVUeSAoPgcsD4p8V8tjOT8C4K5vzQDYABxOPGuTtKDyuyqtmtk44CHgndBkSZ6caiQC0A5sSnopbGgxkG7LqmpJrBwfALZ2l/PN7DLQtYtA+A44Gb73Df1jek7V7muOIFAPArxQrI15wMyWAufzoiXy3BuRRelKmtWSjQQueUMq6XQAGwt4pKwpYfwjsFJSTbXtril1CD+/USUMJpd4i74q6z7l1XaH8DK9sCREG7BT0pOs9UVfTBqB1cCKgiBu+ESRzqkQQCIBTfAIATy8YvI4VMDCLVtdAAkQ7wW8J0jKWUmrCnqoa1opgBAVfkErnmiV5O+Pdcv/AHhDUal8IyV5Q1O3lAYIXljmn5LKJKZ/sH8B8jdXMDutk64AAAAASUVORK5CYII=";
			html+= "<div id='plugin_kiwi_analysis_vip_music_box_"+this.eleId+"'>";
			html+= "<div class='plugin_item jump_analysis_website' title='点我VIP音乐破解，免客户端下载！'><img src='"+vipImgBase64+"'></div>";
			html+= "</div>";
			$("body").append(html);
			
			$("#plugin_kiwi_analysis_vip_music_box_"+this.eleId+"").on("click", function(){
				var playUrl = $that.getPlayUrl();
				if(!!playUrl) GM_openInTab(playUrl, false);
			})
		};
		this.operation=function(){
			var $that = this;
			setInterval(function(){
				var playUrl = $that.getPlayUrl();
				var $vipMusicBox = $("#plugin_kiwi_analysis_vip_music_box_"+$that.eleId+"");
				if(!!playUrl){
					if($vipMusicBox.length==0){
						$that.generateHtml();
					}
				}else{
					$vipMusicBox.remove();
				}
			}, 100);
		};
		this.start=function(){
			if(this.isRun()){				
				this.addStyle();
				this.operation();
			}
		};
	}
	
	/**
	 * 来搜一下，网盘搜索引擎无线下载
	 */
	function wangpanSearchEnginesHelper(){
		this.start = function(){
			let $that = this, host = window.location.host;
			if(host==="www.laisoyixia.com" || host==="www.xiaozhukuaipan.com"){
				var $downloadBtn = $("#downloadHandler");
				var downloadurl = $downloadBtn.data("downloadurl");
				if(!!downloadurl){
					var wangpanUrl = window.atob(downloadurl);
					$downloadBtn.after("<div style='padding:15px;background-color:#eee;margin-top:15px;'>插件提取所得：<a target='_blank' href='"+wangpanUrl+"'>"+wangpanUrl+"</a></div>")
				}
			}
		}
	}
	
	/**
	 * 搜索引擎资源提醒
	 */
	function searchEnginesNavigation(){
		this.searchEnginesData=[
			{"host":"www.baidu.com", "element":"#content_right","elementInput":"#kw"},
			{"host":"www.so.com", "element":"#side","elementInput":"#keyword"},
			{"host":"www.sogou.com", "element":"#right","elementInput":"#upquery"},
			{"host":"cn.bing.com", "element":"#b_context","elementInput":"#sb_form_q"},
			{"host":"www.bing.com", "element":"#b_context","elementInput":"#sb_form_q"},
			{"host":"www4.bing.com", "element":"#b_context","elementInput":"#sb_form_q"},
			{"host":"so.toutiao.com", "element":".s-side-list","elementInput":"input[type='search']"},
			{"host":"www.google.com", "element":"#rhs","elementInput":"input[type='text']"}
		];
		this.getNavigationData = function(element, elementInput){
			const navigationData = [
				{"name":"资源搜索","list":[
					{"name":"书签搜索", "url":"https://www.bookmarkearth.com/s/search?q=@@&currentPage=1"},
					{"name":"网盘搜索", "url":"https://www.xiaozhukuaipan.com/s/search?q=@@&currentPage=1"},
					{"name":"财经搜索", "url":"https://www.shaduizi.com/s/search?q=@@&currentPage=1"},
					{"name":"百度百科", "url":"https://baike.baidu.com/item/@@"},
					{"name":"知乎搜索", "url":"https://www.zhihu.com/search?type=content&q=@@"},
					{"name":"B站搜索", "url":"https://search.bilibili.com/all?keyword=@@&from_source=webtop_search&spm_id_from=333.851"},
					{"name":"抖音搜索", "url":"https://www.douyin.com/search/@@?aid=0a9fc74b-01e8-4fb0-9509-307c5c07fda1&publish_time=0&sort_type=0&source=normal_search&type=general"},
					{"name":"搜狗|公众号", "url":"https://weixin.sogou.com/weixin?type=2&query=@@"},
					{"name":"搜狗|知乎", "url":"https://www.sogou.com/sogou?pid=sogou-wsse-ff111e4a5406ed40&insite=zhihu.com&ie=utf8&p=73351201&query=@@&ie=utf8&p=73351201&query=@@"},
					{"name":"豆瓣搜索", "url":"https://www.douban.com/search?q=@@"},
					{"name":"电影搜索", "url":"https://www.cupfox.com/search?key=@@"},
					{"name":"维基百科", "url":"https://en.wikipedia.org/w/index.php?search=@@"},
					{"name":"法律法规", "url":"https://www.pkulaw.com/law/chl?Keywords=@@"},
					{"name":"PPT搜索", "url":"https://www.chuliansheji.com/s/search?q=@@&currentPage=1&c=1"},
					{"name":"icon搜索", "url":"https://www.iconfont.cn/search/index?searchType=icon&q=@@"},
					{"name":"github", "url":"https://github.com/search?q=@@"},
					{"name":"csdn", "url":"https://so.csdn.net/so/search?q=@@&t=&u="},
					{"name":"手机用油猴", "url":"https://blog.csdn.net/haoning7788/article/details/125344294"}
				]},
				{"name":"搜索引擎","list":[
					{"name":"百度", "url":"https://www.baidu.com/s?wd=@@"},
					{"name":"必应", "url":"https://cn.bing.com/search?q=@@"},
					{"name":"Google", "url":"https://www.google.com/search?q=@@"},
					{"name":"360搜索", "url":"https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&nlpv=basest&q=@@"},
					{"name":"搜狗", "url":"https://www.sogou.com/web?query=@@"},
					{"name":"头条搜索", "url":"https://so.toutiao.com/search?dvpf=pc&source=input&keyword=@@"}
				]}
			];
			const $that = this;
			const cacheNavigationData =  commonFunctionObject.GMgetValue("navigation_data_cache",null);
			if(!!cacheNavigationData){
				$that.createHtml(element, elementInput, cacheNavigationData);
			}else{
				$that.createHtml(element, elementInput, navigationData);
			}
			//判断值是否有变动，如果有变动就更新换存，简单处理，长度是否一致
			commonFunctionObject.request("get", "http://api.staticj.top/script/api/get/navigation_json_url", null).then((resultData)=>{
				let dataJson = JSON.parse(resultData.data);
				if(!!dataJson && !!dataJson.url){
					commonFunctionObject.request("get", dataJson.url, null).then((resultData2)=>{
						let serverNavigationData = resultData2.data;
						if(!cacheNavigationData || (!!cacheNavigationData && serverNavigationData.length!=JSON.stringify(cacheNavigationData).length)){
							commonFunctionObject.GMsetValue("navigation_data_cache", JSON.parse(serverNavigationData));
						}
					}).catch(()=>{});
				}
			}).catch(()=>{});
		};
		this.createCss = function(elementNum){
			var innnerCss = `
				.ddfdfd`+elementNum+`dffssqa{
					margin-top:15px;
				}
				.ddfdfd`+elementNum+`dffssqa:nth-last{
					margin-top:0px;
				}
				.ddfdfd`+elementNum+`dffssqa>.title{
					font-size:16px;
				}
				.ddfdfd`+elementNum+`dffssqa>.content-list{
					
				}
				.ddfdfd`+elementNum+`dffssqa>.content-list>a{
					display:inline-block;
					width:calc(25% - 16px);
					border:1px solid #ccc;
					border-radius:4px;
					text-align:center;
					margin-right:15px;
					margin-top:6px;
					overflow: hidden;
					white-space: nowrap;
					text-overflow:ellipsis;
					padding:2px;
					box-sizing:border-box;
					font-size:13px;
					line-height:20px;
				}
				.ddfdfd`+elementNum+`dffssqa>.content-list>a:nth-child(4n){
					margin-right:0px;
				}
			`;
			if($("#plugin_css_style_dddsoo").length==0){
				$("body").prepend("<style id='plugin_css_style_dddsoo'>"+innnerCss+"</style>");
			}
		};
		this.createHtml = function(element, elementInput, navigationData){
			$("#dsdsd99mmmjj7760011").remove();
			
			var isComplate = true;
			const host = window.location.host;
			const self = this;
			const elementNum = commonFunctionObject.randomNumber();
			const elementInterval = setInterval(function(){
				if(isComplate){
					var $element = $(element);
					var $box = $("#dsdsd99mmmjj7760011");
					isComplate = false;
					if($element.length!=0 && $box.length==0){
						var html = "";
						html  += "<div id='dsdsd99mmmjj7760011'>";
						for(var i=0; i<navigationData.length; i++){
							html  += "<div class='ddfdfd"+elementNum+"dffssqa'>";
							html  += "<div class='title'><b>"+navigationData[i].name+"</b></div>";
							html  += "<div class='content-list'>";
							for(var j=0;j<navigationData[i].list.length;j++){
								let url = navigationData[i].list[j].url;
								let name = navigationData[i].list[j].name;
								if(url.indexOf(host)!=-1){
									continue;
								}
								html += "<a target='_blank' data-url='"+url+"' href='javascript:void(0);'>"+name+"</a>"				
							}
							html += "</div>";
							html += "</div>";
						}
						html += "<div style='margin-bottom:10px;margin-top:5px;font-size:12px;'><a target='_blank' href='https://greasyfork.org/zh-CN/scripts/418804'>*该数据由油猴脚本提供</a></div>";
						html += "</div>";
						
						//添加css 添加html
						self.createCss(elementNum);
						$element.prepend(html);
						
						$("#dsdsd99mmmjj7760011 a").on("click", function(e){
							commonFunctionObject.GMopenInTab($(this).data("url").replace("@@",$(elementInput).val()),false);
							e.preventDefault()
						});
					}
					isComplate = true;
				}
			}, 100);			
		};
		this.show = function(){
			const self = this;
			const host = window.location.host;
			const href = window.location.href;
			if((host==="www.baidu.com")
				|| (host==="www.so.com" && href.indexOf("www.so.com/s")!=-1)
				|| (host==="www.sogou.com" && (href.indexOf("www.sogou.com/web")!=-1 || href.indexOf("www.sogou.com/sogou")!=-1))
				|| (host==="cn.bing.com" && href.indexOf("cn.bing.com/search")!=-1)
				|| (host==="www.bing.com" && href.indexOf("www.bing.com/search")!=-1)
				|| (host==="www4.bing.com" && href.indexOf("www4.bing.com/search")!=-1)
				|| (host==="so.toutiao.com" && href.indexOf("so.toutiao.com/search")!=-1)
				|| (host==="www.google.com" && href.indexOf("www.google.com/search")!=-1)){
				let currentSearchEnginesData = null;
				for(var i=0; i<self.searchEnginesData.length; i++){
					if(host===self.searchEnginesData[i].host){
						currentSearchEnginesData = self.searchEnginesData[i];
					}
				}
				if(currentSearchEnginesData!=null){
					self.getNavigationData(currentSearchEnginesData.element, currentSearchEnginesData.elementInput);
				}
			}
		};
		this.start = function(){
			this.show();
		};
	}
	
	/**
	 * 知乎助手开始
	 */
	////**********************************************
	//本脚本部分代码借鉴自【人鬼情未了】的脚本，已经获得原作者的完全授权，脚本代码可以随意修改使用，特此申明！
	////【人鬼情未了】脚本名字：知乎网页助手
	////【人鬼情未了】脚本地址：https://greasyfork.org/zh-CN/scripts/384172
	////本脚本做出的修改：重构了部分逻辑
	////**********************************************
	function zhihuHelper(){
		this.markArticleOrQuestion = function(){
			var questionsCss = `
				.AnswerItem .ContentItem-title a::before {
				    content: '问题';
				    color: #f68b83;
				    background-color: #f68b8333;
				    font-weight: bold;
				    font-size: 13px;
				    padding: 1px 4px 0px;
				    border-radius: 2px;
				    display: inline-block;
				    vertical-align: middle;
				    margin: 0px 4px 0px 0px;
				}
				.ArticleItem .ContentItem-title a::before {
				    content: '文章';
				    color: #0066FF;
				    background-color: #E5EFFF;
				    font-weight: bold;
				    font-size: 13px;
				    padding: 1px 4px 0;
				    border-radius: 2px;
				    display: inline-block;
				    vertical-align: middle;
				    margin: 0px 4px 0px 0px;
				}
				.ZvideoItem .ContentItem-title a::before {
					content:'视频';
					color: #00BCD4;
					background-color: #00BCD433;
					font-weight: bold;
					font-size: 13px;
					padding: 1px 4px 0;
					border-radius: 2px;
					display: inline-block;
					vertical-align: middle;
					margin: 0px 4px 0px 0px;
				}
				.TopstoryItem--advertCard{
					text-decoration:line-through;
				}
			`;
			commonFunctionObject.GMaddStyle(questionsCss);
		}
		this.autoJumpTarget = function(){
			var regexResult = location.search.match(/target=(.+?)(&|$)/);
			if(regexResult && regexResult.length==3){
				location.href = decodeURIComponent(regexResult[1]);
			}
		};
		this.markQuestionDate = function(){
			/**
			 * @param {Object} time
			 * @param {Object} format
			 * 时间格式化
			 * DateFormat(new Date(dateCreated), "yyyy-MM-dd hh:mm:ss")
			 */
			function DateFormat(time, format) {  //
			    var o = {
			        "M+": time.getMonth() + 1, //月份 
			        "d+": time.getDate(), //日 
			        "h+": time.getHours(), //小时 
			        "m+": time.getMinutes(), //分 
			        "s+": time.getSeconds(), //秒 
			        "q+": Math.floor((time.getMonth() + 3) / 3), //季度 
			        "S": time.getMilliseconds() //毫秒 
			    };
			    if(/(y+)/.test(format)){
					format = format.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
				}
			    for(var k in o){
			        if(new RegExp("(" + k + ")").test(format)){
			            format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
					}
				}
			    return format;
			}
			
			/**
			 * 为问题添加创建时间和编辑时间
			 */
			function addDateQuestion() {
				var title = document.querySelector(".QuestionPage");
				if(!!title){
					var dateCreated = title.querySelector("[itemprop~=dateCreated][content]").content;
					var dateModified = title.querySelector("[itemprop~=dateModified][content]").content;
					var createDate = DateFormat(new Date(dateCreated), "yyyy-MM-dd hh:mm:ss");
					var editDate = DateFormat(new Date(dateModified), "yyyy-MM-dd hh:mm:ss");
					
					var side = title.querySelector(".QuestionHeader-side");
					var timeDiv = document.createElement('div');
					timeDiv.innerHTML = `<p>创建于:&nbsp;${createDate}</p><p>编辑于:&nbsp;${editDate}</p>`;
					timeDiv.style.cssText = 'color:#6f6f6f;font-size:13px;';
					side.appendChild(timeDiv);
				}
			}
			
			/**
			 * 为回答添加创建时间和编辑时间
			 */
			function addTimeAnswerItems() {
				var list = document.querySelectorAll(".AnswerItem");
				for (var i = 0; i < list.length; i++) {
					var item = list[i];
					if (item.getAttribute('zh_date_mk') === 'true') {
						continue;
					}
					item.setAttribute('zh_date_mk', 'true');
					try{					
						var dateCreated = item.querySelector("[itemprop~=dateCreated][content]").content;
						var dateModified = item.querySelector("[itemprop~=dateModified][content]").content;
						var createDate = DateFormat(new Date(dateCreated), "yyyy-MM-dd hh:mm:ss");
						var editDate = DateFormat(new Date(dateModified), "yyyy-MM-dd hh:mm:ss");
			 
						var sideItem = item.querySelector(".ContentItem-meta");
						var timeDiv = document.createElement('div');
						timeDiv.innerHTML = `创建于:&nbsp;${createDate}&nbsp;&nbsp;&nbsp;编辑于:&nbsp;${editDate}`;
						timeDiv.class = "Voters";
						timeDiv.style.cssText = 'color:#6f6f6f;font-size:13px;display:block;padding:5px 0px;';
						sideItem.appendChild(timeDiv);
					}catch(e){}
				}
			}
			addDateQuestion();
			setInterval(function(){ //循环检查回答和修改时间
				addTimeAnswerItems();
			},400);
		};
		this.showQuestionAuthor = function(){
			//此处代码借鉴自 - 知乎增强
			//原作者：X.I.U
			//https://greasyfork.org/zh-CN/scripts/419081-%E7%9F%A5%E4%B9%8E%E5%A2%9E%E5%BC%BA
			if (document.querySelector('.BrandQuestionSymbol, .QuestionAuthor')) return
			let qJson = JSON.parse(document.querySelector('#js-initialData').textContent).initialState.entities.questions[/\d+/.exec(location.pathname)[0]].author,
				html = `<div class="BrandQuestionSymbol"><a class="BrandQuestionSymbol-brandLink" href="/people/${qJson.urlToken}"><img role="presentation" src="${qJson.avatarUrl}" class="BrandQuestionSymbol-logo" alt=""><span class="BrandQuestionSymbol-name">${qJson.name}</span></a><div class="BrandQuestionSymbol-divider" style="margin-left: 5px;margin-right: 10px;"></div></div>`;
			document.querySelector('.QuestionHeader-topics').insertAdjacentHTML('beforebegin', html);
		};
		this.autoHeightQualityPic = function(){
			setInterval(function(){
				$("body").find("img").each(function(){
					var dataoriginal = $(this).attr("data-original");
					if(!!dataoriginal){
						$(this).attr("src", dataoriginal);
					}
				});
			}, 500);
		};
		this.downloadVideo = function(){
			let downloadElementClassName = "zhihu_helper_666wwi1";
			//有借鉴懒哈哈的脚本
			//脚本地址：https://greasyfork.org/zh-CN/scripts/370634
			document.addEventListener('DOMNodeInserted',(e) => {
				if(!e.relatedNode.querySelector) return;
				var playBar = e.relatedNode.querySelector(':scope > div:last-child > div:first-child > div:nth-of-type(2)');
				if(!playBar || playBar.querySelector('.'+downloadElementClassName)) return;
				var playBut = playBar.querySelector(':scope > div:last-child');
				if(!playBut) return;
				var playButLi = playBut.querySelector('div:first-child');
				if(!playButLi) return;
				var downloadBut = playButLi.cloneNode(true);
				downloadBut.className = playButLi.className + ' ' + downloadElementClassName;
				if(!downloadBut.querySelector('._1tg8oir')) return;
				downloadBut.querySelector('._1tg8oir').innerText='下载';
				playButLi.before(downloadBut);
				
				downloadBut.addEventListener("click",function(){
					let playUrl = document.querySelector("video").getAttribute("src");
					if(!!playUrl){
						commonFunctionObject.GMopenInTab(playUrl, false);
					}
				});
			});
			
		};
		this.start = function(){
			const host = window.location.host;
			const self = this;
			if(host == "link.zhihu.com"){ 
				this.autoJumpTarget();
			}
			if(host.indexOf("zhihu.com")!=-1){
				if(window.location.href.indexOf("www.zhihu.com/question/")!=-1){
					this.markQuestionDate();   //问题日期
					this.showQuestionAuthor(); //提问者标识出来
				}
				this.markArticleOrQuestion();  //标识文章还是提问
				this.autoHeightQualityPic();   //自动高清图
				
				//知乎视频下载
				this.downloadVideo();
				window.onload=function(){
					self.downloadVideo();
				}
				window.onscroll=function(){
					var scrollTop = document.documentElement.scrollTop; 
					if(scrollTop > 200){ 
					    self.downloadVideo();
					}
				}
			}
		};
	}
		
	//最后统一调用
	try{
		if(functionController.superVideoHelper){
			const superVideoHelperObject = new superVideoHelper(newOriginalInterfaceList);
			if(superVideoHelperObject.isRun()){
				if(commonFunctionObject.GMgetValue("copyright_video_remind",null)==="true"){
					superVideoHelperObject.start();
				}else{
					var r=confirm(
						"脚本运行提醒！！！\u000d"+
						"1、VIP视频解析中所用到的解析接口全部收集自互联网（源码可见），版权问题请联系相关解析接口所有者！\u000d"+
						"2、为创造良好的创作氛围，请大家支持正版！\u000d"+
						"3、脚本仅限个人学习交流，切勿用于任何商业等其它用途！\u000d"+
						"4、继续使用，即表明你已经明确使用脚本可能带来的风险，且愿意自行承担相关风险，对于风险脚本不承担任何责任！\u000d"+
						"5、此提醒只弹出一次，确认后，后续将不在弹出，请知悉！"
					);
					if(r==true){
						commonFunctionObject.GMsetValue("copyright_video_remind","true");
						superVideoHelperObject.start();
					}
				}
			}
			
			(new superVideoHelperMobile(newOriginalInterfaceList)).start();
		}
	}catch(e){
		console.log("全网VIP解析：error："+e);
	}
	
	try{
		if(functionController.abroadVideoHelper){
			(new abroadVideoHelper()).start();
		}
	}catch(e){
		console.log("国外视频解析：error："+e);
	}
	
	try{
		(new queryCoupon()).start();
	}catch(e){
		console.log("优惠券查询：error："+e);
	}
	
	try{
		if(functionController.superMusicHelper){
			(new superMusicHelper()).start();
		}
	}catch(e){
		console.log("全网音乐下载：error："+e);
	}
	
	try{
		if(functionController.bilibiliHelper){
			new bilibiliHelper(commonFunctionObject).start();
		}
	}catch(e){
		console.log("B站视频下载：error："+e);
	}
	
	try{
		if(functionController.wangpanSearchEnginesHelper){
			new wangpanSearchEnginesHelper(commonFunctionObject).start();
		}
	}catch(e){
		console.log("网盘搜索引擎破解：error："+e);
	}
	
	try{
		if(functionController.searchEnginesNavigation){
			new searchEnginesNavigation(commonFunctionObject).start();
		}
	}catch(e){
		console.log("搜索引擎导航：error："+e);
	}
	
	try{
		if(functionController.zhihuHelper){
			new zhihuHelper(commonFunctionObject).start();
		}
	}catch(e){
		console.log("知乎助手：error："+e);
	}
})();
