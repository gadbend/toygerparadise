import{j as s}from"./ui-CnG_p06C.js";import{f as t,r as e}from"./vendor-CLycFUD2.js";import{s as i}from"./index-vl9TreFJ.js";import"./utils-DejK46WY.js";const n=({children:n})=>{const a=t(),[r,o]=e.useState(!0);return e.useEffect((()=>{(async()=>{try{const{data:{session:s}}=await i.auth.getSession();s||a("/login")}catch(s){a("/login")}finally{o(!1)}})()}),[a]),r?s.jsx("div",{className:"flex min-h-screen items-center justify-center bg-black text-white",children:"Loading..."}):s.jsx(s.Fragment,{children:n})};export{n as default};
//# sourceMappingURL=ProtectedRoute-DOTmIiwK.js.map