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
a[c]=function(){a[c]=function(){H.eX(b)}
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
if(a[b]!==t)H.eY(b)
a[b]=s}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.cj"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.cj"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.cj(this,a,b,c,true,false,e).prototype
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
if(w[t][a])return w[t][a]}}var C={},H={c8:function c8(){},as:function as(a){this.a=a},
dc:function(a){var t,s=H.db(a)
if(s!=null)return s
t="minified:"+a
return t},
o:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aP(a)
return t},
b6:function(a){return H.dE(a)},
dE:function(a){var t,s,r
if(a instanceof P.j)return H.q(H.ag(a),null)
if(J.bW(a)===C.q||u.D.b(a)){t=C.e(a)
if(H.cE(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.cE(r))return r}}return H.q(H.ag(a),null)},
cE:function(a){var t=a!=="Object"&&a!==""
return t},
cm:function(a,b){if(a==null)J.cr(a)
throw H.d(H.eH(a,b))},
eH:function(a,b){var t,s="index"
if(!H.cZ(b))return new P.B(!0,b,s,null)
t=J.cr(a)
if(b<0||b>=t)return new P.ao(t,!0,b,s,"Index out of range")
return new P.aw(!0,b,s,"Value not in range")},
d:function(a){var t,s
if(a==null)a=new P.au()
t=new Error()
t.dartException=a
s=H.eZ
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
eZ:function(){return J.aP(this.dartException)},
da:function(a){throw H.d(a)},
eW:function(a){throw H.d(P.cz(a))},
z:function(a){var t,s,r,q,p,o
a=H.eU(a.replace(String({}),'$receiver$'))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.bn(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
bo:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
cI:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
cD:function(a,b){return new H.at(a,b==null?null:b.method)},
c9:function(a,b){var t=b==null,s=t?null:b.method
return new H.ar(a,s,t?null:b.receiver)},
V:function(a){if(a==null)return new H.b4(a)
if(a instanceof H.a_)return H.J(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return H.J(a,a.dartException)
return H.ez(a)},
J:function(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
ez:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.c.aa(s,16)&8191)===10)switch(r){case 438:return H.J(a,H.c9(H.o(t)+" (Error "+r+")",f))
case 445:case 5007:return H.J(a,H.cD(H.o(t)+" (Error "+r+")",f))}}if(a instanceof TypeError){q=$.dg()
p=$.dh()
o=$.di()
n=$.dj()
m=$.dm()
l=$.dn()
k=$.dl()
$.dk()
j=$.dq()
i=$.dp()
h=q.l(t)
if(h!=null)return H.J(a,H.c9(t,h))
else{h=p.l(t)
if(h!=null){h.method="call"
return H.J(a,H.c9(t,h))}else{h=o.l(t)
if(h==null){h=n.l(t)
if(h==null){h=m.l(t)
if(h==null){h=l.l(t)
if(h==null){h=k.l(t)
if(h==null){h=n.l(t)
if(h==null){h=j.l(t)
if(h==null){h=i.l(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return H.J(a,H.cD(t,h))}}return H.J(a,new H.aC(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.a4()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return H.J(a,new P.B(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.a4()
return a},
N:function(a){var t
if(a instanceof H.a_)return a.b
if(a==null)return new H.a7(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.a7(a)},
eP:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(new P.bu("Unsupported number of arguments for wrapped closure"))},
aO:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.eP)
a.$identity=t
return t},
dB:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m=b[0],l=m.$callName,k=e?Object.create(new H.be().constructor.prototype):Object.create(new H.al(null,null,null,"").constructor.prototype)
k.$initialize=k.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.x
if(typeof s!=="number")return s.i()
$.x=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}k.constructor=t
t.prototype=k
if(!e){r=H.cy(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}k.$S=H.dx(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cy(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
dx:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.d5,a)
if(typeof a=="string"){if(b)throw H.d("Cannot compute signature for static tearoff.")
t=c?H.dv:H.du
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.d("Error in functionType of tearoff")},
dy:function(a,b,c,d){var t=H.cx
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cy:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.dA(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.dy(s,!q,t,b)
if(s===0){q=$.x
if(typeof q!=="number")return q.i()
$.x=q+1
o="self"+q
return new Function("return function(){var "+o+" = this."+H.c5()+";return "+o+"."+H.o(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.x
if(typeof q!=="number")return q.i()
$.x=q+1
n+=q
return new Function("return function("+n+"){return this."+H.c5()+"."+H.o(t)+"("+n+");}")()},
dz:function(a,b,c,d){var t=H.cx,s=H.dw
switch(b?-1:a){case 0:throw H.d(new H.ax("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
dA:function(a,b){var t,s,r,q,p,o,n=H.c5(),m=$.cv
if(m==null)m=$.cv=H.cu("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.dz(s,!q,t,b)
if(s===1){q="return function(){return this."+n+"."+H.o(t)+"(this."+m+");"
p=$.x
if(typeof p!=="number")return p.i()
$.x=p+1
return new Function(q+p+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
q="return function("+o+"){return this."+n+"."+H.o(t)+"(this."+m+", "+o+");"
p=$.x
if(typeof p!=="number")return p.i()
$.x=p+1
return new Function(q+p+"}")()},
cj:function(a,b,c,d,e,f,g){return H.dB(a,b,c,d,!!e,!!f,g)},
du:function(a,b){return H.aN(v.typeUniverse,H.ag(a.a),b)},
dv:function(a,b){return H.aN(v.typeUniverse,H.ag(a.c),b)},
cx:function(a){return a.a},
dw:function(a){return a.c},
c5:function(){var t=$.cw
return t==null?$.cw=H.cu("self"):t},
cu:function(a){var t,s,r,q=new H.al("self","target","receiver","name"),p=Object.getOwnPropertyNames(q)
p.fixed$length=Array
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw H.d(P.ds("Field name "+a+" not found."))},
eX:function(a){throw H.d(new P.an(a))},
eL:function(a){return v.getIsolateTag(a)},
eY:function(a){return H.da(new H.as(a))},
fF:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
eR:function(a){var t,s,r,q,p,o=$.d4.$1(a),n=$.bU[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.c_[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=$.d2.$2(a,o)
if(r!=null){n=$.bU[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.c_[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.c1(t)
$.bU[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.c_[o]=t
return t}if(q==="-"){p=H.c1(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.d8(a,t)
if(q==="*")throw H.d(P.cJ(o))
if(v.leafTags[o]===true){p=H.c1(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.d8(a,t)},
d8:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cn(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
c1:function(a){return J.cn(a,!1,null,!!a.$if9)},
eS:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.c1(t)
else return J.cn(t,c,null,null)},
eN:function(){if(!0===$.cl)return
$.cl=!0
H.eO()},
eO:function(){var t,s,r,q,p,o,n,m
$.bU=Object.create(null)
$.c_=Object.create(null)
H.eM()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.d9.$1(p)
if(o!=null){n=H.eS(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
eM:function(){var t,s,r,q,p,o,n=C.i()
n=H.U(C.j,H.U(C.k,H.U(C.f,H.U(C.f,H.U(C.l,H.U(C.m,H.U(C.n(C.e),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.d4=new H.bX(q)
$.d2=new H.bY(p)
$.d9=new H.bZ(o)},
U:function(a,b){return a(b)||b},
eU:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bn:function bn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
at:function at(a,b){this.a=a
this.b=b},
ar:function ar(a,b,c){this.a=a
this.b=b
this.c=c},
aC:function aC(a){this.a=a},
b4:function b4(a){this.a=a},
a_:function a_(a,b){this.a=a
this.b=b},
a7:function a7(a){this.a=a
this.b=null},
O:function O(){},
bm:function bm(){},
be:function be(){},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ax:function ax(a){this.a=a},
bX:function bX(a){this.a=a},
bY:function bY(a){this.a=a},
bZ:function bZ(a){this.a=a},
cG:function(a,b){var t=b.c
return t==null?b.c=H.ce(a,b.z,!0):t},
cF:function(a,b){var t=b.c
return t==null?b.c=H.a9(a,"y",[b.z]):t},
cH:function(a){var t=a.y
if(t===6||t===7||t===8)return H.cH(a.z)
return t===11||t===12},
dF:function(a){return a.cy},
eI:function(a){return H.cf(v.typeUniverse,a,!1)},
I:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.I(a,t,c,a0)
if(s===t)return b
return H.cS(a,s,!0)
case 7:t=b.z
s=H.I(a,t,c,a0)
if(s===t)return b
return H.ce(a,s,!0)
case 8:t=b.z
s=H.I(a,t,c,a0)
if(s===t)return b
return H.cR(a,s,!0)
case 9:r=b.Q
q=H.ae(a,r,c,a0)
if(q===r)return b
return H.a9(a,b.z,q)
case 10:p=b.z
o=H.I(a,p,c,a0)
n=b.Q
m=H.ae(a,n,c,a0)
if(o===p&&m===n)return b
return H.cc(a,o,m)
case 11:l=b.z
k=H.I(a,l,c,a0)
j=b.Q
i=H.ew(a,j,c,a0)
if(k===l&&i===j)return b
return H.cQ(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.ae(a,h,c,a0)
p=b.z
o=H.I(a,p,c,a0)
if(g===h&&o===p)return b
return H.cd(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.d(P.aS("Attempted to substitute unexpected RTI kind "+d))}},
ae:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.I(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
ex:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.I(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
ew:function(a,b,c,d){var t,s=b.a,r=H.ae(a,s,c,d),q=b.b,p=H.ae(a,q,c,d),o=b.c,n=H.ex(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.aJ()
t.a=r
t.b=p
t.c=n
return t},
fG:function(a,b){a[v.arrayRti]=b
return a},
eG:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.d5(t)
return a.$S()}return null},
d6:function(a,b){var t
if(H.cH(b))if(a instanceof H.O){t=H.eG(a)
if(t!=null)return t}return H.ag(a)},
ag:function(a){var t
if(a instanceof P.j){t=a.$ti
return t!=null?t:H.cg(a)}if(Array.isArray(a))return H.e2(a)
return H.cg(J.bW(a))},
e2:function(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
eg:function(a){var t=a.$ti
return t!=null?t:H.cg(a)},
cg:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.eh(a,t)},
eh:function(a,b){var t=a instanceof H.O?a.__proto__.__proto__.constructor:b,s=H.e1(v.typeUniverse,t.name)
b.$ccache=s
return s},
d5:function(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=H.cf(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
ef:function(a){var t,s,r,q=this
if(q===u.K)return H.ab(q,a,H.ek)
if(!H.A(q))if(!(q===u._))t=!1
else t=!0
else t=!0
if(t)return H.ab(q,a,H.eo)
t=q.y
s=t===6?q.z:q
if(s===u.S)r=H.cZ
else if(s===u.i||s===u.n)r=H.ej
else if(s===u.N)r=H.el
else r=s===u.y?H.cX:null
if(r!=null)return H.ab(q,a,r)
if(s.y===9){t=s.z
if(s.Q.every(H.eQ)){q.r="$i"+t
return H.ab(q,a,H.em)}}else if(t===7)return H.ab(q,a,H.ed)
return H.ab(q,a,H.eb)},
ab:function(a,b,c){a.b=c
return a.b(b)},
ee:function(a){var t,s=this,r=H.ea
if(!H.A(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=H.e4
else if(s===u.K)r=H.e3
else{t=H.ah(s)
if(t)r=H.ec}s.a=r
return s.a(a)},
ci:function(a){var t,s=a.y
if(!H.A(a))if(!(a===u._))if(!(a===u.A))if(s!==7)t=s===8&&H.ci(a.z)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
return t},
eb:function(a){var t=this
if(a==null)return H.ci(t)
return H.h(v.typeUniverse,H.d6(a,t),null,t,null)},
ed:function(a){if(a==null)return!0
return this.z.b(a)},
em:function(a){var t,s=this
if(a==null)return H.ci(s)
t=s.r
if(a instanceof P.j)return!!a[t]
return!!J.bW(a)[t]},
ea:function(a){var t,s=this
if(a==null){t=H.ah(s)
if(t)return a}else if(s.b(a))return a
H.cV(a,s)},
ec:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.cV(a,t)},
cV:function(a,b){throw H.d(H.dS(H.cK(a,H.d6(a,b),H.q(b,null))))},
cK:function(a,b,c){var t=P.b_(a),s=H.q(b==null?H.ag(a):b,null)
return t+": type '"+s+"' is not a subtype of type '"+c+"'"},
dS:function(a){return new H.a8("TypeError: "+a)},
n:function(a,b){return new H.a8("TypeError: "+H.cK(a,null,b))},
ek:function(a){return a!=null},
e3:function(a){if(a!=null)return a
throw H.d(H.n(a,"Object"))},
eo:function(a){return!0},
e4:function(a){return a},
cX:function(a){return!0===a||!1===a},
fq:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.d(H.n(a,"bool"))},
fs:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.n(a,"bool"))},
fr:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.n(a,"bool?"))},
ft:function(a){if(typeof a=="number")return a
throw H.d(H.n(a,"double"))},
fv:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.n(a,"double"))},
fu:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.n(a,"double?"))},
cZ:function(a){return typeof a=="number"&&Math.floor(a)===a},
fw:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.d(H.n(a,"int"))},
fy:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.n(a,"int"))},
fx:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.n(a,"int?"))},
ej:function(a){return typeof a=="number"},
fz:function(a){if(typeof a=="number")return a
throw H.d(H.n(a,"num"))},
fB:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.n(a,"num"))},
fA:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.n(a,"num?"))},
el:function(a){return typeof a=="string"},
fC:function(a){if(typeof a=="string")return a
throw H.d(H.n(a,"String"))},
fE:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.n(a,"String"))},
fD:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.n(a,"String?"))},
et:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+H.q(a[r],b)
return t},
cW:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=[]
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)a4.push("T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){n+=m
l=a4.length
k=l-1-q
if(k<0)return H.cm(a4,k)
n=C.t.i(n,a4[k])
j=a5[q]
i=j.y
if(!(i===2||i===3||i===4||i===5||j===p))if(!(j===o))l=!1
else l=!0
else l=!0
if(!l)n+=" extends "+H.q(j,a4)}n+=">"}else{n=""
s=null}p=a3.z
h=a3.Q
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=H.q(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+H.q(g[q],a4)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+H.q(e[q],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=H.q(c[q+2],a4)+" "+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return n+"("+a0+") => "+a},
q:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.q(a.z,b)
return t}if(m===7){s=a.z
t=H.q(s,b)
r=s.y
return(r===11||r===12?"("+t+")":t)+"?"}if(m===8)return"FutureOr<"+H.q(a.z,b)+">"
if(m===9){q=H.ey(a.z)
p=a.Q
return p.length!==0?q+("<"+H.et(p,b)+">"):q}if(m===11)return H.cW(a,b,null)
if(m===12)return H.cW(a.z,b,a.Q)
if(m===13){o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.cm(b,o)
return b[o]}return"?"},
ey:function(a){var t,s=H.db(a)
if(s!=null)return s
t="minified:"+a
return t},
cT:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
e1:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.cf(a,b,!1)
else if(typeof n=="number"){t=n
s=H.aa(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.a9(a,b,r)
o[b]=p
return p}else return n},
e_:function(a,b){return H.cU(a.tR,b)},
dZ:function(a,b){return H.cU(a.eT,b)},
cf:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.cP(H.cN(a,null,b,c))
s.set(b,t)
return t},
aN:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.cP(H.cN(a,b,c,!0))
r.set(c,s)
return s},
e0:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.cc(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
H:function(a,b){b.a=H.ee
b.b=H.ef
return b},
aa:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.t(null,null)
t.y=b
t.cy=c
s=H.H(a,t)
a.eC.set(c,s)
return s},
cS:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.dX(a,b,s,c)
a.eC.set(s,t)
return t},
dX:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.A(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.t(null,null)
r.y=6
r.z=b
r.cy=c
return H.H(a,r)},
ce:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.dW(a,b,s,c)
a.eC.set(s,t)
return t},
dW:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.A(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.ah(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.ah(r.z))return r
else return H.cG(a,b)}}q=new H.t(null,null)
q.y=7
q.z=b
q.cy=c
return H.H(a,q)},
cR:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.dU(a,b,s,c)
a.eC.set(s,t)
return t},
dU:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.A(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.a9(a,"y",[b])
else if(b===u.P||b===u.T)return u.O}r=new H.t(null,null)
r.y=8
r.z=b
r.cy=c
return H.H(a,r)},
dY:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.t(null,null)
t.y=13
t.z=b
t.cy=r
s=H.H(a,t)
a.eC.set(r,s)
return s},
aM:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
dT:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
a9:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.aM(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.t(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.H(a,s)
a.eC.set(q,r)
return r},
cc:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.aM(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.t(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.H(a,p)
a.eC.set(r,o)
return o},
cQ:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.aM(n)
if(k>0){t=m>0?",":""
s=H.aM(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.dT(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.t(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.H(a,p)
a.eC.set(r,s)
return s},
cd:function(a,b,c,d){var t,s=b.cy+("<"+H.aM(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.dV(a,b,c,s,d)
a.eC.set(s,t)
return t},
dV:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.I(a,b,s,0)
n=H.ae(a,c,s,0)
return H.cd(a,o,n,c!==n)}}m=new H.t(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.H(a,m)},
cN:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
cP:function(a){var t,s,r,q,p,o,n,m,l,k,j,i=a.r,h=a.s
for(t=i.length,s=0;s<t;){r=i.charCodeAt(s)
if(r>=48&&r<=57)s=H.dN(s+1,r,i,h)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.cO(a,s,i,h,!1)
else if(r===46)s=H.cO(a,s,i,h,!0)
else{++s
switch(r){case 44:break
case 58:h.push(!1)
break
case 33:h.push(!0)
break
case 59:h.push(H.G(a.u,a.e,h.pop()))
break
case 94:h.push(H.dY(a.u,h.pop()))
break
case 35:h.push(H.aa(a.u,5,"#"))
break
case 64:h.push(H.aa(a.u,2,"@"))
break
case 126:h.push(H.aa(a.u,3,"~"))
break
case 60:h.push(a.p)
a.p=h.length
break
case 62:q=a.u
p=h.splice(a.p)
H.cb(a.u,a.e,p)
a.p=h.pop()
o=h.pop()
if(typeof o=="string")h.push(H.a9(q,o,p))
else{n=H.G(q,a.e,o)
switch(n.y){case 11:h.push(H.cd(q,n,p,a.n))
break
default:h.push(H.cc(q,n,p))
break}}break
case 38:H.dO(a,h)
break
case 42:q=a.u
h.push(H.cS(q,H.G(q,a.e,h.pop()),a.n))
break
case 63:q=a.u
h.push(H.ce(q,H.G(q,a.e,h.pop()),a.n))
break
case 47:q=a.u
h.push(H.cR(q,H.G(q,a.e,h.pop()),a.n))
break
case 40:h.push(a.p)
a.p=h.length
break
case 41:q=a.u
m=new H.aJ()
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
H.cb(a.u,a.e,p)
a.p=h.pop()
m.a=p
m.b=l
m.c=k
h.push(H.cQ(q,H.G(q,a.e,h.pop()),m))
break
case 91:h.push(a.p)
a.p=h.length
break
case 93:p=h.splice(a.p)
H.cb(a.u,a.e,p)
a.p=h.pop()
h.push(p)
h.push(-1)
break
case 123:h.push(a.p)
a.p=h.length
break
case 125:p=h.splice(a.p)
H.dQ(a.u,a.e,p)
a.p=h.pop()
h.push(p)
h.push(-2)
break
default:throw"Bad character "+r}}}j=h.pop()
return H.G(a.u,a.e,j)},
dN:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
cO:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.cT(t,p.z)[q]
if(o==null)H.da('No "'+q+'" in "'+H.dF(p)+'"')
d.push(H.aN(t,p,o))}else d.push(q)
return n},
dO:function(a,b){var t=b.pop()
if(0===t){b.push(H.aa(a.u,1,"0&"))
return}if(1===t){b.push(H.aa(a.u,4,"1&"))
return}throw H.d(P.aS("Unexpected extended operation "+H.o(t)))},
G:function(a,b,c){if(typeof c=="string")return H.a9(a,c,a.sEA)
else if(typeof c=="number")return H.dP(a,b,c)
else return c},
cb:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.G(a,b,c[t])},
dQ:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.G(a,b,c[t])},
dP:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.d(P.aS("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.d(P.aS("Bad index "+c+" for "+b.h(0)))},
h:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!H.A(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(H.A(b))return!1
if(b.y!==1)t=!1
else t=!0
if(t)return!0
r=s===13
if(r)if(H.h(a,c[b.z],c,d,e))return!0
q=d.y
t=b===u.P||b===u.T
if(t){if(q===8)return H.h(a,b,c,d.z,e)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return H.h(a,b.z,c,d,e)
if(s===6)return H.h(a,b.z,c,d,e)
return s!==7}if(s===6)return H.h(a,b.z,c,d,e)
if(q===6){t=H.cG(a,d)
return H.h(a,b,c,t,e)}if(s===8){if(!H.h(a,b.z,c,d,e))return!1
return H.h(a,H.cF(a,b),c,d,e)}if(s===7){t=H.h(a,u.P,c,d,e)
return t&&H.h(a,b.z,c,d,e)}if(q===8){if(H.h(a,b,c,d.z,e))return!0
return H.h(a,b,c,H.cF(a,d),e)}if(q===7){t=H.h(a,b,c,u.P,e)
return t||H.h(a,b,c,d.z,e)}if(r)return!1
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
if(!H.h(a,l,c,k,e)||!H.h(a,k,e,l,c))return!1}return H.cY(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return H.cY(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.ei(a,b,c,d,e)}return!1},
cY:function(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!H.h(a2,a3.z,a4,a5.z,a6))return!1
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
if(!H.h(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.h(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.h(a2,l[i],a6,h,a4))return!1}g=t.c
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
if(!H.h(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
ei:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.h(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.cT(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.h(a,H.aN(a,b,m[q]),c,s[q],e))return!1
return!0},
ah:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.A(a))if(s!==7)if(!(s===6&&H.ah(a.z)))t=s===8&&H.ah(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
eQ:function(a){var t
if(!H.A(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
A:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
cU:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
t:function t(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
aJ:function aJ(){this.c=this.b=this.a=null},
aH:function aH(){},
a8:function a8(a){this.a=a},
db:function(a){return v.mangledGlobalNames[a]},
eT:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
cn:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ck:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.cl==null){H.eN()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.d(P.cJ("Return interceptor for "+H.o(t(a,p))))}r=a.constructor
q=r==null?null:r[J.cC()]
if(q!=null)return q
q=H.eR(a)
if(q!=null)return q
if(typeof a=="function")return C.u
t=Object.getPrototypeOf(a)
if(t==null)return C.h
if(t===Object.prototype)return C.h
if(typeof r=="function"){Object.defineProperty(r,J.cC(),{value:C.d,enumerable:false,writable:true,configurable:true})
return C.d}return C.d},
cC:function(){var t=$.cM
return t==null?$.cM=v.getIsolateTag("_$dart_js"):t},
bW:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.a0.prototype
return J.aq.prototype}if(typeof a=="string")return J.P.prototype
if(a==null)return J.a1.prototype
if(typeof a=="boolean")return J.b2.prototype
if(a.constructor==Array)return J.C.prototype
if(typeof a!="object"){if(typeof a=="function")return J.D.prototype
return a}if(a instanceof P.j)return a
return J.ck(a)},
eJ:function(a){if(typeof a=="string")return J.P.prototype
if(a==null)return a
if(a.constructor==Array)return J.C.prototype
if(typeof a!="object"){if(typeof a=="function")return J.D.prototype
return a}if(a instanceof P.j)return a
return J.ck(a)},
eK:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.D.prototype
return a}if(a instanceof P.j)return a
return J.ck(a)},
dr:function(a,b,c,d){return J.eK(a).a4(a,b,c,d)},
cr:function(a){return J.eJ(a).gp(a)},
aP:function(a){return J.bW(a).h(a)},
p:function p(){},
b2:function b2(){},
a1:function a1(){},
L:function L(){},
av:function av(){},
a5:function a5(){},
D:function D(){},
C:function C(){},
b3:function b3(){},
ai:function ai(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
a2:function a2(){},
a0:function a0(){},
aq:function aq(){},
P:function P(){}},P={
dI:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.eC()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.aO(new P.bq(r),1)).observe(t,{childList:true})
return new P.bp(r,t,s)}else if(self.setImmediate!=null)return P.eD()
return P.eE()},
dJ:function(a){self.scheduleImmediate(H.aO(new P.br(a),0))},
dK:function(a){self.setImmediate(H.aO(new P.bs(a),0))},
dL:function(a){P.ca(C.p,a)},
ca:function(a,b){var t=C.c.A(a.a,1000)
return P.dR(t<0?0:t,b)},
dR:function(a,b){var t=new P.bM()
t.a3(a,b)
return t},
ep:function(a){return new P.aF(new P.l($.f,a.k("l<0>")),a.k("aF<0>"))},
e8:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
e5:function(a,b){P.e9(a,b)},
e7:function(a,b){var t,s=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.a5(s)
else{t=b.a
if(b.$ti.k("y<1>").b(s))t.N(s)
else t.P(s)}},
e6:function(a,b){var t=H.V(a),s=H.N(a),r=b.b,q=b.a
if(r)q.u(t,s)
else q.a6(t,s)},
e9:function(a,b){var t,s,r=new P.bP(b),q=new P.bQ(b)
if(a instanceof P.l)a.T(r,q,u.z)
else{t=u.z
if(u.c.b(a))a.K(r,q,t)
else{s=new P.l($.f,u.d)
s.a=4
s.c=a
s.T(r,q,t)}}},
eA:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
return $.f.Z(new P.bT(t))},
dD:function(a,b){var t,s=!b.b(null)
if(s)throw H.d(P.cs(null,"computation","The type parameter is not nullable"))
t=new P.l($.f,b.k("l<0>"))
P.dH(a,new P.b1(null,t,b))
return t},
cL:function(a,b){var t,s,r
b.a=1
try{a.K(new P.bz(b),new P.bA(b),u.P)}catch(r){t=H.V(r)
s=H.N(r)
P.eV(new P.bB(b,t,s))}},
by:function(a,b){var t,s
for(;t=a.a,t===2;)a=a.c
if(t>=4){s=b.v()
b.a=a.a
b.c=a.c
P.R(b,s)}else{s=b.c
b.a=2
b.c=a
a.S(s)}},
R:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f={},e=f.a=a
for(t=u.c;!0;){s={}
r=e.a===8
if(b==null){if(r){t=e.c
P.bR(g,g,e.b,t.a,t.b)}return}s.a=b
q=b.a
for(e=b;q!=null;e=q,q=p){e.a=null
P.R(f.a,e)
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
if(l){P.bR(g,g,o.b,n.a,n.b)
return}j=$.f
if(j!==k)$.f=k
else j=g
e=e.c
if((e&15)===8)new P.bG(s,f,r).$0()
else if(m){if((e&1)!==0)new P.bF(s,n).$0()}else if((e&2)!==0)new P.bE(f,s).$0()
if(j!=null)$.f=j
e=s.c
if(t.b(e)){i=s.a.b
if(e.a>=4){h=i.c
i.c=null
b=i.w(h)
i.a=e.a
i.c=e.c
f.a=e
continue}else P.by(e,i)
return}}i=s.a.b
h=i.c
i.c=null
b=i.w(h)
e=s.b
o=s.c
if(!e){i.a=4
i.c=o}else{i.a=8
i.c=o}f.a=i
e=i}},
er:function(a,b){if(u.Q.b(a))return b.Z(a)
if(u.v.b(a))return a
throw H.d(P.cs(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
eq:function(){var t,s
for(t=$.S;t!=null;t=$.S){$.ad=null
s=t.b
$.S=s
if(s==null)$.ac=null
t.a.$0()}},
ev:function(){$.ch=!0
try{P.eq()}finally{$.ad=null
$.ch=!1
if($.S!=null)$.cq().$1(P.d3())}},
d1:function(a){var t=new P.aG(a),s=$.ac
if(s==null){$.S=$.ac=t
if(!$.ch)$.cq().$1(P.d3())}else $.ac=s.b=t},
eu:function(a){var t,s,r,q=$.S
if(q==null){P.d1(a)
$.ad=$.ac
return}t=new P.aG(a)
s=$.ad
if(s==null){t.b=q
$.S=$.ad=t}else{r=s.b
t.b=r
$.ad=s.b=t
if(r==null)$.ac=t}},
eV:function(a){var t=null,s=$.f
if(C.a===s){P.T(t,t,C.a,a)
return}P.T(t,t,s,s.H(a))},
fc:function(a){P.ct(a,"stream")
return new P.aK()},
dH:function(a,b){var t=$.f
if(t===C.a)return P.ca(a,b)
return P.ca(a,t.H(b))},
aT:function(a,b){var t=b==null?P.dt(a):b
P.ct(a,"error")
return new P.ak(a,t)},
dt:function(a){var t
if(u.C.b(a)){t=a.gD()
if(t!=null)return t}return C.o},
bR:function(a,b,c,d,e){P.eu(new P.bS(d,e))},
d_:function(a,b,c,d){var t,s=$.f
if(s===c)return d.$0()
$.f=c
t=s
try{s=d.$0()
return s}finally{$.f=t}},
d0:function(a,b,c,d,e){var t,s=$.f
if(s===c)return d.$1(e)
$.f=c
t=s
try{s=d.$1(e)
return s}finally{$.f=t}},
es:function(a,b,c,d,e,f){var t,s=$.f
if(s===c)return d.$2(e,f)
$.f=c
t=s
try{s=d.$2(e,f)
return s}finally{$.f=t}},
T:function(a,b,c,d){var t=C.a!==c
if(t)d=!(!t||!1)?c.H(d):c.ad(d,u.H)
P.d1(d)},
bq:function bq(a){this.a=a},
bp:function bp(a,b,c){this.a=a
this.b=b
this.c=c},
br:function br(a){this.a=a},
bs:function bs(a){this.a=a},
bM:function bM(){},
bN:function bN(a,b){this.a=a
this.b=b},
aF:function aF(a,b){this.a=a
this.b=!1
this.$ti=b},
bP:function bP(a){this.a=a},
bQ:function bQ(a){this.a=a},
bT:function bT(a){this.a=a},
b1:function b1(a,b,c){this.a=a
this.b=b
this.c=c},
a6:function a6(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d},
l:function l(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
bv:function bv(a,b){this.a=a
this.b=b},
bD:function bD(a,b){this.a=a
this.b=b},
bz:function bz(a){this.a=a},
bA:function bA(a){this.a=a},
bB:function bB(a,b,c){this.a=a
this.b=b
this.c=c},
bx:function bx(a,b){this.a=a
this.b=b},
bC:function bC(a,b){this.a=a
this.b=b},
bw:function bw(a,b,c){this.a=a
this.b=b
this.c=c},
bG:function bG(a,b,c){this.a=a
this.b=b
this.c=c},
bH:function bH(a){this.a=a},
bF:function bF(a,b){this.a=a
this.b=b},
bE:function bE(a,b){this.a=a
this.b=b},
aG:function aG(a){this.a=a
this.b=null},
az:function az(){},
aK:function aK(){},
ak:function ak(a,b){this.a=a
this.b=b},
bO:function bO(){},
bS:function bS(a,b){this.a=a
this.b=b},
bI:function bI(){},
bK:function bK(a,b,c){this.a=a
this.b=b
this.c=c},
bJ:function bJ(a,b){this.a=a
this.b=b},
bL:function bL(a,b,c){this.a=a
this.b=b
this.c=c},
dC:function(a){if(a instanceof H.O)return a.h(0)
return"Instance of '"+H.b6(a)+"'"},
dG:function(a,b,c){var t,s=new J.ai(b,b.length)
if(!s.I())return a
t=H.eg(s).c
if(c.length===0){do a+=H.o(t.a(s.d))
while(s.I())}else{a+=H.o(t.a(s.d))
for(;s.I();)a=a+c+H.o(t.a(s.d))}return a},
b_:function(a){if(typeof a=="number"||H.cX(a)||null==a)return J.aP(a)
if(typeof a=="string")return JSON.stringify(a)
return P.dC(a)},
aS:function(a){return new P.aj(a)},
ds:function(a){return new P.B(!1,null,null,a)},
cs:function(a,b,c){return new P.B(!0,a,b,c)},
ct:function(a,b){return a},
aE:function(a){return new P.aD(a)},
cJ:function(a){return new P.aB(a)},
cz:function(a){return new P.am(a)},
Z:function Z(a){this.a=a},
aY:function aY(){},
aZ:function aZ(){},
e:function e(){},
aj:function aj(a){this.a=a},
aA:function aA(){},
au:function au(){},
B:function B(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ao:function ao(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aD:function aD(a){this.a=a},
aB:function aB(a){this.a=a},
am:function am(a){this.a=a},
a4:function a4(){},
an:function an(a){this.a=a},
bu:function bu(a){this.a=a},
k:function k(){},
j:function j(){},
aL:function aL(){},
bf:function bf(a){this.a=a},
cB:function(a,b,c){var t,s
if(P.en(a))return b+"..."+c
t=new P.bf(b)
$.af.push(a)
try{s=t
s.a=P.dG(s.a,a,", ")}finally{if(0>=$.af.length)return H.cm($.af,-1)
$.af.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
en:function(a){var t,s
for(t=$.af.length,s=0;s<t;++s)if(a===$.af[s])return!0
return!1}},W={
dM:function(a,b,c,d){var t=W.eB(new W.bt(c),u.B),s=t!=null
if(s&&!0)if(s)J.dr(a,b,t,!1)
return new W.aI(a,b,t,!1)},
eB:function(a,b){var t=$.f
if(t===C.a)return a
return t.ae(a,b)},
c:function c(){},
aQ:function aQ(){},
aR:function aR(){},
W:function W(){},
Y:function Y(){},
aW:function aW(){},
b:function b(){},
a:function a(){},
K:function K(){},
b0:function b0(){},
r:function r(){},
Q:function Q(){},
bd:function bd(){},
u:function u(){},
c7:function c7(a){this.$ti=a},
aI:function aI(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
bt:function bt(a){this.a=a}},M={
c6:function(a,b,c){return new M.m(a,b,c)},
cA:function(a,b,c,d){return new M.aV(a,b,c,d)},
d7:function(){var t,s={},r=document,q=u.E.a(r.querySelector("#dart-canvas")),p=r.querySelector("#dart-info")
p.toString
t=u.o.a(r.querySelector("#dart-button"))
s.a=0
W.dM(t,"click",new M.c0(s,p,q,256,256,[],1,t),!1)},
i:function i(a,b,c){this.a=a
this.b=b
this.c=c},
m:function m(a,b,c){this.a=a
this.b=b
this.c=c},
aU:function aU(){},
aX:function aX(a,b,c){this.a=a
this.b=b
this.c=c},
X:function X(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a3:function a3(a,b){this.a=a
this.b=b},
ap:function ap(a,b,c){this.a=a
this.b=b
this.c=c},
E:function E(a,b){this.a=a
this.b=b},
bc:function bc(a,b,c){this.a=a
this.b=b
this.c=c},
ay:function ay(a,b,c){this.b=a
this.c=b
this.d=c},
b5:function b5(a,b,c){this.a=a
this.b=b
this.c=c},
bg:function bg(){},
bh:function bh(){},
bi:function bi(){},
bj:function bj(){},
bk:function bk(){},
bl:function bl(){},
aV:function aV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b7:function b7(){},
b8:function b8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b9:function b9(a,b){this.a=a
this.b=b},
ba:function ba(a){this.a=a},
bb:function bb(a){this.a=a},
c0:function c0(a,b,c,d,e,f,g,h){var _=this
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
H.c8.prototype={}
J.p.prototype={
h:function(a){return"Instance of '"+H.b6(a)+"'"}}
J.b2.prototype={
h:function(a){return String(a)}}
J.a1.prototype={
h:function(a){return"null"},
$ik:1}
J.L.prototype={
h:function(a){return String(a)}}
J.av.prototype={}
J.a5.prototype={}
J.D.prototype={
h:function(a){var t=a[$.dd()]
if(t==null)return this.a2(a)
return"JavaScript function for "+J.aP(t)}}
J.C.prototype={
af:function(a,b,c){var t,s,r=a.length
for(t=b,s=0;s<r;++s){t=c.$2(t,a[s])
if(a.length!==r)throw H.d(P.cz(a))}return t},
ag:function(a,b,c){return this.af(a,b,c,u.z)},
h:function(a){return P.cB(a,"[","]")},
gp:function(a){return a.length}}
J.b3.prototype={}
J.ai.prototype={
I:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.d(H.eW(r))
t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0}}
J.a2.prototype={
L:function(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw H.d(P.aE(""+a+".toInt()"))},
B:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.d(P.aE(""+a+".floor()"))},
al:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.aE(""+a+".round()"))},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
M:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
A:function(a,b){return(a|0)===a?a/b|0:this.ab(a,b)},
ab:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.d(P.aE("Result of truncating division is "+H.o(t)+": "+H.o(a)+" ~/ "+b))},
aa:function(a,b){var t
if(a>0)t=this.a9(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
a9:function(a,b){return b>31?0:a>>>b},
$iw:1}
J.a0.prototype={$iv:1}
J.aq.prototype={}
J.P.prototype={
i:function(a,b){return a+b},
h:function(a){return a},
gp:function(a){return a.length},
$iF:1}
H.as.prototype={
h:function(a){var t="LateInitializationError: "+this.a
return t}}
H.bn.prototype={
l:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
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
H.at.prototype={
h:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.ar.prototype={
h:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+s.a
t=s.c
if(t==null)return r+q+"' ("+s.a+")"
return r+q+"' on '"+t+"' ("+s.a+")"}}
H.aC.prototype={
h:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.b4.prototype={
h:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.a_.prototype={}
H.a7.prototype={
h:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$iM:1}
H.O.prototype={
h:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.dc(s==null?"unknown":s)+"'"},
gav:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.bm.prototype={}
H.be.prototype={
h:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.dc(t)+"'"}}
H.al.prototype={
h:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.o(this.d)+"' of "+("Instance of '"+H.b6(t)+"'")}}
H.ax.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.bX.prototype={
$1:function(a){return this.a(a)},
$S:2}
H.bY.prototype={
$2:function(a,b){return this.a(a,b)},
$S:8}
H.bZ.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.t.prototype={
k:function(a){return H.aN(v.typeUniverse,this,a)},
aw:function(a){return H.e0(v.typeUniverse,this,a)}}
H.aJ.prototype={}
H.aH.prototype={
h:function(a){return this.a}}
H.a8.prototype={}
P.bq.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:4}
P.bp.prototype={
$1:function(a){var t,s
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:10}
P.br.prototype={
$0:function(){this.a.$0()},
$S:5}
P.bs.prototype={
$0:function(){this.a.$0()},
$S:5}
P.bM.prototype={
a3:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.aO(new P.bN(this,b),0),a)
else throw H.d(P.aE("`setTimeout()` not found."))}}
P.bN.prototype={
$0:function(){this.b.$0()},
$S:0}
P.aF.prototype={}
P.bP.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:11}
P.bQ.prototype={
$2:function(a,b){this.a.$2(1,new H.a_(a,b))},
$S:12}
P.bT.prototype={
$2:function(a,b){this.a(a,b)},
$S:13}
P.b1.prototype={
$0:function(){this.b.O(this.c.a(null))},
$S:0}
P.a6.prototype={
ai:function(a){if((this.c&15)!==6)return!0
return this.b.b.J(this.d,a.a)},
ah:function(a){var t=this.e,s=a.a,r=this.b.b
if(u.Q.b(t))return r.an(t,s,a.b)
else return r.J(t,s)}}
P.l.prototype={
K:function(a,b,c){var t,s=$.f
if(s!==C.a)b=b!=null?P.er(b,s):b
t=new P.l(s,c.k("l<0>"))
this.E(new P.a6(t,b==null?1:3,a,b))
return t},
at:function(a,b){return this.K(a,null,b)},
T:function(a,b,c){var t=new P.l($.f,c.k("l<0>"))
this.E(new P.a6(t,19,a,b))
return t},
E:function(a){var t,s=this,r=s.a
if(r<=1){a.a=s.c
s.c=a}else{if(r===2){r=s.c
t=r.a
if(t<4){r.E(a)
return}s.a=t
s.c=r.c}P.T(null,null,s.b,new P.bv(s,a))}},
S:function(a){var t,s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
t=n.a
if(t<=1){s=n.c
n.c=a
if(s!=null){r=a.a
for(q=a;r!=null;q=r,r=p)p=r.a
q.a=s}}else{if(t===2){t=n.c
o=t.a
if(o<4){t.S(a)
return}n.a=o
n.c=t.c}m.a=n.w(a)
P.T(null,null,n.b,new P.bD(m,n))}},
v:function(){var t=this.c
this.c=null
return this.w(t)},
w:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
O:function(a){var t,s=this,r=s.$ti
if(r.k("y<1>").b(a))if(r.b(a))P.by(a,s)
else P.cL(a,s)
else{t=s.v()
s.a=4
s.c=a
P.R(s,t)}},
P:function(a){var t=this,s=t.v()
t.a=4
t.c=a
P.R(t,s)},
u:function(a,b){var t=this,s=t.v(),r=P.aT(a,b)
t.a=8
t.c=r
P.R(t,s)},
a5:function(a){if(this.$ti.k("y<1>").b(a)){this.N(a)
return}this.a7(a)},
a7:function(a){this.a=1
P.T(null,null,this.b,new P.bx(this,a))},
N:function(a){var t=this
if(t.$ti.b(a)){if(a.a===8){t.a=1
P.T(null,null,t.b,new P.bC(t,a))}else P.by(a,t)
return}P.cL(a,t)},
a6:function(a,b){this.a=1
P.T(null,null,this.b,new P.bw(this,a,b))},
$iy:1}
P.bv.prototype={
$0:function(){P.R(this.a,this.b)},
$S:0}
P.bD.prototype={
$0:function(){P.R(this.b,this.a.a)},
$S:0}
P.bz.prototype={
$1:function(a){var t=this.a
t.a=0
t.O(a)},
$S:4}
P.bA.prototype={
$2:function(a,b){this.a.u(a,b)},
$S:14}
P.bB.prototype={
$0:function(){this.a.u(this.b,this.c)},
$S:0}
P.bx.prototype={
$0:function(){this.a.P(this.b)},
$S:0}
P.bC.prototype={
$0:function(){P.by(this.b,this.a)},
$S:0}
P.bw.prototype={
$0:function(){this.a.u(this.b,this.c)},
$S:0}
P.bG.prototype={
$0:function(){var t,s,r,q,p,o,n=this,m=null
try{r=n.a.a
m=r.b.b.a_(r.d)}catch(q){t=H.V(q)
s=H.N(q)
r=n.c&&n.b.a.c.a===t
p=n.a
if(r)p.c=n.b.a.c
else p.c=P.aT(t,s)
p.b=!0
return}if(m instanceof P.l&&m.a>=4){if(m.a===8){r=n.a
r.c=m.c
r.b=!0}return}if(u.c.b(m)){o=n.b.a
r=n.a
r.c=m.at(new P.bH(o),u.z)
r.b=!1}},
$S:0}
P.bH.prototype={
$1:function(a){return this.a},
$S:15}
P.bF.prototype={
$0:function(){var t,s,r,q,p
try{r=this.a
q=r.a
r.c=q.b.b.J(q.d,this.b)}catch(p){t=H.V(p)
s=H.N(p)
r=this.a
r.c=P.aT(t,s)
r.b=!0}},
$S:0}
P.bE.prototype={
$0:function(){var t,s,r,q,p,o,n=this
try{t=n.a.a.c
q=n.b
if(q.a.ai(t)&&q.a.e!=null){q.c=q.a.ah(t)
q.b=!1}}catch(p){s=H.V(p)
r=H.N(p)
q=n.a.a.c
o=n.b
if(q.a===s)o.c=q
else o.c=P.aT(s,r)
o.b=!0}},
$S:0}
P.aG.prototype={}
P.az.prototype={}
P.aK.prototype={}
P.ak.prototype={
h:function(a){return H.o(this.a)},
$ie:1,
gD:function(){return this.b}}
P.bO.prototype={}
P.bS.prototype={
$0:function(){var t=H.d(this.a)
t.stack=this.b.h(0)
throw t},
$S:0}
P.bI.prototype={
ap:function(a){var t,s,r,q=null
try{if(C.a===$.f){a.$0()
return}P.d_(q,q,this,a)}catch(r){t=H.V(r)
s=H.N(r)
P.bR(q,q,this,t,s)}},
ar:function(a,b){var t,s,r,q=null
try{if(C.a===$.f){a.$1(b)
return}P.d0(q,q,this,a,b)}catch(r){t=H.V(r)
s=H.N(r)
P.bR(q,q,this,t,s)}},
as:function(a,b){return this.ar(a,b,u.z)},
ad:function(a,b){return new P.bK(this,a,b)},
H:function(a){return new P.bJ(this,a)},
ae:function(a,b){return new P.bL(this,a,b)},
am:function(a){if($.f===C.a)return a.$0()
return P.d_(null,null,this,a)},
a_:function(a){return this.am(a,u.z)},
aq:function(a,b){if($.f===C.a)return a.$1(b)
return P.d0(null,null,this,a,b)},
J:function(a,b){return this.aq(a,b,u.z,u.z)},
ao:function(a,b,c){if($.f===C.a)return a.$2(b,c)
return P.es(null,null,this,a,b,c)},
an:function(a,b,c){return this.ao(a,b,c,u.z,u.z,u.z)},
aj:function(a){return a},
Z:function(a){return this.aj(a,u.z,u.z,u.z)}}
P.bK.prototype={
$0:function(){return this.a.a_(this.b)},
$S:function(){return this.c.k("0()")}}
P.bJ.prototype={
$0:function(){return this.a.ap(this.b)},
$S:0}
P.bL.prototype={
$1:function(a){return this.a.as(this.b,a)},
$S:function(){return this.c.k("~(0)")}}
P.Z.prototype={
h:function(a){var t,s,r,q=new P.aZ(),p=this.a
if(p<0)return"-"+new P.Z(0-p).h(0)
t=q.$1(C.c.A(p,6e7)%60)
s=q.$1(C.c.A(p,1e6)%60)
r=new P.aY().$1(p%1e6)
return""+C.c.A(p,36e8)+":"+t+":"+s+"."+r}}
P.aY.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:6}
P.aZ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:6}
P.e.prototype={
gD:function(){return H.N(this.$thrownJsError)}}
P.aj.prototype={
h:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.b_(t)
return"Assertion failed"}}
P.aA.prototype={}
P.au.prototype={
h:function(a){return"Throw of null."}}
P.B.prototype={
gG:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gF:function(){return""},
h:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+o,m=r.gG()+p+n
if(!r.a)return m
t=r.gF()
s=P.b_(r.b)
return m+t+": "+s}}
P.aw.prototype={
gG:function(){return"RangeError"},
gF:function(){return""}}
P.ao.prototype={
gG:function(){return"RangeError"},
gF:function(){if(this.b<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gp:function(a){return this.f}}
P.aD.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.aB.prototype={
h:function(a){var t="UnimplementedError: "+this.a
return t}}
P.am.prototype={
h:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.b_(t)+"."}}
P.a4.prototype={
h:function(a){return"Stack Overflow"},
gD:function(){return null},
$ie:1}
P.an.prototype={
h:function(a){var t="Reading static variable '"+this.a+"' during its initialization"
return t}}
P.bu.prototype={
h:function(a){return"Exception: "+this.a}}
P.k.prototype={
h:function(a){return"null"}}
P.j.prototype={constructor:P.j,$ij:1,
h:function(a){return"Instance of '"+H.b6(this)+"'"},
toString:function(){return this.h(this)}}
P.aL.prototype={
h:function(a){return""},
$iM:1}
P.bf.prototype={
gp:function(a){return this.a.length},
h:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.c.prototype={}
W.aQ.prototype={
h:function(a){return String(a)}}
W.aR.prototype={
h:function(a){return String(a)}}
W.W.prototype={$iW:1}
W.Y.prototype={$iY:1}
W.aW.prototype={
h:function(a){return String(a)}}
W.b.prototype={
h:function(a){return a.localName}}
W.a.prototype={$ia:1}
W.K.prototype={
a4:function(a,b,c,d){return a.addEventListener(b,H.aO(c,1),!1)}}
W.b0.prototype={
gp:function(a){return a.length}}
W.r.prototype={$ir:1}
W.Q.prototype={
h:function(a){var t=a.nodeValue
return t==null?this.a1(a):t}}
W.bd.prototype={
gp:function(a){return a.length}}
W.u.prototype={}
W.c7.prototype={}
W.aI.prototype={}
W.bt.prototype={
$1:function(a){return this.a.$1(a)},
$S:16}
M.i.prototype={
j:function(a,b){return new M.i(b*this.a,b*this.b,b*this.c)},
q:function(a,b){return new M.i(this.a-b.a,this.b-b.b,this.c-b.c)},
i:function(a,b){return new M.i(this.a+b.a,this.b+b.b,this.c+b.c)},
m:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
X:function(){var t=this.a,s=this.b,r=this.c
return Math.sqrt(t*t+s*s+r*r)},
n:function(){var t=this.X()
return this.j(0,t===0?1/0:1/t)},
V:function(a){var t=this.b,s=a.c,r=this.c,q=a.b,p=a.a,o=this.a
return new M.i(t*s-r*q,r*p-o*s,o*q-t*p)}}
M.m.prototype={
C:function(a,b){return new M.m(b*this.a,b*this.b,b*this.c)},
i:function(a,b){return new M.m(this.a+b.a,this.b+b.b,this.c+b.c)},
j:function(a,b){return new M.m(this.a*b.a,this.b*b.b,this.c*b.c)},
au:function(){var t,s,r=new M.aU(),q=r.$1(this.a)
if(typeof q!=="number")return q.j()
q=C.b.L(q*255)
t=r.$1(this.b)
if(typeof t!=="number")return t.j()
t=C.b.L(t*255)
s=r.$1(this.c)
if(typeof s!=="number")return s.j()
return new M.aX(q,t,C.b.L(s*255))}}
M.aU.prototype={
$1:function(a){return a>1?1:a},
$S:17}
M.aX.prototype={}
M.X.prototype={}
M.a3.prototype={}
M.ap.prototype={}
M.E.prototype={}
M.bc.prototype={}
M.ay.prototype={
Y:function(a){return a.q(0,this.c).n()},
W:function(a){var t,s,r=this.c.q(0,a.a),q=r.m(a.b)
if(q>=0){t=this.b-(r.m(r)-q*q)
s=t>=0?q-Math.sqrt(t):0}else s=0
if(s===0)return null
else return new M.ap(this,a,s)},
gt:function(){return this.d}}
M.b5.prototype={
W:function(a){var t=this.a,s=t.m(a.b)
if(s>0)return null
else return new M.ap(this,a,(t.m(a.a)+this.b)/-s)},
Y:function(a){return this.a},
gt:function(){return this.c}}
M.bg.prototype={
$1:function(a){return $.c4()},
$S:1}
M.bh.prototype={
$1:function(a){return $.cp()},
$S:1}
M.bi.prototype={
$1:function(a){return 0.7},
$S:7}
M.bj.prototype={
$1:function(a){if(C.c.M(C.b.B(a.c)+C.b.B(a.a),2)!==0)return $.c4()
else return $.c2()},
$S:1}
M.bk.prototype={
$1:function(a){return $.c4()},
$S:1}
M.bl.prototype={
$1:function(a){if(C.c.M(C.b.B(a.c)+C.b.B(a.a),2)!==0)return 0.1
else return 0.7},
$S:7}
M.aV.prototype={}
M.b7.prototype={
R:function(a,b){var t,s,r,q,p
for(t=b.a,s=1/0,r=null,q=0;q<3;++q){p=t[q].W(a)
if(p!=null&&p.c<s){s=p.c
r=p}}return r},
ac:function(a,b){var t=this.R(a,b)
if(t!=null)return t.c
else return null},
U:function(a,b,c){var t,s,r,q,p,o,n=this.R(a,b)
if(n==null)return $.co()
else{t=n.b
s=t.b
r=s.j(0,n.c).i(0,t.a)
t=n.a
q=t.Y(r)
p=s.q(0,q.j(0,q.m(s)).j(0,2))
o=$.co().i(0,this.a8(t,r,q,p,b))
return o.i(0,c>=5?$.cp():this.U(new M.a3(r,p),b,c+1).C(0,t.gt().c.$1(r)))}},
a8:function(a,b,c,d,e){return C.r.ag(e.b,$.c3(),new M.b8(this,b,e,c,d,a))},
ak:function(a,b,c,d){var t,s,r,q,p,o,n,m=new M.b9(c,d)
for(t=a.c,s=t.a,r=0;r<d;r=q)for(q=r+1,p=0;p<c;p=n){o=this.U(new M.a3(s,m.$3(p,r,t)),a,0).au()
b.fillStyle="rgb("+o.a+", "+o.b+", "+o.c+")"
n=p+1
b.fillRect(p,r,n,q)}}}
M.b8.prototype={
$2:function(a,b){var t,s,r,q,p,o=this,n=o.b,m=b.a.q(0,n),l=m.n(),k=o.a.ac(new M.a3(n,l),o.c)
if(k==null?!1:k<=m.X())return a
else{t=l.m(o.d)
s=t>0?b.b.C(0,t):$.c3()
r=l.m(o.e.n())
q=r>0?b.b.C(0,Math.pow(r,o.f.gt().d)):$.c3()
p=o.f
return a.i(0,p.gt().a.$1(n).j(0,s)).i(0,p.gt().b.$1(n).j(0,q))}},
$S:18}
M.b9.prototype={
$3:function(a,b,c){return c.b.i(0,c.c.j(0,new M.ba(this.a).$1(a))).i(0,c.d.j(0,new M.bb(this.b).$1(b))).n()},
$S:19}
M.ba.prototype={
$1:function(a){var t=this.a
return(a-t/2)/2/t},
$S:2}
M.bb.prototype={
$1:function(a){var t=this.a
return-(a-t/2)/2/t},
$S:2}
M.c0.prototype={
$1:function(a){return this.a0(a)},
a0:function(a){var t=0,s=P.ep(u.H),r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$$1=P.eA(function(b,c){if(b===1)return P.e6(c,s)
while(true)switch(t){case 0:g=r.b
g.textContent="Rendering..."
q=r.c.getContext("2d")
p=r.d
o=r.e
q.clearRect(0,0,p,o)
t=2
return P.e5(P.dD(new P.Z(1e5),u.z),$async$$1)
case 2:n=window.performance.now()
m=$.de()
l=$.df()
k=new M.i(3,2,4)
j=new M.i(-1,0.5,0).q(0,k).n()
i=j.V(new M.i(0,-1,0)).n().j(0,1.5)
new M.b7().ak(new M.bc([new M.b5(new M.i(0,1,0),0,m),new M.ay(1,new M.i(0,1,-0.25),l),new M.ay(0.25,new M.i(-1,0.5,1.5),l)],[new M.E(new M.i(-2,2.5,0),new M.m(0.49,0.07,0.07)),new M.E(new M.i(1.5,2.5,1.5),new M.m(0.07,0.07,0.49)),new M.E(new M.i(1.5,2.5,-1.5),new M.m(0.07,0.49,0.071)),new M.E(new M.i(0,3.5,0),new M.m(0.21,0.21,0.35))],new M.X(k,j,i,j.V(i).n().j(0,1.5))),q,p,o)
h=window.performance.now()-n
g.textContent="Rendered in "+C.b.al(h)+" ms."
g=r.f
g.push(h)
H.eT(P.cB(g,"[","]"))
if(++r.a.a<r.r)r.x.click()
return P.e7(null,s)}})
return P.e8($async$$1,s)},
$S:20};(function aliases(){var t=J.p.prototype
t.a1=t.h
t=J.L.prototype
t.a2=t.h})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0
t(P,"eC","dJ",3)
t(P,"eD","dK",3)
t(P,"eE","dL",3)
s(P,"d3","ev",0)})();(function inheritance(){var t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.j,null)
s(P.j,[H.c8,J.p,J.ai,P.e,H.bn,H.b4,H.a_,H.a7,H.O,H.t,H.aJ,P.bM,P.aF,P.a6,P.l,P.aG,P.az,P.aK,P.ak,P.bO,P.Z,P.a4,P.bu,P.k,P.aL,P.bf,W.c7,M.i,M.m,M.aX,M.X,M.a3,M.ap,M.E,M.bc,M.ay,M.b5,M.aV,M.b7])
s(J.p,[J.b2,J.a1,J.L,J.C,J.a2,J.P,W.K,W.aW,W.a])
s(J.L,[J.av,J.a5,J.D])
t(J.b3,J.C)
s(J.a2,[J.a0,J.aq])
s(P.e,[H.as,P.aA,H.ar,H.aC,H.ax,H.aH,P.aj,P.au,P.B,P.aD,P.aB,P.am,P.an])
t(H.at,P.aA)
s(H.O,[H.bm,H.bX,H.bY,H.bZ,P.bq,P.bp,P.br,P.bs,P.bN,P.bP,P.bQ,P.bT,P.b1,P.bv,P.bD,P.bz,P.bA,P.bB,P.bx,P.bC,P.bw,P.bG,P.bH,P.bF,P.bE,P.bS,P.bK,P.bJ,P.bL,P.aY,P.aZ,W.bt,M.aU,M.bg,M.bh,M.bi,M.bj,M.bk,M.bl,M.b8,M.b9,M.ba,M.bb,M.c0])
s(H.bm,[H.be,H.al])
t(H.a8,H.aH)
t(P.bI,P.bO)
s(P.B,[P.aw,P.ao])
t(W.Q,W.K)
t(W.b,W.Q)
t(W.c,W.b)
s(W.c,[W.aQ,W.aR,W.W,W.Y,W.b0,W.bd])
t(W.u,W.a)
t(W.r,W.u)
t(W.aI,P.az)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{v:"int",bV:"double",w:"num",F:"String",eF:"bool",k:"Null",fa:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","m(i)","@(@)","~(~())","k(@)","k()","F(v)","bV(i)","@(@,F)","@(F)","k(~())","~(@)","k(@,M)","~(v,@)","k(j,M)","l<@>(@)","~(a)","w(w)","m(m,E)","i(v,v,X)","y<~>(r)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.e_(v.typeUniverse,JSON.parse('{"av":"L","a5":"L","D":"L","f_":"a","f7":"a","fb":"r","f5":"u","a1":{"k":[]},"a2":{"w":[]},"a0":{"v":[],"w":[]},"aq":{"w":[]},"P":{"F":[]},"as":{"e":[]},"at":{"e":[]},"ar":{"e":[]},"aC":{"e":[]},"a7":{"M":[]},"ax":{"e":[]},"aH":{"e":[]},"a8":{"e":[]},"l":{"y":["1"]},"ak":{"e":[]},"bV":{"w":[]},"v":{"w":[]},"aj":{"e":[]},"aA":{"e":[]},"au":{"e":[]},"B":{"e":[]},"aw":{"e":[]},"ao":{"e":[]},"aD":{"e":[]},"aB":{"e":[]},"am":{"e":[]},"a4":{"e":[]},"an":{"e":[]},"aL":{"M":[]},"r":{"a":[]},"u":{"a":[]}}'))
H.dZ(v.typeUniverse,JSON.parse('{"C":1,"b3":1,"ai":1,"a6":2,"az":1,"aK":1,"aI":1}'))
0
var u=(function rtii(){var t=H.eI
return{o:t("W"),E:t("Y"),C:t("e"),B:t("a"),Z:t("f8"),c:t("y<@>"),b:t("C<@>"),T:t("a1"),g:t("D"),P:t("k"),K:t("j"),N:t("F"),D:t("a5"),d:t("l<@>"),y:t("eF"),i:t("bV"),z:t("@"),v:t("@(j)"),Q:t("@(j,M)"),S:t("v"),A:t("0&*"),_:t("j*"),O:t("y<k>?"),X:t("j?"),n:t("w"),H:t("~")}})();(function constants(){C.q=J.p.prototype
C.r=J.C.prototype
C.c=J.a0.prototype
C.b=J.a2.prototype
C.t=J.P.prototype
C.u=J.D.prototype
C.h=J.av.prototype
C.d=J.a5.prototype
C.e=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.i=function() {
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
C.n=function(getTagFallback) {
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
C.j=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.k=function(hooks) {
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
C.m=function(hooks) {
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
C.l=function(hooks) {
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

C.a=new P.bI()
C.o=new P.aL()
C.p=new P.Z(0)})();(function staticFields(){$.cM=null
$.x=0
$.cw=null
$.cv=null
$.d4=null
$.d2=null
$.d9=null
$.bU=null
$.c_=null
$.cl=null
$.S=null
$.ac=null
$.ad=null
$.ch=!1
$.f=C.a
$.af=[]})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal,s=hunkHelpers.lazy
t($,"f6","dd",function(){return H.eL("_$dart_dartClosure")})
t($,"ff","dg",function(){return H.z(H.bo({
toString:function(){return"$receiver$"}}))})
t($,"fg","dh",function(){return H.z(H.bo({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"fh","di",function(){return H.z(H.bo(null))})
t($,"fi","dj",function(){return H.z(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"fl","dm",function(){return H.z(H.bo(void 0))})
t($,"fm","dn",function(){return H.z(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"fk","dl",function(){return H.z(H.cI(null))})
t($,"fj","dk",function(){return H.z(function(){try{null.$method$}catch(r){return r.message}}())})
t($,"fo","dq",function(){return H.z(H.cI(void 0))})
t($,"fn","dp",function(){return H.z(function(){try{(void 0).$method$}catch(r){return r.message}}())})
t($,"fp","cq",function(){return P.dI()})
s($,"f4","c4",function(){return M.c6(1,1,1)})
s($,"f3","cp",function(){return M.c6(0.5,0.5,0.5)})
s($,"f1","c2",function(){return M.c6(0,0,0)})
s($,"f0","co",function(){return $.c2()})
s($,"f2","c3",function(){return $.c2()})
t($,"fe","df",function(){return M.cA(new M.bg(),new M.bh(),new M.bi(),250)})
t($,"fd","de",function(){return M.cA(new M.bj(),new M.bk(),new M.bl(),150)})})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasRenderingContext2D:J.p,DOMError:J.p,MediaError:J.p,NavigatorUserMediaError:J.p,OverconstrainedError:J.p,PositionError:J.p,SQLError:J.p,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.aQ,HTMLAreaElement:W.aR,HTMLButtonElement:W.W,HTMLCanvasElement:W.Y,DOMException:W.aW,SVGAElement:W.b,SVGAnimateElement:W.b,SVGAnimateMotionElement:W.b,SVGAnimateTransformElement:W.b,SVGAnimationElement:W.b,SVGCircleElement:W.b,SVGClipPathElement:W.b,SVGDefsElement:W.b,SVGDescElement:W.b,SVGDiscardElement:W.b,SVGEllipseElement:W.b,SVGFEBlendElement:W.b,SVGFEColorMatrixElement:W.b,SVGFEComponentTransferElement:W.b,SVGFECompositeElement:W.b,SVGFEConvolveMatrixElement:W.b,SVGFEDiffuseLightingElement:W.b,SVGFEDisplacementMapElement:W.b,SVGFEDistantLightElement:W.b,SVGFEFloodElement:W.b,SVGFEFuncAElement:W.b,SVGFEFuncBElement:W.b,SVGFEFuncGElement:W.b,SVGFEFuncRElement:W.b,SVGFEGaussianBlurElement:W.b,SVGFEImageElement:W.b,SVGFEMergeElement:W.b,SVGFEMergeNodeElement:W.b,SVGFEMorphologyElement:W.b,SVGFEOffsetElement:W.b,SVGFEPointLightElement:W.b,SVGFESpecularLightingElement:W.b,SVGFESpotLightElement:W.b,SVGFETileElement:W.b,SVGFETurbulenceElement:W.b,SVGFilterElement:W.b,SVGForeignObjectElement:W.b,SVGGElement:W.b,SVGGeometryElement:W.b,SVGGraphicsElement:W.b,SVGImageElement:W.b,SVGLineElement:W.b,SVGLinearGradientElement:W.b,SVGMarkerElement:W.b,SVGMaskElement:W.b,SVGMetadataElement:W.b,SVGPathElement:W.b,SVGPatternElement:W.b,SVGPolygonElement:W.b,SVGPolylineElement:W.b,SVGRadialGradientElement:W.b,SVGRectElement:W.b,SVGScriptElement:W.b,SVGSetElement:W.b,SVGStopElement:W.b,SVGStyleElement:W.b,SVGElement:W.b,SVGSVGElement:W.b,SVGSwitchElement:W.b,SVGSymbolElement:W.b,SVGTSpanElement:W.b,SVGTextContentElement:W.b,SVGTextElement:W.b,SVGTextPathElement:W.b,SVGTextPositioningElement:W.b,SVGTitleElement:W.b,SVGUseElement:W.b,SVGViewElement:W.b,SVGGradientElement:W.b,SVGComponentTransferFunctionElement:W.b,SVGFEDropShadowElement:W.b,SVGMPathElement:W.b,Element:W.b,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Event:W.a,InputEvent:W.a,SubmitEvent:W.a,Performance:W.K,Window:W.K,DOMWindow:W.K,EventTarget:W.K,HTMLFormElement:W.b0,MouseEvent:W.r,DragEvent:W.r,PointerEvent:W.r,WheelEvent:W.r,Document:W.Q,HTMLDocument:W.Q,Node:W.Q,HTMLSelectElement:W.bd,CompositionEvent:W.u,FocusEvent:W.u,KeyboardEvent:W.u,TextEvent:W.u,TouchEvent:W.u,UIEvent:W.u})
hunkHelpers.setOrUpdateLeafTags({CanvasRenderingContext2D:true,DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,Performance:true,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,HTMLDocument:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.d7,[])
else M.d7([])})})()
//# sourceMappingURL=raytracer.dart.js.map
