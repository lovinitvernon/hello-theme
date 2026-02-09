import './style.css';

// DOM Elements
const elements = {
  tabBtns: document.querySelectorAll('.tab-btn'),
  tabContents: document.querySelectorAll('.tab-content'),
  exportBtn: document.getElementById('export-btn'),
  inputs: {
    accentHue: document.getElementById('accent-hue'),
    islandGap: document.getElementById('island-gap'),
    borderRadius: document.getElementById('border-radius'),
    bgSecondary: document.getElementById('bg-secondary'),
    bgTertiary: document.getElementById('bg-tertiary'),
    bubbleRadius: document.getElementById('bubble-radius'),
    bubbleBg: document.getElementById('bubble-bg'),
    opacity: document.getElementById('opacity'),
    blur: document.getElementById('blur'),
  },
  displays: {
    accentHue: document.getElementById('val-accent-hue'),
    islandGap: document.getElementById('val-island-gap'),
    borderRadius: document.getElementById('val-border-radius'),
    bgSecondary: document.getElementById('val-bg-secondary'),
    bgTertiary: document.getElementById('val-bg-tertiary'),
    bubbleRadius: document.getElementById('val-bubble-radius'),
    bubbleBg: document.getElementById('val-bubble-bg'),
    opacity: document.getElementById('val-opacity'),
    blur: document.getElementById('val-blur'),
  }
};

// Tab Switching Logic
elements.tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tabId = btn.getAttribute('data-tab');
    
    // Update buttons
    elements.tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Update content
    elements.tabContents.forEach(content => {
      content.classList.remove('active');
      if (content.id === `tab-${tabId}`) {
        content.classList.add('active');
      }
    });
  });
});

// Update Theme & Displays
const updateTheme = () => {
  const root = document.documentElement;
  const vals = elements.inputs;
  const disp = elements.displays;

  // Set CSS Variables
  root.style.setProperty('--unity-accent-hue', vals.accentHue.value);
  root.style.setProperty('--unity-island-gap', `${vals.islandGap.value}px`);
  root.style.setProperty('--unity-border-radius', `${vals.borderRadius.value}px`);
  root.style.setProperty('--unity-background-secondary', vals.bgSecondary.value);
  root.style.setProperty('--unity-background-tertiary', vals.bgTertiary.value);
  root.style.setProperty('--bubble-radius', `${vals.bubbleRadius.value}px`);
  root.style.setProperty('--bubble-bg', vals.bubbleBg.value);
  root.style.setProperty('--opacity', vals.opacity.value);
  root.style.setProperty('--blur-intensity', `${vals.blur.value}px`);

  // Update Value Displays
  disp.accentHue.textContent = vals.accentHue.value;
  disp.islandGap.textContent = `${vals.islandGap.value}px`;
  disp.borderRadius.textContent = `${vals.borderRadius.value}px`;
  disp.bgSecondary.textContent = vals.bgSecondary.value.toUpperCase();
  disp.bgTertiary.textContent = vals.bgTertiary.value.toUpperCase();
  disp.bubbleRadius.textContent = `${vals.bubbleRadius.value}px`;
  disp.bubbleBg.textContent = vals.bubbleBg.value.toUpperCase();
  disp.opacity.textContent = vals.opacity.value;
  disp.blur.textContent = `${vals.blur.value}px`;
};

// Export Functionality
const exportCss = () => {
  const vals = elements.inputs;
  const timestamp = new Date().toLocaleDateString();

  const themeFile = `/**
 * @name Unity 2026 (Custom)
 * @author super.user
 * @version 2.1.0-custom
 * @description A customized "Floating Island" theme generated on ${timestamp}.
 * @source https://github.com/lovinitvernon/hello-theme
*/

@import url('https://lovinitvernon.github.io/hello-theme/Theme/Unity.css');

:root {
  --unity-accent-hue: ${vals.accentHue.value};
  --unity-island-gap: ${vals.islandGap.value}px;
  --unity-border-radius: ${vals.borderRadius.value}px;
  --unity-background-secondary: ${vals.bgSecondary.value};
  --unity-background-tertiary: ${vals.bgTertiary.value};
  --bubble-radius: ${vals.bubbleRadius.value}px;
  --unity-chat-bubble-background-color: ${vals.bubbleBg.value};
  --unity-opacity: ${vals.opacity.value};
  --unity-floating-blur-radius: ${vals.blur.value}px;
}
`;

  const blob = new Blob([themeFile], { type: 'text/css' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Unity_Custom.theme.css';
  a.click();
};

// Event Listeners
Object.values(elements.inputs).forEach(input => {
  input.addEventListener('input', updateTheme);
});

elements.exportBtn.addEventListener('click', exportCss);

// Initialize
updateTheme();
