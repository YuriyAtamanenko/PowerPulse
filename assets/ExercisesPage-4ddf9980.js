import{P as a,j as e,u as h,q as T,t as K,a as b,b as p,v as O,w as Z,I as u,x as N,y as f,z as J,A as C,L as G,B as Q}from"./index-09aa6251.js";import{s as t}from"./styled-components.browser.esm-40db526f.js";import{r as _}from"./react-responsive-3cb84aa0.js";const $=i=>i.exercises.title,ee=i=>i.exercises.category,te=i=>i.exercises.isToggled,ie=i=>i.exercises.exerciseIndex,ne=i=>i.exercises.isSuccess,oe=i=>i.exercises.modalIsOpen,re=i=>i.exercises,se=i=>i.exercises.allExercises,ce=t.h1`
  margin-bottom: 20px;
  color: #efede8;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  line-height: 'calc(28px / 24px)';
  @media screen and (min-width: 768px) {
    font-size: 32px;
    display: inline;
    margin-bottom: 0;
    line-height: 'calc(44px / 32px)';
  }
`,V=({title:i})=>e.jsx(ce,{children:i||"Exercises"});V.propTypes={title:a.string};const ae=t.li`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  flex-basis: calc((75% - 16px) / 3);
  @media screen and (min-width: 1440px) {
    max-width: 234px;
    flex-basis: calc((100% - 16px) / 5);
  }
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`,le=t.div`
  position: relative;
  width: 335px;
  height: 206px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: linear-gradient(
    0deg,
    rgba(4, 4, 4, 0.5) 0%,
    rgba(4, 4, 4, 0.5) 100%
  );
  @media screen and (min-width: 768px) {
    width: 224px;
  }
  @media screen and (min-width: 1440px) {
    width: 237px;
  }
  &:hover,
  &:focus {
    border: 2px solid red;
  }
`,de=t.img`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  width: 100%;
  height: 100%;
`,xe=t.div`
  position: absolute;
  zindex: 5;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`,pe=t.h3`
  color: #efede8;
  font-family: 'Roboto';
  font-size: 20px;
  line-height: calc(24px / 20px);
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32px / 24px);
  }
  @media screen and (min-width: 1440px) {
    line-height: calc(28px / 24px);
  }
`,he=t.p`
  color: rgba(239, 237, 232, 0.4);
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 'calc(18px / 12px)';
`,I=({imgURL:i,name:n,filter:r})=>{const s=h();return e.jsx(ae,{onClick:()=>{s(T(n)),s(K())},children:e.jsxs(le,{children:[e.jsx(de,{src:i,alt:n}),e.jsxs(xe,{children:[e.jsx(pe,{children:n}),e.jsx(he,{children:r})]})]})})};I.propTypes={imgURL:a.string,name:a.string,filter:a.string};const R=t.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 80px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`,ge=t.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;
  }
`;function D({itemsPerPage:i,category:n}){const r=h(),o=b(re)[n||"bodyparts"],[c,d]=p.useState(1),g=Math.ceil(o.length/i),x=y=>{d(y)},l=(c-1)*i,j=l+i,w=o.slice(l,j);return p.useEffect(()=>{r(O())},[r]),e.jsxs(R,{children:[e.jsx(ge,{children:w.map(({filter:y,name:m,imgURL:H},M)=>e.jsx(I,{imgURL:H,name:m.charAt(0).toUpperCase()+m.slice(1),filter:y},M))}),w.length<=10||w.length<=9?e.jsx("div",{style:{display:"inline-flex",justifyContent:"center",marginRight:8},children:Array.from({length:g},(y,m)=>e.jsx("input",{type:"radio",name:"active-page",onClick:()=>x(m+1),className:c===m+1?"active":""},m))}):null]})}const q=({page:i})=>{const n=_.useMediaQuery({minWidth:768,maxWidth:1439.8});return e.jsx(R,{children:e.jsx("div",{children:e.jsx(D,{category:i,itemsPerPage:n?9:10})})})};q.propTypes={page:a.string};D.propTypes={itemsPerPage:a.number,category:a.string};const me="_container_rxzv8_1",be="_category_rxzv8_8",ue="_activecategory_rxzv8_23 _category_rxzv8_8",fe="_categorygroup_rxzv8_41",ye="_categoryitem_rxzv8_48",v={container:me,category:be,activecategory:ue,categorygroup:fe,categoryitem:ye},je=[{title:"Body parts",route:"bodyparts"},{title:"Muscules",route:"muscules"},{title:"Equipments",route:"equipments"}],we=()=>{const[i,n]=p.useState(""),r=h();return p.useEffect(()=>{n(0)},[]),e.jsx("div",{className:v.container,children:e.jsx("ul",{className:v.categorygroup,children:je.map(({title:s,route:o},c)=>e.jsx("li",{className:v.categoryitem,children:e.jsx("button",{className:`${c===i?v.activecategory:v.category}`,onClick:()=>{r(Z(o)),n(c)},children:s})},c))})})},ve=t.li`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(239, 237, 232, 0.05);
  position: relative;
  padding: 16px;
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 16px) / 2);
  }
  @media screen and (min-width: 1440px) {
    max-width: 405px;
  }
`,ke=t.strong`
  border-radius: 4px;
  color: #fff;
  background-color: rgba(239, 237, 232, 0.05);
  padding: 5px 7.5px 5px 7.5px;
  font-family: 'Roboto';
  fontsize: 12px;
  font-weight: 700;
  display: inline-flex;
  margin-bottom: 33px;
  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 27px;
  }
`,ze=t.div`
  display: flex;
  margin-bottom: 8px;
`,Se=t.p`
  color: #efede8;
  font-family: 'Roboto';
  font-size: 20px;
  line-height: 'calc(24px / 20px)';
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32px / 24px);
  }
`,Ce=t.div`
  display: flex;
  flex-wrap: wrap;
`,E=t.p`
  display: inherit;
  color: rgba(239, 237, 232, 0.4);
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 'calc(18px / 12px)';
  margin-right: 16px;
`,Ee=t.button`
  background-color: transparent;
  color: #e6533c;
  border: none;
  padding: 0;
  position: absolute;
  top: 16px;
  right: 16px;
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 'calc(18px / 14px)';
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 'calc(24px / 16px)';
  }
`,L=t.span`
  color: #efede8;
  margin-left: 3px;
`,Le=t.span`
  width: 28px;
  height: 28px;
  margin-right: 16px;
  background-color: #efa082;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`,B=({name:i,burnedCalories:n,bodyPart:r,target:s,index:o})=>{const c=h();return e.jsxs(ve,{children:[e.jsx(ke,{children:"WORKOUT"}),e.jsxs(ze,{children:[e.jsx(Le,{children:e.jsx("svg",{width:"24",height:"24",style:{fill:"#EFEDE8",zIndex:10},children:e.jsx("use",{href:u+"#icon-running"})})}),e.jsx(Se,{children:i})]}),e.jsxs(Ce,{children:[e.jsxs(E,{children:["Burned calories: ",e.jsx(L,{children:n})]}),e.jsxs(E,{children:["Body part: ",e.jsx(L,{children:r})]}),e.jsxs(E,{children:["Target: ",e.jsx(L,{children:s})]})]}),e.jsxs(Ee,{type:"button",onClick:()=>{c(N(o)),c(f())},children:["Start",e.jsx("svg",{width:16,height:16,style:{verticalAlign:"top",stroke:"#E6533C"},children:e.jsx("use",{href:u+"#icon-next"})})]})]})};B.propTypes={name:a.string,burnedCalories:a.number,bodyPart:a.string,target:a.string,index:a.number};const Ue=t.div`
  display: flex;
  @media screen and (min-width: 1440px) {
    max-height: 726px;
  }
`,Ae=t.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 80px;
  overflow-y: auto;
  &::-webkit-scrollbar-thumb {
    background-color: #ef8964;
    border-radius: 12px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(239, 237, 232, 0.1);
    border-radius: 12px;
  }
  &::-webkit-scrollbar {
    width: 8px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 34px;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;
    max-height: calc(100vh - 364px);
    gap: 32px 16px;
    max-width: 100%;
    max-height: 726px;
  }
  @media screen and (min-width: 1440px) {
    max-height: calc(100vh - 325px);
    width: 850px;
    max-width: 100%;
  }
