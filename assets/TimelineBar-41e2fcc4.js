import{_ as i,m as n,o as c,c as l,b as e,n as o,f as t}from"./index-a4fe411b.js";import{c as r}from"./cartStore-32f01f68.js";const a={computed:{...n(r,["orderStatus"])}},d={class:"container py-5 mt-max mb-5 text-dark"},_=e("div",{class:"row justify-content-center"},[e("div",{class:"col-9 col-lg-9 timeline"})],-1),p={class:"row text-center"},m={class:"col-3"},h=e("p",null,[t("購物"),e("br",{class:"d-lg-none"}),t("清單")],-1),u=[h],v={class:"col-3"},f=e("p",{class:"mb-0"},[t("訂購"),e("br",{class:"d-lg-none"}),t("資訊")],-1),b=[f],S={class:"col-3"},g=e("p",null,[t("確認"),e("br",{class:"d-lg-none"}),t("付款")],-1),B=[g],$={class:"col-3"},k=e("p",null,[t("訂單"),e("br",{class:"d-lg-none"}),t("完成")],-1),x=[k];function y(s,w,N,T,V,j){return c(),l("section",d,[_,e("div",p,[e("div",m,[e("div",{class:o(["timeline-pointer timeline-pointer-first",{"timeline-pointer-active":s.orderStatus==="cartlist"}])},u,2)]),e("div",v,[e("div",{class:o(["timeline-pointer timeline-pointer-second",{"timeline-pointer-active":s.orderStatus==="fillInfo"}])},b,2)]),e("div",S,[e("div",{class:o(["timeline-pointer timeline-pointer-third",{"timeline-pointer-active":s.orderStatus==="pay"}])},B,2)]),e("div",$,[e("div",{class:o(["timeline-pointer timeline-pointer-fourth",{"timeline-pointer-active":s.orderStatus==="finish"}])},x,2)])])])}const E=i(a,[["render",y]]);export{E as default};
