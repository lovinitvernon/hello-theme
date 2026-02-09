import './style.css';

const previewRoot = document.getElementById('preview-root');
const exportBtn = document.getElementById('export-btn');

// Inputs
const inputs = {
  accentHue: document.getElementById('accent-hue'),
  islandGap: document.getElementById('island-gap'),
  borderRadius: document.getElementById('border-radius'),
  bgSecondary: document.getElementById('bg-secondary'),
  bgTertiary: document.getElementById('bg-tertiary'),
  bubbleRadius: document.getElementById('bubble-radius'),
};

// Injection of Mock Discord UI
const injectMock = () => {
  previewRoot.innerHTML = `
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
  `;
};

// Syncing inputs to CSS Variables
const updateTheme = () => {
  const root = document.documentElement;
  root.style.setProperty('--unity-accent-hue', inputs.accentHue.value);
  root.style.setProperty('--unity-island-gap', `${inputs.islandGap.value}px`);
  root.style.setProperty('--unity-border-radius', `${inputs.borderRadius.value}px`);
  root.style.setProperty('--unity-background-secondary', inputs.bgSecondary.value);
  root.style.setProperty('--unity-background-tertiary', inputs.bgTertiary.value);
  root.style.setProperty('--bubble-radius', `${inputs.bubbleRadius.value}px`);
};

// Export Functionality
const exportCss = () => {
  const css = `/**
 * Unity 2026 Custom Build
 * Generated via Unity Editor
 */

:root {
  --unity-accent-hue: ${inputs.accentHue.value};
  --unity-island-gap: ${inputs.islandGap.value}px;
  --unity-border-radius: ${inputs.borderRadius.value}px;
  --unity-background-secondary: ${inputs.bgSecondary.value};
  --unity-background-tertiary: ${inputs.bgTertiary.value};
  --bubble-radius: ${inputs.bubbleRadius.value}px;
}

/* Import the base theme */
@import url('https://lovinitvernon.github.io/hello-theme/Theme/Unity.css');
`;

  const blob = new Blob([css], { type: 'text/css' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Unity-Custom.theme.css';
  a.click();
};

// Event Listeners
Object.values(inputs).forEach(input => {
  input.addEventListener('input', updateTheme);
});

exportBtn.addEventListener('click', exportCss);

// Initialize
injectMock();
updateTheme();
