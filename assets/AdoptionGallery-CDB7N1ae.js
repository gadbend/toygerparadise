import{u as e,r as t,j as s,N as a,C as r,F as i,g as n}from"./index-CbzG7VsJ.js";const d=()=>{const{t:d}=e(),[l,o]=t.useState([]),[c,x]=t.useState(!0),[m,g]=t.useState(null);return t.useEffect((()=>{(async()=>{try{const e=await n();o(e)}catch(e){g(d("adoption.error"))}finally{x(!1)}})()}),[d]),s.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-amber-50 to-white",children:[s.jsx(a,{}),s.jsxs("main",{className:"container mx-auto px-4 py-16",children:[s.jsx("h1",{className:"sr-only",children:"Adopt a Toyger or Bengal Kitten from Our Breeding Program"}),s.jsxs("div",{className:"text-center mb-16",children:[s.jsx("h2",{className:"text-4xl font-bold text-amber-800 mb-6",children:d("adoption.title")}),s.jsx("p",{className:"text-lg text-gray-600 max-w-2xl mx-auto",children:d("adoption.description")})]}),c?s.jsx("div",{className:"text-center text-white",children:d("adoption.loading")}):m?s.jsx("div",{className:"text-center text-red-500",children:m}):0===l.length?s.jsx("div",{className:"text-center text-gray-400",children:d("adoption.noKittens")}):s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12",children:l.map((e=>s.jsx("div",{className:"flex justify-center",children:s.jsx(r,{id:e.id,name:e.name,breed:e.breed,images:e.images,age:e.age,gender:e.gender,color:e.breed,description:e.description,traits:[e.breed,e.gender||"",e.age||""].filter(Boolean),showFullDescription:!0})},e.id)))})]}),s.jsx(i,{})]})};export{d as default};
//# sourceMappingURL=AdoptionGallery-CDB7N1ae.js.map
