import{t as r,p as t}from"./index-_jK-s2t3.js";async function a(t){try{const a=r.from("cat_gallery").select("*");t&&a.eq("category",t.toLowerCase()),a.order("created_at",{ascending:!1});const{data:e,error:o}=await a;if(o)throw o;return e||[]}catch(a){throw a}}async function e(t){const{data:a,error:e}=await r.from("cat_gallery").insert([t]).select().single();if(e)throw e;return a}async function o(t){const{error:a}=await r.from("cat_gallery").delete().eq("id",t);if(a)throw a}async function c(a,e){try{const o=await t(a,{maxWidth:1920,maxHeight:1080,quality:.92,useWebP:!0,preserveExif:!0}),c=e.breed.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9-]+/g,"").trim(),i=e.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9-]+/g,"").trim(),n=Math.random().toString(36).substring(2,8),s=`gallery/${`${c}-for-adoption-sale-${i}-${n}.webp`}`,{error:l}=await r.storage.from("images").upload(s,o.blob,{contentType:o.format,cacheControl:"3600",upsert:!1});if(l)throw l;const{data:g}=r.storage.from("images").getPublicUrl(s);return g.publicUrl}catch(o){throw o}}export{e as a,o as d,a as g,c as u};
//# sourceMappingURL=galleryQueries-BXJcTy-r.js.map