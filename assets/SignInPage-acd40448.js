import{r as e,u as f,a as j,b as w,j as s,k as S,d as g,l as y,Q as a}from"./index-31e13ac7.js";import{C as b,W as I,a as D,b as k,T as F,c as P,F as W,A as v,d as T,S as A}from"./SignUpPage.styled-71c858d3.js";import{S as C}from"./Statistics-d11dbe9c.js";import"./index.esm-b9cf29f0.js";import"./styled-components.browser.esm-adad23e6.js";import"./default-desktop-2x-90147dc9.js";import"./default-mobile-2x-a3b76961.js";const O=()=>{const[n,p]=e.useState(!1),[d,c]=e.useState("password"),l=f(),t=j(),m=w(r=>r.auth.bodyData);e.useEffect(()=>{Object.keys(m).length>1&&t("/params")});const u=async(r,h)=>{try{if(await g(r.email,r.password)!==null){const i=await l(y({email:r.email,password:r.password}));i.error?a.error("Invalid email or password"):(h.resetForm(),i.payload.bodyData.bodyData===void 0?t("/params"):t("/diary"))}else a.error("Invalid data")}catch(o){o.message==="Server error"&&a.error("Server error")}},x=()=>{p(r=>!r),c(r=>{if(r==="password")return"text";if(r==="text")return"password"})};return s.jsxs(b,{children:[s.jsx(I,{}),s.jsxs(D,{children:[s.jsxs(k,{children:[s.jsx(F,{children:"Sign In"}),s.jsx(S,{}),s.jsx(P,{children:"Welcome! Please enter your credentials to login to the platform:"})]}),s.jsx("div",{children:s.jsxs(W,{nameIsShown:!1,handleSubmit:u,toglePassword:x,passwordInput:d,isPassword:n,children:[s.jsx(v,{text:"Sign In",type:"submit"}),s.jsx(T,{text:"Don’t have an account?",textLink:"Sign Up",to:"/signup"})]})})]}),s.jsx(A,{children:s.jsx(C,{})})]})};export{O as default};