"use strict";(globalThis["webpackChunkbabado_doce"]=globalThis["webpackChunkbabado_doce"]||[]).push([[773],{773:(e,a,o)=>{o.r(a),o.d(a,{default:()=>S});var n=o(9835),s=o(499),l=o(6970),t=o(1957);const i={key:0,class:"prompt-modal-component"},d={class:"modal q-px-lg q-pt-lg q-pb-md"},r={class:"message"},u=(0,n.aZ)({__name:"PromptModalComponent",props:{message:{},modelValue:{type:Boolean}},emits:["update:modelValue","done"],setup(e,{emit:a}){const o=e,u=a,m=(0,s.iH)(),c=()=>{u("update:modelValue",!1),u("done",m.value)};return(0,n.m0)((()=>{1==o.modelValue&&(m.value="")})),(e,a)=>e.modelValue?((0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",d,[(0,n._)("div",r,(0,l.zw)(e.message),1),(0,n.wy)((0,n._)("textarea",{class:"input q-mt-md q-mb-sm",rows:"4","onUpdate:modelValue":a[0]||(a[0]=e=>m.value=e)},null,512),[[t.nr,m.value]]),(0,n._)("div",{class:"btn-ready",onClick:a[1]||(a[1]=e=>c())})])])):(0,n.kq)("",!0)}}),m=u,c=m,p={key:0,class:"pass-phone-wall-component column justify-evenly q-px-lg q-pt-lg animate__animated animate__bounceIn"},_={class:"btn-phone-ready col-auto animate__animated animate__pulse animate__infinite"},v={class:"message col-auto animate__animated animate__fadeIn"},g=(0,n.aZ)({__name:"PassPhoneWallComponent",props:{modelValue:{},keepOpen:{type:Boolean}},emits:["update:modelValue","done"],setup(e,{emit:a}){const o=e,s=a,t=()=>{s("done"),!0!==o.keepOpen&&s("update:modelValue",void 0)};return(e,a)=>e.modelValue?((0,n.wg)(),(0,n.iD)("div",p,[(0,n._)("div",_,[(0,n._)("div",{class:"sprite animate__animated animate__bounceInRight",onClick:a[0]||(a[0]=e=>t())})]),(0,n._)("div",v,[a[1]||(a[1]=(0,n.Uk)(" Passa o Celular Pro(a) ")),(0,n._)("span",null,(0,l.zw)(e.modelValue),1)]),a[2]||(a[2]=(0,n._)("div",{class:"flork col animate__animated animate__jello"},null,-1))])):(0,n.kq)("",!0)}}),f=g,h=f,y={key:0,class:"challenge-component column justify-evenly q-px-lg q-pt-lg animate__animated animate__bounceIn"},b={class:"btn-done col-auto animate__animated animate__pulse animate__infinite"},k={class:"title col-auto"},q={class:"message col-auto animate__animated animate__fadeIn"},w=(0,n.aZ)({__name:"ChallengeComponent",props:{modelValue:{},keepOpen:{type:Boolean},player:{}},emits:["update:modelValue","done"],setup(e,{emit:a}){const o=e,s=a,t=()=>{s("done"),!0!==o.keepOpen&&s("update:modelValue",void 0)};return(e,a)=>e.modelValue?((0,n.wg)(),(0,n.iD)("div",y,[(0,n._)("div",b,[(0,n._)("div",{class:"sprite animate__animated animate__bounceInRight",onClick:a[0]||(a[0]=e=>t())})]),(0,n._)("div",k,"Teu Desafio, "+(0,l.zw)(e.player)+":",1),(0,n._)("div",q,[(0,n._)("div",null,(0,l.zw)(e.modelValue),1)]),a[1]||(a[1]=(0,n._)("div",{class:"flork col animate__animated animate__shakeY"},null,-1))])):(0,n.kq)("",!0)}}),j=w,V=j;var x=o(7524),C=o(9302),I=function(e,a,o,n){function s(e){return e instanceof o?e:new o((function(a){a(e)}))}return new(o||(o=Promise))((function(o,l){function t(e){try{d(n.next(e))}catch(a){l(a)}}function i(e){try{d(n["throw"](e))}catch(a){l(a)}}function d(e){e.done?o(e.value):s(e.value).then(t,i)}d((n=n.apply(e,a||[])).next())}))};const P={key:0,class:"wrapper column justify-evenly q-px-lg q-pt-lg"},D={class:"btn-start col-auto animate__animated animate__pulse animate__infinite"},H="openapi-key",$=(0,n.aZ)({__name:"IndexPage",setup(e){const a=(0,C.Z)(),o=(0,s.iH)(!1),l=(0,s.iH)(),t=(0,s.iH)(!1),i=(0,s.iH)(),d=(0,s.iH)(),r=(0,s.iH)(),u=(0,s.iH)(),m=(0,s.iH)(),p=(0,s.iH)(),_=(0,s.iH)(),v=[e=>`Bora ${e}, me conta uma boa fofoca:`,e=>`Sua vez de fofocar, ${e}:`,e=>`Bota a fofoca pra fora, ${e}:`,e=>`Conta pá nóis una fofoquita, ${e}:`,e=>`Hey ${e}, que fofocas tú tem?`,e=>`Sou todo ouvidos ${e}, manda a braba:`],g=(e,o)=>I(this,void 0,void 0,(function*(){a.loading.show({message:"Calma um tico que tô criando desafios...",spinnerColor:"black",messageColor:"black",backgroundColor:"white"});let n=[];try{let a=localStorage.getItem(H);const s=`Você é um jogo de desafios que a cada prompt dá apenas uma carta, cada carta tem dois desafios e cada jogador vai receber uma carta por vez na ordem que forem mencionados. Um dos desafios, o desafio A, é pessoal e será elaborado de uma forma que o jogador faça sozinho ou que cause uma interação/flerte rápida entre dois jogadores. O outro desafio, o desafio B, é uma opção caso o jogador não queira fazer o desafio A. O Desafio B será "beba x doses" sendo x a quantidade de doses entre 1 e 5 que o jogador deverá beber. Antes de o jogo começar você receberá uma lista de jogadores e um segredo sobre cada jogador e usará essas informações para deixar o desafio interessante. O desafio A deve ser engraçado mas fácil de fazer e sempre precisam ser possíveis de serem executados num ambiente de barzinho. Tente não ser muito repetitivo nas perguntas, use os segredos para criar os desafios.Se não houver segredo sobre um jogador, crie para ele desafios que incentivem a interação com outros jogadores e seus segredos. crie desafios que incentivem a interação com outros jogadores que tem segredos. Quando usar o segredo de uma pessoa no desafio de outra, não deixe esplícito o motivo.Os jogadores são: ${e.join(", ")}. os segredos são:\n${o.map((e=>"- "+e)).join("\n")}\n\nSua resposta deverá vir resumida e exatamente na forma:\n\n- nome do jogador: <desafio A> ou <Desafio B>.\n\nExemplo:\n- João: dançar kpop ou beber 2 doses\n\nEm cada rodada deverão ser criadas cartas para cada jogador na ordem ${e.join(", ")}. Não separe as rodadas com um título, todas as perguntas do jogo devem estar na mesma lista. Gere 5 rodadas de jogo abaixo, respeitando a sequencia de jogadores.`,l=yield x.Z.post("https://api.openai.com/v1/chat/completions",{model:"gpt-4o-mini-2024-07-18",messages:[{role:"user",content:s}],temperature:1,top_p:1,frequency_penalty:.46,presence_penalty:0},{headers:{Authorization:`Bearer ${a}`}}),t=l.data.choices[0].message.content.trim();console.log(t),n=t.split("\n").map((e=>e.replace(/(=>|->|-|\*)/g,"").replace(/^\d+(\.|,)*/,"").replace(/;$/,"").trim().match(/([^:]+):(.+)/))).map((e=>e?{player:e[1],challenge:e[2]}:{player:"--",challenge:"--"})).filter((({player:e,challenge:a})=>"--"!=e||"--"!=a)),console.log(n)}catch(s){localStorage.removeItem(H),console.log(s),alert("Ocorreu um erro!")}return a.loading.hide(),n})),f=e=>I(this,void 0,void 0,(function*(){l.value=e,t.value=!0;const a=yield new Promise((e=>{i.value=e}));return a})),y=(e,a=!1)=>I(this,void 0,void 0,(function*(){d.value=e,r.value=a,yield new Promise((e=>{u.value=e}))})),b=(e,a)=>I(this,void 0,void 0,(function*(){m.value=e,p.value=a,yield new Promise((e=>{_.value=e}))})),k=()=>I(this,void 0,void 0,(function*(){let e=localStorage.getItem(H);while(!e)e=yield f("Para que o jogo funcione, informe a chave de API do OpenAI:"),localStorage.setItem(H,null!==e&&void 0!==e?e:"");const a=[],n=(yield f("Põe aí o nome do povo:")).toLowerCase().replace(/ e /g,",").replace(/\./g,",").replace(/\s*,\s*/g,",").replace(/\,$/g,"").trim().split(",");o.value=!0;for(const o of n){yield y(o,!0);const e=yield f(v[Math.floor(Math.random()*v.length)](o));a.push(e),d.value=void 0,yield new Promise((e=>setTimeout(e,100)))}while(1){const e=yield g(n,a);for(const{player:a,challenge:o}of e)yield y(a),yield b(o,a)}}));return(e,a)=>{const s=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(s,{class:"index-page"},{default:(0,n.w5)((()=>{var e;return[o.value?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",P,[a[4]||(a[4]=(0,n._)("div",{class:"game-title col-auto animate__animated animate__bounceInDown"},[(0,n._)("div",{class:"sprite"})],-1)),(0,n._)("div",D,[(0,n._)("div",{class:"sprite animate__animated animate__bounceInRight",onClick:a[0]||(a[0]=e=>k())})]),a[5]||(a[5]=(0,n._)("div",{class:"flork col animate__animated animate__flipInY"},null,-1))])),a[6]||(a[6]=(0,n._)("div",{class:"watermark"},null,-1)),(0,n.Wm)(c,{modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=e=>t.value=e),message:null!==(e=l.value)&&void 0!==e?e:"",onDone:i.value},null,8,["modelValue","message","onDone"]),(0,n.Wm)(h,{modelValue:d.value,"onUpdate:modelValue":a[2]||(a[2]=e=>d.value=e),onDone:u.value,"keep-open":r.value},null,8,["modelValue","onDone","keep-open"]),(0,n.Wm)(V,{modelValue:m.value,"onUpdate:modelValue":a[3]||(a[3]=e=>m.value=e),player:p.value,onDone:_.value},null,8,["modelValue","player","onDone"])]})),_:1})}}});var z=o(9885),O=o(9984),B=o.n(O);const A=$,S=A;B()($,"components",{QPage:z.Z})}}]);