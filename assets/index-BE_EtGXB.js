(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))u(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const o={tabBtns:document.querySelectorAll(".tab-btn"),tabContents:document.querySelectorAll(".tab-content"),exportBtn:document.getElementById("export-btn"),inputs:{accentHue:document.getElementById("accent-hue"),islandGap:document.getElementById("island-gap"),borderRadius:document.getElementById("border-radius"),bgSecondary:document.getElementById("bg-secondary"),bgTertiary:document.getElementById("bg-tertiary"),bubbleRadius:document.getElementById("bubble-radius"),bubbleBg:document.getElementById("bubble-bg"),opacity:document.getElementById("opacity"),blur:document.getElementById("blur")},displays:{accentHue:document.getElementById("val-accent-hue"),islandGap:document.getElementById("val-island-gap"),borderRadius:document.getElementById("val-border-radius"),bgSecondary:document.getElementById("val-bg-secondary"),bgTertiary:document.getElementById("val-bg-tertiary"),bubbleRadius:document.getElementById("val-bubble-radius"),bubbleBg:document.getElementById("val-bubble-bg"),opacity:document.getElementById("val-opacity"),blur:document.getElementById("val-blur")}};o.tabBtns.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-tab");o.tabBtns.forEach(n=>n.classList.remove("active")),e.classList.add("active"),o.tabContents.forEach(n=>{n.classList.remove("active"),n.id===`tab-${t}`&&n.classList.add("active")})})});const s=()=>{const e=document.documentElement,t=o.inputs,n=o.displays;e.style.setProperty("--unity-accent-hue",t.accentHue.value),e.style.setProperty("--unity-island-gap",`${t.islandGap.value}px`),e.style.setProperty("--unity-border-radius",`${t.borderRadius.value}px`),e.style.setProperty("--unity-background-secondary",t.bgSecondary.value),e.style.setProperty("--unity-background-tertiary",t.bgTertiary.value),e.style.setProperty("--bubble-radius",`${t.bubbleRadius.value}px`),e.style.setProperty("--bubble-bg",t.bubbleBg.value),e.style.setProperty("--opacity",t.opacity.value),e.style.setProperty("--blur-intensity",`${t.blur.value}px`),n.accentHue.textContent=t.accentHue.value,n.islandGap.textContent=`${t.islandGap.value}px`,n.borderRadius.textContent=`${t.borderRadius.value}px`,n.bgSecondary.textContent=t.bgSecondary.value.toUpperCase(),n.bgTertiary.textContent=t.bgTertiary.value.toUpperCase(),n.bubbleRadius.textContent=`${t.bubbleRadius.value}px`,n.bubbleBg.textContent=t.bubbleBg.value.toUpperCase(),n.opacity.textContent=t.opacity.value,n.blur.textContent=`${t.blur.value}px`},i=()=>{const e=o.inputs,n=`/**
 * @name Unity 2026 (Custom)
 * @author super.user
 * @version 2.1.0-custom
 * @description A customized "Floating Island" theme generated on ${new Date().toLocaleDateString()}.
 * @source https://github.com/lovinitvernon/hello-theme
*/

@import url('https://lovinitvernon.github.io/hello-theme/Theme/Unity.css');

:root {
  --unity-accent-hue: ${e.accentHue.value};
  --unity-island-gap: ${e.islandGap.value}px;
  --unity-border-radius: ${e.borderRadius.value}px;
  --unity-background-secondary: ${e.bgSecondary.value};
  --unity-background-tertiary: ${e.bgTertiary.value};
  --bubble-radius: ${e.bubbleRadius.value}px;
  --unity-chat-bubble-background-color: ${e.bubbleBg.value};
  --unity-opacity: ${e.opacity.value};
  --unity-floating-blur-radius: ${e.blur.value}px;
}
`,u=new Blob([n],{type:"text/css"}),a=URL.createObjectURL(u),r=document.createElement("a");r.href=a,r.download="Unity_Custom.theme.css",r.click()};Object.values(o.inputs).forEach(e=>{e.addEventListener("input",s)});o.exportBtn.addEventListener("click",i);s();
