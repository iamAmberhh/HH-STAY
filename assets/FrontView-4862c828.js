import{m as x,a as T,_ as v,c as w,r as d,o as s,b as n,d as t,e as c,w as h,f as C,t as o,g as _,F as f,h as H,i as p,j as S,R as $,n as B}from"./index-cca5c068.js";import{_ as A}from"./HHSTAY-logo-25711c69.js";const b="/HH-STAY/image/cart.png",L={data(){return{mobileScreen:window.innerWidth<=600}},computed:{...x(w,["carts","cartStatus","cartLength","cartTotal","orderStatus"])},methods:{...T(w,["getCartList","removeCartItem"]),showCartBlock(){this.$refs.cartHover.classList.remove("d-none")},closeCartBlock(){this.$refs.cartHover.classList.add("d-none")}},mounted(){this.getCartList()}},j={class:"navbar navbar-expand-lg navbar-light border-bottom border-2 border-primary fixed-top bg-light py-0"},V={class:"container-fluid"},Y=t("img",{src:A,alt:"logo",style:{height:"50px",width:"200px"}},null,-1),N={key:0,class:"position-relative"},F=t("img",{src:b,alt:"cart",width:"32",class:"me-2 me-md-5"},null,-1),R={key:2,class:"cart-dot text-white fs-sm px-1"},I=t("p",{class:"text-center bg-primary text-dark p-2 fs-5 rounded-top"}," 購物車清單 ",-1),q={key:0,class:"d-flex flex-column justify-content-center align-items-center p-5"},E=t("p",{class:"mb-3"},[p("購物車內沒有商品"),t("br"),p("馬上開始選購吧～")],-1),D=t("img",{src:b,alt:"cart",class:"img-fluid",width:"100"},null,-1),M=[E,D],O={key:1,class:"p-3",style:{height:"350px","overflow-y":"scroll"}},P={class:"row g-0"},W={class:"d-none d-md-flex col-md-2 d-flex align-items-center justify-content-center border-end border-1 border-primary"},z={class:"col-12 col-md-10"},G={class:"card-body"},J={class:"d-flex justify-content-between align-items-center"},K={class:"card-title fw-blod ellipsis2 me-2"},Q=["onClick"],U={class:"mb-2"},X={class:"d-flex justify-content-between align-items-center"},Z={class:"text-muted"},tt={key:0},et={class:"fs-7 text-secondary"},st={class:"fs-5 fw-blod ms-1 text-black"},ot={key:2,class:"px-3 pb-3 d-flex justify-content-between align-items-center"};function nt(l,a,k,y,m,r){const i=d("RouterLink"),u=d("font-awesome-icon");return s(),n(f,null,[t("nav",j,[t("div",V,[t("h1",null,[c(i,{to:"/"},{default:h(()=>[Y]),_:1})]),this.$route.path!=="/cart"&&this.$route.path!=="/cart/info"&&this.$route.path!=="/cart/finish"?(s(),n("div",N,[m.mobileScreen?(s(),C(i,{key:0,to:"/cart"},{default:h(()=>[F]),_:1})):(s(),n("img",{key:1,src:b,alt:"cart",width:"32",class:"me-2 me-md-5",onMouseenter:a[0]||(a[0]=e=>r.showCartBlock())},null,32)),l.cartLength?(s(),n("div",R,o(l.cartLength),1)):_("",!0)])):_("",!0)])]),t("div",{onMouseleave:a[1]||(a[1]=e=>r.closeCartBlock()),ref:"cartHover",class:"d-none cart-hover-block bg-light shadow-lg rounded-2"},[I,l.cartStatus?(s(),n("div",O,[t("ul",null,[(s(!0),n(f,null,H(l.carts.carts,(e,g)=>(s(),n("li",{class:"card mb-3",key:e.id},[t("div",P,[t("div",W,[t("span",null,o(g+1),1)]),t("div",z,[t("div",G,[t("div",J,[t("h5",K,o(e.product.title),1),t("button",{onClick:yt=>l.removeCartItem(e.id),class:"d-none d-md-block btn ms-3 link-secondary"},[c(u,{icon:"fa-solid fa-trash-can"})],8,Q)]),t("p",U,"使用日期："+o(e.date),1),t("div",X,[t("ul",Z,[t("li",null,o(e.product.ticketA)+" x "+o(e.ticketA_qty),1),e.ticketB_qty?(s(),n("li",tt,o(e.product.ticketB)+" x "+o(e.ticketB_qty),1)):_("",!0)]),t("p",et,[p(" TWD"),t("span",st,o(e.cartItemTotal),1)])])])])])]))),128))])])):(s(),n("div",q,M)),l.cartStatus?(s(),n("div",ot,[t("div",null,[t("span",null,o(l.cartLength)+"件商品",1),t("span",null,"總共"+o(l.cartTotal)+"元",1)]),c(i,{to:"/cart",class:"btn btn-primary text-dark"},{default:h(()=>[p(" 查看購物車 ")]),_:1})])):_("",!0)],544)],64)}const lt=v(L,[["render",nt]]),at="/HH-STAY/image/logo-1.png",ct="/HH-STAY/image/logo-2.png",rt="/HH-STAY/image/logo-3.png",it="/HH-STAY/image/logo-4.png",dt="/HH-STAY/image/logo-5.png",mt="/HH-STAY/image/logo-6.png",_t={},pt=S('<section class="bg-light text-dark pt-5 pb-2"><div class="container"><div class="d-lg-flex justify-content-around align-items-center"><h3 class="mb-5 me-lg-5 mb-lg-0 text-center text-lg-start"> 選擇HH stay<br class="d-none d-lg-block">享受 happy holiday </h3><ul class="d-flex justify-content-center"><li class="move move-up move-fast"><img src="'+at+'" alt="logo" class="img-fluid"></li><li class="move move-down"><img src="'+ct+'" alt="logo" class="img-fluid"></li><li class="move move-up move-slow"><img src="'+rt+'" alt="logo" class="img-fluid"></li><li class="move move-down move-fast"><img src="'+it+'" alt="logo" class="img-fluid"></li><li class="move move-up"><img src="'+dt+'" alt="logo" class="img-fluid"></li><li class="move move-down move-slow"><img src="'+mt+'" alt="logo" class="img-fluid"></li></ul></div><ul class="mt-5 d-flex justify-content-center justify-content-lg-end me-lg-5"><li><a href="#" class="link-dark">隱私權政策</a><span class="mx-2">|</span></li><li><a href="#" class="link-dark">聯絡我們</a></li></ul></div></section><footer class="bg-primary text-dark text-center p-1 p-lg-3"><p class="mb-1"> 本網站僅供個人作品使用，<br class="d-lg-none">不提供商業用途<span class="mx-2">|</span>Amberhh </p><p>COPYRIGHT © 2023 All rights reserved.</p></footer>',2);function ut(l,a){return pt}const gt=v(_t,[["render",ut]]),ht="/HH-STAY/image/top.png";const ft={data(){return{showTopBtn:""}},components:{RouterView:$,NavbarComponent:lt,FooterComponent:gt},methods:{scrollTop(){window.scrollTo({top:0,behavior:"smooth"})},handleScroll(){this.showTopBtn=document.documentElement.scrollTop>800}},created(){window.addEventListener("scroll",this.handleScroll)}},vt=t("span",{class:"raleway top-content fw-bold fs-4 text-dark"},"TOP",-1),bt=t("img",{src:ht,alt:"top-icon"},null,-1),wt=[vt,bt];function kt(l,a,k,y,m,r){const i=d("NavbarComponent"),u=d("RouterView"),e=d("FooterComponent");return s(),n(f,null,[c(i),c(u),c(e),t("div",{class:B(["top flex-column",{"d-flex":m.showTopBtn,"d-none":!m.showTopBtn}]),onClick:a[0]||(a[0]=(...g)=>r.scrollTop&&r.scrollTop(...g))},wt,2)],64)}const Ct=v(ft,[["render",kt]]);export{Ct as default};