`,Xe=t.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    z-index: -20;
    border: none;
    outline: none;
    position: absolute;
    top: 82px;
    right: 96px;
    width: 450px;
    height: 725px;
    background-image: linear-gradient(
        80deg,
        #040404 -2.45%,
        rgba(4, 4, 4, 0) 68.17%
      ),
      url('src/images/exercises-desktop-1x.jpg');
    background-repeat: no-repeat;
    background-position: 100% 0;
    @media (min-device-pixel-ratio: 2) {
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
        background-image: linear-gradient(
            80deg,
            #040404 -2.45%,
            rgba(4, 4, 4, 0) 68.17%
          ),
          url('src/images/exercises-desktop-2x.jpg');
      }
    }
  }
`,We="_overlay_y08h9_1",Te="_overlayhidden_y08h9_20",U={overlay:We,overlayhidden:Te},F=({children:i})=>{const n=b(oe),r=h();p.useEffect(()=>{const o=c=>{c.code==="Escape"&&r(f())};return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[r]);const s=o=>{o.target===o.currentTarget&&r(f())};return e.jsx("div",{className:`${n?U.overlayhidden:U.overlay}`,onClick:s,children:i})};F.propTypes={children:a.object};const Ke=t.div`
  width: 335px;
  z-index: 5;
  display: flex;
  position: relative;
  justify-content: center;
  padding: 48px 16px;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: #10100f;
  transition: transform 0.3s ease;
  ${i=>i.isOpen&&`
    transform: translate(-50%, -50%) scale(1);
  `}
  transform: translate(-50%, -50%) scale(0.8);
  position: fixed;
  top: 50%;
  left: 50%;
  @media screen and (min-width: 768px) {
    width: 694px;
    padding: 48px 32px;
    flex-direction: row;
  }
`,Ve=t.div`
  display: flex;
  justify-content: center;
  width: 270px;
  height: 226px;
  margin-bottom: 14px;
  margin-right: auto;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    margin-right: 16px;
  }
`,Ie=t.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: linear-gradient(
    0deg,
    rgba(4, 4, 4, 0.2) 0%,
    rgba(4, 4, 4, 0.2) 100%
  );
`,Re=t.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 40px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,k=t.li`
  padding: 12px 18px;
  width: 147px;
  height: 62px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: rgba(239, 237, 232, 0.05);
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 8px) / 2);
  @media screen and (min-width: 768px) {
    width: 168px;
    height: 70px;
  }
