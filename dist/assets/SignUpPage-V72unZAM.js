import{h as d,i as n,k as h,u,e as t,j as a,l as c,m as p,n as g,P as x,F as f,W as j,o as i,p as o,q as S,s as w,t as v,L as y,S as A,v as b,r as C,f as U,g as I}from"./index-QfM5dVvM.js";import{u as P}from"./formik.esm-GhlhTUBo.js";import{A as T,S as k}from"./WelcomeImg-NUYtnFiB.js";const E=d().shape({name:n().min(2,"").required("❌ Must be at least 2, maximum 50 characters"),email:n().email().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/).required("❌ Invalid email format"),password:n().min(6,"").required("❌ Password is too short - should be 6 characters minimum")}),q=()=>{const r=h(),s=u(),{isLoading:l}=t(),e=P({initialValues:{name:"",email:"",password:""},validationSchema:E,onSubmit:async m=>{await r(b(m))&&s("/profile")}});return a.jsxs(c,{children:[a.jsxs(p,{children:[a.jsx(g,{children:"Sign Up"}),a.jsx(x,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),a.jsxs(f,{onSubmit:e.handleSubmit,children:[a.jsxs(j,{children:[a.jsx(i,{bordercolor:e.errors.name&&e.touched.name?"error":"default",name:"name",type:"text",placeholder:"Name",onChange:e.handleChange,value:e.values.name}),e.errors.name&&e.touched.name&&a.jsx(o,{children:e.errors.name}),a.jsx(i,{bordercolor:e.errors.email&&e.touched.email?"error":"default",id:"email",name:"email",type:"text",placeholder:"Email",onChange:e.handleChange,value:e.values.email}),e.errors.email&&e.touched.email&&a.jsx(o,{children:e.errors.email}),a.jsx(S,{bordercolor:e.errors.email&&e.touched.email?"error":"default",placeholder:"Password",id:"password",name:"password",type:"password",onChange:e.handleChange,value:e.values.password}),e.errors.password&&e.touched.password&&a.jsx(o,{children:e.errors.password})]}),a.jsx(w,{htmlType:"submit",type:"primary",loading:l,children:"Sign Up"})]}),a.jsxs(v,{children:["Already have an account? ",a.jsx(y,{to:"/signin",children:"Sign In"})]})]}),a.jsx(T,{}),a.jsx(A,{children:a.jsx(k,{})})]})},$=()=>{const{isRefreshing:r}=t();return C.useEffect(()=>{if(r){const s=setTimeout(()=>{U("loading","If you are experiencing a long load time, please wait, our servers go into hibernation when not in use for a long time and need time to get up and running.")},5e3);return()=>clearTimeout(s)}},[r]),a.jsx(I,{children:a.jsx(q,{})})};export{$ as default};