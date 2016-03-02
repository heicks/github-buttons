(function(){var t,e,n,r,a,o,i,c,s,l,u,h,d,f,p,b,g,m,y,w,v,_,C,k=[].slice,$=function(t,e){function n(){this.constructor=t}for(var r in e)x.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},x={}.hasOwnProperty;for(C=this,m=C.document,o={api:"https://api.github.com",anchorClass:"github-button",iconClass:"octicon",icon:"octicon-mark-github",scriptId:"github-bjs"},(o.script=m.getElementById(o.scriptId))&&(o.url=o.script.src.replace(/[^\/]*([?#].*)?$/,"")),s=function(){function t(){}var e;return t.flatten=function(t){var e,n;return e=function(t,r){var a,o,i,c,s,l;switch(Object.prototype.toString.call(t)){case"[object Object]":for(c in t)l=t[c],e(l,r?r+"."+c:c);break;case"[object Array]":for(a=i=0,s=t.length;s>i;a=++i)o=t[a],e(o,r+"["+a+"]");break;default:n[r]=t}},n={},e(t,""),n},t.expand=function(t){var n,r,a,o,i,c;o=[];for(n in t){for(c=t[n],a=n.match(/((?!\[\d+\])[^.])+|\[\d+\]/g),i=o,r=0;a.length;)null==i[r]&&(i[r]=a[0]===e(a[0])?{}:[]),i=i[r],r=e(a.shift());i[r]=c}return o[0]},e=function(t){var e;return(e=t.match(/^\[(\d+)\]$/))?Number(e[1]):t},t}(),b=function(){function t(){}return t.stringify=function(t){var e,n,r;n=[];for(e in t)r=t[e],n.push(e+"="+(null!=r?r:""));return n.join("&")},t.parse=function(t){var e,n,r,a,o,i,c,s;for(a={},i=t.split("&"),e=0,r=i.length;r>e;e++)o=i[e],""!==o&&(c=o.split("="),n=c[0],s=2<=c.length?k.call(c,1):[],""!==n&&(a[n]=s.join("=")));return a},t}(),d=function(){function t(){}return t.encode=function(t){return"#"+encodeURIComponent(b.stringify(s.flatten(t)))},t.decode=function(t){return null==t&&(t=m.location.hash),s.expand(b.parse(decodeURIComponent(t.replace(/^#/,""))))||{}},t}(),c=function(){function t(t){this.$=t}var e,n;return t.prototype.on=function(){var t,n,r,a,o,i,c;for(r=2<=arguments.length?k.call(arguments,0,o=arguments.length-1):(o=0,[]),a=arguments[o++],t=function(t){return function(e){return a.call(t,e||C.event)}}(this),i=0,c=r.length;c>i;i++)n=r[i],e(this.$,n,t)},t.prototype.once=function(){var t,r,a,o,i,c,s;for(a=2<=arguments.length?k.call(arguments,0,i=arguments.length-1):(i=0,[]),o=arguments[i++],t=function(e){return function(r){var i,c,s;for(c=0,s=a.length;s>c;c++)i=a[c],n(e.$,i,t);return o.call(e,r||C.event)}}(this),c=0,s=a.length;s>c;c++)r=a[c],e(this.$,r,t)},e=function(t,e,n){t.addEventListener?t.addEventListener(""+e,n):t.attachEvent("on"+e,n)},n=function(t,e,n){t.removeEventListener?t.removeEventListener(""+e,n):t.detachEvent("on"+e,n)},t}(),i=function(t){function e(t,e){this.$=t&&1===t.nodeType?t:m.createElement(t),e&&e.call(this,this.$)}var n,r,a,o;return $(e,t),e.prototype.addClass=function(t){r(this.$,t)||n(this.$,t)},e.prototype.removeClass=function(t){r(this.$,t)&&o(this.$,t)},e.prototype.hasClass=function(t){return r(this.$,t)},n=function(t,e){t.className+=" "+e},o=function(t,e){t.className=(" "+t.className+" ").replace(a," ").replace(" "+e+" ","").replace(/^ | $/,"")},r=function(t,e){return(" "+t.className+" ").replace(a," ").indexOf(" "+e+" ")>=0},a=/[ \t\n\f\r]+/g,e}(c),u=function(t){function e(t){e.__super__.constructor.call(this,"iframe",function(e){var n,r,a,o;r={allowtransparency:!0,scrolling:"no",frameBorder:0};for(n in r)o=r[n],e.setAttribute(n,o);a={border:"none",height:"0",width:"1px"};for(n in a)o=a[n],e.style[n]=o;t&&t.call(this,e)})}var n,r;return $(e,t),e.prototype.html=function(t){var e;try{e=this.$.contentWindow.document,e.open(),e.write(t),e.close()}catch(n){}},e.prototype.load=function(t){this.$.src=t},e.prototype.size=function(){var t,e,n,a,o,i;try{return n=this.$.contentWindow.document,o=n.documentElement,t=n.body,i=Math.max(o.scrollWidth,t.scrollWidth),a=Math.max(o.scrollHeight,t.scrollHeight),t.getBoundingClientRect&&(t.style.display="inline-block",e=t.getBoundingClientRect(),i=Math.max(i,r(e.width||e.right-e.left)),a=Math.max(a,r(e.height||e.bottom-e.top)),t.style.display=""),{width:i+"px",height:a+"px"}}catch(c){}},e.prototype.resize=function(t){var e,n,r;n=null!=t?t:this.size()||{},r=n.width,e=n.height,r&&(this.$.style.width=r),e&&(this.$.style.height=e)},n=C.devicePixelRatio||1,r=function(t){return n>1?Math.ceil(Math.round(t*n)/n*2)/2||0:Math.ceil(t)||0},e}(i),t=function(){function t(){}return t.parse=function(t){var e,n,r,a;return{href:t.href,text:t.getAttribute("data-text")||t.textContent||t.innerText||"",data:{count:{api:(e=t.getAttribute("data-count-api"))&&/#/.test(e)?e.replace(/^(?!\/)/,"/"):"",href:t.getAttribute("data-count-href")||t.href,aria:{label:(r=t.getAttribute("data-count-aria-label"))?r:""}},style:(a=t.getAttribute("data-style"))?a:"",icon:(n=t.getAttribute("data-icon"))?n:""},aria:{label:(r=t.getAttribute("aria-label"))?r:""}}},t}(),n=function(t){function e(t,n,r){var a;e.__super__.constructor.call(this,n),a=function(e){return function(){var n;n=e.size(),e.once("load",function(){this.resize(n),r&&r.call(this,this.$)}),e.load(o.url+"buttons.html"+t)}}(this),this.once("load",function(){(n=this.$.contentWindow.callback)?new i(n.script,function(t){this.on("load","error",a),t.readyState&&this.on("readystatechange",function(){/i/.test(t.readyState)||a()})}):a()}),this.html('<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">\n<title></title>\n<link rel="stylesheet" href="'+o.url+'assets/css/buttons.css">\n<script>document.location.hash = "'+t+'";</script>\n</head>\n<body>\n<script src="'+o.script.src+'"></script>\n</body>\n</html>')}return $(e,t),e}(u),r=function(){function t(t){t&&t.data&&(m.body.className=t.data.style||"",new e(t.href,null,function(e){e.className="button",t.aria.label&&e.setAttribute("aria-label",t.aria.label),new i("i",function(n){n.className=(t.data.icon||o.icon)+(o.iconClass?" "+o.iconClass:""),n.setAttribute("aria-hidden","true"),e.appendChild(n)}),e.appendChild(m.createTextNode(" ")),new i("span",function(n){t.text&&n.appendChild(m.createTextNode(t.text)),e.appendChild(n)}),m.body.appendChild(e)}),function(t,n){t&&t.api&&new e(t.href,n,function(e){e.className="count",new i("b",function(t){e.appendChild(t)}),new i("i",function(t){e.appendChild(t)}),new i("span",function(n){var r;e.appendChild(n),r=function(){var e,n;return n=t.api.split("#")[0],e=b.parse(n.split("?").slice(1).join("?")),e.callback="callback",n.split("?")[0]+"?"+b.stringify(e)}(),new i("script",function(a){var i;a.async=!0,a.src=""+o.api+r,C.callback=function(r){var a;C.callback=null,200===r.meta.status&&(a=s.flatten(r.data)[t.api.split("#").slice(1).join("#")],"[object Number]"===Object.prototype.toString.call(a)&&(a=(""+a).replace(/\B(?=(\d{3})+(?!\d))/g,",")),n.appendChild(m.createTextNode(a)),t.aria.label&&e.setAttribute("aria-label",t.aria.label.replace("#",a)),m.body.appendChild(e))},C.callback.script=a,this.on("error",function(){C.callback=null}),a.readyState&&this.on("readystatechange",function(){"loaded"===a.readyState&&a.children&&"loading"===a.readyState&&(C.callback=null)}),i=m.getElementsByTagName("head")[0],i.insertBefore(a,i.firstChild)})})})}(t.data.count,t.href))}var e;return e=function(t){function e(t,a,o){e.__super__.constructor.call(this,"a",function(e){var i;if(n){if((e.href=a)&&!r.test(e.href))try{e.href=new URL(t,a).href}catch(c){n.href=a,e.href=t,i=m.createElement("div"),i.innerHTML=e.outerHTML,e.href=i.firstChild.href,i=null,n.href=m.location.href,n.removeAttribute("href")}else e.href=t;r.test(e.href)&&(e.href="#",e.target="_self")}o(e)})}var n,r;return $(e,t),n=m.getElementsByTagName("base")[0],r=/^javascript:/i,e}(i),t}(),h=function(){function t(){}return t.low_rate_limit=!1,C.callback=function(e){t.rate_limit=e.data,t.low_rate_limit=t.rate_limit.resources.core.remaining<16},t.update=function(){C.callback.script||new i("script",function(t){var e;t.async=!0,t.src="https://api.github.com/rate_limit?callback=callback",C.callback.script=t,this.on("readystatechange","load","error",function(){t.readyState&&!/loaded|complete/.test(t.readyState)||(t.parentNode.removeChild(t),C.callback.script=null)}),e=m.getElementsByTagName("head")[0],e.insertBefore(t,e.firstChild)})},t.update(),t}(),l=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return $(e,t),e.prototype.on=function(){var t,n,r,a,o,c,s,l;if(r=2<=arguments.length?k.call(arguments,0,o=arguments.length-1):(o=0,[]),a=arguments[o++],r.indexOf("change")>=0)for(t=function(t){return function(e){return a.call(t,e||C.event)}}(this),l=this.$.elements,c=0,s=l.length;s>c;c++)n=l[c],new i(n).on("change","input",t);return e.__super__.on.apply(this,arguments)},e.prototype.serialize=function(){var t,e,n,r,a;for(t={},a=this.$.elements,e=0,n=a.length;n>e;e++)if(r=a[e],r.name)switch(r.type){case"radio":case"checkbox":r.checked&&(t[r.name]=r.value);break;default:t[r.name]=r.value}return t},e}(i),g=function(t){function e(){var t;e.__super__.constructor.apply(this,arguments),t=function(t){return function(){var e,n,r,a,o,c;for(r=t.$.contentWindow.document,n=r.getElementsByTagName("base")[0],n.parentNode.removeChild(n),c=r.getElementsByTagName("a"),a=0,o=c.length;o>a;a++)e=c[a],e.href="#",e.style["pointer-events"]="none";new i("div",function(t){var e,n,a;n={position:"fixed",top:0,right:0,bottom:0,left:0,cursor:"pointer",background:"transparent",opacity:0,filter:"alpha(opacity=0)"};for(e in n)a=n[e],t.style[e]=a;r.body.appendChild(t)}),new i(r.body).on("click",function(){t.$.parentNode.click()})}}(this),this.on("load",function(){try{return t()}catch(e){return new c(this.$.contentWindow).on("load",t)}})}return $(e,t),e}(i),f=function(t){function e(t,n){var r,a,i,c;i=t.href,c=t.text,a=t.data,r=t.aria,e.__super__.constructor.call(this,"a",function(t){var e,s;t.className=o.anchorClass,t.href=i,t.appendChild(m.createTextNode(""+c));for(e in a)s=a[e],t.setAttribute("data-"+e,s);for(e in r)s=r[e],t.setAttribute("aria-"+e,s);n&&n(t)})}return $(e,t),e}(i),p=function(t){function e(t){e.__super__.constructor.call(this,function(e){t.appendChild(e),e.src="buttons.html"}),this.on("load",function(){var t,e;(t=this.$.contentWindow.callback)?(e=t.script,e.readyState?new i(e).on("readystatechange",function(){/loaded|complete/.test(e.readyState)&&this.resize()}):new i(e).on("load","error",function(){this.resize()})):this.resize()})}return $(e,t),e.prototype.load=function(t){this.$.parentNode.style.height=("mega"===t.data.style?28:20)+2+"px",this.$.style.width="1px",this.$.style.height="0",this.$.src="buttons.html"+d.encode(t),this.$.contentWindow.document.location.reload()},e}(u),a=function(t){function e(){e.__super__.constructor.apply(this,arguments),this.on("focus",function(){this.$.select()}),this.on("click",function(){this.$.select()}),this.on("mouseup",function(t){return t.preventDefault(),!1})}return $(e,t),e}(i),e=function(e){function n(e,n){var r,a,o,i,c,s,l,u,p;this.$=e,i=n.content,s=n.preview,r=s.button,c=s.frame,o=s.code,p=s.warning,l=n.snippet,u=n.user_repo,l.$.value='<!-- Place this tag right after the last button or just before your close body tag. -->\n<script async defer id="github-bjs" src="https://buttons.github.io/buttons.js"></script>',a=function(e){return function(n){var a,s,l,b,g,m,y,w,v,_;if(s=n.force,w=e.serialize(),w.type){for(i.removeClass("hidden"),v=["repo","standard-icon"],l=0,g=v.length;g>l;l++)y=v[l],e.$.elements[y].disabled="follow"===w.type;for(_=["show-count"],b=0,m=_.length;m>b;b++)y=_[b],e.$.elements[y].disabled="download"===w.type;w.user&&!/^[a-z0-9][a-z0-9-]*$/i.test(w.user)||"follow"!==w.type&&w.repo&&(!/^[\w.-]+$/.test(w.repo)||/^\.\.?$/.test(w.repo))?u.addClass("has-error"):(u.removeClass("has-error"),""===w.user||"follow"!==w.type&&""===w.repo?u.addClass("has-warning"):u.removeClass("has-warning")),(u.hasClass("has-error")||u.hasClass("has-warning"))&&(w.user="ntkme",w.repo="github-buttons"),(e.cache!==(a=d.encode(w))||s)&&(e.cache=a,new f(e.parse(w),function(n){var a;o.$.value="<!-- Place this tag where you want the button to render. -->\n"+n.outerHTML,r.addClass("hidden"),null!=w["show-count"]&&"download"!==w.type&&(h.update(),h.low_rate_limit&&(r.removeClass("hidden"),a=new Date(1e3*h.rate_limit.resources.core.reset),(!e.reset||a>e.reset)&&(e.reset=a,p.removeClass("hidden")),s?p.addClass("hidden"):n.removeAttribute("data-count-api"))),c.load(t.parse(n)),n=null}))}}}(this),r.on("click",function(t){return t.preventDefault(),a({force:!0}),!1}),this.on("change",a)}return $(n,e),n.prototype.parse=function(t){var e,n,r,a;if(null==t&&(t=this.serialize()),r=t.type,a=t.user,n=t.repo,e={className:"github-button",href:function(){switch(r){case"follow":return"https://github.com/"+a;case"watch":case"star":return"https://github.com/"+a+"/"+n;case"fork":return"https://github.com/"+a+"/"+n+"/fork";case"issue":return"https://github.com/"+a+"/"+n+"/issues";case"download":return"https://github.com/"+a+"/"+n+"/archive/master.zip";default:return"https://github.com/"}}(),text:function(){switch(r){case"follow":return"Follow @"+a;default:return r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()}}(),data:{icon:function(){switch(r){case"watch":return"octicon-eye";case"star":return"octicon-star";case"fork":return"octicon-repo-forked";case"issue":return"octicon-issue-opened";case"download":return"octicon-cloud-download";default:return"octicon-mark-github"}}()},aria:{label:function(){switch(r){case"follow":return"Follow @"+a+" on GitHub";case"watch":case"star":case"fork":case"issue":case"download":return r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()+" "+a+"/"+n+" on GitHub";default:return"GitHub"}}()}},null!=t["large-button"]&&(e.data.style="mega"),null!=t["show-count"])switch(r){case"follow":e.data["count-href"]="/"+a+"/followers",e.data["count-api"]="/users/"+a+"#followers",e.data["count-aria-label"]="# followers on GitHub";break;case"watch":e.data["count-href"]="/"+a+"/"+n+"/watchers",e.data["count-api"]="/repos/"+a+"/"+n+"#subscribers_count",e.data["count-aria-label"]="# watchers on GitHub";break;case"star":e.data["count-href"]="/"+a+"/"+n+"/stargazers",e.data["count-api"]="/repos/"+a+"/"+n+"#stargazers_count",e.data["count-aria-label"]="# stargazers on GitHub";break;case"fork":e.data["count-href"]="/"+a+"/"+n+"/network",e.data["count-api"]="/repos/"+a+"/"+n+"#forks_count",e.data["count-aria-label"]="# forks on GitHub";break;case"issue":e.data["count-api"]="/repos/"+a+"/"+n+"#open_issues_count",e.data["count-aria-label"]="# issues on GitHub"}return null==t["standard-icon"]&&"octicon-mark-github"!==e.data.icon||delete e.data.icon,e},n}(l),_=m.getElementsByTagName("iframe"),w=0,v=_.length;v>w;w++)y=_[w],new g(y);new e(m.getElementById("button-config"),{content:new i(m.getElementById("content")),user_repo:new i(m.getElementById("user-repo")),preview:{button:new i(m.getElementById("preview-button")),frame:new p(m.getElementById("preview")),code:new a(m.getElementById("code")),warning:new i(m.getElementById("preview-warning"))},snippet:new a(m.getElementById("snippet"))}),this.onbeforeunload=function(){}}).call(this);
//# sourceMappingURL=main.js.map