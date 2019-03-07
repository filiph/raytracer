{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.el(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.cx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.cx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.cx(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r=r+x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={co:function co(){},
dI:function(){return new P.ai("No element")},
aQ:function aQ(){},
cd:function(a){var u=v.mangledGlobalNames[a]
if(typeof u==="string")return u
u="minified:"+a
return u},
ed:function(a){return v.types[a]},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.at(a)
if(typeof u!=="string")throw H.e(H.cw(a))
return u},
X:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
af:function(a){return H.dM(a)+H.d1(H.c1(a),0,null)},
dM:function(a){var u,t,s,r,q,p,o,n,m
u=J.t(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.u||!!u.$iG){p=C.i(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.cd(r.length>1&&C.e.ap(r,0)===36?C.e.aj(r,1):r)},
ap:function(a){throw H.e(H.cw(a))},
l:function(a,b){if(a==null)J.cj(a)
throw H.e(H.cy(a,b))},
cy:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.z(!0,b,"index",null)
u=J.cj(a)
if(!(b<0)){if(typeof u!=="number")return H.ap(u)
t=b>=u}else t=!0
if(t)return P.dF(b,a,"index",null,u)
return P.cr(b,"index")},
cw:function(a){return new P.z(!0,a,null,null)},
e:function(a){var u
if(a==null)a=new P.W()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.dh})
u.name=""}else u.toString=H.dh
return u},
dh:function(){return J.at(this.dartException)},
as:function(a){throw H.e(a)},
dg:function(a){throw H.e(P.aB(a))},
w:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=[]
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.bl(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
bm:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
cT:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
cR:function(a,b){return new H.b5(a,b==null?null:b.method)},
cp:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.aZ(a,t,u?null:b.receiver)},
P:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.ce(a)
if(a==null)return
if(a instanceof H.U)return u.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.c.av(s,16)&8191)===10)switch(r){case 438:return u.$1(H.cp(H.d(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.cR(H.d(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.dm()
p=$.dn()
o=$.dp()
n=$.dq()
m=$.dt()
l=$.du()
k=$.ds()
$.dr()
j=$.dw()
i=$.dv()
h=q.p(t)
if(h!=null)return u.$1(H.cp(t,h))
else{h=p.p(t)
if(h!=null){h.method="call"
return u.$1(H.cp(t,h))}else{h=o.p(t)
if(h==null){h=n.p(t)
if(h==null){h=m.p(t)
if(h==null){h=l.p(t)
if(h==null){h=k.p(t)
if(h==null){h=n.p(t)
if(h==null){h=j.p(t)
if(h==null){h=i.p(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.cR(t,h))}}return u.$1(new H.bo(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.ah()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.z(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.ah()
return a},
O:function(a){var u
if(a instanceof H.U)return a.b
if(a==null)return new H.an(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.an(a)},
e9:function(a,b){var u,t,s,r,q,p,o,n,m,l,k
u=a.length
for(t=0;t<u;){s=t+1
r=a[t]
t=s+1
q=a[s]
if(typeof r==="string"){p=b.b
if(p==null){p=b.R()
b.b=p}o=b.F(p,r)
if(o==null)b.I(p,r,b.G(r,q))
else o.b=q}else if(typeof r==="number"&&(r&0x3ffffff)===r){n=b.c
if(n==null){n=b.R()
b.c=n}o=b.F(n,r)
if(o==null)b.I(n,r,b.G(r,q))
else o.b=q}else{m=b.d
if(m==null){m=b.R()
b.d=m}l=J.a8(r)&0x3ffffff
k=b.a0(m,l)
if(k==null)b.I(m,l,[b.G(r,q)])
else{s=b.a9(k,r)
if(s>=0)k[s].b=q
else k.push(b.G(r,q))}}}return b},
eh:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(new P.bA("Unsupported number of arguments for wrapped closure"))},
a5:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.eh)
a.$identity=u
return u},
dD:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j
u=b[0]
t=u.$callName
s=e?Object.create(new H.bc().constructor.prototype):Object.create(new H.Q(null,null,null,null).constructor.prototype)
s.$initialize=s.constructor
if(e)r=function static_tear_off(){this.$initialize()}
else{q=$.v
if(typeof q!=="number")return q.i()
$.v=q+1
q=new Function("a,b,c,d"+q,"this.$initialize(a,b,c,d"+q+")")
r=q}s.constructor=r
r.prototype=s
if(!e){p=H.cM(a,u,f)
p.$reflectionInfo=d}else{s.$static_name=g
p=u}if(typeof d=="number")o=function(h,i){return function(){return h(i)}}(H.ed,d)
else if(typeof d=="function")if(e)o=d
else{n=f?H.cL:H.cl
o=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(d,n)}else throw H.e("Error in reflectionInfo.")
s.$S=o
s[t]=p
for(m=p,l=1;l<b.length;++l){k=b[l]
j=k.$callName
if(j!=null){k=e?k:H.cM(a,k,f)
s[j]=k}if(l===c){k.$reflectionInfo=d
m=k}}s.$C=m
s.$R=u.$R
s.$D=u.$D
return r},
dA:function(a,b,c,d){var u=H.cl
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
cM:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.dC(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.dA(t,!r,u,b)
if(t===0){r=$.v
if(typeof r!=="number")return r.i()
$.v=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.R
if(q==null){q=H.ax("self")
$.R=q}return new Function(r+H.d(q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.v
if(typeof r!=="number")return r.i()
$.v=r+1
o+=r
r="return function("+o+"){return this."
q=$.R
if(q==null){q=H.ax("self")
$.R=q}return new Function(r+H.d(q)+"."+H.d(u)+"("+o+");}")()},
dB:function(a,b,c,d){var u,t
u=H.cl
t=H.cL
switch(b?-1:a){case 0:throw H.e(new H.b9("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
dC:function(a,b){var u,t,s,r,q,p,o,n
u=$.R
if(u==null){u=H.ax("self")
$.R=u}t=$.cK
if(t==null){t=H.ax("receiver")
$.cK=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.dB(r,!p,s,b)
if(r===1){u="return function(){return this."+H.d(u)+"."+H.d(s)+"(this."+H.d(t)+");"
t=$.v
if(typeof t!=="number")return t.i()
$.v=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.d(u)+"."+H.d(s)+"(this."+H.d(t)+", "+n+");"
t=$.v
if(typeof t!=="number")return t.i()
$.v=t+1
return new Function(u+t+"}")()},
cx:function(a,b,c,d,e,f,g){return H.dD(a,b,c,d,!!e,!!f,g)},
cl:function(a){return a.a},
cL:function(a){return a.c},
ax:function(a){var u,t,s,r,q
u=new H.Q("self","target","receiver","name")
t=J.cP(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
e7:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
cz:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.e7(J.t(a))
if(u==null)return!1
return H.d0(u,null,b,null)},
el:function(a){throw H.e(new P.aN(a))},
db:function(a){return v.getIsolateTag(a)},
eM:function(a,b){a.$ti=b
return a},
c1:function(a){if(a==null)return
return a.$ti},
eL:function(a,b,c){return H.ar(a["$a"+H.d(c)],H.c1(b))},
L:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cd(a[0].name)+H.d1(a,1,b)
if(typeof a=="function")return H.cd(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.d(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.l(b,t)
return H.d(b[t])}if('func' in a)return H.dY(a,b)
if('futureOr' in a)return"FutureOr<"+H.L("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
dY:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if("bounds" in a){u=a.bounds
if(b==null){b=[]
t=null}else t=b.length
s=b.length
for(r=u.length,q=r;q>0;--q)b.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=", "){p+=o
n=b.length
m=n-q-1
if(m<0)return H.l(b,m)
p=C.e.i(p,b[m])
l=u[q]
if(l!=null&&l!==P.h)p+=" extends "+H.L(l,b)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.L(a.ret,b)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=", "){f=j[g]
i=i+h+H.L(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=", "){f=e[g]
i=i+h+H.L(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.e8(d),m=n.length,h="",g=0;g<m;++g,h=", "){c=n[g]
i=i+h+H.L(d[c],b)+(" "+H.d(c))}i+="}"}if(t!=null)b.length=t
return p+"("+i+") => "+k},
d1:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.a_("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.L(p,c)}return"<"+u.h(0)+">"},
ar:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
c_:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.c1(a)
t=J.t(a)
if(t[b]==null)return!1
return H.d9(H.ar(t[d],u),null,c,null)},
d9:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.r(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.r(a[t],b,c[t],d))return!1
return!0},
eK:function(a,b,c){return a.apply(b,H.ar(J.t(b)["$a"+H.d(c)],H.c1(b)))},
r:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="h"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="h"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.r(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="m")return!0
if('func' in c)return H.d0(a,b,c,d)
if('func' in a)return c.name==="aS"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.r("type" in a?a.type:null,b,s,d)
else if(H.r(a,b,s,d))return!0
else{if(!('$i'+"x" in t.prototype))return!1
r=t.prototype["$a"+"x"]
q=H.ar(r,u?a.slice(1):null)
return H.r(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.d9(H.ar(m,u),b,p,d)},
d0:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.r(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.r(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.r(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.r(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.ek(h,b,g,d)},
ek:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.r(c[r],d,a[r],b))return!1}return!0},
ei:function(a){var u,t,s,r,q,p
u=$.dd.$1(a)
t=$.c0[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.c5[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=$.d8.$2(a,u)
if(u!=null){t=$.c0[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.c5[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.cc(s)
$.c0[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.c5[u]=s
return s}if(q==="-"){p=H.cc(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.de(a,s)
if(q==="*")throw H.e(P.cU(u))
if(v.leafTags[u]===true){p=H.cc(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.de(a,s)},
de:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.cC(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
cc:function(a){return J.cC(a,!1,null,!!a.$ieu)},
ej:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.cc(u)
else return J.cC(u,c,null,null)},
ef:function(){if(!0===$.cB)return
$.cB=!0
H.eg()},
eg:function(){var u,t,s,r,q,p,o,n
$.c0=Object.create(null)
$.c5=Object.create(null)
H.ee()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.df.$1(q)
if(p!=null){o=H.ej(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
ee:function(){var u,t,s,r,q,p,o
u=C.m()
u=H.M(C.n,H.M(C.o,H.M(C.j,H.M(C.j,H.M(C.p,H.M(C.q,H.M(C.r(C.i),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.dd=new H.c2(q)
$.d8=new H.c3(p)
$.df=new H.c4(o)},
M:function(a,b){return a(b)||b},
bl:function bl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b5:function b5(a,b){this.a=a
this.b=b},
aZ:function aZ(a,b,c){this.a=a
this.b=b
this.c=c},
bo:function bo(a){this.a=a},
U:function U(a,b){this.a=a
this.b=b},
ce:function ce(a){this.a=a},
an:function an(a){this.a=a
this.b=null},
a9:function a9(){},
bk:function bk(){},
bc:function bc(){},
Q:function Q(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b9:function b9(a){this.a=a},
aY:function aY(){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0},
b_:function b_(a,b){this.a=a
this.b=b
this.c=null},
ae:function ae(a){this.a=a},
b0:function b0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c2:function c2(a){this.a=a},
c3:function c3(a){this.a=a},
c4:function c4(a){this.a=a},
e8:function(a){return J.dJ(a?Object.keys(a):[])}},J={
cC:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dc:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.cB==null){H.ef()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.e(P.cU("Return interceptor for "+H.d(t(a,u))))}r=a.constructor
q=r==null?null:r[$.cG()]
if(q!=null)return q
q=H.ei(a)
if(q!=null)return q
if(typeof a=="function")return C.v
t=Object.getPrototypeOf(a)
if(t==null)return C.l
if(t===Object.prototype)return C.l
if(typeof r=="function"){Object.defineProperty(r,$.cG(),{value:C.f,enumerable:false,writable:true,configurable:true})
return C.f}return C.f},
dJ:function(a){return J.cP(a)},
cP:function(a){a.fixed$length=Array
return a},
t:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ab.prototype
return J.aW.prototype}if(typeof a=="string")return J.E.prototype
if(a==null)return J.aX.prototype
if(typeof a=="boolean")return J.aV.prototype
if(a.constructor==Array)return J.C.prototype
if(typeof a!="object"){if(typeof a=="function")return J.V.prototype
return a}if(a instanceof P.h)return a
return J.dc(a)},
ea:function(a){if(typeof a=="number")return J.D.prototype
if(typeof a=="string")return J.E.prototype
if(a==null)return a
if(a.constructor==Array)return J.C.prototype
if(!(a instanceof P.h))return J.G.prototype
return a},
eb:function(a){if(typeof a=="string")return J.E.prototype
if(a==null)return a
if(a.constructor==Array)return J.C.prototype
if(typeof a!="object"){if(typeof a=="function")return J.V.prototype
return a}if(a instanceof P.h)return a
return J.dc(a)},
cA:function(a){if(typeof a=="number")return J.D.prototype
if(a==null)return a
if(!(a instanceof P.h))return J.G.prototype
return a},
ec:function(a){if(typeof a=="number")return J.D.prototype
if(typeof a=="string")return J.E.prototype
if(a==null)return a
if(!(a instanceof P.h))return J.G.prototype
return a},
cI:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ea(a).i(a,b)},
dx:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.t(a).C(a,b)},
dy:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.cA(a).W(a,b)},
ci:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ec(a).j(a,b)},
dz:function(a){return J.cA(a).u(a)},
a8:function(a){return J.t(a).gl(a)},
cj:function(a){return J.eb(a).gk(a)},
ck:function(a){return J.cA(a).aU(a)},
at:function(a){return J.t(a).h(a)},
i:function i(){},
aV:function aV(){},
aX:function aX(){},
ac:function ac(){},
b7:function b7(){},
G:function G(){},
V:function V(){},
C:function C(){},
cn:function cn(){},
aw:function aw(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
D:function D(){},
ab:function ab(){},
aW:function aW(){},
E:function E(){}},P={
dR:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.e4()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.a5(new P.bv(u),1)).observe(t,{childList:true})
return new P.bu(u,t,s)}else if(self.setImmediate!=null)return P.e5()
return P.e6()},
dS:function(a){self.scheduleImmediate(H.a5(new P.bw(a),0))},
dT:function(a){self.setImmediate(H.a5(new P.bx(a),0))},
dU:function(a){P.dW(0,a)},
dW:function(a,b){var u=new P.bR()
u.an(a,b)
return u},
d2:function(a){return new P.br(new P.a2(new P.q(0,$.f,[a]),[a]),!1,[a])},
d_:function(a,b){a.$2(0,null)
b.b=!0
return b.a.a},
ct:function(a,b){P.dX(a,b)},
cZ:function(a,b){b.q(0,a)},
cY:function(a,b){b.A(H.P(a),H.O(a))},
dX:function(a,b){var u,t,s,r
u=new P.bU(b)
t=new P.bV(b)
s=J.t(a)
if(!!s.$iq)a.U(u,t,null)
else if(!!s.$ix)a.L(u,t,null)
else{r=new P.q(0,$.f,[null])
r.a=4
r.c=a
r.U(u,null,null)}},
d6:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.f.ad(new P.bZ(u))},
dV:function(a,b){var u,t,s
b.a=1
try{a.L(new P.bD(b),new P.bE(b),null)}catch(s){u=H.P(s)
t=H.O(s)
P.cD(new P.bF(b,u,t))}},
cW:function(a,b){var u,t
for(;u=a.a,u===2;)a=a.c
if(u>=4){t=b.S()
b.a=a.a
b.c=a.c
P.a1(b,t)}else{t=b.c
b.a=2
b.c=a
a.a2(t)}},
a1:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=t.c
t=t.b
p=q.a
q=q.b
t.toString
P.bW(null,null,t,p,q)}return}for(;o=b.a,o!=null;b=o){b.a=null
P.a1(u.a,b)}t=u.a
n=t.c
s.a=r
s.b=n
q=!r
if(q){p=b.c
p=(p&1)!==0||p===8}else p=!0
if(p){p=b.b
m=p.b
if(r){l=t.b
l.toString
l=l==m
if(!l)m.toString
else l=!0
l=!l}else l=!1
if(l){t=t.b
q=n.a
p=n.b
t.toString
P.bW(null,null,t,q,p)
return}k=$.f
if(k!=m)$.f=m
else k=null
t=b.c
if(t===8)new P.bJ(u,s,b,r).$0()
else if(q){if((t&1)!==0)new P.bI(s,b,n).$0()}else if((t&2)!==0)new P.bH(u,s,b).$0()
if(k!=null)$.f=k
t=s.b
if(!!J.t(t).$ix){if(t.a>=4){j=p.c
p.c=null
b=p.H(j)
p.a=t.a
p.c=t.c
u.a=t
continue}else P.cW(t,p)
return}}i=b.b
j=i.c
i.c=null
b=i.H(j)
t=s.a
q=s.b
if(!t){i.a=4
i.c=q}else{i.a=8
i.c=q}u.a=i
t=i}},
e0:function(a,b){if(H.cz(a,{func:1,args:[P.h,P.p]}))return b.ad(a)
if(H.cz(a,{func:1,args:[P.h]}))return a
throw H.e(P.cJ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
e_:function(){var u,t
for(;u=$.K,u!=null;){$.a4=null
t=u.b
$.K=t
if(t==null)$.a3=null
u.a.$0()}},
e3:function(){$.cu=!0
try{P.e_()}finally{$.a4=null
$.cu=!1
if($.K!=null)$.cH().$1(P.da())}},
d5:function(a){var u=new P.ak(a)
if($.K==null){$.a3=u
$.K=u
if(!$.cu)$.cH().$1(P.da())}else{$.a3.b=u
$.a3=u}},
e2:function(a){var u,t,s
u=$.K
if(u==null){P.d5(a)
$.a4=$.a3
return}t=new P.ak(a)
s=$.a4
if(s==null){t.b=u
$.a4=t
$.K=t}else{t.b=s.b
s.b=t
$.a4=t
if(t.b==null)$.a3=t}},
cD:function(a){var u=$.f
if(C.b===u){P.bY(null,null,C.b,a)
return}u.toString
P.bY(null,null,u,u.a6(a))},
ev:function(a){return new P.bQ(a)},
bW:function(a,b,c,d,e){var u={}
u.a=d
P.e2(new P.bX(u,e))},
d3:function(a,b,c,d){var u,t
t=$.f
if(t===c)return d.$0()
$.f=c
u=t
try{t=d.$0()
return t}finally{$.f=u}},
d4:function(a,b,c,d,e){var u,t
t=$.f
if(t===c)return d.$1(e)
$.f=c
u=t
try{t=d.$1(e)
return t}finally{$.f=u}},
e1:function(a,b,c,d,e,f){var u,t
t=$.f
if(t===c)return d.$2(e,f)
$.f=c
u=t
try{t=d.$2(e,f)
return t}finally{$.f=u}},
bY:function(a,b,c,d){var u=C.b!==c
if(u)d=!(!u||!1)?c.a6(d):c.ay(d)
P.d5(d)},
bv:function bv(a){this.a=a},
bu:function bu(a,b,c){this.a=a
this.b=b
this.c=c},
bw:function bw(a){this.a=a},
bx:function bx(a){this.a=a},
bR:function bR(){},
bS:function bS(a,b){this.a=a
this.b=b},
br:function br(a,b,c){this.a=a
this.b=b
this.$ti=c},
bt:function bt(a,b){this.a=a
this.b=b},
bs:function bs(a,b,c){this.a=a
this.b=b
this.c=c},
bU:function bU(a){this.a=a},
bV:function bV(a){this.a=a},
bZ:function bZ(a){this.a=a},
al:function al(){},
a2:function a2(a,b){this.a=a
this.$ti=b},
bB:function bB(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d},
q:function q(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
bC:function bC(a,b){this.a=a
this.b=b},
bG:function bG(a,b){this.a=a
this.b=b},
bD:function bD(a){this.a=a},
bE:function bE(a){this.a=a},
bF:function bF(a,b,c){this.a=a
this.b=b
this.c=c},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bK:function bK(a){this.a=a},
bI:function bI(a,b,c){this.a=a
this.b=b
this.c=c},
bH:function bH(a,b,c){this.a=a
this.b=b
this.c=c},
ak:function ak(a){this.a=a
this.b=null},
bd:function bd(){},
bQ:function bQ(a){this.a=null
this.b=a
this.c=!1},
I:function I(a,b){this.a=a
this.b=b},
bT:function bT(){},
bX:function bX(a,b){this.a=a
this.b=b},
bM:function bM(){},
bO:function bO(a,b){this.a=a
this.b=b},
bN:function bN(a,b){this.a=a
this.b=b},
bP:function bP(a,b,c){this.a=a
this.b=b
this.c=c},
dK:function(a){return H.e9(a,new H.aY())},
dH:function(a,b,c){var u,t
if(P.cv(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=[]
t=$.a7()
t.push(a)
try{P.dZ(a,u)}finally{if(0>=t.length)return H.l(t,-1)
t.pop()}t=P.cS(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
dG:function(a,b,c){var u,t,s
if(P.cv(a))return b+"..."+c
u=new P.a_(b)
t=$.a7()
t.push(a)
try{s=u
s.a=P.cS(s.a,a,", ")}finally{if(0>=t.length)return H.l(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
cv:function(a){var u,t
for(u=0;t=$.a7(),u<t.length;++u)if(a===t[u])return!0
return!1},
dZ:function(a,b){var u,t,s,r,q,p,o,n,m,l
u=a.gJ(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.n())return
r=H.d(u.gB())
b.push(r)
t+=r.length+2;++s}if(!u.n()){if(s<=5)return
if(0>=b.length)return H.l(b,-1)
q=b.pop()
if(0>=b.length)return H.l(b,-1)
p=b.pop()}else{o=u.gB();++s
if(!u.n()){if(s<=4){b.push(H.d(o))
return}q=H.d(o)
if(0>=b.length)return H.l(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gB();++s
for(;u.n();o=n,n=m){m=u.gB();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.l(b,-1)
t-=b.pop().length+2;--s}b.push("...")
return}}p=H.d(o)
q=H.d(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.l(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)b.push(l)
b.push(p)
b.push(q)},
cQ:function(a){var u,t
t={}
if(P.cv(a))return"{...}"
u=new P.a_("")
try{$.a7().push(a)
u.a+="{"
t.a=!0
a.aH(0,new P.b3(t,u))
u.a+="}"}finally{t=$.a7()
if(0>=t.length)return H.l(t,-1)
t.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
b2:function b2(){},
b3:function b3(a,b){this.a=a
this.b=b},
b4:function b4(){},
dE:function(a){if(a instanceof H.a9)return a.h(0)
return"Instance of '"+H.af(a)+"'"},
cS:function(a,b,c){var u=new J.aw(b,b.length,0)
if(!u.n())return a
if(c.length===0){do a+=H.d(u.d)
while(u.n())}else{a+=H.d(u.d)
for(;u.n();)a=a+c+H.d(u.d)}return a},
cO:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.at(a)
if(typeof a==="string")return JSON.stringify(a)
return P.dE(a)},
cJ:function(a,b,c){return new P.z(!0,a,b,c)},
dO:function(a){return new P.Y(null,null,!1,null,null,a)},
cr:function(a,b){return new P.Y(null,null,!0,a,b,"Value not in range")},
cq:function(a,b,c,d,e){return new P.Y(b,c,!0,a,d,"Invalid value")},
dQ:function(a,b,c){if(a>c)throw H.e(P.cq(a,0,c,"start",null))
if(a>b||b>c)throw H.e(P.cq(b,a,c,"end",null))
return b},
dP:function(a,b){if(typeof a!=="number")return a.ah()},
dF:function(a,b,c,d,e){var u=e==null?J.cj(b):e
return new P.aT(u,!0,a,c,"Index out of range")},
H:function(a){return new P.bp(a)},
cU:function(a){return new P.bn(a)},
cs:function(a){return new P.ai(a)},
aB:function(a){return new P.aA(a)},
dL:function(a,b){var u,t,s
u=[]
C.d.sk(u,a)
for(t=0;t<a;++t){s=b.$1(t)
if(t>=u.length)return H.l(u,t)
u[t]=s}return u},
ao:function ao(){},
N:function N(){},
B:function B(){},
W:function W(){},
z:function z(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Y:function Y(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aT:function aT(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bp:function bp(a){this.a=a},
bn:function bn(a){this.a=a},
ai:function ai(a){this.a=a},
aA:function aA(a){this.a=a},
b6:function b6(){},
ah:function ah(){},
aN:function aN(a){this.a=a},
bA:function bA(a){this.a=a},
aS:function aS(){},
a6:function a6(){},
aU:function aU(){},
b1:function b1(){},
m:function m(){},
u:function u(){},
h:function h(){},
p:function p(){},
aj:function aj(){},
a_:function a_(a){this.a=a},
dN:function(){return C.k},
cX:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
bL:function bL(){},
o:function o(a,b,c){this.a=a
this.b=b
this.$ti=c}},W={
cV:function(a,b,c,d){var u=W.d7(new W.bz(c),W.b)
u=new W.by(a,b,u,!1)
u.ax()
return u},
d7:function(a,b){var u=$.f
if(u===C.b)return a
return u.aA(a,b)},
c:function c(){},
au:function au(){},
av:function av(){},
A:function A(){},
S:function S(){},
aC:function aC(){},
aO:function aO(){},
a:function a(){},
b:function b(){},
T:function T(){},
aR:function aR(){},
ad:function ad(){},
F:function F(){},
n:function n(){},
bb:function bb(){},
y:function y(){},
a0:function a0(){},
bq:function bq(a){this.a=a},
by:function by(a,b,c,d){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d},
bz:function bz(a){this.a=a},
am:function am(){}},M={
cm:function(a,b,c){return new M.k(a,b,c)},
cN:function(a,b,c,d){return new M.aM(a,b,c,d)},
j:function j(a,b,c){this.a=a
this.b=b
this.c=c},
k:function k(a,b,c){this.a=a
this.b=b
this.c=c},
az:function az(){},
aP:function aP(a,b,c){this.a=a
this.b=b
this.c=c},
ay:function ay(a){var _=this
_.a=a
_.d=_.c=_.b=null},
Z:function Z(a,b){this.a=a
this.b=b},
aa:function aa(a,b,c){this.a=a
this.b=b
this.c=c},
J:function J(a,b){this.a=a
this.b=b},
ba:function ba(a,b,c){this.a=a
this.b=b
this.c=c},
ag:function ag(a,b,c){this.b=a
this.c=b
this.d=c},
b8:function b8(a,b,c){this.a=a
this.b=b
this.c=c},
be:function be(){},
bf:function bf(){},
bg:function bg(){},
bh:function bh(){},
bi:function bi(){},
bj:function bj(){},
aM:function aM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},R={
aq:function(){var u=0,t=P.d2(null),s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aq=P.d6(function(a,b){if(a===1)return P.cY(b,t)
while(true)switch(u){case 0:r=window.innerWidth
if(typeof r!=="number"){s=r.j()
u=1
break}q=C.a.u(r*0.99)
r=window.innerHeight
if(typeof r!=="number"){s=r.j()
u=1
break}p=C.a.u(r*0.99)
r=document
o=r.createElement("canvas")
o.width=q
o.height=p
r.body.appendChild(o)
n=o.getContext("2d")
r=$.dk()
m=$.dl()
l=new M.j(3,2,4)
k=new M.ay(l)
l=new M.j(-1,0.5,0).m(0,l).v()
k.b=l
j=l.a7(new M.j(0,-1,0)).v().j(0,1.5)
k.c=j
k.d=l.a7(j).v().j(0,1.5)
i=new M.ba([new M.b8(new M.j(0,1,0),0,r),new M.ag(1,new M.j(0,1,-0.25),m),new M.ag(0.25,new M.j(-1,0.5,1.5),m)],[new M.J(new M.j(-2,2.5,0),new M.k(0.49,0.07,0.07)),new M.J(new M.j(1.5,2.5,1.5),new M.k(0.07,0.07,0.49)),new M.J(new M.j(1.5,2.5,-1.5),new M.k(0.07,0.49,0.071)),new M.J(new M.j(0,3.5,0),new M.k(0.21,0.21,0.35))],k)
h=new R.aD(i,n,q,p)
k=new R.c9(i)
m=new R.c8(i)
r=new R.ca(i)
j=new R.cb(i)
W.cV(window,"keydown",new R.c6(k,m,r,j,h),!1)
l=C.c.T(q,2)
g=[P.a6]
f=C.c.T(p,2)
e=P.dK([new P.o(l,0,g),k,new P.o(l,p,g),m,new P.o(0,f,g),r,new P.o(q,f,g),j])
W.cV(window,"click",new R.c7(e,h),!1)
u=3
return P.ct(h.w(),$async$aq)
case 3:case 1:return P.cZ(s,t)}})
return P.d_($async$aq,t)},
aD:function aD(a,b,c,d){var _=this
_.a=5
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=0},
aE:function aE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aH:function aH(a){this.a=a},
aI:function aI(a){this.a=a},
aJ:function aJ(a){this.a=a},
aG:function aG(a,b){this.a=a
this.b=b},
aL:function aL(a,b){this.a=a
this.b=b},
aK:function aK(a){this.a=a},
aF:function aF(){},
c9:function c9(a){this.a=a},
c8:function c8(a){this.a=a},
ca:function ca(a){this.a=a},
cb:function cb(a){this.a=a},
c6:function c6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
c7:function c7(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,M,R]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.co.prototype={}
J.i.prototype={
C:function(a,b){return a===b},
gl:function(a){return H.X(a)},
h:function(a){return"Instance of '"+H.af(a)+"'"}}
J.aV.prototype={
h:function(a){return String(a)},
gl:function(a){return a?519018:218159},
$iao:1}
J.aX.prototype={
C:function(a,b){return null==b},
h:function(a){return"null"},
gl:function(a){return 0},
$im:1}
J.ac.prototype={
gl:function(a){return 0},
h:function(a){return String(a)}}
J.b7.prototype={}
J.G.prototype={}
J.V.prototype={
h:function(a){var u=a[$.dj()]
if(u==null)return this.al(a)
return"JavaScript function for "+H.d(J.at(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.C.prototype={
aF:function(a,b,c){var u,t,s
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.e(P.aB(a))}return t},
aG:function(a,b,c){return this.aF(a,b,c,null)},
Y:function(a,b,c,d){var u,t
if(!!a.immutable$list)H.as(P.H("setRange"))
P.dQ(b,c,a.length)
u=c-b
if(u===0)return
P.dP(0,"skipCount")
if(u>d.length)throw H.e(P.cs("Too few elements"))
if(0<b)for(t=u-1;t>=0;--t){if(t>=d.length)return H.l(d,t)
a[b+t]=d[t]}else for(t=0;t<u;++t){if(t>=d.length)return H.l(d,t)
a[b+t]=d[t]}},
ai:function(a,b){var u,t,s,r
if(!!a.immutable$list)H.as(P.H("shuffle"))
if(b==null)b=C.k
u=a.length
for(;u>1;){t=b.K(u);--u
s=a.length
if(u>=s)return H.l(a,u)
r=a[u]
if(t<0||t>=s)return H.l(a,t)
this.X(a,u,a[t])
this.X(a,t,r)}},
h:function(a){return P.dG(a,"[","]")},
gl:function(a){return H.X(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.as(P.H("set length"))
if(b<0)throw H.e(P.cq(b,0,null,"newLength",null))
a.length=b},
X:function(a,b,c){if(!!a.immutable$list)H.as(P.H("indexed set"))
if(b>=a.length||b<0)throw H.e(H.cy(a,b))
a[b]=c},
i:function(a,b){var u,t
u=C.c.i(a.length,b.gk(b))
t=[]
this.sk(t,u)
this.Y(t,0,a.length,a)
this.Y(t,a.length,u,b)
return t}}
J.cn.prototype={}
J.aw.prototype={
gB:function(){return this.d},
n:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.e(H.dg(u))
s=this.c
if(s>=t){this.d=null
return!1}this.d=u[s]
this.c=s+1
return!0}}
J.D.prototype={
aU:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.e(P.H(""+a+".toInt()"))},
u:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.e(P.H(""+a+".floor()"))},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gl:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
i:function(a,b){return a+b},
j:function(a,b){return a*b},
E:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
am:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.a3(a,b)},
T:function(a,b){return(a|0)===a?a/b|0:this.a3(a,b)},
a3:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.H("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
av:function(a,b){var u
if(a>0)u=this.au(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
au:function(a,b){return b>31?0:a>>>b},
W:function(a,b){if(typeof b!=="number")throw H.e(H.cw(b))
return a>=b},
$iN:1,
$iu:1}
J.ab.prototype={$ia6:1}
J.aW.prototype={}
J.E.prototype={
ap:function(a,b){if(b>=a.length)throw H.e(H.cy(a,b))
return a.charCodeAt(b)},
i:function(a,b){if(typeof b!=="string")throw H.e(P.cJ(b,null,null))
return a+b},
aj:function(a,b){var u=a.length
if(b>u)throw H.e(P.cr(b,null))
if(u>u)throw H.e(P.cr(u,null))
return a.substring(b,u)},
j:function(a,b){if(C.c.W(0,b))return""
if(a.length===0)return a
throw H.e(C.t)},
h:function(a){return a},
gl:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$iaj:1}
H.aQ.prototype={}
H.bl.prototype={
p:function(a){var u,t,s
u=new RegExp(this.a).exec(a)
if(u==null)return
t=Object.create(null)
s=this.b
if(s!==-1)t.arguments=u[s+1]
s=this.c
if(s!==-1)t.argumentsExpr=u[s+1]
s=this.d
if(s!==-1)t.expr=u[s+1]
s=this.e
if(s!==-1)t.method=u[s+1]
s=this.f
if(s!==-1)t.receiver=u[s+1]
return t}}
H.b5.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.aZ.prototype={
h:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.d(this.a)+")"}}
H.bo.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.U.prototype={}
H.ce.prototype={
$1:function(a){if(!!J.t(a).$iB)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:2}
H.an.prototype={
h:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$ip:1}
H.a9.prototype={
h:function(a){return"Closure '"+H.af(this).trim()+"'"},
gaV:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.bk.prototype={}
H.bc.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cd(u)+"'"}}
H.Q.prototype={
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.Q))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gl:function(a){var u,t
u=this.c
if(u==null)t=H.X(this.a)
else t=typeof u!=="object"?J.a8(u):H.X(u)
return(t^H.X(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.af(u)+"'")}}
H.b9.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.aY.prototype={
gk:function(a){return this.a},
ag:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.F(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.F(r,b)
s=t==null?null:t.b
return s}else return this.aJ(b)},
aJ:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.a0(u,J.a8(a)&0x3ffffff)
s=this.a9(t,a)
if(s<0)return
return t[s].b},
aH:function(a,b){var u,t
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.e(P.aB(this))
u=u.c}},
G:function(a,b){var u=new H.b_(a,b)
if(this.e==null){this.f=u
this.e=u}else{this.f.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
a9:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.dx(a[t].a,b))return t
return-1},
h:function(a){return P.cQ(this)},
F:function(a,b){return a[b]},
a0:function(a,b){return a[b]},
I:function(a,b,c){a[b]=c},
aq:function(a,b){delete a[b]},
R:function(){var u=Object.create(null)
this.I(u,"<non-identifier-key>",u)
this.aq(u,"<non-identifier-key>")
return u}}
H.b_.prototype={}
H.ae.prototype={
gk:function(a){return this.a.a},
gJ:function(a){var u,t
u=this.a
t=new H.b0(u,u.r)
t.c=u.e
return t}}
H.b0.prototype={
gB:function(){return this.d},
n:function(){var u=this.a
if(this.b!==u.r)throw H.e(P.aB(u))
else{u=this.c
if(u==null){this.d=null
return!1}else{this.d=u.a
this.c=u.c
return!0}}}}
H.c2.prototype={
$1:function(a){return this.a(a)},
$S:2}
H.c3.prototype={
$2:function(a,b){return this.a(a,b)}}
H.c4.prototype={
$1:function(a){return this.a(a)}}
P.bv.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:3}
P.bu.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.bw.prototype={
$0:function(){this.a.$0()}}
P.bx.prototype={
$0:function(){this.a.$0()}}
P.bR.prototype={
an:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.a5(new P.bS(this,b),0),a)
else throw H.e(P.H("`setTimeout()` not found."))}}
P.bS.prototype={
$0:function(){this.b.$0()}}
P.br.prototype={
q:function(a,b){var u
if(this.b)this.a.q(0,b)
else if(H.c_(b,"$ix",this.$ti,"$ax")){u=this.a
b.L(u.gaB(u),u.gaD(),-1)}else P.cD(new P.bt(this,b))},
A:function(a,b){if(this.b)this.a.A(a,b)
else P.cD(new P.bs(this,a,b))}}
P.bt.prototype={
$0:function(){this.a.a.q(0,this.b)}}
P.bs.prototype={
$0:function(){this.a.a.A(this.b,this.c)}}
P.bU.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:6}
P.bV.prototype={
$2:function(a,b){this.a.$2(1,new H.U(a,b))},
$S:7}
P.bZ.prototype={
$2:function(a,b){this.a(a,b)}}
P.al.prototype={
A:function(a,b){var u
if(a==null)a=new P.W()
u=this.a
if(u.a!==0)throw H.e(P.cs("Future already completed"))
$.f.toString
u.N(a,b)},
aE:function(a){return this.A(a,null)}}
P.a2.prototype={
q:function(a,b){var u=this.a
if(u.a!==0)throw H.e(P.cs("Future already completed"))
u.a_(b)},
aC:function(a){return this.q(a,null)}}
P.bB.prototype={
aK:function(a){if(this.c!==6)return!0
return this.b.b.V(this.d,a.a)},
aI:function(a){var u,t
u=this.e
t=this.b.b
if(H.cz(u,{func:1,args:[P.h,P.p]}))return t.aN(u,a.a,a.b)
else return t.V(u,a.a)}}
P.q.prototype={
L:function(a,b,c){var u=$.f
if(u!==C.b){u.toString
if(b!=null)b=P.e0(b,u)}return this.U(a,b,c)},
aT:function(a,b){return this.L(a,null,b)},
U:function(a,b,c){var u=new P.q(0,$.f,[c])
this.Z(new P.bB(u,b==null?1:3,a,b))
return u},
Z:function(a){var u,t
u=this.a
if(u<=1){a.a=this.c
this.c=a}else{if(u===2){u=this.c
t=u.a
if(t<4){u.Z(a)
return}this.a=t
this.c=u.c}u=this.b
u.toString
P.bY(null,null,u,new P.bC(this,a))}},
a2:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=this.c
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){t=this.c
p=t.a
if(p<4){t.a2(a)
return}this.a=p
this.c=t.c}u.a=this.H(a)
t=this.b
t.toString
P.bY(null,null,t,new P.bG(u,this))}},
S:function(){var u=this.c
this.c=null
return this.H(u)},
H:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
a_:function(a){var u,t
u=this.$ti
if(H.c_(a,"$ix",u,"$ax"))if(H.c_(a,"$iq",u,null))P.cW(a,this)
else P.dV(a,this)
else{t=this.S()
this.a=4
this.c=a
P.a1(this,t)}},
N:function(a,b){var u=this.S()
this.a=8
this.c=new P.I(a,b)
P.a1(this,u)},
$ix:1}
P.bC.prototype={
$0:function(){P.a1(this.a,this.b)}}
P.bG.prototype={
$0:function(){P.a1(this.b,this.a.a)}}
P.bD.prototype={
$1:function(a){var u=this.a
u.a=0
u.a_(a)},
$S:3}
P.bE.prototype={
$2:function(a,b){this.a.N(a,b)},
$1:function(a){return this.$2(a,null)},
$S:10}
P.bF.prototype={
$0:function(){this.a.N(this.b,this.c)}}
P.bJ.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.ae(r.d)}catch(q){t=H.P(q)
s=H.O(q)
if(this.d){r=this.a.a.c.a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=this.a.a.c
else p.b=new P.I(t,s)
p.a=!0
return}if(!!J.t(u).$ix){if(u instanceof P.q&&u.a>=4){if(u.a===8){r=this.b
r.b=u.c
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.aT(new P.bK(o),null)
r.a=!1}}}
P.bK.prototype={
$1:function(a){return this.a},
$S:11}
P.bI.prototype={
$0:function(){var u,t,s,r
try{s=this.b
this.a.b=s.b.b.V(s.d,this.c)}catch(r){u=H.P(r)
t=H.O(r)
s=this.a
s.b=new P.I(u,t)
s.a=!0}}}
P.bH.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=this.a.a.c
r=this.c
if(r.aK(u)&&r.e!=null){q=this.b
q.b=r.aI(u)
q.a=!1}}catch(p){t=H.P(p)
s=H.O(p)
r=this.a.a.c
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.I(t,s)
n.a=!0}}}
P.ak.prototype={}
P.bd.prototype={}
P.bQ.prototype={}
P.I.prototype={
h:function(a){return H.d(this.a)},
$iB:1}
P.bT.prototype={}
P.bX.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.W()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.e(u)
s=H.e(u)
s.stack=t.h(0)
throw s}}
P.bM.prototype={
aP:function(a){var u,t,s
try{if(C.b===$.f){a.$0()
return}P.d3(null,null,this,a)}catch(s){u=H.P(s)
t=H.O(s)
P.bW(null,null,this,u,t)}},
aR:function(a,b){var u,t,s
try{if(C.b===$.f){a.$1(b)
return}P.d4(null,null,this,a,b)}catch(s){u=H.P(s)
t=H.O(s)
P.bW(null,null,this,u,t)}},
aS:function(a,b){return this.aR(a,b,null)},
az:function(a){return new P.bO(this,a)},
ay:function(a){return this.az(a,null)},
a6:function(a){return new P.bN(this,a)},
aA:function(a,b){return new P.bP(this,a,b)},
aM:function(a){if($.f===C.b)return a.$0()
return P.d3(null,null,this,a)},
ae:function(a){return this.aM(a,null)},
aQ:function(a,b){if($.f===C.b)return a.$1(b)
return P.d4(null,null,this,a,b)},
V:function(a,b){return this.aQ(a,b,null,null)},
aO:function(a,b,c){if($.f===C.b)return a.$2(b,c)
return P.e1(null,null,this,a,b,c)},
aN:function(a,b,c){return this.aO(a,b,c,null,null,null)},
aL:function(a){return a},
ad:function(a){return this.aL(a,null,null,null)}}
P.bO.prototype={
$0:function(){return this.a.ae(this.b)}}
P.bN.prototype={
$0:function(){return this.a.aP(this.b)}}
P.bP.prototype={
$1:function(a){return this.a.aS(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.b2.prototype={}
P.b3.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.d(a)
u.a=t+": "
u.a+=H.d(b)},
$S:12}
P.b4.prototype={
gk:function(a){return this.a},
h:function(a){return P.cQ(this)}}
P.ao.prototype={}
P.N.prototype={}
P.B.prototype={}
P.W.prototype={
h:function(a){return"Throw of null."}}
P.z.prototype={
gP:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gO:function(){return""},
h:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gP()+t+s
if(!this.a)return r
q=this.gO()
p=P.cO(this.b)
return r+q+": "+p}}
P.Y.prototype={
gP:function(){return"RangeError"},
gO:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.d(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.d(u)
else if(s>u)t=": Not in range "+H.d(u)+".."+H.d(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.d(u)}return t}}
P.aT.prototype={
gP:function(){return"RangeError"},
gO:function(){var u,t
u=this.b
if(typeof u!=="number")return u.ah()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.d(t)},
gk:function(a){return this.f}}
P.bp.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.bn.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ai.prototype={
h:function(a){return"Bad state: "+this.a}}
P.aA.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.cO(u)+"."}}
P.b6.prototype={
h:function(a){return"Out of Memory"},
$iB:1}
P.ah.prototype={
h:function(a){return"Stack Overflow"},
$iB:1}
P.aN.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.bA.prototype={
h:function(a){return"Exception: "+this.a}}
P.aS.prototype={}
P.a6.prototype={}
P.aU.prototype={
gk:function(a){var u,t
u=this.gJ(this)
for(t=0;u.n();)++t
return t},
h:function(a){return P.dH(this,"(",")")}}
P.b1.prototype={}
P.m.prototype={
gl:function(a){return P.h.prototype.gl.call(this,this)},
h:function(a){return"null"}}
P.u.prototype={}
P.h.prototype={constructor:P.h,$ih:1,
C:function(a,b){return this===b},
gl:function(a){return H.X(this)},
h:function(a){return"Instance of '"+H.af(this)+"'"},
toString:function(){return this.h(this)}}
P.p.prototype={}
P.aj.prototype={}
P.a_.prototype={
gk:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.c.prototype={}
W.au.prototype={
h:function(a){return String(a)}}
W.av.prototype={
h:function(a){return String(a)}}
W.A.prototype={
gk:function(a){return a.length}}
W.S.prototype={
gk:function(a){return a.length}}
W.aC.prototype={}
W.aO.prototype={
h:function(a){return String(a)}}
W.a.prototype={
h:function(a){return a.localName}}
W.b.prototype={$ib:1}
W.T.prototype={
ao:function(a,b,c,d){return a.addEventListener(b,H.a5(c,1),!1)}}
W.aR.prototype={
gk:function(a){return a.length}}
W.ad.prototype={$iad:1}
W.F.prototype={$iF:1}
W.n.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.ak(a):u}}
W.bb.prototype={
gk:function(a){return a.length}}
W.y.prototype={}
W.a0.prototype={
ga5:function(a){var u,t
u=P.u
t=new P.q(0,$.f,[u])
this.ar(a)
this.at(a,W.d7(new W.bq(new P.a2(t,[u])),u))
return t},
at:function(a,b){return a.requestAnimationFrame(H.a5(b,1))},
ar:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.bq.prototype={
$1:function(a){this.a.q(0,a)}}
W.by.prototype={
ax:function(){var u,t
u=this.d
t=u!=null
if(t&&this.a<=0)if(t)C.h.ao(this.b,this.c,u,!1)}}
W.bz.prototype={
$1:function(a){return this.a.$1(a)}}
W.am.prototype={}
P.bL.prototype={
K:function(a){if(a<=0||a>4294967296)throw H.e(P.dO("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
P.o.prototype={
h:function(a){return"Point("+H.d(this.a)+", "+H.d(this.b)+")"},
C:function(a,b){if(b==null)return!1
return H.c_(b,"$io",[P.u],null)&&this.a==b.a&&this.b==b.b},
gl:function(a){var u,t,s
u=J.a8(this.a)
t=J.a8(this.b)
t=P.cX(P.cX(0,u),t)
s=536870911&t+((67108863&t)<<3)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
i:function(a,b){var u,t,s
u=this.a
t=b.gaW(b)
if(typeof u!=="number")return u.i()
t=C.a.i(u,t)
u=this.b
s=b.gaX(b)
if(typeof u!=="number")return u.i()
return new P.o(t,C.a.i(u,s),this.$ti)},
j:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.j()
u=C.a.j(u,b)
t=this.b
if(typeof t!=="number")return t.j()
return new P.o(u,C.a.j(t,b),this.$ti)},
a8:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.ap(t)
s=u-t
t=this.b
u=a.b
if(typeof t!=="number")return t.m()
if(typeof u!=="number")return H.ap(u)
r=t-u
return Math.sqrt(s*s+r*r)}}
M.j.prototype={
j:function(a,b){return new M.j(b*this.a,b*this.b,b*this.c)},
m:function(a,b){return new M.j(this.a-b.a,this.b-b.b,this.c-b.c)},
i:function(a,b){return new M.j(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ab:function(){var u,t,s
u=this.a
t=this.b
s=this.c
return Math.sqrt(u*u+t*t+s*s)},
v:function(){var u=this.ab()
return this.j(0,u===0?1/0:1/u)},
a7:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new M.j(u*t-s*r,s*q-p*t,p*r-u*q)}}
M.k.prototype={
M:function(a,b){if(typeof b!=="number")return b.j()
return new M.k(b*this.a,b*this.b,b*this.c)},
i:function(a,b){return new M.k(this.a+b.a,this.b+b.b,this.c+b.c)},
j:function(a,b){return new M.k(this.a*b.a,this.b*b.b,this.c*b.c)},
af:function(){var u=new M.az()
return new M.aP(J.ck(J.ci(u.$1(this.a),255)),J.ck(J.ci(u.$1(this.b),255)),J.ck(J.ci(u.$1(this.c),255)))}}
M.az.prototype={
$1:function(a){return a>1?1:a}}
M.aP.prototype={}
M.ay.prototype={}
M.Z.prototype={}
M.aa.prototype={}
M.J.prototype={}
M.ba.prototype={}
M.ag.prototype={
ac:function(a){return a.m(0,this.c).v()},
aa:function(a){var u,t,s,r
u=this.c.m(0,a.a)
t=u.t(a.b)
if(t>=0){s=this.b-(u.t(u)-t*t)
r=s>=0?t-Math.sqrt(s):0}else r=0
if(r===0)return
else return new M.aa(this,a,r)},
gD:function(){return this.d}}
M.b8.prototype={
aa:function(a){var u,t
u=this.a
t=u.t(a.b)
if(t>0)return
else return new M.aa(this,a,(u.t(a.a)+this.b)/-t)},
ac:function(a){return this.a},
gD:function(){return this.c}}
M.be.prototype={
$1:function(a){return $.ch()},
$S:0}
M.bf.prototype={
$1:function(a){return $.cF()},
$S:0}
M.bg.prototype={
$1:function(a){return 0.7},
$S:4}
M.bh.prototype={
$1:function(a){if(C.c.E(C.a.u(a.c)+C.a.u(a.a),2)!==0)return $.ch()
else return $.cf()}}
M.bi.prototype={
$1:function(a){return $.ch()},
$S:0}
M.bj.prototype={
$1:function(a){if(C.c.E(C.a.u(a.c)+C.a.u(a.a),2)!==0)return 0.1
else return 0.7},
$S:4}
M.aM.prototype={}
R.aD.prototype={
a1:function(a,b){var u,t,s,r,q
for(u=b.a,t=1/0,s=null,r=0;r<3;++r){q=u[r].aa(a)
if(q!=null&&q.c<t){t=q.c
s=q}}return s},
aw:function(a,b){var u=this.a1(a,b)
if(u!=null)return u.c
else return},
a4:function(a,b,c){var u,t,s,r,q,p,o
u=this.a1(a,b)
if(u==null)return $.cE()
else{t=u.b
s=t.b
r=s.j(0,u.c).i(0,t.a)
t=u.a
q=t.ac(r)
p=s.m(0,q.j(0,q.t(s)).j(0,2))
o=$.cE().i(0,this.as(t,r,q,p,b))
return o.i(0,c>=this.a?$.cF():this.a4(new M.Z(r,p),b,c+1).M(0,t.gD().c.$1(r)))}},
as:function(a,b,c,d,e){return C.d.aG(e.b,$.cg(),new R.aE(this,b,e,c,d,a))},
w:function(){var u=0,t=P.d2(null),s,r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$w=P.d6(function(a0,a1){if(a0===1)return P.cY(a1,t)
while(true)switch(u){case 0:q=new R.aG(r,new R.aH(r))
p=$.di()
o=p.K(65536)
r.f=o
n=new R.aL(r,o)
o=document
m=o.querySelector("#full-render")
m=m==null?null:m.style
if(m!=null)m.display="none"
l=new R.aK(16)
k=window.performance.now()
m=r.d
j=r.e
i=r.c
case 3:if(!!0){u=4
break}if(!(J.dy(l.$1(r.r),2.8)&&n.$0())){u=4
break}h=p.K(m)
g=p.K(j)
f=q.$2(h,g).af()
i.toString
i.fillStyle="rgba("+f.a+", "+f.b+", "+f.c+", 1)"
e=J.dz(l.$1(r.r))
d=C.c.T(e,2)
i.fillRect(h-d,g-d,e,e);++r.r
d=window.performance.now()
if(typeof d!=="number"){s=d.m()
u=1
break}if(typeof k!=="number"){s=H.ap(k)
u=1
break}u=d-k>12?5:6
break
case 5:u=7
return P.ct(C.h.ga5(window),$async$w)
case 7:k=window.performance.now()
case 6:u=3
break
case 4:if(!n.$0()){u=1
break}c=P.dL(j*m,new R.aF())
C.d.ai(c,p)
p=c.length,b=0
case 8:if(!(b<c.length)){u=10
break}a=c[b]
if(typeof a!=="number"){s=a.E()
u=1
break}h=C.a.E(a,m)
g=C.a.am(a,m)
f=q.$2(h,g).af()
i.toString
i.fillStyle="rgba("+f.a+", "+f.b+", "+f.c+", 1)"
i.fillRect(h,g,1,1)
j=window.performance.now()
if(typeof j!=="number"){s=j.m()
u=1
break}if(typeof k!=="number"){s=H.ap(k)
u=1
break}u=j-k>12?11:12
break
case 11:u=13
return P.ct(C.h.ga5(window),$async$w)
case 13:k=window.performance.now()
if(!n.$0()){u=1
break}case 12:case 9:c.length===p||(0,H.dg)(c),++b
u=8
break
case 10:p=o.querySelector("#full-render")
p=p==null?null:p.style
if(p!=null)p.display="inline"
case 1:return P.cZ(s,t)}})
return P.d_($async$w,t)}}
R.aE.prototype={
$2:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.b
t=b.a.m(0,u)
s=t.v()
r=this.a.aw(new M.Z(u,s),this.c)
if(r==null?!1:r<=t.ab())return a
else{q=s.t(this.d)
p=q>0?b.b.M(0,q):$.cg()
o=s.t(this.e.v())
n=o>0?b.b.M(0,Math.pow(o,this.f.gD().d)):$.cg()
m=this.f
return J.cI(J.cI(a,m.gD().a.$1(u).j(0,p)),m.gD().b.$1(u).j(0,n))}}}
R.aH.prototype={
$3:function(a,b,c){var u=this.a
return c.b.i(0,c.c.j(0,new R.aI(u).$1(a))).i(0,c.d.j(0,new R.aJ(u).$1(b))).v()}}
R.aI.prototype={
$1:function(a){var u=this.a.e
return(a-u/2)/2/u},
$S:5}
R.aJ.prototype={
$1:function(a){var u=this.a.e
return-(a-u/2)/2/u},
$S:5}
R.aG.prototype={
$2:function(a,b){var u,t,s
u=this.a
t=u.b
s=t.c
return u.a4(new M.Z(s.a,this.b.$3(a,b,s)),t,0)},
$S:13}
R.aL.prototype={
$0:function(){return this.a.f===this.b}}
R.aK.prototype={
$1:function(a){return this.a-Math.log(a+10)}}
R.aF.prototype={
$1:function(a){return a}}
R.c9.prototype={
$0:function(){var u=this.a.c
u.a=u.a.i(0,u.b)}}
R.c8.prototype={
$0:function(){var u=this.a.c
u.a=u.a.m(0,u.b)}}
R.ca.prototype={
$0:function(){var u=this.a.c
u.a=u.a.m(0,u.c)}}
R.cb.prototype={
$0:function(){var u=this.a.c
u.a=u.a.i(0,u.c)}}
R.c6.prototype={
$1:function(a){var u
switch(a.keyCode){case 87:this.a.$0()
break
case 83:this.b.$0()
break
case 65:this.c.$0()
break
case 68:this.d.$0()
break
default:return}u=this.e
u.r=0
u.w()}}
R.c7.prototype={
$1:function(a){var u,t,s,r,q,p
u=this.a
t=new H.ae(u)
s=t.gJ(t)
if(!s.n())H.as(H.dI())
r=s.gB()
for(t=new H.ae(u),t=t.gJ(t),q=[P.u];t.n();){p=t.d
if(p.a8(new P.o(a.clientX,a.clientY,q))<r.a8(new P.o(a.clientX,a.clientY,q)))r=p}u.ag(0,r).$0()
u=this.b
u.r=0
u.w()}};(function aliases(){var u=J.i.prototype
u.ak=u.h
u=J.ac.prototype
u.al=u.h})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff
u(P,"e4","dS",1)
u(P,"e5","dT",1)
u(P,"e6","dU",1)
t(P,"da","e3",14)
s(P.al.prototype,"gaD",0,1,null,["$2","$1"],["A","aE"],8,0)
s(P.a2.prototype,"gaB",1,0,null,["$1","$0"],["q","aC"],9,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.h,null)
s(P.h,[H.co,J.i,J.aw,P.aU,H.bl,P.B,H.U,H.a9,H.an,P.b4,H.b_,H.b0,P.bR,P.br,P.al,P.bB,P.q,P.ak,P.bd,P.bQ,P.I,P.bT,P.ao,P.u,P.b6,P.ah,P.bA,P.aS,P.b1,P.m,P.p,P.aj,P.a_,W.aC,P.bL,P.o,M.j,M.k,M.aP,M.ay,M.Z,M.aa,M.J,M.ba,M.ag,M.b8,M.aM,R.aD])
s(J.i,[J.aV,J.aX,J.ac,J.C,J.D,J.E,W.T,W.am,W.aO,W.b])
s(J.ac,[J.b7,J.G,J.V])
t(J.cn,J.C)
s(J.D,[J.ab,J.aW])
t(H.aQ,P.aU)
s(P.B,[H.b5,H.aZ,H.bo,H.b9,P.W,P.z,P.bp,P.bn,P.ai,P.aA,P.aN])
s(H.a9,[H.ce,H.bk,H.c2,H.c3,H.c4,P.bv,P.bu,P.bw,P.bx,P.bS,P.bt,P.bs,P.bU,P.bV,P.bZ,P.bC,P.bG,P.bD,P.bE,P.bF,P.bJ,P.bK,P.bI,P.bH,P.bX,P.bO,P.bN,P.bP,P.b3,W.bq,W.bz,M.az,M.be,M.bf,M.bg,M.bh,M.bi,M.bj,R.aE,R.aH,R.aI,R.aJ,R.aG,R.aL,R.aK,R.aF,R.c9,R.c8,R.ca,R.cb,R.c6,R.c7])
s(H.bk,[H.bc,H.Q])
t(P.b2,P.b4)
t(H.aY,P.b2)
t(H.ae,H.aQ)
t(P.a2,P.al)
t(P.bM,P.bT)
s(P.u,[P.N,P.a6])
s(P.z,[P.Y,P.aT])
s(W.T,[W.n,W.a0])
s(W.n,[W.a,W.A])
t(W.c,W.a)
s(W.c,[W.au,W.av,W.aR,W.bb])
t(W.S,W.am)
t(W.y,W.b)
s(W.y,[W.ad,W.F])
t(W.by,P.bd)
u(W.am,W.aC)})();(function constants(){C.u=J.i.prototype
C.d=J.C.prototype
C.c=J.ab.prototype
C.a=J.D.prototype
C.e=J.E.prototype
C.v=J.V.prototype
C.l=J.b7.prototype
C.f=J.G.prototype
C.h=W.a0.prototype
C.i=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.m=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.r=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.n=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.o=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.q=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.p=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.j=function(hooks) { return hooks; }

C.t=new P.b6()
C.k=new P.bL()
C.b=new P.bM()})();(function staticFields(){$.v=0
$.R=null
$.cK=null
$.dd=null
$.d8=null
$.df=null
$.c0=null
$.c5=null
$.cB=null
$.K=null
$.a3=null
$.a4=null
$.cu=!1
$.f=C.b})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"es","dj",function(){return H.db("_$dart_dartClosure")})
u($,"et","cG",function(){return H.db("_$dart_js")})
u($,"ey","dm",function(){return H.w(H.bm({
toString:function(){return"$receiver$"}}))})
u($,"ez","dn",function(){return H.w(H.bm({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"eA","dp",function(){return H.w(H.bm(null))})
u($,"eB","dq",function(){return H.w(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"eE","dt",function(){return H.w(H.bm(void 0))})
u($,"eF","du",function(){return H.w(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"eD","ds",function(){return H.w(H.cT(null))})
u($,"eC","dr",function(){return H.w(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"eH","dw",function(){return H.w(H.cT(void 0))})
u($,"eG","dv",function(){return H.w(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"eI","cH",function(){return P.dR()})
u($,"eJ","a7",function(){return[]})
u($,"eq","ch",function(){return M.cm(1,1,1)})
u($,"ep","cF",function(){return M.cm(0.5,0.5,0.5)})
u($,"en","cf",function(){return M.cm(0,0,0)})
u($,"em","cE",function(){return $.cf()})
u($,"eo","cg",function(){return $.cf()})
u($,"ex","dl",function(){return M.cN(new M.be(),new M.bf(),new M.bg(),250)})
u($,"ew","dk",function(){return M.cN(new M.bh(),new M.bi(),new M.bj(),150)})
u($,"er","di",function(){return P.dN()})})()
var v={mangledGlobalNames:{a6:"int",N:"double",u:"num",aj:"String",ao:"bool",m:"Null",b1:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:M.k,args:[,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.m,args:[,]},{func:1,ret:P.N,args:[,]},{func:1,ret:P.u,args:[,]},{func:1,ret:-1,args:[,]},{func:1,ret:P.m,args:[,P.p]},{func:1,ret:-1,args:[P.h],opt:[P.p]},{func:1,ret:-1,opt:[P.h]},{func:1,ret:P.m,args:[,],opt:[P.p]},{func:1,ret:[P.q,,],args:[,]},{func:1,ret:P.m,args:[,,]},{func:1,ret:M.k,args:[,,]},{func:1,ret:-1}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.i,CanvasPattern:J.i,CanvasRenderingContext2D:J.i,DOMError:J.i,MediaError:J.i,Navigator:J.i,NavigatorConcurrentHardware:J.i,NavigatorUserMediaError:J.i,OverconstrainedError:J.i,PositionError:J.i,SVGAnimatedLength:J.i,SVGAnimatedLengthList:J.i,SVGAnimatedNumber:J.i,SQLError:J.i,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLCanvasElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.au,HTMLAreaElement:W.av,CDATASection:W.A,CharacterData:W.A,Comment:W.A,ProcessingInstruction:W.A,Text:W.A,CSSStyleDeclaration:W.S,MSStyleCSSProperties:W.S,CSS2Properties:W.S,DOMException:W.aO,SVGAElement:W.a,SVGAnimateElement:W.a,SVGAnimateMotionElement:W.a,SVGAnimateTransformElement:W.a,SVGAnimationElement:W.a,SVGCircleElement:W.a,SVGClipPathElement:W.a,SVGDefsElement:W.a,SVGDescElement:W.a,SVGDiscardElement:W.a,SVGEllipseElement:W.a,SVGFEBlendElement:W.a,SVGFEColorMatrixElement:W.a,SVGFEComponentTransferElement:W.a,SVGFECompositeElement:W.a,SVGFEConvolveMatrixElement:W.a,SVGFEDiffuseLightingElement:W.a,SVGFEDisplacementMapElement:W.a,SVGFEDistantLightElement:W.a,SVGFEFloodElement:W.a,SVGFEFuncAElement:W.a,SVGFEFuncBElement:W.a,SVGFEFuncGElement:W.a,SVGFEFuncRElement:W.a,SVGFEGaussianBlurElement:W.a,SVGFEImageElement:W.a,SVGFEMergeElement:W.a,SVGFEMergeNodeElement:W.a,SVGFEMorphologyElement:W.a,SVGFEOffsetElement:W.a,SVGFEPointLightElement:W.a,SVGFESpecularLightingElement:W.a,SVGFESpotLightElement:W.a,SVGFETileElement:W.a,SVGFETurbulenceElement:W.a,SVGFilterElement:W.a,SVGForeignObjectElement:W.a,SVGGElement:W.a,SVGGeometryElement:W.a,SVGGraphicsElement:W.a,SVGImageElement:W.a,SVGLineElement:W.a,SVGLinearGradientElement:W.a,SVGMarkerElement:W.a,SVGMaskElement:W.a,SVGMetadataElement:W.a,SVGPathElement:W.a,SVGPatternElement:W.a,SVGPolygonElement:W.a,SVGPolylineElement:W.a,SVGRadialGradientElement:W.a,SVGRectElement:W.a,SVGScriptElement:W.a,SVGSetElement:W.a,SVGStopElement:W.a,SVGStyleElement:W.a,SVGElement:W.a,SVGSVGElement:W.a,SVGSwitchElement:W.a,SVGSymbolElement:W.a,SVGTSpanElement:W.a,SVGTextContentElement:W.a,SVGTextElement:W.a,SVGTextPathElement:W.a,SVGTextPositioningElement:W.a,SVGTitleElement:W.a,SVGUseElement:W.a,SVGViewElement:W.a,SVGGradientElement:W.a,SVGComponentTransferFunctionElement:W.a,SVGFEDropShadowElement:W.a,SVGMPathElement:W.a,Element:W.a,AbortPaymentEvent:W.b,AnimationEvent:W.b,AnimationPlaybackEvent:W.b,ApplicationCacheErrorEvent:W.b,BackgroundFetchClickEvent:W.b,BackgroundFetchEvent:W.b,BackgroundFetchFailEvent:W.b,BackgroundFetchedEvent:W.b,BeforeInstallPromptEvent:W.b,BeforeUnloadEvent:W.b,BlobEvent:W.b,CanMakePaymentEvent:W.b,ClipboardEvent:W.b,CloseEvent:W.b,CustomEvent:W.b,DeviceMotionEvent:W.b,DeviceOrientationEvent:W.b,ErrorEvent:W.b,ExtendableEvent:W.b,ExtendableMessageEvent:W.b,FetchEvent:W.b,FontFaceSetLoadEvent:W.b,ForeignFetchEvent:W.b,GamepadEvent:W.b,HashChangeEvent:W.b,InstallEvent:W.b,MediaEncryptedEvent:W.b,MediaKeyMessageEvent:W.b,MediaQueryListEvent:W.b,MediaStreamEvent:W.b,MediaStreamTrackEvent:W.b,MessageEvent:W.b,MIDIConnectionEvent:W.b,MIDIMessageEvent:W.b,MutationEvent:W.b,NotificationEvent:W.b,PageTransitionEvent:W.b,PaymentRequestEvent:W.b,PaymentRequestUpdateEvent:W.b,PopStateEvent:W.b,PresentationConnectionAvailableEvent:W.b,PresentationConnectionCloseEvent:W.b,ProgressEvent:W.b,PromiseRejectionEvent:W.b,PushEvent:W.b,RTCDataChannelEvent:W.b,RTCDTMFToneChangeEvent:W.b,RTCPeerConnectionIceEvent:W.b,RTCTrackEvent:W.b,SecurityPolicyViolationEvent:W.b,SensorErrorEvent:W.b,SpeechRecognitionError:W.b,SpeechRecognitionEvent:W.b,SpeechSynthesisEvent:W.b,StorageEvent:W.b,SyncEvent:W.b,TrackEvent:W.b,TransitionEvent:W.b,WebKitTransitionEvent:W.b,VRDeviceEvent:W.b,VRDisplayEvent:W.b,VRSessionEvent:W.b,MojoInterfaceRequestEvent:W.b,ResourceProgressEvent:W.b,USBConnectionEvent:W.b,IDBVersionChangeEvent:W.b,AudioProcessingEvent:W.b,OfflineAudioCompletionEvent:W.b,WebGLContextEvent:W.b,Event:W.b,InputEvent:W.b,Performance:W.T,EventTarget:W.T,HTMLFormElement:W.aR,KeyboardEvent:W.ad,MouseEvent:W.F,DragEvent:W.F,PointerEvent:W.F,WheelEvent:W.F,Document:W.n,DocumentFragment:W.n,HTMLDocument:W.n,ShadowRoot:W.n,XMLDocument:W.n,Attr:W.n,DocumentType:W.n,Node:W.n,HTMLSelectElement:W.bb,CompositionEvent:W.y,FocusEvent:W.y,TextEvent:W.y,TouchEvent:W.y,UIEvent:W.y,Window:W.a0,DOMWindow:W.a0})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Performance:true,EventTarget:false,HTMLFormElement:true,KeyboardEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(R.aq,[])
else R.aq([])})})()
//# sourceMappingURL=raytracer_huge.dart.js.map
