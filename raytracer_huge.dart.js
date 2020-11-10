(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=='function')o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.fA(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t)H.fB(b)
a[b]=s}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.cS"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.cS"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.cS(this,a,b,c,true,false,e).prototype
return t}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=='string')r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q+=x
var p=h[0]
r.$stubName=p
var o=tearOff(t,j||0,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var t=0;t<w.length;t++){if(w[t]==C)continue
if(w[t][a])return w[t][a]}}var C={},H={cE:function cE(){},
dg:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
en:function(){return new P.ae("No element")},
aI:function aI(a){this.a=a},
aB:function aB(){},
dU:function(a){var t,s=H.dT(a)
if(s!=null)return s
t="minified:"+a
return t},
e:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.ba(a)
return t},
aa:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
bC:function(a){return H.er(a)},
er:function(a){var t,s,r
if(a instanceof P.h)return H.v(H.at(a),null)
if(J.as(a)===C.t||u.o.b(a)){t=C.f(a)
if(H.da(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.da(r))return r}}return H.v(H.at(a),null)},
da:function(a){var t=a!=="Object"&&a!==""
return t},
w:function(a,b){if(a==null)J.d_(a)
throw H.d(H.dM(a,b))},
dM:function(a,b){var t,s="index"
if(!H.dD(b))return new P.F(!0,b,s,null)
t=J.d_(a)
if(b<0||b>=t)return new P.aC(t,!0,b,s,"Index out of range")
return P.eu(b,s)},
d:function(a){var t,s
if(a==null)a=new P.aN()
t=new Error()
t.dartException=a
s=H.fC
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
fC:function(){return J.ba(this.dartException)},
av:function(a){throw H.d(a)},
cV:function(a){throw H.d(P.bg(a))},
D:function(a){var t,s,r,q,p,o
a=H.fy(a.replace(String({}),'$receiver$'))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.bL(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
bM:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
dh:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
d9:function(a,b){return new H.aM(a,b==null?null:b.method)},
cF:function(a,b){var t=b==null,s=t?null:b.method
return new H.aH(a,s,t?null:b.receiver)},
a3:function(a){if(a==null)return new H.bA(a)
if(a instanceof H.a7)return H.L(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return H.L(a,a.dartException)
return H.fg(a)},
L:function(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
fg:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.c.ay(s,16)&8191)===10)switch(r){case 438:return H.L(a,H.cF(H.e(t)+" (Error "+r+")",f))
case 445:case 5007:return H.L(a,H.d9(H.e(t)+" (Error "+r+")",f))}}if(a instanceof TypeError){q=$.dZ()
p=$.e_()
o=$.e0()
n=$.e1()
m=$.e4()
l=$.e5()
k=$.e3()
$.e2()
j=$.e7()
i=$.e6()
h=q.n(t)
if(h!=null)return H.L(a,H.cF(t,h))
else{h=p.n(t)
if(h!=null){h.method="call"
return H.L(a,H.cF(t,h))}else{h=o.n(t)
if(h==null){h=n.n(t)
if(h==null){h=m.n(t)
if(h==null){h=l.n(t)
if(h==null){h=k.n(t)
if(h==null){h=n.n(t)
if(h==null){h=j.n(t)
if(h==null){h=i.n(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return H.L(a,H.d9(t,h))}}return H.L(a,new H.aX(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.ad()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return H.L(a,new P.F(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.ad()
return a},
V:function(a){var t
if(a instanceof H.a7)return a.b
if(a==null)return new H.ai(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.ai(a)},
fl:function(a,b){var t,s,r,q,p,o,n,m,l,k,j=a.length
for(t=0;t<j;){s=t+1
r=a[t]
t=s+1
q=a[s]
if(typeof r=="string"){p=b.b
if(p==null)p=b.b=b.S()
o=b.G(p,r)
if(o==null)b.K(p,r,b.H(r,q))
else o.b=q}else if(typeof r=="number"&&(r&0x3ffffff)===r){n=b.c
if(n==null)n=b.c=b.S()
o=b.G(n,r)
if(o==null)b.K(n,r,b.H(r,q))
else o.b=q}else{m=b.d
if(m==null)m=b.d=b.S()
l=J.cz(r)&0x3ffffff
k=b.a1(m,l)
if(k==null)b.K(m,l,[b.H(r,q)])
else{s=b.ac(k,r)
if(s>=0)k[s].b=q
else k.push(b.H(r,q))}}}return b},
fu:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(new P.bT("Unsupported number of arguments for wrapped closure"))},
ar:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.fu)
a.$identity=t
return t},
ej:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m=b[0],l=m.$callName,k=e?Object.create(new H.aR().constructor.prototype):Object.create(new H.W(null,null,null,"").constructor.prototype)
k.$initialize=k.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.B
if(typeof s!=="number")return s.i()
$.B=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}k.constructor=t
t.prototype=k
if(!e){r=H.d5(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}k.$S=H.ef(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.d5(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
ef:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.dP,a)
if(typeof a=="string"){if(b)throw H.d("Cannot compute signature for static tearoff.")
t=c?H.ed:H.ec
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.d("Error in functionType of tearoff")},
eg:function(a,b,c,d){var t=H.d4
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
d5:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.ei(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.eg(s,!q,t,b)
if(s===0){q=$.B
if(typeof q!=="number")return q.i()
$.B=q+1
o="self"+q
return new Function("return function(){var "+o+" = this."+H.cB()+";return "+o+"."+H.e(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.B
if(typeof q!=="number")return q.i()
$.B=q+1
n+=q
return new Function("return function("+n+"){return this."+H.cB()+"."+H.e(t)+"("+n+");}")()},
eh:function(a,b,c,d){var t=H.d4,s=H.ee
switch(b?-1:a){case 0:throw H.d(new H.aP("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
ei:function(a,b){var t,s,r,q,p,o,n=H.cB(),m=$.d2
if(m==null)m=$.d2=H.d1("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.eh(s,!q,t,b)
if(s===1){q="return function(){return this."+n+"."+H.e(t)+"(this."+m+");"
p=$.B
if(typeof p!=="number")return p.i()
$.B=p+1
return new Function(q+p+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
q="return function("+o+"){return this."+n+"."+H.e(t)+"(this."+m+", "+o+");"
p=$.B
if(typeof p!=="number")return p.i()
$.B=p+1
return new Function(q+p+"}")()},
cS:function(a,b,c,d,e,f,g){return H.ej(a,b,c,d,!!e,!!f,g)},
ec:function(a,b){return H.b8(v.typeUniverse,H.at(a.a),b)},
ed:function(a,b){return H.b8(v.typeUniverse,H.at(a.c),b)},
d4:function(a){return a.a},
ee:function(a){return a.c},
cB:function(){var t=$.d3
return t==null?$.d3=H.d1("self"):t},
d1:function(a){var t,s,r,q=new H.W("self","target","receiver","name"),p=J.eo(Object.getOwnPropertyNames(q))
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw H.d(P.d0("Field name "+a+" not found."))},
fA:function(a){throw H.d(new P.aA(a))},
fq:function(a){return v.getIsolateTag(a)},
fB:function(a){return H.av(new H.aI(a))},
fw:function(a){var t,s,r,q,p,o=$.dO.$1(a),n=$.cj[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.co[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=$.dK.$2(a,o)
if(r!=null){n=$.cj[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.co[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.cv(t)
$.cj[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.co[o]=t
return t}if(q==="-"){p=H.cv(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.dR(a,t)
if(q==="*")throw H.d(P.di(o))
if(v.leafTags[o]===true){p=H.cv(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.dR(a,t)},
dR:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cU(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
cv:function(a){return J.cU(a,!1,null,!!a.$ifN)},
fx:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.cv(t)
else return J.cU(t,c,null,null)},
fs:function(){if(!0===$.cT)return
$.cT=!0
H.ft()},
ft:function(){var t,s,r,q,p,o,n,m
$.cj=Object.create(null)
$.co=Object.create(null)
H.fr()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dS.$1(p)
if(o!=null){n=H.fx(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
fr:function(){var t,s,r,q,p,o,n=C.l()
n=H.a2(C.m,H.a2(C.n,H.a2(C.h,H.a2(C.h,H.a2(C.o,H.a2(C.p,H.a2(C.q(C.f),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.dO=new H.cl(q)
$.dK=new H.cm(p)
$.dS=new H.cn(o)},
a2:function(a,b){return a(b)||b},
fy:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bL:function bL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aM:function aM(a,b){this.a=a
this.b=b},
aH:function aH(a,b,c){this.a=a
this.b=b
this.c=c},
aX:function aX(a){this.a=a},
bA:function bA(a){this.a=a},
a7:function a7(a,b){this.a=a
this.b=b},
ai:function ai(a){this.a=a
this.b=null},
N:function N(){},
aU:function aU(){},
aR:function aR(){},
W:function W(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aP:function aP(a){this.a=a},
aG:function aG(){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0},
by:function by(a,b){this.a=a
this.b=b
this.c=null},
a9:function a9(a){this.a=a},
aJ:function aJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cl:function cl(a){this.a=a},
cm:function cm(a){this.a=a},
cn:function cn(a){this.a=a},
dc:function(a,b){var t=b.c
return t==null?b.c=H.cJ(a,b.z,!0):t},
db:function(a,b){var t=b.c
return t==null?b.c=H.al(a,"O",[b.z]):t},
dd:function(a){var t=a.y
if(t===6||t===7||t===8)return H.dd(a.z)
return t===11||t===12},
ev:function(a){return a.cy},
fm:function(a){return H.cK(v.typeUniverse,a,!1)},
K:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.K(a,t,c,a0)
if(s===t)return b
return H.dt(a,s,!0)
case 7:t=b.z
s=H.K(a,t,c,a0)
if(s===t)return b
return H.cJ(a,s,!0)
case 8:t=b.z
s=H.K(a,t,c,a0)
if(s===t)return b
return H.ds(a,s,!0)
case 9:r=b.Q
q=H.aq(a,r,c,a0)
if(q===r)return b
return H.al(a,b.z,q)
case 10:p=b.z
o=H.K(a,p,c,a0)
n=b.Q
m=H.aq(a,n,c,a0)
if(o===p&&m===n)return b
return H.cH(a,o,m)
case 11:l=b.z
k=H.K(a,l,c,a0)
j=b.Q
i=H.fd(a,j,c,a0)
if(k===l&&i===j)return b
return H.dr(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.aq(a,h,c,a0)
p=b.z
o=H.K(a,p,c,a0)
if(g===h&&o===p)return b
return H.cI(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.d(P.bd("Attempted to substitute unexpected RTI kind "+d))}},
aq:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.K(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
fe:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.K(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
fd:function(a,b,c,d){var t,s=b.a,r=H.aq(a,s,c,d),q=b.b,p=H.aq(a,q,c,d),o=b.c,n=H.fe(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.b4()
t.a=r
t.b=p
t.c=n
return t},
hi:function(a,b){a[v.arrayRti]=b
return a},
fk:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.dP(t)
return a.$S()}return null},
dQ:function(a,b){var t
if(H.dd(b))if(a instanceof H.N){t=H.fk(a)
if(t!=null)return t}return H.at(a)},
at:function(a){var t
if(a instanceof P.h){t=a.$ti
return t!=null?t:H.cN(a)}if(Array.isArray(a))return H.eQ(a)
return H.cN(J.as(a))},
eQ:function(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
cM:function(a){var t=a.$ti
return t!=null?t:H.cN(a)},
cN:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.f_(a,t)},
f_:function(a,b){var t=a instanceof H.N?a.__proto__.__proto__.constructor:b,s=H.eP(v.typeUniverse,t.name)
b.$ccache=s
return s},
dP:function(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=H.cK(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
eZ:function(a){var t,s,r,q=this
if(q===u.K)return H.an(q,a,H.f2)
if(!H.E(q))if(!(q===u._))t=!1
else t=!0
else t=!0
if(t)return H.an(q,a,H.f5)
t=q.y
s=t===6?q.z:q
if(s===u.S)r=H.dD
else if(s===u.i||s===u.H)r=H.f1
else if(s===u.N)r=H.f3
else r=s===u.y?H.dB:null
if(r!=null)return H.an(q,a,r)
if(s.y===9){t=s.z
if(s.Q.every(H.fv)){q.r="$i"+t
return H.an(q,a,H.f4)}}else if(t===7)return H.an(q,a,H.eX)
return H.an(q,a,H.eV)},
an:function(a,b,c){a.b=c
return a.b(b)},
eY:function(a){var t,s=this,r=H.eU
if(!H.E(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=H.eS
else if(s===u.K)r=H.eR
else{t=H.au(s)
if(t)r=H.eW}s.a=r
return s.a(a)},
cQ:function(a){var t,s=a.y
if(!H.E(a))if(!(a===u._))if(!(a===u.A))if(s!==7)t=s===8&&H.cQ(a.z)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
return t},
eV:function(a){var t=this
if(a==null)return H.cQ(t)
return H.j(v.typeUniverse,H.dQ(a,t),null,t,null)},
eX:function(a){if(a==null)return!0
return this.z.b(a)},
f4:function(a){var t,s=this
if(a==null)return H.cQ(s)
t=s.r
if(a instanceof P.h)return!!a[t]
return!!J.as(a)[t]},
eU:function(a){var t,s=this
if(a==null){t=H.au(s)
if(t)return a}else if(s.b(a))return a
H.dz(a,s)},
eW:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.dz(a,t)},
dz:function(a,b){throw H.d(H.eF(H.dj(a,H.dQ(a,b),H.v(b,null))))},
dj:function(a,b,c){var t=P.bu(a),s=H.v(b==null?H.at(a):b,null)
return t+": type '"+s+"' is not a subtype of type '"+c+"'"},
eF:function(a){return new H.ak("TypeError: "+a)},
p:function(a,b){return new H.ak("TypeError: "+H.dj(a,null,b))},
f2:function(a){return a!=null},
eR:function(a){if(a!=null)return a
throw H.d(H.p(a,"Object"))},
f5:function(a){return!0},
eS:function(a){return a},
dB:function(a){return!0===a||!1===a},
h3:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.d(H.p(a,"bool"))},
h5:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.p(a,"bool"))},
h4:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.p(a,"bool?"))},
h6:function(a){if(typeof a=="number")return a
throw H.d(H.p(a,"double"))},
h8:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.p(a,"double"))},
h7:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.p(a,"double?"))},
dD:function(a){return typeof a=="number"&&Math.floor(a)===a},
h9:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.d(H.p(a,"int"))},
hb:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.p(a,"int"))},
ha:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.p(a,"int?"))},
f1:function(a){return typeof a=="number"},
hc:function(a){if(typeof a=="number")return a
throw H.d(H.p(a,"num"))},
he:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.p(a,"num"))},
hd:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.p(a,"num?"))},
f3:function(a){return typeof a=="string"},
hf:function(a){if(typeof a=="string")return a
throw H.d(H.p(a,"String"))},
hh:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.p(a,"String"))},
hg:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.p(a,"String?"))},
fa:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+H.v(a[r],b)
return t},
dA:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=[]
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)a4.push("T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){n+=m
l=a4.length
k=l-1-q
if(k<0)return H.w(a4,k)
n=C.v.i(n,a4[k])
j=a5[q]
i=j.y
if(!(i===2||i===3||i===4||i===5||j===p))if(!(j===o))l=!1
else l=!0
else l=!0
if(!l)n+=" extends "+H.v(j,a4)}n+=">"}else{n=""
s=null}p=a3.z
h=a3.Q
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=H.v(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+H.v(g[q],a4)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+H.v(e[q],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=H.v(c[q+2],a4)+" "+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return n+"("+a0+") => "+a},
v:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.v(a.z,b)
return t}if(m===7){s=a.z
t=H.v(s,b)
r=s.y
return(r===11||r===12?"("+t+")":t)+"?"}if(m===8)return"FutureOr<"+H.v(a.z,b)+">"
if(m===9){q=H.ff(a.z)
p=a.Q
return p.length!==0?q+("<"+H.fa(p,b)+">"):q}if(m===11)return H.dA(a,b,null)
if(m===12)return H.dA(a.z,b,a.Q)
if(m===13){o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.w(b,o)
return b[o]}return"?"},
ff:function(a){var t,s=H.dT(a)
if(s!=null)return s
t="minified:"+a
return t},
du:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
eP:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.cK(a,b,!1)
else if(typeof n=="number"){t=n
s=H.am(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.al(a,b,r)
o[b]=p
return p}else return n},
eN:function(a,b){return H.dv(a.tR,b)},
eM:function(a,b){return H.dv(a.eT,b)},
cK:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.dq(H.dn(a,null,b,c))
s.set(b,t)
return t},
b8:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.dq(H.dn(a,b,c,!0))
r.set(c,s)
return s},
eO:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.cH(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
J:function(a,b){b.a=H.eY
b.b=H.eZ
return b},
am:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.z(null,null)
t.y=b
t.cy=c
s=H.J(a,t)
a.eC.set(c,s)
return s},
dt:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.eK(a,b,s,c)
a.eC.set(s,t)
return t},
eK:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.E(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.z(null,null)
r.y=6
r.z=b
r.cy=c
return H.J(a,r)},
cJ:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.eJ(a,b,s,c)
a.eC.set(s,t)
return t},
eJ:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.E(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.au(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.au(r.z))return r
else return H.dc(a,b)}}q=new H.z(null,null)
q.y=7
q.z=b
q.cy=c
return H.J(a,q)},
ds:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.eH(a,b,s,c)
a.eC.set(s,t)
return t},
eH:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.E(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.al(a,"O",[b])
else if(b===u.P||b===u.T)return u.O}r=new H.z(null,null)
r.y=8
r.z=b
r.cy=c
return H.J(a,r)},
eL:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.z(null,null)
t.y=13
t.z=b
t.cy=r
s=H.J(a,t)
a.eC.set(r,s)
return s},
b7:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
eG:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
al:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.b7(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.z(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.J(a,s)
a.eC.set(q,r)
return r},
cH:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.b7(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.z(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.J(a,p)
a.eC.set(r,o)
return o},
dr:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.b7(n)
if(k>0){t=m>0?",":""
s=H.b7(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.eG(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.z(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.J(a,p)
a.eC.set(r,s)
return s},
cI:function(a,b,c,d){var t,s=b.cy+("<"+H.b7(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.eI(a,b,c,s,d)
a.eC.set(s,t)
return t},
eI:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.K(a,b,s,0)
n=H.aq(a,c,s,0)
return H.cI(a,o,n,c!==n)}}m=new H.z(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.J(a,m)},
dn:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
dq:function(a){var t,s,r,q,p,o,n,m,l,k,j,i=a.r,h=a.s
for(t=i.length,s=0;s<t;){r=i.charCodeAt(s)
if(r>=48&&r<=57)s=H.eA(s+1,r,i,h)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.dp(a,s,i,h,!1)
else if(r===46)s=H.dp(a,s,i,h,!0)
else{++s
switch(r){case 44:break
case 58:h.push(!1)
break
case 33:h.push(!0)
break
case 59:h.push(H.I(a.u,a.e,h.pop()))
break
case 94:h.push(H.eL(a.u,h.pop()))
break
case 35:h.push(H.am(a.u,5,"#"))
break
case 64:h.push(H.am(a.u,2,"@"))
break
case 126:h.push(H.am(a.u,3,"~"))
break
case 60:h.push(a.p)
a.p=h.length
break
case 62:q=a.u
p=h.splice(a.p)
H.cG(a.u,a.e,p)
a.p=h.pop()
o=h.pop()
if(typeof o=="string")h.push(H.al(q,o,p))
else{n=H.I(q,a.e,o)
switch(n.y){case 11:h.push(H.cI(q,n,p,a.n))
break
default:h.push(H.cH(q,n,p))
break}}break
case 38:H.eB(a,h)
break
case 42:q=a.u
h.push(H.dt(q,H.I(q,a.e,h.pop()),a.n))
break
case 63:q=a.u
h.push(H.cJ(q,H.I(q,a.e,h.pop()),a.n))
break
case 47:q=a.u
h.push(H.ds(q,H.I(q,a.e,h.pop()),a.n))
break
case 40:h.push(a.p)
a.p=h.length
break
case 41:q=a.u
m=new H.b4()
l=q.sEA
k=q.sEA
o=h.pop()
if(typeof o=="number")switch(o){case-1:l=h.pop()
break
case-2:k=h.pop()
break
default:h.push(o)
break}else h.push(o)
p=h.splice(a.p)
H.cG(a.u,a.e,p)
a.p=h.pop()
m.a=p
m.b=l
m.c=k
h.push(H.dr(q,H.I(q,a.e,h.pop()),m))
break
case 91:h.push(a.p)
a.p=h.length
break
case 93:p=h.splice(a.p)
H.cG(a.u,a.e,p)
a.p=h.pop()
h.push(p)
h.push(-1)
break
case 123:h.push(a.p)
a.p=h.length
break
case 125:p=h.splice(a.p)
H.eD(a.u,a.e,p)
a.p=h.pop()
h.push(p)
h.push(-2)
break
default:throw"Bad character "+r}}}j=h.pop()
return H.I(a.u,a.e,j)},
eA:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
dp:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.du(t,p.z)[q]
if(o==null)H.av('No "'+q+'" in "'+H.ev(p)+'"')
d.push(H.b8(t,p,o))}else d.push(q)
return n},
eB:function(a,b){var t=b.pop()
if(0===t){b.push(H.am(a.u,1,"0&"))
return}if(1===t){b.push(H.am(a.u,4,"1&"))
return}throw H.d(P.bd("Unexpected extended operation "+H.e(t)))},
I:function(a,b,c){if(typeof c=="string")return H.al(a,c,a.sEA)
else if(typeof c=="number")return H.eC(a,b,c)
else return c},
cG:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.I(a,b,c[t])},
eD:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.I(a,b,c[t])},
eC:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.d(P.bd("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.d(P.bd("Bad index "+c+" for "+b.h(0)))},
j:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!H.E(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(H.E(b))return!1
if(b.y!==1)t=!1
else t=!0
if(t)return!0
r=s===13
if(r)if(H.j(a,c[b.z],c,d,e))return!0
q=d.y
t=b===u.P||b===u.T
if(t){if(q===8)return H.j(a,b,c,d.z,e)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return H.j(a,b.z,c,d,e)
if(s===6)return H.j(a,b.z,c,d,e)
return s!==7}if(s===6)return H.j(a,b.z,c,d,e)
if(q===6){t=H.dc(a,d)
return H.j(a,b,c,t,e)}if(s===8){if(!H.j(a,b.z,c,d,e))return!1
return H.j(a,H.db(a,b),c,d,e)}if(s===7){t=H.j(a,u.P,c,d,e)
return t&&H.j(a,b.z,c,d,e)}if(q===8){if(H.j(a,b,c,d.z,e))return!0
return H.j(a,b,c,H.db(a,d),e)}if(q===7){t=H.j(a,b,c,u.P,e)
return t||H.j(a,b,c,d.z,e)}if(r)return!1
t=s!==11
if((!t||s===12)&&d===u.Z)return!0
if(q===12){if(b===u.g)return!0
if(s!==12)return!1
p=b.Q
o=d.Q
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(m=0;m<n;++m){l=p[m]
k=o[m]
if(!H.j(a,l,c,k,e)||!H.j(a,k,e,l,c))return!1}return H.dC(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return H.dC(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.f0(a,b,c,d,e)}return!1},
dC:function(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!H.j(a2,a3.z,a4,a5.z,a6))return!1
t=a3.Q
s=a5.Q
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!H.j(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.j(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.j(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!H.j(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
f0:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.j(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.du(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.j(a,H.b8(a,b,m[q]),c,s[q],e))return!1
return!0},
au:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.E(a))if(s!==7)if(!(s===6&&H.au(a.z)))t=s===8&&H.au(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
fv:function(a){var t
if(!H.E(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
E:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
dv:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
z:function z(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
b4:function b4(){this.c=this.b=this.a=null},
b2:function b2(){},
ak:function ak(a){this.a=a},
dT:function(a){return v.mangledGlobalNames[a]}},J={
cU:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dN:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.cT==null){H.fs()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.d(P.di("Return interceptor for "+H.e(t(a,p))))}r=a.constructor
q=r==null?null:r[J.d7()]
if(q!=null)return q
q=H.fw(a)
if(q!=null)return q
if(typeof a=="function")return C.w
t=Object.getPrototypeOf(a)
if(t==null)return C.k
if(t===Object.prototype)return C.k
if(typeof r=="function"){Object.defineProperty(r,J.d7(),{value:C.d,enumerable:false,writable:true,configurable:true})
return C.d}return C.d},
d7:function(){var t=$.dm
return t==null?$.dm=v.getIsolateTag("_$dart_js"):t},
eo:function(a){a.fixed$length=Array
return a},
as:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.a8.prototype
return J.aF.prototype}if(typeof a=="string")return J.Q.prototype
if(a==null)return J.Y.prototype
if(typeof a=="boolean")return J.bw.prototype
if(a.constructor==Array)return J.C.prototype
if(typeof a!="object"){if(typeof a=="function")return J.R.prototype
return a}if(a instanceof P.h)return a
return J.dN(a)},
fn:function(a){if(typeof a=="number")return J.P.prototype
if(typeof a=="string")return J.Q.prototype
if(a==null)return a
if(a.constructor==Array)return J.C.prototype
if(!(a instanceof P.h))return J.U.prototype
return a},
fo:function(a){if(typeof a=="string")return J.Q.prototype
if(a==null)return a
if(a.constructor==Array)return J.C.prototype
if(typeof a!="object"){if(typeof a=="function")return J.R.prototype
return a}if(a instanceof P.h)return a
return J.dN(a)},
fp:function(a){if(typeof a=="number")return J.P.prototype
if(a==null)return a
if(!(a instanceof P.h))return J.U.prototype
return a},
cZ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.fn(a).i(a,b)},
e8:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.as(a).B(a,b)},
e9:function(a){return J.fp(a).u(a)},
cz:function(a){return J.as(a).gk(a)},
d_:function(a){return J.fo(a).gl(a)},
ba:function(a){return J.as(a).h(a)},
r:function r(){},
bw:function bw(){},
Y:function Y(){},
G:function G(){},
aO:function aO(){},
U:function U(){},
R:function R(){},
C:function C(){},
bx:function bx(){},
aw:function aw(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
P:function P(){},
a8:function a8(){},
aF:function aF(){},
Q:function Q(){}},P={
ew:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.fh()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.ar(new P.bP(r),1)).observe(t,{childList:true})
return new P.bO(r,t,s)}else if(self.setImmediate!=null)return P.fi()
return P.fj()},
ex:function(a){self.scheduleImmediate(H.ar(new P.bQ(a),0))},
ey:function(a){self.setImmediate(H.ar(new P.bR(a),0))},
ez:function(a){P.eE(0,a)},
eE:function(a,b){var t=new P.cb()
t.ao(a,b)
return t},
dE:function(a){return new P.aZ(new P.m($.i,a.p("m<0>")),a.p("aZ<0>"))},
dy:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
cL:function(a,b){P.eT(a,b)},
dx:function(a,b){b.U(0,a)},
dw:function(a,b){b.a9(H.a3(a),H.V(a))},
eT:function(a,b){var t,s,r=new P.ce(b),q=new P.cf(b)
if(a instanceof P.m)a.a5(r,q,u.z)
else{t=u.z
if(u.c.b(a))a.W(r,q,t)
else{s=new P.m($.i,u.e)
s.a=4
s.c=a
s.a5(r,q,t)}}},
dI:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
return $.i.ag(new P.ci(t))},
dl:function(a,b){var t,s,r
b.a=1
try{a.W(new P.bY(b),new P.bZ(b),u.P)}catch(r){t=H.a3(r)
s=H.V(r)
P.fz(new P.c_(b,t,s))}},
bX:function(a,b){var t,s
for(;t=a.a,t===2;)a=a.c
if(t>=4){s=b.I()
b.a=a.a
b.c=a.c
P.a_(b,s)}else{s=b.c
b.a=2
b.c=a
a.a3(s)}},
a_:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f={},e=f.a=a
for(t=u.c;!0;){s={}
r=e.a===8
if(b==null){if(r){t=e.c
P.cg(g,g,e.b,t.a,t.b)}return}s.a=b
q=b.a
for(e=b;q!=null;e=q,q=p){e.a=null
P.a_(f.a,e)
s.a=q
p=q.a}o=f.a
n=o.c
s.b=r
s.c=n
m=!r
if(m){l=e.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=e.b.b
if(r){l=o.b===k
l=!(l||l)}else l=!1
if(l){P.cg(g,g,o.b,n.a,n.b)
return}j=$.i
if(j!==k)$.i=k
else j=g
e=e.c
if((e&15)===8)new P.c4(s,f,r).$0()
else if(m){if((e&1)!==0)new P.c3(s,n).$0()}else if((e&2)!==0)new P.c2(f,s).$0()
if(j!=null)$.i=j
e=s.c
if(t.b(e)){i=s.a.b
if(e.a>=4){h=i.c
i.c=null
b=i.J(h)
i.a=e.a
i.c=e.c
f.a=e
continue}else P.bX(e,i)
return}}i=s.a.b
h=i.c
i.c=null
b=i.J(h)
e=s.b
o=s.c
if(!e){i.a=4
i.c=o}else{i.a=8
i.c=o}f.a=i
e=i}},
f8:function(a,b){if(u.Q.b(a))return b.ag(a)
if(u.v.b(a))return a
throw H.d(P.ea(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
f7:function(){var t,s
for(t=$.a0;t!=null;t=$.a0){$.ap=null
s=t.b
$.a0=s
if(s==null)$.ao=null
t.a.$0()}},
fc:function(){$.cO=!0
try{P.f7()}finally{$.ap=null
$.cO=!1
if($.a0!=null)$.cY().$1(P.dL())}},
dH:function(a){var t=new P.b_(a),s=$.ao
if(s==null){$.a0=$.ao=t
if(!$.cO)$.cY().$1(P.dL())}else $.ao=s.b=t},
fb:function(a){var t,s,r,q=$.a0
if(q==null){P.dH(a)
$.ap=$.ao
return}t=new P.b_(a)
s=$.ap
if(s==null){t.b=q
$.a0=$.ap=t}else{r=s.b
t.b=r
$.ap=s.b=t
if(r==null)$.ao=t}},
fz:function(a){var t=null,s=$.i
if(C.b===s){P.a1(t,t,C.b,a)
return}P.a1(t,t,s,s.a8(a))},
fQ:function(a){P.cA(a,"stream")
return new P.b5()},
be:function(a,b){var t=b==null?P.eb(a):b
P.cA(a,"error")
return new P.ay(a,t)},
eb:function(a){var t
if(u.C.b(a)){t=a.gN()
if(t!=null)return t}return C.r},
cg:function(a,b,c,d,e){P.fb(new P.ch(d,e))},
dF:function(a,b,c,d){var t,s=$.i
if(s===c)return d.$0()
$.i=c
t=s
try{s=d.$0()
return s}finally{$.i=t}},
dG:function(a,b,c,d,e){var t,s=$.i
if(s===c)return d.$1(e)
$.i=c
t=s
try{s=d.$1(e)
return s}finally{$.i=t}},
f9:function(a,b,c,d,e,f){var t,s=$.i
if(s===c)return d.$2(e,f)
$.i=c
t=s
try{s=d.$2(e,f)
return s}finally{$.i=t}},
a1:function(a,b,c,d){var t=C.b!==c
if(t)d=!(!t||!1)?c.a8(d):c.aA(d,u.p)
P.dH(d)},
bP:function bP(a){this.a=a},
bO:function bO(a,b,c){this.a=a
this.b=b
this.c=c},
bQ:function bQ(a){this.a=a},
bR:function bR(a){this.a=a},
cb:function cb(){},
cc:function cc(a,b){this.a=a
this.b=b},
aZ:function aZ(a,b){this.a=a
this.b=!1
this.$ti=b},
ce:function ce(a){this.a=a},
cf:function cf(a){this.a=a},
ci:function ci(a){this.a=a},
b0:function b0(){},
aj:function aj(a,b){this.a=a
this.$ti=b},
ah:function ah(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d},
m:function m(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
bU:function bU(a,b){this.a=a
this.b=b},
c1:function c1(a,b){this.a=a
this.b=b},
bY:function bY(a){this.a=a},
bZ:function bZ(a){this.a=a},
c_:function c_(a,b,c){this.a=a
this.b=b
this.c=c},
bW:function bW(a,b){this.a=a
this.b=b},
c0:function c0(a,b){this.a=a
this.b=b},
bV:function bV(a,b,c){this.a=a
this.b=b
this.c=c},
c4:function c4(a,b,c){this.a=a
this.b=b
this.c=c},
c5:function c5(a){this.a=a},
c3:function c3(a,b){this.a=a
this.b=b},
c2:function c2(a,b){this.a=a
this.b=b},
b_:function b_(a){this.a=a
this.b=null},
aS:function aS(){},
b5:function b5(){},
ay:function ay(a,b){this.a=a
this.b=b},
cd:function cd(){},
ch:function ch(a,b){this.a=a
this.b=b},
c7:function c7(){},
c9:function c9(a,b,c){this.a=a
this.b=b
this.c=c},
c8:function c8(a,b){this.a=a
this.b=b},
ca:function ca(a,b,c){this.a=a
this.b=b
this.c=c},
ep:function(a){return H.fl(a,new H.aG())},
em:function(a,b,c){var t,s
if(P.cP(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
$.t.push(a)
try{P.f6(a,t)}finally{if(0>=$.t.length)return H.w($.t,-1)
$.t.pop()}s=P.df(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
el:function(a,b,c){var t,s
if(P.cP(a))return b+"..."+c
t=new P.aT(b)
$.t.push(a)
try{s=t
s.a=P.df(s.a,a,", ")}finally{if(0>=$.t.length)return H.w($.t,-1)
$.t.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
cP:function(a){var t,s
for(t=$.t.length,s=0;s<t;++s)if(a===$.t[s])return!0
return!1},
f6:function(a,b){var t,s,r,q,p,o,n,m=a.gE(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.m())return
t=H.e(m.gA())
b.push(t)
l+=t.length+2;++k}if(!m.m()){if(k<=5)return
if(0>=b.length)return H.w(b,-1)
s=b.pop()
if(0>=b.length)return H.w(b,-1)
r=b.pop()}else{q=m.gA();++k
if(!m.m()){if(k<=4){b.push(H.e(q))
return}s=H.e(q)
if(0>=b.length)return H.w(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gA();++k
for(;m.m();q=p,p=o){o=m.gA();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return H.w(b,-1)
l-=b.pop().length+2;--k}b.push("...")
return}}r=H.e(q)
s=H.e(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return H.w(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)b.push(n)
b.push(r)
b.push(s)},
d8:function(a){var t,s={}
if(P.cP(a))return"{...}"
t=new P.aT("")
try{$.t.push(a)
t.a+="{"
s.a=!0
a.aE(0,new P.bz(s,t))
t.a+="}"}finally{if(0>=$.t.length)return H.w($.t,-1)
$.t.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
aK:function aK(){},
bz:function bz(a,b){this.a=a
this.b=b},
aL:function aL(){},
ek:function(a){if(a instanceof H.N)return a.h(0)
return"Instance of '"+H.bC(a)+"'"},
eq:function(a,b){var t,s,r
if(a<0)H.av(P.d0("Length must be a non-negative integer: "+a))
t=new Array(a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
df:function(a,b,c){var t,s=new J.aw(b,b.length)
if(!s.m())return a
t=H.cM(s).c
if(c.length===0){do a+=H.e(t.a(s.d))
while(s.m())}else{a+=H.e(t.a(s.d))
for(;s.m();)a=a+c+H.e(t.a(s.d))}return a},
bu:function(a){if(typeof a=="number"||H.dB(a)||null==a)return J.ba(a)
if(typeof a=="string")return JSON.stringify(a)
return P.ek(a)},
bd:function(a){return new P.ax(a)},
d0:function(a){return new P.F(!1,null,null,a)},
ea:function(a,b,c){return new P.F(!0,a,b,c)},
cA:function(a,b){return a},
et:function(a){var t=null
return new P.ab(t,t,!1,t,t,a)},
eu:function(a,b){return new P.ab(null,null,!0,a,b,"Value not in range")},
af:function(a){return new P.aY(a)},
di:function(a){return new P.aW(a)},
de:function(a){return new P.ae(a)},
bg:function(a){return new P.az(a)},
f:function f(){},
ax:function ax(a){this.a=a},
aV:function aV(){},
aN:function aN(){},
F:function F(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ab:function ab(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aC:function aC(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aY:function aY(a){this.a=a},
aW:function aW(a){this.a=a},
ae:function ae(a){this.a=a},
az:function az(a){this.a=a},
ad:function ad(){},
aA:function aA(a){this.a=a},
bT:function bT(a){this.a=a},
aE:function aE(){},
l:function l(){},
h:function h(){},
b6:function b6(){},
aT:function aT(a){this.a=a},
es:function(){return C.i},
c6:function c6(){},
u:function u(a,b,c){this.a=a
this.b=b
this.$ti=c}},W={
dk:function(a,b,c,d){var t=W.dJ(new W.bS(c),u.B),s=t!=null
if(s&&!0)if(s)C.e.ap(a,b,t,!1)
return new W.b3(a,b,t,!1)},
dJ:function(a,b){var t=$.i
if(t===C.b)return a
return t.aB(a,b)},
c:function c(){},
bb:function bb(){},
bc:function bc(){},
M:function M(){},
a5:function a5(){},
bh:function bh(){},
bs:function bs(){},
b:function b(){},
a:function a(){},
a6:function a6(){},
bv:function bv(){},
S:function S(){},
x:function x(){},
y:function y(){},
bE:function bE(){},
A:function A(){},
ag:function ag(){},
bN:function bN(a){this.a=a},
cD:function cD(a,b){this.a=a
this.$ti=b},
b3:function b3(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
bS:function bS(a){this.a=a},
b1:function b1(){}},M={
cC:function(a,b,c){return new M.q(a,b,c)},
d6:function(a,b,c,d){return new M.br(a,b,c,d)},
k:function k(a,b,c){this.a=a
this.b=b
this.c=c},
q:function q(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(){},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
a4:function a4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ac:function ac(a,b){this.a=a
this.b=b},
aD:function aD(a,b,c){this.a=a
this.b=b
this.c=c},
H:function H(a,b){this.a=a
this.b=b},
bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},
aQ:function aQ(a,b,c){this.b=a
this.c=b
this.d=c},
bB:function bB(a,b,c){this.a=a
this.b=b
this.c=c},
bF:function bF(){},
bG:function bG(){},
bH:function bH(){},
bI:function bI(){},
bJ:function bJ(){},
bK:function bK(){},
br:function br(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},R={
b9:function(){var t=0,s=P.dE(u.z),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$b9=P.dI(function(a,b){if(a===1)return P.dw(b,s)
while(true)switch(t){case 0:d=window.innerWidth
d.toString
r=C.a.u(d*0.99)
d=window.innerHeight
d.toString
q=C.a.u(d*0.99)
d=document
p=d.createElement("canvas")
p.width=r
p.height=q
d.body.appendChild(p)
d=p.getContext("2d")
o=$.dX()
n=$.dY()
m=new M.k(3,2,4)
l=new M.k(-1,0.5,0).q(0,m).v()
k=l.aa(new M.k(0,-1,0)).v().j(0,1.5)
j=new M.bD([new M.bB(new M.k(0,1,0),0,o),new M.aQ(1,new M.k(0,1,-0.25),n),new M.aQ(0.25,new M.k(-1,0.5,1.5),n)],[new M.H(new M.k(-2,2.5,0),new M.q(0.49,0.07,0.07)),new M.H(new M.k(1.5,2.5,1.5),new M.q(0.07,0.07,0.49)),new M.H(new M.k(1.5,2.5,-1.5),new M.q(0.07,0.49,0.071)),new M.H(new M.k(0,3.5,0),new M.q(0.21,0.21,0.35))],new M.a4(m,l,k,l.aa(k).v().j(0,1.5)))
i=new R.bi(j,d,r,q)
d=new R.cs(j)
m=new R.cr(j)
n=new R.ct(j)
o=new R.cu(j)
W.dk(window,"keydown",new R.cp(d,m,n,o,i),!1)
h=C.c.T(r,2)
g=u.D
f=C.c.T(q,2)
e=P.ep([new P.u(h,0,g),d,new P.u(h,q,g),m,new P.u(0,f,g),n,new P.u(r,f,g),o])
W.dk(window,"click",new R.cq(e,i),!1)
t=2
return P.cL(i.w(),$async$b9)
case 2:return P.dx(null,s)}})
return P.dy($async$b9,s)},
bi:function bi(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=0},
bj:function bj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bm:function bm(a){this.a=a},
bn:function bn(a){this.a=a},
bo:function bo(a){this.a=a},
bl:function bl(a,b){this.a=a
this.b=b},
bq:function bq(a,b){this.a=a
this.b=b},
bp:function bp(){},
bk:function bk(){},
cs:function cs(a){this.a=a},
cr:function cr(a){this.a=a},
ct:function ct(a){this.a=a},
cu:function cu(a){this.a=a},
cp:function cp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cq:function cq(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,M,R]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.cE.prototype={}
J.r.prototype={
B:function(a,b){return a===b},
gk:function(a){return H.aa(a)},
h:function(a){return"Instance of '"+H.bC(a)+"'"}}
J.bw.prototype={
h:function(a){return String(a)},
gk:function(a){return a?519018:218159}}
J.Y.prototype={
B:function(a,b){return null==b},
h:function(a){return"null"},
gk:function(a){return 0},
$il:1}
J.G.prototype={
gk:function(a){return 0},
h:function(a){return String(a)}}
J.aO.prototype={}
J.U.prototype={}
J.R.prototype={
h:function(a){var t=a[$.dW()]
if(t==null)return this.am(a)
return"JavaScript function for "+J.ba(t)},
$iX:1}
J.C.prototype={
aC:function(a,b,c){var t,s,r=a.length
for(t=b,s=0;s<r;++s){t=c.$2(t,a[s])
if(a.length!==r)throw H.d(P.bg(a))}return t},
aD:function(a,b,c){return this.aC(a,b,c,u.z)},
ak:function(a,b){var t,s,r,q
if(!!a.immutable$list)H.av(P.af("shuffle"))
if(b==null)b=C.i
t=a.length
for(;t>1;){s=b.L(t);--t
r=a.length
if(t>=r)return H.w(a,t)
q=a[t]
if(s<0||s>=r)return H.w(a,s)
this.Y(a,t,a[s])
this.Y(a,s,q)}},
h:function(a){return P.el(a,"[","]")},
gk:function(a){return H.aa(a)},
gl:function(a){return a.length},
Y:function(a,b,c){if(!!a.immutable$list)H.av(P.af("indexed set"))
if(b>=a.length||b<0)throw H.d(H.dM(a,b))
a[b]=c},
i:function(a,b){var t,s,r=[]
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.cV)(a),++s)r.push(a[s])
for(t=b.gE(b);t.m();)r.push(t.gA())
return r}}
J.bx.prototype={}
J.aw.prototype={
m:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.d(H.cV(r))
t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0}}
J.P.prototype={
X:function(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw H.d(P.af(""+a+".toInt()"))},
u:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.d(P.af(""+a+".floor()"))},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gk:function(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
i:function(a,b){return a+b},
F:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
an:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.a4(a,b)},
T:function(a,b){return(a|0)===a?a/b|0:this.a4(a,b)},
a4:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.d(P.af("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
ay:function(a,b){var t
if(a>0)t=this.ax(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
ax:function(a,b){return b>31?0:a>>>b},
$in:1}
J.a8.prototype={$io:1}
J.aF.prototype={}
J.Q.prototype={
i:function(a,b){return a+b},
h:function(a){return a},
gk:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gl:function(a){return a.length},
$iZ:1}
H.aI.prototype={
h:function(a){var t="LateInitializationError: "+this.a
return t}}
H.aB.prototype={}
H.bL.prototype={
n:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
H.aM.prototype={
h:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.aH.prototype={
h:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+s.a
t=s.c
if(t==null)return r+q+"' ("+s.a+")"
return r+q+"' on '"+t+"' ("+s.a+")"}}
H.aX.prototype={
h:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.bA.prototype={
h:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.a7.prototype={}
H.ai.prototype={
h:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$iT:1}
H.N.prototype={
h:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.dU(s==null?"unknown":s)+"'"},
$iX:1,
gaR:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.aU.prototype={}
H.aR.prototype={
h:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.dU(t)+"'"}}
H.W.prototype={
B:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.W))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gk:function(a){var t,s=this.c
if(s==null)t=H.aa(this.a)
else t=typeof s!=="object"?J.cz(s):H.aa(s)
return(t^H.aa(this.b))>>>0},
h:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bC(t)+"'")}}
H.aP.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.aG.prototype={
gl:function(a){return this.a},
aj:function(a,b){var t,s,r,q,p=this,o=null
if(typeof b=="string"){t=p.b
if(t==null)return o
s=p.G(t,b)
r=s==null?o:s.b
return r}else if(typeof b=="number"&&(b&0x3ffffff)===b){q=p.c
if(q==null)return o
s=p.G(q,b)
r=s==null?o:s.b
return r}else return p.aG(b)},
aG:function(a){var t,s,r=this.d
if(r==null)return null
t=this.a1(r,J.cz(a)&0x3ffffff)
s=this.ac(t,a)
if(s<0)return null
return t[s].b},
aE:function(a,b){var t=this,s=t.e,r=t.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==t.r)throw H.d(P.bg(t))
s=s.c}},
H:function(a,b){var t=this,s=new H.by(a,b)
if(t.e==null)t.e=t.f=s
else t.f=t.f.c=s;++t.a
t.r=t.r+1&67108863
return s},
ac:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.e8(a[s].a,b))return s
return-1},
h:function(a){return P.d8(this)},
G:function(a,b){return a[b]},
a1:function(a,b){return a[b]},
K:function(a,b,c){a[b]=c},
at:function(a,b){delete a[b]},
S:function(){var t="<non-identifier-key>",s=Object.create(null)
this.K(s,t,s)
this.at(s,t)
return s}}
H.by.prototype={}
H.a9.prototype={
gl:function(a){return this.a.a},
gE:function(a){var t=this.a,s=new H.aJ(t,t.r)
s.c=t.e
return s}}
H.aJ.prototype={
gA:function(){return H.cM(this).c.a(this.d)},
m:function(){var t,s=this,r=s.a
if(s.b!==r.r)throw H.d(P.bg(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=t.a
s.c=t.c
return!0}}}
H.cl.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.cm.prototype={
$2:function(a,b){return this.a(a,b)},
$S:8}
H.cn.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.z.prototype={
p:function(a){return H.b8(v.typeUniverse,this,a)},
aT:function(a){return H.eO(v.typeUniverse,this,a)}}
H.b4.prototype={}
H.b2.prototype={
h:function(a){return this.a}}
H.ak.prototype={}
P.bP.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:4}
P.bO.prototype={
$1:function(a){var t,s
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:10}
P.bQ.prototype={
$0:function(){this.a.$0()},
$S:5}
P.bR.prototype={
$0:function(){this.a.$0()},
$S:5}
P.cb.prototype={
ao:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ar(new P.cc(this,b),0),a)
else throw H.d(P.af("`setTimeout()` not found."))}}
P.cc.prototype={
$0:function(){this.b.$0()},
$S:0}
P.aZ.prototype={
U:function(a,b){var t,s=this
if(b==null)b=s.$ti.c.a(b)
if(!s.b)s.a.aq(b)
else{t=s.a
if(s.$ti.p("O<1>").b(b))t.Z(b)
else t.a0(b)}},
a9:function(a,b){var t=this.a
if(this.b)t.D(a,b)
else t.ar(a,b)}}
P.ce.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:11}
P.cf.prototype={
$2:function(a,b){this.a.$2(1,new H.a7(a,b))},
$S:12}
P.ci.prototype={
$2:function(a,b){this.a(a,b)},
$S:13}
P.b0.prototype={
a9:function(a,b){var t
P.cA(a,"error")
t=this.a
if(t.a!==0)throw H.d(P.de("Future already completed"))
t.D(a,b)}}
P.aj.prototype={
U:function(a,b){var t=this.a
if(t.a!==0)throw H.d(P.de("Future already completed"))
t.a_(b)}}
P.ah.prototype={
aH:function(a){if((this.c&15)!==6)return!0
return this.b.b.V(this.d,a.a)},
aF:function(a){var t=this.e,s=a.a,r=this.b.b
if(u.Q.b(t))return r.aK(t,s,a.b)
else return r.V(t,s)}}
P.m.prototype={
W:function(a,b,c){var t,s=$.i
if(s!==C.b)b=b!=null?P.f8(b,s):b
t=new P.m(s,c.p("m<0>"))
this.O(new P.ah(t,b==null?1:3,a,b))
return t},
aQ:function(a,b){return this.W(a,null,b)},
a5:function(a,b,c){var t=new P.m($.i,c.p("m<0>"))
this.O(new P.ah(t,19,a,b))
return t},
O:function(a){var t,s=this,r=s.a
if(r<=1){a.a=s.c
s.c=a}else{if(r===2){r=s.c
t=r.a
if(t<4){r.O(a)
return}s.a=t
s.c=r.c}P.a1(null,null,s.b,new P.bU(s,a))}},
a3:function(a){var t,s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
t=n.a
if(t<=1){s=n.c
n.c=a
if(s!=null){r=a.a
for(q=a;r!=null;q=r,r=p)p=r.a
q.a=s}}else{if(t===2){t=n.c
o=t.a
if(o<4){t.a3(a)
return}n.a=o
n.c=t.c}m.a=n.J(a)
P.a1(null,null,n.b,new P.c1(m,n))}},
I:function(){var t=this.c
this.c=null
return this.J(t)},
J:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
a_:function(a){var t,s=this,r=s.$ti
if(r.p("O<1>").b(a))if(r.b(a))P.bX(a,s)
else P.dl(a,s)
else{t=s.I()
s.a=4
s.c=a
P.a_(s,t)}},
a0:function(a){var t=this,s=t.I()
t.a=4
t.c=a
P.a_(t,s)},
D:function(a,b){var t=this,s=t.I(),r=P.be(a,b)
t.a=8
t.c=r
P.a_(t,s)},
aq:function(a){if(this.$ti.p("O<1>").b(a)){this.Z(a)
return}this.as(a)},
as:function(a){this.a=1
P.a1(null,null,this.b,new P.bW(this,a))},
Z:function(a){var t=this
if(t.$ti.b(a)){if(a.a===8){t.a=1
P.a1(null,null,t.b,new P.c0(t,a))}else P.bX(a,t)
return}P.dl(a,t)},
ar:function(a,b){this.a=1
P.a1(null,null,this.b,new P.bV(this,a,b))},
$iO:1}
P.bU.prototype={
$0:function(){P.a_(this.a,this.b)},
$S:0}
P.c1.prototype={
$0:function(){P.a_(this.b,this.a.a)},
$S:0}
P.bY.prototype={
$1:function(a){var t=this.a
t.a=0
t.a_(a)},
$S:4}
P.bZ.prototype={
$2:function(a,b){this.a.D(a,b)},
$S:14}
P.c_.prototype={
$0:function(){this.a.D(this.b,this.c)},
$S:0}
P.bW.prototype={
$0:function(){this.a.a0(this.b)},
$S:0}
P.c0.prototype={
$0:function(){P.bX(this.b,this.a)},
$S:0}
P.bV.prototype={
$0:function(){this.a.D(this.b,this.c)},
$S:0}
P.c4.prototype={
$0:function(){var t,s,r,q,p,o,n=this,m=null
try{r=n.a.a
m=r.b.b.ah(r.d)}catch(q){t=H.a3(q)
s=H.V(q)
r=n.c&&n.b.a.c.a===t
p=n.a
if(r)p.c=n.b.a.c
else p.c=P.be(t,s)
p.b=!0
return}if(m instanceof P.m&&m.a>=4){if(m.a===8){r=n.a
r.c=m.c
r.b=!0}return}if(u.c.b(m)){o=n.b.a
r=n.a
r.c=m.aQ(new P.c5(o),u.z)
r.b=!1}},
$S:0}
P.c5.prototype={
$1:function(a){return this.a},
$S:15}
P.c3.prototype={
$0:function(){var t,s,r,q,p
try{r=this.a
q=r.a
r.c=q.b.b.V(q.d,this.b)}catch(p){t=H.a3(p)
s=H.V(p)
r=this.a
r.c=P.be(t,s)
r.b=!0}},
$S:0}
P.c2.prototype={
$0:function(){var t,s,r,q,p,o,n=this
try{t=n.a.a.c
q=n.b
if(q.a.aH(t)&&q.a.e!=null){q.c=q.a.aF(t)
q.b=!1}}catch(p){s=H.a3(p)
r=H.V(p)
q=n.a.a.c
o=n.b
if(q.a===s)o.c=q
else o.c=P.be(s,r)
o.b=!0}},
$S:0}
P.b_.prototype={}
P.aS.prototype={}
P.b5.prototype={}
P.ay.prototype={
h:function(a){return H.e(this.a)},
$if:1,
gN:function(){return this.b}}
P.cd.prototype={}
P.ch.prototype={
$0:function(){var t=H.d(this.a)
t.stack=this.b.h(0)
throw t},
$S:0}
P.c7.prototype={
aM:function(a){var t,s,r,q=null
try{if(C.b===$.i){a.$0()
return}P.dF(q,q,this,a)}catch(r){t=H.a3(r)
s=H.V(r)
P.cg(q,q,this,t,s)}},
aO:function(a,b){var t,s,r,q=null
try{if(C.b===$.i){a.$1(b)
return}P.dG(q,q,this,a,b)}catch(r){t=H.a3(r)
s=H.V(r)
P.cg(q,q,this,t,s)}},
aP:function(a,b){return this.aO(a,b,u.z)},
aA:function(a,b){return new P.c9(this,a,b)},
a8:function(a){return new P.c8(this,a)},
aB:function(a,b){return new P.ca(this,a,b)},
aJ:function(a){if($.i===C.b)return a.$0()
return P.dF(null,null,this,a)},
ah:function(a){return this.aJ(a,u.z)},
aN:function(a,b){if($.i===C.b)return a.$1(b)
return P.dG(null,null,this,a,b)},
V:function(a,b){return this.aN(a,b,u.z,u.z)},
aL:function(a,b,c){if($.i===C.b)return a.$2(b,c)
return P.f9(null,null,this,a,b,c)},
aK:function(a,b,c){return this.aL(a,b,c,u.z,u.z,u.z)},
aI:function(a){return a},
ag:function(a){return this.aI(a,u.z,u.z,u.z)}}
P.c9.prototype={
$0:function(){return this.a.ah(this.b)},
$S:function(){return this.c.p("0()")}}
P.c8.prototype={
$0:function(){return this.a.aM(this.b)},
$S:0}
P.ca.prototype={
$1:function(a){return this.a.aP(this.b,a)},
$S:function(){return this.c.p("~(0)")}}
P.aK.prototype={}
P.bz.prototype={
$2:function(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=H.e(a)
s.a=t+": "
s.a+=H.e(b)},
$S:16}
P.aL.prototype={
gl:function(a){return this.a},
h:function(a){return P.d8(this)}}
P.f.prototype={
gN:function(){return H.V(this.$thrownJsError)}}
P.ax.prototype={
h:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.bu(t)
return"Assertion failed"}}
P.aV.prototype={}
P.aN.prototype={
h:function(a){return"Throw of null."}}
P.F.prototype={
gR:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gP:function(){return""},
h:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+o,m=r.gR()+p+n
if(!r.a)return m
t=r.gP()
s=P.bu(r.b)
return m+t+": "+s}}
P.ab.prototype={
gR:function(){return"RangeError"},
gP:function(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+H.e(r):""
else if(r==null)t=": Not greater than or equal to "+H.e(s)
else if(r>s)t=": Not in inclusive range "+H.e(s)+".."+H.e(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+H.e(s)
return t}}
P.aC.prototype={
gR:function(){return"RangeError"},
gP:function(){if(this.b<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gl:function(a){return this.f}}
P.aY.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.aW.prototype={
h:function(a){var t="UnimplementedError: "+this.a
return t}}
P.ae.prototype={
h:function(a){return"Bad state: "+this.a}}
P.az.prototype={
h:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bu(t)+"."}}
P.ad.prototype={
h:function(a){return"Stack Overflow"},
gN:function(){return null},
$if:1}
P.aA.prototype={
h:function(a){var t="Reading static variable '"+this.a+"' during its initialization"
return t}}
P.bT.prototype={
h:function(a){return"Exception: "+this.a}}
P.aE.prototype={
gl:function(a){var t,s=this.gE(this)
for(t=0;s.m();)++t
return t},
h:function(a){return P.em(this,"(",")")}}
P.l.prototype={
gk:function(a){return P.h.prototype.gk.call(C.u,this)},
h:function(a){return"null"}}
P.h.prototype={constructor:P.h,$ih:1,
B:function(a,b){return this===b},
gk:function(a){return H.aa(this)},
h:function(a){return"Instance of '"+H.bC(this)+"'"},
toString:function(){return this.h(this)}}
P.b6.prototype={
h:function(a){return""},
$iT:1}
P.aT.prototype={
gl:function(a){return this.a.length},
h:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.c.prototype={}
W.bb.prototype={
h:function(a){return String(a)}}
W.bc.prototype={
h:function(a){return String(a)}}
W.M.prototype={
gl:function(a){return a.length}}
W.a5.prototype={
gl:function(a){return a.length}}
W.bh.prototype={}
W.bs.prototype={
h:function(a){return String(a)}}
W.b.prototype={
h:function(a){return a.localName}}
W.a.prototype={$ia:1}
W.a6.prototype={
ap:function(a,b,c,d){return a.addEventListener(b,H.ar(c,1),!1)}}
W.bv.prototype={
gl:function(a){return a.length}}
W.S.prototype={$iS:1}
W.x.prototype={$ix:1}
W.y.prototype={
h:function(a){var t=a.nodeValue
return t==null?this.al(a):t}}
W.bE.prototype={
gl:function(a){return a.length}}
W.A.prototype={}
W.ag.prototype={
ga7:function(a){var t,s=new P.m($.i,u.m)
this.au(a)
t=W.dJ(new W.bN(new P.aj(s,u.d)),u.H)
t.toString
this.aw(a,t)
return s},
aw:function(a,b){return a.requestAnimationFrame(H.ar(b,1))},
au:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.bN.prototype={
$1:function(a){this.a.U(0,a)},
$S:17}
W.cD.prototype={}
W.b3.prototype={}
W.bS.prototype={
$1:function(a){return this.a.$1(a)},
$S:18}
W.b1.prototype={}
P.c6.prototype={
L:function(a){if(a<=0||a>4294967296)throw H.d(P.et("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
P.u.prototype={
h:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
B:function(a,b){if(b==null)return!1
return b instanceof P.u&&this.a===b.a&&this.b===b.b},
gk:function(a){var t=C.a.gk(this.a),s=C.a.gk(this.b),r=H.dg(H.dg(0,t),s)
r=r+((r&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
i:function(a,b){var t=this.$ti,s=t.c
return new P.u(s.a(C.a.i(this.a,b.gaU(b))),s.a(C.a.i(this.b,b.gaV(b))),t)},
ab:function(a){var t=this.a-a.a,s=this.b-a.b
return Math.sqrt(t*t+s*s)}}
M.k.prototype={
j:function(a,b){return new M.k(b*this.a,b*this.b,b*this.c)},
q:function(a,b){return new M.k(this.a-b.a,this.b-b.b,this.c-b.c)},
i:function(a,b){return new M.k(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ae:function(){var t=this.a,s=this.b,r=this.c
return Math.sqrt(t*t+s*s+r*r)},
v:function(){var t=this.ae()
return this.j(0,t===0?1/0:1/t)},
aa:function(a){var t=this.b,s=a.c,r=this.c,q=a.b,p=a.a,o=this.a
return new M.k(t*s-r*q,r*p-o*s,o*q-t*p)}}
M.q.prototype={
M:function(a,b){return new M.q(b*this.a,b*this.b,b*this.c)},
i:function(a,b){return new M.q(this.a+b.a,this.b+b.b,this.c+b.c)},
j:function(a,b){return new M.q(this.a*b.a,this.b*b.b,this.c*b.c)},
ai:function(){var t,s,r=new M.bf(),q=r.$1(this.a)
if(typeof q!=="number")return q.j()
q=C.a.X(q*255)
t=r.$1(this.b)
if(typeof t!=="number")return t.j()
t=C.a.X(t*255)
s=r.$1(this.c)
if(typeof s!=="number")return s.j()
return new M.bt(q,t,C.a.X(s*255))}}
M.bf.prototype={
$1:function(a){return a>1?1:a},
$S:19}
M.bt.prototype={}
M.a4.prototype={}
M.ac.prototype={}
M.aD.prototype={}
M.H.prototype={}
M.bD.prototype={}
M.aQ.prototype={
af:function(a){return a.q(0,this.c).v()},
ad:function(a){var t,s,r=this.c.q(0,a.a),q=r.t(a.b)
if(q>=0){t=this.b-(r.t(r)-q*q)
s=t>=0?q-Math.sqrt(t):0}else s=0
if(s===0)return null
else return new M.aD(this,a,s)},
gC:function(){return this.d}}
M.bB.prototype={
ad:function(a){var t=this.a,s=t.t(a.b)
if(s>0)return null
else return new M.aD(this,a,(t.t(a.a)+this.b)/-s)},
af:function(a){return this.a},
gC:function(){return this.c}}
M.bF.prototype={
$1:function(a){return $.cy()},
$S:1}
M.bG.prototype={
$1:function(a){return $.cX()},
$S:1}
M.bH.prototype={
$1:function(a){return 0.7},
$S:6}
M.bI.prototype={
$1:function(a){if(C.c.F(C.a.u(a.c)+C.a.u(a.a),2)!==0)return $.cy()
else return $.cw()},
$S:1}
M.bJ.prototype={
$1:function(a){return $.cy()},
$S:1}
M.bK.prototype={
$1:function(a){if(C.c.F(C.a.u(a.c)+C.a.u(a.a),2)!==0)return 0.1
else return 0.7},
$S:6}
M.br.prototype={}
R.bi.prototype={
a2:function(a,b){var t,s,r,q,p
for(t=b.a,s=1/0,r=null,q=0;q<3;++q){p=t[q].ad(a)
if(p!=null&&p.c<s){s=p.c
r=p}}return r},
az:function(a,b){var t=this.a2(a,b)
if(t!=null)return t.c
else return null},
a6:function(a,b,c){var t,s,r,q,p,o,n=this.a2(a,b)
if(n==null)return $.cW()
else{t=n.b
s=t.b
r=s.j(0,n.c).i(0,t.a)
t=n.a
q=t.af(r)
p=s.q(0,q.j(0,q.t(s)).j(0,2))
o=$.cW().i(0,this.av(t,r,q,p,b))
return o.i(0,c>=5?$.cX():this.a6(new M.ac(r,p),b,c+1).M(0,t.gC().c.$1(r)))}},
av:function(a,b,c,d,e){return C.j.aD(e.b,$.cx(),new R.bj(this,b,e,c,d,a))},
w:function(){var t=0,s=P.dE(u.z),r,q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$w=P.dI(function(a1,a2){if(a1===1)return P.dw(a2,s)
while(true)switch(t){case 0:b=new R.bl(q,new R.bm(q))
a=$.dV()
a0=a.L(65536)
q.f=a0
p=new R.bq(q,a0)
a0=document
o=a0.querySelector("#full-render")
if(o!=null){o=o.style
o.display="none"}n=new R.bp()
m=window.performance.now()
o=q.d
l=q.e
k=q.c
case 3:if(!!0){t=4
break}j=n.$1(q.r)
if(typeof j!=="number"){r=j.aS()
t=1
break}if(!(j>=2.8&&p.$0())){t=4
break}i=a.L(o)
h=a.L(l)
g=b.$2(i,h).ai()
k.fillStyle="rgba("+g.a+", "+g.b+", "+g.c+", 1)"
f=J.e9(n.$1(q.r))
j=C.c.T(f,2)
k.fillRect(i-j,h-j,f,f);++q.r
t=window.performance.now()-m>12?5:6
break
case 5:t=7
return P.cL(C.e.ga7(window),$async$w)
case 7:m=window.performance.now()
case 6:t=3
break
case 4:if(!p.$0()){t=1
break}e=P.eq(l*o,new R.bk())
C.j.ak(e,a)
a=e.length,d=0
case 8:if(!(d<e.length)){t=10
break}c=e[d]
if(typeof c!=="number"){r=c.F()
t=1
break}i=C.a.F(c,o)
h=C.a.an(c,o)
g=b.$2(i,h).ai()
k.fillStyle="rgba("+g.a+", "+g.b+", "+g.c+", 1)"
k.fillRect(i,h,1,1)
t=window.performance.now()-m>12?11:12
break
case 11:t=13
return P.cL(C.e.ga7(window),$async$w)
case 13:m=window.performance.now()
if(!p.$0()){t=1
break}case 12:case 9:e.length===a||(0,H.cV)(e),++d
t=8
break
case 10:a=a0.querySelector("#full-render")
if(a!=null){a=a.style
a.display="inline"}case 1:return P.dx(r,s)}})
return P.dy($async$w,s)}}
R.bj.prototype={
$2:function(a,b){var t,s,r,q,p,o=this,n=o.b,m=b.a.q(0,n),l=m.v(),k=o.a.az(new M.ac(n,l),o.c)
if(k==null?!1:k<=m.ae())return a
else{t=l.t(o.d)
s=t>0?b.b.M(0,t):$.cx()
r=l.t(o.e.v())
q=r>0?b.b.M(0,Math.pow(r,o.f.gC().d)):$.cx()
p=o.f
return J.cZ(J.cZ(a,p.gC().a.$1(n).j(0,s)),p.gC().b.$1(n).j(0,q))}},
$S:20}
R.bm.prototype={
$3:function(a,b,c){var t=this.a
return c.b.i(0,c.c.j(0,new R.bn(t).$1(a))).i(0,c.d.j(0,new R.bo(t).$1(b))).v()},
$S:21}
R.bn.prototype={
$1:function(a){var t=this.a.e
return(a-t/2)/2/t},
$S:2}
R.bo.prototype={
$1:function(a){var t=this.a.e
return-(a-t/2)/2/t},
$S:2}
R.bl.prototype={
$2:function(a,b){var t=this.a,s=t.b,r=s.c
return t.a6(new M.ac(r.a,this.b.$3(a,b,r)),s,0)},
$S:22}
R.bq.prototype={
$0:function(){return this.a.f===this.b},
$S:23}
R.bp.prototype={
$1:function(a){return 16-Math.log(a+10)},
$S:2}
R.bk.prototype={
$1:function(a){return a},
$S:24}
R.cs.prototype={
$0:function(){var t=this.a.c
t.a=t.a.i(0,t.b)},
$S:0}
R.cr.prototype={
$0:function(){var t=this.a.c
t.a=t.a.q(0,t.b)},
$S:0}
R.ct.prototype={
$0:function(){var t=this.a.c
t.a=t.a.q(0,t.c)},
$S:0}
R.cu.prototype={
$0:function(){var t=this.a.c
t.a=t.a.i(0,t.c)},
$S:0}
R.cp.prototype={
$1:function(a){var t,s=this
switch(a.keyCode){case 87:s.a.$0()
break
case 83:s.b.$0()
break
case 65:s.c.$0()
break
case 68:s.d.$0()
break
default:return}t=s.e
t.r=0
t.w()},
$S:25}
R.cq.prototype={
$1:function(a){var t,s,r,q,p=this.a,o=new H.a9(p),n=o.gE(o)
if(!n.m())H.av(H.en())
t=n.gA()
for(o=new H.a9(p),o=o.gE(o),s=u.n,r=H.cM(o).c;o.m();){q=r.a(o.d)
if(q.ab(new P.u(a.clientX,a.clientY,s))<t.ab(new P.u(a.clientX,a.clientY,s)))t=q}p.aj(0,u.D.a(t)).$0()
p=this.b
p.r=0
p.w()},
$S:26};(function aliases(){var t=J.r.prototype
t.al=t.h
t=J.G.prototype
t.am=t.h})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0
t(P,"fh","ex",3)
t(P,"fi","ey",3)
t(P,"fj","ez",3)
s(P,"dL","fc",0)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.h,null)
r(P.h,[H.cE,J.r,J.aw,P.f,P.aE,H.bL,H.bA,H.a7,H.ai,H.N,P.aL,H.by,H.aJ,H.z,H.b4,P.cb,P.aZ,P.b0,P.ah,P.m,P.b_,P.aS,P.b5,P.ay,P.cd,P.ad,P.bT,P.l,P.b6,P.aT,W.bh,W.cD,P.c6,P.u,M.k,M.q,M.bt,M.a4,M.ac,M.aD,M.H,M.bD,M.aQ,M.bB,M.br,R.bi])
r(J.r,[J.bw,J.Y,J.G,J.C,J.P,J.Q,W.a6,W.b1,W.bs,W.a])
r(J.G,[J.aO,J.U,J.R])
s(J.bx,J.C)
r(J.P,[J.a8,J.aF])
r(P.f,[H.aI,P.aV,H.aH,H.aX,H.aP,H.b2,P.ax,P.aN,P.F,P.aY,P.aW,P.ae,P.az,P.aA])
s(H.aB,P.aE)
s(H.aM,P.aV)
r(H.N,[H.aU,H.cl,H.cm,H.cn,P.bP,P.bO,P.bQ,P.bR,P.cc,P.ce,P.cf,P.ci,P.bU,P.c1,P.bY,P.bZ,P.c_,P.bW,P.c0,P.bV,P.c4,P.c5,P.c3,P.c2,P.ch,P.c9,P.c8,P.ca,P.bz,W.bN,W.bS,M.bf,M.bF,M.bG,M.bH,M.bI,M.bJ,M.bK,R.bj,R.bm,R.bn,R.bo,R.bl,R.bq,R.bp,R.bk,R.cs,R.cr,R.ct,R.cu,R.cp,R.cq])
r(H.aU,[H.aR,H.W])
s(P.aK,P.aL)
s(H.aG,P.aK)
s(H.a9,H.aB)
s(H.ak,H.b2)
s(P.aj,P.b0)
s(P.c7,P.cd)
r(P.F,[P.ab,P.aC])
r(W.a6,[W.y,W.ag])
r(W.y,[W.b,W.M])
s(W.c,W.b)
r(W.c,[W.bb,W.bc,W.bv,W.bE])
s(W.a5,W.b1)
s(W.A,W.a)
r(W.A,[W.S,W.x])
s(W.b3,P.aS)
t(W.b1,W.bh)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{o:"int",ck:"double",n:"num",Z:"String",cR:"bool",l:"Null",fO:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","q(k)","n(o)","~(~())","l(@)","l()","ck(k)","@(@)","@(@,Z)","@(Z)","l(~())","~(@)","l(@,T)","~(o,@)","l(h,T)","m<@>(@)","~(h?,h?)","~(n)","~(a)","n(n)","@(@,H)","k(o,o,a4)","q(@,@)","cR()","o(o)","~(S)","~(x)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.eN(v.typeUniverse,JSON.parse('{"aO":"G","U":"G","R":"G","fD":"a","fM":"a","fP":"x","fJ":"A","Y":{"l":[]},"G":{"X":[]},"P":{"n":[]},"a8":{"o":[],"n":[]},"aF":{"n":[]},"Q":{"Z":[]},"aI":{"f":[]},"aM":{"f":[]},"aH":{"f":[]},"aX":{"f":[]},"ai":{"T":[]},"N":{"X":[]},"aU":{"X":[]},"aR":{"X":[]},"W":{"X":[]},"aP":{"f":[]},"b2":{"f":[]},"ak":{"f":[]},"aj":{"b0":["1"]},"m":{"O":["1"]},"ay":{"f":[]},"ck":{"n":[]},"o":{"n":[]},"ax":{"f":[]},"aV":{"f":[]},"aN":{"f":[]},"F":{"f":[]},"ab":{"f":[]},"aC":{"f":[]},"aY":{"f":[]},"aW":{"f":[]},"ae":{"f":[]},"az":{"f":[]},"ad":{"f":[]},"aA":{"f":[]},"b6":{"T":[]},"S":{"a":[]},"x":{"a":[]},"A":{"a":[]}}'))
H.eM(v.typeUniverse,JSON.parse('{"C":1,"bx":1,"aw":1,"aB":1,"aG":2,"a9":1,"aJ":1,"ah":2,"aS":1,"b5":1,"aK":2,"aL":2,"aE":1,"b3":1}'))
0
var u=(function rtii(){var t=H.fm
return{C:t("f"),B:t("a"),Z:t("X"),c:t("O<@>"),b:t("C<@>"),T:t("Y"),g:t("R"),P:t("l"),K:t("h"),D:t("u<o>"),n:t("u<n>"),N:t("Z"),o:t("U"),e:t("m<@>"),m:t("m<n>"),d:t("aj<n>"),y:t("cR"),i:t("ck"),z:t("@"),v:t("@(h)"),Q:t("@(h,T)"),S:t("o"),A:t("0&*"),_:t("h*"),O:t("O<l>?"),X:t("h?"),H:t("n"),p:t("~")}})();(function constants(){C.t=J.r.prototype
C.j=J.C.prototype
C.c=J.a8.prototype
C.u=J.Y.prototype
C.a=J.P.prototype
C.v=J.Q.prototype
C.w=J.R.prototype
C.k=J.aO.prototype
C.d=J.U.prototype
C.e=W.ag.prototype
C.f=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.l=function() {
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
C.q=function(getTagFallback) {
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
C.m=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.n=function(hooks) {
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
C.p=function(hooks) {
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
C.o=function(hooks) {
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
C.h=function(hooks) { return hooks; }

C.i=new P.c6()
C.b=new P.c7()
C.r=new P.b6()})();(function staticFields(){$.dm=null
$.B=0
$.d3=null
$.d2=null
$.dO=null
$.dK=null
$.dS=null
$.cj=null
$.co=null
$.cT=null
$.a0=null
$.ao=null
$.ap=null
$.cO=!1
$.i=C.b
$.t=[]})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal,s=hunkHelpers.lazy
t($,"fL","dW",function(){return H.fq("_$dart_dartClosure")})
t($,"fT","dZ",function(){return H.D(H.bM({
toString:function(){return"$receiver$"}}))})
t($,"fU","e_",function(){return H.D(H.bM({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"fV","e0",function(){return H.D(H.bM(null))})
t($,"fW","e1",function(){return H.D(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"fZ","e4",function(){return H.D(H.bM(void 0))})
t($,"h_","e5",function(){return H.D(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"fY","e3",function(){return H.D(H.dh(null))})
t($,"fX","e2",function(){return H.D(function(){try{null.$method$}catch(r){return r.message}}())})
t($,"h1","e7",function(){return H.D(H.dh(void 0))})
t($,"h0","e6",function(){return H.D(function(){try{(void 0).$method$}catch(r){return r.message}}())})
t($,"h2","cY",function(){return P.ew()})
s($,"fI","cy",function(){return M.cC(1,1,1)})
s($,"fH","cX",function(){return M.cC(0.5,0.5,0.5)})
s($,"fF","cw",function(){return M.cC(0,0,0)})
s($,"fE","cW",function(){return $.cw()})
s($,"fG","cx",function(){return $.cw()})
t($,"fS","dY",function(){return M.d6(new M.bF(),new M.bG(),new M.bH(),250)})
t($,"fR","dX",function(){return M.d6(new M.bI(),new M.bJ(),new M.bK(),150)})
t($,"fK","dV",function(){return P.es()})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasRenderingContext2D:J.r,DOMError:J.r,MediaError:J.r,Navigator:J.r,NavigatorConcurrentHardware:J.r,NavigatorUserMediaError:J.r,OverconstrainedError:J.r,PositionError:J.r,SQLError:J.r,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLCanvasElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.bb,HTMLAreaElement:W.bc,CDATASection:W.M,CharacterData:W.M,Comment:W.M,ProcessingInstruction:W.M,Text:W.M,CSSStyleDeclaration:W.a5,MSStyleCSSProperties:W.a5,CSS2Properties:W.a5,DOMException:W.bs,SVGAElement:W.b,SVGAnimateElement:W.b,SVGAnimateMotionElement:W.b,SVGAnimateTransformElement:W.b,SVGAnimationElement:W.b,SVGCircleElement:W.b,SVGClipPathElement:W.b,SVGDefsElement:W.b,SVGDescElement:W.b,SVGDiscardElement:W.b,SVGEllipseElement:W.b,SVGFEBlendElement:W.b,SVGFEColorMatrixElement:W.b,SVGFEComponentTransferElement:W.b,SVGFECompositeElement:W.b,SVGFEConvolveMatrixElement:W.b,SVGFEDiffuseLightingElement:W.b,SVGFEDisplacementMapElement:W.b,SVGFEDistantLightElement:W.b,SVGFEFloodElement:W.b,SVGFEFuncAElement:W.b,SVGFEFuncBElement:W.b,SVGFEFuncGElement:W.b,SVGFEFuncRElement:W.b,SVGFEGaussianBlurElement:W.b,SVGFEImageElement:W.b,SVGFEMergeElement:W.b,SVGFEMergeNodeElement:W.b,SVGFEMorphologyElement:W.b,SVGFEOffsetElement:W.b,SVGFEPointLightElement:W.b,SVGFESpecularLightingElement:W.b,SVGFESpotLightElement:W.b,SVGFETileElement:W.b,SVGFETurbulenceElement:W.b,SVGFilterElement:W.b,SVGForeignObjectElement:W.b,SVGGElement:W.b,SVGGeometryElement:W.b,SVGGraphicsElement:W.b,SVGImageElement:W.b,SVGLineElement:W.b,SVGLinearGradientElement:W.b,SVGMarkerElement:W.b,SVGMaskElement:W.b,SVGMetadataElement:W.b,SVGPathElement:W.b,SVGPatternElement:W.b,SVGPolygonElement:W.b,SVGPolylineElement:W.b,SVGRadialGradientElement:W.b,SVGRectElement:W.b,SVGScriptElement:W.b,SVGSetElement:W.b,SVGStopElement:W.b,SVGStyleElement:W.b,SVGElement:W.b,SVGSVGElement:W.b,SVGSwitchElement:W.b,SVGSymbolElement:W.b,SVGTSpanElement:W.b,SVGTextContentElement:W.b,SVGTextElement:W.b,SVGTextPathElement:W.b,SVGTextPositioningElement:W.b,SVGTitleElement:W.b,SVGUseElement:W.b,SVGViewElement:W.b,SVGGradientElement:W.b,SVGComponentTransferFunctionElement:W.b,SVGFEDropShadowElement:W.b,SVGMPathElement:W.b,Element:W.b,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Event:W.a,InputEvent:W.a,SubmitEvent:W.a,Performance:W.a6,EventTarget:W.a6,HTMLFormElement:W.bv,KeyboardEvent:W.S,MouseEvent:W.x,DragEvent:W.x,PointerEvent:W.x,WheelEvent:W.x,Document:W.y,DocumentFragment:W.y,HTMLDocument:W.y,ShadowRoot:W.y,XMLDocument:W.y,Attr:W.y,DocumentType:W.y,Node:W.y,HTMLSelectElement:W.bE,CompositionEvent:W.A,FocusEvent:W.A,TextEvent:W.A,TouchEvent:W.A,UIEvent:W.A,Window:W.ag,DOMWindow:W.ag})
hunkHelpers.setOrUpdateLeafTags({CanvasRenderingContext2D:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,Performance:true,EventTarget:false,HTMLFormElement:true,KeyboardEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(R.b9,[])
else R.b9([])})})()
//# sourceMappingURL=raytracer_huge.dart.js.map
