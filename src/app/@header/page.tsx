"use client";

import Balance from "@/components/balance";
import { TonConnectButton } from "@tonconnect/ui-react";

export default function Header() {
  return (
    <>
      <header>
        <nav className="border-b border-gray-200 px-4 lg:px-6 py-2.5 flex items-center justify-end gap-4">
          <Balance />

          <TonConnectButton />
        </nav>
      </header>
    </>
  );
}
