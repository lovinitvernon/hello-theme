(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const u=document.getElementById("preview-root"),a=document.getElementById("export-btn"),t={accentHue:document.getElementById("accent-hue"),islandGap:document.getElementById("island-gap"),borderRadius:document.getElementById("border-radius"),bgSecondary:document.getElementById("bg-secondary"),bgTertiary:document.getElementById("bg-tertiary"),bubbleRadius:document.getElementById("bubble-radius")},l=()=>{u.innerHTML=`
    <div class="mock-discord">
      <div class="mock-guilds"></div>
      <div class="mock-sidebar"></div>
      <div class="mock-chat">
        <div class="mock-messages">
          <div class="mock-bubble">Hey! Check out this new theme 🏝️</div>
          <div class="mock-bubble">Everything is so rounded and clean.</div>
          <div class="mock-bubble">I love the floating islands.</div>
        </div>
        <div class="mock-input"></div>
      </div>
    </div>
  `},d=()=>{const r=document.documentElement;r.style.setProperty("--unity-accent-hue",t.accentHue.value),r.style.setProperty("--unity-island-gap",`${t.islandGap.value}px`),r.style.setProperty("--unity-border-radius",`${t.borderRadius.value}px`),r.style.setProperty("--unity-background-secondary",t.bgSecondary.value),r.style.setProperty("--unity-background-tertiary",t.bgTertiary.value),r.style.setProperty("--bubble-radius",`${t.bubbleRadius.value}px`)},y=()=>{const r=`/**
 * Unity 2026 Custom Build
 * Generated via Unity Editor
 */

:root {
  --unity-accent-hue: ${t.accentHue.value};
  --unity-island-gap: ${t.islandGap.value}px;
  --unity-border-radius: ${t.borderRadius.value}px;
  --unity-background-secondary: ${t.bgSecondary.value};
  --unity-background-tertiary: ${t.bgTertiary.value};
  --bubble-radius: ${t.bubbleRadius.value}px;
}

/* Import the base theme */
@import url('https://lovinitvernon.github.io/hello-theme/Theme/Unity.css');
`,n=new Blob([r],{type:"text/css"}),i=URL.createObjectURL(n),s=document.createElement("a");s.href=i,s.download="Unity-Custom.theme.css",s.click()};Object.values(t).forEach(r=>{r.addEventListener("input",d)});a.addEventListener("click",y);l();d();
