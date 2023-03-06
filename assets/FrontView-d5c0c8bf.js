import{m as x,a as C,_ as f,c as v,r as i,o as l,b as a,d as t,e as r,w as b,t as e,f as m,F as h,g as T,h as p,i as H,R as $,n as S}from"./index-dc2130ca.js";import{_ as B}from"./HHSTAY-logo-25711c69.js";const k="/HH-STAY/image/cart.png",A={computed:{...x(v,["carts","cartStatus","cartLength","cartTotal","orderStatus"])},methods:{...C(v,["getCartList","removeCartItem"]),showCartBlock(){this.$refs.cartHover.classList.remove("d-none")},closeCartBlock(){this.$refs.cartHover.classList.add("d-none")}},mounted(){this.getCartList()}},L={class:"navbar navbar-expand-lg navbar-light border-bottom border-2 border-primary fixed-top bg-light py-0"},V={class:"container-fluid"},j=t("img",{src:B,alt:"logo",style:{height:"50px",width:"200px"}},null,-1),Y={key:0,class:"position-relative"},N={key:0,class:"cart-dot text-white fs-sm px-1"},F=t("p",{class:"text-center bg-primary text-dark p-2 fs-5 rounded-top"}," 購物車清單 ",-1),R={key:0,class:"d-flex flex-column justify-content-center align-items-center p-5"},I=t("p",{class:"mb-3"},[p("購物車內沒有商品"),t("br"),p("馬上開始選購吧～")],-1),q=t("img",{src:k,alt:"cart",class:"img-fluid",width:"100"},null,-1),E=[I,q],D={key:1,class:"p-3",style:{height:"350px","overflow-y":"scroll"}},M={class:"row g-0"},O={class:"d-none d-md-flex col-md-2 d-flex align-items-center justify-content-center border-end border-1 border-primary"},P={class:"col-12 col-md-10"},z={class:"card-body"},G={class:"d-flex justify-content-between align-items-center"},W={class:"card-title fw-blod ellipsis2 me-2"},J=["onClick"],K={class:"mb-2"},Q={class:"d-flex justify-content-between align-items-center"},U={class:"text-muted"},X={key:0},Z={class:"fs-7 text-secondary"},tt={class:"fs-5 fw-blod ms-1 text-black"},st={key:2,class:"px-3 pb-3 d-flex justify-content-between align-items-center"};function ot(n,o,w,y,_,c){const d=i("RouterLink"),u=i("font-awesome-icon");return l(),a(h,null,[t("nav",L,[t("div",V,[t("h1",null,[r(d,{to:"/"},{default:b(()=>[j]),_:1})]),this.$route.path!=="/cart"&&this.$route.path!=="/cart/info"&&this.$route.path!=="/cart/finish"?(l(),a("div",Y,[t("img",{src:k,alt:"cart",width:"32",class:"me-2 me-md-5",onMouseenter:o[0]||(o[0]=s=>c.showCartBlock()),onTouchstart:o[1]||(o[1]=s=>c.showCartBlock())},null,32),n.cartLength?(l(),a("div",N,e(n.cartLength),1)):m("",!0)])):m("",!0)])]),t("div",{onMouseleave:o[3]||(o[3]=s=>c.closeCartBlock()),onTouchend:o[4]||(o[4]=s=>c.closeCartBlock()),ref:"cartHover",class:"d-none cart-hover-block bg-light shadow-lg rounded-2"},[F,n.cartStatus?(l(),a("div",D,[t("ul",null,[(l(!0),a(h,null,T(n.carts.carts,(s,g)=>(l(),a("li",{class:"card mb-3",key:s.id},[t("div",M,[t("div",O,[t("span",null,e(g+1),1)]),t("div",P,[t("div",z,[t("div",G,[t("h5",W,e(s.product.title),1),t("button",{onClick:kt=>n.removeCartItem(s.id),class:"d-none d-md-block btn ms-3 link-secondary"},[r(u,{icon:"fa-solid fa-trash-can"})],8,J)]),t("p",K,"使用日期："+e(s.date),1),t("div",Q,[t("ul",U,[t("li",null,e(s.product.ticketA)+" x "+e(s.ticketA_qty),1),s.ticketB_qty?(l(),a("li",X,e(s.product.ticketB)+" x "+e(s.ticketB_qty),1)):m("",!0)]),t("p",Z,[p(" TWD"),t("span",tt,e(s.cartItemTotal),1)])])])])])]))),128))])])):(l(),a("div",R,E)),n.cartStatus?(l(),a("div",st,[t("div",null,[t("span",null,e(n.cartLength)+"件商品",1),t("span",null,"總共"+e(n.cartTotal)+"元",1)]),r(d,{onClick:o[2]||(o[2]=s=>c.closeCartBlock()),to:"/cart",class:"btn btn-primary text-dark"},{default:b(()=>[p(" 查看購物車 ")]),_:1})])):m("",!0)],544)],64)}const et=f(A,[["render",ot]]),nt="/HH-STAY/image/logo-1.png",lt="/HH-STAY/image/logo-2.png",at="/HH-STAY/image/logo-3.png",ct="/HH-STAY/image/logo-4.png",rt="/HH-STAY/image/logo-5.png",it="/HH-STAY/image/logo-6.png",dt={},mt=H('<section class="bg-light text-dark pt-5 pb-2"><div class="container"><div class="d-lg-flex justify-content-around align-items-center"><h3 class="mb-5 me-lg-5 mb-lg-0 text-center text-lg-start"> 選擇HH stay<br class="d-none d-lg-block">享受 happy holiday </h3><ul class="d-flex justify-content-center"><li class="move move-up move-fast"><img src="'+nt+'" alt="logo" class="img-fluid"></li><li class="move move-down"><img src="'+lt+'" alt="logo" class="img-fluid"></li><li class="move move-up move-slow"><img src="'+at+'" alt="logo" class="img-fluid"></li><li class="move move-down move-fast"><img src="'+ct+'" alt="logo" class="img-fluid"></li><li class="move move-up"><img src="'+rt+'" alt="logo" class="img-fluid"></li><li class="move move-down move-slow"><img src="'+it+'" alt="logo" class="img-fluid"></li></ul></div><ul class="mt-5 d-flex justify-content-center justify-content-lg-end me-lg-5"><li><a href="#" class="link-dark">隱私權政策</a><span class="mx-2">|</span></li><li><a href="#" class="link-dark">聯絡我們</a></li></ul></div></section><footer class="bg-primary text-dark text-center p-1 p-lg-3"><p class="mb-1"> 本網站僅供個人作品使用，<br class="d-lg-none">不提供商業用途<span class="mx-2">|</span>Amberhh </p><p>COPYRIGHT © 2023 All rights reserved.</p></footer>',2);function pt(n,o){return mt}const _t=f(dt,[["render",pt]]),ut="/HH-STAY/image/top.png";const gt={data(){return{showTopBtn:""}},components:{RouterView:$,NavbarComponent:et,FooterComponent:_t},methods:{scrollTop(){window.scrollTo({top:0,behavior:"smooth"})},handleScroll(){this.showTopBtn=document.documentElement.scrollTop>800}},created(){window.addEventListener("scroll",this.handleScroll)}},ht=t("span",{class:"raleway top-content fw-bold fs-4 text-dark"},"TOP",-1),ft=t("img",{src:ut,alt:"top-icon"},null,-1),vt=[ht,ft];function bt(n,o,w,y,_,c){const d=i("NavbarComponent"),u=i("RouterView"),s=i("FooterComponent");return l(),a(h,null,[r(d),r(u),r(s),t("div",{class:S(["top flex-column",{"d-flex":_.showTopBtn,"d-none":!_.showTopBtn}]),onClick:o[0]||(o[0]=(...g)=>c.scrollTop&&c.scrollTop(...g))},vt,2)],64)}const xt=f(gt,[["render",bt]]);export{xt as default};
