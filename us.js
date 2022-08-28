
`
🤖 本脚本转换自：https://greasyfork.org/scripts/435698-全网vip视频自动解析播放器-已适配手机/code/全网VIP视频自动解析播放器(已适配手机).user.js。
😎 转换器 by Peng-YM。TG频道: https://t.me/cool_scripts

🔘 [功能]
无需跳转新网址，打开官网直接看，超清 无广告 随机去水印。支持：腾讯，爱奇艺，优酷，哔哩哔哩，咪咕，乐视，搜狐，芒果，西瓜，PPTV，1905电影网，华数。支持解析失败自动切换推荐解析源。适配各种浏览器，酷睿i5-8300 CPU性能测试消耗仅1%。

🛠 [配置]
请根据下方描述设置MITM域名和重写。❗️由于脚本是自动生成，可能需要手动调整设置。


[MITM]
hostname=v\.qq\.com/.*, m\.v\.qq\.com/.*, .*\.iqiyi\.com/.*, .*\.youku\.com/.*, .*\.bilibili\.com/.*, .*\.miguvideo\.com/.*, .*\.le\.com/.*, tv\.sohu\.com/.*, film\.sohu\.com/.*, m\.tv\.sohu\.com/.*, .*\.mgtv\.com/.*, .*\.ixigua\.com/.*, .*\.pptv\.com/.*, vip\.1905\.com/.*, www\.wasu\.cn/.*, .*\..*/.*url=http.*://.*\..*\..*/.*, .*\..*:.*/.*url=http.*://.*\..*\..*/.*, .*\..*/.*v=http.*://.*\..*\..*/.*, .*\..*:.*/.*v=http.*://.*\..*\..*/.*, api\.leduotv\.com/.*?vid=.*, 

🔘 Quantumult X
[rewrite_local]
v\.qq\.com/.* url script-response-body 全网VIP视频自动解析播放器(已适配手机).user.js.js
m\.v\.qq\.com/.* url script-response-body 全网VIP视频自动解析播放器(已适配手机).user.js.js
.*\.iqiyi\.com/.* url script-response-body 全网VIP视频自动解析播放器(已适配手机).user.js.js
.*\.youku\.com/.* url script-response-body 全网VIP视频自动解析播放器(已适配手机).user.js.js
.*\.bilibili\.com/.* url script-response-body 全网VIP视频自动解析播放器(已适配手机).user.js.js
.*\.miguvideo\.com/.* url script-response-body 全网VIP视频自动解析播放器(已适配手机).user.js.js
.*\.le\.com/.* url script-response-body 全网VIP视频自动解析播放器(已适配手机).user.js.js
tv\.sohu\.com/.* url script-response-body 全网VIP视频自动解析播放器(已适配手机).user.js.js
film\.sohu\.com/.* url script-response-body 全网VIP视频自动解析播放器(已适配手机).user.js.js
m\.tv\.sohu\.com/.* url script-response-body 全网VIP视频自动解析播放器(已适配手机).user.js.js
.*\.mgtv\.com/.* url script-response-body 全网VIP视频自动解析播放器(已适配手机).user.js.js
.*\.ixigua\.com/.* url script-response-body 全网VIP视频自动解析播放器(已适配手机).user.js.js
.*\.pptv\.com/.* url script-response-body 全网VIP视频自动解析播放器(已适配手机).user.js.js
vip\.1905\.com/.* url script-response-body 全网VIP视频自动解析播放器(已适配手机).user.js.js
www\.wasu\.cn/.* url script-response-body 全网VIP视频自动解析播放器(已适配手机).user.js.js
.*\..*/.*url=http.*://.*\..*\..*/.* url script-response-body 全网VIP视频自动解析播放器(已适配手机).user.js.js
.*\..*:.*/.*url=http.*://.*\..*\..*/.* url script-response-body 全网VIP视频自动解析播放器(已适配手机).user.js.js
.*\..*/.*v=http.*://.*\..*\..*/.* url script-response-body 全网VIP视频自动解析播放器(已适配手机).user.js.js
.*\..*:.*/.*v=http.*://.*\..*\..*/.* url script-response-body 全网VIP视频自动解析播放器(已适配手机).user.js.js
api\.leduotv\.com/.*?vid=.* url script-response-body 全网VIP视频自动解析播放器(已适配手机).user.js.js


🔘 Loon
[Script]
http-response v\.qq\.com/.* script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, tag=全网VIP视频自动解析播放器(已适配手机).user.js
http-response m\.v\.qq\.com/.* script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, tag=全网VIP视频自动解析播放器(已适配手机).user.js
http-response .*\.iqiyi\.com/.* script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, tag=全网VIP视频自动解析播放器(已适配手机).user.js
http-response .*\.youku\.com/.* script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, tag=全网VIP视频自动解析播放器(已适配手机).user.js
http-response .*\.bilibili\.com/.* script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, tag=全网VIP视频自动解析播放器(已适配手机).user.js
http-response .*\.miguvideo\.com/.* script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, tag=全网VIP视频自动解析播放器(已适配手机).user.js
http-response .*\.le\.com/.* script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, tag=全网VIP视频自动解析播放器(已适配手机).user.js
http-response tv\.sohu\.com/.* script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, tag=全网VIP视频自动解析播放器(已适配手机).user.js
http-response film\.sohu\.com/.* script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, tag=全网VIP视频自动解析播放器(已适配手机).user.js
http-response m\.tv\.sohu\.com/.* script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, tag=全网VIP视频自动解析播放器(已适配手机).user.js
http-response .*\.mgtv\.com/.* script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, tag=全网VIP视频自动解析播放器(已适配手机).user.js
http-response .*\.ixigua\.com/.* script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, tag=全网VIP视频自动解析播放器(已适配手机).user.js
http-response .*\.pptv\.com/.* script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, tag=全网VIP视频自动解析播放器(已适配手机).user.js
http-response vip\.1905\.com/.* script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, tag=全网VIP视频自动解析播放器(已适配手机).user.js
http-response www\.wasu\.cn/.* script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, tag=全网VIP视频自动解析播放器(已适配手机).user.js
http-response .*\..*/.*url=http.*://.*\..*\..*/.* script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, tag=全网VIP视频自动解析播放器(已适配手机).user.js
http-response .*\..*:.*/.*url=http.*://.*\..*\..*/.* script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, tag=全网VIP视频自动解析播放器(已适配手机).user.js
http-response .*\..*/.*v=http.*://.*\..*\..*/.* script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, tag=全网VIP视频自动解析播放器(已适配手机).user.js
http-response .*\..*:.*/.*v=http.*://.*\..*\..*/.* script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, tag=全网VIP视频自动解析播放器(已适配手机).user.js
http-response api\.leduotv\.com/.*?vid=.* script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, tag=全网VIP视频自动解析播放器(已适配手机).user.js


🔘 Surge
[Script]
全网VIP视频自动解析播放器(已适配手机).user.js=type=http-response, pattern=v\.qq\.com/.*, script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, max-size=1310720
全网VIP视频自动解析播放器(已适配手机).user.js=type=http-response, pattern=m\.v\.qq\.com/.*, script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, max-size=1310720
全网VIP视频自动解析播放器(已适配手机).user.js=type=http-response, pattern=.*\.iqiyi\.com/.*, script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, max-size=1310720
全网VIP视频自动解析播放器(已适配手机).user.js=type=http-response, pattern=.*\.youku\.com/.*, script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, max-size=1310720
全网VIP视频自动解析播放器(已适配手机).user.js=type=http-response, pattern=.*\.bilibili\.com/.*, script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, max-size=1310720
全网VIP视频自动解析播放器(已适配手机).user.js=type=http-response, pattern=.*\.miguvideo\.com/.*, script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, max-size=1310720
全网VIP视频自动解析播放器(已适配手机).user.js=type=http-response, pattern=.*\.le\.com/.*, script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, max-size=1310720
全网VIP视频自动解析播放器(已适配手机).user.js=type=http-response, pattern=tv\.sohu\.com/.*, script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, max-size=1310720
全网VIP视频自动解析播放器(已适配手机).user.js=type=http-response, pattern=film\.sohu\.com/.*, script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, max-size=1310720
全网VIP视频自动解析播放器(已适配手机).user.js=type=http-response, pattern=m\.tv\.sohu\.com/.*, script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, max-size=1310720
全网VIP视频自动解析播放器(已适配手机).user.js=type=http-response, pattern=.*\.mgtv\.com/.*, script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, max-size=1310720
全网VIP视频自动解析播放器(已适配手机).user.js=type=http-response, pattern=.*\.ixigua\.com/.*, script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, max-size=1310720
全网VIP视频自动解析播放器(已适配手机).user.js=type=http-response, pattern=.*\.pptv\.com/.*, script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, max-size=1310720
全网VIP视频自动解析播放器(已适配手机).user.js=type=http-response, pattern=vip\.1905\.com/.*, script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, max-size=1310720
全网VIP视频自动解析播放器(已适配手机).user.js=type=http-response, pattern=www\.wasu\.cn/.*, script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, max-size=1310720
全网VIP视频自动解析播放器(已适配手机).user.js=type=http-response, pattern=.*\..*/.*url=http.*://.*\..*\..*/.*, script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, max-size=1310720
全网VIP视频自动解析播放器(已适配手机).user.js=type=http-response, pattern=.*\..*:.*/.*url=http.*://.*\..*\..*/.*, script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, max-size=1310720
全网VIP视频自动解析播放器(已适配手机).user.js=type=http-response, pattern=.*\..*/.*v=http.*://.*\..*\..*/.*, script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, max-size=1310720
全网VIP视频自动解析播放器(已适配手机).user.js=type=http-response, pattern=.*\..*:.*/.*v=http.*://.*\..*\..*/.*, script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, max-size=1310720
全网VIP视频自动解析播放器(已适配手机).user.js=type=http-response, pattern=api\.leduotv\.com/.*?vid=.*, script-path=全网VIP视频自动解析播放器(已适配手机).user.js, requires-body=true, max-size=1310720


`
try {
    let body = $response.body;
    if (/<\/html>|<\/body>/.test(body)) {
        body = body.replace('</body>', `<script>
 const result=function(){
function GM_deleteValue(e){return new Promise((t,n)=>{chrome.runtime.sendMessage({key:e,name:"ApiDeleteValue",uuid:_uuid},e=>e?t():n())})}function GM_getValue(e,t){return new Promise(n=>{chrome.runtime.sendMessage({key:e,name:"ApiGetValue",uuid:_uuid},e=>{n(void 0!==e?e:t)})})}function GM_listValues(){return new Promise(e=>{chrome.runtime.sendMessage({name:"ApiListValues",uuid:_uuid},t=>e(t))})}function GM_setValue(e,t){return new Promise((n,r)=>{chrome.runtime.sendMessage({key:e,name:"ApiSetValue",uuid:_uuid,value:t},e=>{void 0!==e?n(e):(console.warn("set value failed:",chrome.runtime.lastError),r())})})}function GM_getResourceUrl(e){return new Promise((t,n)=>{chrome.runtime.sendMessage({name:"ApiGetResourceBlob",resourceName:e,uuid:_uuid},r=>{r?t(URL.createObjectURL(r.blob)):n("No resource named "+e)})})}function GM_notification(e,t,n,r){let o;if("object"==typeof e?(o=e,"function"==typeof t&&(o.ondone=t)):o={title:t,text:e,image:n,onclick:r},"string"!=typeof o.text)throw new Error(_("gm_notif_text_must_be_string"));"string"!=typeof o.title&&(o.title=_("extName")),"string"!=typeof o.image&&(o.image="skin/icon.svg");let i=chrome.runtime.connect({name:"UserScriptNotification"});i.onMessage.addListener(e=>{const t=e.type;"function"==typeof o[t]&&o[t]()}),i.postMessage({details:{title:o.title,text:o.text,image:o.image},name:"create",uuid:_uuid})}function GM_openInTab(e,t){let n;try{n=new URL(e,location.href)}catch(t){throw new Error(_("gm_opentab_bad_URL",e))}chrome.runtime.sendMessage({active:!1===t,name:"ApiOpenInTab",url:n.href,uuid:_uuid})}function GM_setClipboard(e){document.addEventListener("copy",function t(n){document.removeEventListener("copy",t,!0),n.stopImmediatePropagation(),n.preventDefault(),n.clipboardData.setData("text/plain",e)},!0),document.execCommand("copy")}function GM_xmlHttpRequest(e){if(!e)throw new Error(_("xhr_no_details"));if(!e.url)throw new Error(_("xhr_no_url"));let t;try{t=new URL(e.url,location.href)}catch(t){throw new Error(_("xhr_bad_url",e.url,t))}if("http:"!=t.protocol&&"https:"!=t.protocol&&"ftp:"!=t.protocol)throw new Error(_("xhr_bad_url_scheme",e.url));let n=chrome.runtime.connect({name:"UserScriptXhr"});n.onMessage.addListener(function(t){if(t.responseState.responseXML)try{t.responseState.responseXML=(new DOMParser).parseFromString(t.responseState.responseText,"application/xml")}catch(e){console.warn("GM_xhr could not parse XML:",e),t.responseState.responseXML=null}let n=("up"==t.src?e.upload:e)["on"+t.type];n&&n(t.responseState)});let r={};Object.keys(e).forEach(t=>{let n=e[t];r[t]=n,"function"==typeof n&&(r[t]=!0)}),r.upload={},e.upload&&Object.keys(e=>r.upload[e]=!0),r.url=t.href,n.postMessage({details:r,name:"open",uuid:_uuid})}
// ==UserScript==
// @name         全网VIP视频自动解析播放器(已适配手机)
// @namespace    https://www.tampermonkey.net/
// @version      0.8.13.3
// @license      AGPL-3.0
// @description  无需跳转新网址，打开官网直接看，超清 无广告 随机去水印。支持：腾讯，爱奇艺，优酷，哔哩哔哩，咪咕，乐视，搜狐，芒果，西瓜，PPTV，1905电影网，华数。支持解析失败自动切换推荐解析源。适配各种浏览器，酷睿i5-8300 CPU性能测试消耗仅1%。
// @author       Tenfond
// @include      http*://v.qq.com/*
// @include      http*://m.v.qq.com/*
// @include      http*://*.iqiyi.com/*
// @include      http*://*.youku.com/*
// @include      http*://*.bilibili.com/*
// @include      http*://*.miguvideo.com/*
// @include      http*://*.le.com/*
// @include      http*://tv.sohu.com/*
// @include      http*://film.sohu.com/*
// @include      http*://m.tv.sohu.com/*
// @include      http*://*.mgtv.com/*
// @include      http*://*.ixigua.com/*
// @include      http*://*.pptv.com/*
// @include      http*://vip.1905.com/*
// @include      http*://www.wasu.cn/*
// @include      http*://*.*/*url=http*://*.*.*/*
// @include      http*://*.*:*/*url=http*://*.*.*/*
// @include      http*://*.*/*v=http*://*.*.*/*
// @include      http*://*.*:*/*v=http*://*.*.*/*
// @include      http*://api.leduotv.com/*?vid=*
// @grant        GM_getValue
// @grant        GM_setValue
// @run-at       document-body
// ==/UserScript==
/**
 * 任务清单：
 */

// 有任何问题都可以联系我邮箱 tenfond@outlook.com

setTimeout(() => {
    'use strict';

    // 读取配置后执行
    function readSettings() {
        // 获取框架循环时间，CPU性能好的可以设置为100，CPU性能不好的可以设置为1000
        settings.getElementTimes = 500;
        // log输出字体布局
        settings.fontStyle = {
            error: "font-family: 微软雅黑,黑体,Droid Serif,Arial,sans-serif; color: #f00;",
            warn: "font-family: 微软雅黑,黑体,Droid Serif,Arial,sans-serif; color: #ff0;",
            ok: "font-family: 微软雅黑,黑体,Droid Serif,Arial,sans-serif; color: #0f0;",
            maxTip: "font-family: 微软雅黑,黑体,Droid Serif,Arial,sans-serif; font-size: 30px; background-color: #222; text-shadow: 0px 0px 12px #fff; color: #fff;"
        };

        if (window === top) {
            /*
            *    (): 小括号括住的表示推荐解析 画质高 速度快
            *    : 无括号的表示视频带水印 或 原页面画质
            *    []: 方括号表示标清画质 不推荐
            */
            settings.NoAD解析 = {    // TODO by 17kyun.com/api.php?url=    // TODO by tv.hzwdd.cn
                // 你可以在这里定义自己的解析接口，脚本会自动适配。格式如下：
                // "解析名称": "解析接口的链接",             // TODO 注意 : 和 " 以及 , 都是英文的符号。
                "JY解析": "https://jx.playerjy.com/?url=",    // TODO (待测试)
                "TV解析": "https://jx.m3u8.tv/jiexi/?url=",    // TODO 腾讯 (芒果)
                "天翼解析": "https://jsap.attakids.com/?url=",    // TODO 腾讯 (芒果) (B站)
                "爱解析": "https://jiexi.t7g.cn/?url=",    // TODO 腾讯 (芒果)
                "OK解析": "https://api.okjx.cc:3389/jx.php?url=" || "https://okjx.cc/?url=" || "https://m2090.com/?url=",    // TODO 优质: 腾讯 (爱奇艺) 优酷 乐视 芒果 PPTV (华数)
                "全民解析": "https://jx.quanmingjiexi.com/?url=" || "https://chaxun.truechat365.com/?url=",    // TODO 已失效
                "云解析": "https://jx.aidouer.net/?url=" || "https://jx.ppflv.com/?url=",    // TODO 腾讯 [爱奇艺] 优酷 (乐视) 芒果 (1905电影网) [华数]
                // "久播解析": "https://jx.jiubojx.com/vip/?url=" || "https://www.qianyicp.com/vip/vip_g.php?url=",    // _4K解析: "https://vip.jx4k.com/vip/?url=",    // TODO 已失效
                "虾米解析": "https://jx.xmflv.com/?url=" || "https://nbjx.vip/index.php?url=",    // TODO (土豆) (咪咕) 搜狐 (芒果)
                "夜幕解析": "https://www.yemu.xyz/?url="    // (Parwix解析: "https://jx.parwix.com:4433/player/analysis.php?v=" || "https://vip.parwix.com:4433/player/?url=" || )    // TODO (西瓜) (B站) (搜狐) (芒果)
                // "云博解析": "https://jx.yunboys.cn/?url="    // TODO 已失效    // by www.yunboys.cn
            };
            settings.AD解析 = {    // TODO (有赌博广告，请勿相信，这么简单的骗术不会有人上当吧)
                "诺讯解析": "https://www.nxflv.com/?url=",    // TODO (腾讯) (爱奇艺) (优酷)
                "z1解析": "https://z1.m1907.cn?jx=",
                "乐多解析": "https://api.leduotv.com/wp-api/ifr.php?isDp=1&vid=",    // TODO (B站)
                "Mao解析": "https://www.mtosz.com/m3u8.php?url="    // TODO 无水印(但不稳定): 腾讯 爱奇艺 优酷 乐视 [芒果] (PPTV) (华数)
            };
            start();
        } else if (settings.isParse) {
            top.postMessage(key.ENCRYPT("宝塔镇河妖\x00给予\x000\x00" + location.href, settings.k1, settings.k2), "*");
            Object.defineProperty(console, "clear", {
                value: () => console.log("%c禁止清除控制台", settings.fontStyle.error), writable: false
            });
            settings.parseDB = new Promise(resolve => {
                window.addEventListener("message", event => {
                    if (event.source !== window) {
                        try {
                            let sql = key.DECRYPT(event.data, settings.k1, settings.k2).split("\x00");
                            if (sql[0] === "天王盖地虎") {
                                if (sql[1] === "给予") {
                                    if (sql[2] === "用户数据库") {
                                        resolve(JSON.parse(sql[3]));
                                    }
                                }
                            }
                        } catch (e) {
                            // 排除 下标越界错误 及 指令处理错误
                        }
                    }
                });
            });
            // 需要先监听再发送数据
            top.postMessage(key.ENCRYPT("宝塔镇河妖\x00请求\x00用户数据库", settings.k1, settings.k2), "*");
            start();
        }
    }

// 未经许可禁止抄袭算法，可以私用。
    const key = (() => {
        // 新方案定义私有变量。修复部分浏览器不支持 # 定义private私有变量
        const password = Symbol();
        const randomkey = Symbol();

        // 自定义加密算法，以防数据包被破解。
        class key {
            // _pwd;        // 火狐v68版本貌似不支持这种方式声明变量。

            constructor(pwd = null) {
                // num，密码偏移量
                // key，排列长度偏移量
                // charCode，防止内存频繁运动，定义在外部
                let num = 7, charCode, key = 7;
                if (pwd) {
                    if (typeof pwd === "string") {
                        for (let i = 0; i < pwd.length; i++) {
                            // 将pwd中 每个字 转换成 十进制ASCII值
                            charCode = pwd[i].charCodeAt();
                            // 将每个 ASCII值 中 第一个值加入到 排列长度偏移量
                            key += parseInt(charCode.toString()[0]);
                            // 用 hash算法 将 ASCII值 减去 31 作为新的值加入到num中
                            // 以下方法是为了防止出现负数，ASCII字符集一共有65536个字符
                            // num += charCode - 31 => (charCode + 65505) % 65536
                            num = 31 * num + (charCode + 65505) % 65536;
                        }
                    } else if (typeof pwd === "number") {
                        // 如果密码是数值型就使用此方法作为 密码偏移量 和 排列长度偏移量
                        num = key = 7 + parseInt(Math.abs(pwd));
                    } else {
                        // 如果类型不匹配就直接提出错误
                        console.error("Unsupported type '" + (typeof pwd) + "'. It only supports 'string' or 'number'.")
                    }
                }
                // 让排列长度偏移量的转换成8进制，取第一个数字。加上密码转换成字符字符串的方式。数值+字符串 会将数值自动转换为字符串
                this[password] = key.toString(8)[0] + (num % 65536).toString();
            }

            encrypt(string) {
                if (string) {
                    // subStart 排列长度的起始位置。subIndex 排列长度。 encryptPool 加密池，即去除的排列长度存放在这里。result 加密后的结果。
                    let subStart = string.length, subIndex = parseInt(this[password][0]) + 3, encryptPool = [],
                        result = "";
                    // stringKey 加密字符偏移量的散列值的的个数。
                    let stringKey = subStart + parseInt(this[password].substring(1));
                    // stringKeyFloat 加密字符偏移量的偏移单位。stringKeyIndex 加密字符偏移量的位置
                    let stringKeyFloat = 65536 / stringKey, stringKeyIndex = stringKey - 1;
                    // 获取加密池。
                    while (subStart > subIndex) {
                        subStart -= subIndex;
                        encryptPool.push(string.substr(subStart, subIndex));
                    }
                    encryptPool.push(string.substring(0, subStart));
                    // 对加密池进行加密，并将加密的字符的结果放入 result 中。
                    for (let i = 0, j; i < subIndex; i++) {
                        for (j = 0; j < encryptPool.length; j++) {
                            let char = encryptPool[j][i];
                            if (char) {
                                // 将字符的 ASCII值 偏移 指定量
                                result += String.fromCharCode((char.charCodeAt() + parseInt(stringKeyFloat * (stringKeyIndex % 2 === 0 ? stringKeyIndex : stringKey - stringKeyIndex))) % 65536);
                                stringKeyIndex = stringKeyIndex === 0 ? stringKey - 1 : stringKeyIndex - 1;
                            } else {
                                break;
                            }
                        }
                    }
                    // 返回加密结果
                    return result;
                } else {
                    // 如果加密字符串不存在就返回空字符串
                    return "";
                }
            }

            /* 假设有7个字符

             加密前 - 排列
             ( 1 )  ( 2  3 )  ( 4  5 ) ( 6  7 )

             加密中 - 排列
             ︵   ︵   ︵    ︵
             6    4    2    1
             7    5    3    ︶
             ︶   ︶   ︶
             加密后 - 排列
             ( 6  4  2  1 )  ( 7  5  3 )

             解密中 - 排列
             ︵   ︵
             6    7
             4    5
             2    3
             1    ︶
             ︶
             解密后 - 排列
             1  2  3  4  5  6  7  8
            */

            decrypt(string) {
                if (string) {
                    // subStart 排列长度的起始位置。desubIndex 反向取加密池的长度。 decryptPool 解密池。
                    let subStart = 0, desubIndex = Math.ceil(string.length / (parseInt(this[password][0]) + 3)),
                        //NullCount 加密池中最后一个元素的元素空位。 desubIndex 反向取加密池的长度。 decryptPool 解密池，result 解密后的结果。
                        NullCount = string.length % (parseInt(this[password][0]) + 3), decryptPool = [], result = "";
                    // stringKey 加密字符偏移量的散列值的的个数。
                    let stringKey = string.length + parseInt(this[password].substring(1)), // stringKeyFloat 加密字符偏移量的偏移单位。stringKeyIndex 加密字符偏移量的位置
                        stringKeyFloat = 65536 / stringKey, stringKeyIndex;
                    // 获取解密池
                    while (string.length - subStart > desubIndex) {
                        decryptPool.push(string.substr(subStart, desubIndex));
                        subStart += desubIndex;
                        if (decryptPool.length === NullCount) {
                            desubIndex--;
                        }
                    }
                    decryptPool.push(string.substring(subStart));
                    // 对解密池进行解密 并将解密结果 加入到 result(结果) 中
                    for (let j = decryptPool[0].length - 1, i; j > -1; j--) {
                        // 为节省NullCount的空间利用，使用NullCount用来辅助计算 stringKeyIndex(加密字符偏移量的位置) 的位置
                        // 画图排列就知道为什么要这样做了，上面做了一个加密到解密的排列的草图
                        NullCount = 0;
                        for (i = 0; i < decryptPool.length; i++) {
                            let char = decryptPool[i][j];
                            if (char) {
                                NullCount += decryptPool[i].length;
                                // 计算得到当前字符的位置
                                stringKeyIndex = NullCount - decryptPool[i].length + j + 1;
                                // 计算得到 stringKeyIndex(加密字符偏移量的位置) 的位置
                                stringKeyIndex = (stringKey - stringKeyIndex % stringKey) % stringKey;
                                // 让加密后的偏移量，偏移回去，得到原先的字符串
                                result += String.fromCharCode((char.charCodeAt() - parseInt(stringKeyFloat * (stringKeyIndex % 2 === 0 ? stringKeyIndex : stringKey - stringKeyIndex)) + 65536) % 65536);
                            }
                        }
                    }
                    // 返回解密结果
                    return result;
                } else {
                    // 如果解密字符串不存在就返回空字符串
                    return "";
                }
            }

            // encrypt 既可以用作加密 也可以用作解密，decrypt 既可以用作解密 也可以用作加密。

            static ENCRYPT() {
                if (arguments) {
                    let strings = [], keys = [];
                    for (let i = 0; i < arguments.length; i++) {
                        // JavaScript如何用最简单的方法获取任意对象的类名？(包括自定义类) 判断对象类型？
                        // 欢迎支持我的原创文档 https://blog.csdn.net/qq_37759464/article/details/121764755
                        if (arguments[i].constructor.name === "key") {
                            keys.push(arguments[i]);
                        } else if (arguments[i].constructor.name === "String") {
                            strings.push(arguments[i]);
                        }
                    }
                    if (strings) {
                        if (keys) {
                            for (let i = 0, j; i < strings.length; i++) {
                                for (j = 0; j < keys.length; j++) {
                                    strings[i] = i % 2 === 0 ? keys[j].encrypt(strings[i]) : keys[j].decrypt(strings[i]);
                                }
                            }
                            return strings.length === 1 ? strings[0] : strings;
                        } else {
                            if (!this[randomkey]) {
                                this[randomkey] = new key(parseInt(Math.random() * 1024) + 3);
                            }
                            // 为了使加密方法不一样，这里反过来
                            strings[i] = this[randomkey].decrypt(this[randomkey].decrypt(strings[i]));
                            return strings.length === 1 ? strings[0] : strings;
                        }
                    }
                }
            }

            static DECRYPT() {
                if (arguments) {
                    let strings = [], keys = [];
                    for (let i = 0; i < arguments.length; i++) {
                        if (arguments[i].constructor.name === "key") {
                            keys.push(arguments[i]);
                        } else if (arguments[i].constructor.name === "String") {
                            strings.push(arguments[i]);
                        }
                    }
                    if (strings) {
                        if (keys) {
                            for (let i = 0, j; i < strings.length; i++) {
                                for (j = keys.length - 1; j > -1; j--) {
                                    strings[i] = i % 2 === 0 ? keys[j].decrypt(strings[i]) : keys[j].encrypt(strings[i]);
                                }
                            }
                            return strings.length === 1 ? strings[0] : strings;
                        } else {
                            if (!this[randomkey]) {
                                this[randomkey] = new key(parseInt(Math.random() * 1024) + 3);
                            }
                            strings[i] = this[randomkey].encrypt(this[randomkey].encrypt(strings[i]));
                            return strings.length === 1 ? strings[0] : strings;
                        }
                    }
                }
            }
        }

        return key;
    })();

// 有人反馈苹果端不能看，尝试修改UA解决
    if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i)) {
        // 修改手机端UA，似乎改完这个UA还是没有效果。说明苹果端页面从数据请求就开始检测UA了。请手动修改浏览器UA。
        Object.defineProperty(navigator, 'userAgent', {
            // 这个UA会屏蔽百度搜索的广告？
            value: "Mozilla/5.0 (Linux; Android 8.0; MI 6 Build/OPR1.170623.027; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/48.0.2564.116 Mobile Safari/537.36 T7/10.3 SearchCraft/2.6.3 (Baidu; P1 8.0.0)",
            writable: false
        });
    }

    let settings = {};
    const root = document.querySelector(":root");
// 核心驱动代码
    (() => {
        if (location.search.match(/[?&]url=https?:\/\/.+\..+\..+\/.+/i) ||
            location.search.match(/[?&]v=https?:\/\/.+\..+\..+\/.+/i) ||
            location.href.match(/https?:\/\/api\.leduotv\.com\/.+?vid=/i)) {
            settings.isParse = true;
        }
        if (settings.isParse || location.host.indexOf("v.qq.com") !== -1 || location.host.indexOf("iqiyi.com") !== -1 || location.host.indexOf("youku.com") !== -1 || location.host.indexOf("bilibili.com") !== -1 || location.host.indexOf("miguvideo.com") !== -1 || location.host.indexOf("le.com") !== -1 || location.host.indexOf("tv.sohu.com") !== -1 || location.host.indexOf("film.sohu.com") !== -1 || location.host.indexOf("mgtv.com") !== -1 || location.host.indexOf("ixigua.com") !== -1 || location.host.indexOf("pptv.com") !== -1 || location.host.indexOf("vip.1905.com") !== -1 || location.host.indexOf("www.wasu.com") !== -1) {
            // 对符合条件的域名执行脚本
            // 调用自写加密算法，生成实例类
            settings.k1 = new key("Tenfond");
            settings.k2 = new key(" 腾 风 ");
            if (window === top) {
                settings.parseDB = {
                    解析开关: "\x01", 弹幕开关: "\x01", DIY解析栏: "\x01"
                };
                for (let name in settings.parseDB) {
                    let data = localStorage.getItem("解析数据库." + name);
                    if (data !== null) {
                        settings.parseDB[name] = data;
                    }
                }
                // 油猴可以实现跨域存储
                try {
                    let data = GM_getValue("弹幕开关");
                    if (data !== null) settings.parseDB.弹幕开关 = data;
                } catch (e) {
                    // 排除无效函数异常
                }

                if (settings.parseDB.解析开关) {
                    if (!sessionStorage.getItem("tip设置")) {
                        showTip("右下角可以编辑 设置");
                        sessionStorage.setItem("tip设置", "\x01");
                    }
                    readSettings();
                }
                settings.parseDBFuntions = {
                    解析开关: () => {
                        if (!settings.parseDB.解析开关) {
                            location.reload();
                            // window 刷新时会自动清除缓存
                        } else {
                            readSettings();
                            settings.parseDB.解析开关 = "\x01";
                        }
                    },
                    弹幕开关: () => {
                        try {
                            GM_setValue("弹幕开关", settings.parseDB.弹幕开关)
                        } catch (error) {
                            // 排除无效函数异常
                        }
                        showTip("刷新页面即可生效");
                    },
                    DIY解析栏: () => {
                        if (typeof settings.DIY_iframeFunction === "function") {
                            settings.DIY_iframeFunction();
                        } else {
                            showTip("设置已生效");
                        }
                    }
                };
                let toolsBar = document.createElement("toolsbar");
                toolsBar.style = "display: block !important; visibility: visible !important; position: fixed; z-index: 2147483647 !important; left:0; bottom: 0; width: 100%; height: 0; font-family: 微软雅黑,黑体,Droid Serif,Arial,sans-serif; font-size: 15px; color: #000;";
                toolsBar.innerHTML = "<style>\n" +
                    "    text{font-family: 微软雅黑,黑体,Droid Serif,Arial,sans-serif; font-size: 15px; color: #000; position: absolute; transform: translateY(-50%); top: 50%;}\n" +
                    "    label.parse-switch{position: absolute; transform: translateY(-50%); top: 50%; display: inline-block; width: 44px; height: 24px; box-shadow: 0 0 0 1px #ccc; border-radius: 30px; overflow: hidden;}\n" +
                    "    label.parse-switch>input[type=checkbox]{display: none;}\n" +
                    "    label.parse-switch>input[type=checkbox]+bg{position: absolute; transition: background-color 0.3s; background-color: #ccc; width: 100%; height: 100%;}\n" +
                    "    label.parse-switch>input[type=checkbox]:checked+bg{background-color: #4af}\n" +
                    "    label.parse-switch>input[type=checkbox]+bg+span{position: absolute; transition: left 0.3s; left: 0; width: 24px; height: 24px; border-radius: 50%; background-color: #fff;}\n" +
                    "    label.parse-switch>input[type=checkbox]:checked+bg+span{left: 20px}\n" + "\n" +
                    "    settings>button+ul>li{position: relative; background-color: #0000; width: 100%; height: 30px;}\n" +
                    "</style>\n" + "<settings style='box-shadow: 0 0 6px 2px #444; position: fixed; width: 50px; height: 30px; right: 7%; bottom: 45px; border-radius: 15px;'>" +
                    "    <button style='width: 100%; height: 100%; border-radius: 17px; background-color: #4af; border-color: #4af; text-align: center; color: #fff;'>\n" +
                    "        设置\n" +
                    "    </button>\n" +
                    "    <ul style='position:absolute; transition: all 0.5s; right: 7%; bottom: 100%; opacity: 0; width: 0; height: auto; background-color: #fffc; border: 1px solid #ccc; border-radius: 5px;'>\n" +
                    "    </ul>\n" +
                    "</settings>";
                let SettingsBlock = toolsBar.querySelector("settings>button+ul");
                let parseDBKeys = Object.keys(settings.parseDB);
                for (let i = 0; i < parseDBKeys.length; i++) {
                    SettingsBlock.innerHTML += "<li><text style='left: 10px'>" + parseDBKeys[i] + "</text><label class='parse-switch' style='right: 10px;'><input type='checkbox'><bg></bg><span></span></label></li>\n";
                }
                let SettingBlockSwitchs = SettingsBlock.querySelectorAll("li>label.parse-switch");
                for (let i = 0; i < SettingBlockSwitchs.length; i++) {
                    let checkBox = SettingBlockSwitchs[i].querySelector("input[type=checkbox]");
                    checkBox.checked = Boolean(settings.parseDB[parseDBKeys[i]]);
                    SettingBlockSwitchs[i].querySelector("bg").addEventListener("transitionend", () => {
                        if (checkBox.checked !== Boolean(settings.parseDB[parseDBKeys[i]])) {
                            // 如果有变化才会执行，否则会重复执行，因为动画会有延迟，刚打开网页时也会触发此监听事件
                            if (checkBox.checked) {
                                settings.parseDB[parseDBKeys[i]] = "\x01";
                            } else {
                                settings.parseDB[parseDBKeys[i]] = "";
                            }
                            localStorage.setItem("解析数据库." + parseDBKeys[i], settings.parseDB[parseDBKeys[i]]);
                            settings.parseDBFuntions[parseDBKeys[i]]();
                        }
                    }, false);
                }
                let SettingsBtn = toolsBar.querySelector("settings>button");
                SettingsBtn.onclick = () => {
                    if (SettingsBlock.style.opacity === "0") {
                        SettingsBtn.innerText = "关闭";
                        SettingsBlock.style.opacity = "1";
                        SettingsBlock.style.width = "200px";
                    } else {
                        SettingsBtn.innerText = "设置";
                        SettingsBlock.style.opacity = "0";
                        SettingsBlock.style.width = "0";
                    }
                }
                root.append(toolsBar);
            } else {
                readSettings();
            }
        }
    })();

// 启动解析代码
    function start() {
        console.log("脚本运行在 " + location.href);

        function detectMobile() {
            return (navigator.userAgent.match(/Android/i) ||
                navigator.userAgent.match(/webOS/i) ||
                navigator.userAgent.match(/Windows Phone/i) ||
                navigator.userAgent.match(/Symbian/i) ||
                navigator.userAgent.match(/BlackBerry/i) ||
                navigator.userAgent.match(/hpwOS/i));
        }

        function doElement(cssString, doFunction, waitMS = 0) {
            let Element = document.querySelector(cssString);
            if (Element && Element.nodeType === 1) {
                doFunction(Element);
                console.log("%c已为 " + cssString + " 进行了操作", settings.fontStyle.ok);
            } else if (document.readyState !== "complete" || waitMS > 0) {
                console.log("正在查找 " + cssString);    // TODO                                                                10毫秒约函数执行时间
                setTimeout(() => doElement(cssString, doFunction, document.readyState !== "complete" ? waitMS : waitMS - 10 - settings.getElementTimes), settings.getElementTimes);
            } else {
                console.log("%c未找到 " + cssString, settings.fontStyle.error);
            }
        }

        function doElements(cssString, doFunction, waitMS = 0, index = 0) {
            let Elements = document.querySelectorAll(cssString);
            if (Elements[index] && Elements[index].nodeType === 1) {
                doFunction(Elements);
                console.log("%c已为 All[" + index + "] " + cssString + " 进行了操作", settings.fontStyle.ok);
            } else if (document.readyState !== "complete" || waitMS > 0) {
                console.log("正在查找 All[" + index + "] " + cssString);    // TODO                                             10毫秒约函数执行时间
                setTimeout(() => doElements(cssString, doFunction, document.readyState !== "complete" ? waitMS : waitMS - 10 - settings.getElementTimes, index), settings.getElementTimes);
            } else {
                console.log("%c未找到 All[" + index + "] " + cssString, settings.fontStyle.error);
            }
        }

        function forElements(cssString, doFunction, waitMS = 0, failFunction = null) {
            let forElementInterval = setInterval(() => {
                if (document.readyState !== "complete" || waitMS > 0) {
                    let Elements = document.querySelectorAll(cssString);
                    if (Elements && Elements.length > 0 && Elements[0].nodeType === 1) {
                        doFunction(Elements, forElementInterval);
                        console.log("%cforElements已为 " + cssString + " 进行了操作", settings.fontStyle.ok);
                    }
                    if (document.readyState === "complete") {
                        waitMS = waitMS - 10 - settings.getElementTimes;
                    }
                } else {
                    if (failFunction) {
                        failFunction();
                    }
                    console.log("已清除 forElements Interval计时器")
                    clearInterval(forElementInterval);
                }
            }, settings.getElementTimes);
        }

        function removeElements(ElementsStrings) {
            console.log("正在检测并移除 " + ElementsStrings);
            let removeElementsInterval = setInterval(() => {
                if (ElementsStrings.length > 0) {
                    for (let i in ElementsStrings) {
                        try {
                            let Elements = eval(ElementsStrings[i]);
                            if (Elements && Elements.nodeType === 1) {
                                console.log("%cremoveElemets 执行了移除 " + ElementsStrings[i], settings.fontStyle.ok);
                                Elements.parentNode.removeChild(Elements);
                                ElementsStrings.splice(i, 1);
                            } else if (Elements[0] && Elements[0].nodeType === 1) {
                                console.log("%cremoveElemets 执行了移除 " + ElementsStrings[i], settings.fontStyle.ok);
                                for (let Element of Elements) {
                                    Element.parentNode.removeChild(Element);
                                }
                                ElementsStrings.splice(i, 1);
                            }
                        } catch (e) {
                            // 排除 null值未找到方法 错误
                        }
                    }
                    if (document.readyState === "complete") {
                        console.log("%cremoveElemets 移除失败 " + ElementsStrings, settings.fontStyle.error);
                        clearInterval(removeElementsInterval);
                    }
                } else {
                    clearInterval(removeElementsInterval);
                    console.log("Elements 移除完毕");
                }
            }, 200);
        }

        if (window === top) {
            // 自定义remove方法，暂时用不着了，新方案代替了
            // Array.prototype.remove = value => {
            //     for (let i = 0; i < this.length; i++) {
            //         if (this[i] === value) {
            //             this.splice(i, 1);
            //             return i;
            //         }
            //     }
            //     return -1;
            // }
            top.addEventListener("message", event => {
                if (event.source !== window) {
                    try {
                        let sql = key.DECRYPT(event.data, settings.k1, settings.k2).split("\x00");
                        if (sql[0] === "宝塔镇河妖") {
                            if (sql[1] === "函数") {
                                console.log("top执行了函数: " + sql[2]);
                                eval(sql[2]);
                            } else if (sql[1] === "请求") {
                                if (sql[2] === "用户数据库") {
                                    event.source.postMessage(key.ENCRYPT("天王盖地虎\x00给予\x00用户数据库\x00" + JSON.stringify(settings.parseDB), settings.k1, settings.k2), "*");
                                }
                            } else if (sql[1] === "给予") {
                                if (sql[2] === "0") {
                                    if (settings.address !== null) {
                                        settings.address = sql[3];
                                    }
                                    console.log("%c" + settings.address, settings.fontStyle.warn);
                                } else if (sql[2] === "-1") {
                                    if (settings.address === sql[3]) {
                                        showTip("解析失败，正在更换解析源");
                                        settings.randomSeleceParse();
                                    }
                                }
                            } else if (sql[1] === "按下Enter获取焦点") {
                                onkeydown = e => {
                                    if (e.key === 'Enter') {
                                        event.source.focus();
                                    }
                                }
                            }
                        }
                    } catch (e) {
                        console.log("%c" + e, settings.fontStyle.error);
                    }
                }
            });

            if (!detectMobile()) {
                if (location.host.indexOf("v.qq.com") !== -1) {
                    readyPlayerBox("已进入腾讯视频", ["#mask_layer", ".mod_vip_popup", "#mask_layer", "div.panel-overlay.panel-tip-pay", "div.thumbplayer-barrage"], [settings.NoAD解析["OK解析"], settings.NoAD解析["TV解析"], settings.NoAD解析["天翼解析"], settings.NoAD解析["诺讯解析"]], "div#player", null);
                } else if (location.host.indexOf("iqiyi.com") !== -1) {
                    doElement("div.side-cont.tvg", () => readyPlayerBox("已进入爱奇艺", ["#playerPopup", "div[class^=qy-header-login-pop]"], [settings.NoAD解析["OK解析"]], "iqpdiv.iqp-player[data-player-hook$=er]", null));
                } else if (location.host.indexOf("youku.com") !== -1) {
                    readyPlayerBox("已进入优酷视频", ["#iframaWrapper"], [], "div#player", null);
                } else if (location.host.indexOf("bilibili.com") !== -1) {
                    doElements("div[role=tooltip]:not([class*=popover-])", loginTip => displayNone(["#" + loginTip[6].id]), 1000, 6);
                    doElement("svg[aria-hidden=true]", () => readyPlayerBox("已进入哔哩哔哩", null, [settings.NoAD解析["夜幕解析"], settings.NoAD解析["天翼解析"]], "div.bpx-player-video-area,div.mask-container", null));    // TODO || document.getElementById("bilibiliPlayer") || document.getElementById("live-player-ctnr")
                } else if (location.host.indexOf("miguvideo.com") !== -1) {
                    readyPlayerBox("已进入咪咕视频", null, [], "section#mod-player", null);
                } else if (location.host.indexOf("le.com") !== -1) {
                    readyPlayerBox("已进入乐视TV", null, [settings.NoAD解析["云解析"]], "#le_playbox", null);
                } else if (location.host.match(/(tv|film).sohu.com/)) {
                    readyPlayerBox("已进入搜狐视频", null, [settings.NoAD解析["夜幕解析"]], "#player,#sohuplayer,.player-view", null);
                } else if (location.host.indexOf("mgtv.com") !== -1) {
                    readyPlayerBox("已进入芒果TV", null, [settings.NoAD解析["爱解析"], settings.NoAD解析["OK解析"], settings.NoAD解析["云解析"], settings.NoAD解析["虾米解析"], settings.NoAD解析["夜幕解析"]], "#mgtv-player-wrap", null);
                } else if (location.host.indexOf("ixigua.com") !== -1) {
                    readyPlayerBox("已进入西瓜视频", null, [settings.NoAD解析["夜幕解析"]], "div.teleplayPage__playerSection", null);
                } else if (location.host.indexOf("pptv.com") !== -1) {
                    readyPlayerBox("已进入PPTV", null, [settings.NoAD解析["OK解析"]], "div.w-video", null);
                } else if (location.host.indexOf("vip.1905.com") !== -1) {
                    readyPlayerBox("已进入1905电影网", null, [settings.NoAD解析["云解析"]], "div#playBox", null);
                } else if (location.host.indexOf("www.wasu.cn") !== -1) {
                    readyPlayerBox("已进入华数TV", null, [settings.NoAD解析["OK解析"]], "div#pcplayer", null);
                }
            } else {
                if (location.host.indexOf("v.qq.com") !== -1) {
                    readyPlayerBox("已进入腾讯视频", [".mod_vip_popup", "[class^=app_],[class^=app-],[class*=_app_],[class*=-app-],[class$=_app],[class$=-app]", "div[dt-eid=open_app_bottom]", "div.video_function.video_function_new", "a[open-app]", "section.mod_source", "section.mod_box.mod_sideslip_h.mod_multi_figures_h,section.mod_sideslip_privileges,section.mod_game_rec"], [settings.NoAD解析["OK解析"]], "div.mod_play:not([style*='display: none;']) section.mod_player", null, href => {
                        let location = hrefToLocation(href);
                        href = searchToJSON(location.search);
                        if (href) {
                            if (href["cid"]) {
                                if (href["id"]) {
                                    return location.protocol + '//v.qq.com/detail/' + href["cid"][0] + '/' + href["cid"] + '.html';
                                } else if (href["vid"]) {
                                    return location.protocol + '//v.qq.com/x/cover/' + href["cid"] + '/' + href["vid"] + '.html';
                                } else {
                                    return location.protocol + '//v.qq.com/x/cover/' + href["cid"] + '.html';
                                }
                            } else if (href["vid"]) {
                                return location.protocol + '//v.qq.com/x/page/' + href["vid"] + '.html';
                            } else if (href["lid"]) {
                                return location.protocol + '//v.qq.com/detail/' + href["lid"][0] + '/' + href["lid"] + '.html';
                            } else {
                                return null;
                            }
                        } else {
                            return null;
                        }
                    });
                } else if (location.host.indexOf("iqiyi.com") !== -1) {
                    readyPlayerBox("已进入爱奇艺", ["div.m-iqyGuide-layer", "a[down-app-android-url]", "[name=m-extendBar]", "[class*=ChannelHomeBanner]", "section.m-hotWords-bottom"], [settings.NoAD解析["OK解析"]], "div.m-video-player-wrap", null);
                } else if (location.host.indexOf("youku.com") !== -1) {
                    readyPlayerBox("已进入优酷视频", ["#iframaWrapper", ".ad-banner-wrapper", ".h5-detail-guide,.h5-detail-vip-guide,[class$=ad],.Corner-container", "[data-spm='downloadApp'],.downloadApp", ".callEnd_box"], [], "#player", null);
                } else if (location.host.indexOf("bilibili.com") !== -1) {
                    readyPlayerBox("已进入哔哩哔哩", ["div.fe-ui-open-app-btn,div.recom-wrapper,open-app-btn", "[class*=openapp]"], [settings.NoAD解析["夜幕解析"], settings.NoAD解析["天翼解析"]], "div#app.main-container div.player-wrapper", null, href => href.replace("m.bilibili.com", "www.bilibili.com"));
                } else if (location.host.indexOf("miguvideo.com") !== -1) {
                    readyPlayerBox("已进入咪咕视频", ["[class^=app_],[class^=app-],[class*=_app_],[class*=-app-],[class$=_app],[class$=-app]", ".openClient", "div.group-item.programgroup .data-rate-01,div.group-item.programgroup .max-rate-01,div.group-item.programgroup .p-common"], [], "section#mod-player", null, href => href.replace("m.miguvideo.com", "www.miguvideo.com").replace("msite", "website"));
                } else if (location.host.indexOf("le.com") !== -1) {
                    (block_show => {
                        block_show.innerHTML = "div.layout{visibility: visible !important; display:block !important;}div.layout>*:not(style,script,#j-vote,#j-follow){visibility: visible !important; display: block !important;}";
                        document.head.insertBefore(block_show, document.head.firstChild);
                    })(document.createElement("style"));
                    doElement("a.j-close-gdt", jump_over => {
                        jump_over.click();
                        return false;
                    });
                    readyPlayerBox("已进入乐视TV", ["a.leapp_btn", "div.full_gdt_bits[id^=full][data-url]", "[class*=Daoliu],[class*=daoliu],[class*=game]", "div.m-start", "[class*=icon_user]"], [settings.NoAD解析["云解析"]], "div.column.play", null);
                } else if (location.host.indexOf("m.tv.sohu.com") !== -1) {
                    readyPlayerBox("已进入搜狐视频", ["div[class^=banner]", "div.js-oper-pos", "div[id^=ad],div[id^=ad] *", "[id*=login],[class*=login]", "[class$=-app]", "div.app-vbox.ph-vbox,div.app-vbox.app-guess-vbox", "div.twinfo_iconwrap", "div[class$=banner],div[id$=banner]"], [settings.NoAD解析["夜幕解析"]], "#player,#sohuplayer,.player-view", null, async href => {
                        return new Promise(resolve => {
                            xmlHttpRequest({
                                url: href, success: data => {
                                    let result = data.responseText.match(/var videoData = \{[^\x00]+tvUrl:"(http.+)",[\r\n]/)[1];
                                    resolve(result);
                                }, error: () => resolve(href)
                            });
                        });
                    });
                } else if (location.host.indexOf("mgtv.com") !== -1) {
                    readyPlayerBox("已进入芒果TV", ["div.adFixedContain,div.ad-banner,div.m-list-graphicxcy.fstp-mark", "div[class^=mg-app],div#comment-id.video-comment div.ft,div.bd.clearfix,div.v-follower-info", "div.ht.mgui-btn.mgui-btn-nowelt", "div.personal", "div[data-v-41c9a64e]"], [settings.NoAD解析["爱解析"], settings.NoAD解析["OK解析"], settings.NoAD解析["云解析"], settings.NoAD解析["虾米解析"], settings.NoAD解析["夜幕解析"]], "div.video-poster,div.video-area", null);
                } else if (location.host.indexOf("ixigua.com") !== -1) {
                    readyPlayerBox("已进入西瓜视频", ["div.xigua-download", "div.xigua-guide-button", "div.c-long-video-recommend.c-long-video-recommend-unfold"], [settings.NoAD解析["夜幕解析"]], "div.xigua-detailvideo-video", null);
                } else if (location.host.indexOf("pptv.com") !== -1) {
                    readyPlayerBox("已进入PPTV", ["[data-darkreader-inline-bgimage][data-darkreader-inline-bgcolor]", "div[class^=pp-m-diversion]", "section#ppmob-detail-picswiper", "section.layout.layout_ads", "div.foot_app", "div[modulename=导流位]", "a[class*=user]", "div.mod_video_info div.video_func"], [settings.NoAD解析["OK解析"]], "section.pp-details-video", null, href => href.replace("m.pptv.com", "v.pptv.com"));
                } else if (location.host.indexOf("vip.1905.com") !== -1) {
                    (movie_info => {
                        movie_info.innerHTML = "section#movie_info{padding-top: 20px !important;}";
                        document.head.appendChild(movie_info);
                    })(document.createElement("style"));
                    readyPlayerBox("已进入1905电影网", ["a.new_downLoad[target=_blank]", "iframe[srcdoc^='<img src=']", "section.movieList_new.club_new", ".wakeAppBtn", "[class*=login]", "section.openMembershipBtn", ".ad", ".open-app,.openApp,ul.iconList li:not(.introduceWrap),div#zhichiBtnBox", "section#hot_movie,section#exclusive_movie,section#hot_telve"], [settings.NoAD解析["云解析"]], "div.area.areaShow.clearfix_smile", null);
                } else if (location.host.indexOf("www.wasu.cn") !== -1) {
                    readyPlayerBox("已进入华数TV", ["div.ws_poster", "div.appdown,div.player_menu_con", "div#play_and_info_fix_adv"], [settings.NoAD解析["OK解析"]], "div#player,div#pop", null);
                }
            }

            function readyPlayerBox(Tip, displayNones, srcs, cssString, doFunction, doHref = null) {
                if (Tip) {
                    console.log("%c" + Tip, settings.fontStyle.maxTip);
                }
                onLocationChange(() => location.reload());    // TODO ,监听url变化,如果网页rul变了就刷新页面

                if (displayNones) {
                    displayNone(displayNones);
                }
                doElement(cssString, async playerBox => {
                    setInterval(() => {
                        for (let link of document.querySelectorAll("a")) {
                            link.onclick = () => {
                                if (link.host === location.host) {
                                    location.href = link.href;
                                }
                            }
                        }
                    }, 1500);

                    let iframe = document.createElement("iframe");
                    iframe.allowFullscreen = true;
                    iframe.frameBorder = "0";   // HTML5已弃用此属性，并使用style.border代替
                    iframe.width = "100%";
                    iframe.height = "100%";
                    let iframe_style = "background-color: #000 !important; border: 0 !important; display: block !important; visibility: visible !important; opacity: 1 !important; min-width: 100% !important; width: 100% !important; max-width: 100% !important; min-height: 100% !important; height: 100% !important; max-height: 100% !important; position: absolute !important; left: 0px !important; top: 0px !important; z-index: 2147483647 !important; overflow: hidden;";
                    iframe.style = iframe_style;

                    let iframeStartTime, tested = false, others = Object.values(settings.NoAD解析).filter(value => {
                        // 求出 srcs 在 NoAD解析 中的补集
                        return srcs.indexOf(value) === -1;
                    });
                    settings.src = (() => {
                        const src = Symbol();

                        class Src {
                            static async set(key, value = location.href) {
                                if (!key) return false;
                                this[src] = key;
                                if (typeof doHref === "function") {
                                    let href = await doHref(value);
                                    iframe.src = key ? key + (href ? href : value) : "";
                                } else {
                                    iframe.src = key ? key + value : "";
                                }
                                iframeStartTime = new Date().getTime();
                                return true;
                            }

                            static get() {
                                return this[src];
                            }
                        }

                        return Src;
                    })();
                    settings.randomSeleceParse = async () => {
                        // arguments 代表输入的所有参数，看不懂可以百度搜索 “js 参数 arguments”
                        // return arguments ? arguments[Math.floor(Math.random() * arguments.length)] : null;
                        if (srcs.length > 0) {
                            let random = Math.floor(Math.random() * srcs.length);
                            settings.src.set(srcs[random]);
                            srcs.splice(random, 1);
                        } else {
                            if (tested) {
                                showTip("该视频可能无法解析\n请尝试使用z1解析\n如有疑问请反馈");
                                return false;
                            } else {
                                showTip("解析失败，正在尝试其他解析源");
                                srcs = others;
                                others = null;
                                tested = true;
                                let random = Math.floor(Math.random() * srcs.length);
                                settings.src.set(srcs[random]);
                                srcs.splice(random, 1);
                            }
                        }

                    }

                    // 获取历史解析
                    settings.src.set(localStorage.getItem("historyParse"));
                    if (!settings.src.get()) {
                        await settings.randomSeleceParse();
                    } else {
                        // 清除多余的一个解析api
                        srcs.splice(srcs.indexOf(settings.src.get()), 1);
                    }
                    playerBox.style.zIndex = "1";
                    iframe.onload = () => {
                        // 判断iframe加载完成的时间
                        if (new Date().getTime() - iframeStartTime < 500) {
                            // 如果加载时间小于半秒，并且检测网页加载出错，说明网页有问题。
                            xmlHttpRequest({
                                url: iframe.src,
                                error: () => {
                                    showTip("该解析已失效，已切换推荐解析源");
                                    settings.randomSeleceParse();
                                }
                            })
                        }
                    }
                    playerBox.appendChild(iframe);
                    console.log(iframe);
                    console.log("%cplayerBox已建立解析连接", settings.fontStyle.maxTip);

                    let DIY_iframe;
                    settings.DIY_iframeFunction = () => {
                        if (settings.parseDB.DIY解析栏) {
                            if (!DIY_iframe || DIY_iframe.constructor.name !== "HTMLDivElement") {
                                // 自定义解析地址
                                DIY_iframe = document.createElement("div");
                                DIY_iframe.style = "display: flex; background-color: #0000; font-family: 微软雅黑,黑体,Droid Serif,Arial,sans-serif; font-size: 15px;" + " position: fixed; height: 30px; width: 86%; transform: translateX(-50%); left: 50%; max-width: 600px; border-radius: 15px; box-shadow: 0 0 6px 2px #444; bottom: 5px;";
                                DIY_iframe.innerHTML = "<select style='border: 0; background-color: #ddd; text-align: center; min-width: 80px; width: 80px; height: 100%; border-bottom-left-radius: 15px; border-top-left-radius: 15px;'></select>" + "<input type='text' style='border: 0; background-color: #eee; padding-left: 10px; flex-grow: 1; width: 123px; height: 100%;' placeholder='(当前网址请留空)'>" + "<button style='background-color: #4af; border-color: #4af; text-align: center; color: #fff; min-width: 54px; width: 54px; height: 100%; border-bottom-right-radius: 15px; border-top-right-radius: 15px;'>解析</button>";
                                let DIY_iframe_text = DIY_iframe.querySelector("input[type=text]");

                                async function DIY_iframe_src() {
                                    let newiframe = document.querySelector("iframe[id*=player]");
                                    if (newiframe) {
                                        iframe = newiframe;
                                    }
                                    settings.src.set(DIY_iframe_select.options[DIY_iframe_select.selectedIndex].value, DIY_iframe_text.value ? DIY_iframe_text.value : location.href);
                                    // 预先设置历史解析源（用于适配不支持iframe执行脚本的浏览器）
                                    localStorage.setItem('historyParse', settings.src.get());
                                }

                                let DIY_iframe_select = DIY_iframe.querySelector("select");
                                for (let name in settings.NoAD解析) {
                                    DIY_iframe_select.innerHTML += "<option value='" + settings.NoAD解析[name] + "' style='text-align: center'>" + name + "</option>";
                                }
                                for (let name in settings.AD解析) {
                                    DIY_iframe_select.innerHTML += "<option value='" + settings.AD解析[name] + "' style='text-align: center; color: #fa0; '>⚠" + name + "</option>";
                                }
                                DIY_iframe.querySelector("option[value='" + settings.src.get() + "']").selected = true;
                                settings.randomSeleceParse = async () => {
                                    // arguments 代表输入的所有参数，看不懂可以百度搜索 “js 参数 arguments”
                                    // return arguments ? arguments[Math.floor(Math.random() * arguments.length)] : null;
                                    if (srcs.length > 0) {
                                        let random = Math.floor(Math.random() * srcs.length);
                                        settings.src.set(srcs[random]);
                                        srcs.splice(random, 1);
                                        DIY_iframe.querySelector("option[value='" + settings.src.get() + "']").selected = true;
                                    } else {
                                        if (tested) {
                                            showTip("该视频可能无法解析\n请尝试使用z1解析\n如有疑问请反馈");
                                            return false;
                                        } else {
                                            showTip("解析失败，正在尝试其他解析源");
                                            srcs = others;
                                            others = null;
                                            tested = true;
                                            let random = Math.floor(Math.random() * srcs.length);
                                            settings.src.set(srcs[random]);
                                            srcs.splice(random, 1);
                                        }
                                    }
                                    settings.address = {"0": 0, "-1": 1};
                                }
                                DIY_iframe.querySelector("button").onclick = () => DIY_iframe_src();
                                DIY_iframe_select.onchange = () => {
                                    DIY_iframe_src();
                                }
                                DIY_iframe_text.onkeydown = event => {
                                    if (event.key === "Enter") {
                                        DIY_iframe_src();
                                    }
                                }
                                doElement("toolsbar", toolsBar => {
                                    toolsBar.appendChild(DIY_iframe);
                                });
                            } else if (DIY_iframe.style.visibility === "hidden") {
                                DIY_iframe.style.display = "flex";
                                DIY_iframe.style.visibility = "";
                            }
                        } else if (DIY_iframe && DIY_iframe.constructor.name === "HTMLDivElement" && DIY_iframe.style.visibility === "") {
                            DIY_iframe.style.display = "none";
                            DIY_iframe.style.visibility = "hidden";
                        }
                    }
                    settings.DIY_iframeFunction();

                    (waiter => {
                        waiter /= settings.getElementTimes;
                        let resetPlayerBoxInterval = setInterval(() => {
                            let newPlayerBox = document.querySelector(cssString);
                            if (newPlayerBox !== playerBox && newPlayerBox !== null || newPlayerBox !== null && newPlayerBox.querySelector("iframe[src='" + iframe.src + "']") === null) {
                                console.log("playerBox重新建立连接");
                                let src = iframe.src;
                                iframe.src = "";
                                iframe = iframe.cloneNode(true);
                                iframe.src = src;
                                newPlayerBox.style.zIndex = "1";
                                newPlayerBox.appendChild(iframe);
                                clearInterval(resetPlayerBoxInterval);
                            } else if (document.readyState === "complete" && waiter-- <= 0) {
                                clearInterval(resetPlayerBoxInterval);
                            }
                        }, settings.getElementTimes)
                    })(0);

                    if (doFunction) {
                        doFunction(playerBox, iframe);
                    }
                    setInterval(() => {
                        for (let video of document.getElementsByTagName("video")) {
                            if (video.src) {
                                video.removeAttribute("src");
                                video.load();
                                video.muted = true;
                            }
                        }

                        for (let other_iframe of document.querySelectorAll("iframe,fake-iframe-video")) {
                            if (other_iframe.src !== iframe.src || other_iframe.constructor.name !== iframe.constructor.name) {
                                other_iframe.parentNode.removeChild(other_iframe);
                            }
                        }
                        if (iframe.style !== iframe_style) {
                            iframe.style = iframe_style;
                        }
                    }, settings.getElementTimes);

                    ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange'].forEach(item => {
                        window.addEventListener(item, () => {
                            let toolsBar = document.querySelector("toolsbar");
                            if (document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen) {
                                toolsBar.style.display = 'none';
                            } else {
                                toolsBar.style.display = 'block';
                            }
                        }, true);
                    });
                });
            }

            function hrefToLocation(href) {
                let location = {href: href}, c = 0, start = 0, search;
                for (let i = 0, port; i < href.length; i++) {
                    if (href[i] === "/") {
                        if (++c === 1) {
                            location.protocol = href.substring(start, i);
                        } else if (c === 3) {
                            location.host = href.substring(start + 1, i);
                            if (port) {
                                location.port = href.substring(port + 1, i);
                            } else {
                                location.hostname = location.host;
                                location.port = "";
                            }
                        }
                        if (c <= 3) {
                            start = i;
                        }
                    } else if (href[i] === ":" && c === 2) {
                        location.hostname = href.substring(start + 1, i);
                        port = i;
                    } else if (href[i] === "?" && !search) {
                        location.pathname = href.substring(start, i);
                        search = i;
                    } else if (href[i] === "#" && !location.hash) {
                        location.hash = href.substr(i);
                        if (location.pathname === undefined) {
                            location.pathname = href.substring(c, i);
                        } else if (search) {
                            location.search = href.substring(search, i);
                        }
                        break;
                    }
                }
                if (location.pathname === undefined) {
                    location.pathname = c === 3 ? href.substr(start) : "";
                    location.search = location.hash = "";
                }
                if (location.search === undefined) {
                    if (search) {
                        location.search = href.substr(search);
                    } else {
                        location.search = "";
                    }
                }
                if (location.hash === undefined) {
                    location.hash = "";
                }
                return location;
            }
        } else {
            function setParseVideo() {
                forElements("video", async (videos, thisInterval) => {
                    for (const video of videos) {
                        if (video.poster) video.removeAttribute("poster");
                        if (video.src) {
                            // 解析成功，清空解析列表缓存
                            top.postMessage(key.ENCRYPT("宝塔镇河妖\x00函数\x00settings.address = null", settings.k1, settings.k2), "*");
                            // 设置历史解析
                            top.postMessage(key.ENCRYPT("宝塔镇河妖\x00函数\x00localStorage.setItem('historyParse', settings.src.get())", settings.k1, settings.k2), "*");

                            // 移除广告模块
                            removeElements(['document.getElementById("ADplayer")', 'document.getElementById("ADtip")']);
                            // 等待数据得到响应，移除弹幕模块
                            await settings.parseDB;
                            if (settings.parseDB.弹幕开关 === "\x00") {
                                console.log("正在移除弹幕功能");
                                removeElements(['document.querySelector("div[class$=player-video-wrap]").getElementsByTagName("div")', 'document.querySelector("div[class$=player-danmu]")', 'document.querySelector("div[class$=player-danmaku]")', 'document.querySelector("div[class*=player-comment-box]")', 'document.querySelector("div[class*=player-controller-mask]")', 'document.querySelector("[class*=player-list-icon]")', 'document.querySelector("div[class$=player-menu]")']);
                            }

                            // 进入全屏
                            const openFullscreen = () => {
                                if (document.body.RequestFullScreen) {
                                    document.body.RequestFullScreen()
                                    //兼容Firefox
                                } else if (document.body.mozRequestFullScreen) {
                                    document.body.mozRequestFullScreen()
                                    //兼容Chrome, Safari and Opera等
                                } else if (document.body.webkitRequestFullScreen) {
                                    document.body.webkitRequestFullScreen()
                                    //兼容IE/Edge
                                } else if (document.body.msRequestFullscreen) {
                                    document.body.msRequestFullscreen()
                                }
                            };

                            // 退出全屏
                            const exitFullscreen = () => {
                                if (document.exitFullScreen) {
                                    document.exitFullScreen();
                                    //兼容Firefox
                                } else if (document.mozCancelFullScreen) {
                                    document.mozCancelFullScreen();
                                    //兼容Chrome, Safari and Opera等
                                } else if (document.webkitExitFullscreen) {
                                    document.webkitExitFullscreen();
                                    //兼容IE/Edge
                                } else if (document.body.msExitFullscreen) {
                                    document.body.msExitFullscreen();
                                }
                            };

                            // 获取全屏节点
                            const getFullscreenElement = () => {
                                return (
                                    document.fullscreenElement ||
                                    document.mozFullScreenElement ||
                                    document.msFullScreenElement ||
                                    document.webkitFullscreenElement || null
                                );
                            };

                            // 判断是否移动端
                            if (!detectMobile()) {
                                let fullscreen_btn = document.querySelector("[class*=fullscreen],[class$=player-full] button[class$=full-icon]");
                                if (fullscreen_btn && fullscreen_btn.nodeType === 1) {
                                    // 阻止事件冒泡
                                    fullscreen_btn.parentNode.parentNode.onkeyup = event => event.stopPropagation();
                                }
                                video.onkeyup = event => event.stopPropagation();
                                top.postMessage(key.ENCRYPT("宝塔镇河妖\x00按下Enter获取焦点", settings.k1, settings.k2), "*")
                                onkeyup = video.onkeyup = event => {
                                    if (event.key === "Enter") {
                                        if (video.paused) {
                                            video.play();
                                        }
                                        if (fullscreen_btn && fullscreen_btn.nodeType === 1) {
                                            fullscreen_btn.click();
                                            return false;
                                        } else if (getFullscreenElement()) {
                                            exitFullscreen();
                                        } else {
                                            openFullscreen();
                                        }
                                    }
                                }
                                focus();
                                if (!sessionStorage.getItem("tip全屏")) {
                                    showTip("按下Enter回车键，进入全屏 并 自动播放");
                                    sessionStorage.setItem("tip全屏", "\x01");
                                }
                                video.addEventListener("pause", () => {
                                    if ((video.currentTime - video.duration) > -5) {
                                        console.log("视频播放结束了");
                                        exitFullscreen();
                                    }
                                }, false);
                            } else {
                                // showTip("解析成功");
                            }

                            // 清除监听video计时器
                            clearInterval(thisInterval);
                        }
                    }
                }, 1000, function () {
                    top.postMessage(key.ENCRYPT("宝塔镇河妖\x00给予\x00-1\x00" + location.href, settings.k1, settings.k2), "*");
                });
            }

            if (location.host.indexOf("jiexi.t7g.cn") !== -1) {
                // 移除爱解析p2p提示
                displayNone(["body>div#stats"]);
                setParseVideo();
            } else if (location.host.indexOf("api.okjx.cc:3389") !== -1) {
                // 删除OK解析线路选择功能
                (style => {
                    style.innerHTML = ".slide,.panel,.slide *,.panel *{width: 0 !important; max-width: 0 !important; opacity: 0 !important;}";
                    document.head.appendChild(style);
                })(document.createElement("style"));
                setParseVideo();
            } else if (location.host.indexOf("api.jiubojx.com") !== -1) {
                displayNone("div.adv_wrap_hh");
                setParseVideo();
            } else if (location.host.indexOf("yemu.xyz") !== -1) {
                if (location.pathname.indexOf("jx.php") === -1) {
                    if (location.host.indexOf("www.yemu.xyz") !== -1) {
                        // 删除夜幕解析线路选择功能
                        (style => {
                            style.innerHTML = ".slide,.panel,.slide *,.panel *{width: 0 !important; max-width: 0 !important; opacity: 0 !important;}";
                            document.head.appendChild(style);
                        })(document.createElement("style"));
                    } else if (location.host.indexOf("jx.yemu.xyz") !== -1) {
                        // 移除视频分类提示 及 解析框架处理
                        displayNone(["div.advisory"]);
                        setParseVideo();
                    }
                } else {
                    // 移除背景图片
                    doElement("div[style*='width:100%;height:100%;'][style*='.jpg']", background => {
                        background.style = "width:100%;height:100%;position:relative;z-index:2147483647987;";
                    }, 5000);
                }
            } else if (location.host.indexOf('www.mtosz.com') !== -1) {
                displayNone([".video-panel-blur-image"]);    // 似乎不管用？
                doElement(".video-panel-blur-image", element => {
                    element.style = "display: none; height: 0; width: 0;";
                });
                setParseVideo();
            } else if (location.host.indexOf('v.superchen.top:3389') !== -1) {
                setParseVideo();
            } else if (location.host.indexOf('jx.parwix.com:4433') !== -1) {
                setParseVideo();
            } else if (location.pathname) {
                setParseVideo();
            }
        }


        function displayNone(Tags) {
            let style = document.createElement("style");
            style.innerHTML = "\n";
            for (let i = 0; i < Tags.length; i++) {
                style.innerHTML += Tags[i] + "{display: none !important; height: 0 !important; width: 0 !important; visibility: hidden !important; max-height: 0 !important; max-width: 0 !important; opacity: 0 !important;}\n";
            }
            document.head.insertBefore(style, document.head.firstChild);
        }

        function onLocationChange(handler) {
            let url = top.location.pathname;
            let onLocationChangeInterval = setInterval(() => {
                console.log("正在监听url")
                let href = top.location.pathname;
                if (href.indexOf(url) === -1) {
                    handler();
                    clearInterval(onLocationChangeInterval);
                } else {
                    url = href;
                }
            }, settings.getElementTimes);
        }

        function onFirstLoad(doFunction) {
            if (document.readyState === "complete") {
                if (doFunction) {
                    doFunction();
                }
            } else {
                setTimeout(() => {
                    onFirstLoad(doFunction);
                }, settings.getElementTimes);
            }
        }

        function searchToJSON(search) {
            if (search) {
                return JSON.parse("{\"" + decodeURIComponent(search.substring(1)
                    .replace(/"/g, '\\"')
                    .replace(/&/g, '","')
                    .replace(/=/g, '":"')) + "\"}");
            } else {
                return null;
            }
        }
    }

    function showTip(msg, style = "") {
        // 该函数需要在top内运行，否则可能显示异常
        if (window === top) {
            let tip = document.querySelector(":root>tip");
            if (tip && tip.nodeType === 1) {
                // 防止中途新的showTip事件创建多个tip造成卡顿
                root.removeChild(tip);
            }
            tip = document.createElement("tip");
            // pointer-events: none; 禁用鼠标事件，input标签使用 disabled='disabled' 禁用input标签
            tip.style = style + "pointer-events: none; opacity: 0; background-color: #222a; color: #fff; font-family: 微软雅黑,黑体,Droid Serif,Arial,sans-serif; font-size: 20px; text-align: center; padding: 6px; border-radius: 16px; position: fixed; transform: translate(-50%, -50%); left: 50%; bottom: 15%; z-index: 2147483647;";
            tip.innerHTML = "<style>@keyframes showTip {0%{opacity: 0;} 33.34%{opacity: 1;} 66.67%{opacity: 1;} 100%{opacity: 0;}}</style>\n" + msg;
            let time = msg.replace(/\s/, "").length / 2;   // TODO 2个字/秒
            // cubic-bezier(起始点, 起始点偏移量, 结束点偏移量, 结束点)，这里的 cubic-bezier函数 表示动画速度的变化规律
            tip.style.animation = "showTip " + (time > 2 ? time : 2) + "s cubic-bezier(0," + ((time - 1) > 0 ? (time - 1) / time : 0) + "," + (1 - ((time - 1) > 0 ? (time - 1) / time : 0)) + ",1) 1 normal";
            root.appendChild(tip);
            setTimeout(() => {
                try {
                    root.removeChild(tip);
                } catch (e) {
                    // 排除root没有找到tip
                }
            }, time * 1000);
        } else {
            top.postMessage(key.ENCRYPT("宝塔镇河妖\x00函数\x00showTip('" + msg + "')", settings.k1, settings.k2), "*");
        }
    }

    function xmlHttpRequest(settings) {
        let request = new XMLHttpRequest();
        if (settings.success) {
            request.onload = event => {
                // 加载成功
                settings.success(request, event);
            }
        }
        if (settings.error) {
            request.onerror = event => {
                // 加载失败
                settings.error(request, event);
            }
        }
        if (settings.loadend) {
            request.onloadend = event => {
                // 加载结束
                settings.loadend(request, event);
            }
        }
        if (settings.timeout) {
            request.ontimeout = event => {
                // 加载超时
                settings.timeout(request, event);
            }
        }
        request.open(settings.method ? settings.method : "GET", settings.url ? settings.url : location.href, settings.async ? settings.async : true, settings.username ? settings.username : null, settings.password ? settings.password : null);
        if (settings.headers) {
            for (let header in settings.headers) {
                request.setRequestHeader(header, settings[header]);
            }
        }
        if (settings.dataType) {
            request.responseType = settings.dataType;
        }
        if (settings.data) {
            let data = "";
            for (let key in settings.data) {
                data += key + "=" + settings.data[key] + "&";
            }
            data = data.substr(0, data.length - 1);
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.send(data);
        } else {
            request.send();
        }
        return request;
    }
});}()
</script></body>`);
        console.log("[油猴脚本] 全网VIP视频自动解析播放器(已适配手机).user.js 注入成功!");
    }
    $done({body});
} catch (err) {
    console.log("[油猴脚本] 全网VIP视频自动解析播放器(已适配手机).user.js 执行失败!\n" + err);
    $done({});
}
