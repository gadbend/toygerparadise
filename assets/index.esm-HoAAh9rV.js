import{j as e}from"./ui-CnG_p06C.js";import{r as t,R as r}from"./vendor-CLycFUD2.js";import{c as s}from"./index-DKI9W503.js";const a=t.forwardRef((({className:t,...r},a)=>e.jsx("textarea",{className:s("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",t),ref:a,...r})));a.displayName="Textarea";var i=e=>"checkbox"===e.type,n=e=>e instanceof Date,o=e=>null==e;const l=e=>"object"==typeof e;var u=e=>!o(e)&&!Array.isArray(e)&&l(e)&&!n(e),d="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function f(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(d&&(e instanceof Blob||e instanceof FileList)||!r&&!u(e))return e;if(t=r?[]:{},r||(e=>{const t=e.constructor&&e.constructor.prototype;return u(t)&&t.hasOwnProperty("isPrototypeOf")})(e))for(const r in e)e.hasOwnProperty(r)&&(t[r]=f(e[r]));else t=e}return t}var c=e=>Array.isArray(e)?e.filter(Boolean):[],y=e=>void 0===e,m=(e,t,r)=>{if(!t||!u(e))return r;const s=c(t.split(/[,[\].]+?/)).reduce(((e,t)=>o(e)?e:e[t]),e);return y(s)||s===e?y(e[t])?r:e[t]:s},v=e=>"boolean"==typeof e,h=e=>/^\w*$/.test(e),g=e=>c(e.replace(/["|']|\]/g,"").split(/\.|\[/)),p=(e,t,r)=>{let s=-1;const a=h(t)?[t]:g(t),i=a.length,n=i-1;for(;++s<i;){const t=a[s];let i=r;if(s!==n){const r=e[t];i=u(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}if("__proto__"===t)return;e[t]=i,e=e[t]}return e};const b="blur",_="focusout",V="onBlur",A="onChange",F="onSubmit",x="onTouched",w="all",S="max",D="min",k="maxLength",E="minLength",O="pattern",j="required",T="validate";r.createContext(null);var C=e=>u(e)&&!Object.keys(e).length,N=e=>Array.isArray(e)?e:[e];var L=e=>"string"==typeof e,U=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{},B=e=>({isOnSubmit:!e||e===F,isOnBlur:e===V,isOnChange:e===A,isOnAll:e===w,isOnTouch:e===x}),M=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))));const q=(e,t,r,s)=>{for(const a of r||Object.keys(e)){const r=m(e,a);if(r){const{_f:e,...i}=r;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],a)&&!s)break;if(e.ref&&t(e.ref,e.name)&&!s)break;q(i,t)}else u(i)&&q(i,t)}}};var P=(e,t,r)=>{const s=c(m(e,r));return p(s,"root",t[r]),p(e,r,s),e},R=e=>"file"===e.type,I=e=>"function"==typeof e,$=e=>{if(!d)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},H=e=>L(e),W=e=>"radio"===e.type,z=e=>e instanceof RegExp;const G={value:!1,isValid:!1},J={value:!0,isValid:!0};var K=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!y(e[0].attributes.value)?y(e[0].value)||""===e[0].value?J:{value:e[0].value,isValid:!0}:J:G}return G};const Q={isValid:!1,value:null};var X=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),Q):Q;function Y(e,t,r="validate"){if(H(e)||Array.isArray(e)&&e.every(H)||v(e)&&!e)return{type:r,message:H(e)?e:"",ref:t}}var Z=e=>u(e)&&!z(e)?e:{value:e,message:""},ee=async(e,t,r,s,a)=>{const{ref:n,refs:l,required:d,maxLength:f,minLength:c,min:h,max:g,pattern:p,validate:b,name:_,valueAsNumber:V,mount:A,disabled:F}=e._f,x=m(t,_);if(!A||F)return{};const w=l?l[0]:n,N=e=>{s&&w.reportValidity&&(w.setCustomValidity(v(e)?"":e||""),w.reportValidity())},B={},M=W(n),q=i(n),P=M||q,G=(V||R(n))&&y(n.value)&&y(x)||$(n)&&""===n.value||""===x||Array.isArray(x)&&!x.length,J=U.bind(null,_,r,B),Q=(e,t,r,s=k,a=E)=>{const i=e?t:r;B[_]={type:e?s:a,message:i,ref:n,...J(e?s:a,i)}};if(a?!Array.isArray(x)||!x.length:d&&(!P&&(G||o(x))||v(x)&&!x||q&&!K(l).isValid||M&&!X(l).isValid)){const{value:e,message:t}=H(d)?{value:!!d,message:d}:Z(d);if(e&&(B[_]={type:j,message:t,ref:w,...J(j,t)},!r))return N(t),B}if(!(G||o(h)&&o(g))){let e,t;const s=Z(g),a=Z(h);if(o(x)||isNaN(x)){const r=n.valueAsDate||new Date(x),i=e=>new Date((new Date).toDateString()+" "+e),o="time"==n.type,l="week"==n.type;L(s.value)&&x&&(e=o?i(x)>i(s.value):l?x>s.value:r>new Date(s.value)),L(a.value)&&x&&(t=o?i(x)<i(a.value):l?x<a.value:r<new Date(a.value))}else{const r=n.valueAsNumber||(x?+x:x);o(s.value)||(e=r>s.value),o(a.value)||(t=r<a.value)}if((e||t)&&(Q(!!e,s.message,a.message,S,D),!r))return N(B[_].message),B}if((f||c)&&!G&&(L(x)||a&&Array.isArray(x))){const e=Z(f),t=Z(c),s=!o(e.value)&&x.length>+e.value,a=!o(t.value)&&x.length<+t.value;if((s||a)&&(Q(s,e.message,t.message),!r))return N(B[_].message),B}if(p&&!G&&L(x)){const{value:e,message:t}=Z(p);if(z(e)&&!x.match(e)&&(B[_]={type:O,message:t,ref:n,...J(O,t)},!r))return N(t),B}if(b)if(I(b)){const e=Y(await b(x,t),w);if(e&&(B[_]={...e,...J(T,e.message)},!r))return N(e.message),B}else if(u(b)){let e={};for(const s in b){if(!C(e)&&!r)break;const a=Y(await b[s](x,t),w,s);a&&(e={...a,...J(s,a.message)},N(a.message),r&&(B[_]=e))}if(!C(e)&&(B[_]={ref:w,...e},!r))return B}return N(!0),B};function te(e,t){const r=Array.isArray(t)?t:h(t)?[t]:g(t),s=1===r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=y(e)?s++:e[t[s++]];return e}(e,r),a=r.length-1,i=r[a];return s&&delete s[i],0!==a&&(u(s)&&C(s)||Array.isArray(s)&&function(e){for(const t in e)if(e.hasOwnProperty(t)&&!y(e[t]))return!1;return!0}(s))&&te(e,r.slice(0,-1)),e}var re=()=>{let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}},se=e=>o(e)||!l(e);function ae(e,t){if(se(e)||se(t))return e===t;if(n(e)&&n(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(n(r)&&n(e)||u(r)&&u(e)||Array.isArray(r)&&Array.isArray(e)?!ae(r,e):r!==e)return!1}}return!0}var ie=e=>"select-multiple"===e.type,ne=e=>$(e)&&e.isConnected,oe=e=>{for(const t in e)if(I(e[t]))return!0;return!1};function le(e,t={}){const r=Array.isArray(e);if(u(e)||r)for(const s in e)Array.isArray(e[s])||u(e[s])&&!oe(e[s])?(t[s]=Array.isArray(e[s])?[]:{},le(e[s],t[s])):o(e[s])||(t[s]=!0);return t}function ue(e,t,r){const s=Array.isArray(e);if(u(e)||s)for(const a in e)Array.isArray(e[a])||u(e[a])&&!oe(e[a])?y(t)||se(r[a])?r[a]=Array.isArray(e[a])?le(e[a],[]):{...le(e[a])}:ue(e[a],o(t)?{}:t[a],r[a]):r[a]=!ae(e[a],t[a]);return r}var de=(e,t)=>ue(e,t,le(t)),fe=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>y(e)?e:t?""===e?NaN:e?+e:e:r&&L(e)?new Date(e):s?s(e):e;function ce(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return R(t)?t.files:W(t)?X(e.refs).value:ie(t)?[...t.selectedOptions].map((({value:e})=>e)):i(t)?K(e.refs).value:fe(y(t.value)?e.ref.value:t.value,e)}var ye=e=>y(e)?e:z(e)?e.source:u(e)?z(e.value)?e.value.source:e.value:e;function me(e,t,r){const s=m(e,r);if(s||h(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),i=m(t,s),n=m(e,s);if(i&&!Array.isArray(i)&&r!==s)return{name:r};if(n&&n.type)return{name:s,error:n};a.pop()}return{name:r}}const ve={mode:F,reValidateMode:A,shouldFocusError:!0};function he(e={}){let t,r={...ve,...e},s={submitCount:0,isDirty:!1,isLoading:I(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},a={},l=(u(r.defaultValues)||u(r.values))&&f(r.defaultValues||r.values)||{},h=r.shouldUnregister?{}:f(l),g={action:!1,mount:!1,watch:!1},V={mount:new Set,unMount:new Set,array:new Set,watch:new Set},A=0;const F={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={values:re(),array:re(),state:re()},S=B(r.mode),D=B(r.reValidateMode),k=r.criteriaMode===w,E=async e=>{if(F.isValid||e){const e=r.resolver?C((await H()).errors):await z(a,!0);e!==s.isValid&&x.state.next({isValid:e})}},O=(e,t)=>{(F.isValidating||F.validatingFields)&&((e||Array.from(V.mount)).forEach((e=>{e&&(t?p(s.validatingFields,e,t):te(s.validatingFields,e))})),x.state.next({validatingFields:s.validatingFields,isValidating:!C(s.validatingFields)}))},j=(e,t,r,s)=>{const i=m(a,e);if(i){const a=m(h,e,y(r)?m(l,e):r);y(a)||s&&s.defaultChecked||t?p(h,e,t?a:ce(i._f)):K(e,a),g.mount&&E()}},T=(e,t,r,i,n)=>{let o=!1,u=!1;const d={name:e},f=!!(m(a,e)&&m(a,e)._f&&m(a,e)._f.disabled);if(!r||i){F.isDirty&&(u=s.isDirty,s.isDirty=d.isDirty=G(),o=u!==d.isDirty);const r=f||ae(m(l,e),t);u=!(f||!m(s.dirtyFields,e)),r||f?te(s.dirtyFields,e):p(s.dirtyFields,e,!0),d.dirtyFields=s.dirtyFields,o=o||F.dirtyFields&&u!==!r}if(r){const t=m(s.touchedFields,e);t||(p(s.touchedFields,e,r),d.touchedFields=s.touchedFields,o=o||F.touchedFields&&t!==r)}return o&&n&&x.state.next(d),o?d:{}},U=(r,a,i,n)=>{const o=m(s.errors,r),l=F.isValid&&v(a)&&s.isValid!==a;var u;if(e.delayError&&i?(u=()=>((e,t)=>{p(s.errors,e,t),x.state.next({errors:s.errors})})(r,i),t=e=>{clearTimeout(A),A=setTimeout(u,e)},t(e.delayError)):(clearTimeout(A),t=null,i?p(s.errors,r,i):te(s.errors,r)),(i?!ae(o,i):o)||!C(n)||l){const e={...n,...l&&v(a)?{isValid:a}:{},errors:s.errors,name:r};s={...s,...e},x.state.next(e)}},H=async e=>{O(e,!0);const t=await r.resolver(h,r.context,((e,t,r,s)=>{const a={};for(const i of e){const e=m(t,i);e&&p(a,i,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}})(e||V.mount,a,r.criteriaMode,r.shouldUseNativeValidation));return O(e),t},z=async(e,t,a={valid:!0})=>{for(const i in e){const n=e[i];if(n){const{_f:e,...o}=n;if(e){const o=V.array.has(e.name);O([i],!0);const l=await ee(n,h,k,r.shouldUseNativeValidation&&!t,o);if(O([i]),l[e.name]&&(a.valid=!1,t))break;!t&&(m(l,e.name)?o?P(s.errors,l,e.name):p(s.errors,e.name,l[e.name]):te(s.errors,e.name))}o&&await z(o,t,a)}}return a.valid},G=(e,t)=>(e&&t&&p(h,e,t),!ae(le(),l)),J=(e,t,r)=>((e,t,r,s,a)=>L(e)?(s&&t.watch.add(e),m(r,e,a)):Array.isArray(e)?e.map((e=>(s&&t.watch.add(e),m(r,e)))):(s&&(t.watchAll=!0),r))(e,V,{...g.mount?h:y(t)?l:L(e)?{[e]:t}:t},r,t),K=(e,t,r={})=>{const s=m(a,e);let n=t;if(s){const r=s._f;r&&(!r.disabled&&p(h,e,fe(t,r)),n=$(r.ref)&&o(t)?"":t,ie(r.ref)?[...r.ref.options].forEach((e=>e.selected=n.includes(e.value))):r.refs?i(r.ref)?r.refs.length>1?r.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(n)?!!n.find((t=>t===e.value)):n===e.value))):r.refs[0]&&(r.refs[0].checked=!!n):r.refs.forEach((e=>e.checked=e.value===n)):R(r.ref)?r.ref.value="":(r.ref.value=n,r.ref.type||x.values.next({name:e,values:{...h}})))}(r.shouldDirty||r.shouldTouch)&&T(e,n,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&oe(e)},Q=(e,t,r)=>{for(const s in t){const i=t[s],o=`${e}.${s}`,l=m(a,o);!V.array.has(e)&&se(i)&&(!l||l._f)||n(i)?K(o,i,r):Q(o,i,r)}},X=(e,t,r={})=>{const i=m(a,e),n=V.array.has(e),u=f(t);p(h,e,u),n?(x.array.next({name:e,values:{...h}}),(F.isDirty||F.dirtyFields)&&r.shouldDirty&&x.state.next({name:e,dirtyFields:de(l,h),isDirty:G(e,u)})):!i||i._f||o(u)?K(e,u,r):Q(e,u,r),M(e,V)&&x.state.next({...s}),x.values.next({name:g.mount?e:void 0,values:{...h}})},Y=async e=>{g.mount=!0;const n=e.target;let o=n.name,l=!0;const d=m(a,o),f=()=>n.type?ce(d._f):(e=>u(e)&&e.target?i(e.target)?e.target.checked:e.target.value:e)(e),c=e=>{l=Number.isNaN(e)||e===m(h,o,e)};if(d){let i,n;const u=f(),v=e.type===b||e.type===_,g=!((y=d._f).mount&&(y.required||y.min||y.max||y.maxLength||y.minLength||y.pattern||y.validate)||r.resolver||m(s.errors,o)||d._f.deps)||((e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e))(v,m(s.touchedFields,o),s.isSubmitted,D,S),A=M(o,V,v);p(h,o,u),v?(d._f.onBlur&&d._f.onBlur(e),t&&t(0)):d._f.onChange&&d._f.onChange(e);const w=T(o,u,v,!1),j=!C(w)||A;if(!v&&x.values.next({name:o,type:e.type,values:{...h}}),g)return F.isValid&&E(),j&&x.state.next({name:o,...A?{}:w});if(!v&&A&&x.state.next({...s}),r.resolver){const{errors:e}=await H([o]);if(c(u),l){const t=me(s.errors,a,o),r=me(e,a,t.name||o);i=r.error,o=r.name,n=C(e)}}else O([o],!0),i=(await ee(d,h,k,r.shouldUseNativeValidation))[o],O([o]),c(u),l&&(i?n=!1:F.isValid&&(n=await z(a,!0)));l&&(d._f.deps&&oe(d._f.deps),U(o,n,i,w))}var y},Z=(e,t)=>{if(m(s.errors,t)&&e.focus)return e.focus(),1},oe=async(e,t={})=>{let i,n;const o=N(e);if(r.resolver){const t=await(async e=>{const{errors:t}=await H(e);if(e)for(const r of e){const e=m(t,r);e?p(s.errors,r,e):te(s.errors,r)}else s.errors=t;return t})(y(e)?e:o);i=C(t),n=e?!o.some((e=>m(t,e))):i}else e?(n=(await Promise.all(o.map((async e=>{const t=m(a,e);return await z(t&&t._f?{[e]:t}:t)})))).every(Boolean),(n||s.isValid)&&E()):n=i=await z(a);return x.state.next({...!L(e)||F.isValid&&i!==s.isValid?{}:{name:e},...r.resolver||!e?{isValid:i}:{},errors:s.errors}),t.shouldFocus&&!n&&q(a,Z,e?o:V.mount),n},le=e=>{const t={...g.mount?h:l};return y(e)?t:L(e)?m(t,e):e.map((e=>m(t,e)))},ue=(e,t)=>({invalid:!!m((t||s).errors,e),isDirty:!!m((t||s).dirtyFields,e),error:m((t||s).errors,e),isValidating:!!m(s.validatingFields,e),isTouched:!!m((t||s).touchedFields,e)}),he=(e,t,r)=>{const i=(m(a,e,{_f:{}})._f||{}).ref,n=m(s.errors,e)||{},{ref:o,message:l,type:u,...d}=n;p(s.errors,e,{...d,...t,ref:i}),x.state.next({name:e,errors:s.errors,isValid:!1}),r&&r.shouldFocus&&i&&i.focus&&i.focus()},ge=(e,t={})=>{for(const i of e?N(e):V.mount)V.mount.delete(i),V.array.delete(i),t.keepValue||(te(a,i),te(h,i)),!t.keepError&&te(s.errors,i),!t.keepDirty&&te(s.dirtyFields,i),!t.keepTouched&&te(s.touchedFields,i),!t.keepIsValidating&&te(s.validatingFields,i),!r.shouldUnregister&&!t.keepDefaultValue&&te(l,i);x.values.next({values:{...h}}),x.state.next({...s,...t.keepDirty?{isDirty:G()}:{}}),!t.keepIsValid&&E()},pe=({disabled:e,name:t,field:r,fields:s,value:a})=>{if(v(e)&&g.mount||e){const i=e?void 0:y(a)?ce(r?r._f:m(s,t)._f):a;p(h,t,i),T(t,i,!1,!1,!0)}},be=(e,t={})=>{let s=m(a,e);const n=v(t.disabled);return p(a,e,{...s||{},_f:{...s&&s._f?s._f:{ref:{name:e}},name:e,mount:!0,...t}}),V.mount.add(e),s?pe({field:s,disabled:t.disabled,name:e,value:t.value}):j(e,!0,t.value),{...n?{disabled:t.disabled}:{},...r.progressive?{required:!!t.required,min:ye(t.min),max:ye(t.max),minLength:ye(t.minLength),maxLength:ye(t.maxLength),pattern:ye(t.pattern)}:{},name:e,onChange:Y,onBlur:Y,ref:n=>{if(n){be(e,t),s=m(a,e);const r=y(n.value)&&n.querySelectorAll&&n.querySelectorAll("input,select,textarea")[0]||n,o=(e=>W(e)||i(e))(r),u=s._f.refs||[];if(o?u.find((e=>e===r)):r===s._f.ref)return;p(a,e,{_f:{...s._f,...o?{refs:[...u.filter(ne),r,...Array.isArray(m(l,e))?[{}]:[]],ref:{type:r.type,name:e}}:{ref:r}}}),j(e,!1,void 0,r)}else s=m(a,e,{}),s._f&&(s._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&(!((e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)))(V.array,e)||!g.action)&&V.unMount.add(e)}}},_e=()=>r.shouldFocusError&&q(a,Z,V.mount),Ve=(e,t)=>async i=>{let n;i&&(i.preventDefault&&i.preventDefault(),i.persist&&i.persist());let o=f(h);if(x.state.next({isSubmitting:!0}),r.resolver){const{errors:e,values:t}=await H();s.errors=e,o=t}else await z(a);if(te(s.errors,"root"),C(s.errors)){x.state.next({errors:{}});try{await e(o,i)}catch(l){n=l}}else t&&await t({...s.errors},i),_e(),setTimeout(_e);if(x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:C(s.errors)&&!n,submitCount:s.submitCount+1,errors:s.errors}),n)throw n},Ae=(t,r={})=>{const i=t?f(t):l,n=f(i),o=C(t),u=o?l:n;if(r.keepDefaultValues||(l=i),!r.keepValues){if(r.keepDirtyValues)for(const e of V.mount)m(s.dirtyFields,e)?p(u,e,m(h,e)):X(e,m(u,e));else{if(d&&y(t))for(const e of V.mount){const t=m(a,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if($(e)){const t=e.closest("form");if(t){t.reset();break}}}}a={}}h=e.shouldUnregister?r.keepDefaultValues?f(l):{}:f(u),x.array.next({values:{...u}}),x.values.next({values:{...u}})}V={mount:r.keepDirtyValues?V.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},g.mount=!F.isValid||!!r.keepIsValid||!!r.keepDirtyValues,g.watch=!!e.shouldUnregister,x.state.next({submitCount:r.keepSubmitCount?s.submitCount:0,isDirty:!o&&(r.keepDirty?s.isDirty:!(!r.keepDefaultValues||ae(t,l))),isSubmitted:!!r.keepIsSubmitted&&s.isSubmitted,dirtyFields:o?[]:r.keepDirtyValues?r.keepDefaultValues&&h?de(l,h):s.dirtyFields:r.keepDefaultValues&&t?de(l,t):r.keepDirty?s.dirtyFields:{},touchedFields:r.keepTouched?s.touchedFields:{},errors:r.keepErrors?s.errors:{},isSubmitSuccessful:!!r.keepIsSubmitSuccessful&&s.isSubmitSuccessful,isSubmitting:!1})},Fe=(e,t)=>Ae(I(e)?e(h):e,t);return{control:{register:be,unregister:ge,getFieldState:ue,handleSubmit:Ve,setError:he,_executeSchema:H,_getWatch:J,_getDirty:G,_updateValid:E,_removeUnmounted:()=>{for(const e of V.unMount){const t=m(a,e);t&&(t._f.refs?t._f.refs.every((e=>!ne(e))):!ne(t._f.ref))&&ge(e)}V.unMount=new Set},_updateFieldArray:(e,t=[],r,i,n=!0,o=!0)=>{if(i&&r){if(g.action=!0,o&&Array.isArray(m(a,e))){const t=r(m(a,e),i.argA,i.argB);n&&p(a,e,t)}if(o&&Array.isArray(m(s.errors,e))){const t=r(m(s.errors,e),i.argA,i.argB);n&&p(s.errors,e,t),((e,t)=>{!c(m(e,t)).length&&te(e,t)})(s.errors,e)}if(F.touchedFields&&o&&Array.isArray(m(s.touchedFields,e))){const t=r(m(s.touchedFields,e),i.argA,i.argB);n&&p(s.touchedFields,e,t)}F.dirtyFields&&(s.dirtyFields=de(l,h)),x.state.next({name:e,isDirty:G(e,t),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else p(h,e,t)},_updateDisabledField:pe,_getFieldArray:t=>c(m(g.mount?h:l,t,e.shouldUnregister?m(l,t,[]):[])),_reset:Ae,_resetDefaultValues:()=>I(r.defaultValues)&&r.defaultValues().then((e=>{Fe(e,r.resetOptions),x.state.next({isLoading:!1})})),_updateFormState:e=>{s={...s,...e}},_disableForm:e=>{v(e)&&(x.state.next({disabled:e}),q(a,((t,r)=>{const s=m(a,r);s&&(t.disabled=s._f.disabled||e,Array.isArray(s._f.refs)&&s._f.refs.forEach((t=>{t.disabled=s._f.disabled||e})))}),0,!1))},_subjects:x,_proxyFormState:F,_setErrors:e=>{s.errors=e,x.state.next({errors:s.errors,isValid:!1})},get _fields(){return a},get _formValues(){return h},get _state(){return g},set _state(e){g=e},get _defaultValues(){return l},get _names(){return V},set _names(e){V=e},get _formState(){return s},set _formState(e){s=e},get _options(){return r},set _options(e){r={...r,...e}}},trigger:oe,register:be,handleSubmit:Ve,watch:(e,t)=>I(e)?x.values.subscribe({next:r=>e(J(void 0,t),r)}):J(e,t,!0),setValue:X,getValues:le,reset:Fe,resetField:(e,t={})=>{m(a,e)&&(y(t.defaultValue)?X(e,f(m(l,e))):(X(e,t.defaultValue),p(l,e,f(t.defaultValue))),t.keepTouched||te(s.touchedFields,e),t.keepDirty||(te(s.dirtyFields,e),s.isDirty=t.defaultValue?G(e,f(m(l,e))):G()),t.keepError||(te(s.errors,e),F.isValid&&E()),x.state.next({...s}))},clearErrors:e=>{e&&N(e).forEach((e=>te(s.errors,e))),x.state.next({errors:e?s.errors:{}})},unregister:ge,setError:he,setFocus:(e,t={})=>{const r=m(a,e),s=r&&r._f;if(s){const e=s.refs?s.refs[0]:s.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:ue}}function ge(e={}){const t=r.useRef(),s=r.useRef(),[a,i]=r.useState({isDirty:!1,isValidating:!1,isLoading:I(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:I(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...he(e),formState:a});const n=t.current.control;return n._options=e,function(e){const t=r.useRef(e);t.current=e,r.useEffect((()=>{const r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}}),[e.disabled])}({subject:n._subjects.state,next:e=>{((e,t,r)=>{r(e);const{name:s,...a}=e;return C(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find((e=>t[e]===w))})(e,n._proxyFormState,n._updateFormState)&&i({...n._formState})}}),r.useEffect((()=>n._disableForm(e.disabled)),[n,e.disabled]),r.useEffect((()=>{if(n._proxyFormState.isDirty){const e=n._getDirty();e!==a.isDirty&&n._subjects.state.next({isDirty:e})}}),[n,a.isDirty]),r.useEffect((()=>{e.values&&!ae(e.values,s.current)?(n._reset(e.values,n._options.resetOptions),s.current=e.values,i((e=>({...e})))):n._resetDefaultValues()}),[e.values,n]),r.useEffect((()=>{e.errors&&n._setErrors(e.errors)}),[e.errors,n]),r.useEffect((()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()})),r.useEffect((()=>{e.shouldUnregister&&n._subjects.values.next({values:n._getWatch()})}),[e.shouldUnregister,n]),t.current.formState=((e,t,r,s=!0)=>{const a={defaultValues:t._defaultValues};for(const i in e)Object.defineProperty(a,i,{get:()=>{const r=i;return t._proxyFormState[r]!==w&&(t._proxyFormState[r]=!s||w),e[r]}});return a})(a,n),t.current}export{a as T,ge as u};
//# sourceMappingURL=index.esm-HoAAh9rV.js.map
