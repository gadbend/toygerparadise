import{j as e}from"./ui-CnG_p06C.js";import{f as s,u as t,r as a}from"./vendor-CLycFUD2.js";import{N as l,B as i,F as r,s as o}from"./index-DKI9W503.js";import{I as n}from"./input-C9Pd3zb6.js";import{L as m}from"./label-DN2y_0kz.js";import"./utils-DejK46WY.js";const d=()=>{const d=s(),{t:c}=t(),[h,x]=a.useState(""),[u,p]=a.useState(""),[w,j]=a.useState(!1),[b,g]=a.useState(null);return e.jsxs("div",{className:"flex flex-col min-h-screen bg-black",children:[e.jsx(l,{}),e.jsx("main",{className:"flex-grow flex items-center justify-center",children:e.jsx("div",{className:"w-full max-w-md px-4",children:e.jsxs("div",{className:"bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10",children:[e.jsx("h2",{className:"text-2xl font-bold text-white mb-6 text-center",children:c("login.title")}),e.jsxs("form",{onSubmit:async e=>{e.preventDefault(),j(!0),g(null);try{const{error:e}=await o.auth.signInWithPassword({email:h,password:u});if(e)throw e;d("/admin")}catch(s){g(c("login.error"))}finally{j(!1)}},className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(m,{htmlFor:"email",className:"text-white",children:c("login.email")}),e.jsx(n,{id:"email",type:"email",value:h,onChange:e=>x(e.target.value),placeholder:c("login.email"),className:"bg-white/10 border-white/20 text-white",required:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(m,{htmlFor:"password",className:"text-white",children:c("login.password")}),e.jsx(n,{id:"password",type:"password",value:u,onChange:e=>p(e.target.value),placeholder:c("login.password"),className:"bg-white/10 border-white/20 text-white",required:!0})]}),b&&e.jsx("div",{className:"text-red-500 text-sm text-center",children:b}),e.jsx(i,{type:"submit",className:"w-full bg-amber-600 hover:bg-amber-700 text-white",disabled:w,children:c(w?"login.submitting":"login.submit")})]})]})})}),e.jsx(r,{})]})};export{d as default};
//# sourceMappingURL=Login-DiY02m6Q.js.map
