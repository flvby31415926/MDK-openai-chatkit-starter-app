import type { ColorScheme } from "@/hooks/useColorScheme";

export const WORKFLOW_ID = process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID || "";
export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const GREETING = 'Готовы помочь сейчас по любому мебельному вопросу';
export const PLACEHOLDER_INPUT = 'Напишите свой вопрос';
export const STARTER_PROMPTS: string[] = [];

export function getThemeConfig(scheme: ColorScheme) {
  return {
    radius: 'pill' as const,
    density: 'normal' as const,
    color: {
      grayscale: { hue: 360, tint: 9, shade: -4 },
      accent: { primary: '#44aa00', level: 1 },
      surface: { background: '#f5f5f5', foreground: '#2d7000' }
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
  };
}
