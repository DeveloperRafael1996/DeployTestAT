(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6560],{43900:function(e,n,i){"use strict";var t=i(95318);n.Z=void 0;var a=t(i(64938)),o=i(85893),r=(0,a.default)((0,o.jsx)("path",{d:"M21.9 21.9 2.1 2.1.69 3.51l1.55 1.55c-.15.28-.23.6-.23.94L2 18c0 1.11.89 2 2 2h13.17l3.31 3.31 1.42-1.41zM4 12V8h1.17l4 4H4zm2.83-8H20c1.11 0 2 .89 2 2v12c0 .34-.08.66-.23.94L14.83 12H20V8h-9.17l-4-4z"}),"CreditCardOff");n.Z=r},12469:function(e,n,i){"use strict";var t=i(95318);n.Z=void 0;var a=t(i(64938)),o=i(85893),r=(0,a.default)((0,o.jsx)("path",{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h5v-2H4v-6h18V6c0-1.11-.89-2-2-2zm0 4H4V6h16v2zm-5.07 11.17-2.83-2.83-1.41 1.41L14.93 22 22 14.93l-1.41-1.41-5.66 5.65z"}),"CreditScore");n.Z=r},18916:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/interna/deposito-exitoso",function(){return i(6432)}])},6432:function(e,n,i){"use strict";i.r(n);var t=i(85893),a=i(67294),o=i(26601),r=i(69397),s=i(70917),d=i(41248),c=i(80669),l=(i(4287),i(9669)),u=i.n(l),m=i(11163),v=(i(11400),i(49309),i(12469)),p=i(43900),h=i(32912);i(41664);function f(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function x(){var e=f(["\n  & {\n    > h2 {\n      font-size: 1.5rem;\n      font-weight: 500;\n      padding-bottom: 1rem;\n    }\n\n    > .top {\n      font-size: 0.9rem;\n      color: ",";\n      padding-bottom: 2px;\n    }\n    > .bottom {\n      font-size: 1rem;\n      color: black;\n      padding-bottom: 12px;\n      &.link {\n        cursor: pointer;\n        color: ",";\n        text-decoration: underline;\n      }\n      &.guardar {\n        margin-top: 2rem;\n        color: ",";\n      }\n    }\n    > .niubiz {\n      margin-top: 2rem;\n    }\n  }\n"]);return x=function(){return e},e}function N(){var e=f(["\n  & {\n    padding: 0.8rem 2rem;\n  }\n"]);return N=function(){return e},e}function E(){var e=f(["\n            & {\n              color: ",";\n            }\n          "]);return E=function(){return e},e}function j(){var e=f(["\n  & {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 1rem;\n    width: 60%;\n    max-width: 140px;\n    > p {\n      line-height: 1.5;\n      font-size: 1rem;\n      text-align: center;\n    }\n    > svg {\n      font-size: 3rem;\n      color: ",";\n      ","\n    }\n  }\n"]);return j=function(){return e},e}function b(){var e=f(["\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 1rem;\n  gap: 1rem;\n"]);return b=function(){return e},e}n.default=function(){var e,n,i=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Mon Jul 18 2022 16:57:39 GMT-0500";try{e=(0,h.Z)(new Date(n),"dd-MM-yyyy hh:mm aaaaa'm'")}catch(i){e=""}return e},o=(0,a.useState)(""),r=o[0],s=o[1],l=(0,a.useState)("SUCCESS"),f=l[0],x=l[1],N=(0,a.useState)("NIUBIZ"),E=N[0],j=N[1],b=((0,d.v9)(c.np).user,(0,a.useState)()),C=b[0],w=b[1],z=(0,m.useRouter)(),I=function(){var e;null===window||void 0===window||null===(e=window.parent)||void 0===e||e.backAllDeposits()};return(0,a.useEffect)((function(){var e,n;if((null===z||void 0===z||null===(e=z.query)||void 0===e?void 0:e.db)&&(null===z||void 0===z||null===(n=z.query)||void 0===n?void 0:n.hash)){var i,t,a=null===z||void 0===z||null===(i=z.query)||void 0===i?void 0:i.hash,o=null===z||void 0===z||null===(t=z.query)||void 0===t?void 0:t.db,r="".concat("https://wallet.apuestatotal.com/api","/payment/getOperationByHash?operationHash=").concat(a,"&db=").concat(o);u().get(r).then((function(e){var n=e.data.operation.status,i=e.data.operation.method;if(j(i),["NIUBIZ"].includes(i))switch(w(e.data.operation),n){case"DENIED":s("Algo pas\xf3, no pudimos procesar tu deposito."),x("DENIED");break;case"SUCCESS":s("\xa1Tu dep\xf3sito fue realizado con \xe9xito!"),x("SUCCESS");break;case"NEW":s("Estamos procesando su dep\xf3sito realizado en ".concat(i,". confirma en tu historial de recarga en breves")),x("NEW");break;default:s("Ups! Ocurrio algo")}if(["ASTROPAY","KUSHKI"].includes(i))switch(n){case"DENIED":s("Algo pas\xf3, no pudimos procesar tu deposito."),x("DENIED");break;case"SUCCESS":s("\xa1Tu dep\xf3sito fue realizado con \xe9xito!"),x("SUCCESS");break;case"NEW":s("Estamos procesando su dep\xf3sito realizado en ".concat(i,". confirma en tu historial de recarga en breves")),x("NEW");break;default:s("Ups! Ocurrio algo")}if(["SAFETYPAY"].includes(i))switch(n){case"DENIED":s("Algo pas\xf3, no pudimos procesar tu deposito."),x("DENIED");break;case"SUCCESS":s("\xa1Tu dep\xf3sito fue realizado con \xe9xito!"),x("SUCCESS");break;case"NEW":s("Estamos procesando su dep\xf3sito realizado en ".concat(i,". confirma en tu historial de recarga en breves")),x("NEW");break;default:s("Ups! Ocurrio algo")}})).catch((function(e){s("Ups! Ocurrio algo")}))}}),[z]),i(),(0,t.jsx)(y,{children:"NIUBIZ"===E?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(D,{$status:f,children:"DENIED"===f?(0,t.jsx)(p.Z,{}):(0,t.jsx)(v.Z,{})}),"DENIED"===f&&(0,t.jsxs)(g,{children:[(0,t.jsx)("h2",{children:"Transacci\xf3n denegada"}),(0,t.jsx)("div",{className:"top",children:"N\xfamero de pedido"}),(0,t.jsx)("div",{className:"bottom",children:null===C||void 0===C?void 0:C.idempotence}),(0,t.jsx)("div",{className:"top",children:"Fecha y hora del pedido"}),(0,t.jsx)("div",{className:"bottom",children:(null===C||void 0===C?void 0:C.operation_date)&&i(null===C||void 0===C?void 0:C.operation_date)}),(0,t.jsx)("div",{className:"top",children:"Descripci\xf3n de la denegaci\xf3n"}),(0,t.jsx)("div",{className:"bottom",children:null===C||void 0===C?void 0:C.extra}),(0,t.jsxs)(S,{className:"niubiz",onClick:I,variant:"outlined",children:["<"," Vuelve a intentarlo aqu\xed"]})]}),"SUCCESS"===f&&(0,t.jsxs)(g,{children:[(0,t.jsx)("h2",{children:"Transacci\xf3n autorizada"}),(0,t.jsx)("div",{className:"top",children:"N\xfamero de pedido"}),(0,t.jsx)("div",{className:"bottom",children:null===C||void 0===C?void 0:C.idempotence}),(0,t.jsx)("div",{className:"top",children:"Numero de tarjeta enmascarada"}),(0,t.jsx)("div",{className:"bottom",children:null!==(n=null===z||void 0===z||null===(e=z.query)||void 0===e?void 0:e.card)&&void 0!==n?n:""}),(0,t.jsx)("div",{className:"top",children:"Fecha y hora del pedido"}),(0,t.jsx)("div",{className:"bottom",children:(null===C||void 0===C?void 0:C.operation_date)&&i(null===C||void 0===C?void 0:C.operation_date)}),(0,t.jsx)("div",{className:"top",children:"Importe de la transacci\xf3n"}),(0,t.jsx)("div",{className:"bottom",children:new Intl.NumberFormat("es-PE",{style:"currency",currency:"PEN",maximumFractionDigits:2}).format(~~(null===C||void 0===C?void 0:C.amount)/100)}),(0,t.jsx)("div",{className:"top",children:"Tipo de moneda"}),(0,t.jsx)("div",{className:"bottom",children:null===C||void 0===C?void 0:C.currency}),(0,t.jsxs)("div",{className:"top",children:["Descripci\xf3n de el/los ","producto(s)"]}),(0,t.jsx)("div",{className:"bottom",children:"Pago Web"}),(0,t.jsx)("div",{className:"top"}),(0,t.jsx)("div",{className:"bottom guardar",children:"Guarde la informacion de este formulario"})]}),"NEW"===f&&(0,t.jsx)("div",{className:"",children:r})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(D,{$status:f,children:["DENIED"===f?(0,t.jsx)(p.Z,{}):(0,t.jsx)(v.Z,{}),(0,t.jsx)("p",{children:r})]}),"DENIED"===f&&(0,t.jsxs)(S,{onClick:I,variant:"outlined",children:["<"," Vuelve a intentarlo aqu\xed"]})]})})};var g=o.Z.div(x(),(function(e){return e.theme.palette.alternate11.main}),(function(e){return e.theme.palette.info3.main}),(function(e){return e.theme.palette.dark.main})),S=(0,o.Z)(r.Z)(N()),D=o.Z.div(j(),(function(e){return e.theme.palette.success2.main}),(function(e){if(e.$status.includes("DENIED"))return(0,s.iv)(E(),e.theme.palette.primary.main)})),y=o.Z.div(b())}},function(e){e.O(0,[2912,9774,2888,179],(function(){return n=18916,e(e.s=n);var n}));var n=e.O();_N_E=n}]);