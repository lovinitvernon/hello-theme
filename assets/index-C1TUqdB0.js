(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const c=[{id:"general",label:"General",fields:[{id:"accent-hue",label:"Accent Hue",type:"number",variable:"--unity-accent-hue",min:0,max:360,value:210,unit:""},{id:"island-gap",label:"Island Gap",type:"number",variable:"--unity-island-gap",min:0,max:32,value:8,unit:"px"},{id:"border-radius",label:"Border Radius",type:"number",variable:"--unity-border-radius",min:0,max:40,value:20,unit:"px"},{id:"opacity",label:"Global Opacity",type:"number",variable:"--unity-opacity",min:0,max:1,step:.01,value:1,unit:""}]},{id:"colors",label:"Colors",fields:[{id:"bg-primary",label:"Island Background (Primary)",type:"color",variable:"--unity-background-primary",value:"#0a0a0a"},{id:"bg-secondary",label:"Sidebar Background",type:"color",variable:"--unity-background-secondary",value:"#161616"},{id:"bg-tertiary",label:"App Background",type:"color",variable:"--unity-background-tertiary",value:"#050505"},{id:"accent-saturation",label:"Accent Saturation",type:"number",variable:"--unity-accent-saturation",min:0,max:100,value:99,unit:"%"},{id:"accent-lightness",label:"Accent Lightness",type:"number",variable:"--unity-accent-lightness",min:0,max:100,value:50,unit:"%"}]},{id:"chat",label:"Chat Bubbles",fields:[{id:"bubble-bg",label:"Bubble Background",type:"color",variable:"--unity-chat-bubble-background-color",value:"#161616"},{id:"bubble-radius",label:"Bubble Rounding",type:"number",variable:"--unity-chat-bubble-border-radius",min:0,max:40,value:24,unit:"px"},{id:"bubble-opacity",label:"Bubble Shadows",type:"number",variable:"--unity-chat-bubble-box-shadow-color-a",min:0,max:1,step:.01,value:.1,unit:""}]},{id:"advanced",label:"Advanced",fields:[{id:"blur",label:"Floating Blur",type:"number",variable:"--unity-floating-blur-radius",min:0,max:20,value:5,unit:"px"},{id:"gaps-toggle",label:"Enable Island Gaps",type:"number",variable:"--unity-gaps",min:0,max:1,step:1,value:1,unit:""}]}],l={tabNav:document.getElementById("tab-nav"),tabContainer:document.getElementById("tab-container"),exportBtn:document.getElementById("export-btn"),viewCodeBtn:document.getElementById("view-code-btn"),codeOverlay:document.getElementById("code-overlay"),closeCodeBtn:document.getElementById("close-code-btn"),themeCodeDisplay:document.getElementById("theme-code-display"),root:document.documentElement};let u=c[0].id;const r={};c.forEach(n=>{n.fields.forEach(t=>{r[t.id]=t.value})});const d=()=>{l.tabNav.innerHTML="",l.tabContainer.innerHTML="",c.forEach(n=>{const t=document.createElement("button");if(t.className=`tab-btn ${u===n.id?"active":""}`,t.textContent=n.label,t.onclick=()=>{u=n.id,d()},l.tabNav.appendChild(t),u===n.id){const i=document.createElement("div");i.className="tab-content active";const a=document.createElement("section");a.className="control-group",a.innerHTML=`<h3>${n.label} Parameters</h3>`,n.fields.forEach(e=>{const o=document.createElement("div");o.className=`control ${e.type==="color"?"col":""}`,e.type==="number"?o.innerHTML=`
            <div class="label-row">
              <label>${e.label}</label>
              <span class="value-display">${r[e.id]}${e.unit}</span>
            </div>
            <input type="range" 
              min="${e.min}" 
              max="${e.max}" 
              step="${e.step||1}" 
              value="${r[e.id]}"
              oninput="window.updateField('${e.id}', this.value)"
            >
          `:e.type==="color"&&(o.innerHTML=`
            <label>${e.label}</label>
            <div class="input-row">
              <input type="color" 
                value="${r[e.id]}"
                oninput="window.updateField('${e.id}', this.value)"
              >
              <span class="hex-display">${r[e.id].toUpperCase()}</span>
            </div>
          `),a.appendChild(o)}),i.appendChild(a),l.tabContainer.appendChild(i)}})};window.updateField=(n,t)=>{r[n]=t,b(),d(),p()};const b=()=>{c.forEach(n=>{n.fields.forEach(t=>{const i=r[t.id],a=t.unit||"";l.root.style.setProperty(t.variable,`${i}${a}`)})})},m=()=>{const n=new Date().toLocaleDateString();let t="";return c.forEach(i=>{i.fields.forEach(a=>{const e=a.unit||"";t+=`  ${a.variable}: ${r[a.id]}${e};
`})}),`/**
 * @name Unity 2026 (Custom)
 * @author super.user
 * @version 2.2.0-schema
 * @description Professional custom build of Unity 2026. Generated on ${n}.
 * @source https://github.com/lovinitvernon/hello-theme
*/

@import url('https://lovinitvernon.github.io/hello-theme/Theme/Unity.css');

:root {
${t}}
`},p=()=>{l.themeCodeDisplay.textContent=m()},y=()=>{const n=m(),t=new Blob([n],{type:"text/css"}),i=URL.createObjectURL(t),a=document.createElement("a");a.href=i,a.download="Unity_Custom.theme.css",a.click()};l.viewCodeBtn.onclick=()=>l.codeOverlay.classList.remove("hidden");l.closeCodeBtn.onclick=()=>l.codeOverlay.classList.add("hidden");l.exportBtn.onclick=y;d();b();p();