`,z=t.p`
  color: rgba(239, 237, 232, 0.4);
  font-family: 'Roboto';
  font-size: 12px;
  line-height: calc(16px / 12px);
  @media screen and (min-width: 768px) {
    line-height: calc(18px / 12px);
    margin-bottom: 8px;
  }
`,S=t.span`
  color: #efede8;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 700;
  line-height: calc(18px / 14px);
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24px / 16px);
  }
`,De=t.button`
  display: inline-flex;
  width: 151px;
  height: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: #e6533c;
  color: #efede8;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18px / 16px);
  border: none;
  @media screen and (min-width: 768px) {
    margin-top: auto;
    margin-left: auto;
    height: 52px;
    line-height: calc(24px / 16px);
  }
`,qe=t.div`
  display: flex;
  flex-direction: column;
`,Be=t.span`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;t.div`
  overflow: hidden;
`;t.div`
  width: 125px;
  margin-top: 4px;
  margin-bottom: 14px;
  height: 125px;
  display: inherit;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(239, 237, 232, 0.1);
`;const Fe=t.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`,Ye=t.button`
  width: 32px;
  height: 32px;
  background-color: #e6533c;
  color: #efede8;
  border-radius: 4px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`,Pe=t.span`
  color: #efede8;
  font-family: Roboto;
  font-size: 16px;
  line-height: calc(24px / 16px);
  position: absolute;
  top: 65px;
`,He=t.p`
  text-align: center;
  color: rgba(239, 237, 232, 0.4);
  font-family: 'Roboto';
  font-size: 10px;
  line-height: calc(14px / 10px);
`,Me=t.p`
  color: rgba(239, 237, 232, 0.3);
  font-family: 'Roboto';
  font-size: 14px;
  text-align: center;
  line-height: calc(18px / 14px);
