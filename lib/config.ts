import type { ColorScheme } from "@/hooks/useColorScheme";

export const WORKFLOW_ID = process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID || "";
export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const GREETING = 'Готові допомогти зараз з будь-якого меблевого питання';
export const PLACEHOLDER_INPUT = 'Напишіть своє питання';
export const STARTER_PROMPTS: string[] = [];

export function getThemeConfig(scheme: ColorScheme) {
  return {
    radius: 'pill' as const,
    density: 'normal' as const,
    color: {
      accent: { 
        primary: '#44aa00', 
        level: 1 
      }
    },
    typography: {
      baseSize: 16,
      fontFamily: '"OpenAI Sans", system-ui, sans-serif'
    }
  };
}
