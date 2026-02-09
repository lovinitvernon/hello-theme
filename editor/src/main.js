import './style.css';
import { themeSchema } from './schema.js';

// DOM Elements
const elements = {
  tabNav: document.getElementById('tab-nav'),
  tabContainer: document.getElementById('tab-container'),
  exportBtn: document.getElementById('export-btn'),
  viewCodeBtn: document.getElementById('view-code-btn'),
  codeOverlay: document.getElementById('code-overlay'),
  closeCodeBtn: document.getElementById('close-code-btn'),
  themeCodeDisplay: document.getElementById('theme-code-display'),
  root: document.documentElement
};

// State
let currentTab = themeSchema[0].id;
const themeValues = {};

// Initialize themeValues from Schema
themeSchema.forEach(category => {
  category.fields.forEach(field => {
    themeValues[field.id] = field.value;
  });
});

// Build UI from Schema
const renderUI = () => {
  elements.tabNav.innerHTML = '';
  elements.tabContainer.innerHTML = '';

  themeSchema.forEach(category => {
    // Render Tab Button
    const btn = document.createElement('button');
    btn.className = `tab-btn ${currentTab === category.id ? 'active' : ''}`;
    btn.textContent = category.label;
    btn.onclick = () => {
      currentTab = category.id;
      renderUI();
    };
    elements.tabNav.appendChild(btn);

    // Render Tab Content
    if (currentTab === category.id) {
      const content = document.createElement('div');
      content.className = 'tab-content active';
      
      const group = document.createElement('section');
      group.className = 'control-group';
      group.innerHTML = `<h3>${category.label} Parameters</h3>`;

      category.fields.forEach(field => {
        const control = document.createElement('div');
        control.className = `control ${field.type === 'color' ? 'col' : ''}`;
        
        if (field.type === 'number') {
          control.innerHTML = `
            <div class="label-row">
              <label>${field.label}</label>
              <span class="value-display">${themeValues[field.id]}${field.unit}</span>
            </div>
            <input type="range" 
              min="${field.min}" 
              max="${field.max}" 
              step="${field.step || 1}" 
              value="${themeValues[field.id]}"
              oninput="window.updateField('${field.id}', this.value)"
            >
          `;
        } else if (field.type === 'color') {
          control.innerHTML = `
            <label>${field.label}</label>
            <div class="input-row">
              <input type="color" 
                value="${themeValues[field.id]}"
                oninput="window.updateField('${field.id}', this.value)"
              >
              <span class="hex-display">${themeValues[field.id].toUpperCase()}</span>
            </div>
          `;
        }
        group.appendChild(control);
      });
      
      content.appendChild(group);
      elements.tabContainer.appendChild(content);
    }
  });
};

// Global update handler for dynamic inputs
window.updateField = (fieldId, value) => {
  themeValues[fieldId] = value;
  updatePreview();
  renderUI(); // Re-render to update value displays
  updateCodePreview();
};

// Apply Values to CSS Preview
const updatePreview = () => {
  themeSchema.forEach(category => {
    category.fields.forEach(field => {
      const val = themeValues[field.id];
      const unit = field.unit || '';
      elements.root.style.setProperty(field.variable, `${val}${unit}`);
    });
  });
};

// Generate CSS Code
const generateCSS = () => {
  const timestamp = new Date().toLocaleDateString();
  let varBlock = '';
  
  themeSchema.forEach(cat => {
    cat.fields.forEach(f => {
      const unit = f.unit || '';
      varBlock += `  ${f.variable}: ${themeValues[f.id]}${unit};\n`;
    });
  });

  return `/**
 * @name Unity 2026 (Custom)
 * @author super.user
 * @version 2.2.0-schema
 * @description Professional custom build of Unity 2026. Generated on ${timestamp}.
 * @source https://github.com/lovinitvernon/hello-theme
*/

@import url('https://lovinitvernon.github.io/hello-theme/Theme/Unity.css');

:root {
${varBlock}}
`;
};

const updateCodePreview = () => {
  elements.themeCodeDisplay.textContent = generateCSS();
};

// Export as File
const exportTheme = () => {
  const css = generateCSS();
  const blob = new Blob([css], { type: 'text/css' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Unity_Custom.theme.css';
  a.click();
};

// UI Toggles
elements.viewCodeBtn.onclick = () => elements.codeOverlay.classList.remove('hidden');
elements.closeCodeBtn.onclick = () => elements.codeOverlay.classList.add('hidden');
elements.exportBtn.onclick = exportTheme;

// Init
renderUI();
updatePreview();
updateCodePreview();
