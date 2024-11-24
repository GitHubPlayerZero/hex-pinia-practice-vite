import{u as b,a as m}from"./cartStore-DJMXgTR9.js";import{o as e,c as o,b as t,d as g,t as l,g as c,_ as f,s as $,F as _,r as p,w as v,e as h}from"./index-Chk67jAV.js";const y={class:"navbar bg-light"},k={class:"container-fluid"},w={type:"button",class:"btn nav-link"},x={class:"badge rounded-pill bg-danger text-white"},C={__name:"Navbar",setup(i){const a=b();return(n,d)=>(e(),o("nav",y,[t("div",k,[d[1]||(d[1]=t("span",{class:"navbar-brand",href:"#"},"香香麵攤",-1)),t("button",w,[d[0]||(d[0]=g(" 購物車 ")),t("span",x,l(c(a).cart.length),1)])])]))}},S={class:"bg-light p-4 my-4"},N={key:0},I={key:1,class:"table align-middle"},P={width:"100"},B=["onClick"],D={width:"100"},T=["src","alt"],V={width:"200"},F=["value","onChange"],U=["value"],q={width:"200",class:"text-end"},E={colspan:"5",class:"text-end"},L={__name:"Cart",setup(i){const a=b();console.log("cartStore ==>",a);const{cartInfo:n}=$(a);return console.log("cartInfo ==>",n),(d,u)=>(e(),o("div",S,[c(n).cartDetail.length<=0?(e(),o("div",N,"購物車沒有任何品項")):(e(),o("table",I,[t("tbody",null,[(e(!0),o(_,null,p(c(n).cartDetail,s=>(e(),o("tr",{key:s.id},[t("td",P,[t("a",{href:"#",class:"text-dark",onClick:v(r=>c(a).remove(s.id),["prevent"])},u[0]||(u[0]=[t("i",{class:"fas fa-times"},null,-1)]),8,B)]),t("td",D,[t("img",{src:s.product.imageUrl,class:"table-image",alt:s.product.title},null,8,T)]),t("td",null,l(s.product.title),1),t("td",V,[t("select",{class:"form-select",value:s.qty,onChange:r=>c(a).setQuantity(r,s.id)},[(e(),o(_,null,p(20,r=>t("option",{key:r,value:r},l(r),9,U)),64))],40,F)]),t("td",q,"$ "+l(s.subtotal),1)]))),128))]),t("tfoot",null,[t("tr",null,[t("td",E,"總金額 NT$ "+l(c(n).total),1)])])]))]))}},M=f(L,[["__scopeId","data-v-4b5f5db9"]]),Q={class:"row row-cols-3 g-4 my-3"},R={class:"card"},j=["src","alt"],z={class:"card-body"},A={class:"card-title"},G={class:"float-end"},H=["onClick"],J={__name:"Products",setup(i){const a=m(),n=b();return(d,u)=>(e(),o("div",Q,[(e(!0),o(_,null,p(c(a).sortedProducts,s=>(e(),o("div",{class:"col",key:s.id},[t("div",R,[t("img",{src:s.imageUrl,class:"card-img-top",alt:s.title},null,8,j),t("div",z,[t("h6",A,[g(l(s.title)+" ",1),t("span",G,"$ "+l(s.price),1)]),t("a",{href:"#",class:"btn btn-outline-primary w-100",onClick:v(r=>c(n).add(s.id),["prevent"])},"加入購物車",8,H)])])]))),128))]))}},K=f(J,[["__scopeId","data-v-5b68b751"]]),X={__name:"SweetComposition",setup(i){return(a,n)=>(e(),o(_,null,[h(C),h(M),h(K)],64))}};export{X as default};
