import{q as a,r as e,f as t,u as s,G as r,Q as l,R as o,p as i}from"./element-plus.js";import{f as p}from"./category.js";import{d as m,g as d,u as c}from"./gather.js";import{_ as u,d as n,b as g,t as h}from"./index.js";import{o as f,c as j,M as y,Q as b,a as _,U as w,R as v,V,W as U,ay as k,az as x}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./immutable-json-patch.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const q={name:"gather-edit",data:()=>({activeName:"list",categorySelected:[],categoryProps:{checkStrictly:!0},category:[],params:{taskName:"",targetUrl:"",parseData:"",status:"1",cid:1},article:{title:"",article:""}}),computed:{},mounted(){},async created(){this.params.id=this.$route.params.id,await this.detail(),await this.query()},methods:{async query(){try{let a=await p();if(200===a.code){let e=a.data,t=n(this.params.cid,e);this.categorySelected=t;let s=g(h(e));this.cateList=g(e),this.category=[...s]}}catch(a){console.log(a)}},handleChange(a){console.log(a),-1!=a[0]&&(this.params.cid=a[a.length-1])},async detail(){try{let a=await m(this.params.id);if(200===a.code){let e=a.data;this.params=e}}catch(a){console.error(a)}},handleAttr(a){console.log("e--\x3e",a)},handleSubCid(a){console.log("e--\x3e",a)},async getArticle(){try{let{targetUrl:a,parseData:e}=this.params,t=await d({targetUrl:a,parseData:e});200==t.code&&(this.article=t.data,this.$message({message:"恭喜你，获取数据成功^_^",type:"success"}))}catch(a){console.log(a)}},async update(){try{let a=await c(this.params);200==a.code?(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:a.msg,type:"success"})}catch(a){console.log(a)}},submit(a){this.$refs[a].validate((a=>{if(!a)return!1;this.update()}))}}},C=a=>(k("data-v-a52da2d1"),a=a(),x(),a),z={class:"mb-20 bg-fff pd-20"},D={class:"flex w-full"},S={class:"flex w-full"},$={class:"f-15"},N=C((()=>_("span",{class:"c-999"},"标题：",-1))),A=C((()=>_("p",{class:"f-15"},[_("span",{class:"c-999"},"内容：")],-1))),L=["innerHTML"];const M=u(q,[["render",function(p,m,d,c,u,n){const g=a,h=e,k=t,x=s,q=r,C=l,M=o,H=i;return f(),j("div",z,[y(H,{ref:"params",model:p.params,"label-width":"84px"},{default:b((()=>[y(h,{label:"任务名称",prop:"taskName",rules:[{required:!0,message:"请输入任务名称",trigger:"blur"}]},{default:b((()=>[y(g,{modelValue:p.params.taskName,"onUpdate:modelValue":m[0]||(m[0]=a=>p.params.taskName=a),placeholder:"例：前端库-chat问答"},null,8,["modelValue"])])),_:1}),y(h,{label:"接口地址",prop:"targetUrl",rules:[{required:!0,message:"请输入匹配网址",trigger:"blur"}]},{default:b((()=>[_("div",D,[y(g,{class:"flex-1",modelValue:p.params.targetUrl,"onUpdate:modelValue":m[1]||(m[1]=a=>p.params.targetUrl=a)},null,8,["modelValue"])])])),_:1}),y(h,{label:"处理函数",prop:"parseData",rules:[{required:!0,message:"请输入内容字段",trigger:"blur"}]},{default:b((()=>[_("div",S,[y(g,{class:"flex-1",type:"textarea",rows:13,modelValue:p.params.parseData,"onUpdate:modelValue":m[2]||(m[2]=a=>p.params.parseData=a),placeholder:"如果不做任何处理，直接返回data。拿到的文本是变量是data,可以直接js函数可以处理成需要的数据，最终需要返回data。例：\n            data.title = data.title;\n            data.article = data.data.news;\n            return data;\n            "},null,8,["modelValue"]),y(k,{class:"ml-5",type:"primary",onClick:n.getArticle},{default:b((()=>[w(" 测试 ")])),_:1},8,["onClick"])])])),_:1}),y(h,{label:"保存栏目",prop:"cid",rules:[{required:!0,message:"请输入保存栏目",trigger:"blur"}]},{default:b((()=>[y(x,{props:p.categoryProps,"show-all-levels":!1,modelValue:p.categorySelected,"onUpdate:modelValue":m[3]||(m[3]=a=>p.categorySelected=a),options:p.category,onChange:n.handleChange},null,8,["props","modelValue","options","onChange"])])),_:1}),y(h,{label:"发布状态",prop:"status",rules:[{required:!0,message:"请选择发布状态",trigger:"blur"}]},{default:b((()=>[y(C,{modelValue:p.params.status,"onUpdate:modelValue":m[4]||(m[4]=a=>p.params.status=a),class:"ml-4"},{default:b((()=>[y(q,{value:"1",size:"large"},{default:b((()=>[w("草稿")])),_:1}),y(q,{value:"2",size:"large"},{default:b((()=>[w("发布")])),_:1})])),_:1},8,["modelValue"])])),_:1}),p.article.title?(f(),v(h,{key:0,label:"采集结果"},{default:b((()=>[y(M,{class:"w-full",shadow:"never"},{header:b((()=>[_("p",$,[N,w(V(p.article.title),1)])])),default:b((()=>[A,_("div",{class:"f-15 article",innerHTML:p.article.article},null,8,L)])),_:1})])),_:1})):U("",!0),y(h,null,{default:b((()=>[y(k,{type:"primary",onClick:m[5]||(m[5]=a=>n.submit("params"))},{default:b((()=>[w("保存")])),_:1})])),_:1})])),_:1},8,["model"])])}],["__scopeId","data-v-a52da2d1"]]);export{M as default};