(function(){function t(a){return k?k:a.matches?k=a.matches:a.webkitMatchesSelector?k=a.webkitMatchesSelector:a.mozMatchesSelector?k=a.mozMatchesSelector:a.msMatchesSelector?k=a.msMatchesSelector:a.oMatchesSelector?k=a.oMatchesSelector:k=e.matchesSelector}function q(a,b,c){if("_root"==b)return c;if(a!==c){if(t(a).call(a,b))return a;if(a.parentNode)return m++,q(a.parentNode,b,c)}}function u(a,b,c,e){d[a.id]||(d[a.id]={});d[a.id][b]||(d[a.id][b]={});d[a.id][b][c]||(d[a.id][b][c]=[]);d[a.id][b][c].push(e)}
function v(a,b,c,e){if(d[a.id])if(!b)for(var f in d[a.id])d[a.id].hasOwnProperty(f)&&(d[a.id][f]={});else if(!e&&!c)d[a.id][b]={};else if(!e)delete d[a.id][b][c];else if(d[a.id][b][c])for(f=0;f<d[a.id][b][c].length;f++)if(d[a.id][b][c][f]===e){d[a.id][b][c].splice(f,1);break}}function w(a,b,c){if(d[a][c]){var k=b.target||b.srcElement,f,g,h={},n=g=0;m=0;for(f in d[a][c])d[a][c].hasOwnProperty(f)&&(g=q(k,f,l[a].element))&&e.matchesEvent(c,l[a].element,g,"_root"==f,b)&&(m++,d[a][c][f].match=g,h[m]=d[a][c][f]);
b.stopPropagation=function(){b.cancelBubble=!0};for(g=0;g<=m;g++)if(h[g])for(n=0;n<h[g].length;n++){if(!1===h[g][n].call(h[g].match,b)){e.cancel(b);return}if(b.cancelBubble)return}}}function r(a,b,c,k){function f(a){return function(b){w(g,b,a)}}if(this.element){a instanceof Array||(a=[a]);c||"function"!=typeof b||(c=b,b="_root");var g=this.id,h;for(h=0;h<a.length;h++)k?v(this,a[h],b,c):(d[g]&&d[g][a[h]]||e.addEvent(this,a[h],f(a[h])),u(this,a[h],b,c));return this}}function e(a,b){if(!(this instanceof
e)){for(var c in l)if(l[c].element===a)return l[c];p++;l[p]=new e(a,p);return l[p]}this.element=a;this.id=b}var k,m=0,p=0,d={},l={};e.prototype.on=function(a,b,c){return r.call(this,a,b,c)};e.prototype.off=function(a,b,c){return r.call(this,a,b,c,!0)};e.matchesSelector=function(){};e.cancel=function(a){a.preventDefault();a.stopPropagation()};e.addEvent=function(a,b,c){a.element.addEventListener(b,c,"blur"==b||"focus"==b)};e.matchesEvent=function(){return!0};"undefined"!==typeof module&&module.exports&&
(module.exports=e);window.Gator=e})();
!function(){var e=function(e,t){if("object"==typeof e&&"string"==typeof t){var r=e,i=r.tagName,a=new RegExp("^<"+i,"i"),n=new RegExp(i+">$","i"),o="<"+t,d=t+">",u=document.createElement("div");u.innerHTML=r.outerHTML.replace(a,o).replace(n,d);var l=u.firstChild;return e.parentNode.replaceChild(l,e),l}},t=function(t){var r="true"==t.getAttribute("data-fs")?" allowfullscreen":"",i=t.getAttribute("data-embed")||!1,a=t.getElementsByTagName("img")[0],n=a.getAttribute("src")||!1,o=a.width,d=a.height;if(i&&o&&d){var u=e(t,"div"),l=' width="'+o+'"',c=' height="'+d+'"';u.setAttribute("data-img",n),u.className=u.className+" play",u.style.paddingTop=parseInt(d)/parseInt(o)*100+"%",u.innerHTML="<iframe"+l+c+r+' src="'+i+'" frameborder="0"></iframe>'}};window.prettyEmbedYoutubeRestore=function(t){var r=t.getAttribute("data-img")||!1;if(r){for(var i=t.className.split(" "),a=[],n=0;n<i.length;n++)"play"!==i[n]&&(a[a.length]=i[n]);t.className=a.join(" "),t.removeAttribute("style"),t.innerHTML='<img src="'+r+'" />',e(t,"a")}},window.prettyEmbedYoutubeInit=function(e){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){"undefined"==typeof e&&(e=document.querySelectorAll("a.embed-youtube"));for(var r=e.length-1;r>=0;r--)t(e[r])}},Gator(window).on("load",prettyEmbedYoutubeInit),Gator(document).on("click","a.embed-youtube",function(e){e.preventDefault(),t(this)})}();
!function(){var e=function(e,t){e.className=e.className.replace(new RegExp("(?:^|\\s)"+t+"(?!\\S)"),"")},t="jonnitto-prettyembed-popup",o='<div class="'+t+'-holder"><iframe class="'+t+'-iframe" src="%src%" frameborder="0"%fs%></iframe></div>',n=document.createElement("div");n.className=t,n.innerHTML='<div class="'+t+'-inner"><button type="button" class="jonnitto-prettyembed-popup-close">&times;</button><div id="popup-youtube" class="'+t+'-content"></div></div>',document.body.appendChild(n),$popup=document.getElementById("popup-youtube");var p=function(){e(document.body,"jonnitto-prettyembed-popup-visible"),setTimeout(function(){$popup.innerHTML=""},300)},i=function(e){var t="true"==this.getAttribute("data-fs")?" allowfullscreen":"",n=this.getAttribute("data-embed")||!1;n&&(e.preventDefault(),$popup.innerHTML=o.replace("%src%",n).replace("%fs%",t),setTimeout(function(){document.body.className+=" jonnitto-prettyembed-popup-visible"},100))};Gator(document).on("click","a.popup-youtube",i),Gator(document).on("click",".jonnitto-prettyembed-popup",p),Gator(document).on("keyup",function(e){27==e.keyCode&&-1!==document.body.className.indexOf("jonnitto-prettyembed-popup-visible")&&p()})}();
