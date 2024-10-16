"use client";

import { NextUIProvider } from "@nextui-org/system";

import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { ReactNode } from "react";
import { BalanceProvider } from "../context/BalanceContext";

const manifestUrl = "http://localhost:3000/tonconnect-manifest.json";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <NextUIProvider>
      <TonConnectUIProvider manifestUrl={manifestUrl}>
        <BalanceProvider>{children}</BalanceProvider>
      </TonConnectUIProvider>
    </NextUIProvider>
  );
}
