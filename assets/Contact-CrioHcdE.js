import{r as p,j as a}from"./index-BEuE3a42.js";import{S as N}from"./SectionWrapper-lA4Sr2zx.js";import"./style-DRicT7Oj.js";import"./proxy-wDA1uU0K.js";class f{constructor(t=0,s="Network Error"){this.status=t,this.text=s}}const D=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},o={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:D()},x=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},L=(e,t="https://api.emailjs.com")=>{if(!e)return;const s=x(e);o.publicKey=s.publicKey,o.blockHeadless=s.blockHeadless,o.storageProvider=s.storageProvider,o.blockList=s.blockList,o.limitRate=s.limitRate,o.origin=s.origin||t},g=async(e,t,s={})=>{const l=await fetch(o.origin+e,{method:"POST",headers:s,body:t}),r=await l.text(),i=new f(l.status,r);if(l.ok)return i;throw i},b=(e,t,s)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},P=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},w=e=>e.webdriver||!e.languages||e.languages.length===0,v=()=>new f(451,"Unavailable For Headless Browser"),S=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},R=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},T=(e,t)=>e instanceof FormData?e.get(t):e[t],y=(e,t)=>{if(R(e))return!1;S(e.list,e.watchVariable);const s=T(t,e.watchVariable);return typeof s!="string"?!1:e.list.includes(s)},j=()=>new f(403,"Forbidden"),H=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},V=async(e,t,s)=>{const l=Number(await s.get(e)||0);return t-Date.now()+l},B=async(e,t,s)=>{if(!t.throttle||!s)return!1;H(t.throttle,t.id);const l=t.id||e;return await V(l,t.throttle,s)>0?!0:(await s.set(l,Date.now().toString()),!1)},k=()=>new f(429,"Too Many Requests"),_=async(e,t,s,l)=>{const r=x(l),i=r.publicKey||o.publicKey,d=r.blockHeadless||o.blockHeadless,n=r.storageProvider||o.storageProvider,c={...o.blockList,...r.blockList},u={...o.limitRate,...r.limitRate};return d&&w(navigator)?Promise.reject(v()):(b(i,e,t),P(s),s&&y(c,s)?Promise.reject(j()):await B(location.pathname,u,n)?Promise.reject(k()):g("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:i,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"}))},C=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},M=e=>typeof e=="string"?document.querySelector(e):e,F=async(e,t,s,l)=>{const r=x(l),i=r.publicKey||o.publicKey,d=r.blockHeadless||o.blockHeadless,n=o.storageProvider||r.storageProvider,c={...o.blockList,...r.blockList},u={...o.limitRate,...r.limitRate};if(d&&w(navigator))return Promise.reject(v());const h=M(s);b(i,e,t),C(h);const m=new FormData(h);return y(c,m)?Promise.reject(j()):await B(location.pathname,u,n)?Promise.reject(k()):(m.append("lib_version","4.4.1"),m.append("service_id",e),m.append("template_id",t),m.append("user_id",i),g("/api/v1.0/email/send-form",m))},E={init:L,send:_,sendForm:F,EmailJSResponseStatus:f},K=()=>{const e=p.useRef(),[t,s]=p.useState({name:"",email:"",message:""}),[l,r]=p.useState(!1),i=n=>{const{target:c}=n,{name:u,value:h}=c;s({...t,[u]:h})},d=n=>{n.preventDefault(),r(!0),E.send("service_z6mn5lt","template_n3pvkm2",{from_name:t.name,to_name:"Jahir hussain",from_email:t.email,to_email:"codewithjahir@gmail.com",message:t.message},"537YLk1oMyDTQnbon").then(()=>{r(!1),alert("Thank you. I will get back to you as soon as possible."),s({name:"",email:"",message:""})},c=>{r(!1),console.error(c),alert("Ahh, something went wrong. Please try again.")})};return a.jsx("div",{className:"w-full flex flex-col items-center justify-center ",children:a.jsxs("div",{className:"flex gap-28 ms:max-md:flex-wrap ms:max-md:justify-center w-full bg-[#001B1B] p-16 rounded-3xl ",children:[a.jsxs("div",{className:"flex flex-col basis-[40%] gap-7",children:[a.jsx("h1",{className:"text-4xl font-medium bg-gradient-to-r from-teal-700 to-teal-300 bg-clip-text text-transparent",children:"Contact Me"}),a.jsx("p",{className:"text-sm text-[#B9DBDB]",children:"I'm currently available to take on new projects, so feel free to send me message about anything that you want me to work on. You can contact anytime."}),a.jsxs("div",{className:"flex flex-col gap-6",children:[a.jsxs("div",{className:"flex gap-4",children:[a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"size-5 text-[#B9DBDB]",children:[a.jsx("path",{"fill-rule":"evenodd",d:"M5.478 5.559A1.5 1.5 0 0 1 6.912 4.5H9A.75.75 0 0 0 9 3H6.912a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H15a.75.75 0 0 0 0 1.5h2.088a1.5 1.5 0 0 1 1.434 1.059l2.213 7.191H17.89a3 3 0 0 0-2.684 1.658l-.256.513a1.5 1.5 0 0 1-1.342.829h-3.218a1.5 1.5 0 0 1-1.342-.83l-.256-.512a3 3 0 0 0-2.684-1.658H3.265l2.213-7.191Z","clip-rule":"evenodd"}),a.jsx("path",{"fill-rule":"evenodd",d:"M12 2.25a.75.75 0 0 1 .75.75v6.44l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V3a.75.75 0 0 1 .75-.75Z","clip-rule":"evenodd"})]}),a.jsx("p",{className:"text-sm text-[#B9DBDB]",children:"codewithjahir@gmail.com"})]}),a.jsxs("div",{className:"flex gap-4",children:[a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"size-5 text-[#B9DBDB]",children:[a.jsx("path",{"fill-rule":"evenodd",d:"M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z","clip-rule":"evenodd"}),a.jsx("path",{"fill-rule":"evenodd",d:"M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z","clip-rule":"evenodd"})]}),a.jsx("p",{className:"text-sm text-[#B9DBDB]",children:"8754336725"})]}),a.jsxs("div",{className:"flex gap-4",children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"size-5 text-[#B9DBDB]",children:a.jsx("path",{"fill-rule":"evenodd",d:"m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z","clip-rule":"evenodd"})}),a.jsxs("p",{className:"text-sm text-[#B9DBDB]",children:["No.21, MGR Nagar 13th street, Velachery ",a.jsx("br",{})," Chennai - 600042"]})]})]})]}),a.jsxs("form",{ref:e,onSubmit:d,className:"mt-2 flex flex-col basis-1/2 gap-4 w-full ms:max-md:text-sm",children:[a.jsxs("label",{className:"flex flex-col",children:[a.jsx("span",{className:"text-[#B9DBDB] font-medium mb-2",children:"Your Name"}),a.jsx("input",{type:"text",name:"name",value:t.name,onChange:i,placeholder:"What's your good name?",className:"bg-tertiary py-3 px-5 text-sm placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"})]}),a.jsxs("label",{className:"flex flex-col",children:[a.jsx("span",{className:"text-[#B9DBDB] font-medium mb-2",children:"Your email"}),a.jsx("input",{type:"email",name:"email",value:t.email,onChange:i,placeholder:"What's your web address?",className:"bg-tertiary py-3 px-5 text-sm placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"})]}),a.jsxs("label",{className:"flex flex-col",children:[a.jsx("span",{className:"text-[#B9DBDB] font-medium mb-2",children:"Your Message"}),a.jsx("textarea",{rows:4,name:"message",value:t.message,onChange:i,placeholder:"What you want to say?",className:"bg-tertiary py-3 mb-2 px-5 text-sm placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"})]}),a.jsx("button",{type:"submit",className:"bg-tertiary text-[#cce7e7] py-2 px-6 rounded-xl outline-none w-fit font-bold shadow-md shadow-primary",children:l?"Sending...":"Send"})]})]})})},W=N(K,"contact");export{W as default};
