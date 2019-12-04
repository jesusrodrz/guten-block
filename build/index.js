!function(e){var t={};function c(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=t,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c(c.s=2)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){e.exports=function(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}},function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(0),o=wp.i18n.__,l=wp.components,i=l.SVG,s=l.Path,b={title:o("Acordeon","pb"),icon:Object(a.createElement)(i,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},Object(a.createElement)(s,{d:"M16.93,8.93a1,1,0,0,1-.7-.29L12,4.41,7.9,8.51A1,1,0,0,1,6.49,7.1L12,1.59l5.64,5.64a1,1,0,0,1,0,1.41A1,1,0,0,1,16.93,8.93Z"}),Object(a.createElement)(s,{d:"M12.07,22.35,6.42,16.71a1,1,0,0,1,1.42-1.42l4.23,4.23,4.09-4.1a1,1,0,0,1,1.42,1.42Z"}),Object(a.createElement)(s,{d:"M17.93,13H5.82a1,1,0,0,1,0-2H17.93a1,1,0,0,1,0,2Z"})),category:"formatting",supports:{anchor:!0},attributes:{title:{type:"array",source:"children",selector:".c-accordion__title"},initiallyOpen:{type:"boolean",default:!1},clickToClose:{type:"boolean",default:!0},autoClose:{type:"boolean",default:!0},titleTag:{type:"string",default:"h2"},scroll:{type:"boolean",default:!1},scrollOffset:{type:"number",default:0},uuid:{type:"number"}}},u=wp.blocks.createBlock,p={from:[{type:"block",blocks:["core/heading"],transform:function(e){return u("pb/accordion-item",{title:e.content,titleTag:"h"+(e.level<=4?e.level:2)})}},{type:"block",isMultiBlock:!0,blocks:["core/paragraph"],transform:function(e){return u("pb/accordion-item",{},e.map((function(e){return u("core/paragraph",{content:e.content})})))}}],to:[{type:"block",blocks:["core/paragraph"],transform:function(e,t){var c=t.map((function(e){return u(e.name,e.attributes)})),n="button"!==e.titleTag?parseInt(e.titleTag.replace("h","")):2;return c.splice(0,0,u("core/heading",{content:e.title,anchor:e.anchor,className:e.className,level:n})),c}}]},h=wp.components,m=h.SVG,d=h.Path;function f(e){var t;switch(e){case"h1":t=Object(a.createElement)(m,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(a.createElement)(d,{d:"M12.09,15.88h-2v-4H6.45v4h-2V6.6h2v3.64h3.68V6.6h2Z"}),Object(a.createElement)(d,{d:"M18.63,15.88h-2V10.51l0-.88,0-1A7.37,7.37,0,0,1,16,9.3L15,10.16,14,9,17,6.6h1.61Z"}));break;case"h2":t=Object(a.createElement)(m,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(a.createElement)(d,{d:"M12.09,15.88h-2v-4H6.45v4h-2V6.6h2v3.64h3.68V6.6h2Z"}),Object(a.createElement)(d,{d:"M20.27,15.88H13.78V14.52l2.33-2.36c.69-.71,1.14-1.2,1.36-1.47a3,3,0,0,0,.45-.76,1.78,1.78,0,0,0,.14-.72,1,1,0,0,0-.31-.83,1.13,1.13,0,0,0-.82-.28,2.45,2.45,0,0,0-1,.25,5.4,5.4,0,0,0-1.05.71L13.76,7.79A6.92,6.92,0,0,1,14.89,7a4,4,0,0,1,1-.37,4.82,4.82,0,0,1,1.19-.13,3.59,3.59,0,0,1,1.54.31,2.5,2.5,0,0,1,1,.89A2.33,2.33,0,0,1,20,9a3.16,3.16,0,0,1-.22,1.2,4.61,4.61,0,0,1-.7,1.15A16.65,16.65,0,0,1,17.42,13l-1.19,1.12v.09h4Z"}));break;case"h3":t=Object(a.createElement)(m,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(a.createElement)(d,{d:"M12.09,15.88h-2v-4H6.45v4h-2V6.6h2v3.64h3.68V6.6h2Z"}),Object(a.createElement)(d,{d:"M19.91,8.68a2.18,2.18,0,0,1-.53,1.47A2.68,2.68,0,0,1,17.9,11v0a3,3,0,0,1,1.71.68,1.93,1.93,0,0,1,.57,1.47,2.47,2.47,0,0,1-1,2.08,4.45,4.45,0,0,1-2.77.75,6.81,6.81,0,0,1-2.68-.5V13.84a5.76,5.76,0,0,0,1.19.44,5.12,5.12,0,0,0,1.28.17,2.47,2.47,0,0,0,1.43-.33,1.21,1.21,0,0,0,.47-1.06,1,1,0,0,0-.54-.93,4,4,0,0,0-1.7-.27h-.7v-1.5h.71a3.45,3.45,0,0,0,1.58-.28,1,1,0,0,0,.5-1c0-.71-.44-1.06-1.32-1.06a2.8,2.8,0,0,0-.93.16,4.24,4.24,0,0,0-1.05.52l-.91-1.35a5.06,5.06,0,0,1,3-.91,3.93,3.93,0,0,1,2.28.58A1.89,1.89,0,0,1,19.91,8.68Z"}));break;case"h4":t=Object(a.createElement)(m,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(a.createElement)(d,{d:"M12.09,15.88h-2v-4H6.45v4h-2V6.6h2v3.64h3.68V6.6h2Z"}),Object(a.createElement)(d,{d:"M20.48,14H19.36v1.92H17.45V14h-4V12.59l4.06-6h1.81v5.83h1.12Zm-3-1.53V10.86q0-.39,0-1.14c0-.5,0-.79.05-.87h-.05a7.85,7.85,0,0,1-.57,1l-1.7,2.57Z"}));break;case"h5":t=Object(a.createElement)(m,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(a.createElement)(d,{d:"M12.09,15.88h-2v-4H6.45v4h-2V6.6h2v3.64h3.68V6.6h2Z"}),Object(a.createElement)(d,{d:"M17.16,10a3,3,0,0,1,2.14.76,2.71,2.71,0,0,1,.8,2.07,3,3,0,0,1-1,2.39A4,4,0,0,1,16.4,16a5.42,5.42,0,0,1-2.5-.5v-1.7a5.3,5.3,0,0,0,1.17.44,5.18,5.18,0,0,0,1.26.16q1.8,0,1.8-1.47c0-.93-.62-1.4-1.86-1.4a5.14,5.14,0,0,0-.75.06q-.4.08-.66.15l-.78-.42.35-4.73h5V8.26H16.15L16,10.08l.22,0A4.35,4.35,0,0,1,17.16,10Z"}));break;case"h6":t=Object(a.createElement)(m,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(a.createElement)(d,{d:"M12.09,15.88h-2v-4H6.45v4h-2V6.6h2v3.64h3.68V6.6h2Z"}),Object(a.createElement)(d,{d:"M13.72,11.94a6.1,6.1,0,0,1,1.17-4.1,4.33,4.33,0,0,1,3.48-1.35,5.86,5.86,0,0,1,1.25.1V8.15A5.4,5.4,0,0,0,18.5,8a3.93,3.93,0,0,0-1.65.3,2.13,2.13,0,0,0-1,.9,4.23,4.23,0,0,0-.38,1.7h.09a2.15,2.15,0,0,1,2-1.08,2.49,2.49,0,0,1,1.95.78,3.1,3.1,0,0,1,.7,2.16,3.23,3.23,0,0,1-.84,2.35,3.05,3.05,0,0,1-2.32.87,3.28,3.28,0,0,1-1.79-.48,3.06,3.06,0,0,1-1.18-1.39A5.23,5.23,0,0,1,13.72,11.94Zm3.35,2.5A1.18,1.18,0,0,0,18,14a1.94,1.94,0,0,0,.33-1.21,1.66,1.66,0,0,0-.31-1.07,1.15,1.15,0,0,0-.95-.39,1.44,1.44,0,0,0-1,.39,1.2,1.2,0,0,0-.42.9,2,2,0,0,0,.4,1.28A1.2,1.2,0,0,0,17.07,14.44Z"}));break;case"p":t=Object(a.createElement)(m,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(a.createElement)(d,{d:"M15.5,9.49a2.87,2.87,0,0,1-.94,2.3,4,4,0,0,1-2.66.79h-.85v3.3h-2V6.6h3a3.92,3.92,0,0,1,2.57.73A2.65,2.65,0,0,1,15.5,9.49ZM11.05,11h.65a2.15,2.15,0,0,0,1.36-.36,1.27,1.27,0,0,0,.45-1,1.29,1.29,0,0,0-.38-1A1.75,1.75,0,0,0,12,8.21h-.9Z"}));break;case"div":t=Object(a.createElement)(m,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(a.createElement)(d,{d:"M9.68,11.15a4.56,4.56,0,0,1-1.3,3.51,5.34,5.34,0,0,1-3.77,1.22H2V6.6H4.89A4.89,4.89,0,0,1,8.42,7.8,4.41,4.41,0,0,1,9.68,11.15Zm-2,0c0-2-.88-3-2.64-3H4v6h.84C6.69,14.25,7.64,13.24,7.64,11.2Z"}),Object(a.createElement)(d,{d:"M11.6,15.88V6.6h2v9.28Z"}),Object(a.createElement)(d,{d:"M21.2,6.6h2L20,15.88H17.89L14.74,6.6h2l1.74,5.52q.15.49.3,1.14c.11.44.17.74.2.91a15.19,15.19,0,0,1,.47-2.05Z"}));break;case"button":t=Object(a.createElement)(m,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(a.createElement)(d,{d:"M20,5.53H4a3,3,0,0,0-3,3v6.94a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V8.53A3,3,0,0,0,20,5.53Zm1.5,9.28A2.17,2.17,0,0,1,19.39,17H4.61A2.17,2.17,0,0,1,2.5,14.81V9.25A2.17,2.17,0,0,1,4.61,7H19.39A2.17,2.17,0,0,1,21.5,9.25Z"}),Object(a.createElement)(d,{d:"M4.82,9.28H6.51a3.26,3.26,0,0,1,1.68.33,1.14,1.14,0,0,1,.52,1.05,1.35,1.35,0,0,1-.22.8.92.92,0,0,1-.61.37v0a1.21,1.21,0,0,1,.74.43,1.35,1.35,0,0,1,.23.84,1.37,1.37,0,0,1-.54,1.16,2.29,2.29,0,0,1-1.46.42h-2ZM6,11.43h.67a1.21,1.21,0,0,0,.68-.14.55.55,0,0,0,.21-.48.49.49,0,0,0-.23-.45,1.45,1.45,0,0,0-.72-.14H6Zm0,.92v1.42h.75a1.16,1.16,0,0,0,.71-.18A.69.69,0,0,0,7.65,13c0-.45-.32-.68-1-.68Z"}),Object(a.createElement)(d,{d:"M12,14.72H10.88V10.24H9.41v-1h4.11v1H12Z"}),Object(a.createElement)(d,{d:"M19.18,14.72H17.72L15.35,10.6h0c0,.73.08,1.25.08,1.56v2.56h-1V9.28h1.46l2.36,4.07h0q-.06-1-.06-1.5V9.28h1Z"}))}return t}var v=wp.i18n.__,O=wp.element.Fragment,j=wp.compose,w=j.compose,g=j.withInstanceId,E=wp.blockEditor,y=E.BlockControls,k=E.InspectorControls,x=E.RichText,A=E.InnerBlocks,M=wp.components,V=M.PanelBody,Z=M.Toolbar,_=M.ToggleControl,C=M.RangeControl,H=w([g])((function(e){var t=e.className,c=e.attributes,n=e.setAttributes,r=e.instanceId,o=c.title,l=c.initiallyOpen,i=c.clickToClose,s=c.autoClose,b=c.titleTag,u=c.scroll,p=c.scrollOffset;c.uuid;n({uuid:r});var h=["c-accordion__title"];"button"===b&&h.push("c-accordion__title--button");return Object(a.createElement)(O,null,Object(a.createElement)(y,null,Object(a.createElement)(Z,{controls:["h1","h2","h3","h4","button"].map((function(e){return{icon:f(e),title:e.toUpperCase(),isActive:b===e,onClick:function(){return n({titleTag:e})}}}))})),Object(a.createElement)(k,null,Object(a.createElement)(V,{title:v("Opciones del Acordeon","pb")},Object(a.createElement)(_,{label:v("Abierto","pb"),help:v(l?"El acordeon estara abierto cuando la pagina carge.":"El acordeon estara cerrado cuando la pagina carge.","pb"),checked:l,onChange:function(e){return n({initiallyOpen:e})}}),Object(a.createElement)(_,{label:v("Click para cerrar","pb"),help:v(i?"Puede cerrarse al clickear el titulo.":"Cuando este abierto, no puede cerrarse al clickear el titulo","pb"),checked:i,onChange:function(e){return n({clickToClose:e})}}),Object(a.createElement)(_,{label:v("Auto Close","pb"),help:v(s?"Este acordeaon se cerrara al abrir otro item.":"Este acordeon permanecera abierto al abrir otro item","pb"),checked:s,onChange:function(e){return n({autoClose:e})}}),Object(a.createElement)(_,{label:v("Scroll to Accordion Item","pb"),help:v(u?"The page will scroll to the accordion item title when it is opened.":"The page will not scroll when opening accordion items.","pb"),checked:u,onChange:function(e){return n({scroll:e})}}),Object(a.createElement)(C,{label:v("Scoll Pixel Offset","pb"),value:p,onChange:function(e){return n({scrollOffset:e||0})},min:0,max:1e3,help:v("A pixel offset for the final scroll position.","pb")}))),Object(a.createElement)("div",{className:[].concat(["c-accordion__item","js-accordion-item"],[t]).join(" ")},Object(a.createElement)(x,{className:h.join(" "),tagName:b,allowedFormats:["bold","italic"],placeholder:v("Titulo...","pb"),value:o,onChange:function(e){return n({title:e})}}),Object(a.createElement)("div",{className:"c-accordion__content"},Object(a.createElement)(A,null))))}));function T(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}var P=wp.blocks.registerBlockType,B=wp.blockEditor,N=B.InnerBlocks,S=B.RichText;P("pb/accordion-item",function(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?T(Object(c),!0).forEach((function(t){r()(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):T(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}({},b,{transforms:p,edit:H,save:function(e){var t=e.attributes,c=t.className,n=t.title,r=t.initiallyOpen,o=t.clickToClose,l=t.autoClose,i=t.titleTag,s=t.scroll,b=t.scrollOffset,u=t.uuid,p=["c-accordion__item","js-accordion-item","no-js"],h=["c-accordion__title","js-accordion-controller"],m={};return"button"===i&&h.push("c-accordion__title--button"),r?p.push("is-open"):m.display="none",Object(a.createElement)("div",{className:[].concat(p,[c]).join(" "),"data-initially-open":r,"data-click-to-close":o,"data-auto-close":l,"data-scroll":s,"data-scroll-offset":b},Object(a.createElement)(S.Content,{id:"at-"+u,className:h.join(" "),tagName:i,tabIndex:0,role:"button","aria-controls":"ac-"+u,value:n}),Object(a.createElement)("div",{id:"ac-"+u,className:"c-accordion__content",style:m},Object(a.createElement)(N.Content,null)))}}))}]);