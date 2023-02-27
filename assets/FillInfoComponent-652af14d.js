import{c as m}from"./cartStore-32f01f68.js";import{m as v,a as y,_ as P,o as n,c as u,b as e,F as x,g as E,t as l,e as f,f as p,E as S,r as _,l as T,w as V,d as c,n as g,C as w,D}from"./index-a4fe411b.js";const B={computed:{...v(m,["carts","cartLength","cartTotal"])},methods:{...y(m,["getCartList"])}},C={class:"col-lg-7"},O=e("p",{class:"mb-2"},"購物明細",-1),H={class:"row g-0"},L={class:"col-2 d-flex align-items-center justify-content-center border-end border-1 border-primary"},M={class:"col-10"},N={class:"card-body"},F={class:"card-title fw-blod ellipsis2"},U={class:"mb-2"},j={class:"d-flex justify-content-between align-items-center"},R={class:"text-muted"},q={key:0},Y={class:"fs-7 text-secondary"},z={class:"fs-5 fw-blod ms-1 text-black"},W={class:"row justify-content-end"},G={class:"col-lg-5 text-end"},J={class:"mb-3"};function K(o,s,r,$,a,h){return n(),u("div",C,[O,e("ul",null,[(n(!0),u(x,null,E(o.carts.carts,(t,i)=>(n(),u("li",{class:"card mb-3",key:t.id},[e("div",H,[e("div",L,[e("span",null,l(i+1),1)]),e("div",M,[e("div",N,[e("h5",F,l(t.product.title),1),e("p",U,"使用日期："+l(t.date),1),e("div",j,[e("ul",R,[e("li",null,l(t.product.ticketA)+" x "+l(t.ticketA_qty),1),t.product.ticketB?(n(),u("li",q,l(t.product.ticketB)+" x "+l(t.ticketB_qty),1)):f("",!0)]),e("p",Y,[p(" TWD"),e("span",z,l(t.cartItemTotal),1)])])])])])]))),128))]),e("div",W,[e("div",G,[e("div",J,[e("span",null,l(o.cartLength)+"件商品",1),e("span",null,"總共"+l(o.cartTotal)+"元",1)])])])])}const Q=P(B,[["render",K]]),{VITE_APP_API:X,VITE_APP_PATH:Z}={VITE_APP_API:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"amberhh",BASE_URL:"/HH-STAY/",MODE:"production",DEV:!1,PROD:!0},ee={props:["user","message","orderId"],computed:{...v(m,["orderStatus"])},methods:{...y(m,["changeStatus"]),pay(o){this.$http.post(`${X}v2/api/${Z}/pay/${o}`).then(s=>{alert(s.data.message),this.changeStatus("finish"),this.$router.push("/cart/finish")}).catch(s=>{alert(s.response.data.message)})}}},se=e("div",{class:"mb-3"},[e("p",null,"訂購資訊")],-1),te={class:"mb-3"},oe={class:"mb-3"},ae={class:"mb-3"},le={class:"mb-3"},ne={key:0,class:"mb-3"},re={class:"d-flex justify-content-end"},ce={class:"w-50"};function de(o,s,r,$,a,h){return n(),u("form",null,[se,e("div",te,[e("p",null,"訂購大名："+l(r.user.name),1)]),e("div",oe,[e("p",null,"手機號碼："+l(r.user.tel),1)]),e("div",ae,[e("p",null,"電子信箱："+l(r.user.email),1)]),e("div",le,[e("p",null,"付款方式："+l(r.user.pay),1)]),r.message?(n(),u("div",ne,[e("p",null,"備註留言："+l(r.message),1)])):f("",!0),e("ul",re,[e("li",ce,[e("button",{type:"button",class:"btn btn-outline-primary text-dark w-100",onClick:s[0]||(s[0]=t=>h.pay(r.orderId))}," 確認付款 ")])])])}const ie=P(ee,[["render",de]]),{VITE_APP_API:ue,VITE_APP_PATH:me}={VITE_APP_API:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"amberhh",BASE_URL:"/HH-STAY/",MODE:"production",DEV:!1,PROD:!0},_e={props:["cartTotal"],data(){return{user:{cartTotal:null,email:"",name:"",tel:"",pay:"",address:"不需要地址"},message:"",orderId:null}},computed:{...v(m,["orderStatus"])},methods:{...y(m,["getCartList","changeStatus"]),isPhone(o){return/^(09)[0-9]{8}$/.test(o)?!0:"需要正確的手機號碼"},onSubmit(){const o={user:this.user,message:this.message};this.$http.post(`${ue}v2/api/${me}/order`,{data:o}).then(s=>{this.orderId=s.data.orderId,alert(s.data.message),this.changeStatus("pay")}).catch(s=>{alert(s.response.data.message)})}},components:{ErrorMessage:S,OrderEstablished:ie},mounted(){this.user.cartTotal=this.cartTotal}},he={class:"col-lg-5"},pe={class:"mb-3"},fe=e("label",{for:"orderName",class:"form-label"},[p("訂購大名"),e("span",{class:"ms-1 text-danger"},"*")],-1),be={class:"mb-3"},ge=e("label",{for:"orderPhone",class:"form-label"},[p("手機號碼"),e("span",{class:"ms-1 text-danger"},"*")],-1),ve={class:"mb-3"},ye=e("label",{for:"email",class:"form-label"},[p("電子信箱"),e("span",{class:"ms-1 text-danger"},"*")],-1),Pe={class:"mb-3"},$e=e("label",{for:"orderPay",class:"form-label"},[p("付款方式"),e("span",{class:"ms-1 text-danger"},"*")],-1),Ve=e("option",{value:"",selected:"",disabled:"",class:"text-muted"}," 請選擇付款方式 ",-1),Te=e("option",{value:"信用卡"},"信用卡",-1),Ae=e("option",{value:"超商代碼"},"超商代碼",-1),Ie=e("option",{value:"行動支付"},"行動支付",-1),ke=e("option",{value:"銀行轉帳"},"銀行轉帳",-1),xe={class:"mb-3"},Ee=e("label",{for:"orderMessage",class:"form-label"},"備註留言",-1),Se={class:"d-flex justify-content-end"},we={class:"me-2 w-50"},De=e("li",{class:"w-50"},[e("button",{type:"submit",class:"btn btn-outline-primary text-dark w-100"}," 送出訂單 ")],-1);function Be(o,s,r,$,a,h){const t=_("VField"),i=_("ErrorMessage"),A=_("RouterLink"),I=_("VForm"),k=_("OrderEstablished");return n(),u("div",he,[o.orderStatus==="fillInfo"?(n(),T(I,{key:0,ref:"form",onSubmit:h.onSubmit},{default:V(({errors:b})=>[e("div",pe,[fe,c(t,{id:"orderName",name:"姓名",type:"text",class:g(["form-control shadow-sm",{"is-invalid":b.姓名}]),placeholder:"請輸入訂購者姓名",rules:"required",modelValue:a.user.name,"onUpdate:modelValue":s[0]||(s[0]=d=>a.user.name=d)},null,8,["class","modelValue"]),c(i,{name:"姓名",class:"invalid-feedback"})]),e("div",be,[ge,c(t,{id:"orderPhone",name:"手機號碼",type:"tel",class:g(["form-control",{"is-invalid":b.手機號碼}]),placeholder:"請輸入手機號碼 ex: 0912345678",rules:h.isPhone,modelValue:a.user.tel,"onUpdate:modelValue":s[1]||(s[1]=d=>a.user.tel=d)},null,8,["class","rules","modelValue"]),c(i,{name:"手機號碼",class:"invalid-feedback"})]),e("div",ve,[ye,c(t,{id:"email",name:"電子信箱",type:"email",class:g(["form-control shadow-sm",{"is-invalid":b.電子信箱}]),placeholder:"請輸入電子信箱",rules:"email|required",modelValue:a.user.email,"onUpdate:modelValue":s[2]||(s[2]=d=>a.user.email=d)},null,8,["class","modelValue"]),c(i,{name:"電子信箱",class:"invalid-feedback"})]),e("div",Pe,[$e,c(t,{class:g(["form-select shadow-sm",{"is-invalid":b.付款方式}]),id:"orderPay",modelValue:a.user.pay,"onUpdate:modelValue":s[3]||(s[3]=d=>a.user.pay=d),name:"付款方式",rules:"required",as:"select"},{default:V(()=>[Ve,Te,Ae,Ie,ke]),_:2},1032,["modelValue","class"]),c(i,{name:"付款方式",class:"invalid-feedback"})]),e("div",xe,[Ee,w(e("textarea",{id:"orderMessage",class:"form-control shadow-sm",cols:"30",rows:"10","onUpdate:modelValue":s[4]||(s[4]=d=>a.message=d),placeholder:"有什麼想和我們說的嗎"},null,512),[[D,a.message]])]),e("ul",Se,[e("li",we,[c(A,{to:"/cart",class:"btn btn-outline-primary text-dark w-100"},{default:V(()=>[p("修改訂單")]),_:1})]),De])]),_:1},8,["onSubmit"])):f("",!0),o.orderStatus==="pay"?(n(),T(k,{key:1,user:a.user,message:a.message,orderId:a.orderId},null,8,["user","message","orderId"])):f("",!0)])}const Ce=P(_e,[["render",Be]]),Oe={components:{OrderDetail:Q,BuyerComponent:Ce},computed:{...v(m,["orderStatus","cartTotal"])},methods:{...y(m,["changeStatus"])},mounted(){this.changeStatus("fillInfo")}},He={class:"container mb-3 mb-lg-5"},Le={class:"row justify-content-center g-5"};function Me(o,s,r,$,a,h){const t=_("OrderDetail"),i=_("BuyerComponent");return n(),u("section",He,[e("div",Le,[o.orderStatus!=="finish"?(n(),T(t,{key:0})):f("",!0),c(i,{cartTotal:o.cartTotal},null,8,["cartTotal"])])])}const Ue=P(Oe,[["render",Me]]);export{Ue as default};
