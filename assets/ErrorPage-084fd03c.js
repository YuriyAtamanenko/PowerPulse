import{m as $e,u as Ae,R as ce,r as R,i as Oe,j as oe}from"./index-03047ebb.js";function re(){return re=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},re.apply(this,arguments)}function Te(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function Ne(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var Re=function(){function e(t){var n=this;this._insertTag=function(a){var s;n.tags.length===0?n.insertionPoint?s=n.insertionPoint.nextSibling:n.prepend?s=n.container.firstChild:s=n.before:s=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,s),n.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Ne(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var s=Te(a);try{s.insertRule(n,s.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}(),S="-ms-",Y="-moz-",f="-webkit-",ye="comm",ae="rule",se="decl",Fe="@import",ge="@keyframes",Me="@layer",je=Math.abs,J=String.fromCharCode,Ie=Object.assign;function Le(e,r){return x(e,0)^45?(((r<<2^x(e,0))<<2^x(e,1))<<2^x(e,2))<<2^x(e,3):0}function ve(e){return e.trim()}function qe(e,r){return(e=r.exec(e))?e[0]:e}function u(e,r,t){return e.replace(r,t)}function te(e,r){return e.indexOf(r)}function x(e,r){return e.charCodeAt(r)|0}function q(e,r,t){return e.slice(r,t)}function O(e){return e.length}function ie(e){return e.length}function K(e,r){return r.push(e),e}function ze(e,r){return e.map(r).join("")}var Q=1,j=1,we=0,E=0,v=0,I="";function X(e,r,t,n,a,s,i){return{value:e,root:r,parent:t,type:n,props:a,children:s,line:Q,column:j,length:i,return:""}}function L(e,r){return Ie(X("",null,null,"",null,null,0),e,{length:-e.length},r)}function Ve(){return v}function We(){return v=E>0?x(I,--E):0,j--,v===10&&(j=1,Q--),v}function _(){return v=E<we?x(I,E++):0,j++,v===10&&(j=1,Q++),v}function N(){return x(I,E)}function G(){return E}function W(e,r){return q(I,e,r)}function z(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xe(e){return Q=j=1,we=O(I=e),E=0,[]}function Ce(e){return I="",e}function H(e){return ve(W(E-1,ne(e===91?e+2:e===40?e+1:e)))}function Be(e){for(;(v=N())&&v<33;)_();return z(e)>2||z(v)>3?"":" "}function De(e,r){for(;--r&&_()&&!(v<48||v>102||v>57&&v<65||v>70&&v<97););return W(e,G()+(r<6&&N()==32&&_()==32))}function ne(e){for(;_();)switch(v){case e:return E;case 34:case 39:e!==34&&e!==39&&ne(v);break;case 40:e===41&&ne(e);break;case 92:_();break}return E}function Ke(e,r){for(;_()&&e+v!==47+10;)if(e+v===42+42&&N()===47)break;return"/*"+W(r,E-1)+"*"+J(e===47?e:_())}function Ge(e){for(;!z(N());)_();return W(e,E)}function He(e){return Ce(U("",null,null,null,[""],e=xe(e),0,[0],e))}function U(e,r,t,n,a,s,i,c,m){for(var w=0,h=0,l=i,A=0,k=0,p=0,o=1,b=1,y=1,g=0,C="",F=a,$=s,P=n,d=C;b;)switch(p=g,g=_()){case 40:if(p!=108&&x(d,l-1)==58){te(d+=u(H(g),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:d+=H(g);break;case 9:case 10:case 13:case 32:d+=Be(p);break;case 92:d+=De(G()-1,7);continue;case 47:switch(N()){case 42:case 47:K(Ue(Ke(_(),G()),r,t),m);break;default:d+="/"}break;case 123*o:c[w++]=O(d)*y;case 125*o:case 59:case 0:switch(g){case 0:case 125:b=0;case 59+h:y==-1&&(d=u(d,/\f/g,"")),k>0&&O(d)-l&&K(k>32?ue(d+";",n,t,l-1):ue(u(d," ","")+";",n,t,l-2),m);break;case 59:d+=";";default:if(K(P=fe(d,r,t,w,h,a,c,C,F=[],$=[],l),s),g===123)if(h===0)U(d,r,P,P,F,s,l,c,$);else switch(A===99&&x(d,3)===110?100:A){case 100:case 108:case 109:case 115:U(e,P,P,n&&K(fe(e,P,P,0,0,a,c,C,a,F=[],l),$),a,$,l,c,n?F:$);break;default:U(d,P,P,P,[""],$,0,c,$)}}w=h=k=0,o=y=1,C=d="",l=i;break;case 58:l=1+O(d),k=p;default:if(o<1){if(g==123)--o;else if(g==125&&o++==0&&We()==125)continue}switch(d+=J(g),g*o){case 38:y=h>0?1:(d+="\f",-1);break;case 44:c[w++]=(O(d)-1)*y,y=1;break;case 64:N()===45&&(d+=H(_())),A=N(),h=l=O(C=d+=Ge(G())),g++;break;case 45:p===45&&O(d)==2&&(o=0)}}return s}function fe(e,r,t,n,a,s,i,c,m,w,h){for(var l=a-1,A=a===0?s:[""],k=ie(A),p=0,o=0,b=0;p<n;++p)for(var y=0,g=q(e,l+1,l=je(o=i[p])),C=e;y<k;++y)(C=ve(o>0?A[y]+" "+g:u(g,/&\f/g,A[y])))&&(m[b++]=C);return X(e,r,t,a===0?ae:c,m,w,h)}function Ue(e,r,t){return X(e,r,t,ye,J(Ve()),q(e,2,-2),0)}function ue(e,r,t,n){return X(e,r,t,se,q(e,0,n),q(e,n+1,-1),n)}function M(e,r){for(var t="",n=ie(e),a=0;a<n;a++)t+=r(e[a],a,e,r)||"";return t}function Ye(e,r,t,n){switch(e.type){case Me:if(e.children.length)break;case Fe:case se:return e.return=e.return||e.value;case ye:return"";case ge:return e.return=e.value+"{"+M(e.children,n)+"}";case ae:e.value=e.props.join(",")}return O(t=M(e.children,n))?e.return=e.value+"{"+t+"}":""}function Ze(e){var r=ie(e);return function(t,n,a,s){for(var i="",c=0;c<r;c++)i+=e[c](t,n,a,s)||"";return i}}function Je(e){return function(r){r.root||(r=r.return)&&e(r)}}var Qe=function(r,t,n){for(var a=0,s=0;a=s,s=N(),a===38&&s===12&&(t[n]=1),!z(s);)_();return W(r,E)},Xe=function(r,t){var n=-1,a=44;do switch(z(a)){case 0:a===38&&N()===12&&(t[n]=1),r[n]+=Qe(E-1,t,n);break;case 2:r[n]+=H(a);break;case 4:if(a===44){r[++n]=N()===58?"&\f":"",t[n]=r[n].length;break}default:r[n]+=J(a)}while(a=_());return r},er=function(r,t){return Ce(Xe(xe(r),t))},de=new WeakMap,rr=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!de.get(n))&&!a){de.set(r,!0);for(var s=[],i=er(t,s),c=n.props,m=0,w=0;m<i.length;m++)for(var h=0;h<c.length;h++,w++)r.props[w]=s[m]?i[m].replace(/&\f/g,c[h]):c[h]+" "+i[m]}}},tr=function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}};function Se(e,r){switch(Le(e,r)){case 5103:return f+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return f+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return f+e+Y+e+S+e+e;case 6828:case 4268:return f+e+S+e+e;case 6165:return f+e+S+"flex-"+e+e;case 5187:return f+e+u(e,/(\w+).+(:[^]+)/,f+"box-$1$2"+S+"flex-$1$2")+e;case 5443:return f+e+S+"flex-item-"+u(e,/flex-|-self/,"")+e;case 4675:return f+e+S+"flex-line-pack"+u(e,/align-content|flex-|-self/,"")+e;case 5548:return f+e+S+u(e,"shrink","negative")+e;case 5292:return f+e+S+u(e,"basis","preferred-size")+e;case 6060:return f+"box-"+u(e,"-grow","")+f+e+S+u(e,"grow","positive")+e;case 4554:return f+u(e,/([^-])(transform)/g,"$1"+f+"$2")+e;case 6187:return u(u(u(e,/(zoom-|grab)/,f+"$1"),/(image-set)/,f+"$1"),e,"")+e;case 5495:case 3959:return u(e,/(image-set\([^]*)/,f+"$1$`$1");case 4968:return u(u(e,/(.+:)(flex-)?(.*)/,f+"box-pack:$3"+S+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+f+e+e;case 4095:case 3583:case 4068:case 2532:return u(e,/(.+)-inline(.+)/,f+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(e)-1-r>6)switch(x(e,r+1)){case 109:if(x(e,r+4)!==45)break;case 102:return u(e,/(.+:)(.+)-([^]+)/,"$1"+f+"$2-$3$1"+Y+(x(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~te(e,"stretch")?Se(u(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(x(e,r+1)!==115)break;case 6444:switch(x(e,O(e)-3-(~te(e,"!important")&&10))){case 107:return u(e,":",":"+f)+e;case 101:return u(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+f+(x(e,14)===45?"inline-":"")+"box$3$1"+f+"$2$3$1"+S+"$2box$3")+e}break;case 5936:switch(x(e,r+11)){case 114:return f+e+S+u(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return f+e+S+u(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return f+e+S+u(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return f+e+S+e+e}return e}var nr=function(r,t,n,a){if(r.length>-1&&!r.return)switch(r.type){case se:r.return=Se(r.value,r.length);break;case ge:return M([L(r,{value:u(r.value,"@","@"+f)})],a);case ae:if(r.length)return ze(r.props,function(s){switch(qe(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return M([L(r,{props:[u(s,/:(read-\w+)/,":"+Y+"$1")]})],a);case"::placeholder":return M([L(r,{props:[u(s,/:(plac\w+)/,":"+f+"input-$1")]}),L(r,{props:[u(s,/:(plac\w+)/,":"+Y+"$1")]}),L(r,{props:[u(s,/:(plac\w+)/,S+"input-$1")]})],a)}return""})}},ar=[nr],sr=function(r){var t=r.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(o){var b=o.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(o),o.setAttribute("data-s",""))})}var a=r.stylisPlugins||ar,s={},i,c=[];i=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(o){for(var b=o.getAttribute("data-emotion").split(" "),y=1;y<b.length;y++)s[b[y]]=!0;c.push(o)});var m,w=[rr,tr];{var h,l=[Ye,Je(function(o){h.insert(o)})],A=Ze(w.concat(a,l)),k=function(b){return M(He(b),A)};m=function(b,y,g,C){h=g,k(b?b+"{"+y.styles+"}":y.styles),C&&(p.inserted[y.name]=!0)}}var p={key:t,sheet:new Re({key:t,container:i,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:s,registered:{},insert:m};return p.sheet.hydrate(c),p},ir=!0;function cr(e,r,t){var n="";return t.split(" ").forEach(function(a){e[a]!==void 0?r.push(e[a]+";"):n+=a+" "}),n}var Ee=function(r,t,n){var a=r.key+"-"+t.name;(n===!1||ir===!1)&&r.registered[a]===void 0&&(r.registered[a]=t.styles)},or=function(r,t,n){Ee(r,t,n);var a=r.key+"-"+t.name;if(r.inserted[t.name]===void 0){var s=t;do r.insert(t===s?"."+a:"",s,r.sheet,!0),s=s.next;while(s!==void 0)}};function fr(e){for(var r=0,t,n=0,a=e.length;a>=4;++n,a-=4)t=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var ur=/[A-Z]|^ms/g,dr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ke=function(r){return r.charCodeAt(1)===45},he=function(r){return r!=null&&typeof r!="boolean"},ee=$e(function(e){return ke(e)?e:e.replace(ur,"-$&").toLowerCase()}),le=function(r,t){switch(r){case"animation":case"animationName":if(typeof t=="string")return t.replace(dr,function(n,a,s){return T={name:a,styles:s,next:T},a})}return Ae[r]!==1&&!ke(r)&&typeof t=="number"&&t!==0?t+"px":t};function V(e,r,t){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":{if(t.anim===1)return T={name:t.name,styles:t.styles,next:T},t.name;if(t.styles!==void 0){var n=t.next;if(n!==void 0)for(;n!==void 0;)T={name:n.name,styles:n.styles,next:T},n=n.next;var a=t.styles+";";return a}return hr(e,r,t)}case"function":{if(e!==void 0){var s=T,i=t(e);return T=s,V(e,r,i)}break}}if(r==null)return t;var c=r[t];return c!==void 0?c:t}function hr(e,r,t){var n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)n+=V(e,r,t[a])+";";else for(var s in t){var i=t[s];if(typeof i!="object")r!=null&&r[i]!==void 0?n+=s+"{"+r[i]+"}":he(i)&&(n+=ee(s)+":"+le(s,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(r==null||r[i[0]]===void 0))for(var c=0;c<i.length;c++)he(i[c])&&(n+=ee(s)+":"+le(s,i[c])+";");else{var m=V(e,r,i);switch(s){case"animation":case"animationName":{n+=ee(s)+":"+m+";";break}default:n+=s+"{"+m+"}"}}}return n}var pe=/label:\s*([^\s;\n{]+)\s*(;|$)/g,T,lr=function(r,t,n){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var a=!0,s="";T=void 0;var i=r[0];i==null||i.raw===void 0?(a=!1,s+=V(n,t,i)):s+=i[0];for(var c=1;c<r.length;c++)s+=V(n,t,r[c]),a&&(s+=i[c]);pe.lastIndex=0;for(var m="",w;(w=pe.exec(s))!==null;)m+="-"+w[1];var h=fr(s)+m;return{name:h,styles:s,next:T}},pr=function(r){return r()},mr=ce["useInsertionEffect"]?ce["useInsertionEffect"]:!1,br=mr||pr,Pe=R.createContext(typeof HTMLElement<"u"?sr({key:"css"}):null);Pe.Provider;var yr=function(r){return R.forwardRef(function(t,n){var a=R.useContext(Pe);return r(t,a,n)})},gr=R.createContext({}),vr=Oe,wr=function(r){return r!=="theme"},me=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?vr:wr},be=function(r,t,n){var a;if(t){var s=t.shouldForwardProp;a=r.__emotion_forwardProp&&s?function(i){return r.__emotion_forwardProp(i)&&s(i)}:s}return typeof a!="function"&&n&&(a=r.__emotion_forwardProp),a},xr=function(r){var t=r.cache,n=r.serialized,a=r.isStringTag;return Ee(t,n,a),br(function(){return or(t,n,a)}),null},Cr=function e(r,t){var n=r.__emotion_real===r,a=n&&r.__emotion_base||r,s,i;t!==void 0&&(s=t.label,i=t.target);var c=be(r,t,n),m=c||me(a),w=!m("as");return function(){var h=arguments,l=n&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(s!==void 0&&l.push("label:"+s+";"),h[0]==null||h[0].raw===void 0)l.push.apply(l,h);else{l.push(h[0][0]);for(var A=h.length,k=1;k<A;k++)l.push(h[k],h[0][k])}var p=yr(function(o,b,y){var g=w&&o.as||a,C="",F=[],$=o;if(o.theme==null){$={};for(var P in o)$[P]=o[P];$.theme=R.useContext(gr)}typeof o.className=="string"?C=cr(b.registered,F,o.className):o.className!=null&&(C=o.className+" ");var d=lr(l.concat(F),b.registered,$);C+=b.key+"-"+d.name,i!==void 0&&(C+=" "+i);var _e=w&&c===void 0?me(g):m,B={};for(var D in o)w&&D==="as"||_e(D)&&(B[D]=o[D]);return B.className=C,B.ref=y,R.createElement(R.Fragment,null,R.createElement(xr,{cache:b,serialized:d,isStringTag:typeof g=="string"}),R.createElement(g,B))});return p.displayName=s!==void 0?s:"Styled("+(typeof a=="string"?a:a.displayName||a.name||"Component")+")",p.defaultProps=r.defaultProps,p.__emotion_real=p,p.__emotion_base=a,p.__emotion_styles=l,p.__emotion_forwardProp=c,Object.defineProperty(p,"toString",{value:function(){return"."+i}}),p.withComponent=function(o,b){return e(o,re({},t,b,{shouldForwardProp:be(p,b,!0)})).apply(void 0,l)},p}},Sr=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Z=Cr.bind();Sr.forEach(function(e){Z[e]=Z(e)});const Er=Z.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`,kr=Z.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,_r=()=>oe.jsx(Er,{children:oe.jsx(kr,{children:"404"})});export{_r as default};
