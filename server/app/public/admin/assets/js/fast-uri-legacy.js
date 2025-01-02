System.register([],(function(e,t){"use strict";return{execute:function(){var t={exports:{}},r={HEX:{0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15}};const{HEX:o}=r;function s(e){if(u(e,".")<3)return{host:e,isIPV4:!1};const t=e.match(/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/u)||[],[r]=t;return r?{host:a(r,"."),isIPV4:!0}:{host:e,isIPV4:!1}}function n(e,t=!1){let r="",s=!0;for(const n of e){if(void 0===o[n])return;"0"!==n&&!0===s&&(s=!1),s||(r+=n)}return t&&0===r.length&&(r="0"),r}function i(e,t={}){if(u(e,":")<2)return{host:e,isIPV6:!1};const r=function(e){let t=0;const r={error:!1,address:"",zone:""},o=[],s=[];let i=!1,a=!1,u=!1;function c(){if(s.length){if(!1===i){const e=n(s);if(void 0===e)return r.error=!0,!1;o.push(e)}s.length=0}return!0}for(let n=0;n<e.length;n++){const h=e[n];if("["!==h&&"]"!==h)if(":"!==h)if("%"===h){if(!c())break;i=!0}else s.push(h);else{if(!0===a&&(u=!0),!c())break;if(t++,o.push(":"),t>7){r.error=!0;break}n-1>=0&&":"===e[n-1]&&(a=!0)}}return s.length&&(i?r.zone=s.join(""):u?o.push(s.join("")):o.push(n(s))),r.address=o.join(""),r}(e);if(r.error)return{host:e,isIPV6:!1};{let e=r.address,t=r.address;return r.zone&&(e+="%"+r.zone,t+="%25"+r.zone),{host:e,escapedHost:t,isIPV6:!0}}}function a(e,t){let r="",o=!0;const s=e.length;for(let n=0;n<s;n++){const i=e[n];"0"===i&&o?(n+1<=s&&e[n+1]===t||n+1===s)&&(r+=i,o=!1):(o=i===t,r+=i)}return r}function u(e,t){let r=0;for(let o=0;o<e.length;o++)e[o]===t&&r++;return r}const c=/^\.\.?\//u,h=/^\/\.(?:\/|$)/u,p=/^\/\.\.(?:\/|$)/u,f=/^\/?(?:.|\n)*?(?=\/|$)/u;var d={recomposeAuthority:function(e,t){const r=[];if(void 0!==e.userinfo&&(r.push(e.userinfo),r.push("@")),void 0!==e.host){let t=unescape(e.host);const o=s(t);if(o.isIPV4)t=o.host;else{const r=i(o.host,{isIPV4:!1});t=!0===r.isIPV6?`[${r.escapedHost}]`:e.host}r.push(t)}return"number"!=typeof e.port&&"string"!=typeof e.port||(r.push(":"),r.push(String(e.port))),r.length?r.join(""):void 0},normalizeComponentEncoding:function(e,t){const r=!0!==t?escape:unescape;return void 0!==e.scheme&&(e.scheme=r(e.scheme)),void 0!==e.userinfo&&(e.userinfo=r(e.userinfo)),void 0!==e.host&&(e.host=r(e.host)),void 0!==e.path&&(e.path=r(e.path)),void 0!==e.query&&(e.query=r(e.query)),void 0!==e.fragment&&(e.fragment=r(e.fragment)),e},removeDotSegments:function(e){const t=[];for(;e.length;)if(e.match(c))e=e.replace(c,"");else if(e.match(h))e=e.replace(h,"/");else if(e.match(p))e=e.replace(p,"/"),t.pop();else if("."===e||".."===e)e="";else{const r=e.match(f);if(!r)throw new Error("Unexpected dot segment condition");{const o=r[0];e=e.slice(o.length),t.push(o)}}return t.join("")},normalizeIPv4:s,normalizeIPv6:i,stringArrayToHexStripped:n};const m=/^[\da-f]{8}\b-[\da-f]{4}\b-[\da-f]{4}\b-[\da-f]{4}\b-[\da-f]{12}$/iu,l=/([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;function v(e){return"boolean"==typeof e.secure?e.secure:"wss"===String(e.scheme).toLowerCase()}function g(e){return e.host||(e.error=e.error||"HTTP URIs must have a host."),e}function y(e){const t="https"===String(e.scheme).toLowerCase();return e.port!==(t?443:80)&&""!==e.port||(e.port=void 0),e.path||(e.path="/"),e}const z={scheme:"http",domainHost:!0,parse:g,serialize:y},I={scheme:"ws",domainHost:!0,parse:function(e){return e.secure=v(e),e.resourceName=(e.path||"/")+(e.query?"?"+e.query:""),e.path=void 0,e.query=void 0,e},serialize:function(e){if(e.port!==(v(e)?443:80)&&""!==e.port||(e.port=void 0),"boolean"==typeof e.secure&&(e.scheme=e.secure?"wss":"ws",e.secure=void 0),e.resourceName){const[t,r]=e.resourceName.split("?");e.path=t&&"/"!==t?t:void 0,e.query=r,e.resourceName=void 0}return e.fragment=void 0,e}},q={http:z,https:{scheme:"https",domainHost:z.domainHost,parse:g,serialize:y},ws:I,wss:{scheme:"wss",domainHost:I.domainHost,parse:I.parse,serialize:I.serialize},urn:{scheme:"urn",parse:function(e,t){if(!e.path)return e.error="URN can not be parsed",e;const r=e.path.match(l);if(r){const o=t.scheme||e.scheme||"urn";e.nid=r[1].toLowerCase(),e.nss=r[2];const s=`${o}:${t.nid||e.nid}`,n=q[s];e.path=void 0,n&&(e=n.parse(e,t))}else e.error=e.error||"URN can not be parsed.";return e},serialize:function(e,t){const r=t.scheme||e.scheme||"urn",o=e.nid.toLowerCase(),s=`${r}:${t.nid||o}`,n=q[s];n&&(e=n.serialize(e,t));const i=e,a=e.nss;return i.path=`${o||t.nid}:${a}`,t.skipEscape=!0,i},skipNormalize:!0},"urn:uuid":{scheme:"urn:uuid",parse:function(e,t){const r=e;return r.uuid=r.nss,r.nss=void 0,t.tolerant||r.uuid&&m.test(r.uuid)||(r.error=r.error||"UUID is not valid."),r},serialize:function(e){const t=e;return t.nss=(e.uuid||"").toLowerCase(),t},skipNormalize:!0}};var b=q;const{normalizeIPv6:C,normalizeIPv4:w,removeDotSegments:P,recomposeAuthority:H,normalizeComponentEncoding:E}=d,x=b;function S(e,t,r,o){const s={};return o||(e=N($(e,r),r),t=N($(t,r),r)),!(r=r||{}).tolerant&&t.scheme?(s.scheme=t.scheme,s.userinfo=t.userinfo,s.host=t.host,s.port=t.port,s.path=P(t.path||""),s.query=t.query):(void 0!==t.userinfo||void 0!==t.host||void 0!==t.port?(s.userinfo=t.userinfo,s.host=t.host,s.port=t.port,s.path=P(t.path||""),s.query=t.query):(t.path?("/"===t.path.charAt(0)?s.path=P(t.path):(void 0===e.userinfo&&void 0===e.host&&void 0===e.port||e.path?e.path?s.path=e.path.slice(0,e.path.lastIndexOf("/")+1)+t.path:s.path=t.path:s.path="/"+t.path,s.path=P(s.path)),s.query=t.query):(s.path=e.path,void 0!==t.query?s.query=t.query:s.query=e.query),s.userinfo=e.userinfo,s.host=e.host,s.port=e.port),s.scheme=e.scheme),s.fragment=t.fragment,s}function $(e,t){const r={host:e.host,scheme:e.scheme,userinfo:e.userinfo,port:e.port,path:e.path,query:e.query,nid:e.nid,nss:e.nss,uuid:e.uuid,fragment:e.fragment,reference:e.reference,resourceName:e.resourceName,secure:e.secure,error:""},o=Object.assign({},t),s=[],n=x[(o.scheme||r.scheme||"").toLowerCase()];n&&n.serialize&&n.serialize(r,o),void 0!==r.path&&(o.skipEscape?r.path=unescape(r.path):(r.path=escape(r.path),void 0!==r.scheme&&(r.path=r.path.split("%3A").join(":")))),"suffix"!==o.reference&&r.scheme&&(s.push(r.scheme),s.push(":"));const i=H(r,o);if(void 0!==i&&("suffix"!==o.reference&&s.push("//"),s.push(i),r.path&&"/"!==r.path.charAt(0)&&s.push("/")),void 0!==r.path){let e=r.path;o.absolutePath||n&&n.absolutePath||(e=P(e)),void 0===i&&(e=e.replace(/^\/\//u,"/%2F")),s.push(e)}return void 0!==r.query&&(s.push("?"),s.push(r.query)),void 0!==r.fragment&&(s.push("#"),s.push(r.fragment)),s.join("")}const j=Array.from({length:127},((e,t)=>/[^!"$&'()*+,\-.;=_`a-z{}~]/u.test(String.fromCharCode(t)))),k=/^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;function N(e,t){const r=Object.assign({},t),o={scheme:void 0,userinfo:void 0,host:"",port:void 0,path:"",query:void 0,fragment:void 0},s=-1!==e.indexOf("%");let n=!1;"suffix"===r.reference&&(e=(r.scheme?r.scheme+":":"")+"//"+e);const i=e.match(k);if(i){if(o.scheme=i[1],o.userinfo=i[3],o.host=i[4],o.port=parseInt(i[5],10),o.path=i[6]||"",o.query=i[7],o.fragment=i[8],isNaN(o.port)&&(o.port=i[5]),o.host){const e=w(o.host);if(!1===e.isIPV4){const t=C(e.host,{isIPV4:!1});o.host=t.host.toLowerCase(),n=t.isIPV6}else o.host=e.host,n=!0}void 0!==o.scheme||void 0!==o.userinfo||void 0!==o.host||void 0!==o.port||o.path||void 0!==o.query?void 0===o.scheme?o.reference="relative":void 0===o.fragment?o.reference="absolute":o.reference="uri":o.reference="same-document",r.reference&&"suffix"!==r.reference&&r.reference!==o.reference&&(o.error=o.error||"URI is not a "+r.reference+" reference.");const e=x[(r.scheme||o.scheme||"").toLowerCase()];if(!(r.unicodeSupport||e&&e.unicodeSupport)&&o.host&&(r.domainHost||e&&e.domainHost)&&!1===n&&function(e){let t=0;for(let r=0,o=e.length;r<o;++r)if(t=e.charCodeAt(r),t>126||j[t])return!0;return!1}(o.host))try{o.host=URL.domainToASCII(o.host.toLowerCase())}catch(a){o.error=o.error||"Host's domain name can not be converted to ASCII: "+a}(!e||e&&!e.skipNormalize)&&(s&&void 0!==o.scheme&&(o.scheme=unescape(o.scheme)),s&&void 0!==o.userinfo&&(o.userinfo=unescape(o.userinfo)),s&&void 0!==o.host&&(o.host=unescape(o.host)),void 0!==o.path&&o.path.length&&(o.path=escape(unescape(o.path))),void 0!==o.fragment&&o.fragment.length&&(o.fragment=encodeURI(decodeURIComponent(o.fragment)))),e&&e.parse&&e.parse(o,r)}else o.error=o.error||"URI can not be parsed.";return o}const L={SCHEMES:x,normalize:function(e,t){return"string"==typeof e?e=$(N(e,t),t):"object"==typeof e&&(e=N($(e,t),t)),e},resolve:function(e,t,r){const o=Object.assign({scheme:"null"},r);return $(S(N(e,o),N(t,o),o,!0),{...o,skipEscape:!0})},resolveComponents:S,equal:function(e,t,r){return"string"==typeof e?(e=unescape(e),e=$(E(N(e,r),!0),{...r,skipEscape:!0})):"object"==typeof e&&(e=$(E(e,!0),{...r,skipEscape:!0})),"string"==typeof t?(t=unescape(t),t=$(E(N(t,r),!0),{...r,skipEscape:!0})):"object"==typeof t&&(t=$(E(t,!0),{...r,skipEscape:!0})),e.toLowerCase()===t.toLowerCase()},serialize:$,parse:N};t.exports=L,t.exports.default=L,t.exports.fastUri=L,e("f",t.exports)}}}));