`,Oe=t.span`
  color: #e6533c;
`,Ze=t.svg`
  rotate: 90deg;
  height: 125px;
  width: 125px;
  margin-bottom: 14px;
`,Ne=t.circle`
  fill: transparent;
  stroke-width: 4;
  stroke: rgba(239, 237, 232, 0.1);
`,Je=t.circle`
  fill: transparent;
  stroke-width: 4;
  stroke: #e6533c;
  transition: stroke-dashoffset 0.25s linear;
`,Y=({burnedCalories:i,time:n,currentTime:r,setCurrentTime:s})=>{const o=p.useRef(null);p.useEffect(()=>()=>{o.current&&clearInterval(o.current)},[]);const c=()=>{o.current?(clearInterval(o.current),o.current=null):o.current=setInterval(()=>{s(l=>l-1)},1e3)},d=Math.floor(r/60),g=r%60,x=`${d.toString().padStart(2,"0")}:${g.toString().padStart(2,"0")}`;return e.jsxs(Fe,{children:[e.jsx(He,{children:"Time"}),e.jsxs(Ze,{viewBox:"0 0 250 250",children:[e.jsx(Ne,{pathLength:n*60,cx:125,cy:125,r:125}),e.jsx(Je,{pathLength:n*60,cx:125,cy:125,r:125,strokeDasharray:n*60,strokeDashoffset:n*60-r})]}),e.jsx(Pe,{children:x}),e.jsx(Ye,{onClick:c,children:o.current?e.jsx("svg",{width:32,height:32,children:e.jsx("use",{href:u+"#icon-stop"})}):e.jsx("svg",{width:32,height:32,children:e.jsx("use",{href:u+"#icon-play"})})}),e.jsxs(Me,{children:["Burned calories: ",e.jsx(Oe,{children:i})]})]})};Y.propTypes={burnedCalories:a.number,time:a.number,currentTime:a.number,setCurrentTime:a.func};const P=({data:i})=>{const[n,r]=p.useState(180),s=h(),{bodyPart:o,burnedCalories:c,equipment:d,gifUrl:g,name:x,target:l,time:j}=i,w=Math.floor(n/60*(c/j)),y=()=>{if(n===180){console.log("Nothing to add");return}s(J(i)).then(()=>s(C())).catch(m=>console.log(m.message))};return e.jsxs(Ke,{children:[e.jsx(Be,{onClick:()=>s(f()),children:e.jsx("svg",{stroke:"#EFEDE8",width:26,height:26,children:e.jsx("use",{href:u+"#icon-close"})})}),e.jsxs("div",{children:[e.jsx(Ve,{children:e.jsx(Ie,{src:g,alt:x})}),e.jsx(Y,{burnedCalories:w,currentTime:n,setCurrentTime:r,time:j})]}),e.jsxs(qe,{children:[e.jsxs(Re,{children:[e.jsxs(k,{children:[e.jsx(z,{children:"Name"}),e.jsx(S,{children:x.toString().charAt(0).toUpperCase()+x.toString().slice(1)})]}),e.jsxs(k,{children:[e.jsx(z,{children:"Target"}),e.jsx(S,{children:l.toString().charAt(0).toUpperCase()+l.toString().slice(1)})]}),e.jsxs(k,{children:[e.jsx(z,{children:"Body part"}),e.jsx(S,{children:o.toString().charAt(0).toUpperCase()+o.toString().slice(1)})]}),e.jsxs(k,{children:[e.jsx(z,{children:"Equipment"}),e.jsx(S,{children:d.toString().charAt(0).toUpperCase()+d.toString().slice(1)})]}),e.jsxs(k,{children:[e.jsx(z,{children:"Time"}),e.jsxs(S,{children:[j," minutes"]})]})]}),e.jsx(De,{type:"submit",onClick:y,children:"Add to diary"})]})]})};P.propTypes={data:a.object};const Ge="data:image/png;base64,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",Qe=t.div`
  width: 335px;
  position: fixed;
  z-index: 10;
  padding-bottom: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: #10100f;
  @media screen and (min-width: 768px) {
    width: 430px;
  }
