"use client";

import { useState } from "react";
import { ChatKitPanel } from "./ChatKitPanel";
import type { FactAction } from "./ChatKitPanel";
import type { ColorScheme } from "@/hooks/useColorScheme";

export function ChatKitApp() {
  const [theme] = useState<ColorScheme>("light");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <ChatKitPanel
        theme={theme}
        onWidgetAction={async (action: FactAction) => {
          console.log("Widget action:", action);
        }}
        onResponseEnd={() => {}}
        onThemeRequest={(scheme: ColorScheme) => {
          console.log("Theme request:", scheme);
        }}
      />
    </main>
  );
}
