import{u as x,a as g,j as e,k as j,L as y,c as w,l as f,Q as r}from"./index-0b8205fd.js";import{F as v,a as S,b as n,E as t}from"./formik.esm-ab33c909.js";import{c as b,a as l}from"./index.esm-38094208.js";/* empty css                      */const D=()=>{const m=x(),o=g(),d=async(a,u)=>{console.log(a);try{if(await w(a.email,a.password)!==null){const s=await m(f({email:a.email,password:a.password}));s.error?r.error("Invalid email or password"):(u.resetForm(),s.payload.bodyData!==null&&Object.keys(s.payload.bodyData).length!==0?o("/diary"):o("/params"))}else r.error("Invalid data")}catch(i){i.message==="Server error"&&r.error("Server error")}},c=b({email:l().matches(/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,"Invalid E-mail format").required("Please input your E-mail!"),password:l().min(6).max(16).required()}),p={name:"",email:"",password:""},h={paddingTop:"200px"};return e.jsxs("div",{style:h,children:[e.jsx("h2",{children:"Sign In"}),e.jsx(j,{}),e.jsx("p",{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsx(v,{initialValues:p,validationSchema:c,onSubmit:d,children:e.jsxs(S,{autoComplete:"on",children:[e.jsxs("div",{children:[e.jsx(n,{type:"email",name:"email",placeholder:"Email"}),e.jsx(t,{name:"email",component:"div",className:"error-message"})]}),e.jsxs("div",{children:[e.jsx(n,{type:"password",name:"password",placeholder:"Password"}),e.jsx(t,{name:"password",component:"div",className:"error-message"})]}),e.jsx("button",{type:"submit",children:"Sign In"}),e.jsxs("p",{children:["Don’t have an account? ",e.jsx(y,{to:"/signup",children:"Sign Up"})]})]})})]})};export{D as default};
