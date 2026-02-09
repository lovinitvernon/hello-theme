export const themeSchema = [
  {
    id: 'general',
    label: 'General',
    fields: [
      {
        id: 'accent-hue',
        label: 'Accent Hue',
        type: 'number',
        variable: '--unity-accent-hue',
        min: 0,
        max: 360,
        value: 210,
        unit: ''
      },
      {
        id: 'island-gap',
        label: 'Island Gap',
        type: 'number',
        variable: '--unity-island-gap',
        min: 0,
        max: 32,
        value: 8,
        unit: 'px'
      },
      {
        id: 'border-radius',
        label: 'Border Radius',
        type: 'number',
        variable: '--unity-border-radius',
        min: 0,
        max: 40,
        value: 20,
        unit: 'px'
      },
      {
        id: 'opacity',
        label: 'Global Opacity',
        type: 'number',
        variable: '--unity-opacity',
        min: 0,
        max: 1,
        step: 0.01,
        value: 1,
        unit: ''
      }
    ]
  },
  {
    id: 'colors',
    label: 'Colors',
    fields: [
      {
        id: 'bg-primary',
        label: 'Island Background (Primary)',
        type: 'color',
        variable: '--unity-background-primary',
        value: '#0a0a0a'
      },
      {
        id: 'bg-secondary',
        label: 'Sidebar Background',
        type: 'color',
        variable: '--unity-background-secondary',
        value: '#161616'
      },
      {
        id: 'bg-tertiary',
        label: 'App Background',
        type: 'color',
        variable: '--unity-background-tertiary',
        value: '#050505'
      },
      {
        id: 'accent-saturation',
        label: 'Accent Saturation',
        type: 'number',
        variable: '--unity-accent-saturation',
        min: 0,
        max: 100,
        value: 99,
        unit: '%'
      },
      {
        id: 'accent-lightness',
        label: 'Accent Lightness',
        type: 'number',
        variable: '--unity-accent-lightness',
        min: 0,
        max: 100,
        value: 50,
        unit: '%'
      }
    ]
  },
  {
    id: 'chat',
    label: 'Chat Bubbles',
    fields: [
      {
        id: 'bubble-bg',
        label: 'Bubble Background',
        type: 'color',
        variable: '--unity-chat-bubble-background-color',
        value: '#161616'
      },
      {
        id: 'bubble-radius',
        label: 'Bubble Rounding',
        type: 'number',
        variable: '--unity-chat-bubble-border-radius',
        min: 0,
        max: 40,
        value: 24,
        unit: 'px'
      },
      {
        id: 'bubble-opacity',
        label: 'Bubble Shadows',
        type: 'number',
        variable: '--unity-chat-bubble-box-shadow-color-a',
        min: 0,
        max: 1,
        step: 0.01,
        value: 0.1,
        unit: ''
      }
    ]
  },
  {
    id: 'advanced',
    label: 'Advanced',
    fields: [
      {
        id: 'blur',
        label: 'Floating Blur',
        type: 'number',
        variable: '--unity-floating-blur-radius',
        min: 0,
        max: 20,
        value: 5,
        unit: 'px'
      },
      {
        id: 'gaps-toggle',
        label: 'Enable Island Gaps',
        type: 'number', // 0 or 1
        variable: '--unity-gaps',
        min: 0,
        max: 1,
        step: 1,
        value: 1,
        unit: ''
      }
    ]
  }
];
