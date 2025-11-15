import type { ColorScheme } from "@/hooks/useColorScheme";
import type { StartScreenPrompt } from "@openai/chatkit-react";

export const WORKFLOW_ID = process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID || "";
export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const GREETING = 'Готові допомогти зараз з будь-якого меблевого питання';
export const PLACEHOLDER_INPUT = 'Напишіть своє питання';
export const STARTER_PROMPTS: StartScreenPrompt[] = [];

export function getThemeConfig(_scheme: ColorScheme) {
  return {
    radius: 'pill' as const,
    density: 'normal' as const,
    color: {
      accent: { 
        primary: '#44aa00', 
        level: 1 as const
      }
    },
    typography: {
      baseSize: 16 as const,
      fontFamily: '"OpenAI Sans", system-ui, sans-serif'
    }
  };
}