`,_e=t.div`
  width: 158px;
  height: 158px;
  display: flex;
  align-items: center;
  margin-top: 5px;
  padding: 20px;
`,$e=t.h2`
  color: #efede8;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 700;
  line-height: calc(32px / 24px);
  margin-bottom: 16px;
`,A=t.li`
  display: flex;
`,X=t.p`
  color: rgba(239, 237, 232, 0.3);
  font-family: 'Roboto';
  font-size: 14px;
  line-height: calc(18px / 14px);
  margin-right: 8px;
`,W=t.span`
  color: #e6533c;
  font-family: 'Roboto';
  font-size: 14px;
  line-height: calc(18px / 14px);
`,et=t.button`
  width: 157px;
  height: 42px;
  border: none;
  margin-top: 24px;
  margin-bottom: 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #e6533c;
  color: #efede8;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18px / 16px);
  @media screen and (min-width: 768px) {
    width: 162px;
    height: 52px;
    margin-top: 32px;
  }
`,tt=t(G)`
  color: rgba(239, 237, 232, 0.3);
  font-family: 'Roboto';
  font-size: 14px;
  line-height: calc(18px / 14px);
`,it=t.span`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`,nt=()=>{const i=h();return e.jsxs(Qe,{children:[e.jsx(it,{onClick:()=>{i(f()),i(C())},children:e.jsx("svg",{stroke:"#EFEDE8",width:26,height:26,children:e.jsx("use",{href:u+"#icon-close"})})}),e.jsx(_e,{children:e.jsx("img",{src:Ge,alt:"like"})}),e.jsx($e,{children:"Well done"}),e.jsxs("ul",{children:[e.jsxs(A,{children:[e.jsx(X,{children:"Your time:"}),e.jsx(W,{children:"3 minutes"})]}),e.jsxs(A,{children:[e.jsx(X,{children:"Burned calories:"}),e.jsx(W,{children:"150"})]})]}),e.jsx(et,{type:"submit",onClick:()=>{i(C()),i(f())},children:"Next exercise"}),e.jsxs(tt,{onClick:()=>{i(f()),i(C())},to:"/diary",children:["To the diary",e.jsx("svg",{width:16,height:16,style:{stroke:"rgba(239, 237, 232, 0.30)",verticalAlign:"top"},children:e.jsx("use",{href:u+"#icon-next"})})]})]})},ot=()=>{const i=h(),n=b(ne),r=b(ie),s=b(se),o=s[r];return p.useEffect(()=>{i(Q())},[i]),e.jsxs(Ue,{children:[e.jsx(Ae,{children:s.map(({bodyPart:c,name:d,target:g,burnedCalories:x},l)=>e.jsx(B,{name:d.charAt(0).toUpperCase()+d.slice(1),burnedCalories:x,bodyPart:c.charAt(0).toUpperCase()+c.slice(1),target:g.charAt(0).toUpperCase()+g.slice(1),index:l},l))}),e.jsx(Xe,{}),o&&e.jsx(F,{children:n?e.jsx(nt,{}):e.jsx(P,{data:o})})]})},rt=t.div`
  width: 335px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  @media screen and (min-width: 768px) {
    width: 704px;
    padding-top: 32px;
    padding-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1248px;
  }
`,st=t.button`
  border: none;
  background-color: transparent;
  color: rgba(239, 237, 232, 0.4);
  display: inline-flex;
  margin-bottom: 12px;
  font-family: 'Roboto';
  font-size: 14px;
  line-height: calc(18px / 14px);
  padding: 0;
  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: calc(24px / 16px);
  }
`,ct=t.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  max-width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 32px;
  }
`,xt=()=>{const i=b(te),n=b(ee),r=b($),s=h();return e.jsxs(rt,{children:[i&&e.jsxs(st,{onClick:()=>{s(K()),s(T("Exercises"))},children:[e.jsx("svg",{width:16,height:16,style:{stroke:"rgba(239, 237, 232, 0.4)"},children:e.jsx("use",{href:u+"#icon-back"})}),"Back"]}),e.jsxs(ct,{children:[e.jsx(V,{title:r}),e.jsx(we,{})]}),i?e.jsx(ot,{}):e.jsx(q,{page:n})]})};export{xt as default};
