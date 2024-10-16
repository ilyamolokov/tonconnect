"use client";

import { NextUIProvider } from "@nextui-org/system";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { ReactNode, useState } from "react";
import { BalanceProvider } from "../context/BalanceContext";

const manifestUrl = "http://localhost:3000/tonconnect-manifest.json";

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <TonConnectUIProvider manifestUrl={manifestUrl}>
          <BalanceProvider>{children}</BalanceProvider>
        </TonConnectUIProvider>
      </NextUIProvider>
    </QueryClientProvider>
  );
}
