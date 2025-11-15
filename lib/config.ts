import type { ChatKitOptions } from "@openai/chatkit";

export const chatKitConfig: ChatKitOptions = {
  theme: {
    colorScheme: 'light',
    radius: 'pill',
    density: 'normal',
    color: {
      grayscale: {
        hue: 360,
        tint: 9,
        shade: -4
      },
      accent: {
        primary: '#44aa00',
        level: 1
      },
      surface: {
        background: '#f5f5f5',
        foreground: '#2d7000'
      }
    },
    typography: {
      baseSize: 16,
      fontFamily: '"OpenAI Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      fontFamilyMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Courier New", monospace',
      fontSources: [
        {
          family: 'OpenAI Sans',
          src: 'https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Regular.woff2',
          weight: 400,
          style: 'normal',
          display: 'swap'
        }
      ]
    }
  },
  composer: {
    placeholder: 'Напишите свой вопрос',
    attachments: {
      enabled: false
    },
  },
  startScreen: {
    greeting: 'Готовы помочь сейчас по любому мебельному вопросу',
    prompts: [],
  },
};
