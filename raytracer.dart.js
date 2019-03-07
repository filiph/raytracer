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
a[c]=function(){a[c]=function(){H.dP(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.c2"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.c2"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.c2(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={bU:function bU(){},
bJ:function(a){var u=v.mangledGlobalNames[a]
if(typeof u==="string")return u
u="minified:"+a
return u},
dF:function(a){return v.types[a]},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ag(a)
if(typeof u!=="string")throw H.e(H.c0(a))
return u},
a1:function(a){return H.d3(a)+H.cr(H.bB(a),0,null)},
d3:function(a){var u,t,s,r,q,p,o,n,m,l
u=J.u(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.r||!!u.$iD){p=C.e(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
l=r.length
if(l>1&&C.h.a6(r,0)===36){if(1>l)H.bI(P.bX(1,null))
if(l>l)H.bI(P.bX(l,null))
r=r.substring(1,l)}return H.bJ(r)},
cB:function(a){throw H.e(H.c0(a))},
ae:function(a,b){if(a==null)J.bP(a)
throw H.e(H.cy(a,b))},
cy:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.v(!0,b,"index",null)
u=J.bP(a)
if(!(b<0)){if(typeof u!=="number")return H.cB(u)
t=b>=u}else t=!0
if(t)return P.d0(b,a,"index",null,u)
return P.bX(b,"index")},
c0:function(a){return new P.v(!0,a,null,null)},
e:function(a){var u
if(a==null)a=new P.R()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.cF})
u.name=""}else u.toString=H.cF
return u},
cF:function(){return J.ag(this.dartException)},
bI:function(a){throw H.e(a)},
dO:function(a){throw H.e(P.ci(a))},
r:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=[]
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.aY(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
aZ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
cn:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
cm:function(a,b){return new H.aC(a,b==null?null:b.method)},
bV:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.aA(a,t,u?null:b.receiver)},
O:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.bK(a)
if(a==null)return
if(a instanceof H.Q)return u.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.b.a9(s,16)&8191)===10)switch(r){case 438:return u.$1(H.bV(H.d(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.cm(H.d(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.cJ()
p=$.cK()
o=$.cL()
n=$.cM()
m=$.cP()
l=$.cQ()
k=$.cO()
$.cN()
j=$.cS()
i=$.cR()
h=q.k(t)
if(h!=null)return u.$1(H.bV(t,h))
else{h=p.k(t)
if(h!=null){h.method="call"
return u.$1(H.bV(t,h))}else{h=o.k(t)
if(h==null){h=n.k(t)
if(h==null){h=m.k(t)
if(h==null){h=l.k(t)
if(h==null){h=k.k(t)
if(h==null){h=n.k(t)
if(h==null){h=j.k(t)
if(h==null){h=i.k(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.cm(t,h))}}return u.$1(new H.b0(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.a4()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.v(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.a4()
return a},
N:function(a){var u
if(a instanceof H.Q)return a.b
if(a==null)return new H.a9(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.a9(a)},
dJ:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(new P.bb("Unsupported number of arguments for wrapped closure"))},
ac:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.dJ)
a.$identity=u
return u},
cX:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j
u=b[0]
t=u.$callName
s=e?Object.create(new H.aP().constructor.prototype):Object.create(new H.X(null,null,null,null).constructor.prototype)
s.$initialize=s.constructor
if(e)r=function static_tear_off(){this.$initialize()}
else{q=$.q
if(typeof q!=="number")return q.i()
$.q=q+1
q=new Function("a,b,c,d"+q,"this.$initialize(a,b,c,d"+q+")")
r=q}s.constructor=r
r.prototype=s
if(!e){p=H.ch(a,u,f)
p.$reflectionInfo=d}else{s.$static_name=g
p=u}if(typeof d=="number")o=function(h,i){return function(){return h(i)}}(H.dF,d)
else if(typeof d=="function")if(e)o=d
else{n=f?H.cg:H.bR
o=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(d,n)}else throw H.e("Error in reflectionInfo.")
s.$S=o
s[t]=p
for(m=p,l=1;l<b.length;++l){k=b[l]
j=k.$callName
if(j!=null){k=e?k:H.ch(a,k,f)
s[j]=k}if(l===c){k.$reflectionInfo=d
m=k}}s.$C=m
s.$R=u.$R
s.$D=u.$D
return r},
cU:function(a,b,c,d){var u=H.bR
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ch:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.cW(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.cU(t,!r,u,b)
if(t===0){r=$.q
if(typeof r!=="number")return r.i()
$.q=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.P
if(q==null){q=H.ak("self")
$.P=q}return new Function(r+H.d(q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.q
if(typeof r!=="number")return r.i()
$.q=r+1
o+=r
r="return function("+o+"){return this."
q=$.P
if(q==null){q=H.ak("self")
$.P=q}return new Function(r+H.d(q)+"."+H.d(u)+"("+o+");}")()},
cV:function(a,b,c,d){var u,t
u=H.bR
t=H.cg
switch(b?-1:a){case 0:throw H.e(new H.aL("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
cW:function(a,b){var u,t,s,r,q,p,o,n
u=$.P
if(u==null){u=H.ak("self")
$.P=u}t=$.cf
if(t==null){t=H.ak("receiver")
$.cf=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.cV(r,!p,s,b)
if(r===1){u="return function(){return this."+H.d(u)+"."+H.d(s)+"(this."+H.d(t)+");"
t=$.q
if(typeof t!=="number")return t.i()
$.q=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.d(u)+"."+H.d(s)+"(this."+H.d(t)+", "+n+");"
t=$.q
if(typeof t!=="number")return t.i()
$.q=t+1
return new Function(u+t+"}")()},
c2:function(a,b,c,d,e,f,g){return H.cX(a,b,c,d,!!e,!!f,g)},
bR:function(a){return a.a},
cg:function(a){return a.c},
ak:function(a){var u,t,s,r,q
u=new H.X("self","target","receiver","name")
t=J.cl(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
dy:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
c3:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.dy(J.u(a))
if(u==null)return!1
return H.cq(u,null,b,null)},
dP:function(a){throw H.e(new P.ap(a))},
cz:function(a){return v.getIsolateTag(a)},
ef:function(a,b){a.$ti=b
return a},
bB:function(a){if(a==null)return
return a.$ti},
ee:function(a,b,c){return H.af(a["$a"+H.d(c)],H.bB(b))},
K:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bJ(a[0].name)+H.cr(a,1,b)
if(typeof a=="function")return H.bJ(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.d(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.ae(b,t)
return H.d(b[t])}if('func' in a)return H.dk(a,b)
if('futureOr' in a)return"FutureOr<"+H.K("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
dk:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if("bounds" in a){u=a.bounds
if(b==null){b=[]
t=null}else t=b.length
s=b.length
for(r=u.length,q=r;q>0;--q)b.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=", "){p+=o
n=b.length
m=n-q-1
if(m<0)return H.ae(b,m)
p=C.h.i(p,b[m])
l=u[q]
if(l!=null&&l!==P.h)p+=" extends "+H.K(l,b)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.K(a.ret,b)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=", "){f=j[g]
i=i+h+H.K(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=", "){f=e[g]
i=i+h+H.K(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.dz(d),m=n.length,h="",g=0;g<m;++g,h=", "){c=n[g]
i=i+h+H.K(d[c],b)+(" "+H.d(c))}i+="}"}if(t!=null)b.length=t
return p+"("+i+") => "+k},
cr:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.a6("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.K(p,c)}return"<"+u.h(0)+">"},
af:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
c1:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bB(a)
t=J.u(a)
if(t[b]==null)return!1
return H.cw(H.af(t[d],u),null,c,null)},
cw:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.p(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.p(a[t],b,c[t],d))return!1
return!0},
ed:function(a,b,c){return a.apply(b,H.af(J.u(b)["$a"+H.d(c)],H.bB(b)))},
p:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="h"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="h"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.p(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="m")return!0
if('func' in c)return H.cq(a,b,c,d)
if('func' in a)return c.name==="dW"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.p("type" in a?a.type:null,b,s,d)
else if(H.p(a,b,s,d))return!0
else{if(!('$i'+"l" in t.prototype))return!1
r=t.prototype["$a"+"l"]
q=H.af(r,u?a.slice(1):null)
return H.p(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.cw(H.af(m,u),b,p,d)},
cq:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.p(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.p(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.p(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.p(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.dM(h,b,g,d)},
dM:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.p(c[r],d,a[r],b))return!1}return!0},
dK:function(a){var u,t,s,r,q,p
u=$.cA.$1(a)
t=$.bA[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.bF[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=$.cv.$2(a,u)
if(u!=null){t=$.bA[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.bF[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.bH(s)
$.bA[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.bF[u]=s
return s}if(q==="-"){p=H.bH(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.cD(a,s)
if(q==="*")throw H.e(P.co(u))
if(v.leafTags[u]===true){p=H.bH(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.cD(a,s)},
cD:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.c6(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
bH:function(a){return J.c6(a,!1,null,!!a.$idY)},
dL:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.bH(u)
else return J.c6(u,c,null,null)},
dH:function(){if(!0===$.c5)return
$.c5=!0
H.dI()},
dI:function(){var u,t,s,r,q,p,o,n
$.bA=Object.create(null)
$.bF=Object.create(null)
H.dG()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.cE.$1(q)
if(p!=null){o=H.dL(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
dG:function(){var u,t,s,r,q,p,o
u=C.j()
u=H.L(C.k,H.L(C.l,H.L(C.f,H.L(C.f,H.L(C.m,H.L(C.n,H.L(C.o(C.e),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.cA=new H.bC(q)
$.cv=new H.bD(p)
$.cE=new H.bE(o)},
L:function(a,b){return a(b)||b},
aY:function aY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aC:function aC(a,b){this.a=a
this.b=b},
aA:function aA(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(a){this.a=a},
Q:function Q(a,b){this.a=a
this.b=b},
bK:function bK(a){this.a=a},
a9:function a9(a){this.a=a
this.b=null},
Y:function Y(){},
aX:function aX(){},
aP:function aP(){},
X:function X(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aL:function aL(a){this.a=a},
bC:function bC(a){this.a=a},
bD:function bD(a){this.a=a},
bE:function bE(a){this.a=a},
dz:function(a){return J.d2(a?Object.keys(a):[])},
dN:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
c6:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c4:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.c5==null){H.dH()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.e(P.co("Return interceptor for "+H.d(t(a,u))))}r=a.constructor
q=r==null?null:r[$.ca()]
if(q!=null)return q
q=H.dK(a)
if(q!=null)return q
if(typeof a=="function")return C.u
t=Object.getPrototypeOf(a)
if(t==null)return C.i
if(t===Object.prototype)return C.i
if(typeof r=="function"){Object.defineProperty(r,$.ca(),{value:C.d,enumerable:false,writable:true,configurable:true})
return C.d}return C.d},
d2:function(a){return J.cl(a)},
cl:function(a){a.fixed$length=Array
return a},
u:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.a_.prototype
return J.ay.prototype}if(typeof a=="string")return J.B.prototype
if(a==null)return J.az.prototype
if(typeof a=="boolean")return J.ax.prototype
if(a.constructor==Array)return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.F.prototype
return a}if(a instanceof P.h)return a
return J.c4(a)},
dA:function(a){if(typeof a=="number")return J.A.prototype
if(typeof a=="string")return J.B.prototype
if(a==null)return a
if(a.constructor==Array)return J.z.prototype
if(!(a instanceof P.h))return J.D.prototype
return a},
dB:function(a){if(typeof a=="string")return J.B.prototype
if(a==null)return a
if(a.constructor==Array)return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.F.prototype
return a}if(a instanceof P.h)return a
return J.c4(a)},
dC:function(a){if(typeof a=="number")return J.A.prototype
if(a==null)return a
if(!(a instanceof P.h))return J.D.prototype
return a},
dD:function(a){if(typeof a=="number")return J.A.prototype
if(typeof a=="string")return J.B.prototype
if(a==null)return a
if(!(a instanceof P.h))return J.D.prototype
return a},
dE:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.F.prototype
return a}if(a instanceof P.h)return a
return J.c4(a)},
cd:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.dA(a).i(a,b)},
bO:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.dD(a).j(a,b)},
cT:function(a,b,c,d){return J.dE(a).a5(a,b,c,d)},
bP:function(a){return J.dB(a).gl(a)},
bQ:function(a){return J.dC(a).az(a)},
ag:function(a){return J.u(a).h(a)},
i:function i(){},
ax:function ax(){},
az:function az(){},
a0:function a0(){},
aE:function aE(){},
D:function D(){},
F:function F(){},
z:function z(){},
bT:function bT(){},
aj:function aj(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
A:function A(){},
a_:function a_(){},
ay:function ay(){},
B:function B(){}},P={
d8:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.dv()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.ac(new P.b6(u),1)).observe(t,{childList:true})
return new P.b5(u,t,s)}else if(self.setImmediate!=null)return P.dw()
return P.dx()},
d9:function(a){self.scheduleImmediate(H.ac(new P.b7(a),0))},
da:function(a){self.setImmediate(H.ac(new P.b8(a),0))},
db:function(a){P.bZ(C.q,a)},
bZ:function(a,b){var u=C.b.w(a.a,1000)
return P.de(u<0?0:u,b)},
de:function(a,b){var u=new P.br()
u.a4(a,b)
return u},
dm:function(a){return new P.b2(new P.aa(new P.o(0,$.f,[a]),[a]),!1,[a])},
di:function(a,b){a.$2(0,null)
b.b=!0
return b.a.a},
df:function(a,b){P.dj(a,b)},
dh:function(a,b){b.q(0,a)},
dg:function(a,b){b.t(H.O(a),H.N(a))},
dj:function(a,b){var u,t,s,r
u=new P.bu(b)
t=new P.bv(b)
s=J.u(a)
if(!!s.$io)a.I(u,t,null)
else if(!!s.$il)a.B(u,t,null)
else{r=new P.o(0,$.f,[null])
r.a=4
r.c=a
r.I(u,null,null)}},
dt:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.f.X(new P.bz(u))},
d_:function(a,b){var u=new P.o(0,$.f,[b])
P.d7(a,new P.av(null,u))
return u},
dd:function(a,b){var u,t,s
b.a=1
try{a.B(new P.be(b),new P.bf(b),null)}catch(s){u=H.O(s)
t=H.N(s)
P.c7(new P.bg(b,u,t))}},
cp:function(a,b){var u,t
for(;u=a.a,u===2;)a=a.c
if(u>=4){t=b.H()
b.a=a.a
b.c=a.c
P.T(b,t)}else{t=b.c
b.a=2
b.c=a
a.R(t)}},
T:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=t.c
t=t.b
p=q.a
q=q.b
t.toString
P.bw(null,null,t,p,q)}return}for(;o=b.a,o!=null;b=o){b.a=null
P.T(u.a,b)}t=u.a
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
P.bw(null,null,t,q,p)
return}k=$.f
if(k!=m)$.f=m
else k=null
t=b.c
if(t===8)new P.bk(u,s,b,r).$0()
else if(q){if((t&1)!==0)new P.bj(s,b,n).$0()}else if((t&2)!==0)new P.bi(u,s,b).$0()
if(k!=null)$.f=k
t=s.b
if(!!J.u(t).$il){if(t.a>=4){j=p.c
p.c=null
b=p.v(j)
p.a=t.a
p.c=t.c
u.a=t
continue}else P.cp(t,p)
return}}i=b.b
j=i.c
i.c=null
b=i.v(j)
t=s.a
q=s.b
if(!t){i.a=4
i.c=q}else{i.a=8
i.c=q}u.a=i
t=i}},
dp:function(a,b){if(H.c3(a,{func:1,args:[P.h,P.n]}))return b.X(a)
if(H.c3(a,{func:1,args:[P.h]}))return a
throw H.e(P.ce(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
dn:function(){var u,t
for(;u=$.J,u!=null;){$.V=null
t=u.b
$.J=t
if(t==null)$.U=null
u.a.$0()}},
ds:function(){$.c_=!0
try{P.dn()}finally{$.V=null
$.c_=!1
if($.J!=null)$.cb().$1(P.cx())}},
cu:function(a){var u=new P.a7(a)
if($.J==null){$.U=u
$.J=u
if(!$.c_)$.cb().$1(P.cx())}else{$.U.b=u
$.U=u}},
dr:function(a){var u,t,s
u=$.J
if(u==null){P.cu(a)
$.V=$.U
return}t=new P.a7(a)
s=$.V
if(s==null){t.b=u
$.V=t
$.J=t}else{t.b=s.b
s.b=t
$.V=t
if(t.b==null)$.U=t}},
c7:function(a){var u=$.f
if(C.a===u){P.by(null,null,C.a,a)
return}u.toString
P.by(null,null,u,u.J(a))},
dZ:function(a){return new P.bq(a)},
d7:function(a,b){var u=$.f
if(u===C.a){u.toString
return P.bZ(a,b)}return P.bZ(a,u.J(b))},
bw:function(a,b,c,d,e){var u={}
u.a=d
P.dr(new P.bx(u,e))},
cs:function(a,b,c,d){var u,t
t=$.f
if(t===c)return d.$0()
$.f=c
u=t
try{t=d.$0()
return t}finally{$.f=u}},
ct:function(a,b,c,d,e){var u,t
t=$.f
if(t===c)return d.$1(e)
$.f=c
u=t
try{t=d.$1(e)
return t}finally{$.f=u}},
dq:function(a,b,c,d,e,f){var u,t
t=$.f
if(t===c)return d.$2(e,f)
$.f=c
u=t
try{t=d.$2(e,f)
return t}finally{$.f=u}},
by:function(a,b,c,d){var u=C.a!==c
if(u)d=!(!u||!1)?c.J(d):c.ad(d)
P.cu(d)},
b6:function b6(a){this.a=a},
b5:function b5(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(a){this.a=a},
b8:function b8(a){this.a=a},
br:function br(){},
bs:function bs(a,b){this.a=a
this.b=b},
b2:function b2(a,b,c){this.a=a
this.b=b
this.$ti=c},
b4:function b4(a,b){this.a=a
this.b=b},
b3:function b3(a,b,c){this.a=a
this.b=b
this.c=c},
bu:function bu(a){this.a=a},
bv:function bv(a){this.a=a},
bz:function bz(a){this.a=a},
l:function l(){},
av:function av(a,b){this.a=a
this.b=b},
a8:function a8(){},
aa:function aa(a,b){this.a=a
this.$ti=b},
bc:function bc(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d},
o:function o(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
bd:function bd(a,b){this.a=a
this.b=b},
bh:function bh(a,b){this.a=a
this.b=b},
be:function be(a){this.a=a},
bf:function bf(a){this.a=a},
bg:function bg(a,b,c){this.a=a
this.b=b
this.c=c},
bk:function bk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bl:function bl(a){this.a=a},
bj:function bj(a,b,c){this.a=a
this.b=b
this.c=c},
bi:function bi(a,b,c){this.a=a
this.b=b
this.c=c},
a7:function a7(a){this.a=a
this.b=null},
aQ:function aQ(){},
bq:function bq(a){this.a=null
this.b=a
this.c=!1},
E:function E(a,b){this.a=a
this.b=b},
bt:function bt(){},
bx:function bx(a,b){this.a=a
this.b=b},
bm:function bm(){},
bo:function bo(a,b){this.a=a
this.b=b},
bn:function bn(a,b){this.a=a
this.b=b},
bp:function bp(a,b,c){this.a=a
this.b=b
this.c=c},
cZ:function(a){if(a instanceof H.Y)return a.h(0)
return"Instance of '"+H.a1(a)+"'"},
d6:function(a,b,c){var u=new J.aj(b,b.length,0)
if(!u.K())return a
if(c.length===0){do a+=H.d(u.d)
while(u.K())}else{a+=H.d(u.d)
for(;u.K();)a=a+c+H.d(u.d)}return a},
cY:function(a,b){return new P.w(1e6*b+1000*a)},
ck:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ag(a)
if(typeof a==="string")return JSON.stringify(a)
return P.cZ(a)},
ce:function(a,b,c){return new P.v(!0,a,b,c)},
bX:function(a,b){return new P.a2(null,null,!0,a,b,"Value not in range")},
bW:function(a,b,c,d,e){return new P.a2(b,c,!0,a,d,"Invalid value")},
d5:function(a,b,c){if(a>c)throw H.e(P.bW(a,0,c,"start",null))
if(a>b||b>c)throw H.e(P.bW(b,a,c,"end",null))
return b},
d4:function(a,b){if(typeof a!=="number")return a.a1()},
d0:function(a,b,c,d,e){var u=e==null?J.bP(b):e
return new P.aw(u,!0,a,c,"Index out of range")},
I:function(a){return new P.b1(a)},
co:function(a){return new P.b_(a)},
bY:function(a){return new P.aO(a)},
ci:function(a){return new P.an(a)},
ab:function ab(){},
M:function M(){},
w:function w(a){this.a=a},
as:function as(){},
at:function at(){},
x:function x(){},
R:function R(){},
v:function v(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a2:function a2(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aw:function aw(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b1:function b1(a){this.a=a},
b_:function b_(a){this.a=a},
aO:function aO(a){this.a=a},
an:function an(a){this.a=a},
aD:function aD(){},
a4:function a4(){},
ap:function ap(a){this.a=a},
bb:function bb(a){this.a=a},
ad:function ad(){},
aB:function aB(){},
m:function m(){},
W:function W(){},
h:function h(){},
n:function n(){},
a5:function a5(){},
a6:function a6(a){this.a=a},
d1:function(a,b,c){var u,t,s
if(P.dl(a))return b+"..."+c
u=new P.a6(b)
t=$.cc()
t.push(a)
try{s=u
s.a=P.d6(s.a,a,", ")}finally{if(0>=t.length)return H.ae(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
dl:function(a){var u,t
for(u=0;t=$.cc(),u<t.length;++u)if(a===t[u])return!0
return!1}},W={
dc:function(a,b,c,d){var u=W.du(new W.ba(c),W.b)
u=new W.b9(a,b,u,!1)
u.ac()
return u},
du:function(a,b){var u=$.f
if(u===C.a)return a
return u.af(a,b)},
c:function c(){},
ah:function ah(){},
ai:function ai(){},
aq:function aq(){},
a:function a(){},
b:function b(){},
y:function y(){},
au:function au(){},
C:function C(){},
H:function H(){},
aN:function aN(){},
t:function t(){},
b9:function b9(a,b,c,d){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d},
ba:function ba(a){this.a=a}},M={
bS:function(a,b,c){return new M.k(a,b,c)},
cj:function(a,b,c,d){return new M.ao(a,b,c,d)},
cC:function(){var u,t,s,r,q
u={}
t=document
s=t.querySelector("#dart-canvas")
r=t.querySelector("#dart-info")
q=t.querySelector("#dart-button")
u.a=0
q.toString
W.dc(q,"click",new M.bG(u,r,s,256,256,[],1,q),!1)},
j:function j(a,b,c){this.a=a
this.b=b
this.c=c},
k:function k(a,b,c){this.a=a
this.b=b
this.c=c},
am:function am(){},
ar:function ar(a,b,c){this.a=a
this.b=b
this.c=c},
al:function al(a){var _=this
_.a=a
_.d=_.c=_.b=null},
S:function S(a,b){this.a=a
this.b=b},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
G:function G(a,b){this.a=a
this.b=b},
aM:function aM(a,b,c){this.a=a
this.b=b
this.c=c},
a3:function a3(a,b,c){this.b=a
this.c=b
this.d=c},
aF:function aF(a,b,c){this.a=a
this.b=b
this.c=c},
aR:function aR(){},
aS:function aS(){},
aT:function aT(){},
aU:function aU(){},
aV:function aV(){},
aW:function aW(){},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aG:function aG(){this.a=5},
aH:function aH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aK:function aK(a,b){this.a=a
this.b=b},
aI:function aI(a){this.a=a},
aJ:function aJ(a){this.a=a},
bG:function bG(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h}}
var w=[C,H,J,P,W,M]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.bU.prototype={}
J.i.prototype={
h:function(a){return"Instance of '"+H.a1(a)+"'"}}
J.ax.prototype={
h:function(a){return String(a)},
$iab:1}
J.az.prototype={
h:function(a){return"null"},
$im:1}
J.a0.prototype={
h:function(a){return String(a)}}
J.aE.prototype={}
J.D.prototype={}
J.F.prototype={
h:function(a){var u=a[$.cG()]
if(u==null)return this.a3(a)
return"JavaScript function for "+H.d(J.ag(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.z.prototype={
ak:function(a,b,c){var u,t,s
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.e(P.ci(a))}return t},
al:function(a,b,c){return this.ak(a,b,c,null)},
N:function(a,b,c,d){var u,t
if(!!a.immutable$list)H.bI(P.I("setRange"))
P.d5(b,c,a.length)
u=c-b
if(u===0)return
P.d4(0,"skipCount")
if(u>d.length)throw H.e(P.bY("Too few elements"))
if(0<b)for(t=u-1;t>=0;--t){if(t>=d.length)return H.ae(d,t)
a[b+t]=d[t]}else for(t=0;t<u;++t){if(t>=d.length)return H.ae(d,t)
a[b+t]=d[t]}},
h:function(a){return P.d1(a,"[","]")},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.bI(P.I("set length"))
if(b<0)throw H.e(P.bW(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){var u,t
u=C.b.i(a.length,b.gl(b))
t=[]
this.sl(t,u)
this.N(t,0,a.length,a)
this.N(t,a.length,u,b)
return t}}
J.bT.prototype={}
J.aj.prototype={
K:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.e(H.dO(u))
s=this.c
if(s>=t){this.d=null
return!1}this.d=u[s]
this.c=s+1
return!0}}
J.A.prototype={
az:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.e(P.I(""+a+".toInt()"))},
A:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.e(P.I(""+a+".floor()"))},
Y:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.I(""+a+".round()"))},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
i:function(a,b){return a+b},
j:function(a,b){return a*b},
M:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
w:function(a,b){return(a|0)===a?a/b|0:this.aa(a,b)},
aa:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.I("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
a9:function(a,b){var u
if(a>0)u=this.a8(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
a8:function(a,b){return b>31?0:a>>>b},
a0:function(a,b){if(typeof b!=="number")throw H.e(H.c0(b))
return a>=b},
$iM:1,
$iW:1}
J.a_.prototype={$iad:1}
J.ay.prototype={}
J.B.prototype={
a6:function(a,b){if(b>=a.length)throw H.e(H.cy(a,b))
return a.charCodeAt(b)},
i:function(a,b){if(typeof b!=="string")throw H.e(P.ce(b,null,null))
return a+b},
j:function(a,b){if(C.b.a0(0,b))return""
if(a.length===0)return a
throw H.e(C.p)},
h:function(a){return a},
gl:function(a){return a.length},
$ia5:1}
H.aY.prototype={
k:function(a){var u,t,s
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
H.aC.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.aA.prototype={
h:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.d(this.a)+")"}}
H.b0.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.Q.prototype={}
H.bK.prototype={
$1:function(a){if(!!J.u(a).$ix)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:0}
H.a9.prototype={
h:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$in:1}
H.Y.prototype={
h:function(a){return"Closure '"+H.a1(this).trim()+"'"},
gaA:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.aX.prototype={}
H.aP.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bJ(u)+"'"}}
H.X.prototype={
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.a1(u)+"'")}}
H.aL.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.bC.prototype={
$1:function(a){return this.a(a)},
$S:0}
H.bD.prototype={
$2:function(a,b){return this.a(a,b)}}
H.bE.prototype={
$1:function(a){return this.a(a)}}
P.b6.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:3}
P.b5.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.b7.prototype={
$0:function(){this.a.$0()}}
P.b8.prototype={
$0:function(){this.a.$0()}}
P.br.prototype={
a4:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ac(new P.bs(this,b),0),a)
else throw H.e(P.I("`setTimeout()` not found."))}}
P.bs.prototype={
$0:function(){this.b.$0()}}
P.b2.prototype={
q:function(a,b){var u
if(this.b)this.a.q(0,b)
else if(H.c1(b,"$il",this.$ti,"$al")){u=this.a
b.B(u.gag(u),u.gai(),-1)}else P.c7(new P.b4(this,b))},
t:function(a,b){if(this.b)this.a.t(a,b)
else P.c7(new P.b3(this,a,b))}}
P.b4.prototype={
$0:function(){this.a.a.q(0,this.b)}}
P.b3.prototype={
$0:function(){this.a.a.t(this.b,this.c)}}
P.bu.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:5}
P.bv.prototype={
$2:function(a,b){this.a.$2(1,new H.Q(a,b))},
$S:6}
P.bz.prototype={
$2:function(a,b){this.a(a,b)}}
P.l.prototype={}
P.av.prototype={
$0:function(){this.b.D(null)}}
P.a8.prototype={
t:function(a,b){var u
if(a==null)a=new P.R()
u=this.a
if(u.a!==0)throw H.e(P.bY("Future already completed"))
$.f.toString
u.E(a,b)},
aj:function(a){return this.t(a,null)}}
P.aa.prototype={
q:function(a,b){var u=this.a
if(u.a!==0)throw H.e(P.bY("Future already completed"))
u.D(b)},
ah:function(a){return this.q(a,null)}}
P.bc.prototype={
an:function(a){if(this.c!==6)return!0
return this.b.b.L(this.d,a.a)},
am:function(a){var u,t
u=this.e
t=this.b.b
if(H.c3(u,{func:1,args:[P.h,P.n]}))return t.ar(u,a.a,a.b)
else return t.L(u,a.a)}}
P.o.prototype={
B:function(a,b,c){var u=$.f
if(u!==C.a){u.toString
if(b!=null)b=P.dp(b,u)}return this.I(a,b,c)},
ax:function(a,b){return this.B(a,null,b)},
I:function(a,b,c){var u=new P.o(0,$.f,[c])
this.O(new P.bc(u,b==null?1:3,a,b))
return u},
O:function(a){var u,t
u=this.a
if(u<=1){a.a=this.c
this.c=a}else{if(u===2){u=this.c
t=u.a
if(t<4){u.O(a)
return}this.a=t
this.c=u.c}u=this.b
u.toString
P.by(null,null,u,new P.bd(this,a))}},
R:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=this.c
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){t=this.c
p=t.a
if(p<4){t.R(a)
return}this.a=p
this.c=t.c}u.a=this.v(a)
t=this.b
t.toString
P.by(null,null,t,new P.bh(u,this))}},
H:function(){var u=this.c
this.c=null
return this.v(u)},
v:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
D:function(a){var u,t
u=this.$ti
if(H.c1(a,"$il",u,"$al"))if(H.c1(a,"$io",u,null))P.cp(a,this)
else P.dd(a,this)
else{t=this.H()
this.a=4
this.c=a
P.T(this,t)}},
E:function(a,b){var u=this.H()
this.a=8
this.c=new P.E(a,b)
P.T(this,u)},
$il:1}
P.bd.prototype={
$0:function(){P.T(this.a,this.b)}}
P.bh.prototype={
$0:function(){P.T(this.b,this.a.a)}}
P.be.prototype={
$1:function(a){var u=this.a
u.a=0
u.D(a)},
$S:3}
P.bf.prototype={
$2:function(a,b){this.a.E(a,b)},
$1:function(a){return this.$2(a,null)},
$S:9}
P.bg.prototype={
$0:function(){this.a.E(this.b,this.c)}}
P.bk.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.Z(r.d)}catch(q){t=H.O(q)
s=H.N(q)
if(this.d){r=this.a.a.c.a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=this.a.a.c
else p.b=new P.E(t,s)
p.a=!0
return}if(!!J.u(u).$il){if(u instanceof P.o&&u.a>=4){if(u.a===8){r=this.b
r.b=u.c
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.ax(new P.bl(o),null)
r.a=!1}}}
P.bl.prototype={
$1:function(a){return this.a},
$S:10}
P.bj.prototype={
$0:function(){var u,t,s,r
try{s=this.b
this.a.b=s.b.b.L(s.d,this.c)}catch(r){u=H.O(r)
t=H.N(r)
s=this.a
s.b=new P.E(u,t)
s.a=!0}}}
P.bi.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=this.a.a.c
r=this.c
if(r.an(u)&&r.e!=null){q=this.b
q.b=r.am(u)
q.a=!1}}catch(p){t=H.O(p)
s=H.N(p)
r=this.a.a.c
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.E(t,s)
n.a=!0}}}
P.a7.prototype={}
P.aQ.prototype={}
P.bq.prototype={}
P.E.prototype={
h:function(a){return H.d(this.a)},
$ix:1}
P.bt.prototype={}
P.bx.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.R()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.e(u)
s=H.e(u)
s.stack=t.h(0)
throw s}}
P.bm.prototype={
at:function(a){var u,t,s
try{if(C.a===$.f){a.$0()
return}P.cs(null,null,this,a)}catch(s){u=H.O(s)
t=H.N(s)
P.bw(null,null,this,u,t)}},
av:function(a,b){var u,t,s
try{if(C.a===$.f){a.$1(b)
return}P.ct(null,null,this,a,b)}catch(s){u=H.O(s)
t=H.N(s)
P.bw(null,null,this,u,t)}},
aw:function(a,b){return this.av(a,b,null)},
ae:function(a){return new P.bo(this,a)},
ad:function(a){return this.ae(a,null)},
J:function(a){return new P.bn(this,a)},
af:function(a,b){return new P.bp(this,a,b)},
aq:function(a){if($.f===C.a)return a.$0()
return P.cs(null,null,this,a)},
Z:function(a){return this.aq(a,null)},
au:function(a,b){if($.f===C.a)return a.$1(b)
return P.ct(null,null,this,a,b)},
L:function(a,b){return this.au(a,b,null,null)},
as:function(a,b,c){if($.f===C.a)return a.$2(b,c)
return P.dq(null,null,this,a,b,c)},
ar:function(a,b,c){return this.as(a,b,c,null,null,null)},
ao:function(a){return a},
X:function(a){return this.ao(a,null,null,null)}}
P.bo.prototype={
$0:function(){return this.a.Z(this.b)}}
P.bn.prototype={
$0:function(){return this.a.at(this.b)}}
P.bp.prototype={
$1:function(a){return this.a.aw(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ab.prototype={
h:function(a){return this?"true":"false"}}
P.M.prototype={}
P.w.prototype={
i:function(a,b){return new P.w(C.b.i(this.a,b.gaB()))},
j:function(a,b){return new P.w(C.c.Y(C.b.j(this.a,b)))},
h:function(a){var u,t,s,r,q
u=new P.at()
t=this.a
if(t<0)return"-"+new P.w(0-t).h(0)
s=u.$1(C.b.w(t,6e7)%60)
r=u.$1(C.b.w(t,1e6)%60)
q=new P.as().$1(t%1e6)
return""+C.b.w(t,36e8)+":"+H.d(s)+":"+H.d(r)+"."+H.d(q)}}
P.as.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.at.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.x.prototype={}
P.R.prototype={
h:function(a){return"Throw of null."}}
P.v.prototype={
gG:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gF:function(){return""},
h:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gG()+t+s
if(!this.a)return r
q=this.gF()
p=P.ck(this.b)
return r+q+": "+p}}
P.a2.prototype={
gG:function(){return"RangeError"},
gF:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.d(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.d(u)
else if(s>u)t=": Not in range "+H.d(u)+".."+H.d(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.d(u)}return t}}
P.aw.prototype={
gG:function(){return"RangeError"},
gF:function(){var u,t
u=this.b
if(typeof u!=="number")return u.a1()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.d(t)},
gl:function(a){return this.f}}
P.b1.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.b_.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.aO.prototype={
h:function(a){return"Bad state: "+this.a}}
P.an.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ck(u)+"."}}
P.aD.prototype={
h:function(a){return"Out of Memory"},
$ix:1}
P.a4.prototype={
h:function(a){return"Stack Overflow"},
$ix:1}
P.ap.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.bb.prototype={
h:function(a){return"Exception: "+this.a}}
P.ad.prototype={}
P.aB.prototype={}
P.m.prototype={
h:function(a){return"null"}}
P.W.prototype={}
P.h.prototype={constructor:P.h,$ih:1,
h:function(a){return"Instance of '"+H.a1(this)+"'"},
toString:function(){return this.h(this)}}
P.n.prototype={}
P.a5.prototype={}
P.a6.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.c.prototype={}
W.ah.prototype={
h:function(a){return String(a)}}
W.ai.prototype={
h:function(a){return String(a)}}
W.aq.prototype={
h:function(a){return String(a)}}
W.a.prototype={
h:function(a){return a.localName}}
W.b.prototype={$ib:1}
W.y.prototype={
a5:function(a,b,c,d){return a.addEventListener(b,H.ac(c,1),!1)}}
W.au.prototype={
gl:function(a){return a.length}}
W.C.prototype={$iC:1}
W.H.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.a2(a):u}}
W.aN.prototype={
gl:function(a){return a.length}}
W.t.prototype={}
W.b9.prototype={
ac:function(){var u,t
u=this.d
t=u!=null
if(t&&this.a<=0)if(t)J.cT(this.b,this.c,u,!1)}}
W.ba.prototype={
$1:function(a){return this.a.$1(a)}}
M.j.prototype={
j:function(a,b){if(typeof b!=="number")return b.j()
return new M.j(b*this.a,b*this.b,b*this.c)},
p:function(a,b){return new M.j(this.a-b.a,this.b-b.b,this.c-b.c)},
i:function(a,b){return new M.j(this.a+b.a,this.b+b.b,this.c+b.c)},
m:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
V:function(){var u,t,s
u=this.a
t=this.b
s=this.c
return Math.sqrt(u*u+t*t+s*s)},
n:function(){var u=this.V()
return this.j(0,u===0?1/0:1/u)},
T:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new M.j(u*t-s*r,s*q-p*t,p*r-u*q)}}
M.k.prototype={
C:function(a,b){if(typeof b!=="number")return b.j()
return new M.k(b*this.a,b*this.b,b*this.c)},
i:function(a,b){return new M.k(this.a+b.a,this.b+b.b,this.c+b.c)},
j:function(a,b){return new M.k(this.a*b.a,this.b*b.b,this.c*b.c)},
ay:function(){var u=new M.am()
return new M.ar(J.bQ(J.bO(u.$1(this.a),255)),J.bQ(J.bO(u.$1(this.b),255)),J.bQ(J.bO(u.$1(this.c),255)))}}
M.am.prototype={
$1:function(a){return a>1?1:a}}
M.ar.prototype={}
M.al.prototype={}
M.S.prototype={}
M.Z.prototype={}
M.G.prototype={}
M.aM.prototype={}
M.a3.prototype={
W:function(a){return a.p(0,this.c).n()},
U:function(a){var u,t,s,r
u=this.c.p(0,a.a)
t=u.m(a.b)
if(t>=0){s=this.b-(u.m(u)-t*t)
r=s>=0?t-Math.sqrt(s):0}else r=0
if(r===0)return
else return new M.Z(this,a,r)},
gu:function(){return this.d}}
M.aF.prototype={
U:function(a){var u,t
u=this.a
t=u.m(a.b)
if(t>0)return
else return new M.Z(this,a,(u.m(a.a)+this.b)/-t)},
W:function(a){return this.a},
gu:function(){return this.c}}
M.aR.prototype={
$1:function(a){return $.bN()},
$S:1}
M.aS.prototype={
$1:function(a){return $.c9()},
$S:1}
M.aT.prototype={
$1:function(a){return 0.7},
$S:4}
M.aU.prototype={
$1:function(a){if(C.b.M(C.c.A(a.c)+C.c.A(a.a),2)!==0)return $.bN()
else return $.bL()}}
M.aV.prototype={
$1:function(a){return $.bN()},
$S:1}
M.aW.prototype={
$1:function(a){if(C.b.M(C.c.A(a.c)+C.c.A(a.a),2)!==0)return 0.1
else return 0.7},
$S:4}
M.ao.prototype={}
M.aG.prototype={
P:function(a,b){var u,t,s,r,q
for(u=b.a,t=1/0,s=null,r=0;r<3;++r){q=u[r].U(a)
if(q!=null&&q.c<t){t=q.c
s=q}}return s},
ab:function(a,b){var u=this.P(a,b)
if(u!=null)return u.c
else return},
S:function(a,b,c){var u,t,s,r,q,p,o
u=this.P(a,b)
if(u==null)return $.c8()
else{t=u.b
s=t.b
r=s.j(0,u.c).i(0,t.a)
t=u.a
q=t.W(r)
p=s.p(0,q.j(0,q.m(s)).j(0,2))
o=$.c8().i(0,this.a7(t,r,q,p,b))
return o.i(0,c>=this.a?$.c9():this.S(new M.S(r,p),b,c+1).C(0,t.gu().c.$1(r)))}},
a7:function(a,b,c,d,e){return C.t.al(e.b,$.bM(),new M.aH(this,b,e,c,d,a))},
ap:function(a,b,c,d){var u,t,s,r,q,p,o,n
u=new M.aK(c,d)
for(t=a.c,s=t.a,r=0;r<d;r=q)for(q=r+1,p=0;p<c;p=n){o=this.S(new M.S(s,u.$3(p,r,t)),a,0).ay()
b.fillStyle="rgb("+o.a+", "+o.b+", "+o.c+")"
n=p+1
b.fillRect(p,r,n,q)}}}
M.aH.prototype={
$2:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.b
t=b.a.p(0,u)
s=t.n()
r=this.a.ab(new M.S(u,s),this.c)
if(r==null?!1:r<=t.V())return a
else{q=s.m(this.d)
p=q>0?b.b.C(0,q):$.bM()
o=s.m(this.e.n())
n=o>0?b.b.C(0,Math.pow(o,this.f.gu().d)):$.bM()
m=this.f
return J.cd(J.cd(a,m.gu().a.$1(u).j(0,p)),m.gu().b.$1(u).j(0,n))}}}
M.aK.prototype={
$3:function(a,b,c){return c.b.i(0,c.c.j(0,new M.aI(this.a).$1(a))).i(0,c.d.j(0,new M.aJ(this.b).$1(b))).n()}}
M.aI.prototype={
$1:function(a){var u=this.a
return(a-u/2)/2/u},
$S:0}
M.aJ.prototype={
$1:function(a){var u=this.a
return-(a-u/2)/2/u},
$S:0}
M.bG.prototype={
$1:function(a){return this.a_(a)},
a_:function(a){var u=0,t=P.dm(P.m),s,r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$$1=P.dt(function(b,c){if(b===1)return P.dg(c,t)
while(true)switch(u){case 0:q=r.b
q.textContent="Rendering..."
p=r.c.getContext("2d")
o=r.d
n=r.e
p.clearRect(0,0,o,n)
u=3
return P.df(P.d_(P.cY(100,0),null),$async$$1)
case 3:m=window.performance.now()
l=$.cH()
k=$.cI()
j=new M.j(3,2,4)
i=new M.al(j)
j=new M.j(-1,0.5,0).p(0,j).n()
i.b=j
h=j.T(new M.j(0,-1,0)).n().j(0,1.5)
i.c=h
i.d=j.T(h).n().j(0,1.5)
new M.aG().ap(new M.aM([new M.aF(new M.j(0,1,0),0,l),new M.a3(1,new M.j(0,1,-0.25),k),new M.a3(0.25,new M.j(-1,0.5,1.5),k)],[new M.G(new M.j(-2,2.5,0),new M.k(0.49,0.07,0.07)),new M.G(new M.j(1.5,2.5,1.5),new M.k(0.07,0.07,0.49)),new M.G(new M.j(1.5,2.5,-1.5),new M.k(0.07,0.49,0.071)),new M.G(new M.j(0,3.5,0),new M.k(0.21,0.21,0.35))],i),p,o,n)
n=window.performance.now()
if(typeof n!=="number"){s=n.p()
u=1
break}if(typeof m!=="number"){s=H.cB(m)
u=1
break}g=n-m
q.textContent="Rendered in "+C.c.Y(g)+" ms."
q=r.f
q.push(g)
H.dN(H.d(q))
if(++r.a.a<r.r)r.x.click()
case 1:return P.dh(s,t)}})
return P.di($async$$1,t)}};(function aliases(){var u=J.i.prototype
u.a2=u.h
u=J.a0.prototype
u.a3=u.h})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff
u(P,"dv","d9",2)
u(P,"dw","da",2)
u(P,"dx","db",2)
t(P,"cx","ds",11)
s(P.a8.prototype,"gai",0,1,null,["$2","$1"],["t","aj"],7,0)
s(P.aa.prototype,"gag",1,0,null,["$1","$0"],["q","ah"],8,0)})();(function inheritance(){var u=hunkHelpers.inherit,t=hunkHelpers.inheritMany
u(P.h,null)
t(P.h,[H.bU,J.i,J.aj,H.aY,P.x,H.Q,H.Y,H.a9,P.br,P.b2,P.l,P.a8,P.bc,P.o,P.a7,P.aQ,P.bq,P.E,P.bt,P.ab,P.W,P.w,P.aD,P.a4,P.bb,P.aB,P.m,P.n,P.a5,P.a6,M.j,M.k,M.ar,M.al,M.S,M.Z,M.G,M.aM,M.a3,M.aF,M.ao,M.aG])
t(J.i,[J.ax,J.az,J.a0,J.z,J.A,J.B,W.y,W.aq,W.b])
t(J.a0,[J.aE,J.D,J.F])
u(J.bT,J.z)
t(J.A,[J.a_,J.ay])
t(P.x,[H.aC,H.aA,H.b0,H.aL,P.R,P.v,P.b1,P.b_,P.aO,P.an,P.ap])
t(H.Y,[H.bK,H.aX,H.bC,H.bD,H.bE,P.b6,P.b5,P.b7,P.b8,P.bs,P.b4,P.b3,P.bu,P.bv,P.bz,P.av,P.bd,P.bh,P.be,P.bf,P.bg,P.bk,P.bl,P.bj,P.bi,P.bx,P.bo,P.bn,P.bp,P.as,P.at,W.ba,M.am,M.aR,M.aS,M.aT,M.aU,M.aV,M.aW,M.aH,M.aK,M.aI,M.aJ,M.bG])
t(H.aX,[H.aP,H.X])
u(P.aa,P.a8)
u(P.bm,P.bt)
t(P.W,[P.M,P.ad])
t(P.v,[P.a2,P.aw])
u(W.H,W.y)
u(W.a,W.H)
u(W.c,W.a)
t(W.c,[W.ah,W.ai,W.au,W.aN])
u(W.t,W.b)
u(W.C,W.t)
u(W.b9,P.aQ)})();(function constants(){C.r=J.i.prototype
C.t=J.z.prototype
C.b=J.a_.prototype
C.c=J.A.prototype
C.h=J.B.prototype
C.u=J.F.prototype
C.i=J.aE.prototype
C.d=J.D.prototype
C.e=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.j=function() {
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
C.o=function(getTagFallback) {
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
C.k=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.l=function(hooks) {
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
C.n=function(hooks) {
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
C.m=function(hooks) {
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
C.f=function(hooks) { return hooks; }

C.p=new P.aD()
C.a=new P.bm()
C.q=new P.w(0)})();(function staticFields(){$.q=0
$.P=null
$.cf=null
$.cA=null
$.cv=null
$.cE=null
$.bA=null
$.bF=null
$.c5=null
$.J=null
$.U=null
$.V=null
$.c_=!1
$.f=C.a})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"dV","cG",function(){return H.cz("_$dart_dartClosure")})
u($,"dX","ca",function(){return H.cz("_$dart_js")})
u($,"e1","cJ",function(){return H.r(H.aZ({
toString:function(){return"$receiver$"}}))})
u($,"e2","cK",function(){return H.r(H.aZ({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"e3","cL",function(){return H.r(H.aZ(null))})
u($,"e4","cM",function(){return H.r(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"e7","cP",function(){return H.r(H.aZ(void 0))})
u($,"e8","cQ",function(){return H.r(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"e6","cO",function(){return H.r(H.cn(null))})
u($,"e5","cN",function(){return H.r(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"ea","cS",function(){return H.r(H.cn(void 0))})
u($,"e9","cR",function(){return H.r(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"eb","cb",function(){return P.d8()})
u($,"ec","cc",function(){return[]})
u($,"dU","bN",function(){return M.bS(1,1,1)})
u($,"dT","c9",function(){return M.bS(0.5,0.5,0.5)})
u($,"dR","bL",function(){return M.bS(0,0,0)})
u($,"dQ","c8",function(){return $.bL()})
u($,"dS","bM",function(){return $.bL()})
u($,"e0","cI",function(){return M.cj(new M.aR(),new M.aS(),new M.aT(),250)})
u($,"e_","cH",function(){return M.cj(new M.aU(),new M.aV(),new M.aW(),150)})})()
var v={mangledGlobalNames:{ad:"int",M:"double",W:"num",a5:"String",ab:"bool",m:"Null",aB:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,args:[,]},{func:1,ret:M.k,args:[,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.m,args:[,]},{func:1,ret:P.M,args:[,]},{func:1,ret:-1,args:[,]},{func:1,ret:P.m,args:[,P.n]},{func:1,ret:-1,args:[P.h],opt:[P.n]},{func:1,ret:-1,opt:[P.h]},{func:1,ret:P.m,args:[,],opt:[P.n]},{func:1,ret:[P.o,,],args:[,]},{func:1,ret:-1}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.i,CanvasPattern:J.i,CanvasRenderingContext2D:J.i,DOMError:J.i,MediaError:J.i,NavigatorUserMediaError:J.i,OverconstrainedError:J.i,PositionError:J.i,SVGAnimatedLength:J.i,SVGAnimatedLengthList:J.i,SVGAnimatedNumber:J.i,SQLError:J.i,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLCanvasElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.ah,HTMLAreaElement:W.ai,DOMException:W.aq,SVGAElement:W.a,SVGAnimateElement:W.a,SVGAnimateMotionElement:W.a,SVGAnimateTransformElement:W.a,SVGAnimationElement:W.a,SVGCircleElement:W.a,SVGClipPathElement:W.a,SVGDefsElement:W.a,SVGDescElement:W.a,SVGDiscardElement:W.a,SVGEllipseElement:W.a,SVGFEBlendElement:W.a,SVGFEColorMatrixElement:W.a,SVGFEComponentTransferElement:W.a,SVGFECompositeElement:W.a,SVGFEConvolveMatrixElement:W.a,SVGFEDiffuseLightingElement:W.a,SVGFEDisplacementMapElement:W.a,SVGFEDistantLightElement:W.a,SVGFEFloodElement:W.a,SVGFEFuncAElement:W.a,SVGFEFuncBElement:W.a,SVGFEFuncGElement:W.a,SVGFEFuncRElement:W.a,SVGFEGaussianBlurElement:W.a,SVGFEImageElement:W.a,SVGFEMergeElement:W.a,SVGFEMergeNodeElement:W.a,SVGFEMorphologyElement:W.a,SVGFEOffsetElement:W.a,SVGFEPointLightElement:W.a,SVGFESpecularLightingElement:W.a,SVGFESpotLightElement:W.a,SVGFETileElement:W.a,SVGFETurbulenceElement:W.a,SVGFilterElement:W.a,SVGForeignObjectElement:W.a,SVGGElement:W.a,SVGGeometryElement:W.a,SVGGraphicsElement:W.a,SVGImageElement:W.a,SVGLineElement:W.a,SVGLinearGradientElement:W.a,SVGMarkerElement:W.a,SVGMaskElement:W.a,SVGMetadataElement:W.a,SVGPathElement:W.a,SVGPatternElement:W.a,SVGPolygonElement:W.a,SVGPolylineElement:W.a,SVGRadialGradientElement:W.a,SVGRectElement:W.a,SVGScriptElement:W.a,SVGSetElement:W.a,SVGStopElement:W.a,SVGStyleElement:W.a,SVGElement:W.a,SVGSVGElement:W.a,SVGSwitchElement:W.a,SVGSymbolElement:W.a,SVGTSpanElement:W.a,SVGTextContentElement:W.a,SVGTextElement:W.a,SVGTextPathElement:W.a,SVGTextPositioningElement:W.a,SVGTitleElement:W.a,SVGUseElement:W.a,SVGViewElement:W.a,SVGGradientElement:W.a,SVGComponentTransferFunctionElement:W.a,SVGFEDropShadowElement:W.a,SVGMPathElement:W.a,Element:W.a,AbortPaymentEvent:W.b,AnimationEvent:W.b,AnimationPlaybackEvent:W.b,ApplicationCacheErrorEvent:W.b,BackgroundFetchClickEvent:W.b,BackgroundFetchEvent:W.b,BackgroundFetchFailEvent:W.b,BackgroundFetchedEvent:W.b,BeforeInstallPromptEvent:W.b,BeforeUnloadEvent:W.b,BlobEvent:W.b,CanMakePaymentEvent:W.b,ClipboardEvent:W.b,CloseEvent:W.b,CustomEvent:W.b,DeviceMotionEvent:W.b,DeviceOrientationEvent:W.b,ErrorEvent:W.b,ExtendableEvent:W.b,ExtendableMessageEvent:W.b,FetchEvent:W.b,FontFaceSetLoadEvent:W.b,ForeignFetchEvent:W.b,GamepadEvent:W.b,HashChangeEvent:W.b,InstallEvent:W.b,MediaEncryptedEvent:W.b,MediaKeyMessageEvent:W.b,MediaQueryListEvent:W.b,MediaStreamEvent:W.b,MediaStreamTrackEvent:W.b,MessageEvent:W.b,MIDIConnectionEvent:W.b,MIDIMessageEvent:W.b,MutationEvent:W.b,NotificationEvent:W.b,PageTransitionEvent:W.b,PaymentRequestEvent:W.b,PaymentRequestUpdateEvent:W.b,PopStateEvent:W.b,PresentationConnectionAvailableEvent:W.b,PresentationConnectionCloseEvent:W.b,ProgressEvent:W.b,PromiseRejectionEvent:W.b,PushEvent:W.b,RTCDataChannelEvent:W.b,RTCDTMFToneChangeEvent:W.b,RTCPeerConnectionIceEvent:W.b,RTCTrackEvent:W.b,SecurityPolicyViolationEvent:W.b,SensorErrorEvent:W.b,SpeechRecognitionError:W.b,SpeechRecognitionEvent:W.b,SpeechSynthesisEvent:W.b,StorageEvent:W.b,SyncEvent:W.b,TrackEvent:W.b,TransitionEvent:W.b,WebKitTransitionEvent:W.b,VRDeviceEvent:W.b,VRDisplayEvent:W.b,VRSessionEvent:W.b,MojoInterfaceRequestEvent:W.b,ResourceProgressEvent:W.b,USBConnectionEvent:W.b,IDBVersionChangeEvent:W.b,AudioProcessingEvent:W.b,OfflineAudioCompletionEvent:W.b,WebGLContextEvent:W.b,Event:W.b,InputEvent:W.b,Performance:W.y,Window:W.y,DOMWindow:W.y,EventTarget:W.y,HTMLFormElement:W.au,MouseEvent:W.C,DragEvent:W.C,PointerEvent:W.C,WheelEvent:W.C,Document:W.H,HTMLDocument:W.H,Node:W.H,HTMLSelectElement:W.aN,CompositionEvent:W.t,FocusEvent:W.t,KeyboardEvent:W.t,TextEvent:W.t,TouchEvent:W.t,UIEvent:W.t})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Performance:true,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,HTMLDocument:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.cC,[])
else M.cC([])})})()
//# sourceMappingURL=raytracer.dart.js.map
