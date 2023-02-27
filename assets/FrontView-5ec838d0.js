import{m as w,a as C,_ as h,r as i,o as n,c as a,b as t,d as c,w as u,t as e,e as _,f as d,F as g,g as $,h as H,R as S}from"./index-a4fe411b.js";import{c as f}from"./cartStore-32f01f68.js";import{_ as T}from"./HHSTAY-logo-25711c69.js";const v="/HH-STAY/image/cart.png",A={computed:{...w(f,["carts","cartStatus","cartLength","cartTotal","orderStatus"])},methods:{...C(f,["getCartList","removeCartItem"]),showCartBlock(){this.$refs.cartHover.classList.remove("d-none")},closeCartBlock(){this.$refs.cartHover.classList.add("d-none")}},mounted(){this.getCartList()}},B={class:"navbar navbar-expand-lg navbar-light border-bottom border-2 border-primary shadow-sm fixed-top bg-white py-0"},L={class:"container-fluid"},j=t("img",{src:T,alt:"logo",style:{height:"50px",width:"200px"}},null,-1),V={class:"d-flex"},N={key:0,class:"position-relative"},Y={key:0,class:"cart-dot text-white fs-sm px-1"},R=t("p",{class:"text-center bg-primary text-dark p-2 fs-5 rounded-top"}," 購物車清單 ",-1),F={key:0,class:"d-flex flex-column justify-content-center align-items-center p-5"},I=t("p",{class:"mb-3"},[d("購物車內沒有商品"),t("br"),d("馬上開始選購吧～")],-1),q=t("img",{src:v,alt:"cart",class:"img-fluid",width:"100"},null,-1),D=[I,q],M={key:1,class:"p-3",style:{height:"350px","overflow-y":"scroll"}},E={class:"row g-0"},G={class:"d-none d-md-flex col-md-2 d-flex align-items-center justify-content-center border-end border-1 border-primary"},O={class:"col-12 col-md-10"},P={class:"card-body"},W={class:"d-flex justify-content-between align-items-center"},z={class:"card-title fw-blod ellipsis2 me-2"},J=["onClick"],K={class:"mb-2"},Q={class:"d-flex justify-content-between align-items-center"},U={class:"text-muted"},X={key:0},Z={class:"fs-7 text-secondary"},tt={class:"fs-5 fw-blod ms-1 text-black"},st={key:2,class:"px-3 pb-3 d-flex justify-content-between align-items-center"};function et(o,l,b,k,y,m){const r=i("RouterLink"),p=i("font-awesome-icon");return n(),a(g,null,[t("nav",B,[t("div",L,[t("h1",null,[c(r,{to:"/"},{default:u(()=>[j]),_:1})]),t("div",V,[this.$route.path!=="/cart"&&this.$route.path!=="/cart/info"&&this.$route.path!=="/cart/finish"?(n(),a("div",N,[t("img",{src:v,alt:"cart",width:"35",class:"me-2 me-md-5 cart-btn",onMouseenter:l[0]||(l[0]=s=>m.showCartBlock())},null,32),o.cartLength?(n(),a("div",Y,e(o.cartLength),1)):_("",!0)])):_("",!0),c(r,{to:"/admin/products"},{default:u(()=>[d("後台")]),_:1})])])]),t("div",{onMouseleave:l[2]||(l[2]=s=>m.closeCartBlock()),ref:"cartHover",class:"d-none cart-hover-block bg-light shadow-lg rounded-2"},[R,o.cartStatus?(n(),a("div",M,[t("ul",null,[(n(!0),a(g,null,$(o.carts.carts,(s,x)=>(n(),a("li",{class:"card mb-3",key:s.id},[t("div",E,[t("div",G,[t("span",null,e(x+1),1)]),t("div",O,[t("div",P,[t("div",W,[t("h5",z,e(s.product.title),1),t("button",{onClick:ht=>o.removeCartItem(s.id),class:"d-none d-md-block btn ms-3 link-secondary"},[c(p,{icon:"fa-solid fa-trash-can"})],8,J)]),t("p",K,"使用日期："+e(s.date),1),t("div",Q,[t("ul",U,[t("li",null,e(s.product.ticketA)+" x "+e(s.ticketA_qty),1),s.ticketB_qty?(n(),a("li",X,e(s.product.ticketB)+" x "+e(s.ticketB_qty),1)):_("",!0)]),t("p",Z,[d(" TWD"),t("span",tt,e(s.cartItemTotal),1)])])])])])]))),128))])])):(n(),a("div",F,D)),o.cartStatus?(n(),a("div",st,[t("div",null,[t("span",null,e(o.cartLength)+"件商品",1),t("span",null,"總共"+e(o.cartTotal)+"元",1)]),c(r,{onClick:l[1]||(l[1]=s=>m.closeCartBlock()),to:"/cart",class:"btn btn-primary text-dark"},{default:u(()=>[d(" 查看購物車 ")]),_:1})])):_("",!0)],544)],64)}const ot=h(A,[["render",et]]),nt="/HH-STAY/image/logo-1.png",at="/HH-STAY/image/logo-2.png",lt="/HH-STAY/image/logo-3.png",ct="/HH-STAY/image/logo-4.png",rt="/HH-STAY/image/logo-5.png",it="/HH-STAY/image/logo-6.png",dt={},mt=H('<section class="bg-light text-dark pt-5 pb-2"><div class="container"><div class="d-lg-flex justify-content-around align-items-center"><h3 class="mb-5 me-lg-5 mb-lg-0 text-center text-lg-start"> 選擇HH stay<br class="d-none d-lg-block">享受 happy holiday </h3><ul class="d-flex justify-content-center"><li class="move move-up move-fast"><img src="'+nt+'" alt="logo" class="img-fluid"></li><li class="move move-down"><img src="'+at+'" alt="logo" class="img-fluid"></li><li class="move move-up move-slow"><img src="'+lt+'" alt="logo" class="img-fluid"></li><li class="move move-down move-fast"><img src="'+ct+'" alt="logo" class="img-fluid"></li><li class="move move-up"><img src="'+rt+'" alt="logo" class="img-fluid"></li><li class="move move-down move-slow"><img src="'+it+'" alt="logo" class="img-fluid"></li></ul></div><ul class="mt-5 d-flex justify-content-center justify-content-lg-end me-lg-5"><li><a href="#" class="link-dark">隱私權政策</a><span class="mx-2">|</span></li><li><a href="#" class="link-dark">聯絡我們</a></li></ul></div></section><footer class="bg-primary text-dark text-center p-1 p-lg-3"><p class="mb-1"> 本網站僅供個人作品使用，不提供商業用途<span class="mx-2">|</span>Amberhh </p><p>COPYRIGHT © 2023 All rights reserved.</p></footer>',2);function _t(o,l){return mt}const pt=h(dt,[["render",_t]]),ut={data(){return{}},components:{RouterView:S,NavbarComponent:ot,FooterComponent:pt}};function gt(o,l,b,k,y,m){const r=i("NavbarComponent"),p=i("RouterView"),s=i("FooterComponent");return n(),a(g,null,[c(r),c(p),c(s)],64)}const kt=h(ut,[["render",gt]]);export{kt as default};