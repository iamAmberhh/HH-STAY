import{i as o,j as r}from"./index-a4fe411b.js";const{VITE_APP_API:s,VITE_APP_PATH:a}={VITE_APP_API:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"amberhh",BASE_URL:"/HH-STAY/",MODE:"production",DEV:!1,PROD:!0},u=o("productStore",{state:()=>({enableProducts:[],popularProducts:[],instagramProducts:[],newestProducts:[],allProduct:[],pages:{},isLoading:!1,product:[],openDate:[]}),actions:{getEnableProduct(){r.get(`${s}v2/api/${a}/products/all`).then(t=>{this.enableProducts=t.data.products}).catch(t=>{alert(t.response.data.message)})},getAllProduct(t=1){this.isLoading=!0,r.get(`${s}v2/api/${a}/admin/products/?page=${t}`).then(e=>{this.allProduct=e.data.products,this.pages=e.data.pagination,this.isLoading=!1}).catch(e=>{alert(e.response.data.message)})},getProduct(t){r.get(`${s}v2/api/${a}/product/${t}`).then(e=>{this.product=e.data.product,this.filterOpenDate()}).catch(e=>{alert(e.response.data.message)})},filterOpenDate(){this.openDate=this.product.openDate.map(t=>{if(t==="星期日")return 0;if(t==="星期一")return 1;if(t==="星期二")return 2;if(t==="星期三")return 3;if(t==="星期四")return 4;if(t==="星期五")return 5;if(t==="星期六")return 6})},getPopularProduct(){this.popularProducts=this.enableProducts.filter(t=>t.itemFilter==="熱門")},getInstagramProduct(){this.instagramProducts=this.enableProducts.filter(t=>t.itemFilter==="打卡")},getNewestProduct(){this.newestProducts=this.enableProducts.filter(t=>t.itemFilter==="最新")}}});export{u as p};
